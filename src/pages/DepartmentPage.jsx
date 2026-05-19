import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { BookOpen, Target, Users, Trophy, Handshake, FileText, Activity, Heart } from "lucide-react";

// Faculty Images
import imgUtkarsha from "../../assets/comp/Prof. Utkarsha Gode.jpg";
import imgMrunali from "../../assets/comp/Prof. Mrunali Gajbhiye.jpg";
import imgLeena from "../../assets/comp/prof. Leena Pimple.jpg";
import imgVishal from "../../assets/comp/Prof. Vishal  Sontakke.jpg";
import imgPranali from "../../assets/comp/Prof. Pranali Wanjari.jpg";
import imgAshwini from "../../assets/comp/Prof. Ashwini Bondre.jpg";
import imgNikhil from "../../assets/comp/Prof. Nikhil Surkar.jpg";
import imgShivam from "../../assets/comp/Prof. Shivam dandekar.jpg";
import imgRiya from "../../assets/comp/Prof. Riya Bansod.jpg";
import imgHOD from "../../assets/comp/LowleshYadav.jpeg";
import imgJayshree from "../../assets/comp/jayshree.png";

// Syllabus PDFs
import syl12 from "../../assets/comp/CE syllabus 1st & 2nd semester.pdf";
import syl3 from "../../assets/comp/3rd sem syllabus.pdf";
import syl4 from "../../assets/comp/4th sem syllabus.pdf";
import syl5 from "../../assets/comp/5th sem syallabus.pdf";
import syl6 from "../../assets/comp/6th sem syallabus.pdf";
import syl7 from "../../assets/comp/CBCS 7th Sem Syllabus Computer Engineering_compressed.pdf";
import syl8 from "../../assets/comp/CBCS 8th Sem Syllabus Computer Engineering.pdf";

const departmentData = {
  "computer-engineering": {
    vision: "To emerge as a center of excellence in computer engineering by fostering academic excellence, innovative research, and entrepreneurial skills, empowering graduates to address global challenges and contribute to the advancement of technology and society.",
    mission: [
      "To foster an academic and professional environment that nurtures research, innovation, and entrepreneurial skills in computer engineering.",
      "To cultivate a culture of responsibility, ethics, and accountability among students to prepare them for real-world challenges.",
      "To collaborate with renowned academic, research institutions, and industry partners at national and international levels to enhance students' problem-solving capabilities and technical expertise"
    ],
    peos: [
      { title: "Academic and Professional Excellence", description: "Graduates will excel in their careers by acquiring a strong foundation in computer engineering concepts, complemented by continuous learning and adaptability to technological advancements." },
      { title: "Collaboration and Leadership", description: "Graduates will work collaboratively across multidisciplinary teams, contributing as leaders or team members in academic, research, and industrial environments at national and international levels." },
      { title: "Innovation and Lifelong Learning", description: "Graduates will engage in lifelong learning, innovate in their professional pursuits, and contribute to the development of sustainable and technology-driven solutions for society." }
    ],
    psos: [
      { title: "Proficiency in Software and Systems Development", description: "Apply programming skills, software development methodologies and tools to design and develop efficient, secure, and user-centric software solutions." },
      { title: "Innovative Thinking and Problem-Solving", description: "Utilize technical expertise, innovative approaches, and analytical skills to design solutions for complex real-world problems, while adhering to ethical and environmental considerations." }
    ],
    cos: [
      { id: "CO1", title: "Engineering Knowledge", description: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems." },
      { id: "CO2", title: "Problem Analysis", description: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences." },
      { id: "CO3", title: "Design/Development of Solutions", description: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations." },
      { id: "CO4", title: "Conduct Investigations of Complex Problems", description: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions." },
      { id: "CO5", title: "Modern Tool Usage", description: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
      { id: "CO6", title: "The Engineer and Society", description: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
      { id: "CO7", title: "Environment and Sustainability", description: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." },
      { id: "CO8", title: "Ethics", description: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
      { id: "CO9", title: "Individual and Team work", description: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings." },
      { id: "CO10", title: "Communication", description: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
      { id: "CO11", title: "Project Management and Finance", description: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
      { id: "CO12", title: "Life-long Learning", description: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." }
    ],
    syllabus: [
      { name: "1st & 2nd Semester", file: syl12 },
      { name: "3rd Semester", file: syl3 },
      { name: "4th Semester", file: syl4 },
      { name: "5th Semester", file: syl5 },
      { name: "6th Semester", file: syl6 },
      { name: "7th Semester", file: syl7 },
      { name: "8th Semester", file: syl8 }
    ],
    hod: {
      name: "Dr. Lowlesh Yadav",
      title: "H.O.D. (Computer Engineering)",
      image: imgHOD,
      details: [
        { label: "Post Doctoral", value: "Lincoln University College Malaysia -2026" },
        { label: "PhD", value: "Computer Science and Engineering – 2024" },
        { label: "PG", value: "M.Tech in CSE" },
        { label: "UG", value: "B.E in IT" },
        { label: "Diploma", value: "IT" },
        { label: "Experience", value: "14 Years" }
      ]
    },
    faculty: [
      { name: "Prof. Jayshree Gorakh", qualification: "M.Tech", experience: "7 Yrs", image: imgJayshree },
      { name: "Prof. Utkarsha Gode", qualification: "M.Tech", experience: "4.5 Yrs", image: imgUtkarsha },
      { name: "Prof. Mrunali Gajbhiye", qualification: "M-Tech", experience: "6 Yrs", image: imgMrunali },
      { name: "Prof. Leena Pimple", qualification: "M.Tech", experience: "Industrial 4 yrs, Teaching 1 yr", image: imgLeena },
      { name: "Prof. Vishal Sontakke", qualification: "M.Tech (Pursuing)", experience: "2 yrs (Teaching)", image: imgVishal },
      { name: "Prof. Pranali Wanjari", qualification: "M.Tech", experience: "-", image: imgPranali },
      { name: "Prof. Ashwini Bondre", qualification: "B.Tech", experience: "2 yrs (Industrial)", image: imgAshwini },
      { name: "Prof. Nikhil Surkar", qualification: "B.Tech", experience: "1 Yr. (Teaching)", image: imgNikhil },
      { name: "Prof. Shivam Dandekar", qualification: "B.Tech", experience: "1 yr (Industrial)", image: imgShivam },
      { name: "Prof. Riya Bansod", qualification: "M.Tech (Pursuing)", experience: "2 Yrs (Teaching)", image: imgRiya }
    ],
    projects: [
      {
        year: "2025-2026",
        items: [
          "AI Driven Skin Disease Detector.",
          "AR Veda.",
          "AI Based Career Coach.",
          "Smart Ambulance with Traffic Clearance System.",
          "Food Donation Portal Using AI & ML.",
          "Real Time Social Media Sentiment Analysis Using ML & NLP.",
          "Urban Pulse Smart Local Issue Reporter with AI Categorizer.",
          "Real Time Sign Language Translation.",
          "Personalized Learning Path Recommender.",
          "Interview Performance Analyzer.",
          "Flutter Based Digital Class Room.",
          "Lung Cancer Image Segmentation using image processing.",
          "Bitcoin Payment Gateway with Lightning Network Integration.",
          "AI Power SEO optimization Agent for Agencies.",
          "Development of real-time Monitoring & Safety Protection.",
          "System to Accident Precaution AgriGuard Smart Crop.",
          "CoustLine (CLI+Web Based).",
          "IOT Product Portal with Integrated Plagiarism report system.",
          "Blockchain based data integrity verification within cloud storage.",
          "Visual Uniform Analysis using AI & ML.",
          "Home Automation without Voice & Gesture Control."
        ]
      },
      {
        year: "2023-2024",
        items: [
          "Human Posture Mimicry Project",
          "Centralized Customer Feedback [Patent]",
          "Roadside symbol Detection System (Patent)",
          "Wheel Chair (Brain + Facial expression eye direction)",
          "Project Management Portal",
          "Implementation of IOT based Smart Assistance Gloves for Disabled People",
          "GPS based vehicle behavior monitoring system & challan generation with privacy (Patent)",
          "Vehicle tire air pressure monitoring system",
          "Advanced Driver Alert System for road hypnosis Avoidance (Patent)",
          "Vehicle Antitheft Protection + Black box + Driver Assistance",
          "Driver Drowsiness System",
          "Weather Station",
          "Multi Terrain Remote Operated Mars-Rover",
          "RFID based Water Dispenser System"
        ]
      },
      {
        year: "2022-2023",
        items: [
          "Smart Spirometer System",
          "Digital Visiting Card",
          "DTMF Controlled Electric Appliances With Feedback Notification",
          "Running Square Meter Counting Scale",
          "Real time sign language detection",
          "Smart Receptionist",
          "Women Safety Application",
          "Automatic Window Opening Using LPG Detection",
          "Iot Driven Traffic Signal System",
          "Bluetooth Control Pesticide Sprinkler Robot",
          "Iot based solar panel monitoring system",
          "Ultrasonic Based Object Detection And Security System",
          "Iot Based Garden Watering System",
          "Industrial Energy Audit And Statistics Analysis System",
          "Miss Call Driven Node Tracking System Using Gps",
          "Gesture Controlled Robot",
          "Online Booking Solution For Advertisement & Holding"
        ]
      }
    ],
    achievements: [
      {
        session: "2025-2026",
        items: [
          { name: "Nishka, Samrit, Neha Deshmukh, Safal Pal", year: "2nd Year", activity: "1st Rank in Project Expo at Agnihotri College, Wardha", date: "01/04/2026" },
          { name: "Team Code_VibeX", year: "2nd Year", activity: "1st Prize in INNOVATEATHON (TGPCET) - AI-Driven Civic Infrastructure Monitoring System", date: "30/03/2026" },
          { name: "Team Code_VibeX", year: "2nd Year", activity: "1st Prize in Ideathon (Priyadarshini Bhagwati College) - Smart AI Glove for Patient Health Monitoring", date: "25/03/2026" },
          { name: "Nishka, Samrit, Neha Deshmukh, Safal Pal", year: "2nd Year", activity: "1st Prize at Project Expo (TGPCET) - Advanced Smart Helmet with Real-Time Accident Monitoring", date: "24/03/2026" },
          { name: "Khushi Jambhulkar", year: "2nd Year", activity: "1st Prize in Tug of War competition at YCCE", date: "27/02/2026" },
          { name: "Fuzail Sheikh", year: "2nd Year", activity: "Winner at Enigma 2.0 Hackathon (YASH 26.0, YCCE, Nagpur)", date: "26-27/02/2026" },
          { name: "Sahil Charlewar", year: "2nd Year", activity: "2nd Prize in Open Mic (Singing) competition at TGPCET, Nagpur", date: "-" },
          { name: "Pravin Bangar & Team", year: "2nd Year", activity: "PowerBI Workshop in ETC Dept (3rd Rank)", date: "30/12/2025" },
          { name: "Ashiwarya Dhole", year: "2nd Year", activity: "District Level Science Fair (2nd Position) - Smart Washroom Device, Iotronics Kit, SIH Project", date: "22/12/2025" },
          { name: "Safal Pal, Nishka Samrit", year: "2nd Year", activity: "Project/Model Making Competition (1st Rank)", date: "15/09/2025" },
          { name: "Saniya Meshram", year: "-", activity: "Painting and Idols Showcase (1st Rank)", date: "03/09/2025" },
          { name: "Harshada Lakhe, Kunal Panche, Piyush Chafle", year: "4th & 2nd Year", activity: "Technofest 15.0 Hackathon (1st Rank)", date: "23/08/2025" },
          { name: "Prajwal Vijay Meshram", year: "2nd Year", activity: "Javelin Throw (3rd Rank)", date: "20/08/2025" },
          { name: "Shwetank Burudkar, Sahil Charlewar, Shravni Pawar, Nishika Samrit, Shravni Manmode", year: "2nd Year", activity: "Krishnanomic (2nd Rank)", date: "20/08/2025" },
          { name: "Janhavi Tatkade, Safal Pal, Nishika Samrit", year: "2nd Year", activity: "Hack the Hardware (3rd Rank)", date: "19/08/2025" },
          { name: "Riddhi Dapkosh", year: "-", activity: "Arthshila 2.0 (1st Rank)", date: "11/07/2025" }
        ]
      },
      {
        session: "2024-2025",
        items: [
          { name: "Kunal Panche, Siddharth Parihar, Hitesh Mankar, Piyush Chafle, Khushi Rokade", year: "3rd Year", activity: "Hackathon at St. Vincent Pallotti (Winner)", date: "21/01/2025" },
          { name: "Kunal Panche, Siddharth, Hitesh, Piyush", year: "3rd Year", activity: "Encryptia Hackathon at Government Polytechnic", date: "24/10/2024" },
          { name: "Kunal Panche, Siddharth Parihar, Hitesh Mankar", year: "3rd Year", activity: "Startup Expo at St. Vincent Pallotti (1st Runner-up)", date: "19/10/2024" },
          { name: "Sahyog Thawkar", year: "2nd Year", activity: "CodeCraze at SCET", date: "08/10/2024" },
          { name: "Sahyog Thawkar", year: "2nd Year", activity: "Quiz Competition at SCET", date: "07/10/2024" },
          { name: "Prajakta Zod", year: "2nd Year", activity: "Quiz Competition at SCET", date: "07/10/2024" },
          { name: "Arpita Bhagat", year: "2nd Year", activity: "Quiz Competition at SCET", date: "07/10/2024" },
          { name: "Kunal Panche", year: "3rd Year", activity: "Techshastra at S.B. Jain Institute Nagpur", date: "05/10/2024" },
          { name: "Kunal Panche, Siddharth, Hitesh, Piyush, Rajat, Khushi", year: "3rd Year", activity: "Abhudaya Hackathon 4.0 (Reshimbag Maidan)", date: "29/09/2024" },
          { name: "Prajakta Zod", year: "2nd Year", activity: "Abhudaya Speech Competition", date: "29/09/2024" },
          { name: "Gaurav Borkar", year: "2nd Year", activity: "Ideathon 2024", date: "26/09/2024" },
          { name: "Kunal Panche", year: "3rd Year", activity: "Tata Crucible Campus Quiz", date: "18/09/2024" },
          { name: "Shantanu Kholkute", year: "4th Year", activity: "Arena: Minds in Motion", date: "04/09/2024" },
          { name: "Kunal Panche", year: "3rd Year", activity: "Tech Quiz Flipkart Grid", date: "27/08/2024" },
          { name: "Kunal Panche, Siddharth Parihar, Hitesh Mankar, Piyush Chafle", year: "3rd Year", activity: "Smackathon at YCCE Nagpur", date: "23/08/2024" },
          { name: "Computer Engineering Students", year: "-", activity: "Hackathon at G.H Raisoni College of Engineering (Winner)", date: "-" },
          { name: "Kunal Panche, Siddharth, Hitesh, Piyush", year: "3rd Year", activity: "Hackathon at Jhulelal Institute of Technology Nagpur", date: "-" },
          { name: "Kunal Panche, Siddharth, Hitesh, Piyush", year: "3rd Year", activity: "Ideathon (2nd runner up), KDK College of Engineering and Technology", date: "-" },
          { name: "Kunal Panche", year: "3rd Year", activity: "Awarded as CAD Mastermind, at SCET", date: "-" },
          { name: "Kunal Panche", year: "3rd Year", activity: "Ideathon Winner at SCET", date: "-" }
        ]
      }
    ],
    mous: [
      {
        organization: "Anishree Technology LLP,Nagpur.",
        date: "06/12/2024(2024-25)",
        purpose: "Industrial Training & visit, Internship and Placement of Students, skill Development, Faculty Development Program, Guest Lectures."
      }
    ],
    nss: [
      { event: "International Yoga Day", date: "21/6/2025", description: "On 21 June 2024, International Yoga Day was conducted by National Service Scheme (NSS) unit at Suryodaya College of Engineering & Technology, Guest lecture organized by yogacharya Dr. Bharat Gupta.", students: 80 },
      { event: "Tree Plantation(\"Ek Ped Maa ke Naam\")", date: "4/7/2024", description: "The NSS unit of Suryodaya College of Engineering and Technology organized two tree plantation programs on 4th July 2024. A total of 30 saplings were planted within the campus premises with the aim of promoting environmental awareness environment.", students: 50 },
      { event: "Gandhi Jayanti", date: "2/10/2024", description: "The NSS unit of Suryodaya College of Engineering and Technology celebrated Gandhi Jayanti on 2nd October 2024 to honor the birth anniversary of Mahatma Gandhi. The program included a cleanliness drive, a tribute ceremony, and speeches highlighting Gandhiji’s principles of non-violence, truth, and self-discipline. Students and faculty actively participated, reflecting on the relevance of Gandhian values in today’s society.", students: 80 },
      { event: "Mahaparinirvan Divas", date: "6/12/2024", description: "The NSS unit of Suryodaya College of Engineering and Technology organized a program on Mahaparinirvan Divas on 6th December 2024 to pay tribute to Dr. B.R. Ambedkar, the architect of the Indian Constitution.", students: 40 },
      { event: "Blood Donation Camp", date: "11/12/2024", description: "A Blood Donation Camp was organized on 11th December 2024 to promote the spirit of social responsibility and voluntary service among students and staff. The event witnessed enthusiastic participation and successful collection of blood units to support local blood banks and save lives.", students: 55 }
    ],
    activities: [
      { event: "Ophthalmology (Eye Check-Up Camp)", date: "07/07/2025", description: "The Department of Computer Engineering organized an Ophthalmology (Eye Check-Up) Camp to promote health awareness among students and staff. In collaboration with certified eye specialists, the camp offered free eye screening, vision testing, and consultation services", students: "44" },
      { event: "Debugging competition", date: "16/07/2025", description: "The Computer Engineering Department proudly organized a Debugging Competition under the guidance of Prof. Nikhil Surkar, aimed at enhancing students' logical thinking, problem-solving abilities, and programming accuracy.", students: "60" },
      { event: "Seminar on Recent Technology", date: "22/07/2025", description: "The Department of Computer Engineering organized a seminar on Recent Technologies with a focus on DevOps, Artificial Intelligence (AI), Generative AI, and Data Analytics. The session was delivered by Mr. Raghav Shrivastav, an expert in emerging technologies and industry practices.", students: "55" },
      { event: "Logo Making compettion", date: "13/08/2025", description: "The Computer Engineering Department organized a Logo Making Competition for the ACES (Association of Computer Engineering Students) to encourage creativity and design skills among students. Participants showcased their innovative ideas by designing unique logos representing the spirit and vision of ACES.", students: "15" },
      { event: "REIMAGINE UI/UX Competition", date: "20/08/2025", description: "A Reimagine UI/UX competition is a design challenge where participants rethink and redesign an existing product, app, or website’s interface and experience to make it more innovative, user-friendly, and visually appealing.", students: "26 Groups" },
      { event: "Zhumba Activity", date: "21/08/2025", description: "The Department of Computer Engineering, Suryodaya College of Engineering & Technology, organized a Zumba Activity exclusively for girl students and female faculty, The program aimed to promote fitness, well-being and stress-relief among students.", students: "40" },
      { event: "Infosys workshop (4th yr)", date: "18/08/2025 to 31/08/2025", description: "Suryodaya College of Engineering organized a 15-day Infosys Workshop to enhance students’ professional and technical skills. Students from the Computer Engineering Department actively participated in the program. The training covered diverse topics such as Soft Skills and Employability Skills, Digital Literacy, Interview and Communication Skills etc.", students: "58" },
      { event: "Badminton championship", date: "30/08/2025", description: "Tushar herde(1st rank) Atharva THakre(2nd rank). The Badminton Championship hosted by the Computer Department was a highly enjoyable and spirited event. It provided students with an opportunity to engage in a healthy and energetic sport, promoting both physical fitness and mental focus.", students: "30 teams" },
      { event: "Guest lecture presented by Shishir sir", date: "15/09/2025", description: "Topic: INTERUNSHIP in IT: Gateway to future carrer success", students: "55" },
      { event: "Alumina talk presented by shrishti Mourya", date: "22/12/2025", description: "Topic: career Guidance sharing her exp. As a software tester in Flextrade india Pvt. Ltd.", students: "70" },
      { event: "Alumina talk presented by Ayush Khadgi", date: "26/12/2025", description: "Topic: sharing his exp. In IT company", students: "68" },
      { event: "Guest lecture presented by pravin Balbudhe sir", date: "3/1/2026", description: "Topic: Industry expectation vs academic preparation", students: "59" },
      { event: "National youth day (under NSS)", date: "12/01/2026", description: "-", students: "-" },
      { event: "Event organized by Jayshree Gorakh mam", date: "12/01/2026", description: "Topic: Kite making and Flying competition", students: "18" },
      { event: "National Conference organized by computer Department", date: "3/02/2026", description: "First Prize goes to final year computer engg. Team 1. Aditya Sonone 2. Hitanshu Deshmukh 3. Lalit kumar Patle 4.Bhushan Bhavik", students: "-" },
      { event: "Guest lecture Event by Utkarsha Gode mam", date: "11/2/2026", description: "Topic: Digital skill Development using AI resource person: Mr. Ajinkya Daberao(Founder and SEO SkillNEU) and Miss. Ankruti Bajirao(Founder & Director SkillNEU)", students: "40" },
      { event: "Guest lecture Event organized by CE and CSE(DS)Dept", date: "16/02/26", description: "Resource person : Dr. Manish Gudhade. Topic: role of Bloom’s Taxonomy in morden pedagogy This session aims to provide in-depth understanding of Bloom’s Taxonomy.", students: "-" },
      { event: "Guest lecture Event organized by CE Dept.", date: "18/03/2026", description: "Resource person: Dr. Lowlesh Yadav sir. A lecture on Copyright was conducted on 18th March 2026 by Dr. Lowlesh Yadav for 3rd and 4th year students. The session explained the importance of protecting original work and avoiding copyright violations. Real-life examples were discussed to improve understanding. Overall, the lecture was informative and enhanced students’ knowledge of intellectual property rights.", students: "-" },
      { event: "National Conference", date: "3/02/2026", description: "A National Conference was organized at Suryodaya College of Engineering and Technology on 3rd February 2026. The event provided a platform for academicians, researchers, and students to share their knowledge and research ideas. Various technical papers and innovative concepts were presented during the conference.", students: "-" },
      { event: "Guest lecture Event organized by CE Dept.", date: "7/4/2026", description: "Topic: TCS NQT and TCS CODEVITA In this guest lecture covering preparation strategies, coding skill and give tips to crack top company placement.", students: "68" },
      { event: "Face the panel: Mock interview session Event organized by CE Dept.", date: "15/04/2026", description: "Resource person: shweta pali mam, Shailesh Birthariya Sir, Priyanka Nanorkar mam, Pankaj Patil Sir, Titarmare Sir. The objective of the “Face the Panel” event was to prepare students for real-world placement interviews by providing hands-on experience through mock interview sessions. The event aimed to reduce interview anxiety and build confidence by simulating actual HR and technical interview scenarios.", students: "-" },
      { event: "13th International Conference on Techtrends in Science, Engineering & Management (ICTTSEM) And project compettion", date: "21/04/2026 and 22/04/2026", description: "The 13th International Conference on TechTrends in Science, Engineering & Management (ICTTSEM) provided a platform for sharing knowledge on emerging technologies and research innovations. It included paper presentations and expert sessions on modern fields like AI, Cloud Computing, and IoT. A project competition was also conducted where students showcased innovative projects based on real-world applications. The event helped enhance technical knowledge, creativity, and presentation skills.", students: "109" },
      { event: "Parent Teacher Meet(2nd year)", date: "4/04/2026", description: "A Parent-Teacher Meet for 2nd year students was conducted on 4th April 2026. The meeting aimed to discuss students’ academic performance, attendance, and overall development. Parents interacted with faculty members and received feedback about their ward’s progress.", students: "23" },
      { event: "Parent Teacher Meet( year)", date: "11/04/2026", description: "The meeting focused on discussing students’ academic progress, attendance, and overall performance. Parents interacted with faculty members and received feedback regarding their ward’s development.", students: "-" }
    ]
  }
};

export default function DepartmentPage() {
  const { id } = useParams();
  
  // Format the ID to a readable title (e.g. "civil-engineering" -> "Civil Engineering")
  const formattedTitle = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Department";
  
  const data = departmentData[id] || null;

  return (
    <div className="min-h-screen bg-bg">
      {/* Department Hero Section */}
      <section className="relative pt-[120px] pb-[80px] px-5 lg:px-10 bg-surface-light border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-bl-[100px] -z-10 blur-3xl"></div>
        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-start gap-6">
          <div>
            <div className="font-mono text-[12px] tracking-[0.2em] text-accent font-bold mb-3 uppercase">Department Profile</div>
            <h1 className="font-serif text-[clamp(40px,5vw,64px)] leading-tight tracking-tight text-text mb-4">
              {formattedTitle}
            </h1>
            <p className="text-[16px] text-text-dim max-w-2xl leading-relaxed">
              Welcome to the Department of {formattedTitle}. We are dedicated to providing world-class education, fostering innovative research, and building the leaders of tomorrow through comprehensive curriculum and hands-on experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-[80px] px-5 lg:px-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          
          <div className="flex flex-col gap-12">
            {/* Vision & Mission */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface border border-border p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-accent" />
                <h3 className="font-serif text-2xl font-bold text-text">Vision & Mission</h3>
              </div>
              <div className="grid gap-6">
                <div>
                  <h4 className="font-bold text-accent mb-2">Vision</h4>
                  <p className="text-text-dim leading-relaxed">
                    {data?.vision || `To be a globally recognized center of excellence in ${formattedTitle}, creating innovative engineers and researchers.`}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">Mission</h4>
                  {data?.mission ? (
                    <ul className="list-disc pl-5 text-text-dim leading-relaxed space-y-2">
                      {data.mission.map((m, idx) => <li key={idx}>{m}</li>)}
                    </ul>
                  ) : (
                    <ul className="list-disc pl-5 text-text-dim leading-relaxed space-y-2">
                      <li>Deliver outcome-based education.</li>
                      <li>Foster industry collaborations.</li>
                      <li>Promote ethical practices and social responsibility.</li>
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Syllabus & Outcomes */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface border border-border p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-accent" />
                <h3 className="font-serif text-2xl font-bold text-text">Academics & Outcomes</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-text mb-3 border-b border-border pb-2">Syllabus</h4>
                  <p className="text-text-dim text-sm mb-3">Download the latest curriculum structured as per RTMNU guidelines.</p>
                  {data?.syllabus ? (
                    <div className="flex flex-col gap-2">
                      {data.syllabus.map((s, idx) => (
                        <a key={idx} href={s.file} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm font-bold flex items-center gap-2 bg-surface-light border border-border p-2 rounded-lg hover:border-accent transition-colors">
                          <FileText className="w-4 h-4 shrink-0" />
                          <span>{s.name} PDF</span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <button className="text-accent hover:underline text-sm font-bold flex items-center gap-1"><FileText className="w-4 h-4"/> Download PDF</button>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-text mb-3 border-b border-border pb-2">Course Outcomes (CO)</h4>
                  {data?.cos ? (
                    <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {data.cos.map((co, idx) => (
                        <li key={idx} className="text-sm">
                          <strong className="text-text block mb-1">{co.id}. {co.title}</strong>
                          <span className="text-text-dim leading-relaxed">{co.description}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-text-dim text-sm">Detailed learning outcomes mapping to program objectives for every subject.</p>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-text mb-3 border-b border-border pb-2">Program Specific Outcomes (PSO)</h4>
                  {data?.psos ? (
                    <ul className="space-y-3">
                      {data.psos.map((pso, idx) => (
                        <li key={idx} className="text-sm">
                          <strong className="text-text block mb-1">{idx + 1}. {pso.title}</strong>
                          <span className="text-text-dim leading-relaxed">{pso.description}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-text-dim text-sm">Capabilities unique to the graduates of the {formattedTitle} program.</p>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-text mb-3 border-b border-border pb-2">Program Educational Objectives (PEO)</h4>
                  {data?.peos ? (
                    <ul className="space-y-3">
                      {data.peos.map((peo, idx) => (
                        <li key={idx} className="text-sm">
                          <strong className="text-text block mb-1">{idx + 1}. {peo.title}</strong>
                          <span className="text-text-dim leading-relaxed">{peo.description}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-text-dim text-sm">Career and professional accomplishments expected of alumni within a few years of graduation.</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Faculty & HOD */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface border border-border p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-accent" />
                <h3 className="font-serif text-2xl font-bold text-text">Leadership & Faculty</h3>
              </div>
              <div className="mb-8 p-6 bg-surface-light border border-border rounded-xl flex flex-col md:flex-row gap-6 items-center md:items-start">
                {data?.hod?.image ? (
                  <img src={data.hod.image} alt={data.hod.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shrink-0 border-2 border-border shadow-sm" />
                ) : (
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-border shrink-0 flex items-center justify-center text-accent font-bold text-2xl">
                    {data?.hod?.name?.split(' ')?.map(n => n[0])?.slice(0, 2)?.join('') || 'HOD'}
                  </div>
                )}
                <div>
                  <h4 className="font-serif text-xl font-bold text-text mb-1">{data?.hod?.name || "Dr. Head of Department"}</h4>
                  <div className="text-accent text-sm font-bold mb-3">{data?.hod?.title || `HOD, ${formattedTitle}`}</div>
                  {data?.hod?.details ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm text-text-dim">
                      {data.hod.details.map((detail, idx) => (
                        <div key={idx}>
                          <span className="font-medium text-text">{detail.label}:</span> {detail.value}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-text-dim text-sm leading-relaxed italic">"Our department focuses on hands-on innovation and strong industry ties to prepare students for global challenges."</p>
                  )}
                </div>
              </div>
              <h4 className="font-bold text-text mb-4 border-b border-border pb-2">List of Faculty Members</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data?.faculty ? data.faculty.map((faculty, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 border border-border/50 rounded-xl bg-surface shadow-sm hover:border-border hover:shadow-md transition-all">
                    {faculty.image ? (
                      <img src={faculty.image} alt={faculty.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shrink-0 border border-border shadow-sm" />
                    ) : (
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-surface-light border border-border shrink-0 flex items-center justify-center text-accent text-lg font-bold shadow-sm">
                        {faculty.name.split(' ').map(n => n[0]).slice(1, 3).join('')}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <div className="font-serif font-bold text-lg text-text mb-1">{faculty.name}</div>
                      <div className="text-sm text-text-dim mb-1.5">{faculty.qualification}</div>
                      <div className="text-sm font-medium text-accent bg-accent/5 inline-block px-2 py-0.5 rounded border border-accent/10 w-fit">Exp: {faculty.experience}</div>
                    </div>
                  </div>
                )) : [1,2,3,4].map(i => (
                  <div key={i} className="flex items-center gap-5 p-5 border border-border/50 rounded-xl bg-surface shadow-sm">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-border shrink-0"></div>
                    <div className="flex flex-col">
                      <div className="font-serif font-bold text-lg text-text mb-1">Prof. Faculty Name</div>
                      <div className="text-sm text-text-dim mb-1.5">Assistant Professor</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Projects Undertaken List */}
            {data?.projects && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface border border-border p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-6 h-6 text-accent" />
                  <h3 className="font-serif text-2xl font-bold text-text">Projects Undertaken</h3>
                </div>
                <div className="space-y-8">
                  {data.projects.map((projGroup, idx) => (
                    <div key={idx} className="bg-surface-light border border-border rounded-xl p-6">
                      <h4 className="font-serif text-xl font-bold text-accent mb-4 border-b border-border/50 pb-2">{projGroup.year}</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                        {projGroup.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-dim leading-relaxed">
                            <span className="text-accent font-bold mt-[2px] shrink-0 text-xs">{(i + 1).toString().padStart(2, '0')}.</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Achievements Section */}
            {data?.achievements && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface border border-border p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-6 h-6 text-accent" />
                  <h3 className="font-serif text-2xl font-bold text-text">Students Achievements</h3>
                </div>
                <div className="space-y-10">
                  {data.achievements.map((group, groupIdx) => (
                    <div key={groupIdx}>
                      <h4 className="font-serif text-xl font-bold text-accent mb-4 border-b border-border/50 pb-2">Session {group.session}</h4>
                      <div className="overflow-x-auto custom-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                          <thead>
                            <tr className="border-b border-border/50 text-sm text-text-dim">
                              <th className="font-medium pb-3 pl-3">Sr. No</th>
                              <th className="font-medium pb-3">Name of Student</th>
                              <th className="font-medium pb-3">Year</th>
                              <th className="font-medium pb-3">Name of Activity</th>
                              <th className="font-medium pb-3 pr-3 whitespace-nowrap">Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.items.map((ach, idx) => (
                              <tr key={idx} className="border-b border-border/20 hover:bg-surface-light transition-colors group">
                                <td className="py-4 pl-3 text-sm text-accent font-mono">{(idx + 1).toString().padStart(2, '0')}.</td>
                                <td className="py-4 pr-4">
                                  <div className="font-bold text-sm text-text group-hover:text-accent transition-colors">{ach.name}</div>
                                </td>
                                <td className="py-4 text-sm text-text-dim whitespace-nowrap pr-4">{ach.year}</td>
                                <td className="py-4 text-sm text-text-dim leading-relaxed max-w-[400px] pr-4">{ach.activity}</td>
                                <td className="py-4 pr-3 text-xs font-mono text-text-dim whitespace-nowrap">{ach.date}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* MoUs, Projects */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
              <div className="bg-surface border border-border p-6 rounded-2xl hover:-translate-y-1 transition-transform flex flex-col h-full">
                <Handshake className="w-8 h-8 text-accent mb-4 shrink-0" />
                <h4 className="font-serif text-lg font-bold text-text mb-2">MoUs</h4>
                {data?.mous && data.mous.length > 0 ? (
                  <div className="flex flex-col gap-4 mt-2">
                    {data.mous.map((mou, i) => (
                      <div key={i} className="border-l-2 border-border pl-4">
                        <div className="font-bold text-sm text-text">{mou.organization}</div>
                        <div className="text-xs text-accent mb-1">{mou.date}</div>
                        <div className="text-xs text-text-dim leading-relaxed">{mou.purpose}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-text-dim mt-auto">Strategic partnerships with top industries for internships, training, and placements.</p>
                )}
              </div>
              <div className="bg-surface border border-border p-6 rounded-2xl hover:-translate-y-1 transition-transform flex flex-col h-full">
                <Activity className="w-8 h-8 text-accent mb-4 shrink-0" />
                <h4 className="font-serif text-lg font-bold text-text mb-2">Research</h4>
                <p className="text-sm text-text-dim mt-auto">Showcase of research papers, patents, and innovative prototypes published by the department.</p>
              </div>
            </motion.div>

            {/* NSS Activities */}
            {data?.nss && data.nss.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface border border-border p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-accent" />
                  <h3 className="font-serif text-2xl font-bold text-text">NSS Activities</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-border text-sm text-text-dim">
                        <th className="font-medium pb-3 pl-3">Sr. No.</th>
                        <th className="font-medium pb-3">Name of Event</th>
                        <th className="font-medium pb-3 whitespace-nowrap">Date</th>
                        <th className="font-medium pb-3">Description</th>
                        <th className="font-medium pb-3 pr-3">Students</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.nss.map((event, idx) => (
                        <tr key={idx} className="border-b border-border/20 hover:bg-surface-light transition-colors group">
                          <td className="py-4 pl-3 text-sm text-accent font-mono">{(idx + 1).toString().padStart(2, '0')}.</td>
                          <td className="py-4 pr-4">
                            <div className="font-bold text-sm text-text group-hover:text-accent transition-colors">{event.event}</div>
                          </td>
                          <td className="py-4 pr-4 text-xs font-mono text-text-dim whitespace-nowrap">{event.date}</td>
                          <td className="py-4 text-sm text-text-dim leading-relaxed min-w-[300px] pr-4">{event.description}</td>
                          <td className="py-4 pr-3 text-sm font-bold text-text-dim text-center">{event.students}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
            {/* Department Activities */}
            {data?.activities && data.activities.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface border border-border p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-6 h-6 text-accent" />
                  <h3 className="font-serif text-2xl font-bold text-text">Department Activities</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-border text-sm text-text-dim">
                        <th className="font-medium pb-3 pl-3">Sr. No.</th>
                        <th className="font-medium pb-3">Name of Event</th>
                        <th className="font-medium pb-3 whitespace-nowrap">Date</th>
                        <th className="font-medium pb-3">Description</th>
                        <th className="font-medium pb-3 pr-3">Students</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.activities.map((event, idx) => (
                        <tr key={idx} className="border-b border-border/20 hover:bg-surface-light transition-colors group">
                          <td className="py-4 pl-3 text-sm text-accent font-mono">{(idx + 1).toString().padStart(2, '0')}.</td>
                          <td className="py-4 pr-4">
                            <div className="font-bold text-sm text-text group-hover:text-accent transition-colors">{event.event}</div>
                          </td>
                          <td className="py-4 pr-4 text-xs font-mono text-text-dim whitespace-nowrap">{event.date}</td>
                          <td className="py-4 text-sm text-text-dim leading-relaxed min-w-[300px] pr-4">{event.description}</td>
                          <td className="py-4 pr-3 text-sm font-bold text-text-dim text-center whitespace-nowrap">{event.students}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar / Quick Links */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface-light border border-border p-6 rounded-2xl sticky top-24">
              <h3 className="font-serif text-xl font-bold text-text mb-4 border-b border-border pb-2">Quick Links</h3>
              <ul className="flex flex-col gap-3 text-sm font-medium text-text-dim">
                <li className="hover:text-accent cursor-pointer transition-colors">Academic Calendar</li>
                <li className="hover:text-accent cursor-pointer transition-colors">Timetable</li>
                <li className="hover:text-accent cursor-pointer transition-colors">Lab Facilities</li>
                <li className="hover:text-accent cursor-pointer transition-colors">Student Clubs</li>
                <li className="hover:text-accent cursor-pointer transition-colors">Research Publications</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
