'use client'
import { useState, useEffect } from 'react'

export default function WikiNITT() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedArticle, setSelectedArticle] = useState('home')
  const [darkMode, setDarkMode] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [selectedArticle])

  // Comprehensive Articles Database
  const articles = {
    agate: {
      title: "Agate Hostel",
      category: "Hostels",
      image: "🏢",
      views: 1247,
      lastEdited: "2024-01-15",
      contributors: 8,
      content: {
        intro: "Agate Hostel is one of the prominent boys' residential facilities at the National Institute of Technology (NIT), Tiruchirappalli. Known for its modern amenities and vibrant community, Agate serves as home to undergraduate male students pursuing various engineering disciplines.",
        sections: [
          {
            title: "History and Establishment",
            content: "Agate Hostel was established in the early 2000s as part of NIT Trichy's expansion to accommodate the growing student population. Named after the semi-precious stone 'Agate', the hostel embodies the institution's tradition of naming residential facilities after gemstones. The hostel was designed with modern architecture and student-centric facilities, reflecting the institute's commitment to providing quality living spaces for male students."
          },
          {
            title: "Infrastructure and Facilities",
            content: "The hostel features well-designed rooms with adequate ventilation and natural lighting. Each room is furnished with essential amenities including study tables, chairs, beds, and storage facilities. The hostel complex includes common rooms equipped with television and recreational facilities, reading rooms for focused study, a mess hall serving nutritious meals, sports facilities including table tennis and badminton courts, and high-speed internet connectivity throughout the premises. The hostel also has a ground floor common area with sofas and a TV lounge where students gather for sports viewing and social interaction."
          },
          {
            title: "Student Life and Culture",
            content: "Agate Hostel is known for its vibrant student culture and strong sense of brotherhood. The residents actively participate in various cultural, technical, and sports activities. The hostel organizes regular events including cultural nights, technical workshops, sports tournaments, and festival celebrations. The hostel council, elected by students, plays a crucial role in managing hostel affairs and representing student interests. Annual hostel day celebrations feature performances, competitions, and dinner gatherings that strengthen bonds among residents."
          },
          {
            title: "Mess and Dining",
            content: "The hostel mess provides nutritious and hygienic food to residents. The menu is carefully planned to offer a balanced diet with varied cuisine options including North Indian, South Indian, and Chinese dishes on rotation. Special meals are prepared during festivals like Diwali, Pongal, and Onam with traditional delicacies. The mess committee, comprising student representatives, works closely with the mess management to ensure food quality and address student preferences. Breakfast typically includes items like idli, dosa, poha, and bread with accompaniments."
          },
          {
            title: "Room Arrangements",
            content: "Rooms in Agate are typically double occupancy for first and second years, with single rooms available for senior students based on availability. Each room has individual study lamps, fans, and electrical outlets. The hostel provides mattresses, and students bring their own bedding. Balconies in select rooms offer views of the campus greenery, providing a refreshing study environment."
          },
          {
            title: "Rules and Regulations",
            content: "The hostel operates under a set of rules designed to ensure discipline, safety, and a conducive living environment. These include designated entry and exit timings with appropriate permissions required for late entry, visitor regulations to maintain security, prohibition of unauthorized electrical appliances for safety, mandatory attendance during hostel events, and cleanliness and hygiene standards to be maintained by all residents. Night outs require prior permission from the warden."
          }
        ],
        quickFacts: {
          "Established": "Early 2000s",
          "Type": "Boys Hostel",
          "Capacity": "~200 students",
          "Floors": "4",
          "Mess Type": "Non-Veg & Veg",
          "Common Rooms": "3",
          "Sports": "TT, Badminton, Carrom"
        },
        tags: ["Hostels", "Boys Hostel", "Accommodation", "Student Life", "NIT Trichy"]
      }
    },
    diamond: {
      title: "Diamond Hostel",
      category: "Hostels",
      image: "💎",
      views: 892,
      lastEdited: "2024-01-10",
      contributors: 6,
      content: {
        intro: "Diamond Hostel is one of the boys' hostels at NIT Trichy, known for its excellent facilities and supportive community environment. It provides comfortable living space for undergraduate male students.",
        sections: [
          {
            title: "Overview and Location",
            content: "Diamond Hostel stands as one of the well-maintained boys' hostels at NIT Trichy. Located strategically near the academic blocks, it is convenient for students to attend classes. The hostel combines modern amenities with a warm atmosphere that helps students transition smoothly into campus life."
          },
          {
            title: "Facilities and Amenities",
            content: "The hostel features spacious rooms with attached or common washrooms depending on the floor, well-equipped study rooms with good lighting, common recreation areas with TV and indoor games, a well-maintained mess serving diverse cuisines, high-speed WiFi connectivity, water purifiers on each floor, and washing machine facilities."
          },
          {
            title: "Hostel Culture",
            content: "Diamond Hostel is known for its strong brotherhood and collaborative environment. The hostel council organizes various events throughout the year including cultural nights, festival celebrations, birthday celebrations, and study groups before exams. Seniors actively mentor juniors, creating a supportive academic environment. The hostel also participates enthusiastically in inter-hostel competitions during Festember and Pragyan."
          }
        ],
        quickFacts: {
          "Type": "Boys Hostel",
          "Capacity": "~150 students",
          "Floors": "3",
          "Mess": "Veg & Non-Veg",
          "Common Rooms": "2",
          "WiFi": "High-speed"
        },
        tags: ["Hostels", "Boys Hostel", "Accommodation", "NIT Trichy"]
      }
    },
    jade: {
      title: "Jade Hostel",
      category: "Hostels",
      image: "🏨",
      views: 756,
      lastEdited: "2024-01-12",
      contributors: 5,
      content: {
        intro: "Jade Hostel is a prominent boys' hostel at NIT Trichy, known for its strong community spirit and excellent sports culture.",
        sections: [
          {
            title: "About Jade",
            content: "Named after the precious jade stone, this hostel houses undergraduate male students primarily from Electrical, Electronics, and Computer Science departments. Known for producing excellent athletes and strong academic performers."
          },
          {
            title: "Sports and Recreation",
            content: "Extensive sports facilities including basketball court, volleyball court, cricket nets, and table tennis room. Regularly wins inter-hostel sports competitions and has produced several university-level players."
          },
          {
            title: "Academic Environment",
            content: "The hostel maintains a conducive academic atmosphere with dedicated reading rooms that remain open 24/7 during exam periods. Study groups are common, with seniors helping juniors understand complex concepts."
          }
        ],
        quickFacts: {
          "Established": "2005",
          "Type": "Boys Hostel",
          "Capacity": "~180 students",
          "Floors": "4",
          "Sports Courts": "Basketball, Volleyball"
        },
        tags: ["Hostels", "Boys Hostel", "Sports", "NIT Trichy"]
      }
    },
    coral: {
      title: "Coral Hostel",
      category: "Hostels",
      image: "🪸",
      views: 634,
      lastEdited: "2024-01-08",
      contributors: 4,
      content: {
        intro: "Coral Hostel is one of the newer boys' hostels at NIT Trichy, featuring modern architecture and state-of-the-art facilities.",
        sections: [
          {
            title: "Modern Infrastructure",
            content: "Built in 2015, Coral represents new generation hostel facilities with better ventilation, larger rooms, attached bathrooms, and balconies with scenic campus views for male students."
          },
          {
            title: "Amenities",
            content: "WiFi coverage throughout, central water purification system, solar water heaters, modern mess with varied menu options, multipurpose hall for events and gatherings, reading room with AC."
          },
          {
            title: "Green Initiatives",
            content: "Known for environmental consciousness with rainwater harvesting, solar panels, composting facility, and organic garden maintained by students."
          }
        ],
        quickFacts: {
          "Established": "2015",
          "Type": "Boys Hostel",
          "Capacity": "~120 students",
          "Special": "Solar powered",
          "Garden": "Organic terrace"
        },
        tags: ["Hostels", "Boys Hostel", "Eco-Friendly", "Modern"]
      }
    },
    cse: {
      title: "Computer Science & Engineering",
      category: "Departments",
      image: "💻",
      views: 3421,
      lastEdited: "2024-01-18",
      contributors: 15,
      content: {
        intro: "The Department of Computer Science and Engineering at NIT Trichy is one of the premier CSE departments in India, known for cutting-edge research, excellent faculty, and outstanding placement records.",
        sections: [
          {
            title: "Academic Programs",
            content: "B.Tech in CSE (4 years), M.Tech with specializations in AI/ML, Data Science, Cyber Security, Software Engineering, and Ph.D. programs. Curriculum regularly updated with emerging technologies."
          },
          {
            title: "Research Areas",
            content: "Active research in AI/ML, Data Science, Cyber Security, IoT, Cloud Computing, Computer Vision, NLP, and Blockchain. Multiple sponsored projects from DST, DRDO, and industry."
          },
          {
            title: "Labs and Facilities",
            content: "State-of-the-art labs including AI/ML Lab with GPU clusters, Network Security Lab, Software Engineering Lab, Cloud Computing Lab with AWS/Azure, Mobile Dev Lab, DBMS Lab, and OS Lab."
          },
          {
            title: "Placements",
            content: "Exceptional placements with Google, Microsoft, Amazon, Adobe, Goldman Sachs, Morgan Stanley, Uber, Flipkart. Average package exceeds 20 LPA with top packages 1 Crore+."
          },
          {
            title: "Student Activities",
            content: "Active clubs: Delta Force (coding), Spider R&D (research), Forge (innovation). Regular hackathons, coding competitions, workshops. Students excel in ACM ICPC, Google Code Jam."
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
      title: "Electronics & Communication",
      category: "Departments",
      image: "📡",
      views: 2156,
      lastEdited: "2024-01-16",
      contributors: 12,
      content: {
        intro: "The ECE Department, established in 1964, is one of the oldest and most prestigious departments earning national recognition for academic excellence and research.",
        sections: [
          {
            title: "Research Areas",
            content: "VLSI Design, RF and Microwave Engineering, Embedded Systems, Digital Signal Processing, Wireless Communication, 5G Technologies, Image Processing, Optical Communication."
          },
          {
            title: "Lab Facilities",
            content: "VLSI Design Lab with Cadence/Synopsys, Embedded Systems Lab, Communication Lab, Signal Processing Lab with MATLAB, Microwave Lab, Antenna Lab with anechoic chamber."
          },
          {
            title: "Industry Connect",
            content: "Strong partnerships with Texas Instruments, Qualcomm, Broadcom, Intel, Samsung. Regular internships, projects, PPOs."
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
      image: "⚙️",
      views: 1876,
      lastEdited: "2024-01-14",
      contributors: 10,
      content: {
        intro: "The Mechanical Engineering Department, established in 1964, is renowned for strong foundation in core mechanical principles combined with modern manufacturing technologies.",
        sections: [
          {
            title: "Specializations",
            content: "M.Tech specializations in CAD/CAM, Thermal Engineering, Manufacturing, Industrial Engineering. Strong balance of theory and practical skills."
          },
          {
            title: "Research",
            content: "Robotics, Automation, Advanced Manufacturing, Thermal Engineering, Renewable Energy, Composite Materials, Tribology, FEA."
          },
          {
            title: "Workshops",
            content: "CNC machining center, 3D printing, robotics lab, CAD/CAM lab, thermal lab, fluid mechanics lab, metrology lab with precision instruments."
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
    campus: {
      title: "NIT Trichy Campus",
      category: "Campus",
      image: "🏛️",
      views: 4521,
      lastEdited: "2024-01-18",
      contributors: 20,
      content: {
        intro: "The NIT Trichy campus spans over 800 acres along the Cauvery River and is one of the most beautiful technical campuses in India, featuring modern infrastructure and lush greenery.",
        sections: [
          {
            title: "Campus Layout",
            content: "Divided into academic zone, residential zone with 16 hostels, administrative block with iconic main building, sports complex, and recreational areas. Colonial-era architecture blends with modern structures."
          },
          {
            title: "Academic Infrastructure",
            content: "16 departments with dedicated lecture halls, smart boards, research labs, computational facilities, faculty offices, project areas. All buildings connected via covered walkways with 24/7 WiFi."
          },
          {
            title: "Sports Facilities",
            content: "Synthetic athletics track, cricket ground, football/hockey fields, basketball/volleyball courts, tennis courts, badminton complex, Olympic swimming pool, gymnasium, TT hall."
          },
          {
            title: "Hostels",
            content: "16 hostels named after gemstones (Agate, Diamond, Jade, Coral, Opal, Pearl, Ruby, Sapphire, etc.). Each with mess, common rooms, reading rooms, sports facilities, WiFi."
          },
          {
            title: "Food and Dining",
            content: "Each hostel mess serves 3 meals daily. Campus food courts: Night Canteen, Brown Bakery, JNC (Juice/Noodles), Amul parlor, departmental canteens."
          },
          {
            title: "Green Initiatives",
            content: "Tree plantation, rainwater harvesting, solar panels, biogas plant, sewage treatment, plastic-free campus. Over 30% green cover."
          }
        ],
        quickFacts: {
          "Area": "800 acres",
          "Departments": "16",
          "Hostels": "16",
          "Students": "~8000",
          "Green Cover": "30%",
          "Location": "Tiruchirappalli, TN",
          "Established": "1964"
        },
        tags: ["Campus", "Infrastructure", "Sports", "Hostels", "Green"]
      }
    },
    library: {
      title: "Central Library",
      category: "Campus",
      image: "📚",
      views: 2764,
      lastEdited: "2024-01-12",
      contributors: 11,
      content: {
        intro: "The Central Library is a five-story facility serving as the knowledge repository with over 2,00,000 books, extensive digital resources, and modern amenities.",
        sections: [
          {
            title: "Collections",
            content: "2,00,000+ books, 5,000+ journals, 50,000+ e-books, conference proceedings, standards (IS, ASTM, IEEE), competitive exam books, fiction, rare book collection."
          },
          {
            title: "Digital Resources",
            content: "IEEE Xplore, Springer Link, ScienceDirect, ASME, ACM Digital Library, ASTM Standards, SciFinder, MathSciNet, Web of Science, Scopus."
          },
          {
            title: "Services",
            content: "RFID book system, online catalog, document delivery, research assistance, printing/scanning, WiFi, AC reading halls (500+ seats), study cubicles, discussion rooms, 8 AM-11 PM (24/7 during exams)."
          },
          {
            title: "Learning Commons",
            content: "Collaborative spaces with projectors, multimedia room, training rooms for workshops, scanning station, 3D visualization lab, relaxation area."
          }
        ],
        quickFacts: {
          "Books": "2,00,000+",
          "Journals": "5,000+",
          "E-Books": "50,000+",
          "Seating": "500+",
          "Floors": "5",
          "Hours": "8 AM - 11 PM",
          "Databases": "25+"
        },
        tags: ["Campus", "Library", "Resources", "Study"]
      }
    },
    sac: {
      title: "Student Activity Center",
      category: "Campus",
      image: "🎪",
      views: 3124,
      lastEdited: "2024-01-15",
      contributors: 13,
      content: {
        intro: "SAC is the vibrant heart of extracurricular life, serving as headquarters for all student clubs, cultural activities, and recreational pursuits.",
        sections: [
          {
            title: "Facilities",
            content: "Music rooms with soundproofing, dance studios with mirrors, art studios, photography darkroom, multipurpose halls, meeting rooms, cafeteria, equipment storage. WiFi enabled."
          },
          {
            title: "Student Clubs",
            content: "40+ clubs: Delta Force (coding), Spider R&D (robotics), Music Club, Dance Club, Dramatics, Fine Arts, Photography, E-Cell, NSS, Quiz Club, Adventure Club, Forge."
          },
          {
            title: "Activities",
            content: "Weekly club meetings, monthly open mics, talent shows, workshops, training sessions, jamming sessions, festival prep. Center for Festember and Pragyan."
          },
          {
            title: "Equipment",
            content: "Musical instruments, professional cameras, video equipment, sound systems, costumes, props, art supplies, sports equipment available for student use."
          }
        ],
        quickFacts: {
          "Clubs": "40+",
          "Practice Rooms": "15+",
          "Hours": "6 AM - 11 PM",
          "Music Rooms": "6",
          "Dance Studios": "3",
          "Art Studios": "2"
        },
        tags: ["Campus", "Clubs", "Cultural", "Music", "SAC"]
      }
    },
    cdc: {
      title: "Career Development Cell",
      category: "Campus",
      image: "💼",
      views: 2987,
      lastEdited: "2024-01-17",
      contributors: 9,
      content: {
        intro: "CDC facilitates recruitment with exceptional track record - 100% placement for interested students with impressive salary packages.",
        sections: [
          {
            title: "Placement Record",
            content: "Consistent 100% placement. 2023-24: Average ₹14.5 LPA, Highest ₹44 LPA international, ₹1.05 Crore domestic. 300+ companies visit annually."
          },
          {
            title: "Top Recruiters",
            content: "Tech: Google, Microsoft, Amazon, Adobe, Oracle, Uber, LinkedIn. Core: Tata Steel, L&T, Ashok Leyland, Caterpillar. Consulting: McKinsey, BCG, Bain, Deloitte. Finance: Goldman Sachs, Morgan Stanley."
          },
          {
            title: "Internships",
            content: "Summer internships for pre-final years. Many secure PPOs. Research internships at IITs/IISc, industry internships, startup exposure. Stipend ₹25K-₹1L/month."
          },
          {
            title: "Preparation",
            content: "Aptitude workshops, coding bootcamps, communication sessions, resume building, mock interviews with alumni, GD practice, company-specific drives."
          }
        ],
        quickFacts: {
          "Placement": "100%",
          "Companies": "300+",
          "Highest": "₹1.05 Crore",
          "Average": "₹14.5 LPA",
          "PPO Rate": "~25%",
          "Internship": "₹25K-₹1L/month"
        },
        tags: ["Placements", "Career", "Jobs", "CDC"]
      }
    },
    pragyan: {
      title: "Pragyan - Technical Festival",
      category: "Events",
      image: "🎯",
      views: 5234,
      lastEdited: "2024-01-16",
      contributors: 18,
      content: {
        intro: "Pragyan is the annual international techno-managerial festival attracting 25,000+ participants from across the globe. Established 1996, it's one of India's largest student-run technical festivals.",
        sections: [
          {
            title: "Festival Overview",
            content: "Four-day technical extravaganza in Feb-March. Attracts participants from 500+ colleges nationwide and international participation from USA, UK, Singapore, Australia. Different theme each year: AI, Sustainability, Space, Quantum."
          },
          {
            title: "Competitions",
            content: "50+ events: Hackathons (24-hour), Competitive Programming, App/Game Dev, Robotics (line following, warehouse, robo-soccer, autonomous), Electronics (circuit design, embedded, Arduino/Pi), Engineering (bridge, crane, CAD), Paper presentations, Business events."
          },
          {
            title: "Workshops & Lectures",
            content: "ML/Deep Learning, Web Dev, Blockchain, IoT, Data Science, Cyber Security, Robotics, 3D Printing by industry experts. Guest lectures from tech giant CEOs, professors, entrepreneurs."
          },
          {
            title: "Exhibitions",
            content: "Project Expo (student innovations: drones, robots, IoT, AI), Industry exhibitions, Science demonstrations, Startup showcases. Highly interactive."
          },
          {
            title: "Gaming",
            content: "Massive tournaments: CS:GO, Dota 2, Valorant, FIFA, NFS, BGMI, COD Mobile. High-end gaming PCs, consoles, LAN gaming."
          },
          {
            title: "Organization",
            content: "100+ core team, 500+ volunteers. Multi-crore budget managed by students. Departments: Publicity, Sponsorship, Events, Hospitality, Design, Web, Finance."
          }
        ],
        quickFacts: {
          "Established": "1996",
          "Duration": "4 days",
          "Participants": "25,000+",
          "Events": "50+",
          "Prize Pool": "₹40 Lakhs+",
          "Footfall": "50,000+",
          "Volunteers": "600+"
        },
        tags: ["Events", "Technical", "Pragyan", "Hackathon", "Robotics"]
      }
    },
    festember: {
      title: "Festember - Cultural Festival",
      category: "Events",
      image: "🎭",
      views: 4876,
      lastEdited: "2024-01-14",
      contributors: 16,
      content: {
        intro: "Festember is the annual cultural festival and one of South India's largest student-organized cultural extravaganzas. Established 1975, attracts 60,000+ participants.",
        sections: [
          {
            title: "Cultural Events",
            content: "Dance: Solo, Group, Face-off, Nupur (classical). Music: Solo Singing, Band, Beat Boxing, Instrumental. Drama: Street plays, Mime, Mono-acting, Short films. Fashion: Ramp, Costume design."
          },
          {
            title: "Pro-Nights",
            content: "Spectacular performances by India's biggest celebrities. Past: Arijit Singh, Sunidhi Chauhan, Neha Kakkar, Armaan Malik. Comedy: Zakir Khan, Biswa Kalyan Rath, Kenny Sebastian. DJ nights with international/national DJs. 10,000+ audience."
          },
          {
            title: "Literary Events",
            content: "Debate (Parliamentary, Asian), Extempore, Creative Writing, Poetry slam, Quizzing, Spelling Bee, Dumb Charades."
          },
          {
            title: "Fine Arts",
            content: "Painting, Sketching, Doodling, Cartooning, Rangoli, Face painting, Photography, Installation art, Live art."
          },
          {
            title: "Informal Events",
            content: "Mr./Ms. Festember, Treasure Hunt, Fashion parade, Food festivals, Art exhibitions, Carnival games, Flash mobs."
          },
          {
            title: "Organization",
            content: "800+ volunteers, Core Team with Events, Publicity, Sponsorship, Hospitality, Design, Web, Media, Security. Multi-crore budget."
          }
        ],
        quickFacts: {
          "Established": "1975",
          "Duration": "4 days",
          "Participants": "60,000+",
          "Events": "100+",
          "Prize Pool": "₹30 Lakhs+",
          "Footfall": "1,00,000+",
          "Pro-Nights": "4"
        },
        tags: ["Events", "Cultural", "Festember", "Music", "Dance"]
      }
    },
    delta: {
      title: "Delta Force - Coding Club",
      category: "Clubs",
      image: "⌨️",
      views: 4231,
      lastEdited: "2024-01-18",
      contributors: 14,
      content: {
        intro: "Delta Force is the premier coding and software development club promoting competitive programming, development, and open-source contributions.",
        sections: [
          {
            title: "Competitive Programming",
            content: "Regular contests on Codeforces, CodeChef, LeetCode. Weekly coding challenges, DSA crash courses, guidance for ACM ICPC, Google Code Jam, Facebook Hacker Cup. High ratings on CP platforms."
          },
          {
            title: "Development",
            content: "Web apps (React, Angular, Django, Flask), Mobile apps (Android/iOS), Open-source contributions, Automation scripts, ML/AI applications. Industry-standard tools."
          },
          {
            title: "Training",
            content: "Beginner: Programming languages (C++, Python, Java), DSA basics, Git. Advanced: Advanced algorithms, Web dev stacks (MERN, MEAN), Mobile dev, Cloud (AWS, Azure), DevOps, ML/DL."
          },
          {
            title: "Hackathons",
            content: "Internal: Code Sprint, Hack Night (24-48 hours). External: Smart India Hackathon, corporate hackathons (Google, Microsoft, Facebook), startup competitions. Multiple wins."
          },
          {
            title: "Placement Prep",
            content: "Company-specific questions repository, Mock technical interviews, Peer programming, System design guidance, Resume/LinkedIn optimization. Alumni mentorship from top tech companies."
          }
        ],
        quickFacts: {
          "Established": "2000s",
          "Members": "200+",
          "Weekly Contests": "Yes",
          "Hackathons": "5+ per year",
          "Projects": "30+ ongoing",
          "Avg CF Rating": "1600+"
        },
        tags: ["Clubs", "Coding", "Programming", "Delta", "Hackathon"]
      }
    },
    spider: {
      title: "Spider R&D",
      category: "Clubs",
      image: "🕷️",
      views: 3654,
      lastEdited: "2024-01-16",
      contributors: 12,
      content: {
        intro: "Spider R&D is NIT Trichy's premier research and development club focused on hardware, robotics, IoT, and innovative engineering projects.",
        sections: [
          {
            title: "Research Areas",
            content: "Robotics (autonomous navigation, line-following, robotic arms), IoT (smart home, agricultural monitoring, industrial), Embedded Systems (Arduino, Raspberry Pi, custom PCB), ML/Computer Vision (object detection, autonomous vehicles), Renewable Energy (solar tracking, energy-efficient devices)."
          },
          {
            title: "Projects",
            content: "Autonomous delivery robots, IoT irrigation systems, gesture-controlled wheelchairs, air quality monitoring, drone technology, automated waste segregation, smart parking. Multiple awards."
          },
          {
            title: "Competitions",
            content: "ABU Robocon (Asia-Pacific Robot Contest), IIT Tech Fests (Techfest, Shaastra, Kshitij), Smart India Hackathon, drone competitions. Top positions."
          },
          {
            title: "Training",
            content: "Electronics, circuit design, microcontroller programming, sensor integration, motor control, PCB design/fabrication, 3D modeling/printing, project management."
          },
          {
            title: "Collaborations",
            content: "Academic departments, other clubs (Delta, Forge), industry partners, startups, government organizations for socially impactful solutions."
          }
        ],
        quickFacts: {
          "Established": "2006",
          "Members": "150+",
          "Projects": "25+ active",
          "Competitions Won": "20+",
          "Focus": "Robotics, IoT, Embedded"
        },
        tags: ["Clubs", "Robotics", "IoT", "Spider", "Hardware"]
      }
    },
    forge: {
      title: "Forge - Innovation Club",
      category: "Clubs",
      image: "🔧",
      views: 2341,
      lastEdited: "2024-01-15",
      contributors: 9,
      content: {
        intro: "Forge is NIT Trichy's innovation and maker club that encourages students to turn ideas into reality through hands-on projects, prototyping, and creative problem-solving.",
        sections: [
          {
            title: "Club Activities",
            content: "Forge provides a platform for students to work on innovative projects across various domains. The club organizes regular workshops on product design, prototyping, electronics, mechanical systems, and entrepreneurship. Members collaborate on building everything from simple gadgets to complex multi-disciplinary projects."
          },
          {
            title: "Maker Space",
            content: "The club has access to a well-equipped maker space featuring 3D printers, laser cutters, soldering stations, power tools, electronics components, and crafting materials. This space allows students to bring their ideas to life through rapid prototyping and iteration."
          },
          {
            title: "Innovation Challenges",
            content: "Forge regularly organizes innovation challenges and competitions encouraging students to solve real-world problems. Past challenges have focused on sustainability, healthcare solutions, assistive technology, and campus improvements. The club also participates in external maker faires and innovation competitions."
          },
          {
            title: "Collaborations",
            content: "Forge collaborates with other technical clubs like Delta Force and Spider R&D for interdisciplinary projects. The club also works with local industries and startups to give students exposure to real-world product development processes."
          }
        ],
        quickFacts: {
          "Established": "2010",
          "Members": "120+",
          "Workshops": "15+ per year",
          "Projects": "20+ active",
          "Equipment": "3D Printers, Laser Cutters",
          "Focus": "Product Design, Prototyping"
        },
        tags: ["Clubs", "Innovation", "Maker", "Forge", "Prototyping"]
      }
    },
    ecell: {
      title: "E-Cell - Entrepreneurship Cell",
      category: "Clubs",
      image: "💡",
      views: 2876,
      lastEdited: "2024-01-14",
      contributors: 10,
      content: {
        intro: "E-Cell is NIT Trichy's Entrepreneurship Cell dedicated to fostering entrepreneurial spirit among students. The club provides resources, mentorship, and platforms for aspiring entrepreneurs to develop their startup ideas.",
        sections: [
          {
            title: "Startup Support",
            content: "E-Cell offers comprehensive support to student entrepreneurs including idea validation, business model development, pitch deck preparation, and connections with investors and mentors. The club has helped launch several successful startups founded by NIT Trichy students and alumni."
          },
          {
            title: "Events and Workshops",
            content: "Regular workshops on entrepreneurship fundamentals, startup funding, marketing strategies, legal aspects of business, and product development. The club invites successful entrepreneurs, venture capitalists, and industry experts for guest lectures and panel discussions. Annual flagship events include startup competitions, business plan contests, and entrepreneurship summits."
          },
          {
            title: "Incubation Programs",
            content: "E-Cell runs incubation programs for promising startup ideas, providing workspace, mentorship, seed funding opportunities, and networking events. Teams receive guidance on everything from customer discovery to scaling their ventures."
          },
          {
            title: "Networking",
            content: "The club maintains strong connections with the startup ecosystem including incubators, accelerators, angel investors, and venture capital firms. Regular networking sessions connect student entrepreneurs with successful alumni who have started their own companies."
          },
          {
            title: "Success Stories",
            content: "Several startups incubated at E-Cell have gone on to raise significant funding and achieve market success. Alumni entrepreneurs regularly return to mentor the next generation of innovators."
          }
        ],
        quickFacts: {
          "Established": "2008",
          "Members": "150+",
          "Startups Launched": "30+",
          "Events": "20+ per year",
          "Mentors": "50+ Alumni",
          "Focus": "Startups, Business"
        },
        tags: ["Clubs", "Entrepreneurship", "E-Cell", "Startups", "Business"]
      }
    },
    nss: {
      title: "NSS - National Service Scheme",
      category: "Clubs",
      image: "🤝",
      views: 3124,
      lastEdited: "2024-01-13",
      contributors: 11,
      content: {
        intro: "NSS at NIT Trichy is dedicated to social service and community development. The club engages students in various outreach programs, awareness campaigns, and volunteer activities to contribute positively to society.",
        sections: [
          {
            title: "Social Service Activities",
            content: "NSS organizes regular community service activities including teaching underprivileged children, blood donation drives, health awareness camps, cleanliness drives, tree plantation programs, and visits to old age homes and orphanages. Volunteers dedicate their time to making a meaningful impact in local communities."
          },
          {
            title: "Awareness Campaigns",
            content: "The club conducts awareness campaigns on important social issues such as health and hygiene, environmental conservation, women's safety, digital literacy, and education for all. These campaigns reach thousands of people in villages and urban areas around Trichy."
          },
          {
            title: "Annual Camps",
            content: "NSS organizes annual special camps where volunteers spend 7-10 days in rural areas working on community development projects. Activities include infrastructure development, health camps, education programs, and skill development workshops for villagers."
          },
          {
            title: "Disaster Relief",
            content: "NSS volunteers actively participate in disaster relief efforts during floods, cyclones, and other emergencies. The club collects relief materials, organizes fundraisers, and coordinates with authorities to help affected communities."
          },
          {
            title: "Impact",
            content: "Over the years, NSS NIT Trichy has positively impacted thousands of lives through its various initiatives. Volunteers develop strong leadership skills, empathy, and a sense of social responsibility that stays with them throughout their lives."
          }
        ],
        quickFacts: {
          "Established": "1970s",
          "Volunteers": "300+",
          "Villages Adopted": "5",
          "Blood Donation": "500+ units/year",
          "Annual Camps": "2",
          "Focus": "Social Service"
        },
        tags: ["Clubs", "NSS", "Social Service", "Volunteering", "Community"]
      }
    }
  }

  // AUTO-LINKING FUNCTION - Makes keywords clickable
  const createAutoLinks = (text) => {
    if (!text) return text
    
    // Map of keywords to article IDs
    const linkMap = {
      'Pragyan': 'pragyan',
      'Festember': 'festember',
      'Delta Force': 'delta',
      'Spider R&D': 'spider',
      'Forge': 'forge',
      'E-Cell': 'ecell',
      'NSS': 'nss',
      'CDC': 'cdc',
      'SAC': 'sac',
      'Central Library': 'library',
      'Agate': 'agate',
      'Diamond': 'diamond',
      'Jade': 'jade',
      'Coral': 'coral',
      'Computer Science': 'cse',
      'NIT Trichy': 'campus'
    }

    let parts = [text]
    
    // Process each keyword
    Object.entries(linkMap).forEach(([keyword, id]) => {
      // Don't link to the current article
      if (id === selectedArticle) return
      
      const newParts = []
      parts.forEach(part => {
        if (typeof part === 'string') {
          const regex = new RegExp(`\\b(${keyword})\\b`, 'gi')
          const segments = part.split(regex)
          
          segments.forEach((seg, i) => {
            if (seg && seg.toLowerCase() === keyword.toLowerCase()) {
              newParts.push(
                <button
                  key={`${id}-${i}-${Math.random()}`}
                  onClick={() => setSelectedArticle(id)}
                  className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} underline cursor-pointer transition-colors`}
                >
                  {seg}
                </button>
              )
            } else if (seg) {
              newParts.push(seg)
            }
          })
        } else {
          newParts.push(part)
        }
      })
      parts = newParts
    })
    
    return parts
  }

  // Filter articles
  const getFilteredArticles = () => {
    return Object.entries(articles).filter(([key, article]) => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.content.intro.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.content.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = activeCategory === 'all' || article.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }

  const categories = ['all', 'Hostels', 'Departments', 'Campus', 'Events', 'Clubs']
  const currentArticle = articles[selectedArticle] || null

  // Stats
  const totalArticles = Object.keys(articles).length
  const totalContributors = Object.values(articles).reduce((sum, article) => sum + article.contributors, 0)
  const totalViews = Object.values(articles).reduce((sum, article) => sum + article.views, 0)

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900'
    }`}>
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-blue-600' : 'bg-blue-400'
        }`} style={{ animation: 'float 20s ease-in-out infinite' }}></div>
        <div className={`absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-indigo-600' : 'bg-indigo-400'
        }`} style={{ animation: 'float 25s ease-in-out infinite reverse' }}></div>
      </div>

      {/* Header with Logo */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        darkMode 
          ? 'bg-slate-900/90 border-slate-800 shadow-lg shadow-black/20' 
          : 'bg-white/90 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Brand */}
            <button
              onClick={() => {
                setSelectedArticle('home')
                setShowMobileMenu(false)
              }}
              className="flex items-center gap-2 sm:gap-3 group"
            >
              {/* Hexagon Logo SVG */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id={`bgLogo${darkMode ? 'Dark' : 'Light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: darkMode ? '#3B82F6' : '#2563EB', stopOpacity:1}} />
                      <stop offset="50%" style={{stopColor: darkMode ? '#06B6D4' : '#0891B2', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor: darkMode ? '#8B5CF6' : '#7C3AED', stopOpacity:1}} />
                    </linearGradient>
                    <linearGradient id="accentLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#F59E0B', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#EF4444', stopOpacity:1}} />
                    </linearGradient>
                  </defs>
                  <polygon points="24,4 40,14 40,34 24,44 8,34 8,14" fill={`url(#bgLogo${darkMode ? 'Dark' : 'Light'})`} className="transition-all group-hover:scale-110"/>
                  <polygon points="24,10 35,17 35,31 24,38 13,31 13,17" fill="none" stroke={darkMode ? '#FFFFFF' : '#FFFFFF'} strokeWidth="1.5" opacity="0.3"/>
                  <g transform="translate(24, 24)">
                    <path d="M -8 -6 Q -8 -7 -7 -7 L -1 -7 L -1 7 L -7 7 Q -8 7 -8 6 Z" fill="#FFFFFF"/>
                    <path d="M 1 -7 L 7 -7 Q 8 -7 8 -6 L 8 6 Q 8 7 7 7 L 1 7 Z" fill="#FFFFFF" opacity="0.8"/>
                    <rect x="-1" y="-7" width="2" height="14" fill="url(#accentLogo)"/>
                    <line x1="-6" y1="-4" x2="-2" y2="-4" stroke="#2563EB" strokeWidth="0.8" opacity="0.6"/>
                    <line x1="-6" y1="-1" x2="-2" y2="-1" stroke="#2563EB" strokeWidth="0.8" opacity="0.6"/>
                    <line x1="-6" y1="2" x2="-2" y2="2" stroke="#2563EB" strokeWidth="0.8" opacity="0.5"/>
                    <line x1="2" y1="-4" x2="6" y2="-4" stroke="#0891B2" strokeWidth="0.8" opacity="0.5"/>
                    <line x1="2" y1="-1" x2="6" y2="-1" stroke="#0891B2" strokeWidth="0.8" opacity="0.5"/>
                    <line x1="2" y1="2" x2="6" y2="2" stroke="#0891B2" strokeWidth="0.8" opacity="0.4"/>
                  </g>
                  <circle cx="24" cy="3" r="1.5" fill="#FBBF24" opacity="0.8"/>
                  <circle cx="41" cy="24" r="1.5" fill="#22D3EE" opacity="0.8"/>
                  <circle cx="24" cy="45" r="1.5" fill="#FBBF24" opacity="0.8"/>
                  <circle cx="7" cy="24" r="1.5" fill="#22D3EE" opacity="0.8"/>
                </svg>
              </div>
              
              {/* Brand Text */}
              <div>
                <h1 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${
                  darkMode 
                    ? 'from-blue-400 via-cyan-400 to-indigo-400' 
                    : 'from-blue-600 to-indigo-600'
                } bg-clip-text text-transparent drop-shadow-lg`}>
                  WikiNITT
                </h1>
                <p className={`text-xs hidden sm:block ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  NIT Trichy Encyclopedia
                </p>
              </div>
            </button>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className={`p-3 rounded-xl transition-all transform hover:scale-110 ${
                    darkMode ? 'hover:bg-slate-800 text-slate-300 hover:text-blue-400' : 'hover:bg-slate-100'
                  }`}
                >
                  🔍
                </button>
                
                {showSearch && (
                  <div className={`absolute right-0 mt-2 w-96 rounded-2xl shadow-2xl border overflow-hidden backdrop-blur-xl ${
                    darkMode ? 'bg-slate-800/95 border-slate-700 shadow-black/40' : 'bg-white border-slate-200'
                  }`}>
                    <input
                      type="text"
                      placeholder="Search WikiNITT..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`w-full px-4 py-3 outline-none bg-transparent ${
                        darkMode ? 'text-white placeholder-slate-500' : 'text-slate-900'
                      }`}
                      autoFocus
                    />
                    {searchQuery && (
                      <div className="max-h-96 overflow-y-auto">
                        {getFilteredArticles().length > 0 ? (
                          getFilteredArticles().map(([key, article]) => (
                            <button
                              key={key}
                              onClick={() => {
                                setSelectedArticle(key)
                                setShowSearch(false)
                                setSearchQuery('')
                              }}
                              className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all ${
                                darkMode ? 'hover:bg-slate-700/50 border-b border-slate-700/50' : 'hover:bg-slate-50 border-b border-slate-100'
                              }`}
                            >
                              <span className="text-2xl">{article.image}</span>
                              <div className="flex-1 min-w-0">
                                <div className={`font-medium truncate ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                                  {article.title}
                                </div>
                                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                  {article.category} • {article.views} views
                                </div>
                              </div>
                            </button>
                          ))
                        ) : (
                          <div className={`px-4 py-8 text-center ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            No articles found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-xl transition-all transform hover:scale-110 ${
                  darkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className={`p-2.5 rounded-lg transition-all ${
                  darkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100'
                }`}
              >
                🔍
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-lg transition-all ${
                  darkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>

              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={`p-2.5 rounded-lg transition-all ${
                  darkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100'
                }`}
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
                placeholder="Search WikiNITT..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg outline-none ${
                  darkMode ? 'bg-slate-800 text-white placeholder-slate-500' : 'bg-slate-100 text-slate-900'
                }`}
              />
              {searchQuery && (
                <div className={`mt-2 rounded-lg border overflow-hidden ${
                  darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
                }`}>
                  {getFilteredArticles().slice(0, 5).map(([key, article]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedArticle(key)
                        setShowSearch(false)
                        setSearchQuery('')
                        setShowMobileMenu(false)
                      }}
                      className={`w-full px-3 py-2.5 text-left flex items-center gap-2 transition-all ${
                        darkMode ? 'hover:bg-slate-700/50 border-b border-slate-700/50 last:border-0' : 'hover:bg-slate-50 border-b border-slate-100 last:border-0'
                      }`}
                    >
                      <span className="text-xl">{article.image}</span>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-medium truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
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

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden mt-3 space-y-2">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                <div className="text-xs font-semibold mb-2 uppercase tracking-wide opacity-60">Categories</div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat)
                        setShowMobileMenu(false)
                        if (selectedArticle !== 'home') setSelectedArticle('home')
                      }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        activeCategory === cat
                          ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                          : darkMode ? 'bg-slate-700/50 text-slate-300' : 'bg-white text-slate-700'
                      }`}
                    >
                      {cat === 'all' ? 'All' : cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
        {selectedArticle === 'home' ? (
          // Homepage
          <div className="space-y-8 sm:space-y-12">
            {/* Hero */}
            <div className="text-center space-y-4 sm:space-y-6 py-8 sm:py-16">
              <div className="inline-block">
                <h2 className={`text-4xl sm:text-6xl md:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${
                  darkMode ? 'from-blue-400 via-cyan-400 to-indigo-400' : 'from-blue-600 via-indigo-600 to-purple-600'
                } bg-clip-text text-transparent drop-shadow-2xl`}>
                  Welcome to WikiNITT
                </h2>
                <div className={`h-1 sm:h-1.5 bg-gradient-to-r ${
                  darkMode ? 'from-blue-500 via-cyan-500 to-indigo-500 shadow-lg shadow-blue-500/50' : 'from-blue-600 to-indigo-600'
                } rounded-full`}></div>
              </div>
              <p className={`text-base sm:text-xl max-w-3xl mx-auto px-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Your comprehensive encyclopedia for NIT Tiruchirappalli
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
              {[
                { icon: '📖', label: 'Articles', value: totalArticles },
                { icon: '👥', label: 'Contributors', value: totalContributors },
                { icon: '👀', label: 'Views', value: `${(totalViews / 1000).toFixed(1)}K` },
                { icon: '🔄', label: 'Updated', value: 'Today' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all hover:scale-105 hover:shadow-2xl backdrop-blur-sm ${
                    darkMode ? 'bg-slate-800/50 border-slate-700/50 shadow-lg shadow-black/20 hover:bg-slate-800/70 hover:border-blue-500/50' : 'bg-white/80 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 filter drop-shadow-lg">{stat.icon}</div>
                  <div className={`text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r ${
                    darkMode ? 'from-blue-400 to-cyan-400' : 'from-blue-600 to-indigo-600'
                  } bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Category Filter */}
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Browse by Category
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all transform hover:scale-105 ${
                      activeCategory === cat
                        ? darkMode ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/50' : 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : darkMode ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700/50' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    {cat === 'all' ? '🌟 All' : `${cat} (${Object.values(articles).filter(a => a.category === cat).length})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {activeCategory === 'all' ? 'All Articles' : activeCategory}
                <span className={`ml-2 sm:ml-3 text-base sm:text-lg font-normal ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  ({getFilteredArticles().length})
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {getFilteredArticles().map(([key, article]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedArticle(key)}
                    className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border text-left transition-all hover:scale-105 hover:shadow-2xl group backdrop-blur-sm ${
                      darkMode ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 hover:border-blue-500/50 shadow-lg shadow-black/20' : 'bg-white/80 border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <div className="flex items-start justify-between">
                        <div className="text-4xl sm:text-5xl transform transition-transform group-hover:scale-125 group-hover:rotate-12 filter drop-shadow-lg">
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
                        <p className={`text-sm mb-3 line-clamp-2 sm:line-clamp-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                          {article.content.intro}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                          {article.content.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className={`px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                                darkMode ? 'bg-slate-700/50 text-slate-300 border border-slate-600/50' : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className={`flex items-center gap-3 sm:gap-4 text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
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
          // Article View
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div>
                <button
                  onClick={() => setSelectedArticle('home')}
                  className={`mb-3 sm:mb-4 flex items-center gap-2 text-sm transition-all hover:gap-3 ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  ← Back to home
                </button>
                
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <span className="text-5xl sm:text-6xl filter drop-shadow-2xl flex-shrink-0">{currentArticle.image}</span>
                  <div className="flex-1 min-w-0">
                    <h1 className={`text-2xl sm:text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {currentArticle.title}
                    </h1>
                    <div className={`flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span>📁 {currentArticle.category}</span>
                      <span>👀 {currentArticle.views}</span>
                      <span className="hidden sm:inline">✏️ {currentArticle.contributors} contributors</span>
                      <span className="hidden sm:inline">📅 {currentArticle.lastEdited}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {currentArticle.content.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode ? 'bg-slate-800/50 text-slate-300 border border-slate-700/50' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl border backdrop-blur-sm ${
                darkMode ? 'bg-slate-800/50 border-slate-700/50 shadow-xl shadow-black/20' : 'bg-white/80 border-slate-200'
              }`}>
                <p className={`text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {createAutoLinks(currentArticle.content.intro)}
                </p>

                {currentArticle.content.sections.map((section, idx) => (
                  <div key={idx} className="mb-6 sm:mb-8 last:mb-0">
                    <h2 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {section.title}
                    </h2>
                    <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {createAutoLinks(section.content)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className={`p-5 sm:p-6 rounded-xl sm:rounded-2xl border backdrop-blur-sm lg:sticky lg:top-24 ${
                darkMode ? 'bg-slate-800/50 border-slate-700/50 shadow-xl shadow-black/20' : 'bg-white/80 border-slate-200'
              }`}>
                <h3 className={`text-base sm:text-lg font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  📊 Quick Facts
                </h3>
                <div className="space-y-3">
                  {Object.entries(currentArticle.content.quickFacts).map(([key, value], idx) => (
                    <div key={idx} className={`pb-3 border-b ${darkMode ? 'border-slate-700/50' : 'border-slate-200'} last:border-0`}>
                      <div className={`text-xs font-medium mb-1 uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {key}
                      </div>
                      <div className={`text-sm sm:text-base font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-5 sm:p-6 rounded-xl sm:rounded-2xl border backdrop-blur-sm ${
                darkMode ? 'bg-slate-800/50 border-slate-700/50 shadow-xl shadow-black/20' : 'bg-white/80 border-slate-200'
              }`}>
                <h3 className={`text-base sm:text-lg font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  🔗 Related
                </h3>
                <div className="space-y-2">
                  {Object.entries(articles)
                    .filter(([key]) => key !== selectedArticle)
                    .filter(([_, article]) => 
                      article.category === currentArticle.category || 
                      article.content.tags.some(tag => currentArticle.content.tags.includes(tag))
                    )
                    .slice(0, 4)
                    .map(([key, article]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedArticle(key)}
                        className={`w-full p-2.5 sm:p-3 rounded-lg text-left transition-all ${
                          darkMode ? 'hover:bg-slate-700/50 border border-transparent hover:border-slate-600/50' : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-xl sm:text-2xl flex-shrink-0">{article.image}</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2">
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Made with ❤️ for NIT Trichy
            </p>
            <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              WikiNITT © 2024 • {totalArticles} Articles • {totalContributors} Contributors
            </p>
          </div>
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
