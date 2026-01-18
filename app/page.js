"use client";

"use client";

import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, BookmarkPlus, BookmarkCheck, Menu, X, TrendingUp, Users, GraduationCap, Home } from 'lucide-react';

const WikiNITT = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  const articles = {
    departments: [
      {
        id: 'cse',
        title: 'Computer Science and Engineering',
        category: 'Department',
        content: `The Department of Computer Science and Engineering at NIT Trichy stands as one of India's premier institutions for computer science education and research. Established in 1984, the department has consistently maintained its position among the top-ranked CSE departments in the country.

Academic Excellence and Curriculum: The department offers comprehensive programs including B.Tech, M.Tech, and Ph.D. in Computer Science and Engineering. The curriculum is meticulously designed to blend theoretical foundations with practical applications, covering core areas such as algorithms, data structures, artificial intelligence, machine learning, computer networks, database management systems, and software engineering.

State-of-the-Art Infrastructure: Students and faculty have access to world-class computing facilities including high-performance computing clusters, dedicated research labs for artificial intelligence, cybersecurity, data analytics, and cloud computing. The department maintains over 15 specialized laboratories equipped with the latest hardware and software tools.

Research and Innovation: The department is recognized as a hub for cutting-edge research in areas including deep learning, natural language processing, computer vision, blockchain technology, Internet of Things, and quantum computing. Faculty members regularly publish in top-tier international conferences and journals, with numerous patents to their credit.

Industry Collaborations: Strong industry partnerships with tech giants like Google, Microsoft, Amazon, and leading Indian IT companies provide students with excellent internship opportunities, live projects, and placement prospects. The department regularly organizes hackathons, coding competitions, and tech talks by industry experts.

Placement Record: CSE graduates consistently achieve outstanding placement records with average packages exceeding 20 LPA and top packages reaching beyond 50 LPA. Alumni hold prestigious positions in major technology companies worldwide and several have founded successful startups.`,
        stats: { students: 480, faculty: 45, labs: 15 }
      },
      {
        id: 'ece',
        title: 'Electronics and Communication Engineering',
        category: 'Department',
        content: `The Department of Electronics and Communication Engineering at NIT Trichy is renowned for its excellence in education, research, and innovation in the field of electronics and communication technologies. Since its inception in 1965, the department has been at the forefront of technological advancement.

Academic Programs: The department offers B.Tech, M.Tech (with specializations in VLSI Design, Communication Systems, Signal Processing, and Embedded Systems), and Ph.D. programs. The curriculum integrates classical electronics with modern communication technologies, covering analog and digital electronics, signal processing, wireless communications, VLSI design, and embedded systems.

Research Focus Areas: Faculty members and research scholars actively engage in pioneering research in areas such as 5G and beyond wireless technologies, antenna design, microwave engineering, semiconductor devices, optical communications, image processing, and biomedical signal processing. The department has established centers of excellence in collaboration with industry partners.

Laboratory Facilities: The department houses over 20 well-equipped laboratories including RF and microwave lab, VLSI design lab, communication systems lab, digital signal processing lab, embedded systems lab, and optical fiber communications lab. These facilities support both undergraduate teaching and advanced research work.

Industry Interface: Strong collaborations with companies like Qualcomm, Texas Instruments, Intel, Broadcom, and Indian Space Research Organisation provide students with exposure to real-world problems and cutting-edge technologies. Regular workshops, seminars, and internship programs enhance practical learning.

Student Achievements: ECE students have won numerous national and international competitions in areas like embedded systems design, communication protocols, and signal processing. Many alumni hold key positions in semiconductor companies, telecommunications firms, and research organizations globally.`,
        stats: { students: 420, faculty: 38, labs: 20 }
      },
      {
        id: 'eee',
        title: 'Electrical and Electronics Engineering',
        category: 'Department',
        content: `The Department of Electrical and Electronics Engineering at NIT Trichy has been a cornerstone of excellence in electrical engineering education since 1964. The department is recognized for its comprehensive curriculum, advanced research facilities, and strong industry connections.

Comprehensive Curriculum: The department offers B.Tech, M.Tech (specializations in Power Systems, Power Electronics and Drives, Control and Instrumentation), and Ph.D. programs. The curriculum covers power systems, power electronics, electrical machines, control systems, instrumentation, renewable energy systems, and smart grid technologies.

Research and Development: The department is actively involved in research areas including renewable energy integration, electric vehicles, smart grids, power quality improvement, advanced control systems, and energy management. Faculty members lead several government-funded and industry-sponsored research projects.

Laboratory Infrastructure: Students have access to over 18 specialized laboratories including high voltage lab, power systems lab, electrical machines lab, power electronics lab, control systems lab, and renewable energy lab. The department also has a 100 kW solar power plant for research and demonstration purposes.

Industry Collaboration: Partnerships with leading power sector companies like Siemens, ABB, Schneider Electric, BHEL, and various power grid corporations provide students with internships, projects, and placement opportunities. The department regularly hosts expert lectures and industrial visits.

Career Prospects: EEE graduates are highly sought after in power sector companies, core engineering firms, PSUs, and consulting organizations. Many alumni work in renewable energy companies, electric vehicle manufacturers, and have also successfully transitioned to roles in IT and analytics sectors.`,
        stats: { students: 360, faculty: 32, labs: 18 }
      },
      {
        id: 'mech',
        title: 'Mechanical Engineering',
        category: 'Department',
        content: `The Department of Mechanical Engineering at NIT Trichy is one of the oldest and most prestigious mechanical engineering departments in India, established in 1964. It has consistently maintained high academic standards and produced exceptional engineers.

Academic Offerings: The department provides B.Tech, M.Tech (specializations in Thermal Engineering, Design Engineering, Manufacturing Engineering, and Industrial Engineering), and Ph.D. programs. The curriculum encompasses thermodynamics, fluid mechanics, heat transfer, manufacturing processes, machine design, robotics, and computational mechanics.

Research Excellence: Faculty members conduct cutting-edge research in areas such as additive manufacturing, computational fluid dynamics, renewable energy systems, tribology, robotics and automation, composite materials, and nanotechnology. The department has established several sponsored research projects with government agencies and industries.

World-Class Facilities: The department boasts over 25 laboratories including CAD/CAM lab, CNC machines workshop, robotics lab, thermal engineering lab, fluid mechanics lab, metallurgy lab, and engine testing lab. Advanced equipment like 3D printers, CNC machines, and simulation software are available for student projects.

Industrial Linkages: Strong ties with companies like Tata Motors, Mahindra, Ashok Leyland, L&T, and various manufacturing firms provide excellent opportunities for internships, industrial training, and placements. The department regularly organizes industrial visits and expert sessions.

Student Projects and Competitions: Mechanical engineering students actively participate in national and international competitions including SAE events, robotics competitions, and design challenges. Student teams have won accolades in Formula Student competitions and various innovation contests.`,
        stats: { students: 400, faculty: 35, labs: 25 }
      },
      {
        id: 'civil',
        title: 'Civil Engineering',
        category: 'Department',
        content: `The Department of Civil Engineering at NIT Trichy has been shaping infrastructure professionals since 1964. Known for its rigorous academic programs and extensive research activities, the department plays a crucial role in addressing India's infrastructure development needs.

Academic Programs: The department offers B.Tech, M.Tech (specializations in Structural Engineering, Geotechnical Engineering, Transportation Engineering, Water Resources Engineering, and Environmental Engineering), and Ph.D. programs. The curriculum covers structural analysis and design, geotechnical engineering, transportation engineering, water resources, environmental engineering, and construction management.

Research Initiatives: Faculty members are engaged in research on sustainable construction materials, earthquake-resistant structures, smart cities, water resource management, transportation planning, environmental remediation, and climate change adaptation. Several research projects are funded by DST, MHRD, and international agencies.

Infrastructure and Labs: The department houses over 20 laboratories including concrete technology lab, soil mechanics lab, surveying lab, hydraulics lab, environmental engineering lab, transportation engineering lab, and structural engineering lab. Advanced testing equipment and computational facilities support research and teaching.

Industry Partnerships: Collaborations with construction companies, consulting firms, government agencies like National Highways Authority of India, and Public Works Departments provide practical exposure through internships, projects, and placements. Regular workshops on latest construction technologies are organized.

Societal Impact: Civil engineering students and faculty contribute to society through projects related to rural infrastructure development, water conservation, sustainable urban planning, and disaster management. Many alumni hold leadership positions in infrastructure development organizations worldwide.`,
        stats: { students: 340, faculty: 30, labs: 20 }
      },
      {
        id: 'production',
        title: 'Production Engineering',
        category: 'Department',
        content: `The Department of Production Engineering at NIT Trichy was established in 1968 and has since been a leader in manufacturing technology education. The department uniquely combines manufacturing processes with modern automation and industrial management.

Program Structure: The department offers B.Tech, M.Tech (specializations in Computer Integrated Manufacturing, Industrial Safety Engineering, and Production Management), and Ph.D. programs. The curriculum integrates manufacturing technology, operations research, industrial engineering, quality control, automation, and supply chain management.

Research Focus: Active research areas include advanced manufacturing processes, automation and robotics, lean manufacturing, quality management, operations research, supply chain optimization, and ergonomics. Faculty members collaborate with industries on projects related to process improvement and productivity enhancement.

Modern Facilities: The department is equipped with over 22 laboratories including CNC machining lab, metrology and quality control lab, CAD/CAM lab, industrial automation lab, operations research lab, and ergonomics lab. Industry-standard software for simulation and optimization is available.

Industry Engagement: Strong industry connections with manufacturing giants, automotive companies, and consulting firms provide students with internships, live projects, and excellent placement opportunities. The department organizes industrial visits, guest lectures, and workshops on contemporary manufacturing practices.

Unique Positioning: Production engineering graduates possess a unique skill set combining technical manufacturing knowledge with management expertise, making them highly valued in manufacturing industries, consulting firms, operations management roles, and entrepreneurial ventures. Alumni successfully lead manufacturing operations in various sectors globally.`,
        stats: { students: 280, faculty: 25, labs: 22 }
      }
    ],
    hostels: [
      {
        id: 'agate',
        title: 'Agate Hostel',
        category: 'Hostel',
        content: `Agate Hostel stands as one of the premier residential facilities at NIT Trichy, providing a comfortable and conducive living environment for undergraduate students. Located in the heart of the campus, Agate combines modern amenities with a vibrant community atmosphere.

Infrastructure and Facilities: The hostel features spacious double and triple occupancy rooms equipped with study tables, chairs, wardrobes, and comfortable beds. Each floor has common washrooms maintained with high standards of cleanliness. The hostel provides 24/7 electricity with backup power supply, ensuring uninterrupted living conditions.

Internet and Connectivity: High-speed WiFi connectivity is available throughout the hostel with dedicated bandwidth for academic purposes. Students can access online resources, attend virtual classes, and stay connected with family and friends. Computer labs within the hostel complex provide additional computing facilities.

Recreational Amenities: Agate boasts excellent recreational facilities including a well-equipped games room with table tennis, carrom, and chess. The hostel has a common room with television and entertainment facilities. Outdoor sports facilities nearby allow students to engage in physical activities.

Dining Facilities: The hostel mess serves nutritious vegetarian and non-vegetarian meals with a varied menu rotated weekly. Special meals are prepared during festivals and celebrations. The mess committee, consisting of student representatives, ensures food quality and addresses student concerns.

Community and Culture: Agate fosters a strong sense of community through regular cultural events, sports competitions, and celebrations. The hostel actively participates in inter-hostel competitions including sports tournaments, cultural fests, and technical events. Senior-junior bonding activities help new students settle comfortably.

Administration and Safety: A warden and assistant wardens oversee hostel operations ensuring discipline and student welfare. 24/7 security personnel maintain safety and visitor management protocols. Medical emergencies are promptly handled with health center access and ambulance facilities.`,
        stats: { capacity: 320, floors: 4, established: 2008 }
      },
      {
        id: 'coral',
        title: 'Coral Hostel',
        category: 'Hostel',
        content: `Coral Hostel is one of NIT Trichy's distinguished residential facilities, known for its excellent infrastructure and vibrant student community. The hostel provides a perfect blend of academic support and recreational opportunities.

Accommodation Details: Coral offers well-maintained double and triple sharing rooms with individual study spaces for each resident. Rooms are adequately ventilated with windows ensuring natural light and fresh air. Each student is provided with a bed, mattress, study table, chair, and personal storage space.

Utilities and Services: The hostel provides round-the-clock water supply with both regular and hot water facilities. Laundry services are available within the hostel premises. Common areas include reading rooms, study spaces, and recreational zones. Housekeeping staff ensures cleanliness of common areas daily.

Internet and Technology: Robust WiFi infrastructure covers all hostel areas with high-bandwidth internet access. LAN connectivity is available in rooms for students preferring wired connections. The hostel maintains IT support to address connectivity issues promptly.

Sports and Recreation: Dedicated indoor games facilities include table tennis tables, carrom boards, and chess sets. The hostel has access to nearby outdoor sports facilities including basketball courts, badminton courts, and volleyball courts. A gymnasium equipped with basic fitness equipment is available.

Mess and Nutrition: The hostel mess operates on a full-board basis serving breakfast, lunch, snacks, and dinner. Menu planning considers nutritional balance and student preferences. Special dietary requirements are accommodated with prior intimation. Student mess representatives regularly review and improve mess services.

Student Life and Events: Coral maintains an active calendar of events including cultural nights, birthday celebrations, festival celebrations, and sports tournaments. The hostel encourages student-led initiatives and clubs focusing on various interests. Inter-hostel competitions foster healthy competition and bonding.

Safety and Governance: Experienced wardens and support staff ensure smooth hostel operations. Security measures include CCTV surveillance, visitor logs, and restricted entry timings. Regular meetings between hostel administration and students address concerns and implement improvements.`,
        stats: { capacity: 360, floors: 4, established: 2010 }
      },
      {
        id: 'diamond',
        title: 'Diamond Hostel',
        category: 'Hostel',
        content: `Diamond Hostel represents excellence in student accommodation at NIT Trichy. Known for its modern facilities and strong community bonds, Diamond provides an ideal environment for academic pursuit and personal growth.

Living Spaces: Diamond features well-designed rooms with optimal space utilization. Double and triple occupancy options are available with each student having dedicated furniture including study desk, chair, bed, and storage. Rooms are designed to provide privacy while encouraging social interaction.

Infrastructure: The hostel building includes multiple floors connected by staircases with ramps for accessibility. Common washrooms on each floor are regularly cleaned and maintained. Water purifiers installed on every floor ensure safe drinking water availability 24/7.

Academic Support: Dedicated study rooms provide quiet spaces for focused learning during exams and assignments. Group study areas facilitate collaborative learning and project work. The hostel maintains a small library with academic resources and magazines.

Technology Infrastructure: High-speed internet connectivity supports online learning, research, and entertainment. Each floor has designated network points ensuring comprehensive coverage. Technical support is available to resolve connectivity and device issues.

Food and Dining: The mess facility serves diverse cuisine with rotating menus to prevent monotony. Student feedback is actively incorporated into menu planning. Special meals during festivals and events add to the dining experience. Hygienic food preparation and serving standards are strictly maintained.

Recreational Facilities: Indoor games room equipped with table tennis, carrom, and other games provides stress relief. Common television room offers entertainment options. The hostel encourages formation of clubs for photography, music, and other interests.

Hostel Culture: Diamond maintains rich traditions including fresher welcomes, farewell celebrations, and annual hostel days. Inter-hostel sports and cultural competitions bring students together. Senior-junior interaction programs ease the transition for new students.

Management and Security: Dedicated warden and administrative staff ensure smooth functioning. 24/7 security presence maintains safety. Emergency protocols are in place with quick access to medical facilities. Regular inspections ensure maintenance standards.`,
        stats: { capacity: 400, floors: 5, established: 2012 }
      },
      {
        id: 'jade',
        title: 'Jade Hostel',
        category: 'Hostel',
        content: `Jade Hostel stands as a testament to NIT Trichy's commitment to providing quality accommodation. The hostel combines comfortable living spaces with excellent amenities, creating a home away from home for students.

Room Configuration: Jade offers spacious rooms with double and triple sharing arrangements. Each room includes individual study areas with proper lighting to support late-night study sessions. Storage facilities include wardrobes and under-bed storage spaces. Rooms are designed for comfort and functionality.

Basic Amenities: 24/7 electricity with backup ensures uninterrupted power supply. Regular and hot water availability throughout the day. Well-maintained common washrooms with adequate facilities. Housekeeping services maintain cleanliness in common areas and corridors.

Digital Infrastructure: Comprehensive WiFi coverage across all hostel areas enables seamless online access. High bandwidth allocation supports video streaming, online classes, and research work. IT helpdesk addresses technical issues promptly. LAN ports in rooms provide stable wired connections.

Sports and Fitness: Access to nearby sports facilities including cricket ground, football field, and tennis courts. Indoor games room with table tennis, carrom, and board games. Morning and evening access to fitness equipment. Hostel teams participate actively in inter-hostel sports competitions.

Dining Experience: The mess operates with strict hygiene standards serving fresh, nutritious meals. Weekly menu includes variety catering to different taste preferences. Student mess committee reviews quality and addresses suggestions. Special arrangements during festivals and celebrations.

Community Building: Regular cultural programs and celebrations foster community spirit. Hostel organizes its annual fest with various competitions and events. Birthday celebrations and festival gatherings strengthen bonds among residents. Mentorship programs help juniors adjust to hostel life.

Administrative Structure: Warden and assistant wardens provide guidance and oversight. Student representatives communicate concerns to administration. Regular hostel meetings discuss improvements and policies. Transparent grievance redressal mechanism ensures student voices are heard.

Safety Measures: Round-the-clock security personnel monitor entry and exit. CCTV cameras installed at strategic locations. Strict visitor policies maintain safety. Emergency contact numbers displayed prominently. First aid facilities available within hostel premises.`,
        stats: { capacity: 340, floors: 4, established: 2011 }
      },
      {
        id: 'opal',
        title: 'Opal Hostel',
        category: 'Hostel',
        content: `Opal Hostel represents one of the newer additions to NIT Trichy's residential infrastructure. With modern design and contemporary facilities, Opal provides an enhanced living experience for undergraduate students.

Modern Architecture: Opal features contemporary architectural design with well-ventilated spaces and natural lighting. The building incorporates sustainable design elements including rainwater harvesting and solar panels. Spacious corridors and common areas facilitate social interaction.

Room Features: Rooms are designed with student comfort in mind, offering adequate space for study and rest. Each student gets a personal study area with ergonomic furniture. Storage solutions include built-in wardrobes and shelving. Windows ensure cross-ventilation and natural light.

Essential Services: Uninterrupted power supply with generator backup for essential services. Water supply maintained throughout the day with separate hot water timings. Laundry service operates on specific days with reasonable charges. Cleaning staff ensures daily maintenance of common facilities.

Connectivity: State-of-the-art WiFi infrastructure provides high-speed internet access. Multiple access points ensure consistent coverage across all floors. Dedicated bandwidth for academic purposes prevents congestion during peak hours. Network monitoring ensures optimal performance.

Food Services: Modern mess facility with hygienic cooking and serving arrangements. Diverse menu rotates weekly incorporating student feedback. Quality control measures ensure food safety standards. Special dietary provisions for medical or religious requirements.

Recreation and Wellness: Well-equipped games room with indoor sports facilities. Access to outdoor sports grounds for cricket, football, and athletics. Designated quiet zones for students preferring peaceful environment. Common room with entertainment facilities for relaxation.

Hostel Activities: Active cultural calendar with regular events and celebrations. Student-run clubs for various interests including music, dance, and literature. Inter-hostel competitions in sports, debates, and cultural activities. Annual hostel day showcasing talents and achievements.

Governance and Safety: Experienced wardens ensure discipline and student welfare. Student council represents hostel interests in administrative discussions. Comprehensive security system including CCTV and guards. Emergency response protocols with medical support access. Regular safety drills and awareness programs.`,
        stats: { capacity: 380, floors: 5, established: 2015 }
      },
      {
        id: 'ruby',
        title: 'Ruby Hostel',
        category: 'Hostel',
        content: `Ruby Hostel holds a special place in NIT Trichy's residential ecosystem, known for its vibrant community and excellent facilities. The hostel has built a reputation for fostering both academic excellence and extracurricular participation.

Accommodation Standards: Ruby provides well-maintained double and triple occupancy rooms with individual study spaces. Furniture includes study table with chair, bed with mattress, wardrobe, and storage shelves. Rooms are regularly maintained with pest control and repairs done promptly.

Infrastructure Facilities: Multiple floors accessible via staircases with proper lighting and safety measures. Common washrooms equipped with adequate facilities and maintained hygienically. Water purification systems on each floor ensure safe drinking water. Notice boards for important announcements and communications.

Internet Connectivity: Robust WiFi network covering entire hostel premises with reliable speeds. Separate networks for academic and general use ensuring priority for educational activities. Technical support team resolves connectivity issues. Regular network upgrades maintain service quality.

Sports and Games: Dedicated indoor games room with table tennis tables and carrom boards. Access to outdoor facilities including basketball court, badminton courts, and volleyball court. Hostel teams actively participate in inter-hostel tournaments. Regular coaching sessions organized for interested students.

Mess Operations: Well-managed mess serving three meals daily with evening snacks. Menu planning considers nutritional balance and seasonal availability. Student committee oversees mess operations and quality. Feedback mechanism allows continuous improvement. Festival special meals add variety.

Cultural Life: Ruby maintains rich cultural traditions with regular celebrations and events. Hostel day is a major annual event featuring competitions and performances. Music nights, movie screenings, and talent shows provide entertainment. Student clubs organize workshops and activities.

Student Welfare: Dedicated warden team addresses academic and personal concerns. Student representatives form bridge between residents and administration. Mentorship program pairs seniors with juniors. Counseling support available for students facing difficulties.

Security Infrastructure: 24/7 security presence at hostel entrance maintaining entry logs. CCTV surveillance at common areas ensures safety. Restricted visiting hours and strict visitor management. Emergency contact numbers readily available. Medical room for first aid and basic healthcare.`,
        stats: { capacity: 360, floors: 4, established: 2009 }
      }
    ],
    studentLife: [
      {
        id: 'festember',
        title: 'Festember - Cultural Festival',
        category: 'Student Life',
        content: `Festember stands as South India's largest cultural festival, organized annually by the students of NIT Trichy. Since its inception in 1975, Festember has grown into a spectacular four-day celebration of arts, culture, and creativity, attracting over 50,000 participants from across India.

Festival Structure and Events: Festember features over 60 events spanning multiple categories including music, dance, drama, literary arts, fine arts, fashion, and informal events. The festival showcases both competitive events and professional performances. Major attractions include pro-shows featuring renowned artists from Bollywood and the music industry, comedy nights, EDM nights, and cultural performances.

Music and Dance: The music vertical includes events like band wars, classical music competitions, western vocal, Indian vocal, and beatboxing contests. Dance events feature various styles including classical, western, folk, and contemporary dance forms. Professional workshops by industry experts help participants hone their skills.

Literary and Fine Arts: Literary events include debates, extempore, creative writing, poetry slam, and quiz competitions. Fine arts section covers painting, sketching, photography, installations, and digital art. These events provide platforms for artistic expression and intellectual discourse.

Fashion and Dramatics: The fashion show is one of Festember's major attractions featuring creative themes and professional choreography. Dramatics events include street plays, stage plays, mime, and stand-up comedy, allowing students to showcase theatrical talents.

Workshops and Guest Lectures: Festember organizes workshops conducted by industry professionals in various domains including music production, photography, filmmaking, and digital arts. Guest lectures by eminent personalities provide insights and inspiration to participants.

Footfall and Participation: The festival attracts participants from over 500 colleges across India, with registrations exceeding 25,000 for competitive events. The pro-shows and main events witness footfall of over 50,000 people. Online events extend participation globally.

Organization and Management: Student volunteers numbering over 1,000 work year-round to organize Festember. Various departments including sponsorship, marketing, hospitality, logistics, events, security, and publicity collaborate to ensure smooth execution. The festival operates on a substantial budget raised through sponsorships and partnerships.

Impact and Legacy: Festember has launched careers of many artists and performers. Alumni of Festember's organizing team hold leadership positions in various industries. The festival promotes cultural exchange, provides networking opportunities, and creates lasting memories for all participants.`,
        stats: { participants: 25000, events: 60, duration: '4 days' }
      },
      {
        id: 'pragyan',
        title: 'Pragyan - Technical Festival',
        category: 'Student Life',
        content: `Pragyan represents NIT Trichy's flagship international techno-managerial festival, celebrated annually as one of India's largest student-run technical festivals. Since 1999, Pragyan has been a platform for innovation, technology, and learning, attracting brilliant minds from across the globe.

Technical Competitions: Pragyan hosts over 50 technical events covering diverse domains including robotics, coding, electronics, mechanical engineering, chemical engineering, biotechnology, and management. Signature events include autonomous robotics competitions, algorithm challenges, hackathons, bridge building contests, and circuit design challenges.

Robotics and Automation: The robotics vertical features flagship events like autonomous bot races, line following robots, robowars, and drone competitions. These events challenge participants to apply engineering principles to build innovative solutions. State-of-the-art arenas and judging criteria ensure fair competition.

Programming and AI: Coding events include 24-hour hackathons, competitive programming contests, algorithm design challenges, and machine learning competitions. AI-focused events encourage participants to develop intelligent systems solving real-world problems. Online coding competitions extend global reach.

Engineering Challenges: Mechanical, civil, electrical, and chemical engineering competitions test practical application of theoretical knowledge. Events include bridge construction, hydraulic robot design, circuit debugging, chemical process design, and sustainable technology challenges.

Workshops and Seminars: Pragyan organizes extensive workshops on emerging technologies including blockchain, Internet of Things, machine learning, robotics, augmented reality, and renewable energy. Industry experts and academic researchers conduct these sessions, providing hands-on experience and knowledge transfer.

Guest Lectures and Summits: Eminent personalities from academia, industry, and research organizations deliver keynote addresses. Panel discussions on technology trends, entrepreneurship, and innovation bring together experts for intellectual discourse. Past speakers include Nobel laureates, tech CEOs, and renowned scientists.

Online Participation: Pragyan's online platform enables global participation through virtual events, webinars, and competitions. Participants from various countries engage in coding contests, quizzes, and design challenges. This global reach enhances cultural and intellectual exchange.

Exhibitions and Displays: Technical exhibitions showcase innovative projects by students and startups. Companies display cutting-edge products and technologies. Research projects from various departments demonstrate practical applications of academic work.

Scale and Organization: With participation exceeding 40,000 from over 600 institutions worldwide, Pragyan operates on a massive scale. Student volunteers across 15+ departments coordinate logistics, sponsorships, marketing, events, security, hospitality, and technical infrastructure. The festival's budget exceeds several crores, raised through sponsorships and partnerships.

Educational Impact: Pragyan serves as a learning platform where students gain exposure to latest technologies, industry practices, and research trends. Networking opportunities with professionals and peers create lasting connections. Many participants credit Pragyan experiences as career-defining moments.`,
        stats: { participants: 40000, events: 50, reach: 'International' }
      },
      {
        id: 'spider',
        title: 'Spider - Technical Club',
        category: 'Student Life',
        content: `Spider stands as NIT Trichy's premier student-run technical club, dedicated to fostering innovation, research, and development in software and hardware domains. Established in 2010, Spider has grown into a vibrant community of tech enthusiasts working on cutting-edge projects.

Core Domains: Spider operates across multiple verticals including web development, app development, machine learning, artificial intelligence, cybersecurity, blockchain, Internet of Things, and competitive programming. Each domain has dedicated teams working on projects, conducting workshops, and organizing competitions.

Web and App Development: The web development team creates responsive websites and web applications using modern frameworks like React, Angular, Vue.js, Node.js, and Django. App development team builds mobile applications for Android and iOS using Flutter, React Native, and native development tools. Projects range from campus utilities to commercial applications.

Artificial Intelligence and ML: The AI/ML team works on projects involving deep learning, natural language processing, computer vision, and data analytics. Members develop intelligent systems for various applications including chatbots, image recognition, predictive analytics, and recommendation systems. Regular paper discussions keep the team updated with latest research.

Blockchain and Security: Blockchain team explores decentralized applications, smart contracts, and cryptocurrency technologies. Cybersecurity team focuses on ethical hacking, cryptography, network security, and vulnerability assessment. Both teams participate in CTF competitions and hackathons.

Projects and Innovations: Spider has developed numerous applications serving the NIT Trichy community including course management systems, event management platforms, hostel management apps, and department websites. External projects include collaborations with startups and industry partners on commercial applications.

Learning and Development: Spider conducts regular workshops, bootcamps, and technical sessions on various technologies. Project-based learning approach helps members gain practical experience. Mentorship programs pair experienced members with juniors, facilitating knowledge transfer. Weekly meetings feature code reviews, discussions, and collaborative problem-solving.

Competitions and Hackathons: Spider members actively participate in national and international hackathons, coding competitions, and technical events. The club also organizes its own hackathons and coding contests, attracting participants from colleges across India. Success in competitions has brought recognition to both Spider and NIT Trichy.

Industry Connections: Spider maintains connections with tech companies and startups, facilitating internships and placements for members. Guest sessions by industry professionals provide insights into current technological trends and career opportunities. Collaborative projects with companies offer real-world development experience.

Community Impact: Spider contributes to the campus through technical solutions addressing student needs. Open-source contributions and technical blog posts share knowledge with wider community. Alumni network includes successful software engineers, researchers, and entrepreneurs working globally.

Recruitment and Culture: Spider conducts rigorous recruitment drives selecting passionate and skilled students. The club culture emphasizes learning, collaboration, and innovation. Regular social events and team-building activities strengthen bonds among members. Senior-junior mentorship ensures smooth knowledge transition.`,
        stats: { members: 150, projects: 200, domains: 8 }
      },
      {
        id: 'deltaforce',
        title: 'Delta Force - Robotics Club',
        category: 'Student Life',
        content: `Delta Force represents NIT Trichy's premier robotics and automation club, bringing together students passionate about building intelligent machines and systems. Since its establishment, Delta Force has been at the forefront of robotics innovation, competing nationally and developing cutting-edge projects.

Focus Areas: The club works across multiple robotics domains including autonomous navigation, swarm robotics, industrial automation, humanoid robotics, drone technology, computer vision for robotics, and mechatronics. Projects combine mechanical design, electronics, and programming to create functional robotic systems.

Autonomous Systems: Delta Force specializes in developing autonomous robots capable of navigation, obstacle avoidance, and task completion without human intervention. Projects include autonomous ground vehicles, maze-solving robots, line-following robots, and pathfinding algorithms. Computer vision integration enables sophisticated perception capabilities.

Aerial Robotics: The drone team designs and builds unmanned aerial vehicles for various applications including surveillance, photography, package delivery, and agricultural monitoring. Projects involve flight controller programming, stabilization algorithms, and autonomous flight capabilities.

Industrial Applications: Members work on industrial automation projects including robotic arms, automated assembly systems, material handling robots, and quality inspection systems. These projects provide practical understanding of industrial robotics and automation technologies used in manufacturing.

Competitions and Achievements: Delta Force participates in prestigious national robotics competitions including ABU Robocon, drone competitions, and various technical fest robotics events. The team has won multiple awards and recognitions for innovative designs and flaw
