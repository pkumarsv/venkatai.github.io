import { useState } from "react";

export default function VenkatLanding({ onNavigate }) {
  const [dark, setDark] = useState(true);
  const [azureExpanded, setAzureExpanded] = useState(false);

  return (
    <div className={dark ? "dark bg-black text-white" : "bg-white text-black"}>

      {/* NAVBAR */}
      <nav className="flex justify-between p-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">VenkatAI</h1>

        <div className="space-x-6">
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <button
            onClick={() => setDark(!dark)}
            className="border px-3 py-1 rounded"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">
          DevOps • Cloud • Kubernetes
        </h1>

        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          Building scalable infrastructure, automation pipelines,
          and observability systems for high-performance computing
          and cloud platforms.
        </p>

        <div className="mt-8 space-x-4">
          <a
            href="https://github.com"
            className="border px-6 py-3 rounded"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="bg-blue-600 px-6 py-3 rounded"
          >
            Contact
          </a>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">

          {/* KUBERNETES — clickable, opens detail page */}
          <div
            onClick={() => onNavigate && onNavigate("kubernetes")}
            className="relative group flex flex-col items-center gap-3 border-2 border-blue-300 dark:border-blue-700 rounded-xl p-5 hover:-translate-y-1 transition-transform cursor-pointer hover:shadow-lg hover:border-blue-500 bg-blue-50/50 dark:bg-blue-950/30"
          >
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center z-10 pointer-events-none">
              <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl whitespace-nowrap text-center">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                  CKA — Certified
                </div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                  CKAD — Certified
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
                  CKS — In Progress
                </div>
              </div>
              <div className="w-2.5 h-2.5 bg-gray-900 rotate-45 -mt-1.5"></div>
            </div>
            <i className="devicon-kubernetes-plain colored text-5xl"></i>
            <span className="text-sm font-semibold">Kubernetes</span>
            <div className="flex gap-1 flex-wrap justify-center">
              <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-bold">CKA</span>
              <span className="text-[10px] bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold">CKAD</span>
              <span className="text-[10px] bg-yellow-500 text-white px-1.5 py-0.5 rounded font-bold">CKS ⏳</span>
            </div>
          </div>

          {/* DOCKER */}
          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <i className="devicon-docker-plain colored text-5xl"></i>
            <span className="text-sm font-semibold">Docker</span>
          </div>

          {/* AWS — custom badge (devicon AWS doesn't render colored reliably) */}
          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <span className="flex items-center justify-center w-14 h-12">
              <svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="28" dominantBaseline="middle" textAnchor="middle"
                  fontFamily="Arial Black, Arial, sans-serif" fontWeight="900"
                  fontSize="28" fill="#FF9900">aws</text>
                {/* Orange arc arrow beneath */}
                <path d="M18 38 Q40 48 62 38" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <polygon points="60,34 66,40 60,42" fill="#FF9900"/>
              </svg>
            </span>
            <span className="text-sm font-semibold">AWS</span>
          </div>

          {/* AZURE — clickable, expands to show data tools */}
          <div
            onClick={() => setAzureExpanded(!azureExpanded)}
            className={`relative group flex flex-col items-center gap-3 rounded-xl p-5 hover:-translate-y-1 transition-all cursor-pointer hover:shadow-lg border-2 ${
              azureExpanded
                ? "border-blue-500 bg-blue-50/60 dark:bg-blue-950/40"
                : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
            }`}
          >
            {/* Hover tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center z-10 pointer-events-none">
              <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-1.5 shadow-xl whitespace-nowrap">
                {azureExpanded ? "Click to collapse" : "Click to see Data tools"}
              </div>
              <div className="w-2 h-2 bg-gray-900 rotate-45 -mt-1"></div>
            </div>
            <i className="devicon-azure-plain colored text-5xl"></i>
            <span className="text-sm font-semibold">Azure</span>
            {/* expand/collapse indicator */}
            <span className={`text-[10px] px-2 py-0.5 rounded font-bold transition-colors ${
              azureExpanded
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
            }`}>
              {azureExpanded ? "▲ Hide" : "▼ Data tools"}
            </span>
          </div>

          {/* TERRAFORM */}
          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <i className="devicon-terraform-plain colored text-5xl"></i>
            <span className="text-sm font-semibold">Terraform</span>
          </div>

          {/* KAFKA */}
          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <span className="text-5xl font-bold text-orange-500 leading-none">K</span>
            <span className="text-sm font-semibold">Kafka</span>
          </div>

          {/* LINUX */}
          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <i className="devicon-linux-plain text-5xl"></i>
            <span className="text-sm font-semibold">Linux</span>
          </div>

          {/* CI/CD */}
          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <i className="devicon-github-original text-5xl"></i>
            <span className="text-sm font-semibold">CI/CD</span>
          </div>

        </div>

        {/* AZURE DATA TOOLS — expands when Azure is clicked */}
        {azureExpanded && (
          <div className="mt-4 rounded-2xl border-2 border-blue-300 dark:border-blue-700 bg-blue-50/40 dark:bg-blue-950/20 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-5 text-center">
              Azure Data Engineering
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">

              {/* Databricks */}
              <div className="flex flex-col items-center gap-3 border border-orange-200 dark:border-orange-900 rounded-xl p-5 bg-white dark:bg-gray-900 hover:-translate-y-1 transition-transform">
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 text-white text-3xl font-black shadow-md">
                  ⚡
                </span>
                <span className="text-sm font-bold">Azure Databricks</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                  Unified analytics & ML on Apache Spark
                </span>
              </div>

              {/* Synapse */}
              <div className="flex flex-col items-center gap-3 border border-cyan-200 dark:border-cyan-900 rounded-xl p-5 bg-white dark:bg-gray-900 hover:-translate-y-1 transition-transform">
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-3xl font-black shadow-md">
                  ⚙
                </span>
                <span className="text-sm font-bold">Azure Synapse</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                  Integrated analytics & data warehousing
                </span>
              </div>

              {/* Snowflake */}
              <div className="flex flex-col items-center gap-3 border border-sky-200 dark:border-sky-900 rounded-xl p-5 bg-white dark:bg-gray-900 hover:-translate-y-1 transition-transform">
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white text-3xl font-black shadow-md">
                  ❄
                </span>
                <span className="text-sm font-bold">Snowflake</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                  Cloud data platform & data pipelines
                </span>
              </div>

            </div>
          </div>
        )}

      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded p-6">
            <h3 className="text-xl font-bold">HPC Monitoring</h3>
            <p className="opacity-70 mt-2">
              Observability pipeline using Kafka, OpenSearch,
              and LDMS for HPC clusters.
            </p>
          </div>

          <div className="border rounded p-6">
            <h3 className="text-xl font-bold">Kubernetes GitOps</h3>
            <p className="opacity-70 mt-2">
              GitOps infrastructure deployment using Helm,
              ArgoCD, and Terraform.
            </p>
          </div>

          <div className="border rounded p-6">
            <h3 className="text-xl font-bold">Cloud Automation</h3>
            <p className="opacity-70 mt-2">
              Infrastructure automation across AWS and Azure
              environments.
            </p>
          </div>

        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border p-6 rounded">
            <h3 className="font-bold">
              Kubernetes Monitoring Stack
            </h3>
            <p className="opacity-70 mt-2">
              Building a scalable observability stack
              for production clusters.
            </p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="font-bold">
              Kafka for Infrastructure Logs
            </h3>
            <p className="opacity-70 mt-2">
              How to stream system logs into a
              real-time analytics pipeline.
            </p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="font-bold">
              GitOps Best Practices
            </h3>
            <p className="opacity-70 mt-2">
              Managing Kubernetes deployments
              with Git workflows.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="opacity-70 mb-6">
          Interested in DevOps, cloud automation,
          or infrastructure engineering collaborations.
        </p>

        <a
          href="mailto:hello@venkatai.dev"
          className="border px-6 py-3 rounded"
        >
          hello@venkatai.dev
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 opacity-50">
        © 2026 VenkatAI
      </footer>

    </div>
  );
}