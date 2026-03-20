import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles.tsx';

const ArticleView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <div className="p-10 text-center">Article not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 py-12">
      <Link to="/" className="text-[#D4AF37] mb-6 inline-block hover:underline">&larr; Back to Home</Link>
      <h1 className="text-4xl font-black mb-4">{article.title}</h1>
      <div className="text-gray-500 mb-8">{article.date} • {article.author}</div>
      <div className="prose max-w-none">
        {article.content}
      </div>
    </div>
  );
};

export default ArticleView;
