import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { ArticleView } from "../../components/ArticleView";
import apiClient from "../../services/api-client";

export const ArtigoPage = () => {
  const [article, setArticle] = useState<ArticleThumbnailProps>({
    imagem: '',
    titulo:'',
    resumo: '',
    dataPublicacao: new Date(),
    tempoLeitura: '',
    autor:{
      nome: '',
      avatar: '',
      id: 0,
    },
    editavel: false,
    id: 0,
    conteudo: ''
  });
  const [autor, setAutor] = useState({
    nome: article.autor.nome,
    avatar: article.autor.avatar,
  });
  const [dataPublicacao] = useState(new Date());
  const {id} = useParams()

  useEffect(() => {
    async function loadArticle() {
      const response = await apiClient.get<ArticleThumbnailProps>(`/artigos/${id}`);
      setArticle(response.data);
      setAutor(response.data.autor)
    }
    
    loadArticle();
  }, []);

  return (
    <div className="m-10">
      <ArticleView
        article={article.conteudo}
        autor={autor}
        dataPublicacao={dataPublicacao}
        tempoLeitura={ '10min' }
      />
    </div>
  );
};