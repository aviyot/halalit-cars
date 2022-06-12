import "./CarDetial.css";
import CarTypes from "./CarTypes";

const CarDetial = ({ carDetial, setCarDetial }) => {
  return (
    <div className="flex w-100 h-100 dir-col p-8">
      <div className="flex flex-just-between ">
        <div className="flex dir-col align-self-center">
          <span>{carDetial.name}</span>
          <span>{carDetial.address}</span>
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
            <span style={{ font: "Robik", fontWeight: "600" }}>
              חזרה לרכבים
            </span>
          </span>
        </button>
      </div>
      <div className="flex flex-just-center" style={{ flexBasis: "300px" }}>
        <div
          className="w-100 h-100"
          style={{
            backgroundImage: `url(${carDetial.img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        ></div>
      </div>
      <div
        className="flex flex-just-between "
        style={{ flexBasis: "20%", backgroundColor: "#D7E8F7" }}
      >
        <div
          className="flex dir-col flex-align-center"
          style={{ flex: "1", borderLeft: "1px" }}
        >
          <span>מחיר</span>
          <span>{carDetial.price}</span>
        </div>
        <div className="flex dir-col flex-align-center" style={{ flex: "1" }}>
          <span>הצעת מימון</span>
          <span>{carDetial.proposal}</span>
        </div>
      </div>
      <div className="flex flex-just-around">
        <div>שנה:{carDetial.manYear}</div>
        <div> יד: {carDetial.yad}</div>
        <div> נפח מנוע : {carDetial.engineSize} סמק</div>
      </div>
      <div className="flex dir-col">
        <div className="flex">
          <span>פרטי הרכב</span>
        </div>
        <div className="flex flex-just-between">
          <span>קילומטר נוכחי:</span>
          <span>{carDetial.km}</span>
        </div>
        <div className="flex flex-just-between">
          <span>סוג מנוע:</span>
          <span>
            {carDetial.engineSize}+ ' ליטר '{carDetial.engineType}
          </span>
        </div>
        <div className="flex flex-just-between">
          <span>בעלות מקורית:</span>
          <span>{carDetial.balut}</span>
        </div>
        <div className="flex flex-just-between">
          <span>תיבת הילוכים:</span>
          <span>{carDetial.girType}</span>
        </div>
        <div className="flex flex-just-between">
          <span>צבע:</span>
          <span>{carDetial.color}</span>
        </div>
        <div className="flex flex-just-between">
          <span>דגם:</span>
          <span>{carDetial.model}</span>
        </div>
        <div className="flex flex-just-between">
          <span>שנה:</span>
          <span>{carDetial.manYear}</span>
        </div>
        <div className="flex flex-just-between">
          <span>יד:</span>
          <span>{carDetial.yad}</span>
        </div>
      </div>
      <div className="flex flex-just-center">
        <span>פנה בוואסצאפ</span>
      </div>
      <div className="flex flex-just-center dir-col flex-align-center ">
        <div>צור קשר: {carDetial.tel}</div>
        <div>שם:{carDetial.contactName}</div>
      </div>
    </div>
  );
};

export default CarDetial;
