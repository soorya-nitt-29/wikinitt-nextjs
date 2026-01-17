'use client';

import { useState } from 'react';
import './globals.css';

const articles = {
  'agate-hostel': {
    id: 'agate-hostel',
    title: 'Agate Hostel',
    category: 'Hostels',
    content: `Agate Hostel is a men's residential facility at the National Institute of Technology, Tiruchirappalli (NIT Trichy), located in the southern part of the campus. The hostel serves as accommodation for undergraduate and postgraduate male students.

## History

Agate Hostel was established as part of NIT Trichy's ongoing expansion of residential infrastructure to accommodate the growing student population.

## Infrastructure and Facilities

### Building Structure

Agate Hostel is designed to accommodate approximately 300 students across multiple floors.

### Room Accommodation

The hostel primarily features triple occupancy rooms, designed to house three students per unit. Each room is equipped with individual beds, study tables, storage cupboards, and adequate ventilation.

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

The department offers undergraduate, postgraduate, and doctoral programs in computer science and engineering.`,
    references: ['NIT Trichy CSE Website']
  },
  'central-library': {
    id: 'central-library',
    title: 'Central Library',
    category: 'Campus',
    content: `The Central Library at NIT Trichy serves as the knowledge hub of the institute.

## Collections

The library maintains over 200,000 books covering various disciplines including engineering, science, management, and humanities.`,
    references: ['Library Official Website']
  },
  'pragyan': {
    id: 'pragyan',
    title: 'Pragyan',
    category: 'Student Life',
    content: `Pragyan is the annual techno-managerial festival of NIT Trichy, one of the largest student-run technical festivals in India.

## Overview

Pragyan has been conducted annually since 2005 and attracts participation from students across India and internationally.`,
    references: ['Pragyan Official Website']
  }
};

export default function WikiNITT() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentArticle, setCurrentArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (page, articleId = null) => {
    setCurrentPage(page);
    setCurrentArticle(articleId);
    setMenuOpen(false);
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

  const Header = () => (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => navigateTo('home')} className="text-2xl font-bold text-blue-600">
            WikiNITT
          </button>
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => navigateTo('home')} className="hover:text-blue-600">Home</button>
            <button onClick={() => navigateTo('category', 'Departments')} className="hover:text-blue-600">Departments</button>
            <button onClick={() => navigateTo('category', 'Hostels')} className="hover:text-blue-600">Hostels</button>
            <button onClick={() => navigateTo('category', 'Student Life')} className="hover:text-blue-600">Student Life</button>
            <button onClick={() => navigateTo('category', 'Campus')} className="hover:text-blue-600">Campus</button>
          </nav>
        </div>
        {menuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <button onClick={() => navigateTo('home')} className="block w-full text-left py-2 hover:bg-gray-100">Home</button>
            <button onClick={() => navigateTo('category', 'Departments')} className="block w-full text-left py-2 hover:bg-gray-100">Departments</button>
            <button onClick={() => navigateTo('category', 'Hostels')} className="block w-full text-left py-2 hover:bg-gray-100">Hostels</button>
            <button onClick={() => navigateTo('category', 'Student Life')} className="block w-full text-left py-2 hover:bg-gray-100">Student Life</button>
            <button onClick={() => navigateTo('category', 'Campus')} className="block w-full text-left py-2 hover:bg-gray-100">Campus</button>
          </nav>
        )}
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to WikiNITT</h1>
          <p className="text-xl mb-8">Your comprehensive knowledge platform for NIT Tiruchirappalli</p>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-6 py-4 rounded-lg text-gray-900 w-full max-w-2xl"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-4xl font-bold text-blue-600">4</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-4xl font-bold text-blue-600">4</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-4xl font-bold text-blue-600">4</div>
            <div className="text-gray-600">Updated This Week</div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Departments', 'Hostels', 'Student Life', 'Campus'].map((cat) => (
              <button
                key={cat}
                onClick={() => navigateTo('category', cat)}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg text-left"
              >
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-xl font-semibold">{cat}</h3>
                <p className="text-gray-600">1 article</p>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(articles).map((article) => (
              <button
                key={article.id}
                onClick={() => navigateTo('article', article.id)}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg text-left"
              >
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold">{article.title}</h3>
              </button>
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">WikiNITT</h3>
          <p className="text-gray-400">© 2025 WikiNITT. Built for NIT Trichy SPAM Selection.</p>
        </div>
      </footer>
    </div>
  );

  const ArticlePage = () => {
    const article = articles[currentArticle];
    if (!article) return <div>Article not found</div>;

    const headings = article.content.match(/^##\s+(.+)$/gm) || [];
    const toc = headings.map(h => h.replace('## ', ''));

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-4 text-sm text-gray-600">
            <button onClick={() => navigateTo('home')} className="hover:text-blue-600">Home</button>
            <span className="mx-2">›</span>
            <button onClick={() => navigateTo('category', article.category)} className="hover:text-blue-600">{article.category}</button>
            <span className="mx-2">›</span>
            <span>{article.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-20">
                <h3 className="font-bold text-lg mb-4">Contents</h3>
                <nav className="space-y-2">
                  {toc.map((heading, i) => (
                    <div key={i} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                      {heading}
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            <main className="lg:col-span-3">
              <article className="bg-white rounded-lg shadow p-8">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
                <div className="prose max-w-none">{formatContent(article.content)}</div>
                
                {article.references && (
                  <div className="mt-8 pt-6 border-t">
                    <h3 className="text-xl font-bold mb-3">References</h3>
                    <ol className="list-decimal list-inside">
                      {article.references.map((ref, i) => (
                        <li key={i}>{ref}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </article>
            </main>
          </div>
        </div>
      </div>
    );
  };

  const CategoryPage = () => {
    const categoryArticles = Object.values(articles).filter(a => a.category === currentArticle);
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">{currentArticle}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryArticles.map((article) => (
              <button
                key={article.id}
                onClick={() => navigateTo('article', article.id)}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg text-left"
              >
                <h3 className="text-xl font-semibold text-blue-600">{article.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'article' && <ArticlePage />}
      {currentPage === 'category' && <CategoryPage />}
    </>
  );
}
