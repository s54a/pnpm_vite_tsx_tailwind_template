import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
  const location = useLocation();

  const showHeaderFooter = location.pathname !== "/login";

  return (
    <>
      {showHeaderFooter && <Header />}
      <Outlet />
      {showHeaderFooter && <Footer />}
      <ToastContainer />
    </>
  );
};

export default App;
