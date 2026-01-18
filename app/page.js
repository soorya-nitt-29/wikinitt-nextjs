'use client';

import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Bookmark, BookmarkCheck, Sun, Moon, Home, TrendingUp, Clock, BarChart3, FileText } from 'lucide-react';

export default function WikiNITT() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [isDark, setIsDark] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  const [viewStats, setViewStats] = useState({});
  const [showStats, setShowStats] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const articles = [
    {
      id: 1,
      title: "Computer Science and Engineering (CSE)",
      category: "Academic Departments",
      content: `The Computer Science and Engineering Department at NIT Trichy stands as one of India's premier institutions for computer science education and research. Established in 1984, the department has consistently maintained its position among the top-tier CSE departments in the country.

Academic Programs:
The department offers B.Tech, M.Tech, and Ph.D. programs with specializations in Artificial Intelligence, Machine Learning, Data Science, Cybersecurity, Computer Networks, and Software Engineering.

Infrastructure:
State-of-the-art laboratories include dedicated spaces for AI & Machine Learning, Computer Networks, Database Systems, Software Engineering, Cloud Computing, and High Performance Computing. The department houses over 200 workstations and multiple servers.

Research Excellence:
Faculty members actively engage in cutting-edge research across various domains including Deep Learning, Natural Language Processing, Computer Vision, Internet of Things, Blockchain Technology, and Quantum Computing. The department has numerous sponsored research projects from organizations like DST, DRDO, and industry partners.

Industry Connections:
Top technology companies including Google, Microsoft, Amazon, Adobe, and Goldman Sachs regularly recruit from the department. Many alumni hold leadership positions in major tech companies and successful startups.

Student Activities:
The department is home to Spider (R&D club), Delta Force (coding club), and various technical teams. Students regularly participate in ACM ICPC, Google Summer of Code, and other prestigious competitions.`,
      tags: ["CSE", "Engineering", "Technology", "AI", "Programming"],
      readTime: 8
    },
    {
      id: 2,
      title: "Electronics and Communication Engineering (ECE)",
      category: "Academic Departments",
      content: `The ECE Department at NIT Trichy, established in 1964, is renowned for excellence in electronics and communication technologies. The department has been at the forefront of innovation in VLSI design and wireless communication.

Academic Programs:
Offering B.Tech, M.Tech (with specializations in VLSI Design, Embedded Systems, Signal Processing, Wireless Communications, and Microelectronics), and Ph.D. programs.

Laboratories and Facilities:
Advanced labs for VLSI Design, Microwave Engineering, Digital Signal Processing, Optical Communication, Embedded Systems, Communication Networks, and RF & Antenna Design. The department has collaboration with leading semiconductor companies.

Research Areas:
Major research focus on 5G and beyond technologies, VLSI chip design, IoT systems, signal processing algorithms, optical networks, and semiconductor devices. Multiple patents and publications in top-tier journals.

Industry Collaboration:
Strong partnerships with companies like Qualcomm, Intel, Texas Instruments, Broadcom, and Analog Devices. Regular workshops and internship opportunities for students.

Student Achievements:
Students showcase projects at Pragyan and contribute to Spider R&D club activities.`,
      tags: ["ECE", "VLSI", "Communication", "Electronics", "5G"],
      readTime: 7
    },
    {
      id: 3,
      title: "Electrical and Electronics Engineering (EEE)",
      category: "Academic Departments",
      content: `The Department of Electrical and Electronics Engineering has been a cornerstone of NIT Trichy since 1968, producing engineers who have contributed significantly to India's power sector and electronics industry.

Academic Offerings:
B.Tech, M.Tech programs in Power Systems, Power Electronics, Control Systems, and Electrical Drives, along with Ph.D. opportunities.

Infrastructure:
Well-equipped laboratories for Power Systems, Power Electronics, Control Systems, Electrical Machines, Digital Signal Processing, High Voltage Engineering, and Renewable Energy systems.

Research Focus:
Active research in Smart Grids, Renewable Energy Integration, Electric Vehicles, Power Quality, FACTS devices, and Advanced Control Systems. The department has several sponsored projects from government and industry.

Industry Connect:
Collaborations with BHEL, NTPC, PowerGrid, L&T, ABB, and Siemens. Students get exposure through industrial visits and internships.

Special Initiatives:
Focus on sustainable energy solutions and smart grid technologies. The department actively participates in national missions on renewable energy.`,
      tags: ["EEE", "Power Systems", "Renewable Energy", "Control Systems"],
      readTime: 6
    },
    {
      id: 4,
      title: "Mechanical Engineering",
      category: "Academic Departments",
      content: `Mechanical Engineering at NIT Trichy, one of the oldest departments established in 1964, has maintained excellence in teaching, research, and industry collaboration for over five decades.

Programs:
B.Tech, M.Tech (Thermal Engineering, Design Engineering, Manufacturing Engineering, Industrial Engineering), and Ph.D. programs.

Facilities:
State-of-the-art CAD/CAM labs, Robotics lab, IC Engines lab, Fluid Mechanics lab, Heat Transfer lab, Manufacturing Technology workshop, and Material Testing facilities.

Research Domains:
Advanced Manufacturing Processes, Composite Materials, Computational Fluid Dynamics, Renewable Energy Systems, Robotics & Automation, Additive Manufacturing, and Automotive Engineering.

Industry Partnerships:
Strong ties with Ashok Leyland, TVS Motors, BHEL, Caterpillar, Bosch, and numerous other manufacturing firms. Regular industrial training and placement support.

Student Projects:
Teams for Formula Student, BAJA SAE, and other national competitions. Active participation in technical festivals and innovation challenges.`,
      tags: ["Mechanical", "Manufacturing", "Robotics", "Automotive"],
      readTime: 7
    },
    {
      id: 5,
      title: "Civil Engineering",
      category: "Academic Departments",
      content: `The Department of Civil Engineering, established in 1964, has been instrumental in shaping India's infrastructure development through quality education and research.

Academic Structure:
B.Tech, M.Tech programs in Structural Engineering, Environmental Engineering, Transportation Engineering, Geotechnical Engineering, and Water Resources, plus Ph.D. programs.

Laboratory Facilities:
Comprehensive labs for Concrete Technology, Soil Mechanics, Structural Analysis, Highway Engineering, Water Resources, Environmental Engineering, and Survey equipment.

Research Excellence:
Focus areas include Sustainable Construction Materials, Earthquake Engineering, Traffic Engineering, Wastewater Treatment, Structural Health Monitoring, and Green Buildings.

Professional Connections:
Collaboration with NHAI, PWD, L&T Construction, GMR Infrastructure, and various government agencies. Students engage in real-world projects and site visits.

Special Features:
Emphasis on sustainable and smart infrastructure development. Regular workshops on modern construction technologies and BIM.`,
      tags: ["Civil", "Infrastructure", "Construction", "Sustainability"],
      readTime: 6
    },
    {
      id: 6,
      title: "Production Engineering",
      category: "Academic Departments",
      content: `Production Engineering Department, established in 1980, uniquely combines manufacturing technology with industrial management, creating engineers equipped for modern industry challenges.

Program Offerings:
B.Tech in Production Engineering with exposure to both technical and managerial aspects of manufacturing.

Infrastructure:
CNC Machines, Metrology Lab, Industrial Engineering Lab, Operations Research Lab, CAD/CAM facilities, and modern manufacturing equipment.

Curriculum Highlights:
Covers manufacturing processes, automation, quality management, operations research, supply chain management, and industrial organization.

Research Areas:
Advanced Manufacturing, Lean Manufacturing, Six Sigma, Supply Chain Optimization, Quality Engineering, and Industry 4.0 technologies.

Industry Interface:
Strong connections with manufacturing industries, automotive sector, and process industries. Emphasis on practical exposure through internships.`,
      tags: ["Production", "Manufacturing", "Quality", "Supply Chain"],
      readTime: 5
    },
    {
      id: 7,
      title: "Agate Hostel",
      category: "Hostels",
      content: `Agate is one of the premier boys' hostels at NIT Trichy, known for its vibrant community and excellent facilities. Housing approximately 400 students, Agate has established itself as a hub of both academic excellence and extracurricular activities.

Facilities:
Spacious double occupancy rooms with study tables, chairs, and storage. Common facilities include reading rooms, TV room, table tennis hall, badminton court, and a well-equipped gymnasium.

Mess:
The hostel mess operates on a monthly subscription basis, serving breakfast, lunch, snacks, and dinner. Separate vegetarian and non-vegetarian menus with focus on nutritious and hygienic food.

Activities:
Agate hosts the annual Ventura sports fest, drawing participants from all hostels. Regular events include birthday celebrations, festival gatherings, and movie nights.

Culture:
Strong sense of community with seniors mentoring juniors. Active participation in technical festivals, cultural events, and sports competitions.

Location:
Well-connected to academic blocks, library, and SAC. Close proximity to sports facilities and mess complex.`,
      tags: ["Hostel", "Boys", "Sports", "Community"],
      readTime: 4
    },
    {
      id: 8,
      title: "Diamond Hostel",
      category: "Hostels",
      content: `Diamond Hostel stands out for its academic atmosphere and competitive spirit. Home to approximately 380 male students, Diamond has built a reputation for producing university toppers and successful professionals.

Infrastructure:
Well-maintained rooms with individual study spaces, excellent Wi-Fi connectivity, printing facilities, and comfortable living conditions. Study rooms open 24/7 during exam periods.

Recreational Facilities:
Gymnasium with modern equipment, volleyball court, basketball court, indoor games room with carrom and chess facilities.

Mess Services:
Quality food with varied menu rotating weekly. Special meals during festivals and celebrations. Hygienic preparation and serving standards maintained.

Academic Culture:
Strong focus on academics with group study sessions, peer learning, and knowledge sharing. Many students actively participate in competitive programming and research.

Achievements:
Consistently produces university rank holders, successful entrepreneurs, and professionals working in top global companies.`,
      tags: ["Hostel", "Boys", "Academic", "Excellence"],
      readTime: 4
    },
    {
      id: 9,
      title: "Coral Hostel",
      category: "Hostels",
      content: `Coral Hostel is renowned for its friendly environment and vibrant cultural scene. Accommodating about 350 male students, Coral perfectly balances academics with cultural and recreational activities.

Living Spaces:
Comfortable rooms with adequate natural light and ventilation. Common areas designed for social interaction and group activities.

Special Facilities:
Music room with instruments, open-air theatre for performances, library corner, and indoor games facilities. Well-equipped gym for fitness enthusiasts.

Mess:
Diverse menu catering to different regional preferences. North Indian, South Indian, and Chinese options available. Special attention to food quality and taste.

Cultural Activities:
Strong participation in Festember and other cultural events. Regular music nights, drama performances, and creative workshops organized by hostel committee.

Community:
Welcoming atmosphere with strong bonding between batches. Annual hostel day celebrations and regular inter-hostel cultural competitions.`,
      tags: ["Hostel", "Boys", "Cultural", "Music"],
      readTime: 4
    },
    {
      id: 10,
      title: "Jade Hostel",
      category: "Hostels",
      content: `Jade stands as one of the most sought-after girls' hostels at NIT Trichy, providing a safe, comfortable, and empowering environment for approximately 300 female students.

Security:
24/7 security personnel, CCTV surveillance, biometric access control, and strict visitor policies ensuring complete safety and privacy.

Facilities:
Spacious rooms, well-lit corridors, study rooms, library corner, TV room, indoor games area, and modern gymnasium with equipment suitable for women.

Mess Services:
Nutritious meals planned with dietitian consultation. Special attention to hygiene and food quality. Separate pantry for light snacks and beverages.

Wellness Programs:
Regular yoga sessions, aerobics classes, self-defense workshops, and health awareness programs. Counseling services available.

Academic Support:
Quiet study environment, group discussion rooms, and peer mentoring systems. High academic performance with several toppers from the hostel.`,
      tags: ["Hostel", "Girls", "Safety", "Wellness"],
      readTime: 4
    },
    {
      id: 11,
      title: "Opal Hostel",
      category: "Hostels",
      content: `Opal Hostel provides a nurturing and progressive environment for female students, housing approximately 280 residents. Known for its strong community bonds and leadership development.

Infrastructure:
Modern architecture with spacious rooms, common areas for socializing, dedicated study zones, and recreational facilities.

Security Measures:
Comprehensive security system with controlled access, CCTV coverage, and 24/7 security staff. Safe and secure environment for all residents.

Mess:
Home-style cooking with focus on nutrition and taste. Special festival meals and birthday celebrations. Provision for dietary requirements and preferences.

Activities:
Active cultural committee organizing events, competitions, and celebrations. Regular workshops on personality development, communication skills, and career guidance.

Achievement:
Students from Opal excel in various college clubs, technical teams, and leadership positions. Strong representation in student government and cultural activities.`,
      tags: ["Hostel", "Girls", "Leadership", "Development"],
      readTime: 4
    },
    {
      id: 12,
      title: "Pearl Hostel",
      category: "Hostels",
      content: `Pearl Hostel, one of the newest girls' hostels, accommodates 320 students and showcases modern design and contemporary facilities that set new standards for hostel living.

Modern Amenities:
Contemporary architecture, high-speed Wi-Fi throughout, individual study desks in rooms, collaborative learning spaces, and well-designed common areas.

Fitness and Recreation:
State-of-the-art gymnasium, yoga and meditation room, indoor sports facilities including table tennis and badminton.

Mess Facilities:
Modern kitchen with digital menu system, diverse cuisine options, and focus on healthy eating. Salad bars and fruit counters available.

Wellness Initiatives:
Regular yoga classes, fitness programs, mental health awareness sessions, and counseling support. Emphasis on holistic development.

Technology Integration:
Smart facilities including app-based complaint management, digital notice boards, and online mess menu voting system.`,
      tags: ["Hostel", "Girls", "Modern", "Technology"],
      readTime: 4
    },
    {
      id: 13,
      title: "Ruby Hostel",
      category: "Hostels",
      content: `Ruby Hostel is celebrated for its vibrant community and excellent sports culture. Housing 400 male students, Ruby has built a strong reputation in inter-hostel sports competitions.

Living Quarters:
Spacious rooms with good ventilation, study furniture, and storage space. Well-maintained corridors and common areas promoting cleanliness.

Sports Facilities:
Well-equipped gymnasium, table tennis hall, outdoor volleyball and basketball courts. Regular sports practice sessions and coaching.

Mess:
Quality food with separate veg and non-veg counters. Weekly menu rotation with student preferences considered. Special meal provisions for athletes.

Sports Culture:
Strong teams in cricket, football, volleyball, and athletics. Regular winners in inter-hostel tournaments. Dedicated practice schedules and team building activities.

Community:
Strong hostel spirit with active participation in all college events. Music room and entertainment facilities for recreation.`,
      tags: ["Hostel", "Boys", "Sports", "Athletics"],
      readTime: 4
    },
    {
      id: 14,
      title: "Sapphire Hostel",
      category: "Hostels",
      content: `Sapphire Hostel offers premium accommodation for 360 male students, known for fostering entrepreneurship and innovation alongside academic excellence.

Premium Facilities:
Superior infrastructure with centralized Wi-Fi, air-conditioned study rooms, printing and photocopying facilities, and comfortable living spaces.

Recreation:
Modern gymnasium, billiards room, sports equipment library, and entertainment room with gaming consoles and streaming facilities.

Mess:
High-quality food service with emphasis on hygiene and nutrition. Diverse menu with continental options. Modern kitchen facilities.

Entrepreneurial Culture:
Many startup founders and entrepreneurs from Sapphire. Regular workshops, alumni talks, and networking sessions focused on innovation and business.

Academic Support:
Group study rooms, project collaboration spaces, and mentorship programs. Strong academic performance across batches.`,
      tags: ["Hostel", "Boys", "Premium", "Entrepreneurship"],
      readTime: 4
    },
    {
      id: 15,
      title: "Turquoise Hostel",
      category: "Hostels",
      content: `Turquoise Hostel provides focused academic environment for 290 female students, with emphasis on collaborative learning and academic support.

Study Infrastructure:
Multiple study rooms with 24/7 access, group discussion areas, project collaboration spaces, and quiet zones for individual study.

Security:
Comprehensive security system with strict access control, CCTV monitoring, and trained security personnel ensuring safe environment.

Facilities:
Modern gymnasium, library corner with reference books, recreational room, and comfortable common areas for socializing.

Mess:
Nutritious meals with balanced diet focus. Special provisions during exam periods. Clean and hygienic preparation standards.

Academic Excellence:
Study groups, peer learning sessions, and exam preparation support. Regular academic workshops and skill development programs. High percentage of scholarship recipients and toppers.`,
      tags: ["Hostel", "Girls", "Academic", "Study"],
      readTime: 4
    },
    {
      id: 16,
      title: "Zircon Hostel",
      category: "Hostels",
      content: `Zircon, a newly constructed girls' hostel for 310 students, exemplifies sustainable living with state-of-the-art eco-friendly features and modern amenities.

Sustainable Design:
Solar panels for hot water and electricity, rainwater harvesting system, waste segregation and composting, energy-efficient lighting, and green building materials.

Modern Amenities:
Contemporary architecture, spacious rooms with ample natural light, meditation and yoga room, modern fitness center, and collaborative workspaces.

Mess:
Focus on organic and locally sourced ingredients, healthy meal options, minimal food waste through smart planning, and composting of biodegradable waste.

Environmental Initiatives:
Regular awareness programs on sustainability, tree plantation drives, campus cleaning activities, and eco-friendly festival celebrations.

Community:
Environmentally conscious student body, active participation in green clubs, and social service activities. Strong emphasis on sustainable lifestyle.`,
      tags: ["Hostel", "Girls", "Sustainable", "Eco-friendly"],
      readTime: 4
    },
    {
      id: 17,
      title: "Pragyan - Technical Festival",
      category: "Student Life",
      content: `Pragyan is NIT Trichy's flagship international technical festival, attracting thousands of participants from across India and abroad. Held annually, it represents the pinnacle of technical and innovative excellence.

Event Categories:
Technical competitions including robotics, coding, quizzing, engineering challenges, and design contests. Workshops on emerging technologies like AI, blockchain, IoT, and data science.

Guest Lectures:
Renowned speakers from industry and academia share insights on cutting-edge technologies, innovation, and career development. Past speakers include leaders from Google, Microsoft, ISRO, and leading research institutions.

Exhibitions:
Technology exhibitions showcasing student projects, industrial innovations, and research demonstrations. Interactive displays and hands-on experiences.

International Participation:
Students and professionals from multiple countries participate, making it a truly global event. Cultural exchange and networking opportunities.

Impact:
Platform for students to showcase talent, learn new technologies, network with industry professionals, and explore career opportunities. Many startups and research collaborations have originated from Pragyan.`,
      tags: ["Festival", "Technical", "Innovation", "International"],
      readTime: 6
    },
    {
      id: 18,
      title: "Festember - Cultural Festival",
      category: "Student Life",
      content: `Festember stands as South India's largest cultural festival, transforming NIT Trichy campus into a vibrant celebration of arts, culture, and creativity every year.

Cultural Events:
Competitions in music (classical, western, fusion), dance (classical, contemporary, folk), drama, street plays, literary events, and fine arts. Professional judges ensure high standards.

Professional Nights:
Spectacular performances by renowned artists, bands, and entertainers. Past editions have featured Bollywood celebrities, famous bands, stand-up comedians, and classical virtuosos.

Informal Events:
Fun activities, games, treasure hunts, and interactive sessions creating festive atmosphere. Fashion shows, photography contests, and creative workshops.

Organization:
Entirely student-managed event demonstrating exceptional organizational skills. Teams handle logistics, sponsorship, marketing, hospitality, and event management.

Attendance:
Over 50,000 participants from colleges across India. Four days of non-stop cultural extravaganza, making it one of the most anticipated college festivals in South India.`,
      tags: ["Festival", "Cultural", "Arts", "Music"],
      readTime: 6
    },
    {
      id: 19,
      title: "Spider - R&D Club",
      category: "Student Life",
      content: `Spider, the Research and Development Club of NIT Trichy, is dedicated to fostering innovation, research, and technological development among students across all disciplines.

Focus Areas:
Web development, mobile app development, machine learning, data science, Internet of Things, and research projects across various domains.

Projects:
Students work on real-world projects solving practical problems. Past projects include campus management systems, mobile applications, data analytics platforms, and IoT solutions.

Learning Programs:
Regular workshops, bootcamps, and training sessions on latest technologies. Mentorship by senior students and alumni working in top companies.

Collaborations:
Industry partnerships providing exposure to professional development practices. Guest lectures by industry experts and researchers.

Impact:
Many Spider alumni have gone on to work at top tech companies or founded successful startups. The club has contributed significantly to campus digitalization and student skill development.`,
      tags: ["Club", "R&D", "Technology", "Innovation"],
      readTime: 5
    },
    {
      id: 20,
      title: "Student Activity Center (SAC)",
      category: "Student Life",
      content: `The Student Activity Center serves as the vibrant heart of campus life at NIT Trichy, providing infrastructure and support for numerous student activities, clubs, and organizations.

Infrastructure:
Large auditorium with 1000+ seating capacity, multiple seminar halls, music rooms with instruments, dance studios with mirrors and sound systems, art galleries, and exhibition spaces.

Club Facilities:
Dedicated rooms for 50+ student clubs covering technical, cultural, literary, social service, and special interest areas. Equipment and resources for various activities.

Events:
Major college events including Festember, Pragyan, Convocation, and various club activities are conducted here. Regular workshops, seminars, and competitions.

Management:
Student-managed facility with SAC Committee coordinating activities. Booking system for spaces and equipment.

Accessibility:
Central location on campus, open late during festival seasons, accommodating simultaneous multiple events and activities.`,
      tags: ["Campus", "Activities", "Events", "Infrastructure"],
      readTime: 5
    },
    {
      id: 21,
      title: "Central Library",
      category: "Student Life",
      content: `NIT Trichy's Central Library is a cornerstone of academic excellence, providing extensive resources, modern facilities, and conducive environment for learning and research.

Collection:
Over 2 lakh books covering all engineering disciplines, sciences, humanities, and management. 15,000+ journals including international publications, conference proceedings, and theses.

Digital Resources:
Subscriptions to major academic databases including IEEE Xplore, Science Direct, Springer, ACM Digital Library, and many others. E-books and online journals accessible campus-wide.

Facilities:
Reading halls with 600+ seats, individual study cubicles, group discussion rooms, digital library section with computers, rare book collection, and reference section.

Services:
24/7 operation during exams, book reservation system, inter-library loan facility, document delivery, reference assistance, and research support services.

Learning Support:
Workshops on research tools like LaTeX, reference management software (Mendeley, Zotero), and effective literature search techniques.`,
      tags: ["Library", "Academic", "Resources", "Research"],
      readTime: 5
    },
    {
      id: 22,
      title: "Sports Complex",
      category: "Student Life",
      content: `The Sports Complex at NIT Trichy exemplifies the institute's commitment to holistic development, promoting physical fitness, sportsmanship, and athletic excellence.

Facilities:
Cricket grounds, football field, hockey turf, basketball courts, volleyball courts, tennis courts, badminton courts (indoor and outdoor), Olympic-size swimming pool, and 400m athletics track.

Indoor Stadium:
Multi-purpose indoor facility for badminton, table tennis, basketball, and other indoor sports. Spectator seating for competitions.

Gymnasium:
Modern gym with cardio equipment (treadmills, ellipticals, cycles), strength training equipment (weights, machines), and functional training areas.

Coaching:
Professional coaches for various sports including cricket, football, basketball, swimming, and athletics. Regular training sessions and skill development programs.

Competitions:
Inter-hostel tournaments, inter-NIT sports meets, and external competitions. Annual sports day 'Olympus' showcasing athletic talent across disciplines.`,
      tags: ["Sports", "Fitness", "Athletics", "Health"],
      readTime: 5
    },
    {
      id: 23,
      title: "Health Center",
      category: "Student Life",
      content: `The Health Center provides comprehensive medical care ensuring the well-being of the entire NIT Trichy community including students, faculty, staff, and their families.

Medical Services:
24/7 emergency services, outpatient department with qualified doctors, dental care, basic diagnostic facilities, and minor procedure rooms.

Pharmacy:
Well-stocked pharmacy dispensing medicines at subsidized rates. Availability of common medications and emergency drugs.

Emergency Response:
Ambulance service available round-the-clock for medical emergencies. Tie-ups with nearby hospitals for specialized care and emergencies.

Preventive Care:
Regular health checkups for students, vaccination programs, health awareness campaigns, and disease prevention initiatives.

Mental Health:
Professional counseling services for stress management, academic pressure, personal issues, and general mental well-being. Confidential and supportive environment.`,
      tags: ["Health", "Medical", "Wellness", "Emergency"],
      readTime: 4
    },
    {
      id: 24,
      title: "Entrepreneurship Cell (E-Cell)",
      category: "Student Life",
      content: `The Entrepreneurship Cell nurtures the startup ecosystem at NIT Trichy, providing aspiring entrepreneurs with resources, mentorship, and networking opportunities to transform ideas into successful ventures.

Programs:
Regular workshops on business fundamentals, startup strategies, fundraising, marketing, and legal aspects. Ideation sessions and business plan competitions.

Incubation Support:
Workspace for student startups, mentorship from successful entrepreneurs and alumni, connections with investors and industry experts.

Annual Summit:
Entrepreneurship summit bringing together investors, successful startup founders, industry leaders, and students. Networking and learning opportunities.

Success Stories:
Several successful startups founded by NIT Trichy students in technology, e-commerce, education technology, and social enterprise sectors.

Resources:
Access to business development tools, legal and financial guidance, and connections with angel investors and venture capitalists.`,
      tags: ["Startup", "Entrepreneurship", "Innovation", "Business"],
      readTime: 5
    },
    {
      id: 25,
      title: "Training and Placement Cell",
      category: "Student Life",
      content: `The Training and Placement Cell is instrumental in ensuring excellent career outcomes for NIT Trichy students, maintaining the institute's reputation for outstanding placements.

Placement Record:
Consistent 100% placement across all engineering branches. Average packages ranking among the highest in NITs. Top companies from various sectors visit campus.

Major Recruiters:
Technology giants (Microsoft, Google, Amazon, Adobe), consulting firms (McKinsey, BCG, Deloitte), core engineering companies, banks, and analytics firms.

Pre-Placement Training:
Comprehensive training in aptitude, technical skills, coding, group discussions, and personal interviews. Mock interviews and resume building sessions.

Internships:
Facilitates summer internships providing industry exposure and practical experience. Many internships convert to full-time offers.

Career Guidance:
Counseling on career paths, higher education options, profile building, and skill development. Alumni mentorship programs.`,
      tags: ["Placement", "Career", "Training", "Recruitment"],
      readTime: 5
    },
    {
      id: 26,
      title: "National Service Scheme (NSS)",
      category: "Student Life",
      content: `NSS at NIT Trichy embodies the spirit of social responsibility, engaging students in community service and nation-building activities while developing leadership and citizenship values.

Regular Activities:
Teaching underprivileged children, organizing blood donation camps, environmental conservation projects, cleanliness drives, and awareness campaigns.

Annual Camps:
Week-long camps in rural areas focusing on community development, health awareness, sanitation, education, and skill development. Students live in villages understanding ground realities.

Special Programs:
Women empowerment initiatives, digital literacy programs, health camps, disaster relief participation, and Covid-19 relief activities.

Impact:
Over 500 active volunteers making tangible difference in surrounding communities. Recognition from university and government bodies for exemplary service.

Development:
Builds leadership, empathy, social awareness, and organizational skills. Creates socially conscious engineers committed to national development.`,
      tags: ["Social Service", "NSS", "Community", "Volunteer"],
      readTime: 5
    },
    {
      id: 27,
      title: "Technical Clubs",
      category: "Student Life",
      content: `NIT Trichy hosts numerous technical clubs providing hands-on learning, project experience, and competitive opportunities beyond classroom education.

Major Clubs:
Spider (R&D), Delta Force (Robotics), Coding clubs, Electronics Club, Automobile Club, Astronomy Club, and various department-specific technical societies.

Activities:
Regular workshops on latest technologies, project development, participation in national competitions, hackathons, and technical exhibitions.

Achievements:
Students win prestigious competitions including Smart India Hackathon, ACM ICPC, robotics competitions, and automotive challenges. Innovation and patents emerging from club projects.

Learning:
Practical skills in programming, electronics, mechanical design, web development, data science, and emerging technologies. Senior mentorship and peer learning.

Industry Connect:
Guest lectures by industry experts, collaboration with companies on projects, and exposure to real-world engineering challenges.`,
      tags: ["Technical", "Clubs", "Projects", "Competition"],
      readTime: 5
    },
    {
      id: 28,
      title: "Cultural Clubs",
      category: "Student Life",
      content: `Cultural clubs at NIT Trichy provide platforms for artistic expression, talent development, and cultural enrichment beyond academic pursuits.

Performing Arts:
Music clubs (Indian classical, Western, fusion), dance teams (classical, contemporary, hip-hop), drama and theater groups, and literary societies.

Fine Arts:
Photography club, fine arts and painting, film-making society, and design clubs. Regular exhibitions and showcases of student work.

Events:
Regular performances, open mics, jam sessions, drama productions, and cultural nights. Major performances during Festember and other college events.

Development:
Professional training, workshops by renowned artists, participation in inter-college competitions, and opportunities to perform at major events.

Community:
Vibrant artistic community fostering creativity, collaboration, and cultural appreciation. Students from diverse backgrounds coming together through art.`,
      tags: ["Cultural", "Arts", "Music", "Performance"],
      readTime: 5
    },
    {
      id: 29,
      title: "Department Overview",
      category: "Academic Departments",
      content: `NIT Trichy offers comprehensive education across various engineering disciplines, sciences, and management. Each department maintains high academic standards with experienced faculty, modern infrastructure, and industry connections.

Engineering Departments:
Computer Science (CSE), Electronics and Communication (ECE), Electrical and Electronics (EEE), Mechanical, Civil, Production, Chemical, Metallurgy, and Instrumentation.

Science Departments:
Physics, Chemistry, Mathematics providing strong foundational education and research opportunities in basic sciences.

Other Programs:
Architecture, Management (MBA), and various interdisciplinary programs encouraging holistic learning.

Teaching Excellence:
Experienced faculty with PhDs from reputed institutions, active in research with publications in top journals and conferences. Many faculty members have industry experience.

Research:
