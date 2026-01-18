'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function WikiNITT() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedArticle, setSelectedArticle] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [darkMode, setDarkMode] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // ARTICLES DATABASE - Hardcoded JSON (as per PDF requirement)
  const articles = {
    // DEPARTMENTS
    cse: {
      title: "Computer Science & Engineering",
      category: "Departments",
      keywords: ["CSE", "Computer Science", "Programming", "Coding"],
      image: "💻",
      views: 3421,
      lastEdited: "2024-01-18",
      contributors: 15,
      content: {
        intro: "The Department of Computer Science and Engineering at NIT Trichy is one of the premier CSE departments in India. Students learn cutting-edge technologies and work on projects during Pragyan and Festember.",
        sections: [
          {
            heading: "Academic Programs",
            paragraphs: [
              "The department offers B.Tech in Computer Science and Engineering (4 years), M.Tech programs with specializations in AI/ML, Data Science, Cyber Security, and Software Engineering, along with Ph.D. programs.",
              "The curriculum is regularly updated with emerging technologies and industry requirements. Students participate in Delta Force coding club and attend workshops during Pragyan festival."
            ]
          },
          {
            heading: "Research Areas",
            paragraphs: [
              "Faculty and students actively research in Artificial Intelligence and Machine Learning, Data Science and Big Data Analytics, Cyber Security and Cryptography, Internet of Things, Cloud Computing, Computer Vision, Natural Language Processing, and Blockchain Technology.",
              "The department has multiple sponsored research projects from DST, DRDO, and industry partners. Research presentations happen during Pragyan technical festival."
            ]
          },
          {
            heading: "Labs and Facilities",
            paragraphs: [
              "State-of-the-art laboratories include AI/ML Lab with GPU clusters, Network Security Lab, Software Engineering Lab, Cloud Computing Lab with AWS/Azure access, Mobile Application Development Lab, DBMS Lab, and Operating Systems Lab.",
              "All labs are equipped with high-end workstations and latest software. Students from Agate Hostel and Diamond Hostel frequently use these facilities for their projects."
            ]
          },
          {
            heading: "Placements",
            paragraphs: [
              "CSE students enjoy exceptional placement opportunities with top tech companies including Google, Microsoft, Amazon, Adobe, Goldman Sachs, Morgan Stanley, Uber, and Flipkart.",
              "The average package consistently exceeds 20 LPA with top packages reaching 1 Crore+. Many students get offers through the Career Development Cell during campus placements."
            ]
          }
        ],
        quickFacts: {
          "Established": "1984",
          "Programs": "B.Tech, M.Tech, Ph.D",
          "Faculty": "~40",
          "Labs": "15+",
          "Avg Package": "20+ LPA",
          "Top Package": "₹1 Crore+"
        },
        tags: ["Departments", "CSE", "Technology", "Placements", "Research"]
      }
    },
    ece: {
      title: "Electronics & Communication Engineering",
      category: "Departments",
      keywords: ["ECE", "Electronics", "VLSI", "Communication"],
      image: "📡",
      views: 2156,
      lastEdited: "2024-01-16",
      contributors: 12,
      content: {
        intro: "The ECE Department at NIT Trichy, established in 1964, is renowned for excellence in VLSI design and wireless communication. Students showcase projects at Pragyan and contribute to Spider R&D club activities.",
        sections: [
          {
            heading: "Department Overview",
            paragraphs: [
              "ECE offers comprehensive education covering VLSI Design, Embedded Systems, Signal Processing, Wireless Communications, and Microelectronics. The department collaborates with leading research institutions.",
              "Students participate actively in technical festivals like Pragyan and cultural events during Festember. Many ECE students reside in Jade Hostel and Coral Hostel."
            ]
          },
          {
            heading: "Research Focus",
            paragraphs: [
              "Key research areas include VLSI and Chip Design, RF and Microwave Engineering, Embedded Systems and IoT, Digital Signal Processing, Wireless Communication and 5G Technologies.",
              "Faculty members have ongoing sponsored projects worth several crores, with presentations at conferences during Pragyan festival."
            ]
          }
        ],
        quickFacts: {
          "Established": "1964",
          "Faculty": "~35",
          "Research Labs": "12",
          "Industry Partners": "50+",
          "Avg Package": "18 LPA"
        },
        tags: ["Departments", "ECE", "VLSI", "Electronics"]
      }
    },
    mech: {
      title: "Mechanical Engineering",
      category: "Departments",
      keywords: ["Mechanical", "MECH", "Manufacturing", "Robotics"],
      image: "⚙️",
      views: 1876,
      lastEdited: "2024-01-14",
      contributors: 10,
      content: {
        intro: "The Mechanical Engineering Department combines core mechanical principles with modern manufacturing and automation. Students work on robotics projects for competitions during Pragyan.",
        sections: [
          {
            heading: "Specializations",
            paragraphs: [
              "M.Tech specializations include CAD/CAM, Thermal Engineering, Manufacturing, and Industrial Engineering with strong practical focus.",
              "Students collaborate with Spider R&D for robotics projects and participate in workshops during Pragyan and Festember."
            ]
          },
          {
            heading: "Research",
            paragraphs: [
              "Research areas include Robotics, Automation, Advanced Manufacturing, Thermal Engineering, Renewable Energy, and Composite Materials."
            ]
          }
        ],
        quickFacts: {
          "Established": "1964",
          "Specializations": "CAD/CAM, Thermal",
          "Workshop": "5000 sq.ft",
          "Labs": "10+",
          "Avg Package": "12 LPA"
        },
        tags: ["Departments", "Mechanical", "Manufacturing"]
      }
    },

    // HOSTELS
    agate: {
      title: "Agate Hostel",
      category: "Hostels",
      keywords: ["Agate", "Boys Hostel", "Accommodation"],
      image: "🏢",
      views: 1247,
      lastEdited: "2024-01-15",
      contributors: 8,
      content: {
        intro: "Agate Hostel is a premier boys' hostel at NIT Trichy, home to students from various departments including CSE and ECE. Residents actively participate in Pragyan and Festember celebrations.",
        sections: [
          {
            heading: "History and Establishment",
            paragraphs: [
              "Agate Hostel was established in the early 2000s as part of NIT Trichy campus expansion. Named after the gemstone Agate, it reflects the institute's tradition.",
              "The hostel provides modern facilities for male students pursuing engineering in departments like Computer Science and Engineering and Electronics."
            ]
          },
          {
            heading: "Facilities",
            paragraphs: [
              "The hostel features well-designed rooms with study tables, beds, and storage. Common rooms have TV and recreational facilities.",
              "Sports facilities include table tennis, badminton courts, and high-speed WiFi. Students frequently attend events at the Student Activity Center and prepare for Pragyan competitions."
            ]
          },
          {
            heading: "Student Life",
            paragraphs: [
              "Agate residents participate in cultural nights, technical workshops, and sports tournaments. The hostel council manages affairs and organizes celebrations during Festember.",
              "Many students are members of Delta Force and Spider R&D clubs, working on projects showcased at Pragyan."
            ]
          },
          {
            heading: "Mess and Dining",
            paragraphs: [
              "The mess provides nutritious meals with North Indian, South Indian, and Chinese cuisine. Special meals during festivals like Diwali and Pongal.",
              "The mess committee ensures quality food. Students often discuss projects and Pragyan preparations during meals."
            ]
          }
        ],
        quickFacts: {
          "Established": "Early 2000s",
          "Type": "Boys Hostel",
          "Capacity": "~200 students",
          "Floors": "4",
          "Mess Type": "Non-Veg & Veg"
        },
        tags: ["Hostels", "Boys Hostel", "Accommodation", "Student Life"]
      }
    },
    diamond: {
      title: "Diamond Hostel",
      category: "Hostels",
      keywords: ["Diamond", "Boys Hostel"],
      image: "💎",
      views: 892,
      lastEdited: "2024-01-10",
      contributors: 6,
      content: {
        intro: "Diamond Hostel is a boys' hostel at NIT Trichy with excellent facilities. Students participate actively in Pragyan technical events and Festember cultural programs.",
        sections: [
          {
            heading: "Overview",
            paragraphs: [
              "Diamond Hostel provides comfortable accommodation for male students. Located near academic blocks for easy access to Computer Science and Mechanical departments.",
              "The hostel has strong participation in campus festivals like Pragyan and Festember."
            ]
          },
          {
            heading: "Facilities",
            paragraphs: [
              "Features include spacious rooms, study halls, common recreation areas, and well-maintained mess serving diverse cuisines.",
              "WiFi connectivity and washing facilities available. Students use the Central Library and Student Activity Center regularly."
            ]
          }
        ],
        quickFacts: {
          "Type": "Boys Hostel",
          "Capacity": "~150 students",
          "Floors": "3",
          "Mess": "Veg & Non-Veg"
        },
        tags: ["Hostels", "Boys Hostel", "Accommodation"]
      }
    },
    jade: {
      title: "Jade Hostel",
      category: "Hostels",
      keywords: ["Jade", "Boys Hostel", "Sports"],
      image: "🏨",
      views: 756,
      lastEdited: "2024-01-12",
      contributors: 5,
      content: {
        intro: "Jade Hostel is known for its strong sports culture. Boys from ECE and other departments participate in inter-hostel competitions during Pragyan and Festember.",
        sections: [
          {
            heading: "About Jade",
            paragraphs: [
              "This boys' hostel houses students from Electrical, Electronics, and Computer Science departments. Known for producing excellent athletes.",
              "Students actively participate in Pragyan robotics competitions and Festember cultural events."
            ]
          },
          {
            heading: "Sports Facilities",
            paragraphs: [
              "Extensive facilities including basketball court, volleyball court, and cricket nets. Regular winners of inter-hostel tournaments during campus festivals."
            ]
          }
        ],
        quickFacts: {
          "Type": "Boys Hostel",
          "Capacity": "~180 students",
          "Sports": "Basketball, Volleyball"
        },
        tags: ["Hostels", "Boys Hostel", "Sports"]
      }
    },
    coral: {
      title: "Coral Hostel",
      category: "Hostels",
      keywords: ["Coral", "Boys Hostel", "Modern"],
      image: "🪸",
      views: 634,
      lastEdited: "2024-01-08",
      contributors: 4,
      content: {
        intro: "Coral Hostel is one of the newer boys' hostels with modern facilities and eco-friendly initiatives. Students contribute to Pragyan organization and Festember events.",
        sections: [
          {
            heading: "Modern Infrastructure",
            paragraphs: [
              "Built in 2015 with modern architecture, larger rooms, and scenic views. Accommodates male students from various engineering departments.",
              "Many residents are involved in E-Cell startup initiatives and participate in Pragyan business competitions."
            ]
          },
          {
            heading: "Green Initiatives",
            paragraphs: [
              "Features rainwater harvesting, solar panels, and organic garden maintained by students. Environmental awareness programs during campus festivals."
            ]
          }
        ],
        quickFacts: {
          "Type": "Boys Hostel",
          "Established": "2015",
          "Special": "Eco-friendly"
        },
        tags: ["Hostels", "Boys Hostel", "Modern"]
      }
    },

    // STUDENT LIFE
    pragyan: {
      title: "Pragyan",
      category: "Student Life",
      keywords: ["Pragyan", "Technical Festival", "Tech Fest"],
      image: "🎯",
      views: 5234,
      lastEdited: "2024-01-16",
      contributors: 18,
      content: {
        intro: "Pragyan is NIT Trichy's annual technical festival attracting 25,000+ participants. Students from CSE, ECE, and Mechanical departments organize hackathons, robotics competitions, and workshops.",
        sections: [
          {
            heading: "About Pragyan",
            paragraphs: [
              "Four-day technical extravaganza featuring competitions in coding, robotics, and business. Students from Agate Hostel, Diamond Hostel, and other hostels participate actively.",
              "The festival attracts participants from 500+ colleges with international reach. Organized entirely by students with guidance from faculty."
            ]
          },
          {
            heading: "Events",
            paragraphs: [
              "Pragyan hosts 50+ events including hackathons, competitive programming by Delta Force, robotics competitions by Spider R&D, and workshops on AI/ML.",
              "Gaming tournaments in CS:GO, Valorant, and COD Mobile attract huge participation. Students from Computer Science and Electronics departments lead technical events."
            ]
          },
          {
            heading: "Workshops",
            paragraphs: [
              "Industry experts conduct workshops on Machine Learning, Web Development, Blockchain, IoT, and Cyber Security.",
              "Guest lectures feature CEOs from tech giants and successful entrepreneurs. The Career Development Cell coordinates company visits during Pragyan."
            ]
          },
          {
            heading: "Organization",
            paragraphs: [
              "100+ core team members and 500+ volunteers manage logistics, sponsorship, events, and publicity.",
              "Students balance Pragyan responsibilities with academics, staying in hostels like Jade and Coral while organizing."
            ]
          }
        ],
        quickFacts: {
          "Established": "1996",
          "Duration": "4 days",
          "Participants": "25,000+",
          "Events": "50+",
          "Prize Pool": "₹40 Lakhs+"
        },
        tags: ["Student Life", "Events", "Technical", "Festival"]
      }
    },
    festember: {
      title: "Festember",
      category: "Student Life",
      keywords: ["Festember", "Cultural Festival", "Fest"],
      image: "🎭",
      views: 4876,
      lastEdited: "2024-01-14",
      contributors: 16,
      content: {
        intro: "Festember is the annual cultural festival of NIT Trichy, one of South India's largest with 60,000+ participants. Students from all departments and hostels showcase talents in music, dance, and drama.",
        sections: [
          {
            heading: "Cultural Events",
            paragraphs: [
              "Festember features competitions in dance, music, drama, and fashion. Students from Agate, Diamond, Jade, and Coral hostels participate enthusiastically.",
              "Pro-nights feature celebrities like Arijit Singh and Sunidhi Chauhan. Comedy shows by Zakir Khan and Kenny Sebastian attract huge crowds."
            ]
          },
          {
            heading: "Literary Events",
            paragraphs: [
              "Debates, extempore, creative writing, poetry slam, and quizzing competitions. Students from Computer Science and other departments showcase literary skills.",
              "The Student Activity Center hosts many literary events during Festember preparation."
            ]
          },
          {
            heading: "Organization",
            paragraphs: [
              "800+ volunteers work round-the-clock managing events, publicity, and hospitality. Students coordinate with the Career Development Cell for sponsorships.",
              "Festember provides event management experience valuable for placements. Similar to Pragyan, it's entirely student-run."
            ]
          }
        ],
        quickFacts: {
          "Established": "1975",
          "Duration": "4 days",
          "Participants": "60,000+",
          "Events": "100+",
          "Pro-Nights": "4"
        },
        tags: ["Student Life", "Events", "Cultural", "Festival"]
      }
    },
    delta: {
      title: "Delta Force",
      category: "Student Life",
      keywords: ["Delta Force", "Coding Club", "Programming"],
      image: "⌨️",
      views: 4231,
      lastEdited: "2024-01-18",
      contributors: 14,
      content: {
        intro: "Delta Force is the premier coding club at NIT Trichy. Members from CSE and ECE departments organize coding contests and hackathons during Pragyan.",
        sections: [
          {
            heading: "Activities",
            paragraphs: [
              "Regular competitive programming contests, coding bootcamps, and hackathons. Students from Agate Hostel and Diamond Hostel actively participate.",
              "Delta Force organizes major coding events during Pragyan including 24-hour hackathons with substantial prize pools."
            ]
          },
          {
            heading: "Development",
            paragraphs: [
              "Web and mobile app development projects. Members build solutions showcased at Pragyan and participate in Smart India Hackathon.",
              "Collaboration with Spider R&D for interdisciplinary projects. Alumni from Delta Force work at Google, Microsoft, and Amazon."
            ]
          },
          {
            heading: "Placement Preparation",
            paragraphs: [
              "Mock interviews, coding practice, and resume building sessions. Works with Career Development Cell for placement success.",
              "Many Computer Science students credit Delta Force for placement offers from top tech companies."
            ]
          }
        ],
        quickFacts: {
          "Members": "200+",
          "Weekly Contests": "Yes",
          "Hackathons": "5+ per year",
          "Focus": "Competitive Programming"
        },
        tags: ["Student Life", "Clubs", "Coding", "Technology"]
      }
    },
    spider: {
      title: "Spider R&D",
      category: "Student Life",
      keywords: ["Spider", "Robotics", "IoT", "Hardware"],
      image: "🕷️",
      views: 3654,
      lastEdited: "2024-01-16",
      contributors: 12,
      content: {
        intro: "Spider R&D is the robotics and innovation club. Students from Mechanical, ECE, and CSE departments build robots and IoT projects for Pragyan competitions.",
        sections: [
          {
            heading: "Projects",
            paragraphs: [
              "Autonomous robots, IoT systems, and embedded projects. Many members reside in Jade Hostel and Coral Hostel.",
              "Spider participates in ABU Robocon and showcases innovations at Pragyan. Collaboration with Delta Force for software integration."
            ]
          },
          {
            heading: "Competitions",
            paragraphs: [
              "Regular participation in IIT tech fests and Pragyan robotics events. Won multiple awards at national competitions.",
              "Students from Electronics and Mechanical departments lead hardware design while Computer Science students handle programming."
            ]
          }
        ],
        quickFacts: {
          "Members": "150+",
          "Projects": "25+ active",
          "Competitions": "20+ wins",
          "Focus": "Robotics, IoT"
        },
        tags: ["Student Life", "Clubs", "Robotics", "Innovation"]
      }
    },
    sac: {
      title: "Student Activity Center",
      category: "Student Life",
      keywords: ["SAC", "Student Center", "Clubs", "Activities"],
      image: "🎪",
      views: 3124,
      lastEdited: "2024-01-15",
      contributors: 13,
      content: {
        intro: "The Student Activity Center is the hub for extracurricular activities. Students from all hostels use SAC facilities for club meetings, practice sessions, and Pragyan/Festember preparations.",
        sections: [
          {
            heading: "Facilities",
            paragraphs: [
              "Music rooms, dance studios, art studios, and multipurpose halls. Students from Agate, Diamond, Jade, and Coral hostels regularly use these facilities.",
              "SAC houses 40+ student clubs including Delta Force, Spider R&D, E-Cell, and NSS. Central location for Pragyan and Festember organizing committees."
            ]
          },
          {
            heading: "Clubs",
            paragraphs: [
              "Technical clubs like Delta and Spider, cultural clubs for music and dance, and social service through NSS.",
              "During Pragyan and Festember, SAC becomes the nerve center with round-the-clock activity for event preparation."
            ]
          }
        ],
        quickFacts: {
          "Clubs": "40+",
          "Practice Rooms": "15+",
          "Hours": "6 AM - 11 PM",
          "Music Rooms": "6"
        },
        tags: ["Student Life", "Campus", "Clubs", "Activities"]
      }
    },
    library: {
      title: "Central Library",
      category: "Student Life",
      keywords: ["Library", "Books", "Study", "Resources"],
      image: "📚",
      views: 2764,
      lastEdited: "2024-01-12",
      contributors: 11,
      content: {
        intro: "The Central Library is a five-story facility with 2,00,000+ books and digital resources. Students from CSE, ECE, and all departments use it for academic research and Pragyan project preparation.",
        sections: [
          {
            heading: "Collections",
            paragraphs: [
              "Extensive collection of engineering textbooks, research journals, and e-books. Resources for Computer Science, Electronics, and Mechanical departments.",
              "Students from Agate Hostel, Diamond Hostel, and other hostels access the library for assignments and Pragyan competition preparation."
            ]
          },
          {
            heading: "Digital Resources",
            paragraphs: [
              "Access to IEEE Xplore, Springer, ScienceDirect, and other databases. Essential for research in AI/ML, VLSI, and robotics.",
              "Students working on Pragyan projects and Delta Force hackathons utilize these resources extensively."
            ]
          },
          {
            heading: "Study Facilities",
            paragraphs: [
              "500+ seating capacity, individual study cubicles, and discussion rooms. 24/7 access during exams.",
              "Groups from Spider R&D and other clubs meet here for project discussions. Close to the Student Activity Center and Career Development Cell."
            ]
          }
        ],
        quickFacts: {
          "Books": "2,00,000+",
          "E-Books": "50,000+",
          "Seating": "500+",
          "Hours": "8 AM - 11 PM"
        },
        tags: ["Student Life", "Campus", "Library", "Resources"]
      }
    },
    cdc: {
      title: "Career Development Cell",
      category: "Student Life",
      keywords: ["CDC", "Placements", "Career", "Jobs"],
      image: "💼",
      views: 2987,
      lastEdited: "2024-01-17",
      contributors: 9,
      content: {
        intro: "The Career Development Cell facilitates 100% placement for students. Companies visit during Pragyan and dedicated placement drives. Students from CSE, ECE, and Mechanical get excellent offers.",
        sections: [
          {
            heading: "Placements",
            paragraphs: [
              "300+ companies visit annually including Google, Microsoft, Amazon from Computer Science recruiting, and core companies for Mechanical and Electronics students.",
              "Average package ₹14.5 LPA, highest ₹1.05 Crore. Students from Agate, Diamond, Jade, and Coral hostels achieve excellent results."
            ]
          },
          {
            heading: "Preparation",
            paragraphs: [
              "CDC conducts aptitude workshops, coding bootcamps by Delta Force members, and mock interviews.",
              "Collaboration with Student Activity Center for soft skills training. Alumni from top companies mentor students during Pragyan."
            ]
          },
          {
            heading: "Internships",
            paragraphs: [
              "Summer internships arranged at IITs, IISc, Google, Microsoft, and startups. Many lead to PPOs.",
              "Students working on Pragyan projects showcase them to recruiters. Spider R&D robotics projects impress core companies."
            ]
          }
        ],
        quickFacts: {
          "Placement": "100%",
          "Companies": "300+",
          "Highest": "₹1.05 Crore",
          "Average": "₹14.5 LPA"
        },
        tags: ["Student Life", "Placements", "Career", "Jobs"]
      }
    },
    ecell: {
      title: "E-Cell",
      category: "Student Life",
      keywords: ["E-Cell", "Entrepreneurship", "Startups", "Business"],
      image: "💡",
      views: 2876,
      lastEdited: "2024-01-14",
      contributors: 10,
      content: {
        intro: "The Entrepreneurship Cell fosters startup culture at NIT Trichy. Students from CSE, ECE, and other departments develop business ideas, with many startups showcased at Pragyan.",
        sections: [
          {
            heading: "Startup Support",
            paragraphs: [
              "E-Cell provides mentorship, funding connections, and workspace. Many students from Coral Hostel and Agate Hostel participate in incubation programs.",
              "During Pragyan, E-Cell organizes startup competitions and investor meets. Delta Force members often combine coding skills with entrepreneurship."
            ]
          },
          {
            heading: "Events",
            paragraphs: [
              "Business plan competitions, pitch sessions, and workshops during Pragyan and Festember. Guest speakers from successful startups and VCs.",
              "Collaboration with Career Development Cell for placement alternatives through entrepreneurship."
            ]
          }
        ],
        quickFacts: {
          "Members": "150+",
          "Startups Launched": "30+",
          "Events": "20+ per year",
          "Focus": "Entrepreneurship"
        },
        tags: ["Student Life", "Entrepreneurship", "Startups", "Business"]
      }
    },
    nss: {
      title: "NSS",
      category: "Student Life",
      keywords: ["NSS", "Social Service", "Volunteering", "Community"],
      image: "🤝",
      views: 3124,
      lastEdited: "2024-01-13",
      contributors: 11,
      content: {
        intro: "The National Service Scheme at NIT Trichy focuses on social service. Students from all departments and hostels participate in community development, blood donation drives, and awareness campaigns alongside Pragyan and Festember.",
        sections: [
          {
            heading: "Activities",
            paragraphs: [
              "Regular blood donation camps, teaching underprivileged children, and cleanliness drives. Students from Diamond Hostel, Jade Hostel, and other hostels actively volunteer.",
              "During Pragyan and Festember, NSS organizes social awareness programs. Works with Student Activity Center for community outreach."
            ]
          },
          {
            heading: "Impact",
            paragraphs: [
              "300+ volunteers conduct village camps and disaster relief. Students from Computer Science, Electronics, and Mechanical departments contribute their technical skills.",
              "NSS collaborates with E-Cell for social entrepreneurship projects showcased at Pragyan."
            ]
          }
        ],
        quickFacts: {
          "Volunteers": "300+",
          "Villages": "5 adopted",
          "Blood Donation": "500+ units/year",
          "Focus": "Social Service"
        },
        tags: ["Student Life", "Social Service", "Volunteering", "Community"]
      }
    }
  }

  // AUTO-LINKING FEATURE (BONUS REQUIREMENT)
  const createAutoLinkedContent = (text) => {
    let linkedText = text
    
    // Get all article titles and keywords
    const linkableTerms = []
    Object.entries(articles).forEach(([key, article]) => {
      linkableTerms.push({ key, term: article.title, type: 'title' })
      if (article.keywords) {
        article.keywords.forEach(keyword => {
          linkableTerms.push({ key, term: keyword, type: 'keyword' })
        })
      }
    })

    // Sort by length (longest first) to avoid partial matches
    linkableTerms.sort((a, b) => b.term.length - a.term.length)

    // Replace terms with markers first (to avoid double-linking)
    const replacements = []
    linkableTerms.forEach(({ key, term }) => {
      const regex = new RegExp(`\\b(${term})\\b`, 'gi')
      linkedText = linkedText.replace(regex, (match) => {
        const marker = `[[LINK:${key}:${match}]]`
        replacements.push({ marker, key, text: match })
        return marker
      })
    })

    return { linkedText, replacements }
  }

  // Render auto-linked content
  const renderAutoLinkedContent = (text) => {
    const { linkedText, replacements } = createAutoLinkedContent(text)
    const parts = linkedText.split(/(\[\[LINK:.*?\]\])/)
    
    return parts.map((part, idx) => {
      const linkMatch = part.match(/\[\[LINK:(.*?):(.*?)\]\]/)
      if (linkMatch) {
        const [, key, text] = linkMatch
        return (
          <button
            key={idx}
            onClick={() => setSelectedArticle(key)}
            className={`${
              darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            } underline transition-colors`}
          >
            {text}
          </button>
        )
      }
      return <span key={idx}>{part}</span>
    })
  }

  // CATEGORY-BASED FILTERING (PDF REQUIREMENT)
  const getArticlesByCategory = (category) => {
    if (category === 'all') return Object.entries(articles)
    return Object.entries(articles).filter(([_, article]) => article.category === category)
  }

  // SEARCH FUNCTIONALITY (PDF REQUIREMENT)
  const getSearchResults = () => {
    if (!searchQuery) return []
    return Object.entries(articles).filter(([_, article]) => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.intro.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const currentArticle = articles[selectedArticle] || null
  const displayArticles = selectedCategory === 'all' 
    ? getArticlesByCategory('all')
    : getArticlesByCategory(selectedCategory)

  // Navigation menu items (PDF REQUIREMENT)
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'departments', label: 'Departments', icon: '🎓', category: 'Departments' },
    { id: 'hostels', label: 'Hostels', icon: '🏨', category: 'Hostels' },
    { id: 'student-life', label: 'Student Life', icon: '🎉', category: 'Student Life' },
  ]

  const handleNavClick = (item) => {
    if (item.id === 'home') {
      setSelectedArticle('home')
      setSelectedCategory('all')
    } else {
      setSelectedArticle('home')
      setSelectedCategory(item.category)
    }
    setShowMobileMenu(false)
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900'
    }`}>
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-blue-600' : 'bg-blue-400'
        }`} style={{ animation: 'float 20s ease-in-out infinite' }}></div>
        <div className={`absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-indigo-600' : 'bg-indigo-400'
        }`} style={{ animation: 'float 25s ease-in-out infinite reverse' }}></div>
      </div>

      {/* HEADER WITH NAVIGATION MENU (PDF REQUIREMENT) */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        darkMode 
          ? 'bg-slate-900/90 border-slate-800 shadow-lg shadow-black/20' 
          : 'bg-white/90 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Title (PDF REQUIREMENT) */}
            <button
              onClick={() => {
                setSelectedArticle('home')
                setSelectedCategory('all')
                setShowMobileMenu(false)
              }}
              className="flex items-center gap-2 sm:gap-3 group"
            >
              {/* Logo */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id={`logo${darkMode ? 'D' : 'L'}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: darkMode ? '#3B82F6' : '#2563EB', stopOpacity:1}} />
                      <stop offset="50%" style={{stopColor: darkMode ? '#06B6D4' : '#0891B2', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor: darkMode ? '#8B5CF6' : '#7C3AED', stopOpacity:1}} />
                    </linearGradient>
                    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#F59E0B', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#EF4444', stopOpacity:1}} />
                    </linearGradient>
                  </defs>
                  <polygon points="24,4 40,14 40,34 24,44 8,34 8,14" fill={`url(#logo${darkMode ? 'D' : 'L'})`} className="transition-all group-hover:scale-110"/>
                  <polygon points="24,10 35,17 35,31 24,38 13,31 13,17" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3"/>
                  <g transform="translate(24, 24)">
                    <path d="M -8 -6 Q -8 -7 -7 -7 L -1 -7 L -1 7 L -7 7 Q -8 7 -8 6 Z" fill="#FFFFFF"/>
                    <path d="M 1 -7 L 7 -7 Q 8 -7 8 -6 L 8 6 Q 8 7 7 7 L 1 7 Z" fill="#FFFFFF" opacity="0.8"/>
                    <rect x="-1" y="-7" width="2" height="14" fill="url(#accent)"/>
                  </g>
                  <circle cx="24" cy="3" r="1.5" fill="#FBBF24" opacity="0.8"/>
                  <circle cx="41" cy="24" r="1.5" fill="#22D3EE" opacity="0.8"/>
                  <circle cx="24" cy="45" r="1.5" fill="#FBBF24" opacity="0.8"/>
                  <circle cx="7" cy="24" r="1.5" fill="#22D3EE" opacity="0.8"/>
                </svg>
              </div>
              
              {/* Title + Description (PDF REQUIREMENT) */}
              <div>
                <h1 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${
                  darkMode 
                    ? 'from-blue-400 via-cyan-400 to-indigo-400' 
                    : 'from-blue-600 to-indigo-600'
                } bg-clip-text text-transparent drop-shadow-lg`}>
                  WikiNITT
                </h1>
                <p className={`text-xs hidden sm:block ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Wikipedia for NIT Trichy
                </p>
              </div>
            </button>

            {/* Desktop Navigation Menu (PDF REQUIREMENT) */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    (item.id === 'home' && selectedArticle === 'home' && selectedCategory === 'all') ||
                    (item.category === selectedCategory && selectedArticle === 'home')
                      ? darkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-600 text-white'
                      : darkMode
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center gap-3">
              {/* SEARCH BAR (PDF REQUIREMENT) */}
              <div className="relative">
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className={`p-3 rounded-xl transition-all ${
                    darkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100'
                  }`}
                >
                  🔍
                </button>
                
                {showSearch && (
                  <div className={`absolute right-0 mt-2 w-96 rounded-2xl shadow-2xl border overflow-hidden ${
                    darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
                  }`}>
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`w-full px-4 py-3 outline-none ${
                        darkMode ? 'bg-slate-800 text-white placeholder-slate-500' : 'bg-white text-slate-900'
                      }`}
                      autoFocus
                    />
                    {searchQuery && (
                      <div className="max-h-96 overflow-y-auto">
                        {getSearchResults().map(([key, article]) => (
                          <button
                            key={key}
                            onClick={() => {
                              setSelectedArticle(key)
                              setShowSearch(false)
                              setSearchQuery('')
                            }}
                            className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all ${
                              darkMode ? 'hover:bg-slate-700 border-b border-slate-700' : 'hover:bg-slate-50 border-b border-slate-100'
                            }`}
                          >
                            <span className="text-2xl">{article.image}</span>
                            <div className="flex-1">
                              <div className={`font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                {article.title}
                              </div>
                              <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                {article.category}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-xl transition-all ${
                  darkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className={`p-2.5 rounded-lg ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
              >
                🔍
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-lg ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={`p-2.5 rounded-lg ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showMobileMenu ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {showSearch && (
            <div className="md:hidden mt-3">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg outline-none ${
                  darkMode ? 'bg-slate-800 text-white' : 'bg-slate-100'
                }`}
              />
              {searchQuery && (
                <div className={`mt-2 rounded-lg border overflow-hidden ${
                  darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
                }`}>
                  {getSearchResults().slice(0, 5).map(([key, article]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedArticle(key)
                        setShowSearch(false)
                        setSearchQuery('')
                      }}
                      className={`w-full px-3 py-2.5 text-left flex items-center gap-2 ${
                        darkMode ? 'hover:bg-slate-700 border-b border-slate-700' : 'hover:bg-slate-50 border-b border-slate-100'
                      }`}
                    >
                      <span className="text-xl">{article.image}</span>
                      <div>
                        <div className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {article.title}
                        </div>
                        <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                          {article.category}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Mobile Navigation Menu */}
          {showMobileMenu && (
            <div className="md:hidden lg:hidden mt-3">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                <div className="text-xs font-semibold mb-2 uppercase tracking-wide opacity-60">Navigation</div>
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item)}
                      className={`w-full px-3 py-2 rounded-lg text-left text-sm font-medium transition-all ${
                        (item.id === 'home' && selectedArticle === 'home' && selectedCategory === 'all') ||
                        (item.category === selectedCategory && selectedArticle === 'home')
                          ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                          : darkMode ? 'bg-slate-700/50 text-slate-300' : 'bg-white text-slate-700'
                      }`}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
        {selectedArticle === 'home' ? (
          // HOMEPAGE (PDF REQUIREMENT)
          <div className="space-y-8 sm:space-y-12">
            {/* Hero Section with Title & Description (PDF REQUIREMENT) */}
            <div className="text-center space-y-4 sm:space-y-6 py-8 sm:py-16">
              <h2 className={`text-4xl sm:text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-r ${
                darkMode ? 'from-blue-400 via-cyan-400 to-indigo-400' : 'from-blue-600 via-indigo-600 to-purple-600'
              } bg-clip-text text-transparent`}>
                WikiNITT
              </h2>
              <p className={`text-base sm:text-xl max-w-3xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                The comprehensive Wikipedia for National Institute of Technology, Tiruchirappalli. Explore departments, hostels, student life, and everything about NIT Trichy campus.
              </p>
            </div>

            {/* Category Display */}
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {selectedCategory === 'all' ? 'All Articles' : selectedCategory}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {displayArticles.map(([key, article]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedArticle(key)}
                    className={`p-4 sm:p-6 rounded-xl border text-left transition-all hover:scale-105 hover:shadow-2xl group ${
                      darkMode ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start justify-between">
                        <div className="text-4xl sm:text-5xl transform group-hover:scale-125 group-hover:rotate-12 transition-transform">
                          {article.image}
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          darkMode ? 'bg-slate-700/50 text-slate-400' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {article.category}
                        </span>
                      </div>
                      <div>
                        <h4 className={`text-lg sm:text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {article.title}
                        </h4>
                        <p className={`text-sm mb-3 line-clamp-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                          {article.content.intro}
                        </p>
                        <div className={`flex items-center gap-3 text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                          <span>👀 {article.views}</span>
                          <span>👥 {article.contributors}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : currentArticle ? (
          // ARTICLE PAGE (PDF REQUIREMENT - Read View with Title, Category, Content Sections)
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <button
                  onClick={() => setSelectedArticle('home')}
                  className={`mb-4 flex items-center gap-2 text-sm transition-all ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  ← Back to {selectedCategory === 'all' ? 'Home' : selectedCategory}
                </button>
                
                {/* TITLE & CATEGORY (PDF REQUIREMENT) */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl sm:text-6xl">{currentArticle.image}</span>
                  <div className="flex-1">
                    <h1 className={`text-2xl sm:text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {currentArticle.title}
                    </h1>
                    <div className={`flex flex-wrap items-center gap-3 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        📁 {currentArticle.category}
                      </span>
                      <span>👀 {currentArticle.views}</span>
                      <span>✏️ {currentArticle.contributors} contributors</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT SECTIONS with AUTO-LINKING (PDF REQUIREMENT) */}
              <div className={`p-6 sm:p-8 rounded-2xl border ${
                darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-slate-200'
              }`}>
                {/* Introduction with Auto-Linking */}
                <p className={`text-base sm:text-lg leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {renderAutoLinkedContent(currentArticle.content.intro)}
                </p>

                {/* Content Sections (HEADINGS & PARAGRAPHS - PDF REQUIREMENT) */}
                {currentArticle.content.sections.map((section, idx) => (
                  <div key={idx} className="mb-8 last:mb-0">
                    {/* HEADING (PDF REQUIREMENT) */}
                    <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {section.heading}
                    </h2>
                    {/* PARAGRAPHS with Auto-Linking (PDF REQUIREMENT) */}
                    {section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className={`text-sm sm:text-base leading-relaxed mb-4 last:mb-0 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {renderAutoLinkedContent(para)}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar with Quick Facts */}
            <div className="space-y-6">
              <div className={`p-5 sm:p-6 rounded-2xl border lg:sticky lg:top-24 ${
                darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-slate-200'
              }`}>
                <h3 className={`text-base sm:text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  📊 Quick Facts
                </h3>
                <div className="space-y-3">
                  {Object.entries(currentArticle.content.quickFacts).map(([key, value], idx) => (
                    <div key={idx} className={`pb-3 border-b ${darkMode ? 'border-slate-700/50' : 'border-slate-200'} last:border-0`}>
                      <div className={`text-xs font-medium mb-1 uppercase ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {key}
                      </div>
                      <div className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className={`p-5 sm:p-6 rounded-2xl border ${
                darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-slate-200'
              }`}>
                <h3 className={`text-base sm:text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  🔗 Related Articles
                </h3>
                <div className="space-y-2">
                  {Object.entries(articles)
                    .filter(([key]) => key !== selectedArticle)
                    .filter(([_, article]) => article.category === currentArticle.category)
                    .slice(0, 4)
                    .map(([key, article]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedArticle(key)}
                        className={`w-full p-3 rounded-lg text-left transition-all ${
                          darkMode ? 'hover:bg-slate-700/50' : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{article.image}</span>
                          <div className="flex-1 min-w-0">
                            <div className={`text-sm font-medium truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                              {article.title}
                            </div>
                            <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                              {article.category}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Footer */}
      <footer className={`mt-12 sm:mt-16 border-t py-6 sm:py-8 backdrop-blur-sm relative z-10 ${
        darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white/50 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            WikiNITT - Wikipedia for NIT Trichy © 2024
          </p>
          <p className={`text-xs mt-2 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
            Made with ❤️ by NIT Trichy Students | {Object.keys(articles).length} Articles
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(20px); }
        }
      `}</style>
    </div>
  )
}
