import "./CarDetial.css";
import CarTypes from "./CarTypes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faShekelSign, faEnvelope } from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon="fa-solid fa-envelope" />;

const CarDetial = ({ carDetial, setCarDetial }) => {
  return (
    <>
      <div className="flex w-100 h-100 dir-col p-8 ff-rubik d-md">
        <div className="flex flex-just-between ">
          <div className="flex dir-col align-self-center">
            <span
              className="fw-700 fs-26"
              style={{
                color: "#378AD7",
              }}
            >
              {carDetial.name}
            </span>
            <span className="fw-400 fs-18">{carDetial.address}</span>
          </div>
          <button
            className="bg-trans b-0"
            style={{
              alignSelf: "center",
              margin: "2rem",
              borderRadius: "30px",
              width: "120px",
              height: "40px",
              backgroundColor: "white",
              color: "#378AD7",
            }}
            onClick={() => {
              setCarDetial(null);
            }}
          >
            <span className="flex" style={{ justifyContent: "space-around" }}>
              <span class="material-icons">arrow_forward</span>
              <span className="fw-700" style={{ color: "#378AD7" }}>
                חזרה לרכבים
              </span>
            </span>
          </button>
        </div>
        <div
          className="flex h-100 flex-just-center"
          style={{ flexBasis: "300px" }}
        >
          <div
            className="w-100 h-100 .p-rel"
            style={{
              backgroundImage: `url(${carDetial.img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="p-abs w-100 h-100 flex flex-just-between p-8">
              <div className="align-self-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                  <path
                    d="M15.2 43.9 12.4 41.05 29.55 23.9 12.4 6.75 15.2 3.9 35.2 23.9Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="align-self-end flex g-8f">
                <span className="b-100  bg-white p-8 br-100 w-8f h-8f"></span>
                <span className="b-100  bg-white p-8 br-100 w-8f h-8f"></span>
                <span
                  className="b-100 bg-white p-8 br-100 w-8f h-8f"
                  style={{ backgroundColor: "#6EBDF7" }}
                ></span>
              </div>
              <div className="align-self-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                  <path
                    d="M20 44 0 24 20 4 22.8 6.85 5.65 24 22.8 41.15Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-just-between flex-align-center "
          style={{
            flexBasis: "120px",
            backgroundColor: "#D7E8F7",
            boxShadow: "0px 3px 9px rgba(0, 0, 0, 0.13)",
            marginBottom: "36px",
          }}
        >
          <div className="flex dir-col flex-align-center" style={{ flex: "1" }}>
            <span className="ff-rubik fw-400 fs-20">מחיר</span>
            <span>
              <span className="ff-rubik fw-500 fs-24">{carDetial.price}</span>
              <FontAwesomeIcon icon={faShekelSign} />
            </span>
          </div>
          <hr
            style={{
              flexBasis: "80px",
              transform: "rotate(90deg)",
            }}
          />
          <div className="flex dir-col flex-align-center" style={{ flex: "1" }}>
            <span className="ff-rubik fw-400 fs-20">הצעת מימון</span>
            <span>
              <span className="ff-rubik fw-500 fs-24">
                {carDetial.proposal}
              </span>
              <FontAwesomeIcon icon={faShekelSign} />
            </span>
          </div>
        </div>
        <div
          className="flex flex-just-around fs-18"
          style={{
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
            padding: "8px",
          }}
        >
          <div>
            <span>שנה:</span>
            <span className="fw-700"> {carDetial.manYear}</span>
          </div>
          <div>
            <span>יד:</span>
            <span className="fw-700"> {carDetial.yad}</span>
          </div>
          <div>
            <span>נפח מנוע :</span>
            <span className="fw-700"> {carDetial.engineSize} סמ"ק</span>
          </div>
        </div>
        <div className="flex dir-col p-8 gap-8 m-32f  ">
          <div className="flex">
            <span>פרטי הרכב</span>
          </div>
          <div className="flex flex-just-between">
            <span className="fs-16 fw-400">קילומטר נוכחי:</span>
            <span className="fs-16 fw-500">{carDetial.km}</span>
          </div>
          <div className="flex flex-just-between">
            <span className="fs-16 fw-400">סוג מנוע:</span>
            <span className="fs-16 fw-500">
              {carDetial.engineSize} ליטר {carDetial.engineType}
            </span>
          </div>
          <div className="flex flex-just-between">
            <span className="fs-16 fw-400">בעלות מקורית:</span>
            <span className="fs-16 fw-500">{carDetial.balut}</span>
          </div>
          <div className="flex flex-just-between">
            <span className="fs-16 fw-400">תיבת הילוכים:</span>
            <span className="fs-16 fw-500">{carDetial.girType}</span>
          </div>
          <div className="flex flex-just-between">
            <span className="fs-16 fw-400">צבע:</span>
            <span className="fs-16 fw-500">{carDetial.color}</span>
          </div>
          <div className="flex flex-just-between">
            <span className="fs-16 fw-400">דגם:</span>
            <span className="fs-16 fw-500">{carDetial.model}</span>
          </div>
          <div className="flex flex-just-between">
            <span className="fs-16 fw-400">שנה:</span>
            <span className="fs-16 fw-500">{carDetial.manYear}</span>
          </div>
          <div className="flex flex-just-between">
            <span className="fs-16 fw-400">יד:</span>
            <span className="fs-16 fw-500">{carDetial.yad}</span>
          </div>
        </div>
        <div className="flex dir-col  flex-align-center p-8">
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ color: "green", fontSize: "48px" }}
          />
          <span>פנה בוואצ׳אפ</span>
        </div>
        <div
          className="flex flex-just-center dir-col flex-align-center m-8 p-32f gap-8"
          style={{ background: "rgba(215, 232, 247, 0.4)" }}
        >
          <div>
            <span class="material-icons">phone_in_talk</span>
            <span>צור קשר:</span>
            <span> {carDetial.tel}</span>
          </div>
          <div>
            <span class="material-icons">person</span>
            <span>שם:</span>
            <span>{carDetial.contactName}</span>
          </div>
        </div>
      </div>
      <div className="cmp-desktop w-100 h-100 flex dir-col d-lg p-32f">
        <div className="cmp-header f-g-1f">
          <div className="flex flex-just-between ">
            <div className="flex dir-col align-self-center">
              <span
                className="fw-700 fs-26"
                style={{
                  color: "#378AD7",
                }}
              >
                {carDetial.name}
              </span>
              <span className="fw-400 fs-18">{carDetial.address}</span>
            </div>
            <button
              className="bg-trans b-0"
              style={{
                alignSelf: "center",
                margin: "2rem",
                borderRadius: "30px",
                width: "120px",
                height: "40px",
                backgroundColor: "white",
                color: "#378AD7",
              }}
              onClick={() => {
                setCarDetial(null);
              }}
            >
              <span className="flex" style={{ justifyContent: "space-around" }}>
                <span class="material-icons">arrow_forward</span>
                <span className="fw-700" style={{ color: "#378AD7" }}>
                  חזרה לרכבים
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="cmp-body flex g-32f  f-g-1f">
          <div className="cmp-right f-g-1f flex dir-col">
            <div className="cmp-proposal f-g-1f ">
              <div
                className="flex flex-just-between flex-align-center "
                style={{
                  flexBasis: "120px",
                  backgroundColor: "#D7E8F7",
                  boxShadow: "0px 3px 9px rgba(0, 0, 0, 0.13)",
                  marginBottom: "36px",
                }}
              >
                <div
                  className="flex dir-col flex-align-center"
                  style={{ flex: "1" }}
                >
                  <span className="ff-rubik fw-400 fs-20">מחיר</span>
                  <span>
                    <span className="ff-rubik fw-500 fs-24">
                      {carDetial.price}
                    </span>
                    <FontAwesomeIcon icon={faShekelSign} />
                  </span>
                </div>
                <hr
                  style={{
                    flexBasis: "80px",
                    transform: "rotate(90deg)",
                  }}
                />
                <div
                  className="flex dir-col flex-align-center"
                  style={{ flex: "1" }}
                >
                  <span className="ff-rubik fw-400 fs-20">הצעת מימון</span>
                  <span>
                    <span className="ff-rubik fw-500 fs-24">
                      {carDetial.proposal}
                    </span>
                    <FontAwesomeIcon icon={faShekelSign} />
                  </span>
                </div>
              </div>
            </div>
            <div className="cmp-contact f-g-1f ">
              <div
                className="flex flex-just-center dir-col flex-align-center m-8 p-32f gap-8"
                style={{ background: "rgba(215, 232, 247, 0.4)" }}
              >
                <div>
                  <span class="material-icons">phone_in_talk</span>
                  <span>צור קשר:</span>
                  <span> {carDetial.tel}</span>
                </div>
                <div>
                  <span class="material-icons">person</span>
                  <span>שם:</span>
                  <span>{carDetial.contactName}</span>
                </div>
              </div>
            </div>
            <div className="cmp-car-detial f-g-1f ">
              <div className="flex dir-col p-8 gap-8 m-32f  ">
                <div className="flex">
                  <span>פרטי הרכב</span>
                </div>
                <div className="flex flex-just-between">
                  <span className="fs-16 fw-400">קילומטר נוכחי:</span>
                  <span className="fs-16 fw-500">{carDetial.km}</span>
                </div>
                <div className="flex flex-just-between">
                  <span className="fs-16 fw-400">סוג מנוע:</span>
                  <span className="fs-16 fw-500">
                    {carDetial.engineSize} ליטר {carDetial.engineType}
                  </span>
                </div>
                <div className="flex flex-just-between">
                  <span className="fs-16 fw-400">בעלות מקורית:</span>
                  <span className="fs-16 fw-500">{carDetial.balut}</span>
                </div>
                <div className="flex flex-just-between">
                  <span className="fs-16 fw-400">תיבת הילוכים:</span>
                  <span className="fs-16 fw-500">{carDetial.girType}</span>
                </div>
                <div className="flex flex-just-between">
                  <span className="fs-16 fw-400">צבע:</span>
                  <span className="fs-16 fw-500">{carDetial.color}</span>
                </div>
                <div className="flex flex-just-between">
                  <span className="fs-16 fw-400">דגם:</span>
                  <span className="fs-16 fw-500">{carDetial.model}</span>
                </div>
                <div className="flex flex-just-between">
                  <span className="fs-16 fw-400">שנה:</span>
                  <span className="fs-16 fw-500">{carDetial.manYear}</span>
                </div>
                <div className="flex flex-just-between">
                  <span className="fs-16 fw-400">יד:</span>
                  <span className="fs-16 fw-500">{carDetial.yad}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cmp-left flex dir-col f-g-1f ">
            <div className="cmp-img  f-g-1f">
              <div
                className="flex h-100 flex-just-center"
                style={{ flexBasis: "300px" }}
              >
                <div
                  className="w-100 h-100 .p-rel"
                  style={{
                    backgroundImage: `url(${carDetial.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "70% 70%",
                  }}
                >
                  <div className="p-abs w-100 h-100 flex flex-just-between p-8">
                    <div className="align-self-center p-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        width="48"
                      >
                        <path
                          d="M15.2 43.9 12.4 41.05 29.55 23.9 12.4 6.75 15.2 3.9 35.2 23.9Z"
                          fill="#6EBDF7"
                        />
                      </svg>
                    </div>
                    <div className="align-self-end flex g-8f">
                      <span className="b-100 bg-grey  p-8 br-100 w-8f h-8f"></span>
                      <span className="b-100  bg-grey p-8 br-100 w-8f h-8f"></span>
                      <span
                        className="b-100 bg-white p-8 br-100 w-8f h-8f"
                        style={{ backgroundColor: "#6EBDF7" }}
                      ></span>
                    </div>
                    <div className="align-self-center p-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        width="48"
                      >
                        <path
                          d="M20 44 0 24 20 4 22.8 6.85 5.65 24 22.8 41.15Z"
                          fill="#6EBDF7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cmp-contact-icons flex  jc-center  flex-align-center  f-g-1f ">
              <div className="flex  dir-col flex-align-center p-8 ">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "green", fontSize: "48px" }}
                />
                <span>פנה בוואצ׳אפ</span>
              </div>
              <div className="flex dir-col  flex-align-center p-16f">
                <div
                  className="br-100 p-8"
                  style={{ backgroundColor: "orange" }}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "white", fontSize: "32px" }}
                  />
                </div>
                <span>פנה במייל</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetial;
