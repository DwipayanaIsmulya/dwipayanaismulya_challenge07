import NavbarCars from "../../Components/Header/NavbarCars";
import FooterCars from "../../Components/Footer/FooterCars";

// assets
import imgCar from "../../assets/img_car.png";

const SearchCarsPage = () => {
  return (
    <>
      <div className="container-fluid bg-body-tertiary px-0">
        {/* Navbar */}
        <NavbarCars />
        {/* Landings Content */}
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1
                className="lh-base fw-bold"
                style={{ fontSize: "2rem" }}
                id="landing"
              >
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <p className="mt-4 text-wrap">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
            </div>
            <div className="col-md-6">
              <img src={imgCar} className="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Form Cari Mobil --> */}
      <div
        className="container"
        style={{
          width: "75%",
          position: "absolute",
          left: "0",
          right: "0",
          top: "410px",
        }}
      >
        <div className="card form-car">
          <div
            className="form-content row mx-2 my-3"
            style={{ fontSize: ".8rem" }}
          >
            <div className="col-sm p-0 m-1 d-flex flex-column">
              <label className="mb-2">Tipe Driver</label>
              <select
                className="input-form px-2"
                id="typeDriver"
                name="typeDriver"
                required
              >
                <option selected disabled value="">
                  Pilih Tipe Driver
                </option>
                <option className="input-option">Dengan Sopir</option>
                <option className="input-option">
                  Tanpa Sopir (Lepas Kunci)
                </option>
              </select>
            </div>
            <div className="col-sm p-0 m-1 d-flex flex-column">
              <label className="mb-2">Tanggal</label>
              <input
                className="input-form px-2"
                type="date"
                id="date"
                name="date"
                required
              />
            </div>
            <div className="col-sm p-0 m-1 d-flex flex-column">
              <label className="mb-2">Waktu Jemput/Ambil</label>
              <select
                className="input-form px-2"
                id="time"
                name="time"
                required
              >
                <option selected disabled value="">
                  Pilih Waktu
                </option>
                <option>08.00</option>
                <option>09.00</option>
                <option>10.00</option>
                <option>11.00</option>
                <option>12.00</option>
              </select>
            </div>
            <div className="col-sm p-0 m-1 d-flex flex-column">
              <label className="mb-2">Jumlah Penumpang (optional)</label>
              <input
                id="passenger"
                className="input-form px-2"
                type="text"
                name="passenger"
                placeholder="Jumlah Penumpang"
              />
            </div>
            <div
              className="col-2 p-0 m-1 d-flex flex-column"
              style={{ width: "92px" }}
            >
              <p className="mb-2">&nbsp;</p>
              <button
                className="btn submit"
                style={{
                  backgroundColor: "#5cb85f",
                  color: "white",
                  borderRadius: "3px",
                  fontWeight: "500",
                  fontSize: ".8rem",
                  height: "36px",
                }}
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Content Cars Filter --> */}
      <div
        className="container d-flex flex-row flex-wrap insert-card-cars justify-content-between"
        style={{ marginTop: "100px" }}
      >
        {/* <!-- If not found --> */}
        {/* <!-- If available --> */}
      </div>
      {/* Footer */}
      <FooterCars />
    </>
  );
};

export default SearchCarsPage;
