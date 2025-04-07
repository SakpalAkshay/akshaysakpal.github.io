import Link from "next/link"
import { ArrowRight, BarChart2, Database, FileText, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ExperienceCard } from "@/components/experience-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Akshay<span className="text-primary">Sakpal</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-full bg-muted p-1 mb-4">
              <div className="rounded-full bg-background px-4 py-1 text-sm font-medium">Data Analyst Portfolio</div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Akshay <span className="text-primary">Sakpal</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              Data Analyst with 4 years of experience in analyzing large datasets, building interactive dashboards, and
              delivering actionable insights to drive business decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Fullerton, CA (Open to Relocation)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 657-525-8804</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" asChild>
                <Link href="#projects">
                  View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-16">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <p className="text-muted-foreground">
                I'm a data analyst with 4 years of experience in analyzing large datasets, building interactive
                dashboards, and delivering actionable insights to drive business decisions. Graduated with a Master
                of Science in Computer Science at California State University Fullerton. I have honed my skills in Statistics, Machine Learning and Genrative AI.
              </p>
              <p className="text-muted-foreground">
                My expertise includes Excel, SQL, Python, Power BI, and Tableau, with a strong foundation in statistical
                analysis and data visualization. I've worked with major organizations like Delta Airlines to improve
                customer segmentation, enhance reporting efficiency, and drive data-informed decision making.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">California State University Fullerton</p>
                    <p className="text-sm text-muted-foreground">
                      Master of Science in Computer Science (December 2024)
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Chameli Devi Group of Institutions</p>
                    <p className="text-sm text-muted-foreground">
                      Bachelor of Engineering in Computer Science (June 2020)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                <img
                  src="\profle-photo.jpg"
                  alt="Akshay Sakpal"
                  className="rounded-lg"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container py-16 space-y-8">
          <div className="text-center space-y-4 max-w-[800px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
            <p className="text-muted-foreground">
              My professional journey in data analytics across different organizations.
            </p>
          </div>

          <div className="space-y-8 mt-8">
            <ExperienceCard
              title="Data Analyst"
              company="Delta Airlines (via: Tata Consultancy Services)"
              period="January 2021 – December 2022"
              responsibilities={["Leveraged Python (Pandas, NumPy) and SQL for customer analytics, delivering insights that improved campaign performance and predictive model accuracy. Created interactive Power BI dashboards with automated ETL processes using Power Query, significantly reducing reporting time. Applied advanced techniques including K-means clustering to develop customer segmentation strategies that drove measurable business results."]}
            />

            <ExperienceCard
              title="Data Analyst"
              company="BigData Infomatics LLP"
              period="April 2018 – March 2020"
              responsibilities={[
                 "Applied Python data analysis stack and SQL to analyze student feedback and workshop data across multiple colleges, delivering insights that improved satisfaction scores by 20% and increased enrollment. Created dashboards using Google Cloud Platform (BigQuery and Data Studio) that streamlined planning processes and saved 10 hours monthly. Conducted channel performance analysis to optimize student acquisition strategy and resource allocation."
              ]}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-muted/50 py-16">
          <div className="container space-y-8">
            <div className="text-center space-y-4 max-w-[800px] mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
              <p className="text-muted-foreground">
                I leverage a variety of tools and technologies to analyze data and create compelling visualizations that
                tell a story.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Programming & Databases
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge>Python</SkillBadge>
                    <SkillBadge>SQL</SkillBadge>
                    <SkillBadge>MySQL</SkillBadge>
                    <SkillBadge>Oracle</SkillBadge>
                    <SkillBadge>PostgreSQL</SkillBadge>
                    <SkillBadge>SQL Server</SkillBadge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart2 className="h-5 w-5 text-primary" />
                    Data Analysis & Visualization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge>Power BI</SkillBadge>
                    <SkillBadge>Tableau</SkillBadge>
                    <SkillBadge>Excel</SkillBadge>
                    <SkillBadge>Pandas</SkillBadge>
                    <SkillBadge>NumPy</SkillBadge>
                    <SkillBadge>Matplotlib</SkillBadge>
                    <SkillBadge>Seaborn</SkillBadge>
                    <SkillBadge>PySpark</SkillBadge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Cloud & Advanced Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge>AWS</SkillBadge>
                    <SkillBadge>Google BigQuery</SkillBadge>
                    <SkillBadge>Snowflake</SkillBadge>
                    <SkillBadge>Scikit-learn</SkillBadge>
                    <SkillBadge>Statistical Analysis</SkillBadge>
                    <SkillBadge>A/B Testing</SkillBadge>
                    <SkillBadge>Jupyter</SkillBadge>
                    <SkillBadge>Hypothesis Testing</SkillBadge>
                    <SkillBadge>Natural Language Processing</SkillBadge>
                    
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-16 space-y-8">
          <div className="text-center space-y-4 max-w-[800px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Personal Projects</h2>
            <p className="text-muted-foreground">
              A selection of my data analysis and machine learning projects showcasing my skills and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <ProjectCard
              title="Credit Risk Modeling"
              description="An application to predict loan approval based on priority levels, conducted EDA on real-time banking datasets with 50+ input variables and training an XGBoost model using inputs such as Credit Score, Delinquency Level, Education, and Gender."
              image="/credit-risk.jpg"
              tags={["Python", "XGBoost", "EDA", "Machine Learning"]}
              link="https://github.com/SakpalAkshay/Credit-Risk-Modelling"
            />
             <ProjectCard
              title="A/B Testing Case Studies"
              description="Carried out multiple AB testing on diffrent datasets ranging from marketing to ecommerce data."
              image="abtesting.jpg"
              tags={["Data-Viz", "Statistics", "A/B Testing", "Python"]}
              link="https://github.com/SakpalAkshay/Data-Analyst-Projects/tree/main/AB_Testing_Case_Studies"
            />
            <ProjectCard
              title="Medi-X-Pro"
              description="A full-stack web application for medical image analysis using Gemini-Pro-Vision and prompt generation with LLM, with a Next.js front end featuring OTP-based authentication and Sentry for metrics management, and a Fast API backend incorporating LangChain for Gen AI."
              image="/medi-x-pro.jpg"
              tags={["Next.js", "FastAPI", "LangChain", "Gemini-Pro-Vision"]}
              link="https://github.com/SakpalAkshay/Medi-X-Pro"
            />

            <ProjectCard
              title="Chest-Xray Classification"
              description="A chest cancer classification system using VGG16 on chest X-ray images, leveraging MLflow for experiment tracking and DVC for pipeline management, following MLOps principles."
              image="/chest-xray.jpg"
              tags={["VGG16", "MLflow", "DVC", "MLOps"]}
              link="https://github.com/SakpalAkshay/ML-OPS-Project"
            />
             <ProjectCard
              title="Malaria Detection using CNN"
              description="Ulitized Convolutional Neural Networks to categorize Red Blood Cells images to Parasitic and Non Parasitic to detect Malaria"
              image="/malaria.jpg"
              tags={["CNN", "ResNet50","Python", "Computer Vision", "Neural Networks"]}
              link="https://github.com/SakpalAkshay/Malaria-Detection-Resnet50"
            />
            
             <ProjectCard
              title="Restautrant-X: Zomato Case Study"
              description="Carried out Exploratory data analysis on Zomato's restaurant data, trying to find whats factors will lead to bring up a successfull restaurant in Banglore City"
              image="/zomato.jpg"
              tags={["Machine Learning", "EDA", "Streamlit", "Random-Forest"]}
              link="https://github.com/SakpalAkshay/edaZomato"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted/50 py-16">
          <div className="container space-y-8">
            <div className="text-center space-y-4 max-w-[800px] mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
              <p className="text-muted-foreground">
                Interested in working together? Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-[800px] mx-auto">
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:sakpal.akshay@protonmail.com" className="text-primary hover:underline">
                    sakpal.akshay@protonmail.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">LinkedIn</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://linkedin.com/in/akshaysakpal04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/akshaysakpal
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">GitHub</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://github.com/SakpalAkshay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    github.com/SakpalAkshay
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Akshay Sakpal. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:sakpal.akshay@protonmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/akshaysakpal04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/SakpalAkshay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

