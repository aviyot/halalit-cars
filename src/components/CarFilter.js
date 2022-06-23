import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const FilterBox = ({ filterType }) => {
  const [showOptions, setShowOpthions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="br-10 mw-250px">
      <div className="d-flex p-relative ">
        <span className="fb-0px fs-0 fg-1 bc-white c-black bbrr-100 btrr-100 p-8">
          {filterType.req && <label>*</label>}
          <label className="ws-nowarp">{filterType.label}</label>
        </span>
        <span className="d-flex jc-space-between fb-0px  fs-0  fg-1 bc-white c-black  p-8">
          <span className="bc-white   c-black">{selectedOption}</span>
          {selectedOption && (
            <button
              className="bc-transparent b-0 c-red"
              onClick={() => {
                setSelectedOption("");
              }}
            >
              x
            </button>
          )}
          {showOptions && (
            <div className=" p-absolute d-flex fd-column bc-grey c-white g-8px zi-100 fb-60">
              {filterType.opthion.map((opt) => (
                <div
                  className="cm-filter-option m-0px p-8px"
                  onClick={() => {
                    setSelectedOption(opt);
                    setShowOpthions(false);
                  }}
                  key={opt}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </span>
        <span className="fb-0px fg-1  btlr-100 bblr-100 bc-white d-flex ai-center jc-center">
          <FontAwesomeIcon
            style={{ fill: "black" }}
            icon={faCircleArrowDown}
            onClick={() => {
              showOptions ? setShowOpthions(false) : setShowOpthions(true);
            }}
          />
        </span>
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
    <div className="d-flex fd-column g-40px mr-8px ml-8px">
      <div className="d-flex fd-column">
        <div>
          <div className="d-flex jc-space-between ai-center">
            <span className="fw-600 fs-28px">סינון</span>
            <span className="d-flex g-8px">
              <span>x</span>
              <span>נקה הכל</span>
            </span>
          </div>
          <hr />
        </div>
        <div className="d-flex fd-column g-8px">
          {filterTypes.map((filterType) => (
            <FilterBox
              filterType={filterType}
              clearFilter={clearFilter}
              setClerFilter={setClerFilter}
              key={filterType.label}
            />
          ))}
        </div>
      </div>
      <div className="as-center">
        <div>
          <span className="fs-22 fw-600">חיפוש מתקדם</span>
        </div>
        <div>
          <span className="fs-22">חיפושים אחרונים</span>
        </div>
      </div>
      <div className="as-center w-100 d-flex jc-center">
        <button className="b-0 c-white b-lg--1 bs--1 fs-30px br-40px w-80">
          חפש
        </button>
      </div>
    </div>
  );
};

export default CarFilter;
