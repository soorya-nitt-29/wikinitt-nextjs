'use client'

import { useState, useEffect, useMemo } from 'react'
import { Search, Moon, Sun, Bookmark, BookmarkCheck, BarChart3, Menu, X, Home, Building2, Hotel, Users, Clock, TrendingUp } from 'lucide-react'

export default function WikiNITT() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const [currentArticle, setCurrentArticle] = useState(null)
  const [bookmarks, setBookmarks] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [showStats, setShowStats] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [recentlyViewed, setRecentlyViewed] = useState([])

  const articles = [
    {
      id: 1,
      title: 'Computer Science and Engineering',
      category: 'Departments',
      icon: '💻',
      content: `The Department of Computer Science and Engineering at NIT Trichy is one of the most prestigious departments in India. Established in 1984, it has consistently maintained its position as a leader in computer science education and research.

The department offers undergraduate, postgraduate, and doctoral programs. The B.Tech program in Computer Science is highly sought after, with an acceptance rate of less than 0.5% making it one of the most competitive programs in the country.

Faculty members are accomplished researchers with publications in top-tier conferences like ICSE, FSE, and journals like IEEE Transactions. Many faculty have received prestigious awards including the Shanti Swarup Bhatnagar Prize.

Research areas include Artificial Intelligence, Machine Learning, Data Science, Software Engineering, Computer Networks, Cybersecurity, and Theoretical Computer Science. The department has state-of-the-art laboratories equipped with modern computing infrastructure.

Students from CSE have been placed in top tech companies like Google, Microsoft, Amazon, and leading startups. The average package is consistently among the highest in the institute. Many alumni have gone on to pursue higher studies at universities like MIT, Stanford, and CMU.

The department actively collaborates with industry partners and research institutions worldwide. Regular workshops, seminars, and guest lectures by industry experts keep students updated with latest technological trends.`,
      quickFacts: {
        'Established': '1984',
        'Programs': 'B.Tech, M.Tech, Ph.D',
        'Students': '600+',
        'Faculty': '40+'
      }
    },
    {
      id: 2,
      title: 'Electronics and Communication Engineering',
      category: 'Departments',
      icon: '📡',
      content: `The Department of Electronics and Communication Engineering has been a cornerstone of NIT Trichy since 1968. The department has evolved continuously to meet the changing demands of the electronics and communication industry.

ECE offers comprehensive programs covering digital electronics, analog circuits, signal processing, communication systems, VLSI design, embedded systems, and wireless communications. The curriculum is regularly updated to incorporate emerging technologies like IoT, 5G, and semiconductor design.

The department boasts excellent laboratory facilities including a Signal Processing Lab, Communication Lab, VLSI Design Lab, Microprocessor Lab, and RF & Microwave Lab. These labs are equipped with industry-standard software and hardware tools.

Research focus areas include Wireless Communications, Signal Processing, VLSI Design, Embedded Systems, Microwave Engineering, and Optical Communications. Faculty members have secured significant research funding from organizations like DST, DRDO, and ISRO.

Students participate in technical competitions, hackathons, and project exhibitions. The department has strong industry connections with companies like Qualcomm, Intel, Texas Instruments, and Analog Devices.

Placement records are excellent with students getting offers from semiconductor companies, telecom giants, software firms, and core electronics companies. Many pursue higher studies in prestigious institutions worldwide.`,
      quickFacts: {
        'Established': '1968',
        'Programs': 'B.Tech, M.Tech, Ph.D',
        'Labs': '12+',
        'Research Projects': '30+'
      }
    },
    {
      id: 3,
      title: 'Mechanical Engineering',
      category: 'Departments',
      icon: '⚙️',
      content: `The Department of Mechanical Engineering is one of the oldest and most established departments at NIT Trichy, founded in 1964. It has maintained excellence in teaching, research, and industry collaboration for over five decades.

The department covers core areas of mechanical engineering including Thermodynamics, Fluid Mechanics, Manufacturing Technology, Machine Design, Robotics, and Mechatronics. The curriculum emphasizes both theoretical knowledge and practical skills.

State-of-the-art facilities include CAD/CAM Lab, Thermal Engineering Lab, Fluid Mechanics Lab, Manufacturing Lab with CNC machines, Robotics Lab, and a well-equipped Machine Shop. Students gain hands-on experience with modern manufacturing technologies.

Research activities span diverse areas like Renewable Energy, Robotics and Automation, Advanced Manufacturing, Computational Fluid Dynamics, Heat Transfer, and Materials Science. The department has collaborations with ISRO, DRDO, and leading automotive companies.

Students actively participate in competitions like SAE BAJA, Formula Student, and Robotics challenges. These experiences complement classroom learning and develop practical engineering skills.

Career opportunities are abundant in automotive, aerospace, manufacturing, energy, and consulting sectors. Major recruiters include Ashok Leyland, Mahindra, Tata Motors, L&T, and multinational corporations. Many graduates pursue advanced degrees abroad.`,
      quickFacts: {
        'Established': '1964',
        'Specializations': '8+',
        'Lab Facilities': '15+',
        'Industry Partners': '50+'
      }
    },
    {
      id: 4,
      title: 'Civil Engineering',
      category: 'Departments',
      icon: '🏗️',
      content: `The Department of Civil Engineering at NIT Trichy has been shaping infrastructure professionals since 1964. The department is committed to creating engineers who can address India's massive infrastructure needs.

The curriculum covers Structural Engineering, Transportation Engineering, Geotechnical Engineering, Water Resources Engineering, Environmental Engineering, and Construction Management. Special emphasis is placed on sustainable and smart infrastructure development.

Modern laboratories include Concrete Technology Lab, Surveying Lab, Geotechnical Lab, Environmental Engineering Lab, Highway Engineering Lab, and Hydraulics Lab. Students work with advanced testing equipment and simulation software.

Faculty members are engaged in cutting-edge research on earthquake-resistant structures, sustainable construction materials, smart cities, water resource management, and environmental remediation. Many projects are funded by government agencies and industry.

The department organizes field visits to major construction sites, dams, and infrastructure projects. These visits provide valuable insights into real-world engineering challenges and solutions.

Graduates find employment in construction companies, infrastructure developers, consulting firms, and government agencies. Companies like L&T, Tata Projects, Shapoorji Pallonji, and PWD actively recruit from the department. Opportunities also exist in urban planning and environmental consultancy.`,
      quickFacts: {
        'Established': '1964',
        'Specializations': '6',
        'Major Projects': '40+',
        'Consultancy Value': '₹5 Cr+'
      }
    },
    {
      id: 5,
      title: 'Electrical and Electronics Engineering',
      category: 'Departments',
      icon: '⚡',
      content: `The Department of Electrical and Electronics Engineering offers comprehensive education in power systems, control systems, and electronics. Established in 1965, it has been at the forefront of electrical engineering education in South India.

The department's curriculum encompasses Power Systems, Power Electronics, Control Systems, Electrical Machines, High Voltage Engineering, and Renewable Energy Systems. Students receive thorough training in both theoretical concepts and practical applications.

Well-equipped laboratories include Power Systems Lab, Electrical Machines Lab, Power Electronics Lab, Control Systems Lab, and High Voltage Lab. Modern simulation tools and equipment ensure students are industry-ready.

Research focuses on Smart Grids, Renewable Energy Integration, Electric Vehicles, Advanced Control Systems, and Power Quality. The department has active collaborations with BHEL, TANGEDCO, and research institutions.

Students participate in projects related to solar energy, wind power, electric mobility, and grid automation. These projects often lead to publications and patents.

Placement opportunities exist in power sector companies, manufacturing firms, automation companies, and core electrical industries. Major recruiters include ABB, Siemens, Schneider Electric, BHEL, and energy utilities. Entrepreneurship in renewable energy is also encouraged.`,
      quickFacts: {
        'Established': '1965',
        'Labs': '10+',
        'Research Areas': '8',
        'Industry Tie-ups': '25+'
      }
    },
    {
      id: 6,
      title: 'Chemical Engineering',
      category: 'Departments',
      icon: '🧪',
      content: `The Department of Chemical Engineering provides education in chemical processes, materials science, and biochemical engineering. Since its establishment in 1977, the department has contributed significantly to chemical engineering education and research.

The academic program covers Chemical Reaction Engineering, Transport Phenomena, Process Control, Biochemical Engineering, Polymer Science, and Petroleum Refining. Students learn to design and optimize chemical processes for various industries.

Advanced laboratory facilities include Unit Operations Lab, Process Control Lab, Chemical Reaction Engineering Lab, and Instrumental Analysis Lab. Students gain experience with pilot-scale equipment and industrial simulation software.

Research areas include Catalysis, Nanomaterials, Biochemical Engineering, Process Intensification, Separation Processes, and Environmental Engineering. Faculty have published extensively in reputed journals and hold patents.

The department maintains strong links with chemical industries, refineries, and pharmaceutical companies. Industrial training and projects provide students with real-world exposure to chemical manufacturing processes.

Career paths include chemical manufacturing, pharmaceuticals, petrochemicals, food processing, environmental consultancy, and research. Companies like Reliance, IOCL, BPCL, Dr. Reddy's, and Cipla recruit graduates. Many also pursue higher studies in chemical engineering and related fields.`,
      quickFacts: {
        'Established': '1977',
        'Programs': 'B.Tech, M.Tech, Ph.D',
        'Research Groups': '6',
        'Publications': '200+ per year'
      }
    },
    {
      id: 7,
      title: 'Agate Hostel',
      category: 'Hostels',
      icon: '🏠',
      content: `Agate Hostel is one of the premier boys' hostels at NIT Trichy, known for its vibrant community and excellent facilities. The hostel accommodates students primarily from the senior batches and creates a conducive environment for both academic and personal growth.

The hostel features spacious rooms with individual study tables, beds, and storage facilities. Common areas include recreation rooms with table tennis and carom boards, TV rooms, and reading rooms for group studies.

Agate has a well-maintained mess that serves nutritious breakfast, lunch, and dinner. The menu is diverse with both North and South Indian cuisines. Special meals are prepared during festivals and celebrations.

The hostel has 24/7 internet connectivity with WiFi access in all rooms and common areas. Power backup ensures uninterrupted study sessions. Water purifiers are installed on every floor.

Cultural activities and sports events are regularly organized by the hostel council. Inter-hostel competitions in sports, debates, and cultural events foster a spirit of healthy competition and camaraderie.

The hostel administration ensures safety and security with night guards and strict entry protocols. The warden and hostel council work together to maintain discipline while creating a friendly atmosphere.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '250+',
        'Floors': '4',
        'Amenities': 'WiFi, Mess, Recreation'
      }
    },
    {
      id: 8,
      title: 'Diamond Hostel',
      category: 'Hostels',
      icon: '💎',
      content: `Diamond Hostel is a well-established boys' hostel known for its strong community bonds and active participation in institute activities. The hostel houses students from various departments and years, creating a diverse and inclusive environment.

Rooms in Diamond are designed to provide comfortable living spaces with adequate ventilation and natural lighting. Each room is equipped with essential furniture including study desks, chairs, beds, and wardrobes.

The hostel mess is managed efficiently with a rotating menu that caters to different taste preferences. Hygiene standards are strictly maintained. Students can provide feedback on food quality through the mess committee.

Diamond Hostel has excellent sports facilities with a dedicated volleyball court and space for outdoor games. Indoor game facilities include chess, carrom, and table tennis tables in the recreation room.

The hostel celebrates major festivals with great enthusiasm. Cultural nights, musical evenings, and movie screenings are organized regularly to provide entertainment and stress relief during exams.

A dedicated study room with extended hours during examination periods helps students prepare effectively. The peaceful environment and supportive peer group contribute to academic success.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '200+',
        'Established': '1990s',
        'Special Feature': 'Volleyball Court'
      }
    },
    {
      id: 9,
      title: 'Jade Hostel',
      category: 'Hostels',
      icon: '🟢',
      content: `Jade Hostel is recognized for its clean and well-maintained premises. The hostel provides a comfortable stay for boys with modern amenities and a supportive community atmosphere.

The infrastructure includes sturdy buildings with well-ventilated rooms. Each floor has common bathrooms that are cleaned regularly. Hot water facilities are available during early morning and evening hours.

Jade's mess serves quality food with attention to nutritional balance. The mess committee actively involves students in menu planning. Special snacks are provided during late-night study sessions before exams.

Internet connectivity is robust throughout the hostel. Students can access high-speed WiFi for academic research, online courses, and staying connected with family and friends.

The hostel council organizes various events including birthday celebrations, festival gatherings, and sports tournaments. These activities help build lasting friendships and create memorable experiences.

Jade maintains a good balance between academic focus and extracurricular activities. The hostel has produced many successful alumni who attribute part of their success to the supportive environment of Jade.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '180+',
        'Facilities': 'WiFi, Hot Water, Mess',
        'Council': 'Active Student Body'
      }
    },
    {
      id: 10,
      title: 'Coral Hostel',
      category: 'Hostels',
      icon: '🪸',
      content: `Coral Hostel offers comfortable accommodation for boys with a focus on creating a homely atmosphere away from home. The hostel is known for its friendly environment and strong alumni network.

Living spaces in Coral are well-designed with proper lighting and ventilation. Rooms are spacious enough for comfortable movement and studying. Regular maintenance ensures all facilities remain in good condition.

The mess provides three meals a day with a variety of dishes. Special attention is given to hygiene and food quality. Students appreciate the homely taste of the food prepared by experienced cooks.

Coral has dedicated spaces for recreation including a common room with television and indoor games. Students often gather here to unwind after classes and build friendships across batches and departments.

The hostel participates actively in inter-hostel competitions, particularly excelling in cultural events and literary activities. The spirit of healthy competition brings the hostel community together.

Safety measures include CCTV surveillance in common areas and main entrances. The hostel warden is accessible and responsive to student concerns, ensuring a secure living environment.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '220+',
        'Strength': 'Strong Alumni Network',
        'Activities': 'Cultural & Literary'
      }
    },
    {
      id: 11,
      title: 'Opal Hostel',
      category: 'Hostels',
      icon: '⚪',
      content: `Opal Hostel is a boys' hostel that combines modern facilities with a traditional sense of community. The hostel environment encourages both academic excellence and personal development.

The architectural design of Opal ensures adequate space and proper air circulation in all rooms. Common corridors are wide and well-lit. The hostel premises are kept clean through regular maintenance by the housekeeping staff.

Opal's mess is known for maintaining consistent food quality. The mess committee works closely with the caterer to address student preferences and dietary requirements. Festival meals are particularly popular among residents.

Sports enthusiasts find Opal an ideal place with facilities for cricket, badminton, and other outdoor games. Inter-hostel sports competitions see enthusiastic participation from Opal residents.

The hostel has a strong tradition of senior-junior mentorship. Seniors guide juniors in academic matters, placements, and higher studies. This mentorship culture creates a supportive ecosystem.

Regular feedback sessions between students and hostel administration ensure that issues are addressed promptly. The democratic functioning of the hostel council gives students a voice in hostel matters.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '200+',
        'Features': 'Mentorship Program',
        'Sports': 'Cricket, Badminton'
      }
    },
    {
      id: 12,
      title: 'Pearl Hostel',
      category: 'Hostels',
      icon: '🔵',
      content: `Pearl Hostel is a boys' hostel distinguished by its excellent maintenance and student-centric approach. The hostel administration prioritizes student comfort and academic success.

Room facilities include individual study lamps, comfortable mattresses, and adequate storage space. Windows are designed to allow natural light while maintaining privacy. Each floor has common areas for informal discussions and group studies.

The mess operates on a feedback-driven model where student opinions are valued. Monthly menu changes keep the food interesting. Hygienic cooking practices are strictly followed with regular health inspections.

Pearl has a well-stocked library in the hostel premises with academic books, magazines, and newspapers. This facility is particularly useful during examination preparation when the central library might be crowded.

Cultural activities are given importance with regular music nights, poetry sessions, and movie screenings. These events provide much-needed breaks from academic pressure and help in stress management.

The hostel council organizes workshops on soft skills, interview preparation, and career guidance. Alumni visits are arranged where successful graduates share their experiences and advice with current students.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '190+',
        'Special': 'Hostel Library',
        'Focus': 'Academic + Cultural'
      }
    },
    {
      id: 13,
      title: 'Ruby Hostel',
      category: 'Hostels',
      icon: '🔴',
      content: `Ruby Hostel is known for its vibrant atmosphere and active student participation in various institute activities. The hostel cultivates leadership qualities and teamwork among its residents.

Infrastructure at Ruby includes well-constructed buildings with earthquake-resistant design. Rooms are adequately sized for single or double occupancy. Electrical fittings and plumbing are regularly inspected and maintained.

The mess at Ruby serves meals that are both nutritious and tasty. Special care is taken during festival seasons with traditional dishes being prepared. Late-night snacks are available during exam periods.

Ruby boasts excellent sports facilities with a dedicated basketball court and space for other outdoor activities. The hostel teams regularly perform well in inter-hostel sports competitions.

The hostel celebrates diversity with students from different states and backgrounds living together harmoniously. Cultural exchange happens naturally through day-to-day interactions and festival celebrations.

Ruby has a strong entrepreneurial spirit with several residents pursuing startup ideas. The hostel environment encourages innovation and creative thinking, supported by peer discussions and mentorship.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '210+',
        'Sports': 'Basketball Court',
        'Culture': 'Entrepreneurial Spirit'
      }
    },
    {
      id: 14,
      title: 'Sapphire Hostel',
      category: 'Hostels',
      icon: '🔷',
      content: `Sapphire Hostel provides quality accommodation with modern amenities for boys. The hostel is appreciated for its cleanliness, discipline, and academic atmosphere.

Living quarters in Sapphire are spacious with provisions for adequate storage and study space. Good ventilation and lighting make rooms comfortable for long study hours. Furniture is sturdy and well-maintained.

The mess service is reliable with timely meals. The menu includes both traditional South Indian fare and popular North Indian dishes. Special dietary requirements are accommodated with advance notice.

Sapphire has strong WiFi connectivity throughout the premises enabling seamless internet access for academic purposes. Power backup systems ensure uninterrupted electricity supply during outages.

The hostel community is close-knit with regular community dinners and gatherings. Birthday celebrations and festival events bring residents together in a spirit of camaraderie and joy.

Sapphire emphasizes academic achievement while also encouraging participation in extracurricular activities. The balanced approach helps in the overall development of students residing in the hostel.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '200+',
        'Connectivity': 'High-Speed WiFi',
        'Atmosphere': 'Academic Focus'
      }
    },
    {
      id: 15,
      title: 'Emerald Hostel',
      category: 'Hostels',
      icon: '🟩',
      content: `Emerald Hostel is a boys' hostel that emphasizes environmental consciousness and sustainable living. The hostel integrates green practices while providing comfortable accommodation.

The hostel buildings incorporate energy-efficient lighting and water conservation measures. Rooms are designed to maximize natural light and air circulation, reducing dependence on artificial lighting and fans.

Emerald's mess focuses on minimizing food waste through proper planning and portion control. Composting of organic waste is practiced. The mess committee educates residents about sustainable food practices.

Green spaces around the hostel provide a refreshing environment. Small gardens and trees create a pleasant atmosphere for evening walks and outdoor studying. Bird watching is a popular hobby among nature enthusiasts.

The hostel actively participates in environmental initiatives like tree plantation drives and cleanliness campaigns. Residents are encouraged to adopt eco-friendly practices in their daily lives.

Beyond environmental focus, Emerald maintains all standard hostel amenities including recreational facilities, study rooms, and internet connectivity. The unique green approach sets it apart while ensuring student comfort.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '180+',
        'Theme': 'Eco-Friendly',
        'Special': 'Green Spaces'
      }
    },
    {
      id: 16,
      title: 'Topaz Hostel',
      category: 'Hostels',
      icon: '🟡',
      content: `Topaz Hostel offers modern living facilities for boys with emphasis on comfort and convenience. The hostel is known for its well-organized administration and responsive management.

Room allocation is done fairly with consideration for student preferences where possible. Each room has proper ventilation, lighting, and basic furniture. Regular pest control and cleaning maintain hygiene standards.

The mess at Topaz operates with transparency in budgeting and menu planning. Students have access to monthly expense reports. The quality-to-price ratio is carefully maintained to ensure value for money.

Topaz provides recreational facilities including indoor games, a music room, and a small gymnasium with basic equipment. These facilities promote physical fitness and stress relief.

The hostel council at Topaz is democratically elected and functions actively. Regular meetings address student concerns and implement improvements. Student feedback is valued and acted upon.

Safety infrastructure includes fire extinguishers on every floor, emergency exits, and first aid facilities. Contact numbers for emergency services and hostel administration are prominently displayed.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '195+',
        'Management': 'Well-Organized',
        'Facilities': 'Gym, Music Room'
      }
    },
    {
      id: 17,
      title: 'Amber Hostel',
      category: 'Hostels',
      icon: '🟠',
      content: `Amber Hostel is characterized by its warm and welcoming environment. The hostel community is known for being inclusive and supportive, making it easy for new students to adapt.

The infrastructure is solid with well-built structures that have stood the test of time. Regular renovations keep the facilities updated. Room sizes are adequate for comfortable living and studying.

Food quality at Amber's mess is consistently good with a focus on home-style cooking. The cooks are experienced and understand student preferences. Meal timings are flexible around class schedules.

Amber has a tradition of celebrating birthdays and achievements of hostel mates. Small gestures like surprise parties and group celebrations create a family-like atmosphere in the hostel.

Academic support is strong in Amber with seniors helping juniors through doubt-clearing sessions and study groups. Past year question papers and study materials are shared freely within the hostel community.

The hostel participates enthusiastically in all inter-hostel events. While winning is appreciated, the focus is more on participation and building team spirit among residents.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '185+',
        'Culture': 'Inclusive & Supportive',
        'Tradition': 'Celebration of Achievements'
      }
    },
    {
      id: 18,
      title: 'Garnet Hostel',
      category: 'Hostels',
      icon: '🔶',
      content: `Garnet Hostel provides comfortable accommodation with a focus on creating a productive academic environment. The hostel is preferred by students who value discipline and focus.

Living spaces are well-maintained with regular cleaning schedules. Rooms are furnished adequately with study tables, chairs, beds, and storage. Natural lighting and ventilation are prioritized in room design.

The mess maintains high standards of cleanliness and food quality. Meal timings are strictly followed to maintain routine. Special meals during festivals add variety to the regular menu.

Garnet has designated quiet hours during which loud activities are restricted to ensure students can study without disturbance. This policy is particularly appreciated during examination periods.

The hostel has good sports facilities with equipment available for basketball, volleyball, and cricket. Regular practice sessions and informal matches keep residents physically active.

Garnet's hostel council works efficiently to resolve issues and implement improvements. The democratic process ensures every resident has a voice in hostel governance.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '175+',
        'Policy': 'Quiet Hours',
        'Sports': 'Multiple Facilities'
      }
    },
    {
      id: 19,
      title: 'Aquamarine Hostel',
      category: 'Hostels',
      icon: '🔷',
      content: `Aquamarine Hostel is known for its serene environment and focus on holistic student development. The hostel provides all essential amenities while fostering a culture of learning and growth.

The hostel architecture incorporates aesthetic elements along with functionality. Rooms are painted in soothing colors creating a calm atmosphere. Large windows provide good natural light and fresh air.

Food service at Aquamarine is managed with attention to nutrition and taste. The mess committee regularly surveys student preferences and adjusts menus accordingly. Hygienic practices are non-negotiable.

Aquamarine promotes cultural activities with regular music sessions, art workshops, and literary events. These activities provide creative outlets and help in stress management.

The hostel has a mentorship program where seniors guide juniors on academic choices, career paths, and life at NITT. This program eases the transition for first-year students.

WiFi connectivity is strong and reliable throughout Aquamarine. Students can pursue online courses, research, and stay connected with family without connectivity issues.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '190+',
        'Focus': 'Holistic Development',
        'Programs': 'Mentorship Active'
      }
    },
    {
      id: 20,
      title: 'Turquoise Hostel',
      category: 'Hostels',
      icon: '🔵',
      content: `Turquoise Hostel offers modern amenities and a progressive approach to hostel management. The hostel is known for being student-friendly while maintaining necessary discipline.

Infrastructure includes well-designed rooms with proper electrical fittings and plumbing. Common areas are spacious and well-lit. Regular maintenance ensures all facilities function properly.

The mess at Turquoise provides varied cuisine with options for different dietary preferences. Vegetarian and non-vegetarian menus run parallel. Food safety and hygiene are top priorities.

Turquoise has excellent recreational facilities including a well-equipped common room with gaming consoles, board games, and comfortable seating. Movie nights are organized regularly.

The hostel actively encourages participation in technical fests, cultural events, and sports competitions. Financial support is provided for students representing the hostel in institute events.

Turquoise maintains an open-door policy where students can approach the administration with concerns or suggestions. This transparent approach builds trust and effective communication.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '205+',
        'Approach': 'Student-Friendly',
        'Recreation': 'Gaming & Movies'
      }
    },
    {
      id: 21,
      title: 'Onyx Hostel',
      category: 'Hostels',
      icon: '⚫',
      content: `Onyx Hostel is recognized for its strong sense of community and excellent facilities. The hostel provides a conducive environment for both academic pursuits and personal growth.

Room facilities include comfortable beds, study desks with adequate lighting, and storage space. Bathrooms are well-maintained with regular cleaning. Hot water is available during designated hours.

Onyx's mess is known for maintaining consistent food quality throughout the year. The menu is balanced with regional variety. Special care is taken during examination periods with extended meal timings.

The hostel has a vibrant sports culture with teams excelling in cricket, football, and athletics. Regular practice sessions and coaching by seniors help develop sporting talent.

Cultural nights at Onyx feature music performances, skits, and dance events. These gatherings showcase hidden talents and provide entertainment during stressful academic periods.

Onyx emphasizes the importance of alumni connections. Regular alumni meets are organized where successful graduates share experiences and provide career guidance to current students.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '200+',
        'Strength': 'Sports Culture',
        'Events': 'Cultural Nights'
      }
    },
    {
      id: 22,
      title: 'Amethyst Hostel',
      category: 'Hostels',
      icon: '🟣',
      content: `Amethyst Hostel is one of the newer boys' hostels with modern infrastructure and facilities. The hostel combines contemporary amenities with a strong community spirit.

The building features modern architecture with spacious rooms and wide corridors. Elevators facilitate easy movement between floors. Rooms are equipped with modern furniture and fittings.

Food service at Amethyst meets high standards with professional caterers managing the mess. Menu variety includes Continental, Chinese, and traditional Indian cuisines. Student feedback is actively incorporated.

Amethyst boasts state-of-the-art recreational facilities including a modern gym, indoor sports complex, and multimedia room. These facilities rival those of professional establishments.

The hostel has robust internet infrastructure with fiber optic connectivity. Multiple WiFi access points ensure seamless coverage throughout the building. This supports online learning and research activities.

Despite being newer, Amethyst has quickly built strong traditions including annual cultural festivals, sports days, and farewell events. The hostel community is enthusiastic and energetic.`,
      quickFacts: {
        'Type': 'Boys Hostel',
        'Capacity': '250+',
        'Status': 'Modern Infrastructure',
        'Internet': 'Fiber Optic'
      }
    },
    {
      id: 23,
      title: 'Pragyan',
      category: 'Student Life',
      icon: '🎓',
      content: `Pragyan is the annual technical festival of NIT Trichy, recognized as one of India's largest and most prestigious technical extravaganzas. Held every March, Pragyan attracts thousands of participants from colleges across the country.

The festival features a wide array of technical events including coding competitions, robotics challenges, engineering design contests, quizzes, and workshops. Events are designed to test knowledge, creativity, and problem-solving abilities.

Pragyan hosts renowned speakers from academia, industry, and research institutions. Past speakers have included scientists, entrepreneurs, tech leaders, and innovators who inspire students with their journeys and insights.

Technical exhibitions showcase cutting-edge projects and innovations. Student teams from various colleges present their work in areas like robotics, AI, sustainable technology, and space science.

Competitions at Pragyan offer substantial prize money and recognition. Winning teams often gain industry attention and recruitment opportunities. Many participants use Pragyan as a platform to network with professionals and peers.

The festival is entirely student-organized with a team of hundreds working throughout the year. This massive undertaking develops organizational, leadership, and teamwork skills among the student coordinators.

Pragyan has grown from a small college fest to a national phenomenon with a legacy spanning decades. The festival represents the technical excellence and innovative spirit of NIT Trichy.`,
      quickFacts: {
        'Type': 'Technical Festival',
        'When': 'March',
        'Duration': '4 Days',
        'Footfall': '30,000+'
      }
    },
    {
      id: 24,
      title: 'Festember',
      category: 'Student Life',
      icon: '🎭',
      content: `Festember is the annual cultural festival of NIT Trichy, celebrated every September with great enthusiasm and grandeur. It stands as one of South India's largest cultural festivals, attracting participants from colleges nationwide.

The festival showcases diverse cultural events including music competitions, dance battles, drama performances, fashion shows, literary events, and fine arts contests. Events cater to all artistic interests and skill levels.

Festember features performances by renowned artists, musicians, bands, and celebrities. Professional shows and concerts create memorable experiences for attendees. The festival has hosted Bollywood stars, famous bands, and celebrated performers.

Cultural nights are legendary with spectacular stage setups, lighting, and sound systems. Theme-based decorations transform the campus into a festive wonderland. The energy and enthusiasm are infectious.

Workshops on various art forms including photography, filmmaking, painting, and music production are conducted by experts. These sessions provide learning opportunities alongside entertainment.

The organizing team works year-round to plan and execute this massive event. From sponsorships to logistics, every detail is managed by students, providing invaluable experience in event management.

Festember promotes cultural exchange and celebrates diversity. Students from different backgrounds come together to participate, perform, and enjoy, creating lasting friendships and memories.`,
      quickFacts: {
        'Type': 'Cultural Festival',
        'When': 'September',
        'Duration': '4 Days',
        'Events': '100+'
      }
    },
    {
      id: 25,
      title: 'Delta Force',
      category: 'Student Life',
      icon: '💻',
      content: `Delta Force is the software development club of NIT Trichy, dedicated to fostering technical skills and innovation among students. The club develops applications, websites, and software solutions for the institute and beyond.

Members work on diverse projects including mobile apps, web platforms, automation tools, and data analytics solutions. Projects often address real campus needs like hostel management systems, event registration platforms, and academic portals.

Delta conducts regular workshops on programming languages, frameworks, and emerging technologies. Topics range from basic web development to advanced machine learning and cloud computing. These sessions are open to all interested students.

The club organizes hackathons and coding competitions that challenge participants to build solutions within limited timeframes. These events promote rapid prototyping, teamwork, and creative problem-solving.

Delta members contribute to open-source projects and maintain the club's GitHub repository. This involvement builds practical coding skills and understanding of collaborative software development practices.

Industry interactions are a key aspect of Delta's activities. Tech talks by professionals, internship opportunities, and mentorship programs connect students with the software industry.

Alumni of Delta have gone on to successful careers at leading tech companies and startups. The skills and experience gained through Delta activities provide a strong foundation for professional growth.`,
      quickFacts: {
        'Type': 'Tech Club',
        'Focus': 'Software Development',
        'Projects': '50+',
        'Members': '200+'
      }
    },
    {
      id: 26,
      title: 'Spider',
      category: 'Student Life',
      icon: '🕷️',
      content: `Spider is the research and development club of NIT Trichy, focusing on emerging technologies and innovative solutions. The club encourages students to explore cutting-edge fields and develop practical applications.

Research domains include Artificial Intelligence, Machine Learning, Robotics, Computer Vision, Natural Language Processing, and Blockchain Technology. Members work on projects that push technological boundaries.

Spider organizes technical workshops, paper presentations, and seminars on advanced topics. These sessions feature both student presentations and invited talks by researchers and industry experts.

The club participates in national and international competitions, hackathons, and innovation challenges. Spider teams have won accolades at prestigious events, bringing recognition to the institute.

Collaboration with industry and research institutions provides Spider members with exposure to real-world problems and professional research environments. Internship opportunities often arise from these connections.

Spider maintains a culture of knowledge sharing where senior members mentor juniors. Project teams are formed across batches, enabling skill transfer and collaborative learning.

The club's projects often result in publications, patents, and startup ideas. Spider serves as an incubator for entrepreneurial ventures in the technology space.`,
      quickFacts: {
        'Type': 'R&D Club',
        'Focus': 'Emerging Tech',
        'Domains': '8+',
        'Achievements': 'National Recognition'
      }
    },
    {
      id: 27,
      title: 'Student Activity Centre',
      category: 'Student Life',
      icon: '🏛️',
      content: `The Student Activity Centre (SAC) is the hub of extracurricular activities at NIT Trichy. This iconic building houses facilities for cultural, technical, and recreational activities, serving as the social heart of campus life.

SAC provides spaces for club meetings, rehearsals, workshops, and events. The building includes auditoriums, conference rooms, practice rooms for music and dance, and open areas for informal gatherings.

Major student clubs and organizations have their offices in SAC. This centralization facilitates collaboration between different groups and makes it easy for students to get involved in multiple activities.

The centre hosts regular events including movie screenings, music nights, comedy shows, and talks. These events provide entertainment and cultural enrichment during weekends and evenings.

SAC is especially vibrant during festival seasons when it becomes the coordination centre for Pragyan and Festember. Teams work round the clock from SAC during peak festival preparation times.

The Student Activity Centre also houses amenities like a cafeteria, printing services, and stationery shop. These facilities cater to student needs and make SAC a convenient one-stop destination.

Beyond physical facilities, SAC represents the spirit of student life at NITT. It's where friendships form, talents develop, and memories are created outside the classroom.`,
      quickFacts: {
        'Type': 'Activity Hub',
        'Facilities': 'Auditoriums, Rooms',
        'Function': 'Cultural & Technical',
        'Status': 'Campus Landmark'
      }
    },
    {
      id: 28,
      title: 'Central Library',
      category: 'Student Life',
      icon: '📚',
      content: `The Central Library of NIT Trichy is a treasure trove of knowledge resources serving the academic and research needs of students and faculty. The library maintains an extensive collection across all engineering disciplines and allied subjects.

The collection includes over 200,000 books, thousands of journals, magazines, and digital resources. Subscriptions to major academic databases like IEEE Xplore, ScienceDirect, and SpringerLink provide access to millions of research papers.

Modern facilities include spacious reading halls with individual study carrels, group discussion rooms, and computer terminals with internet access. Air-conditioned sections ensure comfortable studying during hot summer months.

The library operates on an open access system allowing students to browse shelves freely. A computerized cataloging system helps locate books quickly. Self-checkout facilities speed up the borrowing process.

Digital library resources are accessible both on campus and remotely. Students can download research papers, e-books, and journals from anywhere, facilitating research and project work.

Reference services help students with literature searches, citation management, and research methodology. Librarians conduct orientation sessions for new students explaining library resources and services.

Extended hours during examination periods accommodate student needs. The 24/7 reading room provides a quiet study environment even late at night, appreciated by students preparing for exams.`,
      quickFacts: {
        'Books': '200,000+',
        'Journals': '5,000+',
        'Seating': '500+',
        'Hours': '24/7 Reading Room'
      }
    },
    {
      id: 29,
      title: 'Centre for Career Development',
      category: 'Student Life',
      icon: '💼',
      content: `The Centre for Career Development (CDC) plays a crucial role in shaping the professional futures of NIT Trichy students. The centre manages placements, internships, and career guidance activities throughout the academic year.

Placement season at NITT is highly successful with top companies across sectors visiting campus. Recruiters include technology giants, consulting firms, core engineering companies, startups, and finance institutions.

The CDC organizes pre-placement talks where companies present their profiles and opportunities. These sessions help students make informed decisions about which companies to apply to based on their interests and career goals.

Training programs on aptitude, technical skills, group discussions, and interviews prepare students for placement processes. Mock interviews and resume workshops ensure students present themselves effectively.

Internship opportunities are facilitated for students during summer breaks. Many internships lead to pre-placement offers, giving students an early advantage in securing employment.

The CDC maintains strong industry connections built over decades. Alumni networks also play a role in bringing opportunities to campus. The placement record speaks to the quality of NITT graduates.

Career counseling services help students explore different career paths including higher studies, entrepreneurship, and government services. The CDC supports diverse career aspirations beyond just placements.`,
      quickFacts: {
        'Average Package': '₹15+ LPA',
        'Highest Package': '₹50+ LPA',
        'Placement Rate': '95%+',
        'Recruiters': '300+'
      }
    },
    {
      id: 30,
      title: 'Entrepreneurship Cell',
      category: 'Student Life',
      icon: '🚀',
      content: `The Entrepreneurship Cell (E-Cell) nurtures the startup ecosystem at NIT Trichy by encouraging innovation and entrepreneurial thinking among students. The cell provides resources, mentorship, and platforms for aspiring entrepreneurs.

E-Cell organizes startup competitions where students pitch their business ideas to panels of investors, entrepreneurs, and industry experts. Winners receive seed funding and mentorship to develop their ventures.

Workshops on business planning, marketing, finance, and legal aspects of startups equip students with entrepreneurial knowledge. Sessions feature successful entrepreneurs sharing their journey and lessons learned.

The cell facilitates connections with investors, incubators, and accelerators. Students with promising ideas can access networks that help transform concepts into viable businesses.

Regular speaker series brings accomplished entrepreneurs to campus. These interactions inspire students and provide insights into the challenges and rewards of building startups.

E-Cell supports student-run ventures by providing workspace, initial funding, and advisory support. Several successful startups have emerged from NITT through E-Cell's initiatives.

The entrepreneurial culture promoted by E-Cell encourages students to think beyond traditional career paths and consider creating their own opportunities through innovation and enterprise.`,
      quickFacts: {
        'Type': 'Student Body',
        'Focus': 'Entrepreneurship',
        'Events': 'Startup Competitions',
        'Support': 'Mentorship & Funding'
      }
    },
    {
      id: 31,
      title: 'National Service Scheme',
      category: 'Student Life',
      icon: '🤝',
      content: `The National Service Scheme (NSS) at NIT Trichy embodies the spirit of social service and community engagement. NSS volunteers contribute to society through various outreach programs and development activities.

Regular activities include teaching underprivileged children, conducting health awareness camps, organizing blood donation drives, and environmental conservation initiatives. These activities create positive social impact.

Annual special camps take volunteers to rural areas where they work on community development projects. Activities range from building infrastructure to promoting literacy and health awareness.

NSS collaborates with NGOs, government agencies, and local communities to identify needs and implement effective interventions. This ensures that efforts are directed where they can make the most difference.

Participation in NSS develops empathy, social responsibility, and leadership skills among students. The experience broadens perspectives beyond academic and career concerns.

The unit organizes disaster relief efforts during calamities, collecting funds and essential supplies for affected regions. The quick mobilization capability showcases the organizational strength of NSS.

NSS provides a platform for students who wish to contribute to societal betterment. The satisfaction of making a positive difference motivates sustained engagement with social service.`,
      quickFacts: {
        'Type': 'Service Organization',
        'Volunteers': '500+',
        'Activities': 'Social Service',
        'Impact': 'Community Development'
      }
    },
    {
      id: 32,
      title: 'Forge',
      category: 'Student Life',
      icon: '🔧',
      content: `Forge is the hardware and electronics club of NIT Trichy, dedicated to hands-on learning and practical implementation of engineering concepts. The club provides opportunities to work with electronic components, microcontrollers, and mechanical systems.

Members engage in projects involving robotics, automation, IoT devices, and embedded systems. Projects range from simple LED displays to complex autonomous robots and smart home systems.

Forge conducts workshops on electronics, PCB design, Arduino programming, 3D printing, and fabrication techniques. These sessions enable students to acquire practical skills complementing theoretical classroom knowledge.

The club maintains a well-equipped workshop with tools, components, and equipment. Students have access to soldering stations, 3D printers, oscilloscopes, and other resources needed for hardware projects.

Forge teams participate in competitions like robotics challenges, hardware hackathons, and innovation contests. Successes in these events demonstrate the technical capabilities of club members.

Collaboration between electrical, mechanical, and computer science students happens naturally in Forge. This interdisciplinary approach mirrors real-world engineering practices.

The club culture emphasizes learning by doing. Mistakes are viewed as learning opportunities, and experimentation is encouraged. This environment builds confidence in hardware development.`,
      quickFacts: {
        'Type': 'Hardware Club',
        'Focus': 'Electronics & Robotics',
        'Facilities': 'Workshop & Tools',
        'Projects': 'IoT, Automation'
      }
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (currentArticle) {
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100
        setReadingProgress(Math.min(scrollPercentage, 100))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentArticle])

  const filteredArticles = useMemo(() => {
    let filtered = articles

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(article => article.category === categoryFilter)
    }

    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }, [searchQuery, categoryFilter])

  const toggleBookmark = (articleId) => {
    setBookmarks(prev =>
      prev.includes(articleId)
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    )
  }

  const openArticle = (article) => {
    setCurrentArticle(article)
    setCurrentView('article')
    setReadingProgress(0)
    setRecentlyViewed(prev => {
      const filtered = prev.filter(id => id !== article.id)
      return [article.id, ...filtered].slice(0, 5)
    })
    window.scrollTo(0, 0)
  }

  const goHome = () => {
    setCurrentView('home')
    setCurrentArticle(null)
    setSearchQuery('')
  }

  const getReadingTime = (content) => {
    const words = content.split(/\s+/).length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }

  const renderArticleContent = (content) => {
    const paragraphs = content.split('\n\n')
    return paragraphs.map((para, idx) => {
      const linkedPara = para.split(' ').map((word, wordIdx) => {
        const cleanWord = word.replace(/[.,!?;:]/g, '')
        const linkedArticle = articles.find(a =>
          a.title.toLowerCase().includes(cleanWord.toLowerCase()) &&
          cleanWord.length > 3
        )

        if (linkedArticle && linkedArticle.id !== currentArticle?.id) {
          return (
            <span key={wordIdx}>
              <button
                onClick={() => openArticle(linkedArticle)}
                className="text-purple-600 dark:text-purple-400 hover:underline font-medium transition-colors"
              >
                {word}
              </button>{' '}
            </span>
          )
        }
        return word + ' '
      })

      return (
        <p key={idx} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          {linkedPara}
        </p>
      )
    })
  }

  const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:rotate-12">
      <path d="M20 2L35 11V29L20 38L5 29V11L20 2Z" fill="url(#gradient)" stroke="white" strokeWidth="2"/>
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">W</text>
      <defs>
        <linearGradient id="gradient" x1="5" y1="2" x2="35" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6"/>
          <stop offset="1" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
    </svg>
  )

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50'}`}>
      {currentArticle && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-50">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      )}

      <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={goHome} className="flex items-center space-x-3 group">
              <Logo />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  WikiNITT
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Encyclopedia of Excellence</p>
              </div>
            </button>

            <nav className="hidden md:flex items-center space-x-1">
              {[
                { label: 'Home', icon: Home, filter: 'all' },
                { label: 'Departments', icon: Building2, filter: 'Departments' },
                { label: 'Hostels', icon: Hotel, filter: 'Hostels' },
                { label: 'Student Life', icon: Users, filter: 'Student Life' }
              ].map(({ label, icon: Icon, filter }) => (
                <button
                  key={filter}
                  onClick={() => { goHome(); setCategoryFilter(filter); }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    categoryFilter === filter
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowStats(!showStats)}
                className="p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors"
                title="Statistics"
              >
                <BarChart3 size={20} className="text-purple-600 dark:text-purple-400" />
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors"
                title="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-purple-600" />
                )}
              </button>
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors"
              >
                {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {showMobileMenu && (
            <nav className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
              {[
                { label: 'Home', filter: 'all' },
                { label: 'Departments', filter: 'Departments' },
                { label: 'Hostels', filter: 'Hostels' },
                { label: 'Student Life', filter: 'Student Life' }
              ].map(({ label, filter }) => (
                <button
                  key={filter}
                  onClick={() => { goHome(); setCategoryFilter(filter); setShowMobileMenu(false); }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    categoryFilter === filter
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'hover:bg-purple-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {showStats && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-900/30 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Statistics Dashboard
              </h2>
              <TrendingUp className="text-purple-600" size={24} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold">{articles.length}</div>
                <div className="text-sm opacity-90 mt-1">Total Articles</div>
              </div>
              <div className="p-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold">{bookmarks.length}</div>
                <div className="text-sm opacity-90 mt-1">Bookmarked</div>
              </div>
              <div className="p-5 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold">
                  {articles.filter(a => a.category === 'Departments').length}
                </div>
                <div className="text-sm opacity-90 mt-1">Departments</div>
              </div>
              <div className="p-5 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold">
                  {articles.filter(a => a.category === 'Hostels').length}
                </div>
                <div className="text-sm opacity-90 mt-1">Hostels</div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'home' ? (
          <>
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500" size={22} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-lg transition-all text-lg"
                />
              </div>
            </div>

            {bookmarks.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  📌 Bookmarked Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {articles.filter(a => bookmarks.includes(a.id)).slice(0, 3).map((article) => (
                    <div
                      key={article.id}
                      onClick={() => openArticle(article)}
                      className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-purple-200 dark:border-purple-800 cursor-pointer hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{article.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 dark:text-white truncate">{article.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{article.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => openArticle(article)}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer transform hover:-translate-y-2"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform">
                        {article.icon}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleBookmark(article.id)
                        }}
                        className="p-2 hover:bg-purple-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        {bookmarks.includes(article.id) ? (
                          <BookmarkCheck size={20} className="text-purple-600" />
                        ) : (
                          <Bookmark size={20} className="text-gray-400" />
                        )}
                      </button>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm rounded-full font-medium">
                        {article.category}
                      </span>
                      <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Clock size={14} className="mr-1" />
                        {getReadingTime(article.content)}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                      {article.content.substring(0, 150)}...
                    </p>
                  </div>
                  <div className="px-6 pb-4">
                    <div className="text-purple-600 dark:text-purple-400 text-sm font-medium group-hover:translate-x-2 transition-transform inline-block">
                      Read more →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700">
            <button
              onClick={goHome}
              className="mb-6 text-purple-600 dark:text-purple-400 hover:underline flex items-center space-x-2 font-medium transition-colors"
            >
              <span>←</span>
              <span>Back to Home</span>
            </button>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500
