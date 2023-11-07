import NavBar from "./NavBar";
import Title from "./Title";

export default function Header() {
  const HeaderStyle = {
    position: "fixed",
    width: "100%",
    top: "0px",
    zIndex: "2",
    backgroundColor: "white",
  };
  return (
    <header style={HeaderStyle}>
      <NavBar />
      <Title />
    </header>
  );
}
