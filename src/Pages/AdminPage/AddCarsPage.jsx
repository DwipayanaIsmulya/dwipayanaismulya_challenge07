import { Link } from "react-router-dom";
import NavbarAdmin from "../../Components/Header/NavbarAdmin";
import SideNavbarAdmin from "../../Components/Header/SideNavbarAdmin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AddCarsPage = () => {
  const navigate = useNavigate();

  const [model, setModel] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [type, setType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [year, setYear] = useState("");

  // add cars
  const addCars = (e) => {
    e.preventDefault();

    const newCar = { model, manufacture, type, capacity, rentPerDay, year };

    fetch("http://localhost:8000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    }).then(() => {
      // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string
      setType("");
      setRentPerDay("");
      setModel("");
      setManufacture("");
      setCapacity("");
      setYear("");
      Swal.fire({
        title: "Success!",
        text: "Cars Created!",
        icon: "success",
        confirmButtonText: "Okay",
      });
    });
    navigate("/admin/cars");
  };
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
                style={{ width: "250px", height: "100vh" }}
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
              {/* <!-- Form Cars --> */}
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
                    Cars - List Car - Add New Car
                  </p>
                </div>
                <div className="row px-3 my-3 d-flex justify-content-between align-items-center">
                  <h3
                    className="mb-0"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#000000",
                    }}
                  >
                    Add New Car
                  </h3>
                </div>
                <div
                  className="container-fluid mx-0 px-0 "
                  style={{ backgroundColor: "#fff" }}
                >
                  <form
                    // action="/admin/cars"
                    className="d-flex flex-column p-4"
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: " #818181",
                    }}
                  >
                    <div
                      className=" d-flex justify-content-between align-items-center my-1"
                      style={{ width: "450px" }}
                    >
                      <label className="m-0 p-0">Model</label>
                      <input
                        id="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="px-2 input"
                        type="text"
                        style={{
                          width: "300px",
                          height: "36px",
                          border: "1px solid #D0D0D0",
                        }}
                        placeholder="F015"
                      />
                    </div>
                    <div
                      className=" d-flex justify-content-between align-items-center my-1"
                      style={{ width: "450px" }}
                    >
                      <label className="m-0 p-0">Manufacture</label>
                      <input
                        id="manufacture"
                        value={manufacture}
                        onChange={(e) => setManufacture(e.target.value)}
                        className="px-2 input"
                        type="text"
                        style={{
                          width: "300px",
                          height: "36px",
                          border: "1px solid #D0D0D0",
                        }}
                        placeholder="Ford"
                      />
                    </div>
                    <div
                      className="nama d-flex justify-content-between align-items-center my-1"
                      style={{ width: "450px" }}
                    >
                      <label className="m-0 p-0">Type</label>
                      <input
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="px-2 input"
                        type="text"
                        style={{
                          width: "300px",
                          height: "36px",
                          border: "1px solid #D0D0D0",
                        }}
                        placeholder="Avanza"
                      />
                    </div>
                    <div
                      className="rentPerDay d-flex justify-content-between align-items-center my-1"
                      style={{ width: "450px" }}
                    >
                      <label className="m-0 p-0">Capacity</label>
                      <input
                        id="capacity"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        className="px-2 input"
                        type="text"
                        style={{
                          width: "300px",
                          height: "36px",
                          border: "1px solid #D0D0D0",
                        }}
                        placeholder="4"
                      />
                    </div>
                    <div
                      className="rentPerDay d-flex justify-content-between align-items-center my-1"
                      style={{ width: "450px" }}
                    >
                      <label className="m-0 p-0">Rent Per Day</label>
                      <input
                        id="rentPerDay"
                        value={rentPerDay}
                        onChange={(e) => setRentPerDay(e.target.value)}
                        className="px-2 input"
                        type="text"
                        style={{
                          width: "300px",
                          height: "36px",
                          border: "1px solid #D0D0D0",
                        }}
                        placeholder="Rp 0,-"
                      />
                    </div>
                    <div
                      className="rentPerDay d-flex justify-content-between align-items-center my-1"
                      style={{ width: "450px" }}
                    >
                      <label className="m-0 p-0">Year</label>
                      <input
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="px-2 input"
                        type="text"
                        style={{
                          width: "300px",
                          height: "36px",
                          border: "1px solid #D0D0D0",
                        }}
                        placeholder="2024"
                      />
                    </div>

                    {/* <div
                      className="size d-flex justify-content-between align-items-center my-1"
                      style={{ width: "450px" }}
                    >
                      <label className="m-0 p-0">Size</label>
                      <select
                        className="px-2 input form-control-md"
                        name="size"
                        id="size"
                        style={{
                          width: "300px",
                          height: "36px",
                          border: "1px solid #D0D0D0",
                        }}
                      >
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                      </select>
                    </div> */}
                    {/* <div
                      className="file d-flex justify-content-between align-items-center my-1"
                      style={{ width: "450px" }}
                    >
                      <label className="m-0 p-0">Foto</label>
                      <input
                        id="file"
                        name="file"
                        className="px-2 input"
                        type="file"
                        style={{
                          width: "300px",
                          height: "36px",
                          border: "1px solid #D0D0D0",
                        }}
                        placeholder="Foto.jpg"
                      />
                    </div> */}
                    <div
                      className="button mt-4 d-flex justify-content-between"
                      style={{ fontSize: "14px", width: "160px" }}
                    >
                      <Link
                        to="/admin/cars"
                        className="d-flex justify-content-center align-items-center"
                        style={{
                          border: "1px solid #0D28A6",
                          color: "#0D28A6",
                          width: "70px",
                          height: "36px",
                          backgroundColor: "#fff",
                          fontWeight: "700",
                          textDecoration: "none",
                        }}
                      >
                        <p className="m-0 p-0">Cancel</p>
                      </Link>
                      <button
                        onClick={addCars}
                        style={{
                          border: "none",
                          color: "#fff",
                          width: "70px",
                          height: "36px",
                          backgroundColor: "#0D28A6",
                          fontWeight: "700",
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCarsPage;
