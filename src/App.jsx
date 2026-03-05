import { useState } from "react";
import VenkatStackLanding from "./landing-page";
import KubernetesPage from "./kubernetes-page";

function App() {
  const [page, setPage] = useState("home");

  if (page === "kubernetes") {
    return <KubernetesPage onBack={() => setPage("home")} />;
  }

  return <VenkatStackLanding onNavigate={setPage} />;
}

export default App;
