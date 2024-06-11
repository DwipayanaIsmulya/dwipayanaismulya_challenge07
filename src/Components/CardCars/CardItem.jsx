import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// assets
import imgCar from "../../assets/image1.png";
const CardItem = ({ car }) => {
  return (
    <div
      className="card d-flex flex-column p-4 m-2"
      style={{
        boxShadow: "0px 0px 4px 0px #00000026",
        width: "max-content",
      }}
    >
      <div
        className="img-fluid p-4"
        style={{ width: "270px", height: "170px" }}
      >
        <img src={imgCar} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="content-card mt-3" style={{ color: "#000000" }}>
        <p className="my-1" style={{ fontSize: "14px", fontWeight: "400" }}>
          {" "}
          {car.model} / {car.type}
        </p>
        <p className="my-1" style={{ fontSize: "16px", fontWeight: "700" }}>
          Rp {car.rentPerDay} / hari
        </p>
        <div className="d-flex align-items-center my-2">
          <img src="./assets/fi_key.png" alt="" />
          <p
            className="mx-2 m-0 p-0"
            style={{ fontSize: "14px", fontWeight: "300" }}
          >
            Start rent - Finish rent
          </p>
        </div>
        <div className="d-flex align-items-center my-2">
          <img src="./assets/fi_clock.png" alt="" />
          <p
            className="mx-2 m-0 p-0"
            style={{ fontSize: "14px", fontWeight: "300" }}
          >
            Updated at 4 Apr 2022, 09.00
          </p>
        </div>
      </div>
      <div
        className="action d-flex justify-content-between align-items-center mt-2"
        style={{ fontSize: "14px" }}
      >
        <a
          href=""
          className="d-flex justify-content-center align-items-center "
          style={{
            border: "1px solid #FA2C5A",
            color: "#FA2C5A",
            height: "48px",
            fontWeight: "700",
            width: "48%",
            backgroundColor: "#fff",
          }}
        >
          <img className="mx-1" src="./assets/fi_trash-2.png" alt="" />
          <p className="mx-1 my-0 p-0">Delete</p>
        </a>

        <Link
          to="/admin/edit"
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "#5CB85F",
            color: "#fff",
            height: "48px",
            fontWeight: "700",
            width: "48%",
          }}
        >
          <img className="mx-1" src="./assets/fi_edit.png" alt="" />
          <p className="mx-1 my-0 p-0">Edit</p>
        </Link>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  car: PropTypes.any,
};

export default CardItem;
