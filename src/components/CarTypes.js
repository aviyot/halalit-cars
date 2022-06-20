import React, { useState } from "react";
import lising from "../assets/carTypes/lising.png";
import geep from "../assets/carTypes/geep.png";
import masait from "../assets/carTypes/masait.png";
import mshari from "../assets/carTypes/mshari.png";
import myuhadim from "../assets/carTypes/myuhadim.png";
import ofona from "../assets/carTypes/ofona.png";
import prati from "../assets/carTypes/prati.png";
import shait from "../assets/carTypes/shait.png";

export default function CarTypes({ setSelectedCarType, setSelectedUI }) {
  const [carTypes, setCarTypes] = useState([
    {
      name: "ליסינג",
      imgSrc: lising,
    },
    {
      name: "פרטי",
      imgSrc: prati,
    },
    {
      name: "משאית",
      imgSrc: masait,
    },
    {
      name: "מסחרי",
      imgSrc: mshari,
    },
    {
      name: "גיפים",
      imgSrc: geep,
    },
    {
      name: "אופנועים",
      imgSrc: ofona,
    },
    {
      name: "כלי שייט",
      imgSrc: shait,
    },
    {
      name: "מיוחדים",
      imgSrc: myuhadim,
    },
  ]);

  return (
    <div
      className="grid-md grid-lg gap-8"
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
    >
      {carTypes.map((item) => (
        <div
          key={item.name}
          style={{
            background: "transparent",
          }}
          onClick={() => {
            setSelectedCarType(item.name);
            setSelectedUI("CAR_DETIAL_LIST");
          }}
        >
          <h3
            style={{
              marginRight: "1rem",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "36px",
              color: "#919497",
            }}
          >
            {item.name}
          </h3>
          <div
            style={{ boxShadow: "5px 10px 18px #888888", borderRadius: "2rem" }}
          >
            <img className="car-type-img" src={item.imgSrc} />
          </div>
        </div>
      ))}
    </div>
  );
}
