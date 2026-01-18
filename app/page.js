
'use client'
import { useState, useEffect } from 'react'

export default function WikiNITT() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedArticle, setSelectedArticle] = useState('home')
  const [darkMode, setDarkMode] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

  // Comprehensive Articles Database - NIT Trichy
  const articles = {
    agate: {
      title: "Agate Hostel",
      category: "Hostels",
      image: "🏢",
      views: 1247,
      lastEdited: "2024-01-15",
      contributors: 8,
      content: {
        intro: "Agate Hostel is one of the prominent residential facilities at the National Institute of Technology (NIT), Tiruchirappalli. Known for its modern amenities and vibrant community, Agate serves as home to undergraduate students pursuing various engineering disciplines.",
        sections: [
          {
            title: "History and Establishment",
            content: "Agate Hostel was established in the early 2000s as part of NIT Trichy's expansion to accommodate the growing student population. Named after the semi-precious stone 'Agate', the hostel embodies the institution's tradition of naming residential facilities after gemstones. The hostel was designed with modern architecture and student-centric facilities, reflecting the institute's commitment to providing quality living spaces for its students."
          },
          {
            title: "Infrastructure and Facilities",
            content: "The hostel features well-designed rooms with adequate ventilation and natural lighting. Each room is furnished with essential amenities including study tables, chairs, beds, and storage facilities. The hostel complex includes common rooms equipped with television and recreational facilities, reading rooms for focused study, a mess hall serving nutritious meals, sports facilities including table tennis and badminton courts, and high-speed internet connectivity throughout the premises. The hostel also has a ground floor common area with sofas and a TV lounge where students gather for sports viewing and social interaction."
          },
          {
            title: "Student Life and Culture",
            content: "Agate Hostel is known for its vibrant student culture and strong sense of community. The residents actively participate in various cultural, technical, and sports activities. The hostel organizes regular events including cultural nights, technical workshops, sports tournaments, and festival celebrations. The hostel council, elected by students, plays a crucial role in managing hostel affairs and representing student interests. Annual hostel day celebrations feature performances, competitions, and dinner gatherings that strengthen bonds among residents."
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
          "Type": "Undergraduate Men's Hostel",
          "Capacity": "~200 students",
          "Floors": "4",
          "Mess Type": "Non-Vegetarian & Vegetarian",
          "Common Rooms": "3",
          "Sports Facilities": "TT, Badminton, Carrom"
        },
        tags: ["Hostels", "Accommodation", "Student Life", "NIT Trichy", "Boys Hostel"]
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
        intro: "Diamond Hostel is one of the premier women's hostels at NIT Trichy, known for its excellent facilities, stringent security measures, and supportive community environment. It provides a safe and comfortable living space for female undergraduate students.",
        sections: [
          {
            title: "Overview and Location",
            content: "Diamond Hostel stands as a testament to NIT Trichy's commitment to providing safe and comfortable accommodation for its female students. Located in the women's hostel complex, it is strategically positioned near the academic blocks, making it convenient for students to attend classes. The hostel combines modern amenities with a warm, homely atmosphere that helps students transition smoothly into campus life."
          },
          {
            title: "Security and Safety",
            content: "Diamond Hostel prioritizes the safety of its residents with 24/7 security personnel, CCTV surveillance at entry and exit points, biometric access control systems, and strictly monitored visitor policies. The hostel has dedicated lady wardens who are available round-the-clock for any emergencies or concerns. All visitors must register at the security desk and visits are only permitted during designated hours."
          },
          {
            title: "Facilities and Amenities",
            content: "The hostel features spacious rooms with attached or common washrooms depending on the floor, well-equipped study rooms with good lighting, common recreation areas with TV and indoor games, a well-maintained mess serving diverse cuisines including special diet considerations, high-speed WiFi connectivity, water purifiers on each floor, and washing machine facilities. The hostel also has a small gym and yoga room for fitness enthusiasts."
          },
          {
            title: "Hostel Culture",
            content: "Diamond Hostel is known for its strong sisterhood and collaborative environment. The hostel council organizes various events throughout the year including cultural nights, festival celebrations, birthday celebrations, and study groups before exams. Seniors actively mentor juniors, creating a supportive academic environment. The hostel also participates enthusiastically in inter-hostel competitions during Festember and Pragyan."
          }
        ],
        quickFacts: {
          "Type": "Women's Hostel",
          "Capacity": "~150 students",
          "Floors": "3",
          "Security": "24/7 with CCTV",
          "Mess": "Separate Veg & Non-Veg",
          "Common Rooms": "2",
          "Additional": "Gym, Yoga Room"
        },
        tags: ["Hostels", "Women's Hostel", "Accommodation", "Security", "NIT Trichy"]
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
        intro: "Jade Hostel is another prominent boys' hostel at NIT Trichy, known for its strong community spirit, excellent sports culture, and active participation in campus events.",
        sections: [
          {
            title: "About Jade",
            content: "Named after the precious jade stone, this hostel houses undergraduate male students primarily from the Electrical, Electronics, and Computer Science departments. The hostel has developed a reputation for producing excellent athletes and cultural performers who regularly represent NIT Trichy at national competitions."
          },
          {
            title: "Sports and Recreation",
            content: "Jade Hostel has extensive sports facilities including basketball court, volleyball court, cricket practice nets, and a well-maintained table tennis room. The hostel regularly wins inter-hostel sports competitions and has produced several university-level players. Evening sports sessions are a common sight with students actively engaging in various games."
          },
          {
            title: "Academic Environment",
            content: "The hostel maintains a conducive academic atmosphere with dedicated reading rooms that remain open 24/7 during exam periods. Study groups are common, with seniors helping juniors understand complex concepts. The hostel has a tradition of celebrating academic achievements with the topper's wall of fame displayed in the common room."
          }
        ],
        quickFacts: {
          "Established": "2005",
          "Capacity": "~180 students",
          "Floors": "4",
          "Sports Courts": "Basketball, Volleyball",
          "Reading Rooms": "2"
        },
        tags: ["Hostels", "Boys Hostel", "Sports", "Academic", "NIT Trichy"]
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
        intro: "Coral Hostel is one of the newer women's hostels at NIT Trichy, featuring modern architecture and state-of-the-art facilities designed to provide maximum comfort to its residents.",
        sections: [
          {
            title: "Modern Infrastructure",
            content: "Built in 2015, Coral Hostel represents the new generation of hostel facilities at NIT Trichy. The building features modern architecture with better ventilation, larger rooms, and improved common areas. All rooms have attached bathrooms, individual study spaces with ample lighting, and balconies with scenic views of the campus."
          },
          {
            title: "Amenities",
            content: "The hostel boasts WiFi coverage throughout, central water purification system, solar water heaters, modern mess with varied menu options, multipurpose hall for events and gatherings, reading room with AC, and a well-equipped recreation room with books, board games, and musical instruments."
          },
          {
            title: "Green Initiatives",
            content: "Coral Hostel is known for its environmental consciousness with rainwater harvesting systems, solar panels for partial electricity needs, composting facility for biodegradable waste, and a small organic garden maintained by students. The hostel actively participates in campus sustainability initiatives."
          }
        ],
        quickFacts: {
          "Established": "2015",
          "Type": "Women's Hostel",
          "Capacity": "~120 students",
          "Room Type": "Attached bathrooms",
          "Special Feature": "Solar powered",
          "Garden": "Organic terrace garden"
        },
        tags: ["Hostels", "Women's Hostel", "Modern", "Eco-Friendly", "NIT Trichy"]
      }
    },
    cse: {
      title: "Computer Science & Engineering Department",
      category: "Departments",
      image: "💻",
      views: 3421,
      lastEdited: "2024-01-18",
      contributors: 15,
      content: {
        intro: "The Department of Computer Science and Engineering at NIT Trichy is one of the premier CSE departments in India, known for cutting-edge research, excellent faculty, and outstanding placement records. Established in 1984, it has consistently ranked among the top engineering departments in the country.",
        sections: [
          {
            title: "Academic Programs",
            content: "The department offers B.Tech in Computer Science and Engineering (4 years), M.Tech in Computer Science and Engineering with specializations in AI/ML, Data Science, Cyber Security, and Software Engineering, and Ph.D. programs in various research areas. The curriculum is regularly updated to include emerging technologies and industry requirements."
          },
          {
            title: "Research and Innovation",
            content: "The department is actively involved in cutting-edge research in areas including Artificial Intelligence and Machine Learning, Data Science and Big Data Analytics, Cyber Security and Cryptography, Internet of Things, Cloud Computing, Computer Vision and Image Processing, Natural Language Processing, and Blockchain Technology. Several faculty members have ongoing sponsored research projects from DST, DRDO, and industry partners."
          },
          {
            title: "Labs and Facilities",
            content: "The department houses state-of-the-art laboratories including AI/ML Lab with GPU clusters, Network Security Lab with latest security tools, Software Engineering Lab with industry-standard IDEs, Cloud Computing Lab with access to AWS and Azure, Mobile Application Development Lab, Database Management Systems Lab, and Operating Systems Lab. All labs are equipped with high-end workstations and latest software."
          },
          {
            title: "Placements and Internships",
            content: "CSE students at NIT Trichy enjoy exceptional placement opportunities with top tech companies. Regular recruiters include Google, Microsoft, Amazon, Adobe, Goldman Sachs, Morgan Stanley, Uber, Flipkart, and numerous startups. The average package consistently exceeds 20 LPA with top packages reaching 1 Crore+. Summer internships at premier organizations are common, providing valuable industry exposure."
          },
          {
            title: "Student Activities",
            content: "The department has active student clubs including Delta Force (coding club), Spider R&D (research and development club), and Forge (innovation club). These clubs organize hackathons, coding competitions, workshops, and guest lectures throughout the year. Students regularly participate in ACM ICPC, Google Code Jam, and other prestigious coding competitions."
          }
        ],
        quickFacts: {
          "Established": "1984",
          "Programs": "B.Tech, M.Tech, Ph.D",
          "Faculty": "~40",
          "Labs": "15+",
          "Avg Package": "20+ LPA",
          "Top Package": "1 Crore+",
          "Research Areas": "AI/ML, Cyber Security, IoT"
        },
        tags: ["Departments", "CSE", "Engineering", "Technology", "Placements", "Research"]
      }
    },
    ece: {
      title: "Electronics & Communication Engineering",
      category: "Departments",
      image: "📡",
      views: 2156,
      lastEdited: "2024-01-16",
      contributors: 12,
      content: {
        intro: "The Department of Electronics and Communication Engineering is one of the oldest and most prestigious departments at NIT Trichy, established in 1964. The department has earned national recognition for its academic excellence and research contributions in VLSI, Embedded Systems, and Communication Networks.",
        sections: [
          {
            title: "Department Overview",
            content: "ECE at NIT Trichy offers comprehensive education in electronics and communication covering areas like VLSI Design, Embedded Systems, Signal Processing, Wireless Communications, and Microelectronics. The department has collaborations with leading research institutions and industries for projects and internships."
          },
          {
            title: "Key Research Areas",
            content: "Faculty and students actively research in VLSI and Chip Design, RF and Microwave Engineering, Embedded Systems and IoT, Digital Signal Processing, Wireless Communication and 5G Technologies, Image and Video Processing, and Optical Communication. The department has multiple ongoing sponsored projects worth several crores."
          },
          {
            title: "Laboratory Facilities",
            content: "The department boasts excellent lab infrastructure including VLSI Design Lab with Cadence and Synopsys tools, Embedded Systems Lab with various microcontroller kits, Communication Lab with spectrum analyzers and network analyzers, Signal Processing Lab with DSP processors and MATLAB, Microwave Lab with microwave test benches, and Antenna Lab with anechoic chamber facilities."
          },
          {
            title: "Industry Connect",
            content: "Strong industry partnerships with Texas Instruments, Qualcomm, Broadcom, Intel, Samsung, and various semiconductor companies. Students get opportunities for internships, projects, and pre-placement offers. The department regularly organizes industrial visits and guest lectures from industry experts."
          }
        ],
        quickFacts: {
          "Established": "1964",
          "Faculty Strength": "~35",
          "Research Labs": "12",
          "Industry Partners": "50+",
          "Avg Package": "18 LPA",
          "Notable Alumni": "Leaders in Tech & Research"
        },
        tags: ["Departments", "ECE", "VLSI", "Communications", "Electronics", "Research"]
      }
    },
    mech: {
      title: "Mechanical Engineering Department",
      category: "Departments",
      image: "⚙️",
      views: 1876,
      lastEdited: "2024-01-14",
      contributors: 10,
      content: {
        intro: "The Department of Mechanical Engineering at NIT Trichy is one of the pioneering departments, established in 1964. It is renowned for its strong foundation in core mechanical engineering principles combined with modern manufacturing and automation technologies.",
        sections: [
          {
            title: "Academic Excellence",
            content: "The department offers B.Tech, M.Tech (with specializations in CAD/CAM, Thermal Engineering, Manufacturing, and Industrial Engineering), and Ph.D. programs. The curriculum balances theoretical knowledge with practical skills through extensive lab work and industrial training."
          },
          {
            title: "Research Focus",
            content: "Key research areas include Robotics and Automation, Advanced Manufacturing Technologies, Thermal and Fluid Engineering, Renewable Energy Systems, Composite Materials, Tribology and Surface Engineering, and Finite Element Analysis. The department has well-funded research projects from various government and private organizations."
          },
          {
            title: "Workshop and Labs",
            content: "The department has comprehensive workshop facilities including CNC machining center, 3D printing and additive manufacturing lab, robotics and automation lab, CAD/CAM lab with latest software, thermal engineering lab with IC engines and refrigeration systems, fluid mechanics and hydraulics lab, and metrology lab with precision instruments."
          },
          {
            title: "Placements",
            content: "Mechanical engineering students receive excellent placement opportunities in core companies like L&T, Tata Motors, Ashok Leyland, Caterpillar, Schlumberger, and consulting firms like McKinsey and BCG. Many students also pursue higher studies at premier institutions like IITs, IIMs, and foreign universities."
          }
        ],
        quickFacts: {
          "Established": "1964",
          "Specializations": "CAD/CAM, Thermal, Manufacturing",
          "Workshop Area": "5000 sq.ft",
          "Major Labs": "10+",
          "Avg Package": "12 LPA",
          "Core Placements": "High percentage"
        },
        tags: ["Departments", "Mechanical", "Manufacturing", "Automation", "Engineering"]
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
        intro: "The NIT Trichy campus spans over 800 acres along the banks of the Cauvery River and is one of the most beautiful technical campuses in India. The lush green campus features modern infrastructure, historical buildings, and state-of-the-art facilities that create an ideal environment for academic excellence and holistic development.",
        sections: [
          {
            title: "Campus Layout and Architecture",
            content: "The campus is thoughtfully divided into distinct zones: the academic zone housing department buildings and lecture halls, the residential zone with 16 hostels for boys and girls, the administrative block with the main building featuring iconic architecture, the sports complex with multiple facilities, and the recreational areas with parks and open spaces. The architecture blends colonial-era buildings with modern structures, creating a unique aesthetic. The main building, with its distinctive red-brick facade and clock tower, serves as the campus landmark."
          },
          {
            title: "Academic Infrastructure",
            content: "NIT Trichy houses 16 academic departments spread across well-designed buildings. Each department has dedicated lecture halls with smart boards and audio-visual equipment, research laboratories with cutting-edge instruments, computational facilities with high-performance computing clusters, faculty cabins and meeting rooms, and student project areas. The Central Workshop provides hands-on training facilities for various engineering disciplines. All academic buildings are connected via covered walkways and have 24/7 WiFi connectivity."
          },
          {
            title: "Central Library",
            content: "The Central Library is a five-story modern building and the knowledge hub of the campus. It houses over 2,00,000 books, 5,000+ national and international journals, extensive digital resources including IEEE, Springer, Elsevier databases, individual study cabins for focused research, spacious reading halls with 500+ seating capacity, computer lab with internet access, discussion rooms for group studies, and 24/7 access during examination periods. The library uses RFID technology for book management and has a modern digital archive."
          },
          {
            title: "Sports and Recreation",
            content: "The campus boasts world-class sports infrastructure including a synthetic athletics track for running events, cricket ground with pavilion and practice nets, multiple football and hockey fields, basketball and volleyball courts (both indoor and outdoor), tennis courts, badminton complex with 8 courts, swimming pool (Olympic size, 50m), fully-equipped gymnasium with modern equipment, table tennis hall, and chess and carrom rooms. The Sports Council organizes regular tournaments and maintains these facilities. Students have access to professional coaches for various sports."
          },
          {
            title: "Residential Facilities",
            content: "The campus has 16 hostels named after gemstones (Agate, Diamond, Jade, Coral, Opal, Pearl, Ruby, Sapphire, Emerald, Amber, Tanzanite, Turquoise, Zircon, Garnet, Moonstone, and Crystal). Each hostel is a self-contained community with mess facilities, common rooms, reading rooms, sports facilities, and WiFi. Separate hostels for boys and girls ensure safety and comfort. All hostels have 24/7 security and are located within walking distance of academic blocks."
          },
          {
            title: "Food and Dining",
            content: "Each hostel has its own mess providing three meals daily with both vegetarian and non-vegetarian options. The South Indian cuisine is predominant but North Indian and Chinese dishes are also served regularly. Special meals are prepared during festivals. The campus also has multiple food courts and canteens including Night Canteen (Jigarthanda) open till late hours, Brown Bakery serving snacks and beverages, JNC (Juice and Noodles Corner) popular for quick bites, Amul parlor for ice creams and milk products, and departmental canteens in major blocks. Food quality and hygiene are regularly monitored."
          },
          {
            title: "Healthcare",
            content: "The Institute Hospital provides 24/7 medical care with resident doctors, nursing staff, ambulance service, basic emergency facilities, and regular health checkups. The hospital has tie-ups with major hospitals in Trichy for specialized treatments. A pharmacy within the campus ensures availability of medicines. Regular health awareness programs and medical camps are organized."
          },
          {
            title: "Green Campus Initiatives",
            content: "NIT Trichy is committed to environmental sustainability with extensive tree plantation programs, rainwater harvesting systems across the campus, solar panels on various buildings providing renewable energy, biogas plant for organic waste management, sewage treatment plant for water recycling, plastic-free campus initiatives, and an eco-friendly transportation system. The campus has been awarded for its green initiatives and biodiversity conservation efforts. Over 30% of the campus is green cover."
          },
          {
            title: "Transportation",
            content: "The campus has an excellent internal transport system with regular bus services connecting various parts of the 800-acre campus to hostels, academic blocks, and main gate. Bicycles are popular among students for eco-friendly commute. The campus is well-connected to Trichy city (30 km) with regular bus services and railway connectivity to major cities."
          },
          {
            title: "Internet and IT Infrastructure",
            content: "The entire campus is covered under high-speed WiFi with 1 Gbps internet backbone connectivity. Students get unlimited internet access in hostels and academic areas. The Computer Center provides computational facilities and support. Dedicated servers host institute websites, student portals, and learning management systems. Regular IT workshops and cybersecurity awareness programs are conducted."
          }
        ],
        quickFacts: {
          "Total Area": "800 acres",
          "Departments": "16",
          "Hostels": "16",
          "Total Students": "~8000",
          "Faculty & Staff": "~1000",
          "Library Books": "2,00,000+",
          "Sports Facilities": "30+",
          "Green Cover": "30%",
          "Location": "Tiruchirappalli, Tamil Nadu",
          "Established": "1964"
        },
        tags: ["Campus", "Infrastructure", "Facilities", "Sports", "Library", "Hostels", "Green Campus"]
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
        intro: "Pragyan is the annual international techno-managerial festival of NIT Trichy, attracting over 25,000 participants from across the globe. Established in 1996, it has grown to become one of India's largest student-run technical festivals, featuring cutting-edge competitions, workshops, exhibitions, and guest lectures from industry leaders and innovators.",
        sections: [
          {
            title: "Festival Overview",
            content: "Pragyan is a four-day technical extravaganza typically held in February-March each year. The festival transforms the NIT Trichy campus into a hub of innovation and technology with participants from over 500 colleges nationwide and international participants from countries like USA, UK, Singapore, and Australia. The festival has a different theme each year, focusing on emerging technologies and global challenges. Past themes have included Artificial Intelligence, Sustainability, Space Exploration, and Quantum Computing."
          },
          {
            title: "Technical Competitions and Events",
            content: "Pragyan hosts over 50 competitions across various domains: Coding events like Hackathons (24-hour coding marathons), Competitive Programming contests, App Development challenges, and Game Development competitions. Robotics competitions including line following, warehouse management, robo-soccer, and autonomous navigation challenges. Electronics events featuring circuit design, embedded systems projects, and Arduino/Raspberry Pi challenges. Engineering design competitions like bridge building, hydraulic crane design, and CAD modeling contests. Science and innovation events including paper presentations, project exhibitions, and research poster competitions. Business and management events like case study competitions, stock market simulations, and startup pitches."
          },
          {
            title: "Workshops and Guest Lectures",
            content: "Industry experts and academic leaders conduct workshops on trending technologies including Machine Learning and Deep Learning with hands-on Python sessions, Web Development using modern frameworks, Blockchain and Cryptocurrency, Internet of Things and Smart Systems, Data Science and Analytics, Cyber Security and Ethical Hacking, Robotics and Automation, and 3D Printing and CAD Design. Guest lectures feature renowned personalities from tech giants like Google, Microsoft, Amazon, and innovative startups. Past speakers have included CEOs of major companies, distinguished professors, and successful entrepreneurs who share insights on technology trends, career guidance, and innovation."
          },
          {
            title: "Exhibitions and Demonstrations",
            content: "Pragyan features impressive exhibitions including Project Expo where students from various colleges showcase their innovative projects, ranging from drones and robots to IoT devices and AI applications. Industry exhibitions where companies display their latest products and technologies. Science demonstrations featuring physics experiments, chemistry shows, and interactive mathematical puzzles. Startup exhibitions highlighting innovative business ideas and products by young entrepreneurs. The exhibitions are highly interactive, allowing visitors to try out technologies and engage with creators."
          },
          {
            title: "Gaming Championships",
            content: "The festival includes massive gaming tournaments with substantial prize pools in popular titles like CS:GO, Dota 2, Valorant, FIFA, Need for Speed, and mobile games like BGMI and COD Mobile. The gaming arena is equipped with high-end gaming PCs and consoles. LAN gaming creates an electrifying atmosphere with hundreds of gamers competing simultaneously."
          },
          {
            title: "Quizzing and Literary Events",
            content: "Pragyan also celebrates intellect through various quiz competitions including General Quiz covering diverse topics, Technology Quiz focusing on latest tech trends, Business Quiz for management enthusiasts, and Puzzle events testing logical reasoning. Debate competitions, paper presentation contests, and technical writing competitions add literary flavor to the technical festival."
          },
          {
            title: "Informal Events and Entertainment",
            content: "Beyond technical competitions, Pragyan ensures entertainment through DJ nights and concerts featuring popular artists, stand-up comedy shows by renowned comedians, treasure hunts across the campus, flash mobs and street plays, food festivals with diverse cuisines, and cultural performances. The informal events provide relaxation and networking opportunities for participants."
          },
          {
            title: "International Participation",
            content: "Pragyan has grown to attract international participation with students from universities worldwide participating through online platforms and on-campus visits. The festival collaborates with international technical organizations and student chapters. Virtual events enable global participation in coding contests, paper presentations, and workshops."
          },
          {
            title: "Organization and Student Involvement",
            content: "Pragyan is entirely student-organized by the Pragyan Core Team, comprising 100+ student coordinators and 500+ volunteers. The festival operates with departments like Publicity, Sponsorship, Events, Hospitality, Design, Web, and Finance. Students gain invaluable experience in event management, leadership, teamwork, and coordination. The festival has an annual budget running into crores, managed entirely by students with guidance from faculty advisors."
          },
          {
            title: "Impact and Legacy",
            content: "Over its 28+ year history, Pragyan has become a launchpad for innovation, with several projects showcased at the festival going on to become successful startups. The festival has influenced thousands of students to pursue research and innovation. Alumni often credit Pragyan participation as a transformative experience in their academic journey. The festival's reputation continues to grow, attracting increasingly prestigious sponsors, speakers, and participants each year."
          }
        ],
        quickFacts: {
          "Established": "1996",
          "Duration": "4 days",
          "Participants": "25,000+",
          "Colleges": "500+",
          "Events": "50+",
          "Prize Pool": "₹40 Lakhs+",
          "Footfall": "50,000+",
          "International Reach": "10+ countries",
          "Student Team": "600+ volunteers"
        },
        tags: ["Events", "Technical", "Festival", "Competitions", "Hackathon", "Robotics", "Innovation", "Pragyan"]
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
        intro: "Festember is the annual cultural festival of NIT Trichy and one of South India's largest and most vibrant student-organized cultural extravaganzas. Established in 1975, Festember attracts over 60,000 participants from across the nation for four days of music, dance, drama, fashion, literature, and entertainment.",
        sections: [
          {
            title: "Festival Heritage",
            content: "With a rich legacy spanning nearly five decades, Festember has evolved from a small college festival to one of India's premier cultural celebrations. The name 'Festember' combines 'Festival' and 'September', though it now takes place in October. The festival embodies the creative spirit of NIT Trichy and serves as a platform for young talent to showcase their artistic abilities on a grand stage."
          },
          {
            title: "Cultural Competitions",
            content: "Festember hosts competitions across various artistic domains. Dance events include Solo Dance across classical and contemporary styles, Group Dance with themes ranging from mythology to social issues, Face-off (dance battle), and Nupur (classical dance). Music competitions feature Solo Singing in various genres, Band competitions for rock, fusion, and acoustic bands, Beat Boxing championships, and Instrumental performances. Drama and theatre events include Street plays on social themes, Mime performances, Mono-acting, and Short film competitions. Fashion events showcase Ramp walks, Costume design contests, and Fashion choreography."
          },
          {
            title: "Pro-Nights and Celebrity Performances",
            content: "Festember's highlight is its spectacular Pro-Nights featuring performances by India's biggest celebrities. Past performers include renowned singers like Arijit Singh, Sunidhi Chauhan, Neha Kakkar, and Armaan Malik who have enthralled audiences with their live performances. Stand-up comedy nights have featured popular comedians like Zakir Khan, Biswa Kalyan Rath, and Kenny Sebastian. DJ nights bring in international and national DJs spinning electronic dance music. The Pro-Nights attract audiences of 10,000+ creating an electrifying atmosphere in the open-air amphitheater."
          },
          {
            title: "Literary and Debating Events",
            content: "The festival celebrates intellect through various literary competitions including Debate (both Parliamentary and Asian formats), Extempore speaking, Creative Writing, Poetry slam, Quizzing (General, Entertainment, Literature), Spelling Bee, and Dumb Charades. These events attract the best orators, writers, and quiz enthusiasts from across the country."
          },
          {
            title: "Fine Arts and Photography",
            content: "Creative expression finds its space through Fine Arts competitions including Painting, Sketching, Doodling, Cartooning, Rangoli making, and Face painting. Photography competitions cover themes like Nature, Portraiture, Photojournalism, and Mobile photography. Installation art and live art performances add contemporary flair to the festival."
          },
          {
            title: "Workshops and Masterclasses",
            content: "Festember conducts workshops by industry professionals in various fields. Music production workshops teach digital audio workstation usage and mixing techniques. Dance workshops cover various forms like Hip-hop, Contemporary, and Salsa. Theatre workshops on acting, direction, and improvisation. Photography masterclasses by renowned photographers. Fashion styling and makeup workshops by industry experts. These workshops provide learning opportunities while adding skill development to entertainment."
          },
          {
            title: "Informal Events",
            content: "The festival features numerous informal events for maximum participation including Mr. and Ms. Festember (personality contest), Treasure Hunt spanning the entire campus, Fashion shows and parade, Food festivals with diverse cuisines, Art exhibitions, Carnival games and activities, and Flash mobs. These events ensure every participant can find something engaging regardless of their artistic background."
          },
          {
            title: "Infrastructure and Venues",
            content: "Festember utilizes the entire NIT Trichy campus with multiple venues operating simultaneously. The main stage hosts Pro-Nights and major competitions. The Audi (Auditorium) hosts indoor performances like theatre and classical music. Multiple open-air stages for parallel events. Exhibition halls for art displays. Food courts spread across the campus. The entire campus transforms into a cultural carnival with decorations, lights, and art installations creating a festive atmosphere."
          },
          {
            title: "Organization",
            content: "Festember is entirely student-run with over 800 volunteers working round the clock. The Festember Core Team comprises department heads for Events, Publicity, Sponsorship, Hospitality, Design, Web, Media, and Security. Planning begins months in advance with team members coordinating logistics, reaching out to sponsors, designing marketing campaigns, and managing a multi-crore budget. The organizational experience provides invaluable skills in event management, leadership, and teamwork."
          },
          {
            title: "Cultural Impact",
            content: "Festember has launched many careers with winners of competitions going on to become professional artists, musicians, and actors. The festival fosters cultural exchange with participants from diverse backgrounds sharing their art forms. It has become a networking platform where students build lasting friendships and professional connections. The festival's emphasis on both traditional and contemporary art forms helps preserve culture while embracing innovation."
          }
        ],
        quickFacts: {
          "Established": "1975",
          "Duration": "4 days",
          "Participants": "60,000+",
          "Events": "100+",
          "Prize Pool": "₹30 Lakhs+",
          "Footfall": "1,00,000+",
          "Pro-Nights": "4",
          "Student Volunteers": "800+",
          "Colleges": "600+"
        },
        tags: ["Events", "Cultural", "Festival", "Music", "Dance", "Drama", "Entertainment", "Festember"]
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
        intro: "The Central Library at NIT Trichy is a state-of-the-art, five-story facility serving as the knowledge repository and academic hub for students, faculty, and researchers. With a collection of over 2,00,000 books, thousands of journals, extensive digital resources, and modern amenities, the library supports the academic and research endeavors of the entire NIT Trichy community.",
        sections: [
          {
            title: "Infrastructure and Layout",
            content: "The library building is an architecturally impressive structure spanning over 50,000 square feet. The ground floor houses the circulation desk, new arrivals section, newspaper and magazine reading area, and the main entrance lobby with RFID gates. The first and second floors contain vast collections of textbooks, reference books organized by departments and subjects, with comfortable reading areas interspersed throughout. The third floor features the digital library, computer lab with 100+ terminals, and individual study cabins for focused research. The fourth floor is dedicated to special collections, research journals, thesis archives, and discussion rooms. Each floor is equipped with elevators, staircases, water purifiers, and restroom facilities."
          },
          {
            title: "Collections and Resources",
            content: "The library houses an extensive collection including over 2,00,000 books covering all engineering disciplines, sciences, humanities, and management, 5,000+ national and international journals in print and electronic formats, 50,000+ e-books accessible online, conference proceedings and technical reports, standards and specifications (IS, ASTM, IEEE), competitive exam preparation books (GATE, GRE, CAT), fiction and non-fiction for leisure reading, and a rare book collection with vintage technical texts. The collection is continuously updated with latest editions and new publications based on faculty recommendations and student requirements."
          },
          {
            title: "Digital Resources and Databases",
            content: "The library provides access to premium digital resources including IEEE Xplore Digital Library (complete collection of IEEE journals and conferences), Springer Link (engineering, science, and medical journals), ScienceDirect (Elsevier's platform with thousands of journals), ASME Digital Collection (mechanical engineering resources), ACM Digital Library (computing literature), ASTM Standards, SciFinder (chemical research database), MathSciNet (mathematical sciences), Web of Science and Scopus for citation tracking, and numerous open access resources. Students and faculty can access these databases both on-campus and remotely through VPN."
          },
          {
            title: "Services and Facilities",
            content: "The library offers comprehensive services including automated book issue/return system using RFID technology, online catalog (OPAC) for searching resources, document delivery and inter-library loan services, reference and research assistance by trained librarians, printing, scanning, and photocopying facilities, WiFi connectivity throughout the building, air-conditioned reading halls with comfortable seating for 500+ users, individual study cubicles for research scholars, group discussion rooms bookable in advance, and extended hours (8 AM to 11 PM on weekdays, 24/7 during exams). The library staff is helpful and conducts regular orientation programs for new users."
          },
          {
            title: "Special Sections",
            content: "The library maintains several special sections including the Thesis Section housing all M.Tech and Ph.D. theses submitted at NIT Trichy, Project Reports section with undergraduate final year projects, Reserve Book Section with multiple copies of high-demand textbooks, Competitive Exams corner with preparation materials, Career Guidance section with placement and higher studies resources, and a Periodicals section with current magazines and newspapers from around the world. The Special Collections room preserves historical documents and publications related to NIT Trichy's history."
          },
          {
            title: "Technology and Automation",
            content: "The library has embraced technology with complete automation using KOHA Library Management System, RFID-based self-check in/out kiosks reducing waiting time, barcode scanning for quick identification, online reservation and renewal of books through the library portal, mobile app for accessing library services, digital notice boards for announcements, and security systems to prevent unauthorized removal of books. The library website provides 24/7 access to digital resources, allowing students to download research papers and e-books from their hostel rooms."
          },
          {
            title: "Learning Commons",
            content: "The library has evolved into a Learning Commons with facilities beyond traditional book lending including collaborative learning spaces with whiteboards and projectors for group study, multimedia room with audio-visual equipment for presentations, training rooms where workshops on research methodology, plagiarism detection, and citation management are conducted, scanning station for digitizing documents, 3D visualization lab for engineering design review, and a relaxation area with sofas and bean bags for informal reading. This transformation makes the library a vibrant space for learning, collaboration, and innovation."
          },
          {
            title: "Student Initiatives",
            content: "The Library Advisory Committee includes student representatives who provide feedback and suggestions. The library organizes regular events like Book exhibitions showcasing new arrivals and themed collections, Reading challenges encouraging diverse reading, Author talks and literary discussions, Information literacy sessions on effective database searching, and Library quiz competitions. A student-run Book Club meets weekly to discuss books, fostering a reading culture on campus."
          },
          {
            title: "Support for Research",
            content: "The library actively supports research activities by providing access to citation management tools (Mendeley, Zotero), plagiarism detection software (Turnitin), statistical analysis software (SPSS, MATLAB), reference management assistance, helping with systematic literature reviews, conducting workshops on research paper writing, and maintaining an institutional repository (IR) where NIT Trichy's research output is archived and made freely accessible. Research scholars receive dedicated support with longer borrowing periods and priority access to resources."
          },
          {
            title: "Future Developments",
            content: "The library continuously upgrades its facilities with plans to expand the e-resource collection, implement AI-powered recommendation systems for personalized book suggestions, create maker spaces with 3D printers and electronics kits, enhance mobile accessibility of services, and develop virtual reality zones for immersive learning experiences. The library aims to remain at the forefront of academic libraries in India."
          }
        ],
        quickFacts: {
          "Total Books": "2,00,000+",
          "Journals": "5,000+",
          "E-Books": "50,000+",
          "Seating Capacity": "500+",
          "Floors": "5",
          "Area": "50,000 sq ft",
          "Databases": "25+",
          "Operating Hours": "8 AM - 11 PM (24/7 during exams)",
          "Study Cabins": "50",
          "Computer Terminals": "100+"
        },
        tags: ["Campus", "Library", "Resources", "Research", "Digital", "Books", "Study", "Academic"]
      }
    },
    sac: {
      title: "Student Activity Center (SAC)",
      category: "Campus",
      image: "🎪",
      views: 3124,
      lastEdited: "2024-01-15",
      contributors: 13,
      content: {
        intro: "The Student Activity Center (SAC) is the vibrant heart of extracurricular life at NIT Trichy. This modern facility serves as the headquarters for all student clubs, cultural activities, and recreational pursuits, fostering creativity, leadership, and community building among students.",
        sections: [
          {
            title: "Infrastructure",
            content: "SAC is a large multi-story building equipped with numerous activity rooms, practice studios, meeting halls, and recreational facilities. The building includes dedicated music rooms with soundproofing and basic instruments, dance practice halls with mirrors and sound systems, art and craft studios with supplies and workspace, photography darkroom and editing stations, multipurpose halls for meetings and events, conference rooms for club meetings, a cafeteria for quick refreshments, and storage facilities for club equipment. The entire building has WiFi connectivity and is accessible from early morning till late night to accommodate various student activities."
          },
          {
            title: "Student Clubs and Organizations",
            content: "SAC houses over 40 active student clubs across various domains. Technical clubs include Delta Force (coding and software development), Spider R&D (research and innovation), Forge (hardware and innovation), and department-specific technical societies. Cultural clubs encompass Music Club for instrumental and vocal music, Dance Club covering various styles, Dramatics Club for theatre and street plays, Fine Arts Club for painting and sketching, Photography Club for budding photographers, and Literary Club for writing and debates. Special interest clubs include Entrepreneurship Cell for startup enthusiasts, NSS (National Service Scheme) for social service, Quiz Club, Adventure Club for trekking and outdoor activities, Film and Media Club, and environmental clubs. Each club has dedicated space in SAC for regular meetings and activities."
          },
          {
            title: "Practice Facilities",
            content: "SAC provides excellent facilities for students to hone their skills. Music practice rooms are equipped with keyboards, guitars, drum pads, and audio recording equipment. Dance studios have professional sound systems, mirrors, and wooden flooring. Theatre practice areas with basic lighting and props. Art studios with easels, canvases, and various art supplies. A mini recording studio for music production. These facilities are available for booking by individual students and clubs, enabling regular practice and preparation for competitions and events."
          },
          {
            title: "Regular Activities and Events",
            content: "SAC buzzes with activity throughout the academic year. Weekly club meetings and practice sessions are common. Monthly open mics and talent shows provide platforms for students to showcase their skills. Workshops and training sessions by professionals in music, dance, photography, and other arts. Inter-club collaborations for joint events. The building also hosts auditions for Festember and Pragyan events, club inductions for freshers, and pre-festival meetings. During festival seasons, SAC becomes the nerve center with round-the-clock activity."
          },
          {
            title: "Student Council Offices",
            content: "SAC houses offices of various student bodies including Student Council with designated meeting rooms, Sports Council coordinating athletic activities, Cultural Council organizing cultural events, Technical Council for tech fest coordination, and Mess Council representatives. These bodies work from SAC to plan events, address student concerns, and manage their respective domains. The proximity of all student leadership in one building facilitates better coordination and communication."
          },
          {
            title: "Recreational Facilities",
            content: "Beyond organized club activities, SAC offers recreational amenities for relaxation including table tennis tables, carrom boards, chess sets, a small library with magazines and comics, a TV lounge for watching sports and entertainment, gaming zone with board games, and comfortable seating areas for socializing. The SAC cafeteria is a popular hangout spot where students gather between classes and after events."
          },
          {
            title: "Jamming and Informal Sessions",
            content: "One of SAC's most cherished features is the culture of informal jamming sessions. Musicians gather spontaneously in the music rooms for jam sessions, creating original compositions and covers. Dance enthusiasts practice freestyle and collaborate on fusion pieces. Artists sketch together and discuss techniques. These informal interactions often lead to beautiful creative collaborations and lasting friendships. Late-night jamming sessions before cultural festivals are legendary, with students pulling all-nighters to perfect their performances."
          },
          {
            title: "Equipment and Resources",
            content: "SAC maintains an inventory of equipment available for student use including musical instruments (guitars, keyboards, drums, flutes, violins), professional cameras and lenses for photography club, video cameras and editing equipment, sound systems and mixers, costumes and props for dramatics, art supplies (paints, brushes, canvases), and sports equipment. Students can borrow these resources for events and practice, with proper documentation maintained by club coordinators."
          },
          {
            title: "Administration and Management",
            content: "SAC is managed by a committee comprising student representatives from various clubs and faculty advisors. The committee coordinates space allocation, equipment maintenance, funding distribution, and conflict resolution. Each club has designated time slots for their activities, though flexible arrangements are made during festival seasons. The administration ensures that SAC remains inclusive and accessible to all students regardless of their artistic background or skill level."
          },
          {
            title: "Cultural Impact",
            content: "SAC has been instrumental in nurturing artistic talent at NIT Trichy. Many students discover their passion for arts through exposure to SAC activities. The collaborative environment encourages interdisciplinary interactions with engineers, artists, musicians, and writers working together. Skills developed at SAC - teamwork, leadership, creativity, time management - prove invaluable in students' careers. Alumni often recall their SAC experiences as some of the most memorable aspects of their college life, and many continue their artistic pursuits professionally."
          }
        ],
        quickFacts: {
          "Student Clubs": "40+",
          "Practice Rooms": "15+",
          "Seating Areas": "Multiple lounges",
          "Operating Hours": "6 AM - 11 PM",
          "Music Rooms": "6",
          "Dance Studios": "3",
          "Art Studios": "2",
          "Meeting Rooms": "8",
          "Annual Events": "100+"
        },
        tags: ["Campus", "Clubs", "Cultural", "Activities", "Music", "Dance", "Arts", "Recreation", "SAC"]
      }
    },
    crc: {
      title: "Career Development Cell (CDC)",
      category: "Campus",
      image: "💼",
      views: 2987,
      lastEdited: "2024-01-17",
      contributors: 9,
      content: {
        intro: "The Career Development Cell (CDC) at NIT Trichy is the dedicated placement and career guidance center that facilitates recruitment of students by top companies and organizations. With an exceptional track record, CDC has consistently achieved 100% placement for interested students with impressive salary packages.",
        sections: [
          {
            title: "Placement Record",
            content: "NIT Trichy boasts one of the best placement records among NITs and engineering colleges in India. The institute consistently achieves 100% placement for interested students across all branches. For the 2023-24 academic year, the average package stood at ₹14.5 LPA with the highest package touching ₹44 LPA for international offers and ₹1.05 Crore domestic. Over 300 companies visit the campus annually for recruitments. Top recruiters include tech giants like Google, Microsoft, Amazon, Adobe, Oracle, Uber, and LinkedIn; core engineering companies like Tata Steel, L&T, Ashok Leyland, and Caterpillar; consulting firms like McKinsey, BCG, Bain, and Deloitte; finance companies like Goldman Sachs, Morgan Stanley, and American Express; and numerous startups and product-based companies."
          },
          {
            title: "The Recruitment Process",
            content: "The placement season typically begins in July with pre-placement talks where companies present their profiles and job roles. The process includes written tests assessing aptitude, technical knowledge, and coding skills, followed by technical interviews evaluating problem-solving abilities and subject knowledge, HR interviews assessing personality and cultural fit, and group discussions for certain roles. Companies visit campus in phases (Phase 1 for core and analytics, Phase 2 for IT and software, and Phase 3 for remaining opportunities). The entire process is meticulously organized by CDC with dedicated placement coordinators ensuring smooth operations."
          },
          {
            title: "Internship Opportunities",
            content: "CDC also facilitates summer internships for pre-final year students, which are crucial stepping stones to final placements. Many students secure Pre-Placement Offers (PPOs) based on their internship performance. Internship opportunities span research internships at IITs, IISc, and international universities, industry internships at leading companies, and startup internships for entrepreneurial exposure. The average internship stipend ranges from ₹25,000 to ₹1,00,000 per month with some international internships offering higher compensation."
          },
          {
            title: "Career Development Programs",
            content: "CDC organizes various programs throughout the year to prepare students for placements including aptitude and reasoning workshops, coding bootcamps covering data structures and algorithms, communication and personality development sessions, resume building and LinkedIn optimization workshops, mock interviews with alumni and industry professionals, group discussion practice sessions, and company-specific preparation drives. These programs, often conducted by alumni and industry experts, significantly enhance students' employability."
          },
          {
            title: "Branch-wise Performance",
            content: "Placement performance varies by branch but all departments achieve excellent results. Computer Science and Electronics students often bag the highest packages in software and analytics roles. Mechanical, Civil, and Metallurgical students excel in core engineering companies and manufacturing sectors. Instrumentation and Electrical students get opportunities in both software and core domains. Even non-circuital branches have strong placement records with students securing roles in consulting, analytics, and software development. The CDC ensures that every branch receives adequate attention and opportunities."
          },
          {
            title: "Support for Higher Studies",
            content: "While CDC focuses primarily on placements, it also supports students aspiring for higher education through information sessions about MS and Ph.D. programs abroad, GRE, TOEFL, and IELTS preparation guidance, assistance with university applications and SOPs, connecting students with alumni pursuing higher studies, and information about scholarships and funding opportunities. Many NIT Trichy graduates proceed to top universities like MIT, Stanford, Carnegie Mellon, UC Berkeley, and Ivy League institutions."
          },
          {
            title: "Alumni Network",
            content: "CDC leverages NIT Trichy's strong alumni network for placements. Alumni working at various companies often advocate for NIT Trichy students, facilitating recruitment. Alumni also conduct mock interviews, mentor students, and provide industry insights. The placement team maintains regular contact with alumni to explore new opportunities and referrals, strengthening the placement ecosystem year after year."
          },
          {
            title: "CDC Team",
            content: "The CDC comprises faculty placement coordinators from each department, student placement coordinators (senior students) who liaise between CDC and the student body, and administrative staff managing logistics and communications. Student coordinators play a crucial role in organizing events, coordinating with companies, and assisting peers with preparation. Serving as a placement coordinator is considered a prestigious responsibility and provides invaluable experience in management and leadership."
          }
        ],
        quickFacts: {
          "Placement Rate": "100%",
          "Companies Visiting": "300+",
          "Highest Package": "₹1.05 Crore",
          "Average Package": "₹14.5 LPA",
          "International Offers": "Yes",
          "PPO Percentage": "~25%",
          "Internship Stipend": "₹25K - ₹1L/month",
          "Top Recruiters": "Google, Microsoft, Amazon, Goldman Sachs"
        },
        tags: ["Campus", "Placements", "Career", "CDC", "Jobs", "Internships", "Companies", "Recruitment"]
      }
    },
    orion: {
      title: "Orion - The Literary Club",
      category: "Clubs",
      image: "✍️",
      views: 1543,
      lastEdited: "2024-01-13",
      contributors: 7,
      content: {
        intro: "Orion is the official literary club of NIT Trichy, dedicated to fostering a love for literature, creative writing, debating, and all forms of verbal expression. The club provides a platform for students to explore their literary talents through various activities, competitions, and publications.",
        sections: [
          {
            title: "Club Activities",
            content: "Orion conducts regular activities throughout the year including weekly creative writing sessions where members share stories, poems, and essays, debate competitions on current affairs and philosophical topics, book discussion meets analyzing classic and contemporary literature, poetry slam events for spoken word performances, and storytelling sessions. The club also organizes quizzing events, word games, and literary trivia that attract enthusiastic participation. These activities create a vibrant community of literature enthusiasts on campus."
          },
          {
            title: "Publications",
            content: "Orion publishes 'Expressions', a bi-annual literary magazine featuring creative works by students including short stories, poems, essays, artwork, and photography. The magazine has gained recognition for its quality content and professional presentation. Members also contribute articles to the institute's official magazine and maintain an active blog featuring book reviews, literary analyses, and creative pieces. During Festember, Orion releases special edition publications showcasing the best literary talent."
          },
          {
            title: "Workshops and Guest Lectures",
            content: "The club regularly invites established authors, poets, journalists, and playwrights for interactive sessions. Past guest speakers have included renowned Indian English authors, Tamil writers, journalists from leading publications, and slam poetry champions. Workshops cover topics like creative writing techniques, storytelling craft, effective debating, poetry composition, and journalism. These sessions provide invaluable insights and inspiration to aspiring writers and speakers."
          },
          {
            title: "Festember Events",
            content: "During Festember, Orion organizes and manages all literary events including Debate competitions (Parliamentary and Asian formats), Extempore speaking contests, Poetry slam, Creative writing competitions, Spell Bee, Dumb Charades, and Literary quiz. These events attract participants from colleges across India, making them highly competitive and prestigious. Orion members serve as organizers, judges, and coordinators, gaining event management experience."
          },
          {
            title: "Community Impact",
            content: "Orion has cultivated a strong reading and writing culture at NIT Trichy. The club has helped many students discover their passion for literature and some members have gone on to publish books, write for major publications, and pursue careers in journalism and content creation. The club also collaborates with the library for book donation drives and reading campaigns, promoting literacy beyond the campus."
          }
        ],
        quickFacts: {
          "Established": "1990s",
          "Members": "100+",
          "Publications": "2 per year",
          "Weekly Meetings": "Yes",
          "Guest Lectures": "10+ per year",
          "Festember Events": "8+"
        },
        tags: ["Clubs", "Literary", "Writing", "Debate", "Poetry", "Books", "Orion"]
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
        intro: "Delta Force is the premier coding and software development club at NIT Trichy. The club aims to promote competitive programming, software development, and open-source contributions among students, creating a community of skilled programmers who excel in technical interviews and coding competitions.",
        sections: [
          {
            title: "Competitive Programming",
            content: "Delta Force actively promotes competitive programming through regular contests on platforms like Codeforces, CodeChef, and LeetCode. The club organizes weekly coding challenges, discusses solutions to complex algorithmic problems, conducts crash courses on data structures and algorithms, and provides guidance for participating in prestigious contests like ACM ICPC, Google Code Jam, Facebook Hacker Cup, and Google Hash Code. Many club members have achieved high ratings on competitive programming platforms and have represented NIT Trichy at national and international competitions."
          },
          {
            title: "Development Projects",
            content: "Beyond competitive programming, Delta Force emphasizes practical software development. The club undertakes projects including web applications using modern frameworks (React, Angular, Django, Flask), mobile app development for Android and iOS, open-source contributions to popular GitHub repositories, automation scripts and tools, and machine learning models and AI applications. These projects provide hands-on experience with industry-standard tools and practices, preparing students for real-world software engineering."
          },
          {
            title: "Workshops and Training",
            content: "Delta Force conducts comprehensive training programs for students of all levels. For beginners, the club offers crash courses in programming languages (C++, Python, Java), introduction to data structures and algorithms, and Git and version control basics. Advanced workshops cover topics like advanced algorithms and problem-solving techniques, web development stacks (MERN, MEAN), mobile app development frameworks, cloud computing (AWS, Azure), DevOps and CI/CD, and machine learning and deep learning. These sessions are conducted by senior members and occasionally by industry professionals and alumni."
          },
          {
            title: "Hackathons",
            content: "The club organizes and participates in numerous hackathons throughout the year. Internal hackathons like 'Code Sprint' and 'Hack Night' provide platforms for students to build innovative solutions to real-world problems within 24-48 hours. Delta Force teams regularly participate in external hackathons including Smart India Hackathon, various corporate hackathons by Google, Microsoft, Facebook, and startup competitions. Many teams have won prizes and recognition, with some hackathon projects evolving into full-fledged startups."
          },
          {
            title: "Placement Preparation",
            content: "Delta Force plays a crucial role in placement preparation for computer science students. The club maintains a repository of company-specific interview questions, conducts mock interviews simulating technical rounds, organizes peer programming sessions for practice, shares resources for system design and development interviews, and provides guidance on resume building and LinkedIn optimization. The club's alumni network, comprising software engineers at top tech companies, regularly conducts sessions and mentors students, significantly contributing to the excellent placement record of CS students."
          },
          {
            title: "Pragyan Involvement",
            content: "During Pragyan, Delta Force organizes major coding events including 24-hour hackathons with substantial prize pools, competitive programming contests, app development challenges, and code debugging competitions. These events attract participants from across India, often featuring problem sets designed in collaboration with partner companies. Delta Force also manages the technical infrastructure for Pragyan's online platform and registration systems."
          },
          {
            title: "Open Source and Collaborations",
            content: "Delta Force encourages members to contribute to open-source projects, participating in programs like Google Summer of Code, GitHub externships, and open-source mentorship programs. The club collaborates with other technical clubs like Spider R&D for interdisciplinary projects, partners with companies for sponsored projects and workshops, and engages with the developer community through meetups and conferences. This exposure to the broader tech ecosystem enhances members' skills and networking."
          },
          {
            title: "Success Stories",
            content: "Delta Force alumni have achieved remarkable success in the tech industry and academia. Members have joined companies like Google, Facebook, Microsoft, Amazon, and top startups in software engineering and research roles, secured admissions to top universities (MIT, Stanford, CMU) for higher studies, founded successful startups in the tech space, achieved top ranks in competitive programming globally, and contributed significantly to major open-source projects. The club's culture of excellence and continuous learning has been instrumental in these successes."
          }
        ],
        quickFacts: {
          "Established": "2000s",
          "Members": "200+",
          "Weekly Contests": "Yes",
          "Hackathons": "5+ per year",
          "Projects": "30+ ongoing",
          "Company Collaborations": "10+",
          "Average Codeforces Rating": "1600+"
        },
        tags: ["Clubs", "Coding", "Programming", "Development", "Hackathon", "Competitive Programming", "Delta"]
      }
    },
    spider: {
      title: "Spider R&D - Research & Innovation",
      category: "Clubs",
      image: "🕷️",
      views: 3654,
      lastEdited: "2024-01-16",
      contributors: 12,
      content: {
        intro: "Spider R&D is NIT Trichy's premier research and development club focused on hardware, robotics, IoT, and innovative engineering projects. The club serves as a platform for students to explore emerging technologies, build prototypes, and transform ideas into working solutions.",
        sections: [
          {
            title: "Research Areas",
            content: "Spider R&D members work on diverse cutting-edge technologies including Robotics and Automation with autonomous navigation robots, line-following and obstacle-avoidance bots, and robotic arms and manipulators; Internet of Things projects like smart home automation, agricultural monitoring systems, and industrial IoT solutions; Embedded Systems using Arduino, Raspberry Pi, ESP32, and custom PCB designs; Machine Learning and Computer Vision for object detection and recognition, image processing applications, and autonomous vehicle systems; and Renewable Energy projects including solar tracking systems and energy-efficient devices. The club encourages interdisciplinary research combining electronics, mechanical design, and software development."
          },
          {
            title: "Projects and Prototypes",
            content: "Spider R&D has successfully completed numerous innovative projects. Notable examples include autonomous delivery robots for campus use, IoT-based smart irrigation systems for agriculture, gesture-controlled wheelchairs for physically challenged individuals, air quality monitoring systems, drone technology for surveillance and mapping, automated waste segregation systems, and smart parking solutions. These projects have won accolades at national-level competitions and some have been adopted for practical implementation. The club maintains a well-equipped workshop with tools, electronic components, and prototyping facilities where members can bring their ideas to life."
          },
          {
            title: "Competitions and Events",
            content: "Spider R&D actively participates in robotics and innovation competitions including ABU Robocon (Asia-Pacific Robot Contest), IIT Tech Fests (Techfest, Shaastra, Kshitij), Smart India Hackathon, various drone and UAV competitions, and Make-a-thon challenges. The club has a strong track record with multiple podium finishes and recognition at national events. During Pragyan, Spider organizes robotics competitions, workshops on embedded systems and IoT, project exhibitions showcasing member innovations, and beginner-friendly robot building workshops. These events attract enthusiastic participation and inspire younger students to pursue hardware and robotics."
          },
          {
            title: "Training and Mentorship",
            content: "Spider R&D conducts structured training programs for new members covering basics of electronics and circuit design, microcontroller programming (Arduino, Raspberry Pi), sensor integration and data acquisition, motor control and actuation, PCB design and fabrication, 3D modeling and printing for mechanical components, and project management and documentation. Senior members mentor juniors through hands-on projects, providing guidance on troubleshooting, optimization, and presentation skills. The club fosters a collaborative learning environment where experimentation and failure are seen as learning opportunities."
          },
          {
            title: "Collaborations",
            content: "Spider R&D collaborates extensively with academic departments for research projects, other student clubs (Delta Force, Forge) for interdisciplinary initiatives, industry partners for sponsored projects and mentorship, startups and innovation labs for real-world problem solving, and government organizations for development of socially impactful solutions. These collaborations provide members with diverse perspectives, resources, and opportunities to work on meaningful projects beyond academic requirements."
          },
          {
            title: "Achievements",
            content: "The club has an impressive portfolio of achievements including multiple top positions at ABU Robocon representing NIT Trichy, awards at IIT tech fests in robotics and hardware categories, grants and funding from government innovation schemes, patents filed for novel innovations, publications in conferences and journals, and successful product deployments in industry and agriculture. These accomplishments have established Spider R&D as one of the leading technical clubs at NIT Trichy and earned recognition in the national engineering community."
          },
          {
            title: "Future Vision",
            content: "Spider R&D continuously evolves to embrace emerging technologies. Current focus areas include advanced autonomous systems with AI integration, industrial automation and Industry 4.0 solutions, wearable technology and health monitoring devices, sustainable and green technology innovations, and space technology and satellite systems. The club aims to contribute to cutting-edge research while solving real-world problems and creating socially impactful innovations."
          }
        ],
        quickFacts: {
          "Established": "2006",
          "Members": "150+",
          "Active Projects": "25+",
          "Workshop Area": "Well-equipped lab",
          "Competitions Won": "20+",
          "Collaborations": "Industry & Research",
          "Focus": "Robotics, IoT, Embedded Systems"
        },
        tags: ["Clubs", "Robotics", "IoT", "Hardware", "Innovation", "Research", "Spider", "R&D"]
      }
    }
  }

  // Filter articles based on search and category
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

  // Calculate total stats
  const totalArticles = Object.keys(articles).length
  const totalContributors = Object.values(articles).reduce((sum, article) => sum + article.contributors, 0)
  const totalViews = Object.values(articles).reduce((sum, article) => sum + article.views, 0)

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900'
    }`}>
      {/* Animated background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-blue-600' : 'bg-blue-400'
        }`} style={{ animation: 'float 20s ease-in-out infinite' }}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-indigo-600' : 'bg-indigo-400'
        }`} style={{ animation: 'float 25s ease-in-out infinite reverse' }}></div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        darkMode 
          ? 'bg-slate-900/80 border-slate-800 shadow-lg shadow-black/20' 
          : 'bg-white/80 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => setSelectedArticle('home')}
              className="flex items-center gap-3 group"
            >
              <div className="text-4xl transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                📚
              </div>
              <div>
                <h1 className={`text-2xl font-bold bg-gradient-to-r ${
                  darkMode 
                    ? 'from-blue-400 via-cyan-400 to-indigo-400' 
                    : 'from-blue-600 to-indigo-600'
                } bg-clip-text text-transparent drop-shadow-lg`}>
                  WikiNITT
                </h1>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Complete NIT Trichy Encyclopedia
                </p>
              </div>
            </button>

            {/* Search and Controls */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className={`p-3 rounded-xl transition-all transform hover:scale-110 ${
                    darkMode 
                      ? 'hover:bg-slate-800 text-slate-300 hover:text-blue-400' 
                      : 'hover:bg-slate-100'
                  }`}
                >
                  🔍
                </button>
                
                {showSearch && (
                  <div className={`absolute right-0 mt-2 w-96 rounded-2xl shadow-2xl border overflow-hidden backdrop-blur-xl ${
                    darkMode 
                      ? 'bg-slate-800/95 border-slate-700 shadow-black/40' 
                      : 'bg-white border-slate-200'
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
                                darkMode 
                                  ? 'hover:bg-slate-700/50 border-b border-slate-700/50' 
                                  : 'hover:bg-slate-50 border-b border-slate-100'
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
                            No articles found for "{searchQuery}"
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-xl transition-all transform hover:scale-110 ${
                  darkMode 
                    ? 'hover:bg-slate-800 text-yellow-400' 
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {selectedArticle === 'home' ? (
          // Homepage
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6 py-16">
              <div className="inline-block">
                <h2 className={`text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r ${
                  darkMode 
                    ? 'from-blue-400 via-cyan-400 to-indigo-400' 
                    : 'from-blue-600 via-indigo-600 to-purple-600'
                } bg-clip-text text-transparent drop-shadow-2xl`}>
                  Welcome to WikiNITT
                </h2>
                <div className={`h-1.5 bg-gradient-to-r ${
                  darkMode 
                    ? 'from-blue-500 via-cyan-500 to-indigo-500 shadow-lg shadow-blue-500/50' 
                    : 'from-blue-600 to-indigo-600'
                } rounded-full`}></div>
              </div>
              <p className={`text-xl max-w-3xl mx-auto ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Your comprehensive encyclopedia for National Institute of Technology, Tiruchirappalli - explore hostels, departments, campus facilities, events, clubs and everything about NIT Trichy
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '📖', label: 'Articles', value: totalArticles },
                { icon: '👥', label: 'Contributors', value: totalContributors },
                { icon: '👀', label: 'Total Views', value: `${(totalViews / 1000).toFixed(1)}K` },
                { icon: '🔄', label: 'Last Updated', value: 'Today' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all hover:scale-105 hover:shadow-2xl backdrop-blur-sm ${
                    darkMode 
                      ? 'bg-slate-800/50 border-slate-700/50 shadow-lg shadow-black/20 hover:bg-slate-800/70 hover:border-blue-500/50' 
                      : 'bg-white/80 border-slate-200 hover:border-blue-300'
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="text-4xl mb-3 filter drop-shadow-lg">{stat.icon}</div>
                  <div className={`text-3xl font-bold mb-1 bg-gradient-to-r ${
                    darkMode 
                      ? 'from-blue-400 to-cyan-400' 
                      : 'from-blue-600 to-indigo-600'
                  } bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Category Filter */}
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Browse by Category
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                      activeCategory === cat
                        ? darkMode
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/50'
                          : 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : darkMode
                          ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700/50'
                          : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    {cat === 'all' ? '🌟 All Articles' : `${cat} (${Object.values(articles).filter(a => a.category === cat).length})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 flex items-center justify-between ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <span>
                  {activeCategory === 'all' ? 'All Articles' : activeCategory}
                  <span className={`ml-3 text-lg font-normal ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    ({getFilteredArticles().length} articles)
                  </span>
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredArticles().map(([key, article]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedArticle(key)}
                    className={`p-6 rounded-2xl border text-left transition-all hover:scale-105 hover:shadow-2xl group backdrop-blur-sm ${
                      darkMode 
                        ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 hover:border-blue-500/50 shadow-lg shadow-black/20' 
                        : 'bg-white/80 border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div className="text-5xl transform transition-transform group-hover:scale-125 group-hover:rotate-12 filter drop-shadow-lg">
                          {article.image}
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          darkMode 
                            ? 'bg-slate-700/50 text-slate-400' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {article.category}
                        </span>
                      </div>
                      <div>
                        <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {article.title}
                        </h4>
                        <p className={`text-sm mb-3 line-clamp-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                          {article.content.intro}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {article.content.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                darkMode 
                                  ? 'bg-slate-700/50 text-slate-300 border border-slate-600/50' 
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className={`flex items-center gap-4 text-xs ${
                          darkMode ? 'text-slate-500' : 'text-slate-500'
                        }`}>
                          <span>👀 {article.views}</span>
                          <span>👥 {article.contributors}</span>
                          <span>📅 {article.lastEdited}</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Article Header */}
              <div>
                <button
                  onClick={() => setSelectedArticle('home')}
                  className={`mb-4 flex items-center gap-2 text-sm transition-all hover:gap-3 ${
                    darkMode 
                      ? 'text-blue-400 hover:text-blue-300' 
                      : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  ← Back to home
                </button>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl filter drop-shadow-2xl">{currentArticle.image}</span>
                  <div className="flex-1">
                    <h1 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {currentArticle.title}
                    </h1>
                    <div className={`flex flex-wrap items-center gap-4 text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      <span>📁 {currentArticle.category}</span>
                      <span>👀 {currentArticle.views} views</span>
                      <span>✏️ {currentArticle.contributors} contributors</span>
                      <span>📅 {currentArticle.lastEdited}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentArticle.content.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode 
                          ? 'bg-slate-800/50 text-slate-300 border border-slate-700/50' 
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <div className={`p-8 rounded-2xl border backdrop-blur-sm ${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700/50 shadow-xl shadow-black/20' 
                  : 'bg-white/80 border-slate-200'
              }`}>
                <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {currentArticle.content.intro}
                </p>

                {currentArticle.content.sections.map((section, idx) => (
                  <div key={idx} className="mb-8 last:mb-0">
                    <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {section.title}
                    </h2>
                    <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <div className={`p-6 rounded-2xl border backdrop-blur-sm sticky top-24 ${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700/50 shadow-xl shadow-black/20' 
                  : 'bg-white/80 border-slate-200'
              }`}>
                <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  📊 Quick Facts
                </h3>
                <div className="space-y-3">
                  {Object.entries(currentArticle.content.quickFacts).map(([key, value], idx) => (
                    <div key={idx} className={`pb-3 border-b ${
                      darkMode ? 'border-slate-700/50' : 'border-slate-200'
                    } last:border-0`}>
                      <div className={`text-xs font-medium mb-1 uppercase tracking-wide ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {key}
                      </div>
                      <div className={`font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className={`p-6 rounded-2xl border backdrop-blur-sm ${
                darkMode 
                  ? 'bg-slate-800/50 border-slate-700/50 shadow-xl shadow-black/20' 
                  : 'bg-white/80 border-slate-200'
              }`}>
                <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  🔗 Related Articles
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
                        className={`w-full p-3 rounded-lg text-left transition-all ${
                          darkMode 
                            ? 'hover:bg-slate-700/50 border border-transparent hover:border-slate-600/50' 
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{article.image}</span>
                          <div className="flex-1 min-w-0">
                            <div className={`font-medium text-sm truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
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
      <footer className={`mt-16 border-t py-8 backdrop-blur-sm relative z-10 ${
        darkMode 
          ? 'bg-slate-900/50 border-slate-800' 
          : 'bg-white/50 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-2">
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Made with ❤️ for NIT Trichy Community
            </p>
            <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              WikiNITT © 2024 • {totalArticles} Articles • {totalContributors} Contributors • {(totalViews / 1000).toFixed(1)}K+ Views
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
