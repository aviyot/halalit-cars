import React, { useState } from "react";

const FilterBox = ({ filterType }) => {
  return (
    <div>
      <span>
        <label>{filterType.label}</label>
      </span>
      <span>
        <input></input>
      </span>
      <span>חפש</span>
    </div>
  );
};

const CarFilter = () => {
  const [filterTypes] = useState([
    {
      label: "סוג הרכב",
      req: true,
      sm: false,
    },
    {
      label: "יצרן",
      req: true,
      sm: true,
    },
    {
      label: "דגם",
      req: false,
      sm: true,
    },
    {
      label: "שנה",
      req: false,
      sm: true,
    },
    {
      label: "מחיר",
      req: false,
      sm: true,
    },
    {
      label: "אזור",
      req: false,
      sm: true,
    },
    {
      label: "נפח מנוע",
      req: false,
      sm: false,
    },
    {
      label: "תיבת הילוכים",
      req: false,
      sm: false,
    },
    {
      label: "תת דגם",
      req: false,
      sm: false,
    },
  ]);

  return (
    <div>
      <div>
        <span>סינון</span>
        <span>
          <span>x</span>
          <span>נקה הכל</span>
        </span>
      </div>
      <div>
        {filterTypes.map((filterType) => (
          <FilterBox filterType={filterType} key={filterType.label} />
        ))}
      </div>
      <div>
        <div>
          <span>חיפוש מתקדם</span>
        </div>
        <div>
          <span>חיפושים אחרונים</span>
        </div>
      </div>
      <div>
        <button>חפש</button>
      </div>
    </div>
  );
};

export default CarFilter;
