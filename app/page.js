'use client'

import { useState, useEffect } from 'react'
import { Search, Moon, Sun, Menu, X, BookmarkIcon, Eye, ArrowLeft, TrendingUp } from 'lucide-react'

export default function WikiNITT() {
  const [darkMode, setDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentView, setCurrentView] = useState('home')
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [bookmarks, setBookmarks] = useState([])
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    if (selectedArticle) {
      const handleScroll = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const progress = (scrollTop / (documentHeight - windowHeight)) * 100
        setReadingProgress(Math.min(progress, 100))
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [selectedArticle])

  const articles = {
    cse: {
      title: 'Computer Science & Engineering',
      category: 'Departments',
      icon: '💻',
      views: 8945,
      contributors: 34,
      lastEdited: '2025-01-15',
      readingTime: 12,
      tags: ['Engineering', 'Technology', 'Programming', 'AI', 'Placement'],
      keywords: ['Computer Science', 'CSE', 'Programming', 'Pragyan', 'Delta Force', 'Spider'],
      quickFacts: [
        { label: 'Established', value: '1964' },
        { label: 'Students', value: '600+' },
        { label: 'Faculty', value: '45' },
        { label: 'Avg Package', value: '₹18 LPA' },
        { label: 'Highest Package', value: '₹52 LPA' }
      ],
      content: {
        sections: [
          {
            heading: 'Department Overview',
            paragraphs: [
              'The Department of Computer Science & Engineering at NIT Trichy stands as one of the premier computer science departments in India, established in 1964. With a legacy spanning over six decades, the department has consistently produced exceptional engineers who have made significant contributions to the global technology landscape.',
              'Our curriculum provides a strong foundation in core computer science principles while exposing students to cutting-edge technologies. The department maintains state-of-the-art laboratories equipped with the latest hardware and software.'
            ]
          },
          {
            heading: 'Academic Programs',
            paragraphs: [
              'The B.Tech program covers fundamental and advanced topics including data structures, algorithms, database management, operating systems, computer networks, software engineering, artificial intelligence, and machine learning.',
              'Students complete internships, summer projects, and final year capstone projects. These practical experiences help apply theoretical knowledge to real-world problems.'
            ]
          },
          {
            heading: 'Research and Innovation',
            paragraphs: [
              'The department is at the forefront of research in AI, machine learning, natural language processing, computer vision, data mining, cloud computing, IoT, cybersecurity, and blockchain.',
              'Students participate in Pragyan technical festival events organized by Delta Force and Spider R&D clubs, providing platforms to showcase skills and interact with industry experts.'
            ]
          },
          {
            heading: 'Placements',
            paragraphs: [
              'The department has 100% placement with top companies like Google, Microsoft, Amazon, Adobe, Goldman Sachs recruiting students. Average package is ₹18 lakhs per annum, highest reaching ₹52 lakhs.',
              'Many students pursue higher education at MIT, Stanford, Carnegie Mellon. The strong alumni network provides valuable mentorship opportunities.'
            ]
          }
        ]
      }
    },
    ece: {
      title: 'Electronics & Communication Engineering',
      category: 'Departments',
      icon: '📡',
      views: 7234,
      contributors: 28,
      lastEdited: '2025-01-14',
      readingTime: 11,
      tags: ['Engineering', 'Electronics', 'Communication', 'VLSI'],
      keywords: ['ECE', 'Electronics', 'VLSI', 'Signal Processing'],
      quickFacts: [
        { label: 'Established', value: '1965' },
        { label: 'Students', value: '550+' },
        { label: 'Avg Package', value: '₹15 LPA' }
      ],
      content: {
        sections: [
          {
            heading: 'Department Introduction',
            paragraphs: [
              'The ECE Department, established in 1965, offers comprehensive education in electronics, communication systems, VLSI design, embedded systems, and signal processing.',
              'Our curriculum balances theoretical knowledge with practical skills in analog electronics, digital systems, microprocessors, and electromagnetic theory.'
            ]
          },
          {
            heading: 'Research Facilities',
            paragraphs: [
              'Ten specialized laboratories include the VLSI Design Lab with Cadence, Synopsys, and Mentor Graphics tools. The Communications Lab features signal generators and spectrum analyzers.',
              'The Embedded Systems Lab provides microcontroller boards, FPGA platforms, and debugging tools for industrial automation applications.'
            ]
          },
          {
            heading: 'Career Prospects',
            paragraphs: [
              'Students join Texas Instruments, Qualcomm, Broadcom, Intel, Samsung. Average package is ₹15 lakhs, highest reaching ₹45 lakhs.',
              'Many pursue higher studies or entrepreneurial ventures with support from the Career Development Cell.'
            ]
          }
        ]
      }
    },
    mech: {
      title: 'Mechanical Engineering',
      category: 'Departments',
      icon: '⚙️',
      views: 6823,
      contributors: 26,
      lastEdited: '2025-01-13',
      readingTime: 10,
      tags: ['Engineering', 'Manufacturing', 'Design'],
      keywords: ['Mechanical', 'Manufacturing', 'CAD', 'Robotics'],
      quickFacts: [
        { label: 'Established', value: '1964' },
        { label: 'Students', value: '500+' },
        { label: 'Avg Package', value: '₹12 LPA' }
      ],
      content: {
        sections: [
          {
            heading: 'Department Profile',
            paragraphs: [
              'The Mechanical Engineering Department covers traditional topics and emerging areas like robotics, automation, and advanced manufacturing.',
              'Curriculum includes thermodynamics, fluid mechanics, heat transfer, manufacturing processes, machine design, CAD, and FEA.'
            ]
          },
          {
            heading: 'Labs and Workshops',
            paragraphs: [
              'Eight laboratories feature CNC machines, 3D printers, laser cutting systems. The CAD/CAM Lab runs CATIA, SolidWorks, and ANSYS.',
              'The Robotics Lab has robotic arms and automation equipment for hands-on learning.'
            ]
          },
          {
            heading: 'Placements',
            paragraphs: [
              'Graduates join L&T, Tata Motors, Mahindra, Ashok Leyland. Average package is ₹12 lakhs, highest at ₹38 lakhs.',
              'Alumni network provides valuable support and mentorship to current students.'
            ]
          }
        ]
      }
    },
    civil: {
      title: 'Civil Engineering',
      category: 'Departments',
      icon: '🏗️',
      views: 5432,
      contributors: 22,
      lastEdited: '2025-01-12',
      readingTime: 9,
      tags: ['Engineering', 'Construction', 'Infrastructure'],
      keywords: ['Civil', 'Construction', 'Structural'],
      quickFacts: [
        { label: 'Established', value: '1965' },
        { label: 'Students', value: '450+' },
        { label: 'Avg Package', value: '₹10 LPA' }
      ],
      content: {
        sections: [
          {
            heading: 'About the Department',
            paragraphs: [
              'The Civil Engineering Department covers structural, transportation, geotechnical, water resources, and environmental engineering.',
              'Students learn structural analysis, concrete technology, soil mechanics, and construction management with emphasis on sustainability.'
            ]
          },
          {
            heading: 'Facilities',
            paragraphs: [
              'Seven laboratories support teaching and research including Structural Lab with testing machines and Geotechnical Lab for soil analysis.',
              'CAD Lab features software for structural design and transportation planning.'
            ]
          }
        ]
      }
    },
    eee: {
      title: 'Electrical & Electronics Engineering',
      category: 'Departments',
      icon: '⚡',
      views: 6124,
      contributors: 24,
      lastEdited: '2025-01-11',
      readingTime: 10,
      tags: ['Engineering', 'Power Systems', 'Control'],
      keywords: ['Electrical', 'EEE', 'Power', 'Control'],
      quickFacts: [
        { label: 'Established', value: '1964' },
        { label: 'Students', value: '480+' },
        { label: 'Avg Package', value: '₹13 LPA' }
      ],
      content: {
        sections: [
          {
            heading: 'Overview',
            paragraphs: [
              'EEE Department covers power systems, power electronics, control systems, electrical machines, renewable energy, and smart grids.',
              'Curriculum includes circuit theory, electromagnetic fields, power systems, and renewable energy technologies.'
            ]
          },
          {
            heading: 'Research Labs',
            paragraphs: [
              'Nine laboratories include Power Systems Lab with relays and simulation software, Power Electronics Lab with converters.',
              'Renewable Energy Lab focuses on solar PV, wind energy, and storage technologies.'
            ]
          }
        ]
      }
    },
    chemical: {
      title: 'Chemical Engineering',
      category: 'Departments',
      icon: '🧪',
      views: 4892,
      contributors: 20,
      lastEdited: '2025-01-10',
      readingTime: 9,
      tags: ['Engineering', 'Process', 'Chemistry'],
      keywords: ['Chemical', 'Process', 'Biotechnology'],
      quickFacts: [
        { label: 'Established', value: '1966' },
        { label: 'Students', value: '400+' },
        { label: 'Avg Package', value: '₹11 LPA' }
      ],
      content: {
        sections: [
          {
            heading: 'Introduction',
            paragraphs: [
              'Chemical Engineering offers education in chemical processes, biotechnology, polymer engineering, and environmental engineering.',
              'Students learn mass transfer, thermodynamics, reaction engineering, and process control.'
            ]
          }
        ]
      }
    },
    agate: {
      title: 'Agate Hostel',
      category: 'Hostels',
      icon: '🏨',
      views: 12453,
      contributors: 48,
      lastEdited: '2025-01-16',
      readingTime: 8,
      tags: ['Hostel', 'Boys', 'Campus Life'],
      keywords: ['Agate', 'Hostel', 'Boys', 'Delta Force'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '400 students' },
        { label: 'Floors', value: '4 floors' }
      ],
      content: {
        sections: [
          {
            heading: 'Hostel Overview',
            paragraphs: [
              'Agate Hostel is a premier boys hostel housing 400 male students across four floors. Located in the heart of campus, Agate has built a reputation for vibrant culture and excellent facilities.',
              'The hostel provides single and double occupancy rooms with bed, study table, chair, and wardrobe.'
            ]
          },
          {
            heading: 'Facilities',
            paragraphs: [
              'In-house mess serves breakfast, lunch, dinner, and snacks. Common facilities include TV room, reading room, gym, and music room.',
              'High-speed WiFi is available throughout. Many residents are Delta Force members who participate in Pragyan events.'
            ]
          }
        ]
      }
    },
    diamond: {
      title: 'Diamond Hostel',
      category: 'Hostels',
      icon: '💎',
      views: 9834,
      contributors: 42,
      lastEdited: '2025-01-15',
      readingTime: 7,
      tags: ['Hostel', 'Boys'],
      keywords: ['Diamond', 'Hostel', 'Boys'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '380 students' }
      ],
      content: {
        sections: [
          {
            heading: 'About Diamond',
            paragraphs: [
              'Diamond Hostel accommodates 380 male students in double and triple rooms. Known for cleanliness and academic-focused environment.',
              'Located near academic blocks with convenient access to classes.'
            ]
          }
        ]
      }
    },
    jade: {
      title: 'Jade Hostel',
      category: 'Hostels',
      icon: '💚',
      views: 8621,
      contributors: 38,
      lastEdited: '2025-01-14',
      readingTime: 6,
      tags: ['Hostel', 'Boys', 'Sports'],
      keywords: ['Jade', 'Hostel', 'Boys'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '350 students' }
      ],
      content: {
        sections: [
          {
            heading: 'Jade Profile',
            paragraphs: [
              'Jade Hostel houses 350 male students and is known for strong sports culture. Many residents are college sports team members.',
              'The hostel has volleyball and badminton courts nearby for practice and recreation.'
            ]
          }
        ]
      }
    },
    coral: {
      title: 'Coral Hostel',
      category: 'Hostels',
      icon: '🪸',
      views: 7542,
      contributors: 35,
      lastEdited: '2025-01-13',
      readingTime: 6,
      tags: ['Hostel', 'Boys'],
      keywords: ['Coral', 'Hostel', 'Boys'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '360 students' }
      ],
      content: {
        sections: [
          {
            heading: 'Modern Coral',
            paragraphs: [
              'Coral is a modern boys hostel with eco-friendly features including solar water heaters and LED lighting. Houses 360 male students.',
              'Emphasizes sustainability with waste segregation and composting initiatives.'
            ]
          }
        ]
      }
    },
    pragyan: {
      title: 'Pragyan - Technical Festival',
      category: 'Student Life',
      icon: '🚀',
      views: 15234,
      contributors: 52,
      lastEdited: '2025-01-17',
      readingTime: 10,
      tags: ['Festival', 'Technical', 'Events'],
      keywords: ['Pragyan', 'Technical', 'Festival', 'Computer Science', 'Delta Force'],
      quickFacts: [
        { label: 'Type', value: 'Technical Festival' },
        { label: 'Participants', value: '25,000+' },
        { label: 'Duration', value: '3 days' }
      ],
      content: {
        sections: [
          {
            heading: 'About Pragyan',
            paragraphs: [
              'Pragyan is the annual technical festival of NIT Trichy, attracting over 25,000 participants from across India. The three-day event showcases cutting-edge technology, innovation, and engineering excellence.',
              'Events include coding competitions organized by Delta Force, robotics challenges by Spider R&D, workshops, hackathons, and guest lectures by industry leaders and researchers from top companies and institutions worldwide.'
            ]
          }
        ]
      }
    },
    festember: {
      title: 'Festember - Cultural Festival',
      category: 'Student Life',
      icon: '🎭',
      views: 14892,
      contributors: 48,
      lastEdited: '2025-01-16',
      readingTime: 9,
      tags: ['Festival', 'Cultural', 'Events'],
      keywords: ['Festember', 'Cultural', 'Festival'],
      quickFacts: [
        { label: 'Type', value: 'Cultural Festival' },
        { label: 'Footfall', value: '60,000+' },
        { label: 'Duration', value: '4 days' }
      ],
      content: {
        sections: [
          {
            heading: 'About Festember',
            paragraphs: [
              'Festember is South India largest cultural festival with over 60,000 participants. The four-day extravaganza features music, dance, drama, literary events, and celebrity performances.',
              'Students showcase talents in various competitions while enjoying pro-nights featuring renowned artists and bands from across the country.'
            ]
          }
        ]
      }
    },
    deltaforce: {
      title: 'Delta Force - Coding Club',
      category: 'Student Life',
      icon: '👨‍💻',
      views: 10234,
      contributors: 38,
      lastEdited: '2025-01-15',
      readingTime: 7,
      tags: ['Club', 'Coding', 'Programming'],
      keywords: ['Delta Force', 'Coding', 'Programming', 'Computer Science', 'Pragyan'],
      quickFacts: [
        { label: 'Type', value: 'Technical Club' },
        { label: 'Members', value: '200+' },
        { label: 'Focus', value: 'Competitive Programming' }
      ],
      content: {
        sections: [
          {
            heading: 'About Delta Force',
            paragraphs: [
              'Delta Force is the premier coding and competitive programming club at NIT Trichy. The club conducts regular coding contests, workshops, and training sessions to help students excel in competitive programming.',
              'Members have achieved success in ACM ICPC regionals and various national coding competitions. During Pragyan, Delta Force organizes major coding events and hackathons attracting participants from across India.'
            ]
          }
        ]
      }
    },
    spider: {
      title: 'Spider R&D - Robotics Club',
      category: 'Student Life',
      icon: '🤖',
      views: 9456,
      contributors: 35,
      lastEdited: '2025-01-14',
      readingTime: 7,
      tags: ['Club', 'Robotics', 'R&D'],
      keywords: ['Spider', 'Robotics', 'IoT', 'Pragyan'],
      quickFacts: [
        { label: 'Type', value: 'R&D Club' },
        { label: 'Members', value: '150+' },
        { label: 'Focus', value: 'Robotics & IoT' }
      ],
      content: {
        sections: [
          {
            heading: 'About Spider R&D',
            paragraphs: [
              'Spider R&D focuses on research and development in robotics, IoT, and emerging technologies. Students work on innovative projects, participate in hackathons, and contribute to open-source software.',
              'The club organizes robotics events during Pragyan and provides a platform for students to explore hardware and software integration in real-world applications.'
            ]
          }
        ]
      }
    },
    sac: {
      title: 'Student Activity Center (SAC)',
      category: 'Student Life',
      icon: '🏛️',
      views: 11234,
      contributors: 42,
      lastEdited: '2025-01-15',
      readingTime: 8,
      tags: ['Facility', 'Activities', 'Clubs'],
      keywords: ['SAC', 'Activities', 'Clubs'],
      quickFacts: [
        { label: 'Type', value: 'Activity Center' },
        { label: 'Clubs', value: '50+' },
        { label: 'Facilities', value: 'Auditorium, Studios' }
      ],
      content: {
        sections: [
          {
            heading: 'About SAC',
            paragraphs: [
              'The Student Activity Center is the hub of extracurricular activities at NIT Trichy. It houses over 50 clubs including music, dance, drama, photography, and technical clubs.',
              'SAC provides rehearsal spaces, equipment, and support for student activities. It serves as the coordination center for Festember and other cultural events throughout the year.'
            ]
          }
        ]
      }
    },
    library: {
      title: 'Central Library',
      category: 'Student Life',
      icon: '📚',
      views: 8892,
      contributors: 32,
      lastEdited: '2025-01-13',
      readingTime: 6,
      tags: ['Facility', 'Library', 'Resources'],
      keywords: ['Library', 'Books', 'Resources'],
      quickFacts: [
        { label: 'Collection', value: '2 lakh books' },
        { label: 'Journals', value: '500+' },
        { label: 'Reading Seats', value: '1000+' }
      ],
      content: {
        sections: [
          {
            heading: 'Library Overview',
            paragraphs: [
              'The Central Library houses over 2 lakh books, 500+ journals, and extensive digital resources. It provides a conducive environment for study and research with over 1000 reading seats.',
              'The library subscribes to major digital databases including IEEE, Springer, Elsevier, and provides access to e-books, journals, and research papers for students and faculty.'
            ]
          }
        ]
      }
    },
    cdc: {
      title: 'Career Development Cell',
      category: 'Student Life',
      icon: '💼',
      views: 13456,
      contributors: 45,
      lastEdited: '2025-01-16',
      readingTime: 8,
      tags: ['Career', 'Placements', 'Training'],
      keywords: ['CDC', 'Placements', 'Career'],
      quickFacts: [
        { label: 'Placement Rate', value: '100%' },
        { label: 'Avg Package', value: '₹14 LPA' },
        { label: 'Recruiters', value: '200+' }
      ],
      content: {
        sections: [
          {
            heading: 'About CDC',
            paragraphs: [
              'The Career Development Cell coordinates placements and internships for NIT Trichy students. With 100% placement record, CDC brings over 200 companies for campus recruitment annually.',
              'The cell conducts training programs, mock interviews, resume workshops, and provides career counseling to prepare students for successful careers in industry and research.'
            ]
          }
        ]
      }
    },
    ecell: {
      title: 'E-Cell - Entrepreneurship Cell',
      category: 'Student Life',
      icon: '💡',
      views: 7234,
      contributors: 28,
      lastEdited: '2025-01-12',
      readingTime: 6,
      tags: ['Entrepreneurship', 'Startups'],
      keywords: ['E-Cell', 'Entrepreneurship', 'Startups'],
      quickFacts: [
        { label: 'Type', value: 'Entrepreneurship' },
        { label: 'Startups Supported', value: '30+' },
        { label: 'Focus', value: 'Innovation' }
      ],
      content: {
        sections: [
          {
            heading: 'About E-Cell',
            paragraphs: [
              'The Entrepreneurship Cell fosters innovation and startup culture at NIT Trichy. E-Cell conducts workshops on business planning, funding, and startup operations.',
              'The cell has supported over 30 student startups and regularly invites successful entrepreneurs for mentorship sessions and networking events.'
            ]
          }
        ]
      }
    },
    nss: {
      title: 'NSS - National Service Scheme',
      category: 'Student Life',
      icon: '🤝',
      views: 6892,
      contributors: 26,
      lastEdited: '2025-01-11',
      readingTime: 5,
      tags: ['Social Service', 'Volunteering'],
      keywords: ['NSS', 'Service', 'Social'],
      quickFacts: [
        { label: 'Type', value: 'Social Service' },
        { label: 'Volunteers', value: '500+' },
        { label: 'Activities', value: 'Village camps, Drives' }
      ],
      content: {
        sections: [
          {
            heading: 'About NSS',
            paragraphs: [
              'NSS at NIT Trichy promotes social responsibility through community service. With over 500 volunteers, NSS organizes blood donation drives, village development camps, and awareness programs.',
              'Activities include teaching underprivileged children, environmental conservation, and health awareness campaigns in nearby villages.'
            ]
          }
        ]
      }
    },
    forge: {
      title: 'Forge - Innovation & Maker Club',
      category: 'Student Life',
      icon: '🔧',
      views: 5234,
      contributors: 22,
      lastEdited: '2025-01-10',
      readingTime: 5,
      tags: ['Innovation', 'Making', 'Prototyping'],
      keywords: ['Forge', 'Innovation', 'Making'],
      quickFacts: [
        { label: 'Type', value: 'Innovation Club' },
        { label: 'Equipment', value: '3D Printers, Laser Cutters' },
        { label: 'Focus', value: 'Rapid Prototyping' }
      ],
      content: {
        sections: [
          {
            heading: 'About Forge',
            paragraphs: [
              'Forge is the innovation and maker club providing access to 3D printers, laser cutting machines, and prototyping equipment. Students work on hardware projects and product development.',
              'The maker space encourages hands-on learning and supports students in transforming ideas into tangible prototypes for competitions and startup ventures.'
            ]
          }
        ]
      }
    }
  }

  const toggleBookmark = (key) => {
    setBookmarks(prev => 
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    )
  }

  const openArticle = (key) => {
    setSelectedArticle(key)
    setCurrentView('article')
    setMobileMenuOpen(false)
    setShowSearch(false)
    window.scrollTo(0, 0)
    setReadingProgress(0)
  }

  const goBack = () => {
    setSelectedArticle(null)
    setCurrentView(selectedCategory === 'all' ? 'home' : 'category')
    window.scrollTo(0, 0)
  }

  const selectCategory = (cat) => {
    setSelectedCategory(cat)
    setCurrentView(cat === 'all' ? 'home' : 'category')
    setMobileMenuOpen(false)
  }

  const getFilteredArticles = () => {
    let filtered = Object.entries(articles)
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(([_, article]) => article.category === selectedCategory)
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(([key, article]) => 
        article.title.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query)) ||
        article.keywords.some(kw => kw.toLowerCase().includes(query))
      )
    }
    return filtered
  }

  const createAutoLinkedContent = (text, currentKey) => {
    let linkedText = text
    Object.entries(articles).forEach(([key, article]) => {
      if (key !== currentKey) {
        article.keywords.forEach(keyword => {
          const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
          linkedText = linkedText.replace(regex, (match) => `<LINK>${key}|${match}</LINK>`)
        })
      }
    })
    
    const parts = linkedText.split(/<LINK>|<\/LINK>/)
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        const [targetKey, text] = part.split('|')
        return (
          <span
            key={i}
            onClick={() => openArticle(targetKey)}
            className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer transition-colors"
          >
            {text}
          </span>
        )
      }
      return part
    })
  }

  const stats = {
    totalArticles: Object.keys(articles).length,
    totalViews: Object.values(articles).reduce((sum, a) => sum + a.views, 0),
    totalContributors: Object.values(articles).reduce((sum, a) => sum + a.contributors, 0),
    avgReadingTime: Math.round(Object.values(articles).reduce((sum, a) => sum + a.readingTime, 0) / Object.keys(articles).length)
  }

  const categories = ['all', 'Departments', 'Hostels', 'Student Life']
  const filteredArticles = getFilteredArticles()
  const article = selectedArticle ? articles[selectedArticle] : null

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900'}`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 -left-20 w-72 h-72 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 -right-20 w-96 h-96 ${darkMode ? 'bg-indigo-500/10' : 'bg-indigo-500/5'} rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1s'}}></div>
      </div>
