import { useState } from "react";

export default function VenkatLanding() {
  const [dark, setDark] = useState(true);

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <i className="devicon-kubernetes-plain colored text-5xl"></i>
            <span className="text-sm font-semibold">Kubernetes</span>
          </div>

          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <i className="devicon-docker-plain colored text-5xl"></i>
            <span className="text-sm font-semibold">Docker</span>
          </div>

          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <i className="devicon-amazonwebservices-original colored text-5xl"></i>
            <span className="text-sm font-semibold">AWS</span>
          </div>

          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <i className="devicon-terraform-plain colored text-5xl"></i>
            <span className="text-sm font-semibold">Terraform</span>
          </div>

          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <span className="text-5xl font-bold text-orange-500 leading-none">K</span>
            <span className="text-sm font-semibold">Kafka</span>
          </div>

          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <span className="text-5xl font-bold text-blue-500 leading-none">OS</span>
            <span className="text-sm font-semibold">OpenSearch</span>
          </div>

          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <i className="devicon-linux-plain text-5xl"></i>
            <span className="text-sm font-semibold">Linux</span>
          </div>

          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:-translate-y-1 transition-transform">
            <i className="devicon-github-original text-5xl"></i>
            <span className="text-sm font-semibold">CI/CD</span>
          </div>

        </div>
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