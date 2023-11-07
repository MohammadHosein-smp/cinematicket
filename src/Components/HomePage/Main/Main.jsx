import Slider from "./Slider/Slider";
import Movies from "./Movie";

export default function Main() {
  const MainStyle = {
    backgroundColor: "rgb(0, 0, 0, 0.05)",
    padding: "120px 0px 60px 0px",
  };
  return (
    <div style={MainStyle}>
      <Slider />
      <Movies />
    </div>
  );
}
