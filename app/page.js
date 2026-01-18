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

Academic Excellence and Curriculum
The department offers comprehensive programs including B.Tech, M.Tech, and Ph.D. in Computer Science and Engineering. The curriculum is meticulously designed to blend theoretical foundations with practical applications, covering core areas such as algorithms, data structures, artificial intelligence, machine learning, computer networks, database management systems, and software engineering.

State-of-the-Art Infrastructure
Students and faculty have access to world-class computing facilities including high-performance computing clusters, dedicated research labs for artificial intelligence, cybersecurity, data analytics, and cloud computing. The department maintains over 15 specialized laboratories equipped with the latest hardware and software tools.

Research and Innovation
The department is recognized as a hub for cutting-edge research in areas including deep learning, natural language processing, computer vision, blockchain technology, Internet of Things, and quantum computing. Faculty members regularly publish in top-tier international conferences and journals, with numerous patents to their credit.

Industry Collaborations
Strong industry partnerships with tech giants like Google, Microsoft, Amazon, and leading Indian IT companies provide students with excellent internship opportunities, live projects, and placement prospects. The department regularly organizes hackathons, coding competitions, and tech talks by industry experts.

Placement Record
CSE graduates consistently achieve outstanding placement records with average packages exceeding 20 LPA and top packages reaching beyond 50 LPA. Alumni hold prestigious positions in major technology companies worldwide and several have founded successful startups.`,
        stats: { students: 480, faculty: 45, labs: 15 }
      },
      {
        id: 'ece',
        title: 'Electronics and Communication Engineering',
        category: 'Department',
        content: `The Department of Electronics and Communication Engineering at NIT Trichy is renowned for its excellence in education, research, and innovation in the field of electronics and communication technologies. Since its inception in 1965, the department has been at the forefront of technological advancement.

Academic Programs
The department offers B.Tech, M.Tech (with specializations in VLSI Design, Communication Systems, Signal Processing, and Embedded Systems), and Ph.D. programs. The curriculum integrates classical electronics with modern communication technologies, covering analog and digital electronics, signal processing, wireless communications, VLSI design, and embedded systems.

Research Focus Areas
Faculty members and research scholars actively engage in pioneering research in areas such as 5G and beyond wireless technologies, antenna design, microwave engineering, semiconductor devices, optical communications, image processing, and biomedical signal processing. The department has established centers of excellence in collaboration with industry partners.

Laboratory Facilities
The department houses over 20 well-equipped laboratories including RF and microwave lab, VLSI design lab, communication systems lab, digital signal processing lab, embedded systems lab, and optical fiber communications lab. These facilities support both undergraduate teaching and advanced research work.

Industry Interface
Strong collaborations with companies like Qualcomm, Texas Instruments, Intel, Broadcom, and Indian Space Research Organisation (ISRO) provide students with exposure to real-world problems and cutting-edge technologies. Regular workshops, seminars, and internship programs enhance practical learning.

Student Achievements
ECE students have won numerous national and international competitions in areas like embedded systems design, communication protocols, and signal processing. Many alumni hold key positions in semiconductor companies, telecommunications firms, and research organizations globally.`,
        stats: { students: 420, faculty: 38, labs: 20 }
      },
      {
        id: 'eee',
        title: 'Electrical and Electronics Engineering',
        category: 'Department',
        content: `The Department of Electrical and Electronics Engineering at NIT Trichy has been a cornerstone of excellence in electrical engineering education since 1964. The department is recognized for its comprehensive curriculum, advanced research facilities, and strong industry connections.

Comprehensive Curriculum
The department offers B.Tech, M.Tech (specializations in Power Systems, Power Electronics and Drives, Control and Instrumentation), and Ph.D. programs. The curriculum covers power systems, power electronics, electrical machines, control systems, instrumentation, renewable energy systems, and smart grid technologies.

Research and Development
The department is actively involved in research areas including renewable energy integration, electric vehicles, smart grids, power quality improvement, advanced control systems, and energy management. Faculty members lead several government-funded and industry-sponsored research projects.

Laboratory Infrastructure
Students have access to over 18 specialized laboratories including high voltage lab, power systems lab, electrical machines lab, power electronics lab, control systems lab, and renewable energy lab. The department also has a 100 kW solar power plant for research and demonstration purposes.

Industry Collaboration
Partnerships with leading power sector companies like Siemens, ABB, Schneider Electric, BHEL, and various power grid corporations provide students with internships, projects, and placement opportunities. The department regularly hosts expert lectures and industrial visits.

Career Prospects
EEE graduates are highly sought after in power sector companies, core engineering firms, PSUs, and consulting organizations. Many alumni work in renewable energy companies, electric vehicle manufacturers, and have also successfully transitioned to roles in IT and analytics sectors.`,
        stats: { students: 360, faculty: 32, labs: 18 }
      },
      {
        id: 'mech',
        title: 'Mechanical Engineering',
        category: 'Department',
        content: `The Department of Mechanical Engineering at NIT Trichy is one of the oldest and most prestigious mechanical engineering departments in India, established in 1964. It has consistently maintained high academic standards and produced exceptional engineers.

Academic Offerings
The department provides B.Tech, M.Tech (specializations in Thermal Engineering, Design Engineering, Manufacturing Engineering, and Industrial Engineering), and Ph.D. programs. The curriculum encompasses thermodynamics, fluid mechanics, heat transfer, manufacturing processes, machine design, robotics, and computational mechanics.

Research Excellence
Faculty members conduct cutting-edge research in areas such as additive manufacturing, computational fluid dynamics, renewable energy systems, tribology, robotics and automation, composite materials, and nanotechnology. The department has established several sponsored research projects with government agencies and industries.

World-Class Facilities
The department boasts over 25 laboratories including CAD/CAM lab, CNC machines workshop, robotics lab, thermal engineering lab, fluid mechanics lab, metallurgy lab, and engine testing lab. Advanced equipment like 3D printers, CNC machines, and simulation software are available for student projects.

Industrial Linkages
Strong ties with companies like Tata Motors, Mahindra, Ashok Leyland, L&T, and various manufacturing firms provide excellent opportunities for internships, industrial training, and placements. The department regularly organizes industrial visits and expert sessions.

Student Projects and Competitions
Mechanical engineering students actively participate in national and international competitions including SAE events, robotics competitions, and design challenges. Student teams have won accolades in Formula Student competitions and various innovation contests.`,
        stats: { students: 400, faculty: 35, labs: 25 }
      },
      {
        id: 'civil',
        title: 'Civil Engineering',
        category: 'Department',
        content: `The Department of Civil Engineering at NIT Trichy has been shaping infrastructure professionals since 1964. Known for its rigorous academic programs and extensive research activities, the department plays a crucial role in addressing India's infrastructure development needs.

Academic Programs
The department offers B.Tech, M.Tech (specializations in Structural Engineering, Geotechnical Engineering, Transportation Engineering, Water Resources Engineering, and Environmental Engineering), and Ph.D. programs. The curriculum covers structural analysis and design, geotechnical engineering, transportation engineering, water resources, environmental engineering, and construction management.

Research Initiatives
Faculty members are engaged in research on sustainable construction materials, earthquake-resistant structures, smart cities, water resource management, transportation planning, environmental remediation, and climate change adaptation. Several research projects are funded by DST, MHRD, and international agencies.

Infrastructure and Labs
The department houses over 20 laboratories including concrete technology lab, soil mechanics lab, surveying lab, hydraulics lab, environmental engineering lab, transportation engineering lab, and structural engineering lab. Advanced testing equipment and computational facilities support research and teaching.

Industry Partnerships
Collaborations with construction companies, consulting firms, government agencies like National Highways Authority of India (NHAI), and Public Works Departments provide practical exposure through internships, projects, and placements. Regular workshops on latest construction technologies are organized.

Societal Impact
Civil engineering students and faculty contribute to society through projects related to rural infrastructure development, water conservation, sustainable urban planning, and disaster management. Many alumni hold leadership positions in infrastructure development organizations worldwide.`,
        stats: { students: 340, faculty: 30, labs: 20 }
      },
      {
        id: 'production',
        title: 'Production Engineering',
        category: 'Department',
        content: `The Department of Production Engineering at NIT Trichy was established in 1968 and has since been a leader in manufacturing technology education. The department uniquely combines manufacturing processes with modern automation and industrial management.

Program Structure
The department offers B.Tech, M.Tech (specializations in Computer Integrated Manufacturing, Industrial Safety Engineering, and Production Management), and Ph.D. programs. The curriculum integrates manufacturing technology, operations research, industrial engineering, quality control, automation, and supply chain management.

Research Focus
Active research areas include advanced manufacturing processes, automation and robotics, lean manufacturing, quality management, operations research, supply chain optimization, and ergonomics. Faculty members collaborate with industries on projects related to process improvement and productivity enhancement.

Modern Facilities
The department is equipped with over 22 laboratories including CNC machining lab, metrology and quality control lab, CAD/CAM lab, industrial automation lab, operations research lab, and ergonomics lab. Industry-standard software for simulation and optimization is available.

Industry Engagement
Strong industry connections with manufacturing giants, automotive companies, and consulting firms provide students with internships, live projects, and excellent placement opportunities. The department organizes industrial visits, guest lectures, and workshops on contemporary manufacturing practices.

Unique Positioning
Production engineering graduates possess a unique skill set combining technical manufacturing knowledge with management expertise, making them highly valued in manufacturing industries, consulting firms, operations management roles, and entrepreneurial ventures. Alumni successfully lead manufacturing operations in various sectors globally.`,
        stats: { students: 280, faculty: 25, labs: 22 }
      }
    ],
    hostels: [
      {
        id: 'agate',
        title: 'Agate Hostel',
        category: 'Hostel',
        content: `Agate Hostel stands as one of the premier residential facilities at NIT Trichy, providing a comfortable and conducive living environment for undergraduate students. Located in the heart of the campus, Agate combines modern amenities with a vibrant community atmosphere.

Infrastructure and Facilities
The hostel features spacious double and triple occupancy rooms equipped with study tables, chairs, wardrobes, and comfortable beds. Each floor has common washrooms maintained with high standards of cleanliness. The hostel provides 24/7 electricity with backup power supply, ensuring uninterrupted living conditions.

Internet and Connectivity
High-speed WiFi connectivity is available throughout the hostel with dedicated bandwidth for academic purposes. Students can access online resources, attend virtual classes, and stay connected with family and friends. Computer labs within the hostel complex provide additional computing facilities.

Recreational Amenities
Agate boasts excellent recreational facilities including a well-equipped games room with table tennis, carrom, and chess. The hostel has a common room with television and entertainment facilities. Outdoor sports facilities nearby allow students to engage in physical activities.

Dining Facilities
The hostel mess serves nutritious vegetarian and non-vegetarian meals with a varied menu rotated weekly. Special meals are prepared during festivals and celebrations. The mess committee, consisting of student representatives, ensures food quality and addresses student concerns.

Community and Culture
Agate fosters a strong sense of community through regular cultural events, sports competitions, and celebrations. The hostel actively participates in inter-hostel competitions including sports tournaments, cultural fests, and technical events. Senior-junior bonding activities help new students settle comfortably.

Administration and Safety
A warden and assistant wardens oversee hostel operations ensuring discipline and student welfare. 24/7 security personnel maintain safety and visitor management protocols. Medical emergencies are promptly handled with health center access and ambulance facilities.`,
        stats: { capacity: 320, floors: 4, established: 2008 }
      },
      {
        id: 'coral',
        title: 'Coral Hostel',
        category: 'Hostel',
        content: `Coral Hostel is one of NIT Trichy's distinguished residential facilities, known for its excellent infrastructure and vibrant student community. The hostel provides a perfect blend of academic support and recreational opportunities.

Accommodation Details
Coral offers well-maintained double and triple sharing rooms with individual study spaces for each resident. Rooms are adequately ventilated with windows ensuring natural light and fresh air. Each student is provided with a bed, mattress, study table, chair, and personal storage space.

Utilities and Services
The hostel provides round-the-clock water supply with both regular and hot water facilities. Laundry services are available within the hostel premises. Common areas include reading rooms, study spaces, and recreational zones. Housekeeping staff ensures cleanliness of common areas daily.

Internet and Technology
Robust WiFi infrastructure covers all hostel areas with high-bandwidth internet access. LAN connectivity is available in rooms for students preferring wired connections. The hostel maintains IT support to address connectivity issues promptly.

Sports and Recreation
Dedicated indoor games facilities include table tennis tables, carrom boards, and chess sets. The hostel has access to nearby outdoor sports facilities including basketball courts, badminton courts, and volleyball courts. A gymnasium equipped with basic fitness equipment is available.

Mess and Nutrition
The hostel mess operates on a full-board basis serving breakfast, lunch, snacks, and dinner. Menu planning considers nutritional balance and student preferences. Special dietary requirements are accommodated with prior intimation. Student mess representatives regularly review and improve mess services.

Student Life and Events
Coral maintains an active calendar of events including cultural nights, birthday celebrations, festival celebrations, and sports tournaments. The hostel encourages student-led initiatives and clubs focusing on various interests. Inter-hostel competitions foster healthy competition and bonding.

Safety and Governance
Experienced wardens and support staff ensure smooth hostel operations. Security measures include CCTV surveillance, visitor logs, and restricted entry timings. Regular meetings between hostel administration and students address concerns and implement improvements.`,
        stats: { capacity: 360, floors: 4, established: 2010 }
      },
      {
        id: 'diamond',
        title: 'Diamond Hostel',
        category: 'Hostel',
        content: `Diamond Hostel represents excellence in student accommodation at NIT Trichy. Known for its modern facilities and strong community bonds, Diamond provides an ideal environment for academic pursuit and personal growth.

Living Spaces
Diamond features well-designed rooms with optimal space utilization. Double and triple occupancy options are available with each student having dedicated furniture including study desk, chair, bed, and storage. Rooms are designed to provide privacy while encouraging social interaction.

Infrastructure
The hostel building includes multiple floors connected by staircases with ramps for accessibility. Common washrooms on each floor are regularly cleaned and maintained. Water purifiers installed on every floor ensure safe drinking water availability 24/7.

Academic Support
Dedicated study rooms provide quiet spaces for focused learning during exams and assignments. Group study areas facilitate collaborative learning and project work. The hostel maintains a small library with academic resources and magazines.

Technology Infrastructure
High-speed internet connectivity supports online learning, research, and entertainment. Each floor has designated network points ensuring comprehensive coverage. Technical support is available to resolve connectivity and device issues.

Food and Dining
The mess facility serves diverse cuisine with rotating menus to prevent monotony. Student feedback is actively incorporated into menu planning. Special meals during festivals and events add to the dining experience. Hygienic food preparation and serving standards are strictly maintained.

Recreational Facilities
Indoor games room equipped with table tennis, carrom, and other games provides stress relief. Common television room offers entertainment options. The hostel encourages formation of clubs for photography, music, and other interests.

Hostel Culture
Diamond maintains rich traditions including fresher welcomes, farewell celebrations, and annual hostel days. Inter-hostel sports and cultural competitions bring students together. Senior-junior interaction programs ease the transition for new students.

Management and Security
Dedicated warden and administrative staff ensure smooth functioning. 24/7 security presence maintains safety. Emergency protocols are in place with quick access to medical facilities. Regular inspections ensure maintenance standards.`,
        stats: { capacity: 400, floors: 5, established: 2012 }
      },
      {
        id: 'jade',
        title: 'Jade Hostel',
        category: 'Hostel',
        content: `Jade Hostel stands as a testament to NIT Trichy's commitment to providing quality accommodation. The hostel combines comfortable living spaces with excellent amenities, creating a home away from home for students.

Room Configuration
Jade offers spacious rooms with double and triple sharing arrangements. Each room includes individual study areas with proper lighting to support late-night study sessions. Storage facilities include wardrobes and under-bed storage spaces. Rooms are designed for comfort and functionality.

Basic Amenities
24/7 electricity with backup ensures uninterrupted power supply. Regular and hot water availability throughout the day. Well-maintained common washrooms with adequate facilities. Housekeeping services maintain cleanliness in common areas and corridors.

Digital Infrastructure
Comprehensive WiFi coverage across all hostel areas enables seamless online access. High bandwidth allocation supports video streaming, online classes, and research work. IT helpdesk addresses technical issues promptly. LAN ports in rooms provide stable wired connections.

Sports and Fitness
Access to nearby sports facilities including cricket ground, football field, and tennis courts. Indoor games room with table tennis, carrom, and board games. Morning and evening access to fitness equipment. Hostel teams participate actively in inter-hostel sports competitions.

Dining Experience
The mess operates with strict hygiene standards serving fresh, nutritious meals. Weekly menu includes variety catering to different taste preferences. Student mess committee reviews quality and addresses suggestions. Special arrangements during festivals and celebrations.

Community Building
Regular cultural programs and celebrations foster community spirit. Hostel organizes its annual fest with various competitions and events. Birthday celebrations and festival gatherings strengthen bonds among residents. Mentorship programs help juniors adjust to hostel life.

Administrative Structure
Warden and assistant wardens provide guidance and oversight. Student representatives communicate concerns to administration. Regular hostel meetings discuss improvements and policies. Transparent grievance redressal mechanism ensures student voices are heard.

Safety Measures
Round-the-clock security personnel monitor entry and exit. CCTV cameras installed at strategic locations. Strict visitor policies maintain safety. Emergency contact numbers displayed prominently. First aid facilities available within hostel premises.`,
        stats: { capacity: 340, floors: 4, established: 2011 }
      },
      {
        id: 'opal',
        title: 'Opal Hostel',
        category: 'Hostel',
        content: `Opal Hostel represents one of the newer additions to NIT Trichy's residential infrastructure. With modern design and contemporary facilities, Opal provides an enhanced living experience for undergraduate students.

Modern Architecture
Opal features contemporary architectural design with well-ventilated spaces and natural lighting. The building incorporates sustainable design elements including rainwater harvesting and solar panels. Spacious corridors and common areas facilitate social interaction.

Room Features
Rooms are designed with student comfort in mind, offering adequate space for study and rest. Each student gets a personal study area with ergonomic furniture. Storage solutions include built-in wardrobes and shelving. Windows ensure cross-ventilation and natural light.

Essential Services
Uninterrupted power supply with generator backup for essential services. Water supply maintained throughout the day with separate hot water timings. Laundry service operates on specific days with reasonable charges. Cleaning staff ensures daily maintenance of common facilities.

Connectivity
State-of-the-art WiFi infrastructure provides high-speed internet access. Multiple access points ensure consistent coverage across all floors. Dedicated bandwidth for academic purposes prevents congestion during peak hours. Network monitoring ensures optimal performance.

Food Services
Modern mess facility with hygienic cooking and serving arrangements. Diverse menu rotates weekly incorporating student feedback. Quality control measures ensure food safety standards. Special dietary provisions for medical or religious requirements.

Recreation and Wellness
Well-equipped games room with indoor sports facilities. Access to outdoor sports grounds for cricket, football, and athletics. Designated quiet zones for students preferring peaceful environment. Common room with entertainment facilities for relaxation.

Hostel Activities
Active cultural calendar with regular events and celebrations. Student-run clubs for various interests including music, dance, and literature. Inter-hostel competitions in sports, debates, and cultural activities. Annual hostel day showcasing talents and achievements.

Governance and Safety
Experienced wardens ensure discipline and student welfare. Student council represents hostel interests in administrative discussions. Comprehensive security system including CCTV and guards. Emergency response protocols with medical support access. Regular safety drills and awareness programs.`,
        stats: { capacity: 380, floors: 5, established: 2015 }
      },
      {
        id: 'ruby',
        title: 'Ruby Hostel',
        category: 'Hostel',
        content: `Ruby Hostel holds a special place in NIT Trichy's residential ecosystem, known for its vibrant community and excellent facilities. The hostel has built a reputation for fostering both academic excellence and extracurricular participation.

Accommodation Standards
Ruby provides well-maintained double and triple occupancy rooms with individual study spaces. Furniture includes study table with chair, bed with mattress, wardrobe, and storage shelves. Rooms are regularly maintained with pest control and repairs done promptly.

Infrastructure Facilities
Multiple floors accessible via staircases with proper lighting and safety measures. Common washrooms equipped with adequate facilities and maintained hygienically. Water purification systems on each floor ensure safe drinking water. Notice boards for important announcements and communications.

Internet Connectivity
Robust WiFi network covering entire hostel premises with reliable speeds. Separate networks for academic and general use ensuring priority for educational activities. Technical support team resolves connectivity issues. Regular network upgrades maintain service quality.

Sports and Games
Dedicated indoor games room with table tennis tables and carrom boards. Access to outdoor facilities including basketball court, badminton courts, and volleyball court. Hostel teams actively participate in inter-hostel tournaments. Regular coaching sessions organized for interested students.

Mess Operations
Well-managed mess serving three meals daily with evening snacks. Menu planning considers nutritional balance and seasonal availability. Student committee oversees mess operations and quality. Feedback mechanism allows continuous improvement. Festival special meals add variety.

Cultural Life
Ruby maintains rich cultural traditions with regular celebrations and events. Hostel day is a major annual event featuring competitions and performances. Music nights, movie screenings, and talent shows provide entertainment. Student clubs organize workshops and activities.

Student Welfare
Dedicated warden team addresses academic and personal concerns. Student representatives form bridge between residents and administration. Mentorship program pairs seniors with juniors. Counseling support available for students facing difficulties.

Security Infrastructure
24/7 security presence at hostel entrance maintaining entry logs. CCTV surveillance at common areas ensures safety. Restricted visiting hours and strict visitor management. Emergency contact numbers readily available. Medical room for first aid and basic healthcare.`,
        stats: { capacity: 360, floors: 4, established: 2009 }
      }
    ],
    studentLife: [
      {
        id: 'festember',
        title: 'Festember - Cultural Festival',
        category: 'Student Life',
        content: `Festember stands as South India's largest cultural festival, organized annually by the students of NIT Trichy. Since its inception in 1975, Festember has grown into a spectacular four-day celebration of arts, culture, and creativity, attracting over 50,000 participants from across India.

Festival Structure and Events
Festember features over 60 events spanning multiple categories including music, dance, drama, literary arts, fine arts, fashion, and informal events. The festival showcases both competitive events and professional performances. Major attractions include pro-shows featuring renowned artists from Bollywood and the music industry, comedy nights, EDM nights, and cultural performances.

Music and Dance
The music vertical includes events like band wars, classical music competitions, western vocal, Indian vocal, and beatboxing contests. Dance events feature various styles including classical, western, folk, and contemporary dance forms. Professional workshops by industry experts help participants hone their skills.

Literary and Fine Arts
Literary events include debates, extempore, creative writing, poetry slam, and quiz competitions. Fine arts section covers painting, sketching, photography, installations, and digital art. These events provide platforms for artistic expression and intellectual discourse.

Fashion and Dramatics
The fashion show is one of Festember's major attractions featuring creative themes and professional choreography. Dramatics events include street plays, stage plays, mime, and stand-up comedy, allowing students to showcase theatrical talents.

Workshops and Guest Lectures
Festember organizes workshops conducted by industry professionals in various domains including music production, photography, filmmaking, and digital arts. Guest lectures by eminent personalities provide insights and inspiration to participants.

Footfall and Participation
The festival attracts participants from over 500 colleges across India, with registrations exceeding 25,000 for competitive events. The pro-shows and main events witness footfall of over 50,000 people. Online events extend participation globally.

Organization and Management
Student volunteers numbering over 1,000 work year-round to organize Festember. Various departments including sponsorship, marketing, hospitality, logistics, events, security, and publicity collaborate to ensure smooth execution. The festival operates on a substantial budget raised through sponsorships and partnerships.

Impact and Legacy
Festember has launched careers of many artists and performers. Alumni of Festember's organizing team hold leadership positions in various industries. The festival promotes cultural exchange, provides networking opportunities, and creates lasting memories for all participants.`,
        stats: { participants: 25000, events: 60, duration: '4 days' }
      },
      {
        id: 'pragyan',
        title: 'Pragyan - Technical Festival',
        category: 'Student Life',
        content: `Pragyan represents NIT Trichy's flagship international techno-managerial festival, celebrated annually as one of India's largest student-run technical festivals. Since 1999, Pragyan has been a platform for innovation, technology, and learning, attracting brilliant minds from across the globe.

Technical Competitions
Pragyan hosts over 50 technical events covering diverse domains including robotics, coding, electronics, mechanical engineering, chemical engineering, biotechnology, and management. Signature events include autonomous robotics competitions, algorithm challenges, hackathons, bridge building contests, and circuit design challenges.

Robotics and Automation
The robotics vertical features flagship events like autonomous bot races, line following robots, robowars, and drone competitions. These events challenge participants to apply engineering principles to build innovative solutions. State-of-the-art arenas and judging criteria ensure fair competition.

Programming and AI
Coding events include 24-hour hackathons, competitive programming contests, algorithm design challenges, and machine learning competitions. AI-focused events encourage participants to develop intelligent systems solving real-world problems. Online coding competitions extend global reach.

Engineering Challenges
Mechanical, civil, electrical, and chemical engineering competitions test practical application of theoretical knowledge. Events include bridge construction, hydraulic robot design, circuit debugging, chemical process design, and sustainable technology challenges.

Workshops and Seminars
Pragyan organizes extensive workshops on emerging technologies including blockchain, Internet of Things, machine learning, robotics, augmented reality, and renewable energy. Industry experts and academic researchers conduct these sessions, providing hands-on experience and knowledge transfer.

Guest Lectures and Summits
Eminent personalities from academia, industry, and research organizations deliver keynote addresses. Panel discussions on technology trends, entrepreneurship, and innovation bring together experts for intellectual discourse. Past speakers include Nobel laureates, tech CEOs, and renowned scientists.

Online Participation
Pragyan's online platform enables global participation through virtual events, webinars, and competitions. Participants from various countries engage in coding contests, quizzes, and design challenges. This global reach enhances cultural and intellectual exchange.

Exhibitions and Displays
Technical exhibitions showcase innovative projects by students and startups. Companies display cutting-edge products and technologies. Research projects from various departments demonstrate practical applications of academic work.

Scale and Organization
With participation exceeding 40,000 from over 600 institutions worldwide, Pragyan operates on a massive scale. Student volunteers across 15+ departments coordinate logistics, sponsorships, marketing, events, security, hospitality, and technical infrastructure. The festival's budget exceeds several crores, raised through sponsorships and partnerships.

Educational Impact
Pragyan serves as a learning platform where students gain exposure to latest technologies, industry practices, and research trends. Networking opportunities with professionals and peers create lasting connections. Many participants credit Pragyan experiences as career-defining moments.`,
        stats: { participants: 40000, events: 50, reach: 'International' }
      },
      {
        id: 'spider',
        title: 'Spider R&D - Technical Club',
        category: 'Student Life',
        content: `Spider R&D stands as NIT Trichy's premier student-run technical club, dedicated to fostering innovation, research, and development in software and hardware domains. Established in 2010, Spider has grown into a vibrant community of tech enthusiasts working on cutting-edge projects.

Core Domains
Spider operates across multiple verticals including web development, app development, machine learning, artificial intelligence, cybersecurity, blockchain, Internet of Things, and competitive programming. Each domain has dedicated teams working on projects, conducting workshops, and organizing competitions.

Web and App Development
The web development team creates responsive websites and web applications using modern frameworks like React, Angular, Vue.js, Node.js, and Django. App development team builds mobile applications for Android and iOS using Flutter, React Native, and native development tools. Projects range from campus utilities to commercial applications.

Artificial Intelligence and ML
The AI/ML team works on projects involving deep learning, natural language processing, computer vision, and data analytics. Members develop intelligent systems for various applications including chatbots, image recognition, predictive analytics, and recommendation systems. Regular paper discussions keep the team updated with latest research.

Blockchain and Security
Blockchain team explores decentralized applications, smart contracts, and cryptocurrency technologies. Cybersecurity team focuses on ethical hacking, cryptography, network security, and vulnerability assessment. Both teams participate in CTF competitions and hackathons.

Projects and Innovations
Spider has developed numerous applications serving the NIT Trichy community including course management systems, event management platforms, hostel management apps, and department websites. External projects include collaborations with startups and industry partners on commercial applications.

Learning and Development
Spider conducts regular workshops, bootcamps, and technical sessions on various technologies. Project-based learning approach helps members gain practical experience. Mentorship programs pair experienced members with juniors, facilitating knowledge transfer. Weekly meetings feature code reviews, discussions, and collaborative problem-solving.

Competitions and Hackathons
Spider members actively participate in national and international hackathons, coding competitions, and technical events. The club also organizes its own hackathons and coding contests, attracting participants from colleges across India. Success in competitions has brought recognition to both Spider and NIT Trichy.

Industry Connections
Spider maintains connections with tech companies and startups, facilitating internships and placements for members. Guest sessions by industry professionals provide insights into current technological trends and career opportunities. Collaborative projects with companies offer real-world development experience.

Community Impact
Spider contributes to the campus through technical solutions addressing student needs. Open-source contributions and technical blog posts share knowledge with wider community. Alumni network includes successful software engineers, researchers, and entrepreneurs working globally.

Recruitment and Culture
Spider conducts rigorous recruitment drives selecting passionate and skilled students. The club culture emphasizes learning, collaboration, and innovation. Regular social events and team-building activities strengthen bonds among members. Senior-junior mentorship ensures smooth knowledge transition.`,
        stats: { members: 150, projects: 200, domains: 8 }
      },
      {
        id: 'deltaforce',
        title: 'Delta Force - Robotics Club',
        category: 'Student Life',
        content: `Delta Force represents NIT Trichy's premier robotics and automation club, bringing together students passionate about building intelligent machines and systems. Since its establishment, Delta Force has been at the forefront of robotics innovation, competing nationally and developing cutting-edge projects.

Focus Areas
The club works across multiple robotics domains including autonomous navigation, swarm robotics, industrial automation, humanoid robotics, drone technology, computer vision for robotics, and mechatronics. Projects combine mechanical design, electronics, and programming to create functional robotic systems.

Autonomous Systems
Delta Force specializes in developing autonomous robots capable of navigation, obstacle avoidance, and task completion without human intervention. Projects include autonomous ground vehicles, maze-solving robots, line-following robots, and pathfinding algorithms. Computer vision integration enables sophisticated perception capabilities.

Aerial Robotics
The drone team designs and builds unmanned aerial vehicles for various applications including surveillance, photography, package delivery, and agricultural monitoring. Projects involve flight controller programming, stabilization algorithms, and autonomous flight capabilities.

Industrial Applications
Members work on industrial automation projects including robotic arms, automated assembly systems, material handling robots, and quality inspection systems. These projects provide practical understanding of industrial robotics and automation technologies used in manufacturing.

Competitions and Achievements
Delta Force participates in prestigious national robotics competitions including ABU Robocon, DRDO's drone competitions, and various technical fest robotics events. The team has won multiple awards and recognitions for innovative designs and flawless execution.

Workshops and Training
Regular workshops on microcontroller programming, sensor integration, motor control, and mechanical design train new members. Hands-on sessions with Arduino, Raspberry Pi, ROS (Robot Operating System), and CAD software build technical proficiency. Expert sessions by alumni and industry professionals provide guidance.

Infrastructure
Delta Force operates from a dedicated workspace equipped with tools, components, testing arenas, and computing facilities. The club maintains inventory of motors, sensors, microcontrollers, batteries, and mechanical components. Access to 3D printers and laser cutters enables rapid prototyping.

Collaborative Projects
Cross-functional teams work on ambitious projects combining multiple technologies. Recent projects include voice-controlled robots, gesture-recognition systems, swarm intelligence demonstrations, and warehouse automation prototypes. Collaboration with other clubs enhances project scope.

Research and Innovation
Members explore emerging areas like soft robotics, bio-inspired designs, and AI-driven control systems. Research publications and project documentation contribute to robotics knowledge base. Participation in innovation challenges encourages creative problem-solving.`,
        stats: { members: 120, competitions: 15, robots: 30 }
      },
      {
        id: 'sac',
        title: 'Student Activity Centre (SAC)',
        category: 'Student Life',
        content: `The Student Activity Centre serves as the nerve center of student life at NIT Trichy, facilitating and coordinating all extracurricular activities on campus. SAC provides a platform for students to explore interests, develop skills, and organize events beyond academics.

Structure and Governance
SAC operates under the guidance of faculty advisors and is managed by elected student representatives. The body includes various councils overseeing sports, cultural activities, technical clubs, departmental associations, and welfare activities. Regular meetings ensure coordination and planning.

Cultural Activities
SAC coordinates campus-wide cultural events including freshers' welcome, cultural nights, festival celebrations, and farewell programs. It supports cultural clubs for music, dance, drama, photography, and fine arts. Regular competitions and performances provide platforms for artistic expression.

Sports and Athletics
The sports council under SAC manages all sports facilities, organizes inter-departmental and inter-hostel tournaments, and coordinates teams for inter-NIT and other external competitions. Facilities include grounds for cricket, football, hockey, basketball, tennis, badminton, volleyball, and athletics track.

Technical and Professional Development
SAC oversees technical clubs, professional societies, and departmental associations. It facilitates workshops, seminars, guest lectures, and skill development programs. Entrepreneurship initiatives and innovation challenges are organized regularly.

Clubs and Societies
Over 30 registered clubs operate under SAC's umbrella covering diverse interests including coding, robotics, literature, debate, quizzing, social service, environment, entrepreneurship, and regional cultural groups. Each club conducts regular activities and annual events.

Infrastructure Management
SAC manages facilities including auditoriums, seminar halls, conference rooms, sports complexes, and recreational spaces. It coordinates booking and scheduling of venues for various activities. Maintenance and upgrades are done in consultation with administration.

Festival Coordination
SAC plays crucial role in organizing NIT Trichy's major festivals including Festember, Pragyan, and Diamond Jubilee celebrations. It coordinates logistics, permissions, safety measures, and resource allocation for these large-scale events.

Student Welfare
SAC addresses student concerns related to campus life, facilities, and activities. It represents student interests in administrative discussions. Grievance redressal mechanisms ensure student voices are heard and acted upon.

Financial Management
SAC manages substantial budgets allocated for student activities. It oversees fund allocation to clubs, events, and initiatives. Transparent accounting and regular audits ensure proper utilization of resources.

Legacy and Impact
SAC has been instrumental in creating vibrant campus culture at NIT Trichy. Alumni credit SAC activities with developing leadership, teamwork, and organizational skills. The experiences and networks formed through SAC activities often prove invaluable in professional careers.`,
        stats: { clubs: 30, events: 100, budget: '50 lakhs' }
      },
      {
        id: 'nss',
        title: 'National Service Scheme (NSS)',
        category: 'Student Life',
        content: `The National Service Scheme unit at NIT Trichy embodies the spirit of social service and community engagement. NSS volunteers dedicate themselves to social causes, rural development, and community welfare, making significant positive impact on society.

Philosophy and Objectives
NSS operates on the principle of "Not Me But You," fostering social responsibility among students. The program aims to develop personality through community service, understand community needs, find solutions to social problems, and develop sense of civic responsibility.

Regular Activities
NSS conducts weekly activities including teaching underprivileged children, adult literacy programs, cleanliness drives, blood donation camps, health awareness campaigns, and environmental conservation initiatives. Volunteers work in nearby villages and urban slums addressing various social issues.

Special Camping
Annual seven-day special camps immerse volunteers in rural settings where they work on community development projects. Activities include sanitation drives, health camps, awareness programs on hygiene and education, tree plantation, infrastructure development, and cultural programs for villagers.

Blood Donation Drives
NSS organizes regular blood donation camps in collaboration with local hospitals and blood banks. These camps collect hundreds of units of blood annually, saving numerous lives. Volunteers also maintain databases of willing donors for emergency requirements.

Educational Initiatives
Volunteers conduct free coaching classes for economically disadvantaged children, support government schools with teaching and resources, organize career guidance sessions, distribute educational materials, and promote digital literacy among underprivileged communities.

Environmental Activities
Tree plantation drives, lake cleaning initiatives, plastic-free campaigns, waste management awareness programs, and biodiversity conservation efforts constitute NSS's environmental work. The unit has planted thousands of trees and cleaned numerous water bodies.

Health and Awareness
Health camps providing free medical checkups, medicine distribution, hygiene awareness sessions, nutrition education, and disease prevention campaigns are regularly organized. Special focus areas include maternal health, child nutrition, and communicable disease prevention.

Disaster Response
NSS volunteers participate in disaster relief operations, organize fundraisers for affected regions, collect and distribute relief materials, and conduct rehabilitation programs. Training in first aid and disaster management prepares volunteers for emergency response.

Leadership Development
NSS provides leadership opportunities through organizing activities, coordinating teams, and managing resources. Volunteers develop communication, organizational, and problem-solving skills. Regular meetings, training sessions, and workshops enhance capabilities.

Awards and Recognition
The unit has received several awards including Best NSS Unit awards at state and national levels. Individual volunteers have been honored for exceptional service. These recognitions motivate continued excellence in social service.

Impact and Reach
NSS NIT Trichy has positively impacted thousands of lives through its various programs. Alumni volunteers continue social service in their professional lives, creating multiplier effects. The unit serves as model for student-led social initiatives.`,
        stats: { volunteers: 250, villages: 15, camps: 5 }
      }
    ]
  };

  const allArticles = [...articles.departments, ...articles.hostels, ...articles.studentLife];

  const filteredArticles = allArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const bookmarkedArticles = allArticles.filter(article => bookmarks.includes(article.id));

  const toggleBookmark = (id) => {
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!selectedArticle) return;
      const element = document.getElementById('article-content');
      if (!element) return;
      const scrollPercentage = (element.scrollTop / (element.scrollHeight - element.clientHeight)) * 100;
      setReadingProgress(Math.min(scrollPercentage, 100));
    };

    const element = document.getElementById('article-content');
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, [selectedArticle]);

  const CategoryIcon = ({ category }) => {
    if (category === 'Department') return <GraduationCap size={18} />;
    if (category === 'Hostel') return <Home size={18} />;
    return <Users size={18} />;
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800 border-b border-gray-700' : 'bg-white/80 backdrop-blur-md border-b border-purple-100'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  setShowBookmarks(false);
                }}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hidden sm:block">
                  WikiNITT
                </h1>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowBookmarks(!showBookmarks)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-purple-100'
                } ${showBookmarks ? 'bg-purple-100 dark:bg-gray-700' : ''}`}
              >
                <BookmarkCheck size={20} className="text-purple-600" />
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-purple-100'}`}
              >
                {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors sm:hidden ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-purple-100'}`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-4">
            <div className={`relative ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles, departments, hostels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg outline-none ${
                  darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {selectedArticle ? (
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-xl overflow-hidden`}>
            {readingProgress > 0 && (
              <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-600" style={{ width: `${readingProgress}%` }} />
            )}
            <div id="article-content" className="max-h-[calc(100vh-200px)] overflow-y-auto p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CategoryIcon category={selectedArticle.category} />
                    <span className="text-sm text-purple-600 font-medium">{selectedArticle.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{selectedArticle.title}</h2>
                </div>
                <button
                  onClick={() => toggleBookmark(selectedArticle.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    bookmarks.includes(selectedArticle.id)
                      ? 'bg-purple-100 dark:bg-purple-900'
                      : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  {bookmarks.includes(selectedArticle.id) ? (
                    <BookmarkCheck size={24} className="text-purple-600" />
                  ) : (
                    <BookmarkPlus size={24} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                  )}
                </button>
              </div>

              <div className="prose prose-lg max-w-none">
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {selectedArticle.stats && (
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp size={20} className="text-purple-600" />
                    Quick Stats
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedArticle.stats).map(([key, value]) => (
                      <div key={key} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                        <div className="text-2xl font-bold text-purple-600">{value}</div>
                        <div className="text-sm capitalize mt-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : showBookmarks ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">Bookmarked Articles ({bookmarkedArticles.length})</h2>
            {bookmarkedArticles.length === 0 ? (
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-12 text-center`}>
                <BookmarkPlus size={48} className="mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">No bookmarked articles yet</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookmarkedArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'} rounded-xl shadow-md p-6 cursor-pointer transition-all transform hover:-translate-y-1`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <CategoryIcon category={article.category} />
                        <span className="text-sm text-purple-600 font-medium">{article.category}</span>
                      </div>
                      <BookmarkCheck size={18} className="text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-3`}>
                      {article.content.substring(0, 150)}...
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Welcome to WikiNITT</h2>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Your comprehensive guide to NIT Trichy - Explore departments, hostels, and student life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'} rounded-xl shadow-md p-6 cursor-pointer transition-all transform hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <CategoryIcon category={article.category} />
                      <span className="text-sm text-purple-600 font-medium">{article.category}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(article.id);
                      }}
                      className="hover:scale-110 transition-transform"
                    >
                      {bookmarks.includes(article.id) ? (
                        <BookmarkCheck size={18} className="text-purple-600" />
                      ) : (
                        <BookmarkPlus size={18} className={darkMode ? 'text-gray-400' : 'text-gray-400'} />
                      )}
                    </button>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-3`}>
                    {article.content.substring(0, 150)}...
                  </p>
                </div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-12 text-center`}>
                <Search size={48} className="mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">No articles found matching your search</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default WikiNITT;
