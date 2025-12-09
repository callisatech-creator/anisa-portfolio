import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Linkedin, Github, ExternalLink, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
// import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const allWorkExperiences = [
    {
      title: "Graduate Research Assistant",
      organization: "Rochester Institute of Technology",
      period: "October 2024 - Present",
      description: "Co-authored a peer-reviewed publication accepted to The 27th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS ’25). Currently advancing the project toward Creative Accessibility Design Tools (CADTs) that support designers in treating accessibility as a creative catalyst rather than a compliance burden. Conducted mixed-methods research with 70 mobile app creators (34 professionals, 36 students) examining how creativity and accessibility intersect in mobile design workflows. Led survey design, data cleaning, and thematic analysis to identify group-specific patterns in creativity conceptualization and accessibility integration. Developed visual analytics and poster materials for the ASSETS ’25 paper and open-house presentation, including charts and infographics illustrating creativity phases and constraint framing.",
      skills: ["User Centered Design", "Accessible Design", "Qualitative & Quantitative Research", "HCI", "Mobile App Usability", "Thematic Analysis", "Survey Design"]
    },
    {
      title: "AI Creative & Designer-Technologist Intern",
      organization: "Logitech",
      period: "June 2025 - August 2025",
      description: "During my internship at Logitech, I spearheaded the creation of a comprehensive AI Hackathon Cheat Sheet, a strategic tool designed to demystify AI's role in creative teamwork and empower teams to effectively integrate AI into their projects from conception to completion. This initiative focused on practical applications, showcasing how AI can enhance brainstorming, video editing, app mockups, and slide generation. I navigated challenges such as managing AI hallucinations and integrating AI tools with existing enterprise software, ultimately learning the critical importance of prompt engineering, viewing AI as a copilot, and emphasizing continuous iteration and evaluation in innovation. This experience highlights my ability to anticipate needs, drive momentum, and deliver resourceful solutions in a fast-paced, innovation-driven environment.",
      skills: ["Generative AI Integration", "Cross-team Collaboration", "UX Research", "AI", "Prompt Engineering"]
    },
    {
      title: "Volunteer User Experience Researcher",
      organization: "St. Jude Children's Research Hospital - ALSAC",
      period: "January 2025 - May 2025",
      description: "Conducted usability evaluations of a mobile app, including both moderated and unmoderated tests, to assess navigation, content delivery, and accessibility. Developed task flows aligned with user goals and synthesized participant feedback to identify and prioritize critical usability issues, particularly in the event scheduling interface. Delivered evidence-based design recommendations in a stakeholder-facing report, incorporating heuristic evaluation, user interview insights, and formative testing methods.",
      skills: ["Usability Testing", "Mobile App Usability", "Heuristic Evaluation", "User Interviews", "Design Recommendations"]
    },
    {
      title: "Undergraduate Research Assistant",
      organization: "Penn State University",
      period: "January 2022 - May 2024",
      description: "Working on a project called \"The Blind Tok Project\" to understand visually impaired users’ motivations, interactions, and challenges in using such technologies. Aimed to report PVI’s experiences of building their social world using the most trending technology and to provide design opportunities by closely examining the challenges and needs that PVIs have.",
      skills: ["Technical Reports", "Human Subjects Research", "Data Analysis", "Writing", "Accessibility", "Social Media"]
    },
    {
      title: "Undergraduate Research Intern",
      organization: "University of Washington",
      period: "July 2023 - August 2023",
      description: "Explored the intersection of artificial intelligence (AI) and team decision-making. Aimed to enhance the decision-making processes of teams by leveraging the power of AI technologies. Honed skills in data analysis, usage of AI, and statistical modeling, allowing for the development of innovative AI-driven decision support systems.",
      skills: ["Intelligent Agents", "Project Management", "Collaborative Problem Solving", "Data Analysis", "AI", "Statistical Modeling"]
    },
    {
      title: "Research Intern",
      organization: "Carnegie Mellon University Robotics Institute",
      period: "May 2022 - August 2022",
      description: "Worked under the research direction of Dr. Jack Mostow on his project RoboTutor, a tablet tutor for basic literacy and numeracy. Implemented a Multi-Arm Bandit Algorithm to two versions of RoboTutor, testing Reliability, usability, engagement, and learning simultaneously within each version to improve RoboTutor and find the impact of changes.",
      skills: ["Intelligent Agents", "Machine Learning", "Python", "Robotics", "Usability Testing"]
    },
    {
      title: "FAME PNC Coding Coach",
      organization: "Fund for The Advancement of Minorities Through Education (FAME)",
      period: "January 2022 - April 2022",
      description: "Coached for PNC Code for a Cause Hackathon Team. Taught, guided, mentored, and coached students with coding projects. Responsible for facilitating internal practice sessions and answering student questions. Ensured a quantifiable degree of academic progress over the course of the program.",
      skills: ["Mentoring", "Coding", "Hackathon", "Education"]
    },
    {
      title: "Program Assistant",
      organization: "Pennsylvania State University",
      period: "August 2021 - August 2021",
      description: "Mentored, assisted, and supported the incoming cohort of Millennium scholars for 2021 in getting acclimated to college life. Showcased academic excellence and leadership as a Millennium Scholar.",
      skills: ["Mentoring", "Leadership", "Student Support"]
    },
    {
      title: "Undergraduate Student Researcher",
      organization: "Rochester Institute of Technology, Rochester New York",
      period: "June 2021 - August 2021",
      description: "Nominated to present summer Research at National Science Foundation Conference in Oct. 2021. Learned to code for statistical analysis in R programming language. Researched subject performance differences between human-human and human-robot interactions, completing an experiment studying differences of how humans complete false belief tasks when delivered through a robot vs a human to assess Theory of Mind (ToM).",
      skills: ["Research", "Statistical Analysis", "R Programming", "Human-Robot Interaction", "Theory of Mind"]
    }
  ]

  const featuredWorkExperiences = [allWorkExperiences[0], allWorkExperiences[1]];
  const otherWorkExperiences = allWorkExperiences.slice(2);

  const projects = [
    {
      title: "Logitech Internship & Hackathon Cheat Sheet",
      description: "During my internship at Logitech, I spearheaded the creation of a comprehensive AI Hackathon Cheat Sheet, a strategic tool designed to demystify AI's role in creative teamwork and empower teams to effectively integrate AI into their projects from conception to completion. This initiative focused on practical applications, showcasing how AI can enhance brainstorming, video editing, app mockups, and slide generation. I navigated challenges such as managing AI hallucinations and integrating AI tools with existing enterprise software, ultimately learning the critical importance of prompt engineering, viewing AI as a copilot, and emphasizing continuous iteration and evaluation in innovation. This experience highlights my ability to anticipate needs, drive momentum, and deliver resourceful solutions in a fast-paced, innovation-driven environment.",
      category: "Internship & Project",
      tags: ["Logitech", "Hackathon", "UX Design", "AI", "Prompt Engineering"],
    },
    {
      title: "TeachTab 360: VR Education Platform",
      description: "Developed an innovative educational tool leveraging VR technology to create engaging, interactive learning experiences with hands-on simulations and 3D visualizations. This platform features hands-on simulations and 3D visualizations, designed to immerse students in dynamic learning environments and enhance comprehension.",
      category: "UI/UX Design",
      tags: ["VR", "Education", "Prototyping", "Interactive Learning"],
      link: "https://drive.google.com/file/d/1SEi142Ow4ooBywJb20Q8kVeq-cR_90up/view?usp=sharing"
    },
    {
      title: "Accessible Design Tools for Mobile App Creators",
      description: "We surveyed 70 mobile app creators (34 professionals and 36 students learning mobile app creation) to understand their perceptions toward creativity and accessibility. We found mobile app creators who treated design constraints as creative constraints naturally included accessibility, but those with the freedom of unrestricted aesthetic design often disregarded accessibility. Our research suggests that we can change negative perceptions toward accessible design by making it an integrated part of the creative process.",
      category: "UI/UX Research",
      tags: ["Accessibility", "Mobile Design", "User Research", "CADT"],
      link: "https://www.researchgate.net/profile/Garreth-Tigwell/publication/394853815_Re-framing_Accessibility_from_Constraint_to_Creative_Catalyst/links/68a8cb3bca495d76982f4ec9/Re-framing-Accessibility-from-Constraint-to-Creative-Catalyst.pdf"
    },
    {
      title: "In-Vehicle Infotainment System Accessibility",
      description: "Designed intuitive, efficient, and customizable accessibility feature screens for In-Vehicle Infotainment Systems (IVIS) to minimize driver distraction and improve usability for diverse driver groups. This project involved user research on distraction and accessibility, focusing on auditory/haptic feedback and adjustable interface options.",
      category: "UI/UX Design",
      tags: ["Automotive", "Accessibility", "User Testing", "IVIS", "Driver Safety"],
      link: "https://hci620.my.canva.site/",
      prototype: "https://www.figma.com/proto/tXHGnJINyRCCiJJx3OLGMu/IVIS-Prototypes?node-id=892-3961&t=hku1IR4YitefeVSn-1&scaling=scale-down&content-scaling=fixed&page-id=892%3A3951&starting-point-node-id=892%3A3961&show-proto-sidebar=1"
    },
    {
      title: "Blind Tok Project: Social Media Accessibility",
      description: "Conducted a semi-structured interview study with 20 BlindTokers to understand their content moderation experiences on TikTok. The research revealed a lack of accessibility on the platform, contributing to the marginalization of BlindTokers and instances of harassment from trolls.",
      category: "Research & Design",
      tags: ["Accessibility", "Social Media", "Qualitative Research", "Content Moderation"],
      link: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://arxiv.org/abs/2401.11663&ved=2ahUKEwjNsKmapZ-QAxUDFlkFHbAqLM0QFnoECCAQAQ&usg=AOvVaw0YhBP2lxVTLh5bNVbVGGdH"
    },
    {
      title: "Caption Usage & Comprehension Study",
      description: "Examined how social, environmental, and technical factors influence caption usage among hearing social media users through usability tests and qualitative interviews. The study explored motivations for caption use and barriers to caption creation and consumption.",
      category: "User Research",
      tags: ["Accessibility", "Video Content", "Usability Testing", "Captions"],
      link: "https://docs.google.com/document/d/1Pmek5Kx3o2PVb9BylamHmWSTYqW-enhAUE-pGCM0ozw/edit?usp=sharing"
    },
    {
      title: "Cash Cow: Finance App for Students",
      description: "Designed a community-based budgeting and finance app tailored for college students. This project focuses on providing educational resources and fostering peer support to help students manage their finances effectively.",
      category: "Mobile App Design",
      tags: ["Mobile", "Finance", "Community", "Budgeting"],
      link: "https://www.figma.com/proto/U4K4s6jb6jlIaC0kb9uU8G/HCDD-440---Figma-File?page-id=0%3A1&type=design&node-id=117-576&viewport=905%2C483%2C0.56&t=QCpCx8GepAkQ3cVn-1&scaling=scale-down&starting-point-node-id=117%3A576&show-proto-sidebar=1&mode=design"
    }
  ]

  const skills = {
    "Design & Research": [
      { name: "UI/UX Design", experience: "4 years" },
      { name: "Wireframing", experience: "4 years" },
      { name: "Qualitative & Quantitative Methods", experience: "5 years" },
      { name: "Usability Testing", experience: "2 years" },
      { name: "Survey Design", experience: "3 years" }
    ],
    "Tools & Technologies": [
      { name: "Figma", experience: "3 years", details: "Auto-layout, components/variants, libraries, prototyping" },
      { name: "Adobe CC", details: "Illustrator, Photoshop, After Effects" },
      { name: "Design Systems", details: "Naming, tokens, component hygiene" },
      { name: "HTML/CSS/React", details: "Basic familiarity" },
      { name: "Webflow", details: "Web development" }
    ],
    "Collaboration & Process": [
      { name: "Design Handoff", details: "Organized files, export-ready assets" },
      { name: "Dev-friendly Specs", details: "Component documentation" },
      { name: "Usability Testing Tools", details: "GA4, Hotjar, FullStory" },
      { name: "Motion Design", details: "Basic animations and micro-interactions" },
      { name: "Video Editing", details: "Simple editing and compression" }
    ]
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold"
            >
              Anisa
            </motion.div>
            <div className="hidden md:flex gap-8">
              {['home', 'featured-work', 'projects', 'other-work', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Hello, I'm Anisa
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              UX Designer & Researcher specializing in human-centered design, accessibility, and inclusive technologies
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
              My work bridges academic research and real-world applications, focusing on improving user experiences for diverse communities, 
              particularly individuals with disabilities. I combine technical expertise with qualitative and quantitative research methods 
              to drive innovation and accessibility in design.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('projects')}>
                View My Work <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Experience Section */}
      <section id="featured-work" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center">Featured Work Experience</h2>
            <p className="text-muted-foreground text-center mb-12">My most recent and impactful roles</p>
            
            <div className="grid gap-6">
              {featuredWorkExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-2xl mb-2">{experience.title}</CardTitle>
                          <CardDescription className="text-lg">{experience.organization}</CardDescription>
                        </div>
                        <Badge variant="secondary">{experience.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
            <p className="text-muted-foreground text-center mb-12">What I have created and built</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardHeader>
                      <Badge className="w-fit mb-2" variant="secondary">{project.category}</Badge>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline">
                          View Details <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      )}
                      {project.prototype && (
                        <a href={project.prototype} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline ml-4">
                          View Prototype <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Work Experience Section */}
      <section id="other-work" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center">Other Work Experience</h2>
            <p className="text-muted-foreground text-center mb-12">Additional professional roles</p>
            
            <div className="grid gap-6">
              {otherWorkExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-2xl mb-2">{experience.title}</CardTitle>
                          <CardDescription className="text-lg">{experience.organization}</CardDescription>
                        </div>
                        <Badge variant="secondary">{experience.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center">Skills & Expertise</h2>
            <p className="text-muted-foreground text-center mb-12">What I excel at</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {skillList.map((skill, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-medium">{skill.name}</span>
                              {'experience' in skill && skill.experience && (
                                <span className="text-sm text-muted-foreground">{skill.experience}</span>
                              )}
                            </div>
                            {'details' in skill && skill.details && (
                              <p className="text-sm text-muted-foreground">{skill.details}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-12 text-lg">
              I'm always open to discussing new opportunities, collaborations, or research projects.
            </p>
            
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <Button size="lg" className="w-full" variant="outline">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </Button>
                  <Button size="lg" className="w-full" variant="outline">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Button>
                  <Button size="lg" className="w-full" variant="outline">
                    <Github className="mr-2 h-5 w-5" />
                    View GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2025 Anisa. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

