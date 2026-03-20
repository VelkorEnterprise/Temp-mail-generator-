import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogArticles } from '../data/blogArticles.tsx';

const BlogDetailView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return <div className="p-10 text-center">Blog post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 py-12">
      <Link to="/blog" className="text-[#D4AF37] mb-6 inline-block hover:underline">&larr; Back to Blog</Link>
      <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">{article.category}</div>
      <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{article.title}</h1>
      <div className="text-gray-500 mb-12 font-medium">{article.date} • {article.readTime}</div>
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {article.content}
      </div>
    </div>
  );
};

export default BlogDetailView;
