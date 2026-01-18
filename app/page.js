'use client';

import React, { useState, useEffect } from 'react';
import { Search, Bookmark, BookmarkCheck, Sun, Moon, Home, TrendingUp, Clock, BarChart3 } from 'lucide-react';

export default function WikiNITT() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [isDark, setIsDark] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  const [viewStats, setViewStats] = useState({});
  const [showStats, setShowStats] = useState(false);

  const articles = [
    {
      id: 1,
      title: "Computer Science and Engineering",
      category: "Departments",
      content: "The Department of Computer Science and Engineering at NIT Trichy is one of the premier departments in India. Established in 1984, it offers undergraduate, postgraduate, and doctoral programs. The department has state-of-the-art laboratories including AI Lab, Networks Lab, and Software Engineering Lab. Faculty members are engaged in cutting-edge research in areas like Machine Learning, Data Science, Computer Vision, and Cybersecurity. The department has strong industry connections with companies like Google, Microsoft, and Amazon regularly recruiting students. Annual technical fest pragyan and kurukshetra see major participation from CSE students.",
      tags: ["CSE", "Engineering", "Technology"]
    },
    {
      id: 2,
      title: "Electrical and Electronics Engineering",
      category: "Departments",
      content: "The Department of Electrical and Electronics Engineering has been a cornerstone of NIT Trichy since 1968. It offers programs in Power Systems, Control Systems, and Electronics. The department houses advanced laboratories for Power Electronics, Digital Signal Processing, and Embedded Systems. Research areas include Renewable Energy, Smart Grids, VLSI Design, and Robotics. Faculty members collaborate with organizations like ISRO, DRDO, and leading power sector companies. Students participate in various technical competitions and projects funded by government agencies.",
      tags: ["EEE", "Electrical", "Electronics"]
    },
    {
      id: 3,
      title: "Mechanical Engineering",
      category: "Departments",
      content: "Mechanical Engineering at NIT Trichy is one of the oldest and most respected departments, established in 1964. The department offers specializations in Thermal Engineering, Design, and Manufacturing. Facilities include CAD/CAM Lab, Robotics Lab, IC Engines Lab, and a well-equipped workshop. Research focuses on Advanced Manufacturing, Renewable Energy Systems, Computational Fluid Dynamics, and Automotive Engineering. The department has collaborations with industries like Ashok Leyland, BHEL, and TVS Motors. Students regularly win awards in national-level technical competitions.",
      tags: ["Mechanical", "Manufacturing", "Design"]
    },
    {
      id: 4,
      title: "Civil Engineering",
      category: "Departments",
      content: "The Department of Civil Engineering has been shaping infrastructure development since 1964. It offers programs in Structural Engineering, Environmental Engineering, and Transportation Engineering. The department has modern laboratories for Concrete Technology, Geotechnical Engineering, Highway Engineering, and Water Resources. Research areas include Sustainable Construction, Earthquake Engineering, Traffic Management, and Waste Water Treatment. Faculty collaborate with government agencies like NHAI, PWD, and private construction firms. Students engage in field projects and site visits regularly.",
      tags: ["Civil", "Infrastructure", "Construction"]
    },
    {
      id: 5,
      title: "Electronics and Communication Engineering",
      category: "Departments",
      content: "ECE Department at NIT Trichy is renowned for its excellence in electronics and communication technologies. Established in 1972, it offers programs in VLSI Design, Communication Systems, and Signal Processing. The department has cutting-edge labs for Microwave Engineering, Optical Communication, Embedded Systems, and Digital System Design. Research focuses on 5G Technologies, IoT, Semiconductor Devices, and Wireless Networks. Industry partnerships with companies like Qualcomm, Intel, and TI provide excellent placement opportunities. The department organizes workshops and seminars with industry experts regularly.",
      tags: ["ECE", "Communication", "VLSI"]
    },
    {
      id: 6,
      title: "Production Engineering",
      category: "Departments",
      content: "Production Engineering Department focuses on manufacturing processes and industrial management. Established in 1980, it offers unique programs combining manufacturing technology with management principles. Facilities include CNC Machines Lab, Metrology Lab, Industrial Engineering Lab, and CAD/CAM facilities. Research areas cover Advanced Manufacturing Processes, Supply Chain Management, Quality Control, and Automation. The department has strong ties with manufacturing industries and automotive companies. Students work on live industry projects and case studies as part of curriculum.",
      tags: ["Production", "Manufacturing", "Industrial"]
    },
    {
      id: 7,
      title: "Agate Hostel",
      category: "Hostels",
      content: "Agate is one of the premier hostels for male students at NIT Trichy. Known for its excellent facilities and vibrant community, Agate houses around 400 students. The hostel has spacious rooms, common areas, and a reading room. It features a gym, table tennis room, and badminton court. The mess serves quality food with separate vegetarian and non-vegetarian sections. Agate hosts the annual inter-hostel sports competition Ventura where students compete in various sports. The hostel has a strong culture of technical and cultural activities with students regularly winning prizes in college festivals.",
      tags: ["Hostel", "Boys", "Facilities"]
    },
    {
      id: 8,
      title: "Diamond Hostel",
      category: "Hostels",
      content: "Diamond Hostel is known for its academic atmosphere and competitive spirit. Home to approximately 380 male students, Diamond has excellent infrastructure including Wi-Fi connectivity, study rooms, and recreational facilities. The hostel has a well-maintained gym and sports facilities including volleyball and basketball courts. Diamond mess is popular for its varied menu and hygiene standards. The hostel actively participates in all inter-hostel competitions and cultural events. Diamond has produced numerous university rankers and successful alumni working in top companies worldwide.",
      tags: ["Hostel", "Boys", "Academic"]
    },
    {
      id: 9,
      title: "Coral Hostel",
      category: "Hostels",
      content: "Coral Hostel is famous for its friendly environment and cultural activities. Housing about 350 male students, Coral provides comfortable accommodation with modern amenities. The hostel features a music room, indoor games facility, and open-air theatre. Coral mess offers diverse cuisine options including North Indian, South Indian, and Chinese. The hostel is known for its strong performance in cultural competitions during Festember and Pragyan. Coral has an active hostel committee that organizes regular events, movie nights, and festival celebrations creating a home-away-from-home atmosphere.",
      tags: ["Hostel", "Boys", "Cultural"]
    },
    {
      id: 10,
      title: "Jade Hostel",
      category: "Hostels",
      content: "Jade is one of the most sought-after girls hostels at NIT Trichy. Accommodating around 300 female students, Jade offers secure and comfortable living spaces. The hostel has excellent security with 24/7 guards and CCTV surveillance. Facilities include a well-equipped gym, library, TV room, and common room. Jade mess provides nutritious meals with special attention to dietary requirements. The hostel organizes fitness programs, yoga sessions, and self-defense workshops. Jade students excel in both academics and extracurricular activities, maintaining high standards in all college events.",
      tags: ["Hostel", "Girls", "Safety"]
    },
    {
      id: 11,
      title: "Opal Hostel",
      category: "Hostels",
      content: "Opal Hostel provides a nurturing environment for female students at NIT Trichy. With capacity for 280 students, Opal combines safety with modern amenities. The hostel features spacious rooms, study areas, and recreational facilities. Security measures include biometric access and round-the-clock monitoring. Opal mess is known for its homely food and special festival meals. The hostel has an active cultural committee organizing events, celebrations, and competitions. Opal students are known for their leadership roles in various college clubs and their contributions to technical festivals.",
      tags: ["Hostel", "Girls", "Community"]
    },
    {
      id: 12,
      title: "Pearl Hostel",
      category: "Hostels",
      content: "Pearl Hostel is one of the newest additions to the girls hostel facilities. Housing 320 female students, Pearl boasts modern architecture and contemporary facilities. The hostel includes high-speed internet, study cubicles, and collaborative learning spaces. Pearl has a state-of-the-art gym, yoga room, and indoor sports facilities. The mess provides diverse menu options with focus on healthy eating. Pearl organizes regular wellness programs, career guidance sessions, and skill development workshops. The hostel has quickly built a reputation for academic excellence and active participation in college activities.",
      tags: ["Hostel", "Girls", "Modern"]
    },
    {
      id: 13,
      title: "Ruby Hostel",
      category: "Hostels",
      content: "Ruby Hostel is known for its vibrant community and excellent amenities for male students. Accommodating 400 students, Ruby has spacious rooms and well-maintained common areas. The hostel features a gym, table tennis hall, and outdoor sports courts. Ruby mess serves quality meals with options for special dietary needs. The hostel has a strong sports culture with teams regularly winning inter-hostel tournaments. Ruby also excels in cultural events with a dedicated music room and practice spaces. The hostel committee organizes regular events including birthday celebrations and festival gatherings.",
      tags: ["Hostel", "Boys", "Sports"]
    },
    {
      id: 14,
      title: "Sapphire Hostel",
      category: "Hostels",
      content: "Sapphire Hostel offers premium accommodation for male students at NIT Trichy. With 360 residents, Sapphire provides excellent infrastructure and facilities. The hostel has centralized Wi-Fi, air-conditioned study rooms, and recreational areas. Sapphire features a modern gym, billiards room, and sports equipment. The mess is known for its quality food and clean environment. Sapphire students are actively involved in technical clubs and entrepreneurship activities. The hostel has produced several startup founders and successful entrepreneurs. Regular talks and workshops by alumni are organized at the hostel.",
      tags: ["Hostel", "Boys", "Premium"]
    },
    {
      id: 15,
      title: "Turquoise Hostel",
      category: "Hostels",
      content: "Turquoise Hostel provides comfortable living for girls with focus on academic support. Housing 290 female students, Turquoise has dedicated study areas and group discussion rooms. The hostel maintains strict security protocols with controlled access. Facilities include a gym, library corner, and entertainment room. Turquoise mess offers nutritious meals with regular menu changes. The hostel organizes study groups, project collaboration sessions, and exam preparation support. Turquoise students maintain high academic standards with several toppers and scholarship recipients. The hostel also encourages participation in sports and cultural activities.",
      tags: ["Hostel", "Girls", "Academic"]
    },
    {
      id: 16,
      title: "Zircon Hostel",
      category: "Hostels",
      content: "Zircon is a newly constructed girls hostel with state-of-the-art facilities. Accommodating 310 students, Zircon features modern architecture and eco-friendly design. The hostel has solar panels, rainwater harvesting, and waste segregation systems. Facilities include a meditation room, fitness center, and collaborative workspaces. Zircon mess focuses on organic and healthy food options. The hostel promotes sustainability through various green initiatives and awareness programs. Zircon students are encouraged to participate in environmental clubs and social service activities. The hostel has quickly become popular for its modern amenities and environmental consciousness.",
      tags: ["Hostel", "Girls", "Sustainable"]
    },
    {
      id: 17,
      title: "Amethyst Hostel",
      category: "Hostels",
      content: "Amethyst Hostel is designed for senior male students offering greater independence. Housing 340 students, mostly final years, Amethyst provides a mature living environment. The hostel has individual study desks in rooms, high-speed internet, and printing facilities. Amethyst features a well-equipped gym and sports complex. The mess offers flexible timing for students with demanding schedules. The hostel supports placement preparation with mock interview rooms and group study areas. Amethyst has a strong alumni network with regular mentoring sessions. The hostel is known for its professional atmosphere while maintaining community spirit.",
      tags: ["Hostel", "Boys", "Senior"]
    },
    {
      id: 18,
      title: "Beryl Hostel",
      category: "Hostels",
      content: "Beryl Hostel caters to postgraduate and PhD students providing a research-oriented environment. With 250 residents, Beryl offers single and double occupancy rooms. The hostel has dedicated research workspaces, 24/7 internet connectivity, and seminar rooms. Facilities include a gym, library, and cafeteria with extended hours. Beryl promotes academic collaboration through regular research presentations and journal clubs. The hostel has a diverse community with students from various departments and countries. Beryl organizes guest lectures, workshops, and networking events. The mature environment helps students focus on their research and academic goals.",
      tags: ["Hostel", "PG", "Research"]
    },
    {
      id: 19,
      title: "Garnet Hostel",
      category: "Hostels",
      content: "Garnet Hostel is exclusively for international students and visiting scholars. Accommodating 150 guests, Garnet provides culturally diverse environment. The hostel has single rooms with attached bathrooms and modern furnishings. Facilities include a common kitchen for different cuisines, recreation room, and conference hall. Garnet organizes cultural exchange programs and international festival celebrations. The hostel provides support services for international students including local orientation and language assistance. Garnet has become a hub for cultural diversity promoting global understanding and friendship. Special events showcase different countries and their traditions.",
      tags: ["Hostel", "International", "Cultural"]
    },
    {
      id: 20,
      title: "Quartz Hostel",
      category: "Hostels",
      content: "Quartz Hostel is designated for first-year male students ensuring smooth transition to college life. Housing 420 freshers, Quartz has a supportive mentoring system. Senior students act as mentors guiding newcomers in academics and activities. The hostel has spacious study rooms, recreational facilities, and sports courts. Quartz mess provides comfort food helping students adjust to hostel life. The hostel organizes orientation programs, ice-breaking sessions, and team-building activities. Quartz focuses on helping students develop independence while providing necessary support. The hostel committee ensures all first-years feel welcomed and included in college community.",
      tags: ["Hostel", "Boys", "Freshers"]
    },
    {
      id: 21,
      title: "Moonstone Hostel",
      category: "Hostels",
      content: "Moonstone is the newest girls hostel with cutting-edge facilities and design. Accommodating 330 students, Moonstone features smart rooms with app-controlled amenities. The hostel has biometric security, CCTV monitoring, and emergency response systems. Facilities include a modern gym, dance studio, and multimedia room. Moonstone mess uses digital ordering system for personalized meal choices. The hostel promotes wellness through yoga classes, fitness programs, and mental health support. Moonstone has green spaces, rooftop garden, and eco-friendly infrastructure. The hostel represents the future of student accommodation at NIT Trichy.",
      tags: ["Hostel", "Girls", "Smart"]
    },
    {
      id: 22,
      title: "Topaz Hostel",
      category: "Hostels",
      content: "Topaz Hostel provides accommodation for sponsored and part-time male students. With 200 residents, Topaz offers flexible living arrangements. The hostel has individual work desks, good internet connectivity, and quiet study zones. Facilities include basic gym equipment and common recreation area. Topaz mess operates with extended timing considering varied schedules. The hostel understands unique needs of working students providing mature environment. Topaz has good industry interaction with regular talks by working professionals. The hostel community supports each other in balancing work and studies.",
      tags: ["Hostel", "Boys", "Working"]
    },
    {
      id: 23,
      title: "Student Activity Center (SAC)",
      category: "Student Life",
      content: "The Student Activity Center is the heart of campus life at NIT Trichy. This massive complex houses facilities for various clubs, cultural activities, and student organizations. SAC includes an auditorium with 1000 seating capacity, multiple seminar halls, music rooms, dance studios, and art galleries. The center is home to over 50 active student clubs covering technical, cultural, literary, and social domains. Major events like Festember (cultural festival) and Pragyan (technical festival) are coordinated from SAC. The building also houses student council offices, club rooms, and practice spaces. SAC remains open until late night during festival seasons supporting student creativity and innovation.",
      tags: ["Campus", "Activities", "Clubs"]
    },
    {
      id: 24,
      title: "Central Library",
      category: "Student Life",
      content: "NIT Trichy Central Library is one of the finest academic libraries in India. Spread across four floors, it houses over 2 lakh books, 15,000 journals, and extensive digital resources. The library subscribes to major databases like IEEE, Springer, Elsevier, and ACM. Facilities include reading halls with 600 seats, discussion rooms, digital library section, and rare book collection. The library operates 24/7 during examination periods. It has dedicated sections for different branches and research scholars. Library conducts workshops on research tools, reference management, and digital resources. Modern automation system allows easy book search and online reservations.",
      tags: ["Library", "Academic", "Resources"]
    },
    {
      id: 25,
      title: "Sports Complex",
      category: "Student Life",
      content: "The Sports Complex at NIT Trichy promotes physical fitness and sportsmanship. Spread over 20 acres, it includes facilities for cricket, football, hockey, basketball, volleyball, tennis, and badminton. The complex has an Olympic-size swimming pool, athletics track, and indoor stadium. Gymnasium has modern equipment for strength training and cardio. Sports hostel accommodates sportspersons during training. Professional coaches train students in various sports. The institute has excellent track record in inter-NIT sports meets. Annual sports day Olympus showcases talent across multiple disciplines. The complex also offers yoga and aerobics classes for fitness enthusiasts.",
      tags: ["Sports", "Fitness", "Athletics"]
    },
    {
      id: 26,
      title: "Health Center",
      category: "Student Life",
      content: "NIT Trichy Health Center provides comprehensive medical care to students, staff, and their families. Operating 24/7, it has qualified doctors, nurses, and support staff. The center includes general medicine, dental care, and emergency services. Well-equipped pharmacy dispenses medicines at subsidized rates. Ambulance service is available round the clock for emergencies. The center conducts regular health checkups, vaccination drives, and health awareness programs. Specialist doctors visit for consultations in ophthalmology, ENT, and orthopedics. Mental health support through counseling services is also available. The center maintains electronic health records for all registered patients.",
      tags: ["Health", "Medical", "Wellness"]
    },
    {
      id: 27,
      title: "Entrepreneurship Cell",
      category: "Student Life",
      content: "The Entrepreneurship Cell (E-Cell) at NIT Trichy fosters startup culture and innovation. It provides mentorship, resources, and networking opportunities for aspiring entrepreneurs. E-Cell organizes workshops on business planning, pitching, and fundraising. Annual entrepreneurship summit brings together investors, successful entrepreneurs, and students. The cell has incubation center supporting student startups with workspace and guidance. Many successful startups have emerged from NIT Trichy including tech companies and social enterprises. E-Cell connects students with angel investors and venture capitalists. Regular ideathons and business plan competitions encourage innovative thinking. The cell also facilitates industry internships and real-world project experience.",
      tags: ["Startup", "Innovation", "Business"]
    },
    {
      id: 28,
      title: "Training and Placement Cell",
      category: "Student Life",
      content: "The Training and Placement Cell ensures excellent career opportunities for NIT Trichy students. With 100% placement record, the cell attracts top companies from various sectors. Major recruiters include Microsoft, Google, Amazon, Goldman Sachs, and consulting firms. The cell organizes pre-placement training in aptitude, technical skills, and soft skills. Mock interviews and group discussions prepare students for placement process. Annual placement season sees over 200 companies visiting campus. Average package consistently ranks among top NITs. The cell also facilitates internships, allowing students to gain industry experience. Alumni network provides mentorship and guidance. Special focus on helping students explore different career paths beyond traditional engineering roles.",
      tags: ["Placement", "Career", "Training"]
    },
    {
      id: 29,
      title: "Festember - Cultural Festival",
      category: "Student Life",
      content: "Festember is South India's largest cultural festival held annually at NIT Trichy. This four-day extravaganza attracts over 50,000 participants from across the country. The festival features competitions in music, dance, drama, literature, and fine arts. Professional nights showcase performances by renowned artists and bands. Festember includes informal events, workshops, and pro-shows creating vibrant atmosphere. The festival is entirely student-organized with teams managing logistics, sponsorship, and marketing. Festember has become a platform for discovering talent with many participants pursuing careers in arts. The festival promotes cultural exchange and creativity while maintaining high professional standards.",
      tags: ["Festival", "Cultural", "Events"]
    },
    {
      id: 30,
      title: "Pragyan - Technical Festival",
      category: "Student Life",
      content: "Pragyan is NIT Trichy's international technical festival attracting participants from around the world. Held annually, it features competitions, workshops, exhibitions, and guest lectures. Technical events include robotics, coding, quizzing, and engineering challenges. Pragyan hosts international summits on technology trends and innovation. Guest lectures by industry leaders and researchers provide insights into cutting-edge technologies. The festival includes exhibitions showcasing student projects and industry innovations. Pragyan encourages interdisciplinary learning through varied events. Workshops on emerging technologies like AI, blockchain, and IoT are popular attractions. The festival serves as networking platform connecting students with industry and academia.",
      tags: ["Festival", "Technical", "Innovation"]
    },
    {
      id: 31,
      title: "NSS and Social Service",
      category: "Student Life",
      content: "National Service Scheme (NSS) at NIT Trichy promotes social responsibility and community service. With over 500 active volunteers, NSS undertakes various social welfare activities. Regular programs include teaching underprivileged children, blood donation camps, and environmental conservation. Annual camps focus on rural development, health awareness, and skill training. NSS volunteers participate in disaster relief and rehabilitation efforts. The unit organizes cleanliness drives, tree plantation, and waste management initiatives. Special emphasis on women empowerment and education for all. NSS provides platform for students to contribute to society while developing leadership skills. The program instills values of citizenship and social consciousness.",
      tags: ["Social", "Service", "Community"]
    },
    {
      id: 32,
      title: "Technical Clubs and Teams",
      category: "Student Life",
      content: "NIT Trichy boasts numerous technical clubs fostering hands-on learning and innovation. Spider (R&D Club) works on web development, app development, and research projects. Delta Force specializes in robotics and automation. Coding clubs like Pragyan and GeeksforGeeks prepare students for competitive programming. Electronics Club conducts workshops on Arduino, Raspberry Pi, and embedded systems. Automobile Club designs and builds racing vehicles for competitions. Astronomy Club organizes stargazing sessions and astrophotography workshops. These clubs participate in national competitions bringing laurels to the institute. Regular hackathons, workshops, and project showcases keep technical culture vibrant. Clubs collaborate with industry partners for real-world projects.",
      tags: ["Technical", "Clubs", "Projects"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!selectedArticle) return;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedArticle]);

  useEffect(() => {
    if (selectedArticle) {
      setViewStats(prev => ({
        ...prev,
        [selectedArticle.id]: (prev[selectedArticle.id] || 0) + 1
      }));
    }
  }, [selectedArticle]);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [...new Set(articles.map(a => a.category))];

  const toggleBookmark = (articleId) => {
    setBookmarks(prev =>
      prev.includes(articleId)
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  const isBookmarked = (articleId) => bookmarks.includes(articleId);

  const totalViews = Object.values(viewStats).reduce((a, b) => a + b, 0);
  const mostViewed = articles.reduce((max, article) =>
    (viewStats[article.id] || 0) > (viewStats[max.id] || 0) ? article : max
  , articles[0]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {selectedArticle && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-150"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      )}

      <header className={`sticky top-0 z-40 backdrop-blur-lg border-b transition-colors ${isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setSelectedArticle(null)}>
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg transform rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xl z-10">W</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  WikiNITT
                </h1>
                <p className="text-xs text-gray-500">NIT Trichy Encyclopedia</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowStats(!showStats)}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                <BarChart3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {showStats && (
        <div className={`border-b ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Views</p>
                  <p className="text-2xl font-bold">{totalViews}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Bookmark className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bookmarks</p>
                  <p className="text-2xl font-bold">{bookmarks.length}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Most Viewed</p>
                  <p className="text-lg font-semibold truncate">{mostViewed.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedArticle ? (
          <>
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 focus:outline-none focus:border-purple-500 transition-all ${
                    isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}
                />
              </div>
            </div>

            {categories.map(category => {
              const categoryArticles = filteredArticles.filter(a => a.category === category);
              if (categoryArticles.length === 0) return null;

              return (
                <div key={category} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                      {category}
                    </span>
                    <span className="ml-3 text-sm font-normal text-gray-500">
                      ({categoryArticles.length})
                    </span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryArticles.map(article => (
                      <div
                        key={article.id}
                        onClick={() => setSelectedArticle(article)}
                        className={`group cursor-pointer rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                          isDark
                            ? 'bg-gray-800 border-gray-700 hover:border-purple-500'
                            : 'bg-white border-gray-200 hover:border-purple-500'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold group-hover:text-purple-500 transition-colors pr-2">
                            {article.title}
                          </h3>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(article.id);
                            }}
                            className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                          >
                            {isBookmarked(article.id) ? (
                              <BookmarkCheck className="w-5 h-5 text-purple-500" />
                            ) : (
                              <Bookmark className="w-5 h-5 text-gray-400" />
                            )}
                          </button>
                        </div>

                        <p className={`text-sm mb-4 line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {article.content}
                        </p>

                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-2">
                            {article.tags.slice(0, 2).map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-500"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          {viewStats[article.id] && (
                            <div className="flex items-center space-x-1 text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span>{viewStats[article.id]} views</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your search.</p>
              </div>
            )}
          </>
        ) : (
          <article className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className={`mb-6 flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </button>

            <div className={`rounded-xl p-8 border-2 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="text-sm text-purple-500 font-semibold mb-2">
                    {selectedArticle.category}
                  </div>
                  <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    {selectedArticle.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    {viewStats[selectedArticle.id] && (
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{viewStats[selectedArticle.id]} views</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1">
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleBookmark(selectedArticle.id)}
                  className={`p-3 rounded-xl transition-all ${
                    isBookmarked(selectedArticle.id)
                      ? 'bg-purple-500 text-white'
                      : isDark
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {isBookmarked(selectedArticle.id) ? (
                    <BookmarkCheck className="w-6 h-6" />
                  ) : (
                    <Bookmark className="w-6 h-6" />
                  )}
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedArticle.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}>
                <p className="text-lg leading-relaxed whitespace-pre-line">
                  {selectedArticle.content}
                </p>
              </div>
            </div>
          </article>
        )}
      </main>

      <footer className={`mt-16 border-t ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2026 WikiNITT - Your Complete Guide to NIT Trichy
            </p>
            <p className={`text-xs mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              32 Articles • {bookmarks.length} Bookmarks • {totalViews} Total Views
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
