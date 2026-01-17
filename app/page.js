'use client';

import { useState, useEffect } from 'react';
import './globals.css';

const articles = {
  'agate-hostel': {
    id: 'agate-hostel',
    title: 'Agate Hostel',
    category: 'Hostels',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=400&fit=crop',
    content: `Agate Hostel is a men's residential facility at the National Institute of Technology, Tiruchirappalli (NIT Trichy), located in the southern part of the campus. The hostel serves as accommodation for undergraduate and postgraduate male students, providing housing and amenities essential for student life at the institute.

## History

Agate Hostel was established as part of NIT Trichy's ongoing expansion of residential infrastructure to accommodate the growing student population. The hostel was constructed to address the increasing demand for on-campus housing and to ensure that students have access to quality living facilities in proximity to academic buildings and other campus amenities.

The hostel is strategically positioned opposite to the side of the Logos building, forming part of the residential cluster in the campus layout. This placement facilitates easy access to central facilities including the academic complex, Central Library, sports facilities, and dining areas.

## Infrastructure and Facilities

### Building Structure

Agate Hostel is designed to accommodate approximately 300 students across multiple floors. The building follows the standard architectural pattern of NIT Trichy hostels, featuring a robust construction suited to the local climate and environmental conditions of Tiruchirappalli.

### Room Accommodation

The hostel primarily features triple occupancy rooms, designed to house three students per unit. Each room is equipped with basic furniture including individual beds, study tables and chairs, storage cupboards, adequate ventilation through windows and fans, and electrical outlets and lighting fixtures.

### Common Facilities

Agate Hostel provides several shared facilities for resident students including common rooms for recreational activities, internet connectivity through campus-wide network infrastructure, and laundry facilities for daily needs.

## Student Life and Culture

The hostel serves as home to students from diverse academic disciplines and geographical regions across India. This diversity contributes to a vibrant residential culture where students exchange ideas, cultural practices, and academic knowledge. The triple occupancy arrangement particularly facilitates the formation of close friendships and study groups.

Students at Agate Hostel participate in various activities organized during Pragyan and Festember, the institute's major cultural and technical festivals.

## See Also

- National Institute of Technology, Tiruchirappalli
- Logos Lecture Hall
- NIT Trichy Campus
- Central Library`,
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
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    content: `The Department of Computer Science and Engineering (CSE) at NIT Trichy is one of the premier computer science departments in India, known for its academic excellence and research contributions.

## Overview

Established in 1984, the Department of Computer Science and Engineering has grown to become a leading center for computer science education and research. The department offers undergraduate, postgraduate, and doctoral programs in computer science and engineering.

## Academic Programs

### Undergraduate Program
The B.Tech program in Computer Science and Engineering is a four-year program that provides comprehensive education in core computer science subjects including programming, algorithms, data structures, computer architecture, operating systems, databases, and artificial intelligence.

### Postgraduate Programs
The department offers M.Tech and Ph.D. programs in various specializations including artificial intelligence, machine learning, computer networks, and software engineering.

## Facilities

The department houses state-of-the-art laboratories equipped with modern computing facilities. Students have access to high-performance workstations, servers, and specialized software for various domains of computer science. The Central Library provides additional resources for research.

## Research

Faculty members are actively involved in cutting-edge research in areas such as machine learning, computer vision, natural language processing, cybersecurity, and distributed systems. Research collaborations with industry partners provide students with practical exposure.

## Notable Events

The department actively participates in organizing technical events during Pragyan, the annual techno-managerial festival of NIT Trichy.`,
    references: [
      'NIT Trichy CSE Department Official Website',
      'Academic Curriculum Documentation',
      'Department Annual Reports'
    ]
  },
  'central-library': {
    id: 'central-library',
    title: 'Central Library',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=400&fit=crop',
    content: `The Central Library at NIT Trichy serves as the knowledge hub of the institute, providing extensive resources and services to support academic and research activities.

## Overview

The Central Library is a modern facility that houses a vast collection of books, journals, digital resources, and research materials. It operates as a vital resource for students, faculty, and researchers across all departments, including the Department of Computer Science and Engineering and other engineering disciplines.

## Collections

### Print Collection
The library maintains an extensive collection of over 200,000 books covering various disciplines including engineering, science, management, and humanities. The collection includes textbooks, reference books, and research monographs.

### Digital Resources
Access to numerous online databases, e-journals, and e-books is provided through institutional subscriptions. Students and faculty can access these resources both on-campus and remotely.

## Facilities

The library features reading halls with comfortable seating, individual study carrels, discussion rooms for group study, and computer terminals for accessing digital resources. The building is equipped with Wi-Fi connectivity throughout.

Students often use the Central Library for preparing for competitions and workshops during Pragyan and other technical festivals.

## Services

Services include book borrowing, interlibrary loan, reference assistance, research support, and document delivery. The library staff provides guidance on literature search and reference management.

## Operating Hours

The library operates on extended hours during examination periods to accommodate increased student demand.`,
    references: [
      'Central Library Official Website',
      'Library Annual Report',
      'Library User Guide'
    ]
  },
  'pragyan': {
    id: 'pragyan',
    title: 'Pragyan',
    category: 'Student Life',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    content: `Pragyan is the annual techno-managerial festival of NIT Trichy, one of the largest student-run technical festivals in India.

## Overview

Pragyan has been conducted annually since 2005 and attracts participation from students across India and internationally. The festival showcases technical innovation, entrepreneurship, and creative problem-solving.

## Events

The festival hosts a wide variety of events including technical workshops, coding competitions, robotics challenges, guest lectures by industry experts, exhibitions, and cultural performances. Events span multiple days and cover diverse domains of technology and management.

Students from the Department of Computer Science and Engineering actively participate in organizing coding competitions and hackathons.

## Participation

Students from various colleges participate in competitions, workshops, and seminars. The festival also features keynote sessions by distinguished speakers from academia and industry. Participants often utilize resources from the Central Library for preparation.

## Impact

Pragyan provides a platform for students to showcase their technical skills, learn from experts, network with peers, and explore emerging technologies. It has become an integral part of the NIT Trichy student experience.

Students from Agate Hostel and other hostels actively participate in organizing and competing in various events.

## Organization

The festival is entirely organized by student volunteers who handle everything from event planning to sponsorship and logistics.`,
    references: [
      'Pragyan Official Website',
      'Festival Archives',
      'Student Activities Documentation'
    ]
  }
};

// Auto-linking function - BONUS FEATURE!
const autoLinkContent = (text, currentArticleId) => {
  let linkedText = text;
  Object.values(articles).forEach(article => {
    if (article.id !== currentArticleId) {
      const regex = new RegExp(`\\b(${article.title})\\b`, 'g');
      linkedText = linkedText.replace(regex, `{{LINK:${article.id}:$1}}`);
    }
  });
  return linkedText;
};

export default function WikiNITT() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentArticle, setCurrentArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navigateTo = (page, articleId = null) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setCurrentArticle(articleId);
      setMenuOpen(false);
      setSearchResults([]);
      setSearchQuery('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setLoading(false);
    }, 300);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = Object.values(articles).filter(
        a => a.title.toLowerCase().includes(query.toLowerCase()) ||
             a.category.toLowerCase().includes(query.toLowerCase()) ||
             a.content.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const formatContent = (text, articleId) => {
    const linkedText = autoLinkContent(text, articleId);
    const lines = linkedText.split('\n');
    
    return lines.map((line, i) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={i} className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white transition-colors">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        return (
          <h3 key={i} className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200 transition-colors">
            {line.slice(4)}
          </h3>
        );
      } else if (line.trim().startsWith('- ')) {
        return (
          <li key={i} className="ml-6 mb-2 text-gray-700 dark:text-gray-300 transition-colors">
            {line.slice(2)}
          </li>
        );
      } else if (line.trim()) {
        const parts = line.split(/({{LINK:.*?:.*?}})/g);
        return (
          <p key={i} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
            {parts.map((part, j) => {
              const linkMatch = part.match(/{{LINK:(.*?):(.*?)}}/);
              if (linkMatch) {
                return (
                  <button
                    key={j}
                    onClick={() => navigateTo('article', linkMatch[1])}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium transition-colors"
                  >
                    {linkMatch[2]}
                  </button>
                );
              }
              return <span key={j}>{part}</span>;
            })}
          </p>
        );
      }
      return null;
    });
  };

  const Header = () => (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => navigateTo('home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            WikiNITT
          </button>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button
              className="md:hidden p-2 text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
            
            <nav className="hidden md:flex gap-6">
              <NavButton onClick={() => navigateTo('home')}>Home</NavButton>
              <NavButton onClick={() => navigateTo('category', 'Departments')}>Departments</NavButton>
              <NavButton onClick={() => navigateTo('category', 'Hostels')}>Hostels</NavButton>
              <NavButton onClick={() => navigateTo('category', 'Student Life')}>Student Life</NavButton>
              <NavButton onClick={() => navigateTo('category', 'Campus')}>Campus</NavButton>
            </nav>
          </div>
        </div>
        
        {menuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-fadeIn">
            <MobileNavButton onClick={() => navigateTo('home')}>Home</MobileNavButton>
            <MobileNavButton onClick={() => navigateTo('category', 'Departments')}>Departments</MobileNavButton>
            <MobileNavButton onClick={() => navigateTo('category', 'Hostels')}>Hostels</MobileNavButton>
            <MobileNavButton onClick={() => navigateTo('category', 'Student Life')}>Student Life</MobileNavButton>
            <MobileNavButton onClick={() => navigateTo('category', 'Campus')}>Campus</MobileNavButton>
          </nav>
        )}
      </div>
    </header>
  );

  const NavButton = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
    >
      {children}
    </button>
  );

  const MobileNavButton = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
    >
      {children}
    </button>
  );

  const HomePage = () => {
    const categories = [
      { name: 'Departments', count: 1, icon: '🎓', color: 'from-blue-500 to-cyan-500' },
      { name: 'Hostels', count: 1, icon: '🏠', color: 'from-purple-500 to-pink-500' },
      { name: 'Student Life', count: 1, icon: '🎉', color: 'from-orange-500 to-red-500' },
      { name: 'Campus', count: 1, icon: '🏛️', color: 'from-green-500 to-teal-500' }
    ];

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Welcome to WikiNITT
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 animate-fadeIn" style={{animationDelay: '0.2s'}}>
              Your comprehensive knowledge platform for NIT Tiruchirappalli
            </p>
            <div className="max-w-3xl relative animate-fadeIn" style={{animationDelay: '0.4s'}}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, categories, topics..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-6 py-5 rounded-2xl text-gray-900 dark:text-white bg-white dark:bg-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-2xl transition-all"
                />
                <div className="absolute right-3 top-3 text-3xl">🔍</div>
              </div>
              
              {searchResults.length > 0 && (
                <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-h-96 overflow-y-auto animate-fadeIn">
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => navigateTo('article', result.id)}
                      className="w-full text-left px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-b dark:border-gray-700 last:border-0"
                    >
                      <div className="font-semibold text-gray-900 dark:text-white">{result.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{result.category}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <StatsCard number="4" label="Total Articles" icon="📚" delay="0s" />
            <StatsCard number="4" label="Categories" icon="📁" delay="0.1s" />
            <StatsCard number="4" label="Updated This Week" icon="🔄" delay="0.2s" />
          </div>

          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              Explore by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => (
                <CategoryCard key={cat.name} {...cat} delay={`${idx * 0.1}s`} onClick={() => navigateTo('category', cat.name)} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.values(articles).map((article, idx) => (
                <ArticleCard key={article.id} {...article} delay={`${idx * 0.1}s`} onClick={() => navigateTo('article', article.id)} />
              ))}
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    );
  };

  const StatsCard = ({ number, label, icon, delay }) => (
    <div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300 animate-fadeIn"
      style={{animationDelay: delay}}
    >
      <div className="text-5xl mb-3">{icon}</div>
      <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <div className="text-gray-600 dark:text-gray-400 font-medium">{label}</div>
    </div>
  );

  const CategoryCard = ({ name, count, icon, color, delay, onClick }) => (
    <button
      onClick={onClick}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 text-left transform hover:-translate-y-2 animate-fadeIn"
      style={{animationDelay: delay}}
    >
      <div className={`text-5xl mb-4 bg-gradient-to-br ${color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{count} article{count !== 1 ? 's' : ''}</p>
    </button>
  );

  const ArticleCard = ({ id, title, category, image, delay, onClick }) => (
    <button
      onClick={onClick}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 text-left transform hover:-translate-y-2 animate-fadeIn"
      style={{animationDelay: delay}}
    >
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-4 py-1 rounded-full mb-3 font-medium">
          {category}
        </span>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
      </div>
    </button>
  );

  const ArticlePage = () => {
    const article = articles[currentArticle];
    if (!article) return <div className="p-8 text-center">Article not found</div>;

    const headings = article.content.match(/^##\s+(.+)$/gm) || [];
    const toc = headings.map(h => h.replace('## ', ''));
    const relatedArticles = Object.values(articles).filter(
      a => a.category === article.category && a.id !== article.id
    );

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6 text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 animate-fadeIn">
            <button onClick={() => navigateTo('home')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </button>
            <span>›</span>
            <button onClick={() => navigateTo('category', article.category)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {article.category}
            </button>
            <span>›</span>
            <span className="text-gray-900 dark:text-white font-medium">{article.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-24 animate-fadeIn" style={{animationDelay: '0.2s'}}>
                <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  📑 Contents
                </h3>
                <nav className="space-y-3">
                  {toc.map((heading, i) => (
                    <div
                      key={i}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer pl-3 border-l-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 transition-all"
                    >
                      {heading}
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            <main className="lg:col-span-3">
              <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
                <div className="h-64 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="p-8 md:p-12">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-4 py-2 rounded-full mb-4 font-medium">
                    {article.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {article.title}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <span>📅 Last updated: January 2025</span>
                    <span>•</span>
                    <span>⏱️ 5 min read</span>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    {formatContent(article.content, article.id)}
                  </div>

                  {article.references && article.references.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                        📚 References
                      </h3>
                      <ol className="list-decimal list-inside space-y-2">
                        {article.references.map((ref, i) => (
                          <li key={i} className="text-gray-700 dark:text-gray-300">{ref}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {relatedArticles.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                        🔗 Related Articles
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {relatedArticles.map((related) => (
                          <button
                            key={related.id}
                            onClick={() => navigateTo('article', related.id)}
                            className="text-left p-5 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all hover:shadow-lg"
                          >
                            <div className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                              {related.title}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold animate-fadeIn">{currentArticle}</h1>
            <p className="text-xl mt-4 text-blue-100 animate-fadeIn" style={{animationDelay: '0.2s'}}>
              {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryArticles.map((article, idx) => (
              <ArticleCard key={article.id} {...article} delay={`${idx * 0.1}s`} onClick={() => navigateTo('article', article.id)} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 dark:bg-black text-white mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              WikiNITT
            </h3>
            <p className="text-gray-400 leading-relaxed">
              A comprehensive knowledge platform for NIT Tiruchirappalli.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => navigateTo('home')} className="block text-gray-400 hover:text-white transition-colors">
                Home
              </button>
              <button onClick={() => navigateTo('category', 'Departments')} className="block text-gray-400 hover:text-white transition-colors">
                Departments
              </button>
              <button onClick={() => navigateTo('category', 'Hostels')} className="block text-gray-400 hover:text-white transition-colors">
                Hostels
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Categories</h4>
            <div className="space-y-2">
              <button onClick={() => navigateTo('category', 'Student Life')} className="block text-gray-400 hover:text-white transition-colors">
                Student Life
              </button>
              <button onClick={() => navigateTo('category', 'Campus')} className="block text-gray-400 hover:text-white transition-colors">
                Campus
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Features</h4>
            <div className="space-y-2 text-gray-400">
              <div>✅ Auto-linking</div>
              <div>✅ Dark Mode</div>
              <div>✅ Live Search</div>
              <div>✅ Responsive Design</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 WikiNITT. Built for NIT Tiruchirappalli SPAM Selection Task.</p>
          <p className="mt-2 text-sm">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'article' && <ArticlePage />}
      {currentPage === 'category' && <CategoryPage />}
    </>
  );
}
