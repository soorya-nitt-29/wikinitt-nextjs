'use client'
import { useState, useEffect } from 'react'
import { Search, BookmarkCheck, Bookmark, Menu, X, Sun, Moon, BarChart3, Clock, TrendingUp, ChevronRight, Home } from 'lucide-react'

const Logo = () => (
  <div className="flex items-center space-x-3">
    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
      <span className="text-2xl font-black text-white">W</span>
    </div>
    <div>
      <h1 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WikiNITT</h1>
      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">NIT Trichy Encyclopedia</p>
    </div>
  </div>
)

export default function WikiNITT() {
  const [currentView, setCurrentView] = useState('home')
  const [currentArticleId, setCurrentArticleId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [bookmarks, setBookmarks] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  const articles = [
    {
      id: 1,
      title: "Computer Science and Engineering",
      category: "Departments",
      icon: "💻",
      content: `The Computer Science and Engineering department at NIT Trichy is one of the most prestigious departments. Established in 1984, it offers B.Tech, M.Tech, and Ph.D. programs with a curriculum covering AI, Machine Learning, Data Science, Blockchain, and Cybersecurity. Faculty members are highly qualified with publications in top-tier journals. The department has state-of-the-art labs and strong industry connections with Google, Microsoft, and Amazon. Student clubs like Delta Force and Spider focus on development and competitive programming.`,
      quickFacts: {
        "Established": "1984",
        "Programs": "B.Tech, M.Tech, Ph.D",
        "Faculty": "45+ Professors",
        "Labs": "15+ Research Labs"
      }
    },
    {
      id: 2,
      title: "Electrical and Electronics Engineering",
      category: "Departments",
      icon: "⚡",
      content: `The EEE department was founded in 1964 and focuses on power systems, control systems, electronics, and renewable energy. Students gain hands-on experience in labs for power electronics, electrical machines, and microprocessors. Research areas include smart grids, electric vehicles, and communication systems. The department collaborates with BHEL, Siemens, and ABB. Faculty secure research funding from DST, SERB, and DRDO. Placement opportunities span core electrical companies and software firms.`,
      quickFacts: {
        "Established": "1964",
        "Specializations": "Power, Control, Electronics",
        "Industry Partners": "BHEL, Siemens, ABB",
        "Research Grants": "₹10+ Crores"
      }
    },
    {
      id: 3,
      title: "Mechanical Engineering",
      category: "Departments",
      icon: "⚙️",
      content: `The Mechanical Engineering department, established in 1964, covers thermal engineering, design, manufacturing, and robotics. Students access workshops with CNC machines, 3D printers, and advanced manufacturing tools. Research includes CFD, FEA, composite materials, and renewable energy. The department collaborates with ISRO, DRDO, and automotive companies. Students participate in SAE BAJA and Formula Student competitions. Alumni hold leadership positions in Toyota, Tata Motors, and multinational corporations.`,
      quickFacts: {
        "Established": "1964",
        "Laboratories": "20+ Labs",
        "Research Areas": "Thermal, Design, Manufacturing",
        "Industry Tie-ups": "ISRO, DRDO, BHEL"
      }
    },
    {
      id: 4,
      title: "Civil Engineering",
      category: "Departments",
      icon: "🏗️",
      content: `The Civil Engineering department focuses on structural, geotechnical, transportation, and environmental engineering. Labs include concrete testing, soil mechanics, surveying, and hydraulics. Research covers earthquake engineering, sustainable construction, and water treatment. Faculty engage in consultancy for government and private organizations. Students learn AutoCAD, STAAD Pro, ANSYS, and GIS. Career opportunities include core civil companies, consulting firms, and government organizations like PWD and Railways.`,
      quickFacts: {
        "Focus Areas": "Structural, Geotech, Transportation",
        "Modern Labs": "15+ Specialized Labs",
        "Consultancy Projects": "100+ Projects",
        "Government Collaboration": "PWD, Railways, NHAI"
      }
    },
    {
      id: 5,
      title: "Electronics and Communication Engineering",
      category: "Departments",
      icon: "📡",
      content: `The ECE department offers curriculum in analog/digital electronics, communication systems, VLSI design, and embedded systems. Labs feature oscilloscopes, signal generators, and FPGA boards. Research areas include 5G/6G, IoT, image processing, and antenna design. Faculty receive funding from ISRO and DRDO. Students participate in design competitions and hackathons with internships at Qualcomm, Intel, and Texas Instruments. Placements are outstanding with offers from semiconductor and telecommunications firms.`,
      quickFacts: {
        "Core Areas": "VLSI, Communication, Signal Processing",
        "Research Centers": "8+ Specialized Centers",
        "Industry Partners": "Qualcomm, Intel, TI",
        "International Collaborations": "15+ Universities"
      }
    },
    {
      id: 6,
      title: "Production Engineering",
      category: "Departments",
      icon: "🏭",
      content: `The Production Engineering department focuses on manufacturing processes, industrial engineering, and operations management. The curriculum includes manufacturing technology, metrology, automation, operations research, and supply chain management. Research covers additive manufacturing, lean manufacturing, and Industry 4.0. Faculty engage in industry projects with manufacturing companies. Students learn through industrial training and live projects. Careers include production management, quality assurance, and consulting positions.`,
      quickFacts: {
        "Specializations": "Manufacturing, Industrial Engineering",
        "Workshops": "Advanced CNC, Robotics",
        "Industry Focus": "Automotive, Aerospace",
        "Placement Sectors": "Core, Consulting, Analytics"
      }
    },
    {
      id: 7,
      title: "Agate Hostel",
      category: "Hostels",
      icon: "🏠",
      content: `Agate is a premier girls' hostel with spacious rooms, study tables, beds, and cupboards. Common areas include TV room, reading room, and recreational spaces. The mess provides nutritious food with varied menus. The hostel has 24/7 security, medical facilities, and housekeeping. Wi-Fi connectivity is available throughout. Students form strong bonds through hostel events and cultural programs. Senior students mentor juniors, creating a supportive atmosphere.`,
      quickFacts: {
        "Type": "Girls' Hostel",
        "Capacity": "300+ Students",
        "Facilities": "Wi-Fi, Mess, Recreation",
        "Security": "24/7 Surveillance"
      }
    },
    {
      id: 8,
      title: "Diamond Hostel",
      category: "Hostels",
      icon: "💎",
      content: `Diamond is a boys' hostel near academic buildings and sports facilities. Rooms are double or triple occupancy with essential furniture. The mess serves three meals with North and South Indian cuisines. The hostel has strong sports culture with teams in cricket, football, basketball, and volleyball. Cultural activities include music nights and movie screenings. Common rooms have TV and indoor games facilities.`,
      quickFacts: {
        "Type": "Boys' Hostel",
        "Occupancy": "Double/Triple",
        "Mess": "North & South Indian",
        "Sports": "Active Inter-Hostel Teams"
      }
    },
    {
      id: 9,
      title: "Coral Hostel",
      category: "Hostels",
      icon: "🏘️",
      content: `Coral is a girls' hostel known for its supportive environment. Rooms are well-ventilated with modern furniture and proper lighting. The mess maintains high hygiene standards. Residents actively participate in cultural and sports competitions. Wi-Fi connectivity and a lending library are available. Safety features include controlled entry and CCTV surveillance.`,
      quickFacts: {
        "Type": "Girls' Hostel",
        "Infrastructure": "Modern, Well-ventilated",
        "Mess Committee": "Student-run",
        "Cultural Participation": "High Achiever"
      }
    },
    {
      id: 10,
      title: "Jade Hostel",
      category: "Hostels",
      icon: "🏢",
      content: `Jade is a boys' hostel known for academic excellence. Furnished rooms and designated study areas support collaborative learning. The mess serves balanced meals with extended hours during exams. Residents participate in sports tournaments and organize cultural events. Good internet connectivity enables online classes and coding competitions.`,
      quickFacts: {
        "Type": "Boys' Hostel",
        "Focus": "Academic Excellence",
        "Facilities": "Study Areas, Wi-Fi",
        "Events": "Cultural, Technical, Sports"
      }
    },
    {
      id: 11,
      title: "Opal Hostel",
      category: "Hostels",
      icon: "🌟",
      content: `Opal is a girls' hostel with a home-like atmosphere. Well-maintained rooms with essential furniture and storage. The mess provides nutritious meals with regional cuisines. Residents engage in technical fests and cultural events. Dedicated spaces for group studies. Senior students conduct study sessions for juniors. Security includes restricted entry and CCTV monitoring.`,
      quickFacts: {
        "Type": "Girls' Hostel",
        "Atmosphere": "Home-like, Supportive",
        "Mess": "Regional Cuisines",
        "Student Leadership": "High Involvement"
      }
    },
    {
      id: 12,
      title: "Emerald Hostel",
      category: "Hostels",
      icon: "🏛️",
      content: `Emerald is a boys' hostel with prime campus location. Common rooms on each floor for discussions and recreation. The mess focuses on hygiene and taste with regular feedback. Residents excel in academics and extracurricular activities. Many win accolades in competitions and fests. Active sports participation in inter-hostel tournaments.`,
      quickFacts: {
        "Type": "Boys' Hostel",
        "Location": "Prime Campus Location",
        "Mess": "Hygienic, Feedback-driven",
        "Excellence": "Academic & Extracurricular"
      }
    },
    {
      id: 13,
      title: "Amber Hostel",
      category: "Hostels",
      icon: "🏡",
      content: `Amber is a girls' hostel with excellent facilities. Spacious rooms with proper ventilation and lighting. Mess offers vegetarian and non-vegetarian options. Vibrant cultural scene with music events and dance performances. Wi-Fi throughout premises. Common areas include TV room and reading room. Strict safety protocols with controlled access.`,
      quickFacts: {
        "Type": "Girls' Hostel",
        "Infrastructure": "Spacious, Well-lit",
        "Mess": "Veg & Non-veg Options",
        "Cultural Scene": "Vibrant & Active"
      }
    },
    {
      id: 14,
      title: "Pearl Hostel",
      category: "Hostels",
      icon: "🏰",
      content: `Pearl is a boys' hostel with strong community spirit. Standard double or triple occupancy rooms. The mess serves three meals with regular menu changes. Students actively participate in sports and field competitive teams. Good internet access for online projects. Inclusive environment promoting diversity.`,
      quickFacts: {
        "Type": "Boys' Hostel",
        "Community": "Strong Spirit",
        "Sports": "Competitive Teams",
        "Environment": "Inclusive & Diverse"
      }
    },
    {
      id: 15,
      title: "Ruby Hostel",
      category: "Hostels",
      icon: "💍",
      content: `Ruby is a girls' hostel emphasizing comfort and security. Well-furnished rooms with regular housekeeping. The mess provides nutritious meals under hygienic conditions. Residents actively involved in campus life and technical fests. Common facilities include study areas and entertainment rooms. 24/7 surveillance with controlled access.`,
      quickFacts: {
        "Type": "Girls' Hostel",
        "Standards": "High Cleanliness",
        "Mess": "Nutritious & Tasty",
        "Campus Involvement": "Very Active"
      }
    },
    {
      id: 16,
      title: "Sapphire Hostel",
      category: "Hostels",
      icon: "🔷",
      content: `Sapphire is a boys' hostel with quality accommodation. Friendly atmosphere helping new students adjust. Common areas with TV and indoor games. The mess provides wholesome meals with diverse options. Active engagement in inter-hostel competitions. Internet connectivity throughout. Regular hostel meetings for feedback.`,
      quickFacts: {
        "Type": "Boys' Hostel",
        "Atmosphere": "Friendly",
        "Mess": "Diverse Menu",
        "Competitions": "Sports & Cultural"
      }
    },
    {
      id: 17,
      title: "Topaz Hostel",
      category: "Hostels",
      icon: "🏆",
      content: `Topaz is a girls' hostel focusing on student welfare. Well-designed rooms with adequate space and lighting. Mess maintains high standards with strict hygiene. Students excel in technical events and cultural performances. Common areas provide spaces for collaboration. Comprehensive security measures with emergency response systems.`,
      quickFacts: {
        "Type": "Girls' Hostel",
        "Focus": "Welfare & Success",
        "Mess": "High Standards",
        "Student Excellence": "Technical & Cultural"
      }
    },
    {
      id: 18,
      title: "Zircon Hostel",
      category: "Hostels",
      icon: "🏅",
      content: `Zircon is a boys' hostel with well-maintained infrastructure. Standard rooms with comfortable furniture. The mess includes regional and popular dishes. Enthusiastic participation in campus events and tournaments. Internet access supporting academic work. Administration promotes balance between academics and extracurriculars.`,
      quickFacts: {
        "Type": "Boys' Hostel",
        "Infrastructure": "Well-maintained",
        "Mess": "Regional & Popular Dishes",
        "Tradition": "Strong Competition Teams"
      }
    },
    {
      id: 19,
      title: "Crystal Hostel",
      category: "Hostels",
      icon: "💠",
      content: `Crystal is a girls' hostel combining modern amenities with welcoming atmosphere. Well-appointed rooms with adequate storage. Mess operations focus on nutrition and taste. Active participation in technical clubs and cultural organizations. Study rooms and entertainment areas available. Strict security protocols enforced.`,
      quickFacts: {
        "Type": "Girls' Hostel",
        "Amenities": "Modern",
        "Mess": "Nutrition-focused",
        "Leadership": "Encouraged"
      }
    },
    {
      id: 20,
      title: "Turquoise Hostel",
      category: "Hostels",
      icon: "🌊",
      content: `Turquoise is a boys' hostel with quality accommodation. Vibrant community from various branches. The mess serves North and South Indian cuisines. Strong tradition in sports including cricket and football. Internet connectivity and common room facilities. Administration responsive to student needs.`,
      quickFacts: {
        "Type": "Boys' Hostel",
        "Community": "Vibrant & Diverse",
        "Mess": "North & South Indian",
        "Sports Tradition": "Cricket, Football, Athletics"
      }
    },
    {
      id: 21,
      title: "Garnet Hostel",
      category: "Hostels",
      icon: "🎯",
      content: `Garnet is a girls' hostel with modern amenities. Spacious rooms with proper ventilation. Mess provides hygienic and nutritious meals. Known for achievements in academics, sports, and culture. Common areas for study and social gatherings. Comprehensive security measures including surveillance.`,
      quickFacts: {
        "Type": "Girls' Hostel",
        "Infrastructure": "Spacious & Modern",
        "Achievements": "Academic, Sports, Cultural",
        "Security": "Comprehensive Measures"
      }
    },
    {
      id: 22,
      title: "Aquamarine Hostel",
      category: "Hostels",
      icon: "🌀",
      content: `Aquamarine is a boys' hostel conveniently located on campus. Well-furnished rooms for double or triple occupancy. The mess focuses on hygiene and nutrition. Active participation in campus life and sports. Common facilities include study areas and TV rooms. Internet connectivity supports academic work.`,
      quickFacts: {
        "Type": "Boys' Hostel",
        "Location": "Convenient Campus Location",
        "Mess": "Hygienic & Nutritious",
        "Campus Life": "Very Active"
      }
    },
    {
      id: 23,
      title: "FESTEMBER",
      category: "Student Life",
      icon: "🎉",
      content: `FESTEMBER is the annual cultural festival of NIT Trichy, one of South India's largest student-run cultural festivals. Held in September, it attracts thousands of participants from colleges across India. The four-day extravaganza features music, dance, drama, art, literary events, and informal competitions. Professional nights feature performances by renowned artists and celebrities. The festival showcases student talent through various competitions and provides a platform for cultural expression. Events include classical and Western music, solo and group dance, theater, fashion shows, and gaming competitions. FESTEMBER has become a brand synonymous with cultural excellence and grand celebrations.`,
      quickFacts: {
        "Held": "September",
        "Duration": "4 Days",
        "Participants": "30,000+ Students",
        "Events": "100+ Competitions"
      }
    },
    {
      id: 24,
      title: "PRAGYAN",
      category: "Student Life",
      icon: "🔬",
      content: `PRAGYAN is the annual international techno-managerial festival of NIT Trichy. Held in March, it is one of the biggest technical festivals in India. The festival features technical competitions, workshops, guest lectures, exhibitions, and entertainment events. Categories include robotics, coding, engineering design, management, quizzing, and gaming. International participation and industry collaboration make it a premier technical event. Professional nights and celebrity lectures add to the excitement. Students get opportunities to network with industry professionals and showcase their technical prowess. PRAGYAN promotes innovation, technical skills, and entrepreneurship among students.`,
      quickFacts: {
        "Held": "March",
        "Type": "Techno-Managerial",
        "Footfall": "50,000+ Students",
        "Prize Money": "₹15+ Lakhs"
      }
    },
    {
      id: 25,
      title: "Spider R&D Club",
      category: "Student Life",
      icon: "🕷️",
      content: `Spider is the official Research and Development club of NIT Trichy focusing on software development and innovation. The club works on web development, mobile app development, machine learning, and other cutting-edge technologies. Spider maintains various institute portals and applications used by students and administration. Members work on real-world projects, participate in hackathons, and organize workshops. The club provides a platform for students to learn new technologies and contribute to open-source projects. Spider has developed several useful applications for the NIT Trichy community and collaborates with other technical clubs for college events.`,
      quickFacts: {
        "Focus": "Software Development",
        "Projects": "Web, Mobile, ML",
        "Activities": "Hackathons, Workshops",
        "Impact": "Campus Applications"
      }
    },
    {
      id: 26,
      title: "Delta Force",
      category: "Student Life",
      icon: "🚀",
      content: `Delta Force is a premier technical club at NIT Trichy specializing in competitive programming and software development. Members participate in coding competitions on platforms like Codeforces, CodeChef, and LeetCode. The club organizes coding contests, algorithm workshops, and programming bootcamps. Delta Force prepares students for technical interviews and placements through regular practice sessions. The club has produced numerous successful competitive programmers who have achieved high ratings and rankings. Members collaborate on projects involving algorithms, data structures, and system design. Delta Force fosters a culture of continuous learning and excellence in computer science.`,
      quickFacts: {
        "Focus": "Competitive Programming",
        "Platforms": "Codeforces, CodeChef",
        "Activities": "Contests, Workshops",
        "Success": "High Achievers"
      }
    },
    {
      id: 27,
      title: "The Literary Society",
      category: "Student Life",
      icon: "📚",
      content: `The Literary Society is the hub for literature enthusiasts at NIT Trichy. The club organizes debates, quizzes, creative writing workshops, poetry sessions, and book discussions. Members participate in inter-college literary competitions and organize events during FESTEMBER. The society publishes a literary magazine featuring student writings including poems, short stories, and articles. Regular sessions help students improve their communication, writing, and critical thinking skills. The club provides a platform for students passionate about literature, debating, and public speaking to express themselves and hone their talents.`,
      quickFacts: {
        "Activities": "Debates, Quizzes, Writing",
        "Magazine": "Student Publications",
        "Events": "FESTEMBER Participation",
        "Skills": "Communication, Critical Thinking"
      }
    },
    {
      id: 28,
      title: "Music and Dance Clubs",
      category: "Student Life",
      icon: "🎵",
      content: `NIT Trichy has vibrant music and dance clubs catering to various interests. The Western Music Club focuses on rock, pop, and contemporary music with regular jamming sessions and performances. The Indian Music Club promotes classical and folk music traditions. Dance clubs include groups for classical dance forms like Bharatanatyam and contemporary styles like hip-hop and salsa. These clubs perform at college events, competitions, and festivals. Regular practice sessions, workshops by professional artists, and annual showcases provide opportunities for students to develop their talents. The clubs create a culturally rich environment on campus.`,
      quickFacts: {
        "Clubs": "Western, Indian Music, Dance",
        "Styles": "Classical, Contemporary",
        "Events": "Performances, Workshops",
        "Culture": "Rich & Diverse"
      }
    },
    {
      id: 29,
      title: "Sports and Athletics",
      category: "Student Life",
      icon: "⚽",
      content: `NIT Trichy has excellent sports facilities including cricket grounds, football fields, basketball courts, tennis courts, badminton halls, and a swimming pool. Students participate in inter-hostel tournaments, inter-NIT competitions, and represent the college at national levels. The institute has teams for cricket, football, basketball, volleyball, athletics, table tennis, chess, and more. Regular coaching and training sessions are available for various sports. Annual sports events and championships promote healthy competition. The Sports Council organizes events and manages facilities. Many students balance academics with serious athletic pursuits, with some achieving state and national level recognition.`,
      quickFacts: {
        "Facilities": "Cricket, Football, Basketball, Pool",
        "Competitions": "Inter-Hostel, Inter-NIT",
        "Teams": "15+ Sports",
        "Recognition": "State & National"
      }
    },
    {
      id: 30,
      title: "Entrepreneurship Cell",
      category: "Student Life",
      icon: "💼",
      content: `The Entrepreneurship Cell (E-Cell) at NIT Trichy promotes startup culture and innovation among students. The cell organizes workshops, speaker sessions, hackathons, and startup competitions. E-Cell connects aspiring entrepreneurs with mentors, investors, and industry experts. It helps students develop business ideas, create prototypes, and launch startups. The cell hosts an annual entrepreneurship summit featuring successful entrepreneurs and investors. Members get exposure to real-world business challenges through case studies and competitions. E-Cell has supported several successful student startups and continues to foster an entrepreneurial mindset on campus.`,
      quickFacts: {
        "Focus": "Startup Culture",
        "Events": "Workshops, Summits, Hackathons",
        "Support": "Mentorship, Funding Connections",
        "Success": "Multiple Student Startups"
      }
    },
    {
      id: 31,
      title: "Dramatics Club",
      category: "Student Life",
      icon: "🎭",
      content: `The Dramatics Club is one of the most active cultural clubs at NIT Trichy. The club performs plays, street plays, skits, and improv sessions. Members participate in national-level theater festivals and competitions, often winning accolades. The club organizes workshops on acting, scriptwriting, direction, and stage design. Annual productions during FESTEMBER showcase student talent. The club addresses social issues through street plays and performs at various campus events. Members develop confidence, creativity, and teamwork through theatrical activities. The Dramatics Club has a rich legacy of memorable performances and continues to attract theater enthusiasts.`,
      quickFacts: {
        "Activities": "Plays, Street Theater, Improv",
        "Competitions": "National Level",
        "Workshops": "Acting, Writing, Direction",
        "Impact": "Social Awareness"
      }
    },
    {
      id: 32,
      title: "Photography and Film Making",
      category: "Student Life",
      icon: "📸",
      content: `The Photography and Film Making Club captures moments and tells stories through visual media. The club covers all college events, creating photo archives and promotional videos. Members learn photography techniques, video editing, cinematography, and documentary making. The club organizes photography walks, exhibitions, and competitions. Short films and documentaries created by members are showcased during fests. Workshops by professional photographers and filmmakers provide valuable insights. The club maintains the visual identity of college events and publications. Members develop technical skills in camera operation, lighting, editing software, and creative storytelling through regular practice and projects.`,
      quickFacts: {
        "Activities": "Photography, Videography",
        "Coverage": "All College Events",
        "Learning": "Techniques, Editing, Cinematography",
        "Output": "Films, Exhibitions"
      }
    }
  ]

  const categories = ['All', 'Departments', 'Hostels', 'Student Life']

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      if (currentArticleId) {
        const winScroll = document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 100
        setReadingProgress(scrolled)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentArticleId])

  const toggleBookmark = (id) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    )
  }

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getReadingTime = (content) => {
    const words = content.split(' ').length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }

  const renderArticleContent = (content) => {
    const paragraphs = content.split('\n\n')
    return paragraphs.map((para, idx) => {
      let processed = para
      articles.forEach(article => {
        if (article.title !== articles.find(a => a.id === currentArticleId)?.title) {
          const regex = new RegExp(`\\b${article.title}\\b`, 'gi')
          processed = processed.replace(regex, `<span class="text-purple-600 dark:text-purple-400 font-medium cursor-pointer hover:underline" onclick="document.getElementById('link-${article.id}').click()">${article.title}</span>`)
        }
      })
      return (
        <div key={idx}>
          <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: processed }} />
          {articles.map(article => (
            <button key={article.id} id={`link-${article.id}`} onClick={() => setCurrentArticleId(article.id)} className="hidden" />
          ))}
        </div>
      )
    })
  }

  const currentArticle = articles.find(a => a.id === currentArticleId)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      {currentArticleId && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
          <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all" style={{ width: `${readingProgress}%` }} />
        </div>
      )}

      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="cursor-pointer" onClick={() => { setCurrentView('home'); setCurrentArticleId(null); }}>
              <Logo />
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => { setCurrentView('home'); setCurrentArticleId(null); }} className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors">
                <Home size={20} />
                <span className="font-medium">Home</span>
              </button>
              <button onClick={() => setCurrentView('stats')} className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors">
                <BarChart3 size={20} />
                <span className="font-medium">Stats</span>
              </button>
              <button onClick={() => setCurrentView('bookmarks')} className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors relative">
                <BookmarkCheck size={20} />
                <span className="font-medium">Bookmarks</span>
                {bookmarks.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs
