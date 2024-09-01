import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import ScrollRevealConfig from "./components/ScrollRevealConfig";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <ScrollRevealConfig />
      <Layout>
        <Main />
      </Layout>
    </>
  );
}

export default App;
