import React, { useState } from "react";
import CarFilter from "./CarFilter";
import car_detail_list from "../data/car_detail_list.json";
import CarCard from "./CarCard";

const CarFilterResult = () => {
  const [newCars] = useState(car_detail_list);
  const [upPriceCars] = useState(car_detail_list);

  return (
    <div className="d-flex">
      <div className="bg--prim1 c-white">
        <CarFilter />
      </div>
      <div>
        <div>
          <h2>חדשים באתר</h2>
          <div className="d-flex">
            {newCars.map((carDetial) => (
              <div className="fb-25  mw-300px">
                <CarCard carDetial={carDetial} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>רכבים עד 50,0000</h2>
          <div className="d-flex">
            {upPriceCars.map((carDetial) => (
              <div className="fb-25 mw-300px">
                <CarCard carDetial={carDetial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFilterResult;
