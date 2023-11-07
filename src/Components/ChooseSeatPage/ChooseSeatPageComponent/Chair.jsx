import { useState } from "react";

export default function Chair({ chairObj, onAddItem, onDeleteItem, ticket }) {
  const [color, setColor] = useState("#ffffffbb");
  const [visibility, setVisibility] = useState("hidden");

  return (
    <>
      <div
        class="full-chair"
        onMouseOver={() => {
          chairObj.column !== "0"
            ? setVisibility("visible")
            : setVisibility("hidden");
        }}
        onMouseOut={() => {
          setVisibility("hidden");
        }}
      >
        <div
          className="chair"
          style={{
            backgroundColor: chairObj.column === "0" ? "none" : color,
            pointerEvents: chairObj.column === "0" ? "none" : "all",
          }}
          onClick={() => {
            color !== "red" && ticket < 10
              ? setColor("red")
              : setColor("#ffffffbb");
            color !== "red" && ticket < 10
              ? onAddItem(chairObj)
              : onDeleteItem(chairObj);
            ticket === 10 && color !== "red"
              ? alert("در هر خرید، تا سقف 10 بلیت می‌توانید انتخاب کنید")
              : console.log("a");
          }}
        />
        <span class="popup" style={{ visibility: visibility }}>
          <div className="chair-inf">
            <div>
              <div>صندلی</div>
              <div className="b7">{chairObj.column}</div>
            </div>
            <div className="separator" />
            <div>
              <div>ردیف</div>
              <div className="b7">{chairObj.row}</div>
            </div>
          </div>
          <div className="price">{chairObj.price}</div>
        </span>
      </div>
    </>
  );
}
