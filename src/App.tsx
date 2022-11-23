import { Layout } from "./components/Layout";
import { NavbarComponent } from "./components/Navbar";
import { inject } from "@vercel/analytics";

function App() {
  inject();

  return (
    <Layout>
      <NavbarComponent />
    </Layout>
  );
}

export default App;
