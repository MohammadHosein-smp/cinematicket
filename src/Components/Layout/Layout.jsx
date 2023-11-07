import NavBar from "../HomePage/Header/NavBar";
import Footer from "../HomePage/Footer";

export default function Layout({ children }) {
  const NavStyle = {
    position: "fixed",
    width: "100%",
    backgroundColor: "white",
    zIndex: "2",
  };
  return (
    <>
      <div style={NavStyle}>
        <NavBar />
      </div>
      {children}
      <Footer />
    </>
  );
}
