import { motion } from "framer-motion";
import { Github, Mail, Server, Cloud, Activity, Sun, Moon, BookOpen } from "lucide-react";
import { useState } from "react";

export default function VenkatStackLanding() {
  const [darkMode, setDarkMode] = useState(true);

  const themeClasses = darkMode
    ? "bg-gradient-to-b from-slate-950 to-slate-900 text-white"
    : "bg-gradient-to-b from-gray-100 to-white text-slate-900";

  const cardClasses = darkMode
    ? "bg-slate-800 border-none"
    : "bg-white border border-gray-200";

  const mutedText = darkMode ? "text-slate-300" : "text-slate-600";

  const Card = ({ children, className }) => (
    <div className={className}>{children}</div>
  );

  const CardContent = ({ children, className }) => (
    <div className={className}>{children}</div>
  );

  const Button = ({ children, className }) => (
    <button className={className}>{children}</button>
  );

  return (
    <div className={`min-h-screen px-6 py-10 transition-colors duration-500 ${themeClasses}`}>
      {/* Theme Toggle */}
      <div className="flex justify-end max-w-6xl mx-auto">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 rounded-2xl px-4 py-2 shadow-md border"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          VenkatStack
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`mt-6 text-xl max-w-2xl mx-auto ${mutedText}`}
        >
          DevOps | Cloud Infrastructure | Kubernetes | Observability
        </motion.p>
        <div className="mt-8 flex justify-center gap-4">
          <Button className="rounded-2xl px-6 py-5 text-lg">
            <Github className="mr-2" size={20} /> GitHub
          </Button>
          <Button variant="outline" className="rounded-2xl px-6 py-5 text-lg">
            <Mail className="mr-2" size={20} /> Contact
          </Button>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 py-16">
        <Card className={`${cardClasses} rounded-2xl shadow-lg`}>
          <CardContent className="p-6">
            <Cloud size={36} className="mb-4" />
            <h3 className="text-2xl font-semibold">Cloud & Platform Engineering</h3>
            <p className={`${mutedText} mt-4`}>
              Designing scalable cloud-native infrastructure across AWS and Azure with automation and Infrastructure as Code.
            </p>
          </CardContent>
        </Card>

        <Card className={`${cardClasses} rounded-2xl shadow-lg`}>
          <CardContent className="p-6">
            <Server size={36} className="mb-4" />
            <h3 className="text-2xl font-semibold">Kubernetes & DevOps</h3>
            <p className={`${mutedText} mt-4`}>
              Production-grade Kubernetes clusters, CI/CD pipelines, GitOps workflows, containerization, and Helm deployments.
            </p>
          </CardContent>
        </Card>

        <Card className={`${cardClasses} rounded-2xl shadow-lg`}>
          <CardContent className="p-6">
            <Activity size={36} className="mb-4" />
            <h3 className="text-2xl font-semibold">Observability</h3>
            <p className={`${mutedText} mt-4`}>
              End-to-end monitoring stacks using Kafka, OpenSearch, VictoriaMetrics, and LDMS for high-performance computing environments.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className={`${cardClasses} rounded-2xl shadow-lg`}>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold">HPC Observability Platform</h3>
              <p className={`${mutedText} mt-4`}>
                Built a scalable monitoring pipeline ingesting system logs, Redfish events, Slingshot metrics, and LDMS telemetry into Kafka and OpenSearch.
              </p>
            </CardContent>
          </Card>

          <Card className={`${cardClasses} rounded-2xl shadow-lg`}>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold">Cloud Migration Automation</h3>
              <p className={`${mutedText} mt-4`}>
                Led infrastructure migration from AWS to Azure using Terraform, Docker, Kubernetes, and CI/CD pipelines.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className={`${cardClasses} rounded-2xl shadow-lg`}>
            <CardContent className="p-6">
              <BookOpen size={28} className="mb-4" />
              <h3 className="text-xl font-semibold">Designing a Scalable Observability Stack</h3>
              <p className={`mt-3 ${mutedText}`}>
                Deep dive into Kafka, OpenSearch, and metrics pipelines for production-grade monitoring systems.
              </p>
            </CardContent>
          </Card>

          <Card className={`${cardClasses} rounded-2xl shadow-lg`}>
            <CardContent className="p-6">
              <BookOpen size={28} className="mb-4" />
              <h3 className="text-xl font-semibold">Kubernetes GitOps in Production</h3>
              <p className={`mt-3 ${mutedText}`}>
                Implementing ArgoCD-based GitOps workflows for enterprise environments.
              </p>
            </CardContent>
          </Card>

          <Card className={`${cardClasses} rounded-2xl shadow-lg`}>
            <CardContent className="p-6">
              <BookOpen size={28} className="mb-4" />
              <h3 className="text-xl font-semibold">HPC Monitoring Architecture</h3>
              <p className={`mt-3 ${mutedText}`}>
                Integrating LDMS and telemetry pipelines for high-performance computing clusters.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={`text-center py-10 border-t ${darkMode ? "border-slate-800 text-slate-400" : "border-gray-200 text-slate-600"}`}>
        <p>© {new Date().getFullYear()} VenkatStack.dev | Built with DevOps mindset</p>
      </footer>
    </div>
  );
}
