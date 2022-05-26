import React from "react";
import "./Footer.css";
import logoBlue from "../../src/assets/logoBlue.png";
import logoTextBlue from "../../src/assets/logoTextBlue.png";

export default function Footer() {
  return (
    <nav className="navbar fixed-bottom footer  bg-white">
      <span
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "100px", height: "24px", color: "blue" }}
          src={logoTextBlue}
        />
        <img style={{ width: "90px", height: "40px" }} src={logoBlue} />
      </span>
      <span className="d-flex justify-content-between gap-4 flex-row-reverse">
        <a href="#">כל הזכיות שמורות</a>
        <span>|</span>
        <a href="#">חיפוש רכב</a>
        <a href="#">בדיקת ממון</a>
        <a href="#">פרסם מודעה</a>

        <a href="#">רישום לנזיוזלטר</a>
      </span>
    </nav>
  );
}
