import React, { useState } from 'react';

const articles = {
  'agate-hostel': {
    id: 'agate-hostel',
    title: 'Agate Hostel',
    category: 'Hostels',
    content: `Agate Hostel is a men's residential facility at the National Institute of Technology, Tiruchirappalli (NIT Trichy), located in the southern part of the campus.

## History

Agate Hostel was established as part of NIT Trichy's ongoing expansion of residential infrastructure to accommodate the growing student population.

## Infrastructure and Facilities

### Building Structure
Agate Hostel is designed to accommodate approximately 300 students across multiple floors.

### Room Accommodation
The hostel primarily features triple occupancy rooms, designed to house three students per unit.

## Student Life and Culture
The hostel serves as home to students from diverse academic disciplines and geographical regions across India.`,
    references: ['NIT Trichy Official Website', 'Campus Infrastructure Reports']
  },
  'computer-science-department': {
    id: 'computer-science-department',
    title: 'Department of Computer Science and Engineering',
    category: 'Departments',
    content: `The Department of Computer Science and Engineering (CSE) at NIT Trichy is one of the premier computer science departments in India.

## Overview
Established in 1984, the CSE department has grown to become a leading center for computer science education and research.

## Academic Programs
The department offers undergraduate, postgraduate, and doctoral programs.`,
    references: ['NIT Trichy CSE Department Website']
  }
};

export default function WikiNITT() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentArticle, setCurrentArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (page, articleId = null) => {
    setCurrentPage(page);
    setCurrentArticle(articleId);
  };

  const formatContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold mt-6 mb-3">{line.slice(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-semibold mt-4 mb-2">{line.slice(4)}</h3>;
      } else if (line.trim()) {
        return <p key={i} className="mb-3">{line}</p>;
      }
      return null;
    });
  };

  const HomePage = () => (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-blue-600">WikiNITT</h1>
          <nav className="mt-4 space-x-6">
            <button onClick={() => navigateTo('home')} className="text-gray-700 hover:text-blue-600">Home</button>
            <button onClick={() => navigateTo('category', 'Hostels')} className="text-gray-700 hover:text-blue-600">Hostels</button>
            <button onClick={() => navigateTo('category', 'Departments')} className="text-gray-700 hover:text-blue-600">Departments</button>
          </nav>
        </div>
      </header>

      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Welcome to WikiNITT</h2>
          <p className="text-xl mb-6">Your comprehensive knowledge platform for NIT Tiruchirappalli</p>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded text-gray-900 w-96"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold mb-6">Featured Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.values(articles).map((article) => (
            <button
              key={article.id}
              onClick={() => navigateTo('article', article.id)}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-left"
            >
              <span className="text-sm text-blue-600 font-semibold">{article.category}</span>
              <h4 className="text-xl font-bold mt-2">{article.title}</h4>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const ArticlePage = () => {
    const article = articles[currentArticle];
    if (!article) return <div>Article not found</div>;

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-3xl font-bold text-blue-600">WikiNITT</h1>
            <button onClick={() => navigateTo('home')} className="text-sm text-gray-600 hover:text-blue-600 mt-2">
              ← Back to Home
            </button>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <article className="bg-white p-8 rounded-lg shadow">
            <span className="text-sm text-blue-600 font-semibold">{article.category}</span>
            <h1 className="text-4xl font-bold mt-2 mb-6">{article.title}</h1>
            <div className="prose max-w-none">{formatContent(article.content)}</div>
            
            {article.references && (
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-xl font-bold mb-3">References</h3>
                <ol className="list-decimal list-inside">
                  {article.references.map((ref, i) => (
                    <li key={i} className="text-gray-700">{ref}</li>
                  ))}
                </ol>
              </div>
            )}
          </article>
        </div>
      </div>
    );
  };

  const CategoryPage = () => {
    const categoryArticles = Object.values(articles).filter(a => a.category === currentArticle);
    
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-3xl font-bold text-blue-600">WikiNITT</h1>
            <button onClick={() => navigateTo('home')} className="text-sm text-gray-600 hover:text-blue-600 mt-2">
              ← Back to Home
            </button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-8">{currentArticle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryArticles.map((article) => (
              <button
                key={article.id}
                onClick={() => navigateTo('article', article.id)}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-left"
              >
                <h3 className="text-xl font-bold">{article.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'article' && <ArticlePage />}
      {currentPage === 'category' && <CategoryPage />}
    </div>
  );
}
