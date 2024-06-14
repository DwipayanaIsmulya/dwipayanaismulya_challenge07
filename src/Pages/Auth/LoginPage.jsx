// assets
import { useNavigate } from "react-router-dom";
import imgBanner from "../../assets/image2.png";
import Swal from "sweetalert2";
import { useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isFalse, setIsFalse] = useState("");

  const navigate = useNavigate();

  const LoginButton = (e) => {
    e.preventDefault();
    if (name === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("token", "eyJknaskf009wjd09j0j1d09wjdalkdnq1w01dp");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      setIsFalse("");
      navigate("/admin/");
    } else {
      setIsFalse("true");
    }
  };
  return (
    <div className="container-fluid bg-primary">
      <div className="" style={{ width: "100%", height: "100%" }}>
        <div className="row">
          <div className="col-8 p-0 m-0">
            <img
              className="img-fluid"
              style={{ width: "100%", height: "100vh" }}
              src={imgBanner}
              alt=""
            />
          </div>
          <div
            className="col-4 p-0 m-0 d-flex justify-content-center align-items-center "
            style={{
              backgroundColor: "white",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            <div className="form-card">
              <form action="/auth" method="post" encType="multipart/form-data">
                <div
                  className="logo-rectangle"
                  style={{
                    backgroundColor: "#CFD4ED",
                    width: "100px",
                    height: "34px",
                  }}
                ></div>
                <h1
                  className="my-4"
                  style={{ fontWeight: "700", fontSize: "24px" }}
                >
                  Welcome, Admin BCR
                </h1>
                {isFalse ? (
                  <div
                    className="my-2 d-flex justify-content-center align-items-center flex-column"
                    style={{
                      height: "60px",
                      backgroundColor: "#D00C1A1A",
                      color: "#D00C1A",
                      fontSize: "12px",
                      fontWeight: "300",
                    }}
                  >
                    <p className="m-0 p-0">
                      Masukkan username dan password yang benar.{" "}
                    </p>
                    <p className="m-0 p-0">
                      Perhatikan penggunaan huruf kapital.
                    </p>
                  </div>
                ) : (
                  <></>
                )}

                <div className="col-sm p-0 m-1 d-flex flex-column">
                  <label
                    className="mb-2"
                    style={{ fontSize: "14px", fontWeight: "300" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="input-form px-3"
                    type="email"
                    name="email"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: johndee@gmail.com"
                  />
                </div>
                <div className="col-sm p-0 m-1 d-flex flex-column">
                  <label
                    className="my-2"
                    style={{ fontSize: "14px", fontWeight: "300" }}
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    className="input-form px-3"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="6+ karakter"
                  />
                </div>
                <div
                  className="col-2 p-0 m-1 d-flex flex-column"
                  style={{ width: "92px" }}
                >
                  <p className="mb-2">&nbsp;</p>
                  <button
                    onClick={LoginButton}
                    className="btn submit"
                    style={{
                      backgroundColor: "#0D28A6",
                      color: "white",
                      borderRadius: "3px",
                      fontWeight: "700",
                      fontSize: "14px",
                      height: "36px",
                      width: "250px",
                    }}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
