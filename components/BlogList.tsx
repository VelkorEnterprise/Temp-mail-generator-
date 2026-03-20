import React from 'react';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogArticles.tsx';

export const BlogList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-black mb-12 text-center">Privacy Hub Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogArticles.map(article => (
          <Link to={`/blog/${article.slug}`} key={article.id} className="block group">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
              <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">{article.category}</div>
              <h2 className="text-2xl font-black mb-4 group-hover:text-[#D4AF37] transition-colors">{article.title}</h2>
              <p className="text-gray-600 mb-6 flex-grow">{article.excerpt}</p>
              <div className="text-sm text-gray-400 font-medium">{article.date} • {article.readTime}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
