import React from "react";

const CarCard = ({ carDetial, setCarDetial }) => {
  return (
    <div
      className="w-100 br-15px bc-white pb-20px"
      style={{ boxShadow: "5px 10px 18px #888888" }}
      key={carDetial.name}
      onClick={() => {
        setCarDetial(carDetial);
      }}
    >
      <img src={carDetial.img} className="car-detial-img" />
      <h3 className="fw-700 fs-20px ff-rubik ">{carDetial.name}</h3>
      <span className="d-flex fs-16px">
        <span class="material-icons">pin_drop</span>
        <span>{carDetial.address}</span>
      </span>
      <h4>
        <div>
          <div
            className="d-flex g-8px p-8px fs-14px"
            style={{ backgroundColor: "#E2F1FF" }}
          >
            <span className="ta-center">
              <span
                className="ff-rubik fw-700 fs-14px"
                style={{
                  color: "#F0863A",
                }}
              >
                הצעה למימון
              </span>
              <span>
                החל מהחזר חודשי של :{" "}
                <span className="fs-700">
                  {" "}
                  {carDetial.proposal + " " + "שח"}
                </span>
              </span>
            </span>
            <span>
              <span
                className="ff-rubik fw-700 fs-14px ta-center"
                style={{
                  color: "#282932",
                }}
              >
                תוספות לעיסקה
              </span>
              <ul>
                {carDetial.adds.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </span>
          </div>
          <div className="d-flex g-8px jc-space-around fw-warp">
            <span className="d-flex g-2px fd-column">
              <span>שנת יצור</span>
              <span className="fs-16px fw-700">{carDetial.manYear}</span>
            </span>
            <span className="d-flex g-2px fd-column">
              <span>ק"מ</span>
              <span className="fs-16px fw-7000">{carDetial.km}</span>
            </span>
            <span className="d-flex g-8px fd-column">
              <span>יד</span>
              <span className="fs-16px fw-700">{carDetial.yad}</span>
            </span>
            <span className="d-flex g-2px fd-column">
              <span>גיר</span>
              <span className="fs-16px fw-700">{carDetial.girType}</span>
            </span>
          </div>
        </div>
      </h4>
      <div className="d-flex jc-center">
        <button
          className="w-60 c-white b-0 h-40px br-40px"
          style={{
            background: "linear-gradient(93.23deg, #EF8539 8.5%, #F7A66C 100%)",
            boxShadow: "0px 9px 15px rgba(184, 95, 31, 0.6)",
          }}
        >
          <span className="fs-18px fw-700">יצירת קשר</span>
        </button>
      </div>
    </div>
  );
};

export default CarCard;
