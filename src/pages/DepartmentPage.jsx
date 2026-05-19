import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { BookOpen, Target, Users, Trophy, Handshake, FileText, Activity } from "lucide-react";

export default function DepartmentPage() {
  const { id } = useParams();
  
  // Format the ID to a readable title (e.g. "civil-engineering" -> "Civil Engineering")
  const formattedTitle = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Department";

  return (
    <div className="min-h-screen bg-bg">
      {/* Department Hero Section */}
      <section className="relative pt-[120px] pb-[80px] px-5 lg:px-10 bg-surface-light border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-bl-[100px] -z-10 blur-3xl"></div>
        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-surface border border-border shadow-xl flex items-center justify-center text-accent shrink-0">
            {/* Placeholder for Department Logo */}
            <span className="font-serif text-4xl font-bold">Logo</span>
          </div>
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
                  <p className="text-text-dim leading-relaxed">To be a globally recognized center of excellence in {formattedTitle}, creating innovative engineers and researchers.</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">Mission</h4>
                  <ul className="list-disc pl-5 text-text-dim leading-relaxed space-y-2">
                    <li>Deliver outcome-based education.</li>
                    <li>Foster industry collaborations.</li>
                    <li>Promote ethical practices and social responsibility.</li>
                  </ul>
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
                  <button className="text-accent hover:underline text-sm font-bold flex items-center gap-1"><FileText className="w-4 h-4"/> Download PDF</button>
                </div>
                <div>
                  <h4 className="font-bold text-text mb-3 border-b border-border pb-2">Course Outcomes (CO)</h4>
                  <p className="text-text-dim text-sm">Detailed learning outcomes mapping to program objectives for every subject.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text mb-3 border-b border-border pb-2">Program Specific Outcomes (PSO)</h4>
                  <p className="text-text-dim text-sm">Capabilities unique to the graduates of the {formattedTitle} program.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text mb-3 border-b border-border pb-2">Program Educational Objectives (PEO)</h4>
                  <p className="text-text-dim text-sm">Career and professional accomplishments expected of alumni within a few years of graduation.</p>
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
                <div className="w-24 h-24 rounded-full bg-border shrink-0"></div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-text mb-1">Dr. Head of Department</h4>
                  <div className="text-accent text-sm font-bold mb-3">HOD, {formattedTitle}</div>
                  <p className="text-text-dim text-sm leading-relaxed italic">"Our department focuses on hands-on innovation and strong industry ties to prepare students for global challenges."</p>
                </div>
              </div>
              <h4 className="font-bold text-text mb-4 border-b border-border pb-2">List of Faculty Members</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex items-center gap-3 p-3 border border-border/50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-border"></div>
                    <div>
                      <div className="font-bold text-sm text-text">Prof. Faculty Name</div>
                      <div className="text-xs text-text-dim">Assistant Professor</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements, MoUs, Projects */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
              <div className="bg-surface border border-border p-6 rounded-2xl hover:-translate-y-1 transition-transform">
                <Handshake className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-serif text-lg font-bold text-text mb-2">MoUs</h4>
                <p className="text-sm text-text-dim">Strategic partnerships with top industries for internships, training, and placements.</p>
              </div>
              <div className="bg-surface border border-border p-6 rounded-2xl hover:-translate-y-1 transition-transform">
                <Activity className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-serif text-lg font-bold text-text mb-2">Projects</h4>
                <p className="text-sm text-text-dim">Showcase of final year projects, research papers, and innovative prototypes.</p>
              </div>
              <div className="bg-surface border border-border p-6 rounded-2xl hover:-translate-y-1 transition-transform">
                <Trophy className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-serif text-lg font-bold text-text mb-2">Achievements & Activities</h4>
                <p className="text-sm text-text-dim">Student awards, hackathon wins, club activities, and departmental events.</p>
              </div>
            </motion.div>
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
