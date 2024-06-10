import { Link } from "react-router-dom";

// assets
import fiHome from "../../assets/fi_home.png";
import fiTruck from "../../assets/fi_truck.png";
const SideNavbarAdmin = () => {
  return (
    <div
      className="px-0 mx-0"
      style={{
        width: "65px",
        backgroundColor: "#0D28A6",
        color: "#fff",
        fontSize: "12px",
        fontWeight: "300",
        position: "sticky",
        zIndex: "99",
        bottom: "0",
        top: "0",
      }}
    >
      <div className="row m-2 p-2 justify-content-center">
        <div
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "#CFD4ED",
          }}
        ></div>
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center py-2 my-2"
        // style={{ backgroundColor: "#FFFFFF4D" }}
      >
        <Link
          to="/admin"
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ color: "#fff" }}
        >
          <img src={fiHome} width="22" alt="" />
          <p className="mt-1 my-0">Dashboard</p>
        </Link>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center py-2 my-2">
        <Link
          to="/admin/cars"
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ color: "#fff" }}
        >
          <img src={fiTruck} width="22" alt="" />
          <p className="mt-1 my-0">Cars</p>
        </Link>
      </div>
    </div>
  );
};

export default SideNavbarAdmin;
