import React from "react";
import "./Footer.css";
import logoBlue from "../../src/assets/logoBlue.png";
import logoTextBlue from "../../src/assets/logoTextBlue.png";

export default function Footer() {
  return (
    <nav className="flex fixed buttom-0 footer flex-just-between w-100 px-8">
      <span className="flex flex-just-between gap-8">
        <a href="#">כל הזכיות שמורות</a>
        <span>|</span>
        <a href="#">חיפוש רכב</a>
        <a href="#">בדיקת ממון</a>
        <a href="#">פרסם מודעה</a>

        {/* <a href="#">רישום לנזיוזלטר</a> */}
      </span>
      <span
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <img style={{ width: "60px", height: "16px" }} src={logoBlue} />

        <img
          style={{ width: "80px", height: "16px", color: "blue" }}
          src={logoTextBlue}
        />
      </span>
    </nav>
  );
}
