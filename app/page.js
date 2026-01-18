'use client'

import { useState, useEffect, useMemo } from 'react'
import { Search, Moon, Sun, Menu, X, BookmarkIcon, Clock, Eye, Users, TrendingUp, Filter, Home, Building2, Hotel, Sparkles, ChevronRight, ArrowLeft, Share2, Printer, ChevronDown, ChevronUp, FileText, BarChart3 } from 'lucide-react'

export default function WikiNITT() {
  const [darkMode, setDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentView, setCurrentView] = useState('home')
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [bookmarks, setBookmarks] = useState([])
  const [recentlyViewed, setRecentlyViewed] = useState([])
  const [readingProgress, setReadingProgress] = useState(0)
  const [fontSize, setFontSize] = useState('medium')
  const [showStats, setShowStats] = useState(false)

  // Track reading progress
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

  // COMPREHENSIVE ARTICLE DATABASE - 32 ARTICLES
  const articles = {
    // DEPARTMENTS (6)
    cse: {
      title: 'Computer Science & Engineering',
      category: 'Departments',
      icon: '💻',
      views: 8945,
      contributors: 34,
      lastEdited: '2025-01-15',
      readingTime: 12,
      difficulty: 'Advanced',
      tags: ['Engineering', 'Technology', 'Programming', 'AI', 'Placement'],
      keywords: ['Computer Science', 'CSE', 'Programming', 'Coding', 'Software', 'Pragyan', 'Delta Force', 'Spider'],
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
              'Our curriculum provides a strong foundation in core computer science principles while exposing students to cutting-edge technologies. The department maintains state-of-the-art laboratories equipped with the latest hardware and software, enabling hands-on experience in artificial intelligence, machine learning, cloud computing, and cybersecurity.'
            ]
          },
          {
            heading: 'Academic Programs',
            paragraphs: [
              'The B.Tech program covers fundamental and advanced topics including data structures, algorithms, database management, operating systems, computer networks, software engineering, artificial intelligence, and machine learning. Students have flexibility to choose elective courses based on interests and career goals.',
              'Students are required to complete internships, summer projects, and a final year capstone project. These practical experiences help apply theoretical knowledge to real-world problems and prepare for successful careers in industry or academia.'
            ]
          },
          {
            heading: 'Research and Innovation',
            paragraphs: [
              'The department is at the forefront of research in cutting-edge areas. Faculty and students work on projects funded by DST, DRDO, ISRO, and industry partners. Research areas include AI and machine learning, natural language processing, computer vision, data mining, cloud computing, IoT, cybersecurity, and blockchain.',
              'Innovation is encouraged through hackathons, coding competitions, and innovation challenges. The department collaborates with Delta Force and Spider R&D clubs to organize technical events during Pragyan, providing platforms to showcase skills and interact with industry experts.'
            ]
          },
          {
            heading: 'Placements and Career',
            paragraphs: [
              'The department has an outstanding placement record with 100% placement. Top companies like Google, Microsoft, Amazon, Adobe, Goldman Sachs, and Morgan Stanley recruit students for diverse roles. The average package is ₹18 lakhs per annum, with the highest reaching ₹52 lakhs.',
              'Many students pursue higher education at MIT, Stanford, Carnegie Mellon, and UC Berkeley. Some choose entrepreneurship with support from the institute incubation center. The strong alumni network provides valuable mentorship and networking opportunities.'
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
      difficulty: 'Advanced',
      tags: ['Engineering', 'Electronics', 'Communication', 'VLSI'],
      keywords: ['ECE', 'Electronics', 'Communication', 'VLSI', 'Signal Processing'],
      quickFacts: [
        { label: 'Established', value: '1965' },
        { label: 'Students', value: '550+' },
        { label: 'Faculty', value: '42' },
        { label: 'Avg Package', value: '₹15 LPA' }
      ],
      content: {
        sections: [
          {
            heading: 'Department Introduction',
            paragraphs: [
              'The Department of Electronics & Communication Engineering, established in 1965, is one of the oldest and most prestigious ECE departments in India. The department offers comprehensive education in electronics, communication systems, VLSI design, embedded systems, and signal processing.',
              'Our curriculum balances theoretical knowledge with practical skills. Students learn about electronic circuits, digital systems, microprocessors, communication systems, and electromagnetic theory. Advanced courses cover wireless communications, optical fiber, VLSI design, and RF engineering.'
            ]
          },
          {
            heading: 'Research Facilities',
            paragraphs: [
              'The department operates ten specialized research laboratories. The VLSI Design Lab is equipped with industry-standard EDA tools from Cadence, Synopsys, and Mentor Graphics. The Communications Lab features signal generators, spectrum analyzers, and software-defined radio platforms.',
              'The Embedded Systems Lab provides microcontroller development boards, FPGA platforms, and debugging tools. Students design embedded systems for applications ranging from industrial automation to consumer electronics.'
            ]
          },
          {
            heading: 'Career Prospects',
            paragraphs: [
              'ECE students are recruited by Texas Instruments, Qualcomm, Broadcom, Intel, Samsung, and Analog Devices. The average package is ₹15 lakhs with the highest reaching ₹45 lakhs. Students receive offers for chip design, embedded systems, network engineering, and signal processing roles.',
              'Many opt for higher studies at top universities or pursue entrepreneurial ventures. The Career Development Cell organizes training programs and mock interviews to prepare students for placements.'
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
      difficulty: 'Intermediate',
      tags: ['Engineering', 'Manufacturing', 'Design', 'Automation'],
      keywords: ['Mechanical', 'Manufacturing', 'Design', 'CAD', 'Robotics'],
      quickFacts: [
        { label: 'Established', value: '1964' },
        { label: 'Students', value: '500+' },
        { label: 'Faculty', value: '38' },
        { label: 'Avg Package', value: '₹12 LPA' }
      ],
      content: {
        sections: [
          {
            heading: 'Department Profile',
            paragraphs: [
              'The Department of Mechanical Engineering, established in 1964, maintains its position as a leader in mechanical engineering education. The department offers programs covering traditional topics and emerging areas like robotics, automation, and advanced manufacturing.',
              'Our curriculum includes thermodynamics, fluid mechanics, heat transfer, manufacturing processes, machine design, and materials science. Students also learn CAD, finite element analysis, and computational fluid dynamics.'
            ]
          },
          {
            heading: 'Labs and Workshops',
            paragraphs: [
              'The department houses eight well-equipped laboratories. The Manufacturing Technology Lab features CNC machines, 3D printers, and laser cutting systems. The CAD/CAM Lab runs industry-standard software like CATIA, SolidWorks, and ANSYS.',
              'The Thermal Engineering Lab studies heat transfer, combustion, and refrigeration. The Robotics and Automation Lab has robotic arms and automation equipment for hands-on learning.'
            ]
          },
          {
            heading: 'Placements',
            paragraphs: [
              'Graduates are recruited by L&T, Tata Motors, Mahindra, Ashok Leyland, Honeywell, and Schlumberger. The average package is ₹12 lakhs with the highest at ₹38 lakhs. Students also join consulting firms and analytics companies.',
              'Many pursue higher education or MBA programs. The alumni network provides valuable support and mentorship to current students.'
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
      difficulty: 'Intermediate',
      tags: ['Engineering', 'Construction', 'Infrastructure'],
      keywords: ['Civil', 'Construction', 'Structural', 'Buildings'],
      quickFacts: [
        { label: 'Established', value: '1965' },
        { label: 'Students', value: '450+' },
        { label: 'Faculty', value: '35' },
        { label: 'Avg Package', value: '₹10 LPA' }
      ],
      content: {
        sections: [
          {
            heading: 'About the Department',
            paragraphs: [
              'The Department of Civil Engineering has been a cornerstone of infrastructure education since 1965. Programs cover structural engineering, transportation, geotechnical, water resources, and environmental engineering.',
              'Students learn structural analysis, concrete technology, soil mechanics, highway engineering, and construction management. The curriculum emphasizes sustainability and modern computational tools.'
            ]
          },
          {
            heading: 'Facilities',
            paragraphs: [
              'Seven specialized laboratories support teaching and research. The Structural Lab has universal testing machines and non-destructive testing equipment. The Geotechnical Lab conducts soil testing including triaxial and shear tests.',
              'The Surveying Lab provides total stations, GPS equipment, and drones. The CAD Lab has software for structural design and transportation planning.'
            ]
          },
          {
            heading: 'Career Paths',
            paragraphs: [
              'Students join L&T Construction, Shapoorji Pallonji, Tata Projects, and GMR. The average package is ₹10 lakhs. Many qualify for government jobs through GATE in ISRO, DRDO, and PSUs.',
              'Industrial visits and guest lectures bridge academic learning with professional practice, ensuring industry-ready graduates.'
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
      difficulty: 'Advanced',
      tags: ['Engineering', 'Power Systems', 'Control', 'Energy'],
      keywords: ['Electrical', 'EEE', 'Power', 'Control Systems'],
      quickFacts: [
        { label: 'Established', value: '1964' },
        { label: 'Students', value: '480+' },
        { label: 'Faculty', value: '36' },
        { label: 'Avg Package', value: '₹13 LPA' }
      ],
      content: {
        sections: [
          {
            heading: 'Overview',
            paragraphs: [
              'The EEE Department has pioneered electrical engineering education since 1964. Programs cover power systems, power electronics, control systems, electrical machines, renewable energy, and smart grid technologies.',
              'The curriculum includes circuit theory, electromagnetic fields, electrical machines, power systems, and control systems. Students study renewable energy, electric vehicles, and energy storage.'
            ]
          },
          {
            heading: 'Research Labs',
            paragraphs: [
              'Nine laboratories support learning and research. The Power Systems Lab has protective relays and simulation software. The Power Electronics Lab features thyristors, converters, and inverters.',
              'The Renewable Energy Lab focuses on solar PV, wind energy conversion, and storage technologies. Students access MATLAB/Simulink, PSCAD, and ETAP software.'
            ]
          },
          {
            heading: 'Opportunities',
            paragraphs: [
              'Graduates join BHEL, Siemens, ABB, Schneider Electric, and GE. The average package is ₹13 lakhs with the highest at ₹42 lakhs. Many also join power sector PSUs like NTPC and PGCIL.',
              'Students pursue higher education in power electronics, renewable energy, or control systems. The placement cell ensures excellent career outcomes.'
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
      difficulty: 'Intermediate',
      tags: ['Engineering', 'Process', 'Chemistry', 'Biotechnology'],
      keywords: ['Chemical', 'Process', 'Biotechnology', 'Polymers'],
      quickFacts: [
        { label: 'Established', value: '1966' },
        { label: 'Students', value: '400+' },
        { label: 'Faculty', value: '32' },
        { label: 'Avg Package', value: '₹11 LPA' }
      ],
      content: {
        sections: [
          {
            heading: 'Introduction',
            paragraphs: [
              'The Chemical Engineering Department, established in 1966, offers education in chemical processes, biotechnology, polymer engineering, and environmental engineering. The curriculum combines chemistry, physics, mathematics, and engineering principles.',
              'Students learn mass transfer, heat transfer, fluid mechanics, thermodynamics, reaction engineering, and process control. Advanced courses cover petroleum refining, polymer science, and biochemical engineering.'
            ]
          },
          {
            heading: 'Infrastructure',
            paragraphs: [
              'Six specialized laboratories include the Unit Operations Lab with distillation and extraction equipment. The Process Control Lab has controllers and simulators. The Biotechnology Lab focuses on fermentation and enzyme technology.',
              'Students access Aspen Plus, HYSYS, and COMSOL software for process simulation, essential for plant design and optimization.'
            ]
          },
          {
            heading: 'Careers',
            paragraphs: [
              'Graduates join Reliance Industries, IOCL, BPCL, Hindustan Unilever, and Procter & Gamble. The average package is ₹11 lakhs. Many also enter consulting and analytics firms.',
              'The department supports students qualifying for PSU jobs through GATE and pursuing higher education in specialized areas.'
            ]
          }
        ]
      }
    },

    // HOSTELS (16 - ALL BOYS)
    agate: {
      title: 'Agate Hostel',
      category: 'Hostels',
      icon: '🏨',
      views: 12453,
      contributors: 48,
      lastEdited: '2025-01-16',
      readingTime: 8,
      difficulty: 'Beginner',
      tags: ['Hostel', 'Accommodation', 'Boys', 'Campus Life'],
      keywords: ['Agate', 'Hostel', 'Boys', 'Accommodation', 'Delta Force', 'Mess'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '400 students' },
        { label: 'Floors', value: '4 floors' },
        { label: 'Room Types', value: 'Single, Double' },
        { label: 'Mess', value: 'In-house' },
        { label: 'Established', value: '1985' }
      ],
      content: {
        sections: [
          {
            heading: 'Hostel Overview',
            paragraphs: [
              'Agate Hostel is one of the premier boys hostels at NIT Trichy, housing 400 male students across four floors. Located in the heart of the campus, Agate has built a reputation for its vibrant culture, excellent facilities, and strong sense of community among residents.',
              'The hostel provides both single and double occupancy rooms, all equipped with basic furniture including bed, study table, chair, and wardrobe. Each floor has common areas for recreation and studying, fostering a collaborative living environment.'
            ]
          },
          {
            heading: 'Facilities and Amenities',
            paragraphs: [
              'Agate features an in-house mess serving breakfast, lunch, dinner, and snacks. The mess committee works closely with the catering service to ensure quality food and diverse menus. The hostel also has a canteen for late-night refreshments.',
              'Common facilities include a TV room, reading room, gym, indoor games room with table tennis and carrom, and a music room. High-speed WiFi connectivity is available throughout the hostel, and each room has LAN ports for wired internet access.'
            ]
          },
          {
            heading: 'Student Culture',
            paragraphs: [
              'Agate is known for its active participation in technical and cultural activities. Many residents are members of Delta Force coding club and participate regularly in Pragyan events. The hostel organizes internal sports tournaments, cultural nights, and celebrates major festivals together.',
              'The hostel council manages day-to-day affairs and represents student interests to the administration. Senior students mentor juniors, creating a supportive environment for first-year students transitioning to hostel life.'
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
      difficulty: 'Beginner',
      tags: ['Hostel', 'Accommodation', 'Boys', 'Campus'],
      keywords: ['Diamond', 'Hostel', 'Boys', 'Students'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '380 students' },
        { label: 'Floors', value: '4 floors' },
        { label: 'Room Types', value: 'Double, Triple' }
      ],
      content: {
        sections: [
          {
            heading: 'About Diamond',
            paragraphs: [
              'Diamond Hostel accommodates 380 male students in double and triple occupancy rooms. The hostel is known for its cleanliness, discipline, and academic-focused environment. Located near the main academic block, it offers convenient access to classes.',
              'Rooms are spacious with good ventilation and natural lighting. Each student gets a bed, study table, chair, and personal storage space.'
            ]
          },
          {
            heading: 'Hostel Life',
            paragraphs: [
              'Diamond has a well-maintained mess with vegetarian and non-vegetarian options. The hostel also has a small gym, common room, and study areas. Regular maintenance ensures all facilities remain in excellent condition.',
              'Students actively participate in inter-hostel sports competitions and cultural events. The hostel atmosphere promotes both academic excellence and extracurricular involvement.'
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
      difficulty: 'Beginner',
      tags: ['Hostel', 'Boys', 'Sports'],
      keywords: ['Jade', 'Hostel', 'Boys', 'Sports'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '350 students' },
        { label: 'Specialty', value: 'Sports Culture' }
      ],
      content: {
        sections: [
          {
            heading: 'Jade Hostel Profile',
            paragraphs: [
              'Jade Hostel is home to 350 male students and is particularly known for its strong sports culture. Many hostel residents are part of college sports teams in cricket, football, basketball, and athletics.',
              'The hostel has its own volleyball and badminton courts nearby, and residents regularly use these facilities for practice and recreation.'
            ]
          },
          {
            heading: 'Community Spirit',
            paragraphs: [
              'Jade promotes teamwork and fitness. The hostel organizes morning running groups, sports practice sessions, and participates enthusiastically in inter-hostel tournaments.',
              'Despite the sports focus, academic performance is also emphasized with dedicated study hours and peer tutoring among students.'
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
      difficulty: 'Beginner',
      tags: ['Hostel', 'Boys', 'Modern'],
      keywords: ['Coral', 'Hostel', 'Boys', 'Eco-friendly'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '360 students' },
        { label: 'Features', value: 'Solar panels' }
      ],
      content: {
        sections: [
          {
            heading: 'Modern Coral',
            paragraphs: [
              'Coral Hostel is one of the newer boys hostels with modern eco-friendly features including solar water heaters and LED lighting throughout. The hostel houses 360 male students in comfortable rooms with contemporary amenities.',
              'Each floor has water purifiers, and the hostel maintains high standards of cleanliness and hygiene.'
            ]
          },
          {
            heading: 'Facilities',
            paragraphs: [
              'Coral features a spacious mess, reading room with AC, and well-equipped common areas. The hostel emphasizes sustainability with waste segregation and composting initiatives.',
              'Students enjoy a peaceful environment conducive to both study and recreation, with regular cultural programs and festival celebrations.'
            ]
          }
        ]
      }
    },

    opal: {
      title: 'Opal Hostel',
      category: 'Hostels',
      icon: '⚪',
      views: 6234,
      contributors: 28,
      lastEdited: '2025-01-12',
      readingTime: 5,
      difficulty: 'Beginner',
      tags: ['Hostel', 'Boys', 'Academic'],
      keywords: ['Opal', 'Hostel', 'Boys'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '320 students' },
        { label: 'Focus', value: 'Academic Excellence' }
      ],
      content: {
        sections: [
          {
            heading: 'Opal Overview',
            paragraphs: [
              'Opal Hostel accommodates 320 male students and is known for its academic atmosphere. Many top performers and research-oriented students reside here, creating a studious environment.',
              'The hostel has excellent library facilities and dedicated quiet hours to support focused study.'
            ]
          },
          {
            heading: 'Community',
            paragraphs: [
              'Residents organize study groups, peer teaching sessions, and academic workshops. The hostel also participates in Pragyan technical events with strong representation from CSE and ECE students.',
              'Despite the academic focus, Opal maintains a balanced lifestyle with recreational activities and social events.'
            ]
          }
        ]
      }
    },

    pearl: {
      title: 'Pearl Hostel',
      category: 'Hostels',
      icon: '🤍',
      views: 5892,
      contributors: 26,
      lastEdited: '2025-01-11',
      readingTime: 5,
      difficulty: 'Beginner',
      tags: ['Hostel', 'Boys'],
      keywords: ['Pearl', 'Hostel', 'Boys'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '340 students' }
      ],
      content: {
        sections: [
          {
            heading: 'Pearl Hostel',
            paragraphs: [
              'Pearl Hostel houses 340 male students in a friendly and inclusive environment. The hostel is centrally located with easy access to academic buildings, libraries, and sports facilities.',
              'Rooms are well-maintained with regular housekeeping services and pest control measures.'
            ]
          },
          {
            heading: 'Life at Pearl',
            paragraphs: [
              'Pearl has an active student council that organizes cultural nights, movie screenings, and festival celebrations. The mess serves quality food with options for different dietary preferences.',
              'Students from various departments live together, promoting interdisciplinary interactions and friendships that last beyond college years.'
            ]
          }
        ]
      }
    },

    ruby: {
      title: 'Ruby Hostel',
      category: 'Hostels',
      icon: '🔴',
      views: 5621,
      contributors: 24,
      lastEdited: '2025-01-10',
      readingTime: 5,
      difficulty: 'Beginner',
      tags: ['Hostel', 'Boys'],
      keywords: ['Ruby', 'Hostel', 'Boys'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '310 students' }
      ],
      content: {
        sections: [
          {
            heading: 'Ruby Introduction',
            paragraphs: [
              'Ruby Hostel is home to 310 male students and offers a vibrant living experience. The hostel has excellent common facilities including a large TV room, games room, and outdoor sitting areas.',
              'The mess provides nutritious meals with a rotating menu that includes regional specialties.'
            ]
          },
          {
            heading: 'Activities',
            paragraphs: [
              'Ruby students actively participate in Festember cultural events and inter-hostel competitions. The hostel has produced winners in drama, music, and dance competitions.',
              'The friendly atmosphere and supportive seniors make Ruby an ideal home away from home for students.'
            ]
          }
        ]
      }
    },

    sapphire: {
      title: 'Sapphire Hostel',
      category: 'Hostels',
      icon: '🔵',
      views: 5234,
      contributors: 22,
      lastEdited: '2025-01-09',
      readingTime: 4,
      difficulty: 'Beginner',
      tags: ['Hostel', 'Boys'],
      keywords: ['Sapphire', 'Hostel', 'Boys'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '300 students' }
      ],
      content: {
        sections: [
          {
            heading: 'Sapphire Hostel',
            paragraphs: [
              'Sapphire Hostel accommodates 300 male students in a peaceful campus setting. The hostel is surrounded by greenery, providing a refreshing environment for students.',
              'Modern amenities include high-speed internet, 24/7 security, and well-equipped common areas for group study and recreation.'
            ]
          }
        ]
      }
    },

    emerald: {
      title: 'Emerald Hostel',
      category: 'Hostels',
      icon: '💎',
      views: 4892,
      contributors: 20,
      lastEdited: '2025-01-08',
      readingTime: 4,
      difficulty: 'Beginner',
      tags: ['Hostel', 'Boys'],
      keywords: ['Emerald', 'Hostel', 'Boys'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '290 students' }
      ],
      content: {
        sections: [
          {
            heading: 'Emerald Overview',
            paragraphs: [
              'Emerald Hostel houses 290 male students with a focus on creating a homely atmosphere. The hostel council works actively to address student concerns and organize regular events.',
              'Facilities include a well-stocked library, gym equipment, and recreational spaces for students to unwind after classes.'
            ]
          }
        ]
      }
    },

    topaz: {
      title: 'Topaz Hostel',
      category: 'Hostels',
      icon: '🟡',
      views: 4562,
      contributors: 18,
      lastEdited: '2025-01-07',
      readingTime: 4,
      difficulty: 'Beginner',
      tags: ['Hostel', 'Boys'],
      keywords: ['Topaz', 'Hostel', 'Boys'],
      quickFacts: [
        { label: 'Type', value: 'Boys Hostel' },
        { label: 'Capacity', value: '280 students' }
      ],
      content: {
        sections: [
          {
            heading: 'Topaz Hostel',
            paragraphs: [
              'Topaz Hostel is home to 280 male students and features modern infrastructure with comfortable living spaces. The hostel emphasizes cleanliness and maintains high hygiene standards.',
              'Students enjoy access to indoor games, WiFi connectivity, and a mess that caters to diverse food preferences.'
            ]
          }
        ]
      }
    },

    amber: {
      title: 'Amber Hostel',
      category: 'Hostels',
      icon: '🟠',
      views: 4234,
      contributors: 16,
      lastEdited: '2025-01-06',
      readingTime: 4,
      difficulty: 'Beginner',
      tags: ['Hostel', 'Boys'],
      keywords: ['Amber', 'Hostel
