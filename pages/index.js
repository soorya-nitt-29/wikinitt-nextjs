import React, { useState } from 'react';
import { Search, Menu, X, Home, BookOpen, Building, Users, MapPin } from 'lucide-react';

// Sample Articles Data (including your Agate Hostel!)
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

Faculty members are actively involved in cutting-edge research in areas such as machine learning, computer vision, natural language processing, cybersecurity, and distributed systems.

## See Also

- NIT Trichy
- Academic Programs at NIT Trichy
- Research at NIT Trichy`,
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
    content: `The Central Library at NIT Trichy serves as the knowledge hub of the institute, providing extensive resources and services to support academic and research activities.

## Overview

The Central Library is a modern facility that houses a vast collection of books, journals, digital resources, and research materials. It operates as a vital resource for students, faculty, and researchers across all departments.

## Collections

### Print Collection
The library maintains an extensive collection of over 200,000 books covering various disciplines including engineering, science, management, and humanities. The collection includes textbooks, reference books, and research monographs.

### Digital Resources
Access to numerous online databases, e-journals, and e-books is provided through institutional subscriptions. Students and faculty can access these resources both on-campus and remotely.

## Facilities

The library features reading halls with comfortable seating, individual study carrels, discussion rooms for group study, and computer terminals for accessing digital resources. The building is equipped with Wi-Fi connectivity throughout.

## Services

Services include book borrowing, interlibrary loan, reference assistance, research support, and document delivery. The library staff provides guidance on literature search and reference management.

## Operating Hours

The library operates on extended hours during examination periods to accommodate increased student demand.

## See Also

- NIT Trichy Campus
- Academic Resources
- Student Facilities`,
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
    content: `Pragyan is the annual techno-managerial festival of NIT Trichy, one of the largest student-run technical festivals in India.

## Overview

Pragyan has been conducted annually since 2005 and attracts participation from students across India and internationally. The festival showcases technical innovation, entrepreneurship, and creative problem-solving.

## Events

The festival hosts a wide variety of events including technical workshops, coding competitions, robotics challenges, guest lectures by industry experts, exhibitions, and cultural performances. Events span multiple days and cover diverse domains of technology and management.

## Participation

Students from various colleges participate in competitions, workshops, and seminars. The festival also features keynote sessions by distinguished speakers from academia and industry.

## Impact

Pragyan provides a platform for students to showcase their technical skills, learn from experts, network with peers, and explore emerging technologies. It has become an integral part of the NIT Trichy student experience.

## Organization

The festival is entirely organized by student volunteers who handle everything from event planning to sponsorship and logistics.

## See Also

- Festember
- NIT Trichy
- Student Life at NIT Trichy`,
    references: [
      'Pragyan Official Website',
      'Festival Archives',
      'Student Activities Documentation'
    ]
  }
};

const autoLinkContent = (content) => {
  let linkedContent = content;
  Object.values(articles).forEach(article => {
    const regex = new RegExp(`\\b${article.title}\\b`, 'gi');
    linkedContent = linkedContent.replace(regex, (match) => `[${match}](#article-${article.id})`);
  });
  return linkedContent;
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
        const parts = line.split(/(\[.*?\]\(#article-.*?\))/);
        return (
          <p key={i} className="mb-3 text-gray-700 leading-relaxed">
            {parts.map((part, j) => {
              const linkMatch = part.match(/\[(.*?)\]\(#article-(.*?)\)/);
              if (linkMatch) {
                return (
                  <button key={j} onClick={() => navigateTo('article', linkMatch[2])}
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                    {linkMatch[1]}
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => navigateTo('home')} className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            WikiNITT
          </button>
          <nav className="hidden md:flex space-x-8">
            <NavLink icon={Home} text="Home" onClick={() => navigateTo('home')} />
            <NavLink icon={BookOpen} text="Departments" onClick={() => navigateTo('category', 'Departments')} />
            <NavLink icon={Building} text="Hostels" onClick={() => navigateTo('category', 'Hostels')} />
            <NavLink icon={Users} text="Student Life" onClick={() => navigateTo('category', 'Student Life')} />
            <NavLink icon={MapPin} text="Campus" onClick={() => navigateTo('category', 'Campus')} />
          </nav>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <MobileNavLink icon={Home} text="Home" onClick={() => navigateTo('home')} />
            <MobileNavLink icon={BookOpen} text="Departments" onClick={() => navigateTo('category', 'Departments')} />
            <MobileNavLink icon={Building} text="Hostels" onClick={() => navigateTo('category', 'Hostels')} />
            <MobileNavLink icon={Users} text="Student Life" onClick={() => navigateTo('category', 'Student Life')} />
            <MobileNavLink icon={MapPin} text="Campus" onClick={() => navigateTo('category', 'Campus')} />
          </nav>
        )}
      </div>
    </header>
  );

  const NavLink = ({ icon: Icon, text, onClick }) => (
    <button onClick={onClick} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
      <Icon size={18} />
      <span>{text}</span>
    </button>
  );

  const MobileNavLink = ({ icon: Icon, text, onClick }) => (
    <button onClick={onClick} className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
      <Icon size={18} />
      <span>{text}</span>
    </button>
  );

  const HomePage = () => {
    const categories = [
      { name: 'Departments', count: 1, icon: BookOpen },
      { name: 'Hostels', count: 1, icon: Building },
      { name: 'Student Life', count: 1, icon: Users },
      { name: 'Campus', count: 1, icon: MapPin }
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
                <input type="text" placeholder="Search articles..." value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <button onClick={handleSearch}
                  className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard number="4" label="Total Articles" />
            <StatCard number="4" label="Categories" />
            <StatCard number="4" label="Updated This Week" />
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Explore by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <CategoryCard key={cat.name} {...cat} onClick={() => navigateTo('category', cat.name)} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(articles).map((article) => (
                <ArticleCard key={article.id} {...article} onClick={() => navigateTo('article', article.id)} />
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  };

  const StatCard = ({ number, label }) => (
    <div className="bg-white rounded-lg shadow p-6 text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );

  const CategoryCard = ({ name, count, icon: Icon, onClick }) => (
    <button onClick={onClick} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-left">
      <Icon className="text-blue-600 mb-3" size={32} />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
      <p className="text-gray-600">{count} article{count !== 1 ? 's' : ''}</p>
    </button>
  );

  const ArticleCard = ({ title, category, onClick }) => (
    <button onClick={onClick} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-left">
      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">{category}</span>
      <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600">{title}</h3>
    </button>
  );

  const ArticlePage = () => {
    const article = articles[currentArticle];
    if (!article) return <div>Article not found</div>;

    const headings = article.content.match(/^##\s+(.+)$/gm) || [];
    const toc = headings.map(h => h.replace('## ', ''));
    const linkedContent = autoLinkContent(article.content);
    const relatedArticles = Object.values(articles).filter(a => a.category === article.category && a.id !== article.id).slice(0, 3);

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-4 text-sm text-gray-600">
            <button onClick={() => navigateTo('home')} className="hover:text-blue-600">Home</button>
            <span className="mx-2">›</span>
            <button onClick={() => navigateTo('category', article.category)} className="hover:text-blue-600">{article.category}</button>
            <span className="mx-2">›</span>
            <span>{article.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Contents</h3>
                <nav className="space-y-2">
                  {toc.map((heading, i) => (
                    <div key={i} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">{heading}</div>
                  ))}
                </nav>
              </div>
            </aside>

            <main className="lg:col-span-3">
              <article className="bg-white rounded-lg shadow-md p-8">
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">{article.category}</span>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>Last updated: January 2025</span>
                  </div>
                </div>

                <div className="prose max-w-none">{formatContent(linkedContent)}</div>

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

                {relatedArticles.length > 0 && (
                  <div className="mt-8 pt-6 border-t">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {relatedArticles.map((related) => (
                        <button key={related.id} onClick={() => navigateTo('article', related.id)}
                          className="text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="font-semibold text-blue-600 hover:text-blue-800">{related.title}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </main>
          </div>
        </div>
        <Footer />
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
              <ArticleCard key={article.id} {...article} onClick={() => navigateTo('article', article.id)} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WikiNITT</h3>
            <p className="text-gray-400">A comprehensive knowledge platform for NIT Tiruchirappalli.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => navigateTo('home')} className="block text-gray-400 hover:text-white">Home</button>
              <button onClick={() => navigateTo('category', 'Departments')} className="block text-gray-400 hover:text-white">Departments</button>
              <button onClick={() => navigateTo('category', 'Hostels')} className="block text-gray-400 hover:text-white">Hostels</button>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              <button onClick={() => navigateTo('category', 'Student Life')} className="block text-gray-400 hover:text-white">Student Life</button>
              <button onClick={() => navigateTo('category', 'Campus')} className="block text-gray-400 hover:text-white">Campus</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © 2025 WikiNITT. Built for NIT Tiruchirappalli. All rights reserved.
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'article' && <ArticlePage />}
      {currentPage === 'category' && <CategoryPage />}
    </div>
  );
}
