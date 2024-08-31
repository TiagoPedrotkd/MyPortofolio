import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import ScrollRevealConfig from "./components/ScrollRevealConfig";

function App() {
  return (
    <>
      <ScrollRevealConfig />
      <Layout>
        <Main />
      </Layout>
    </>
  );
}

export default App;
