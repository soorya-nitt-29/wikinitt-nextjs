import React, { useState } from 'react';

const articles = {
  'agate-hostel': {
    id: 'agate-hostel',
    title: 'Agate Hostel',
    category: 'Hostels',
    content: `Agate Hostel is a men's residential facility at the National Institute of Technology, Tiruchirappalli (NIT Trichy), located in the southern part of the campus. The hostel serves as accommodation for undergraduate and postgraduate male students, providing housing and amenities essential for student life at the institute.

## History

Agate Hostel was established as part of NIT Trichy's ongoing expansion of residential infrastructure to accommodate the growing student population. The hostel was constructed to address the increasing demand for on-campus housing and to ensure that students have access to quality living facilities in proximity to academic buildings and other campus amenities.

The hostel is strategically positioned opposite to the side of the Logos building, forming part of the residential cluster in the campus layout. This placement facilitates easy access to central facilities including the academic complex, library, sports facilities, and dining areas.

## Infrastructure and Facilities

### Building Structure

Agate Hostel is designed to accommodate approximately 300 students across multiple floors. The building follows the standard architectural pattern of NIT Trichy hostels, featuring a robust construction suited to the local climate and environmental conditions of Tiruchirappalli.

### Room Accommodation

The hostel primarily features triple occupancy rooms, designed to house three students per unit. Each room is equipped with basic furniture including individual beds, study tables and chairs, storage cupboards, adequate ventilation through windows and fans, and electrical outlets and lighting fixtures.

### Common Facilities

Agate Hostel provides several shared facilities for resident students including common rooms for recreational activities, internet connectivity through campus-wide network infrastructure, and laundry facilities for daily needs.

## Student Life and Culture

The hostel serves as home to students from diverse academic disciplines and geographical regions across India. This diversity contributes to a vibrant residential culture where students exchange ideas, cultural practices, and academic knowledge. The triple occupancy arrangement particularly facilitates the formation of close friendships and study groups.

## See Also

- National Institute of Technology, Tiruchirappalli
- Logos Lecture Hall
- NIT Trichy Campus`,
    references: [
      'NIT Trichy Official Website - Hostel Facilities',
      'NIT Trichy Student Handbook',
      'Campus Infrastructure Reports'
    ]
  },
  'computer-science-department': {
    id: 'computer-science-department',
    title: 'Department of Computer Science and Engineering',
    category: 'Departments',
    content: `The Department of Computer Science and Engineering (CSE) at NIT Trichy is one of the premier computer science departments in India, known for its academic excellence and research contributions.

## Overview

Established in 1984, the CSE department has grown to become a leading center for computer science education and research. The department offers undergraduate, postgraduate, and doctoral programs in computer science and engineering.

## Academic Programs

### Undergraduate Program
The B.Tech program in Computer Science and Engineering is a four-year program that provides comprehensive education in core computer science subjects including programming, algorithms, data structures, computer architecture, operating systems, databases, and artificial intelligence.

### Postgraduate Programs
The department offers M.Tech and Ph.D. programs in various specializations including artificial intelligence, machine learning, computer networks, and software engineering.

## Facilities

The department houses state-of-the-art laboratories equipped with modern computing facilities. Students have access to high-performance workstations, servers, and specialized software for various domains of computer science.

## Research

Faculty members are actively involved in cutting-edge research in areas such as machine learning, computer vision, natural language processing, cybersecurity, and distributed systems.`,
    references: [
      'NIT Trichy CSE Department Official Website',
      'Academic Curriculum Documentation'
    ]
  },
  'central-library': {
    id: 'central-library',
    title: 'Central Library',
    category: 'Campus',
    content: `The Central Library at NIT Trichy serves as the knowledge hub of the institute, providing extensive resources and services to support academic and research activities.

## Overview

The Central Library is a modern facility that houses a vast collection of books, journals, digital resources, and research materials. It operates as a vital resource for students, faculty, and researchers across all departments.

## Collections

### Print Collection
The library maintains an extensive collection of over 200,000 books covering various disciplines including engineering, science, management, and humanities.

### Digital Resources
Access to numerous online databases, e-journals, and e-books is provided through institutional subscriptions.

## Facilities

The library features reading halls with comfortable seating, individual study carrels, discussion rooms for group study, and computer terminals for accessing digital resources.`,
    references: [
      'Central Library Official Website',
      'Library User Guide'
    ]
  },
  'pragyan': {
    id: 'pragyan',
    title: 'Pragyan',
    category: 'Student Life',
    content: `Pragyan is the annual techno-managerial festival of NIT Trichy, one of the largest student-run technical festivals in India.

## Overview

Pragyan has been conducted annually since 2005 and attracts participation from students across India and internationally. The festival showcases technical innovation, entrepreneurship, and creative problem-solving.

## Events

The festival hosts a wide variety of events including technical workshops, coding competitions, robotics challenges, guest lectures by industry experts, exhibitions, and cultural performances.

## Organization

The festival is entirely organized by student volunteers who handle everything from event planning to sponsorship and logistics.`,
    references: [
      'Pragyan Official Website',
      'Festival Archives'
    ]
  }
};

export default function WikiNITT() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentArticle, setCurrentArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (page, articleId = null) => {
    setCurrentPage(page);
    setCurrentArticle(articleId);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const found = Object.values(articles).find(
        a => a.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (found) navigateTo('article', found.id);
    }
  };

  const formatContent = (text) => {
    const lines = text.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold mt-6 mb-3 text-gray-800">{line.slice(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-semibold mt-4 mb-2 text-gray-700">{line.slice(4)}</h3>;
      } else if (line.trim().startsWith('- ')) {
        return <li key={i} className="ml-6 mb-1 text-gray-700">{line.slice(2)}</li>;
      } else if (line.trim()) {
        return <p key={i} className="mb-3 text-gray-700 leading-relaxed">{line}</p>;
      }
      return null;
    });
  };

  const Header = () => (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => navigateTo('home')} className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            WikiNITT
          </button>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => navigateTo('home')} className="text-gray-700 hover:text-blue-600">Home</button>
            <button onClick={() => navigateTo('category', 'Departments')} className="text-gray-700 hover:text-blue-600">Departments</button>
            <button onClick={() => navigateTo('category', 'Hostels')} className="text-gray-700 hover:text-blue-600">Hostels</button>
            <button onClick={() => navigateTo('category', 'Student Life')} className="text-gray-700 hover:text-blue-600">Student Life</button>
            <button onClick={() => navigateTo('category', 'Campus')} className="text-gray-700 hover:text-blue-600">Campus</button>
          </nav>
          
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button onClick={() => navigateTo('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Home</button>
            <button onClick={() => navigateTo('category', 'Departments')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Departments</button>
            <button onClick={() => navigateTo('category', 'Hostels')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Hostels</button>
            <button onClick={() => navigateTo('category', 'Student Life')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Student Life</button>
            <button onClick={() => navigateTo('category', 'Campus')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Campus</button>
          </nav>
        )}
      </div>
    </header>
  );

  const HomePage = () => {
    const categories = [
      { name: 'Departments', count: 1 },
      { name: 'Hostels', count: 1 },
      { name: 'Student Life', count: 1 },
      { name: 'Campus', count: 1 }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to WikiNITT</h1>
            <p className="text-xl mb-8 text-blue-100">
              Your comprehensive knowledge platform for NIT Tiruchirappalli
            </p>
            <div className="max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  🔍
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Total Articles</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Updated This Week</div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Explore by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => navigateTo('category', cat.name)}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-left"
                >
                  <div className="text-3xl mb-3">📚</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{cat.name}</h3>
                  <p className="text-gray-600">{cat.count} article{cat.count !== 1 ? 's' : ''}</p>
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(articles).map((article) => (
                <button
                  key={article.id}
                  onClick={() => navigateTo('article', article.id)}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-left"
                >
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600">{article.title}</h3>
                </button>
              ))}
            </div>
          </section>
        </div>
        
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">WikiNITT</h3>
              <p className="text-gray-400 mb-4">A comprehensive knowledge platform for NIT Tiruchirappalli.</p>
              <p className="text-gray-500">© 2025 WikiNITT. Built for NIT Trichy SPAM Selection.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  const ArticlePage = () => {
    const article = articles[currentArticle];
    if (!article) return <div>Article not found</div>;

    const headings = article.content.match(/^##\s+(.+)$/gm) || [];
    const toc = headings.map(h => h.replace('## ', ''));

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-4 text-sm text-gray-600">
            <button onClick={() => navigateTo('home')} className="hover:text-blue-600">Home</button>
            <span className="mx-2">›</span>
            <button onClick={() => navigateTo('category', article.category)} className="hover:text-blue-600">
              {article.category}
            </button>
            <span className="mx-2">›</span>
            <span>{article.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Contents</h3>
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
              <article className="bg-white rounded-lg shadow-md p-8">
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
                  <div className="text-sm text-gray-600">Last updated: January 2025</div>
                </div>

                <div className="prose max-w-none">
                  {formatContent(article.content)}
                </div>

                {article.references && article.references.length > 0 && (
                  <div className="mt-8 pt-6 border-t">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">References</h3>
                    <ol className="list-decimal list-inside space-y-1">
                      {article.references.map((ref, i) => (
                        <li key={i} className="text-gray-700">{ref}</li>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">{currentArticle}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryArticles.map((article) => (
              <button
                key={article.id}
                onClick={() => navigateTo('article', article.id)}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-left"
              >
                <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800">{article.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'article' && <ArticlePage />}
      {currentPage === 'category' && <CategoryPage />}
    </div>
  );
}
