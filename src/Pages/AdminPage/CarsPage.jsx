import { Link } from "react-router-dom";
import NavbarAdmin from "../../Components/Header/NavbarAdmin";
import SideNavbarAdmin from "../../Components/Header/SideNavbarAdmin";
import CardItem from "../../Components/CardCars/CardItem";
import { useEffect, useState } from "react";

// assets
import fiPlus from "../../assets/fi_plus.png";
const CarsPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // memanggil API untuk mengambil data todos
    fetch("http://localhost:8000/cars")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // ketika Rest API sukses, simpan data dari response ke dalam state lokal
        setCars(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);

  return (
    <>
      <div className="container-fluid mx-0 px-0">
        <div className="d-flex">
          {/* Side Navbar Admin */}
          <SideNavbarAdmin />
          <div
            className="d-flex flex-column"
            style={{ width: "100%", position: "sticky", zIndex: "10" }}
          >
            {/* Navbar Admin */}
            <NavbarAdmin />
            <div className="container-fluid mx-0 px-0 d-flex">
              <div
                className="d-flex flex-column"
                style={{ width: "250px", height: "100%" }}
              >
                <a
                  href=""
                  className="mt-4 py-2 my-1 px-4"
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#8A8A8A",
                  }}
                >
                  Cars
                </a>
                <a
                  href=""
                  className="py-2 my-1 px-4"
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#151515",
                    backgroundColor: "#CFD4ED",
                  }}
                >
                  List Car
                </a>
              </div>
              <div
                className="p-4"
                style={{ backgroundColor: "#f3f3f3", width: "100%" }}
              >
                <div className="row px-3">
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#222222",
                    }}
                  >
                    Cars - List Car
                  </p>
                </div>
                <div className="px-3 my-3 d-flex justify-content-between align-items-center">
                  <h3
                    className="mb-0"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#000000",
                    }}
                  >
                    List Car
                  </h3>
                  <Link
                    to="/admin/add"
                    className="btn d-flex justify-content-between align-items-center"
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#fff",
                      backgroundColor: "#0D28A6",
                    }}
                  >
                    <img
                      className="mx-1"
                      src={fiPlus}
                      style={{ width: "18px", height: "18px" }}
                      alt=""
                    />
                    <p className="mx-1 m-0 p-0">Add New Car</p>
                  </Link>
                </div>
                <div
                  className="px-3 d-flex justify-content-between"
                  style={{ width: "300px" }}
                >
                  <a
                    href="/cars"
                    className="btn"
                    style={{
                      border: "1px solid #0D28A6",
                      backgroundColor: "#CFD4ED",
                      color: "#0D28A6",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    All
                  </a>
                  <a
                    href="/small"
                    className="btn"
                    style={{
                      border: "1px solid #0D28A6",
                      backgroundColor: "#CFD4ED",
                      color: "#0D28A6",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Small
                  </a>
                  <a
                    href="/medium"
                    className="btn"
                    style={{
                      border: "1px solid #0D28A6",
                      backgroundColor: "#CFD4ED",
                      color: "#0D28A6",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Medium
                  </a>
                  <a
                    href="/large"
                    className="btn"
                    style={{
                      border: "1px solid #0D28A6",
                      backgroundColor: "#CFD4ED",
                      color: "#0D28A6",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Large
                  </a>
                </div>
                <div
                  className="container-fluid d-flex mt-4 mx-0 px-0 flex-wrap"
                  style={{ backgroundColor: "#f3f3f3" }}
                >
                  {/* <div
                    className="container-fluid my-5 d-flex justify-content-center"
                    style={{ height: "300px" }}
                  >
                    <div
                      className="container-fluid my-4 d-flex justify-content-center align-items-center"
                      style={{
                        width: "350px",
                        height: "70px",
                        border: "1px solid #FA2C5A",
                        color: "#FA2C5A",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      <p className="m-0 p-0">Tidak Ada Data Mobil</p>
                    </div>
                  </div> */}

                  {/* <!-- Card Cars --> */}
                  {cars.map((car) => (
                    <CardItem car={car} key={car.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarsPage;
