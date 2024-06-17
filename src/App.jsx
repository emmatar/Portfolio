import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
      <Container fluid className="p-0" id="page-container">
        <Header />
        <main id="content-wrap">
          <Outlet />
        </main>
        <Footer id="content-wrap"/>
      </Container>
  );
}

export default App;
