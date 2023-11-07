export default function Description({ slide }) {
  return (
    <div>{slide.description.split(" ").slice(0, 10).join(" ") + "..."}</div>
  );
}
