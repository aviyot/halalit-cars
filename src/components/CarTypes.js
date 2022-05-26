import React, { useState } from "react";
import Card from "react-bootstrap/Card";

export default function CarTypes() {
  const [carTypes, setCarTypes] = useState([
    {
      name: "פרטי",
      imgSrc:
        "https://images.unsplash.com/photo-1616422285623-13ff0162193c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600",
    },
    {
      name: "משאית",
      imgSrc:
        "https://media.istockphoto.com/photos/cloesup-view-of-a-long-haul-semi-truck-speeding-down-the-highway-picture-id1213020206?k=20&m=1213020206&s=612x612&w=0&h=F6tgLpNIOb8OLXT0BLyKzLbEsmSffzdfLW3el7ToILw=",
    },
    {
      name: "משאית",
      imgSrc:
        "https://media.istockphoto.com/photos/cloesup-view-of-a-long-haul-semi-truck-speeding-down-the-highway-picture-id1213020206?k=20&m=1213020206&s=612x612&w=0&h=F6tgLpNIOb8OLXT0BLyKzLbEsmSffzdfLW3el7ToILw=",
    },
    {
      name: "משאית",
      imgSrc:
        "https://media.istockphoto.com/photos/cloesup-view-of-a-long-haul-semi-truck-speeding-down-the-highway-picture-id1213020206?k=20&m=1213020206&s=612x612&w=0&h=F6tgLpNIOb8OLXT0BLyKzLbEsmSffzdfLW3el7ToILw=",
    },
    {
      name: "משאית",
      imgSrc:
        "https://media.istockphoto.com/photos/cloesup-view-of-a-long-haul-semi-truck-speeding-down-the-highway-picture-id1213020206?k=20&m=1213020206&s=612x612&w=0&h=F6tgLpNIOb8OLXT0BLyKzLbEsmSffzdfLW3el7ToILw=",
    },
  ]);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "stretch" }}
    >
      {carTypes.map((item) => (
        <Card style={{ width: "200px" }}>
          <Card.Img
            variant="top"
            src={item.imgSrc}
            style={{ height: "100px", width: "100%" }}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
