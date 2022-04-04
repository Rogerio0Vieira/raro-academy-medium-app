import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import apiClient from "../../services/api-client";

export const ArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  async function buscaArtigos(){
    const response = await apiClient.get<ArticleThumbnailProps[]>(
      '/artigos'
      );
      setArticles(response.data)
  }

  useEffect(() => {
    buscaArtigos();
  }, []);

  return (
    <div className="my-30">
      <ArticleList
        articles={articles}
      />
    </div>
  );
};