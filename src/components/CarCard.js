import React from "react";

const CarCard = ({ carDetial, setCarDetial }) => {
  return (
    <div
      key={carDetial.name}
      style={{
        Width: "100%",
        borderRadius: "15px",
        boxShadow: "5px 10px 18px #888888",
        paddingBottom: "20px",
        backgroundColor: "white",
      }}
      onClick={() => {
        setCarDetial(carDetial);
      }}
    >
      <img src={carDetial.img} className="car-detial-img" />
      <h3 style={{ fontSize: "20px", font: "Robik", fontWeight: "700" }}>
        {carDetial.name}
      </h3>
      <span className="flex" style={{ fontSize: "16px" }}>
        <span class="material-icons">pin_drop</span>
        <span>{carDetial.address}</span>
      </span>
      <h4>
        <div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              backgroundColor: "#E2F1FF",
              padding: "8px",
              fontSize: "14px",
            }}
          >
            <span style={{ textAlign: "right" }}>
              <span
                style={{
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "36px",
                  textAlign: "right",
                  color: "#F0863A",
                  display: "block",
                }}
              >
                הצעה למימון
              </span>
              <span>
                החל מהחזר חודשי של :{" "}
                <span style={{ fontWeight: "700" }}>
                  {" "}
                  {carDetial.proposal + " " + "שח"}
                </span>
              </span>
            </span>
            <span>
              <span
                style={{
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "36px",
                  textAlign: "right",
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
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-around",
              fontSize: "14px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "flex",
                gap: "2px",
                flexDirection: "column",
              }}
            >
              <span>שנת יצור</span>
              <span style={{ fontSize: "16px", fontWeight: "700" }}>
                {carDetial.manYear}
              </span>
            </span>
            <span
              style={{
                display: "flex",
                gap: "2px",
                flexDirection: "column",
              }}
            >
              <span>ק"מ</span>
              <span style={{ fontSize: "16px", fontWeight: "700" }}>
                {carDetial.km}
              </span>
            </span>
            <span
              style={{
                display: "flex",
                gap: "2px",
                flexDirection: "column",
              }}
            >
              <span>יד</span>
              <span style={{ fontSize: "16px", fontWeight: "700" }}>
                {carDetial.yad}
              </span>
            </span>
            <span
              style={{
                display: "flex",
                gap: "2px",
                flexDirection: "column",
              }}
            >
              <span>גיר</span>
              <span style={{ fontSize: "16px", fontWeight: "700" }}>
                {carDetial.girType}
              </span>
            </span>
          </div>
        </div>
      </h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          variant="primary"
          style={{
            width: "60%",
            color: "white",
            border: 0,
            height: "40px",
            background: "linear-gradient(93.23deg, #EF8539 8.5%, #F7A66C 100%)",
            boxShadow: "0px 9px 15px rgba(184, 95, 31, 0.6)",
            borderRadius: "40px",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "36px",
            }}
          >
            יצירת קשר
          </span>
        </button>
      </div>
    </div>
  );
};

export default CarCard;
