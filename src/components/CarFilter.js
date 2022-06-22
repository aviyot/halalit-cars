import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const FilterBox = ({ filterType }) => {
  const [showOptions, setShowOpthions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="m-8 mw-30 br-10 ">
      <div className="d-flex m-8 p-relative ">
        <span className="fb-0px fs-0 fg-1 bc-white c-black bbrr-100 btrr-100 p-8">
          {filterType.req && <label>*</label>}
          <label className="ws-nowarp">{filterType.label}</label>
        </span>
        <span className="fb-0px  fs-0  fg-1 bc-white c-black  p-8">
          <span className="bc-white   c-black">{selectedOption}</span>
          {showOptions && (
            <ul className="p-absolute bc-black c-white zi-100 fb-60">
              {filterType.opthion.map((opt) => (
                <li
                  onClick={() => {
                    setSelectedOption(opt);
                    setShowOpthions(false);
                  }}
                  key={opt}
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </span>
        <button
          className="fb-0px  fs-0  fg-1 bc-white   c-black btlr-100 bblr-100  p-8 b-0 bc-transparent"
          onClick={() => {
            showOptions ? setShowOpthions(false) : setShowOpthions(true);
          }}
        >
          <FontAwesomeIcon icon={faCircleArrowDown} />
        </button>
      </div>
    </div>
  );
};

const CarFilter = () => {
  const [clearFilter, setClerFilter] = useState(false);
  const [filterTypes] = useState([
    {
      label: "סוג הרכב",
      opthion: ["משאית", "פרטי"],
      req: true,
      sm: false,
    },
    {
      label: "יצרן",
      opthion: ["מאזדה", "סקודה"],

      req: true,
      sm: true,
    },
    {
      label: "דגם",
      opthion: ["סטנדרט", "מפואר"],

      req: false,
      sm: true,
    },
    {
      label: "שנה",
      opthion: [2021, 2022, 2020],

      req: false,
      sm: true,
    },
    {
      label: "מחיר",
      opthion: [30000, 60000, 100000],

      req: false,
      sm: true,
    },
    {
      label: "אזור",
      opthion: ["דרום", "מרכז", "צפון"],

      req: false,
      sm: true,
    },
    {
      label: "נפח מנוע",
      opthion: [1300, 1600, 2000],

      req: false,
      sm: false,
    },
    {
      label: "תיבת הילוכים",
      opthion: ["ידני", "אוטומט"],

      req: false,
      sm: false,
    },
    {
      label: "תת דגם",
      opthion: [],

      req: false,
      sm: false,
    },
  ]);

  return (
    <div className="d-flex fd-column g-8  ">
      <div>
        <div className="d-flex jc-space-between">
          <span>סינון</span>
          <span className="d-flex g-8px">
            <span>x</span>
            <span>נקה הכל</span>
          </span>
        </div>
        <hr />
      </div>
      <div className="d-flex fd-column">
        {filterTypes.map((filterType) => (
          <FilterBox
            filterType={filterType}
            clearFilter={clearFilter}
            setClerFilter={setClerFilter}
            key={filterType.label}
          />
        ))}
      </div>
      <div className="as-center">
        <div>
          <span>חיפוש מתקדם</span>
        </div>
        <div>
          <span>חיפושים אחרונים</span>
        </div>
      </div>
      <div className="as-center">
        <button className="bg-transparent b-0 c-white">חפש</button>
      </div>
    </div>
  );
};

export default CarFilter;
