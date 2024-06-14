import { useEffect, useState } from "react";
import NavbarAdmin from "../../Components/Header/NavbarAdmin";
import SideNavbarAdmin from "../../Components/Header/SideNavbarAdmin";
const DashboardPage = () => {
  const [cars, setCars] = useState([]);
  let noCar = 1;

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

  if (cars.length === 0) {
    return (
      <div className="container-loader">
        <div className="loader"></div>
      </div>
    );
  }

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
                    textDecoration: "none",
                  }}
                >
                  DASHBOARD
                </a>
                <a
                  href=""
                  className="py-2 my-1 px-4"
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#151515",
                    backgroundColor: "#CFD4ED",
                    textDecoration: "none",
                  }}
                >
                  Dashboard
                </a>
              </div>
              <div
                className="p-4"
                style={{
                  backgroundColor: "#f3f3f3",
                  width: "100%",
                }}
              >
                <div className="row px-3">
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#222222",
                    }}
                  >
                    Dashboard - Dashboard
                  </p>
                </div>
                <div className="row px-3 my-3">
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#000000",
                    }}
                  >
                    Dashboard
                  </h3>
                </div>
                <div className="d-flex px-3">
                  <div
                    style={{
                      width: "4px",
                      height: "22px",
                      backgroundColor: "#0D28A6",
                    }}
                  ></div>
                  <p
                    className="mx-1"
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#000000",
                    }}
                  >
                    List Car
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="table-responsive">
                    <table className="table table-striped text-center">
                      <thead>
                        <tr
                          style={{
                            fontSize: "14px",
                            fontWeight: "700",
                            color: "#222222",
                          }}
                        >
                          <th>No</th>
                          <th>Model</th>
                          <th>Manufacture</th>
                          <th>Type</th>
                          <th>Capacity</th>
                          <th>RentPerDay</th>
                          <th>Year</th>
                        </tr>
                      </thead>
                      <tbody
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                          color: "#000000",
                        }}
                      >
                        {cars.map((car) => (
                          <tr className="align-middle" key={car.id}>
                            <td>{noCar++}</td>
                            <td>{car.model}</td>
                            <td>{car.manufacture}</td>
                            <td>{car.type}</td>
                            <td>{car.capacity}</td>
                            <td>{car.rentPerDay}</td>
                            <td>{car.year}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
