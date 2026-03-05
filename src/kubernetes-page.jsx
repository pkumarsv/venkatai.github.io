export default function KubernetesPage({ onBack }) {
  const ckaTopics = [
    "Cluster Architecture, Installation & Configuration",
    "Workloads & Scheduling (Deployments, DaemonSets, Jobs)",
    "Services & Networking (CNI, DNS, Ingress)",
    "Storage (PV, PVC, StorageClasses)",
    "Troubleshooting (node & application-level)",
  ];

  const ckadTopics = [
    "Application Design & Build (multi-container pods, init containers)",
    "Application Deployment (rolling updates, Helm basics)",
    "Application Observability & Maintenance (probes, logs, metrics)",
    "Application Environment, Config & Security (RBAC, Secrets, ConfigMaps)",
    "Services & Networking (NetworkPolicies, Ingress)",
  ];

  const cksTopics = [
    { label: "Cluster Setup & Hardening", done: true },
    { label: "System Hardening (AppArmor, Seccomp, OS-level)", done: true },
    { label: "Minimize Microservice Vulnerabilities (PSA, OPA, Falco)", done: true },
    { label: "Supply Chain Security (image scanning, signing)", done: false },
    { label: "Monitoring, Logging & Runtime Security (Falco rules)", done: false },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">

      {/* TOP NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>
          <span className="text-gray-300 dark:text-gray-700">|</span>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Kubernetes Certifications</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <i className="devicon-kubernetes-plain colored" style={{ fontSize: "5rem" }}></i>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">Kubernetes Expertise</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Dual-certified Kubernetes professional with hands-on experience deploying, operating,
            and securing production-grade clusters.
          </p>
          {/* Cert badges row */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg">
              ✓ CKA — Certified
            </span>
            <span className="flex items-center gap-2 bg-indigo-600 text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg">
              ✓ CKAD — Certified
            </span>
            <span className="flex items-center gap-2 bg-yellow-500 text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg">
              ⏳ CKS — In Progress
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* CKA CARD */}
        <div className="rounded-2xl border border-blue-200 dark:border-blue-800 overflow-hidden shadow-sm">
          <div className="bg-blue-600 px-8 py-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1 block">Linux Foundation</span>
              <h2 className="text-2xl font-bold text-white">Certified Kubernetes Administrator</h2>
              <p className="text-blue-200 text-sm mt-1">CKA</p>
            </div>
            <span className="bg-white text-blue-700 font-bold text-sm px-4 py-2 rounded-full flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Certified
            </span>
          </div>
          <div className="bg-white dark:bg-gray-900 px-8 py-6">
            <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Validates expertise in cluster administration, workload management, networking,
              storage, and real-world troubleshooting in a timed, hands-on exam environment.
            </p>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">Domains Covered</h3>
            <ul className="space-y-2">
              {ckaTopics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {i + 1}
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CKAD CARD */}
        <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 overflow-hidden shadow-sm">
          <div className="bg-indigo-600 px-8 py-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-1 block">Linux Foundation</span>
              <h2 className="text-2xl font-bold text-white">Certified Kubernetes Application Developer</h2>
              <p className="text-indigo-200 text-sm mt-1">CKAD</p>
            </div>
            <span className="bg-white text-indigo-700 font-bold text-sm px-4 py-2 rounded-full flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Certified
            </span>
          </div>
          <div className="bg-white dark:bg-gray-900 px-8 py-6">
            <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Validates skills in designing, building, and deploying cloud-native applications on Kubernetes.
              Covers application lifecycle management, observability, environment configuration, and security.
            </p>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">Domains Covered</h3>
            <ul className="space-y-2">
              {ckadTopics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {i + 1}
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CKS CARD — In Progress */}
        <div className="rounded-2xl border border-yellow-200 dark:border-yellow-800 overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-100 mb-1 block">Linux Foundation</span>
              <h2 className="text-2xl font-bold text-white">Certified Kubernetes Security Specialist</h2>
              <p className="text-yellow-100 text-sm mt-1">CKS — Currently Preparing</p>
            </div>
            <span className="bg-white text-yellow-700 font-bold text-sm px-4 py-2 rounded-full flex items-center gap-2">
              ⏳ In Progress
            </span>
          </div>
          <div className="bg-white dark:bg-gray-900 px-8 py-6">
            <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              The CKS is the most advanced Kubernetes certification, focusing on securing
              cluster infrastructure, minimizing microservice vulnerabilities, and supply chain
              security. Actively preparing for the exam.
            </p>

            {/* Overall progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                <span>Overall Preparation Progress</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">Preparation Status by Domain</h3>
            <ul className="space-y-3">
              {cksTopics.map((topic, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    topic.done
                      ? "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                  }`}>
                    {topic.done ? "✓" : "○"}
                  </span>
                  <span className={topic.done ? "" : "text-gray-400 dark:text-gray-500"}>{topic.label}</span>
                  {topic.done && (
                    <span className="ml-auto text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full">Done</span>
                  )}
                  {!topic.done && (
                    <span className="ml-auto text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-2 py-0.5 rounded-full">In Progress</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Interested in Kubernetes infrastructure, platform engineering, or security?</p>
          <a
            href="mailto:venkat@venkatai.dev"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,12 2,6"/>
            </svg>
            venkat@venkatai.dev
          </a>
          <div className="mt-6">
            <button
              onClick={onBack}
              className="text-sm text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline underline-offset-2"
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
