import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const NavbarAdmin = () => {
  const navigate = useNavigate();

  const logoutButton = () => {
    localStorage.removeItem("token");
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
      title: "Logout successfully",
    });
    navigate("/admin/login");
  };
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{
        height: "70px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 8px 0px #0000000D",
      }}
    >
      <div
        className="mx-4"
        style={{
          width: "95px",
          height: "32px",
          backgroundColor: "#CFD4ED",
        }}
      ></div>
      <div className="mx-4 d-flex align-items-center justify-content-between">
        <div className="search d-flex mx-2" style={{ width: "fit-content" }}>
          <input
            className="px-2 py-1 input-form"
            type="text"
            placeholder="Search"
            style={{
              fontSize: "12px",
              fontWeight: "400",
              width: "70%",
              borderRadius: "0",
              border: "2px solid #A5A5A5",
            }}
          />
          <button
            className="p-0 m-0"
            style={{
              width: "30%",
              border: "2px solid #0D28A6",
              color: "#0D28A6",
              fontSize: "14px",
              fontWeight: "700",
              backgroundColor: "#fff",
            }}
          >
            Search
          </button>
        </div>
        <div className="profile mx-2 d-flex align-items-center justify-content-between">
          <img className="mx-1" src="/assets/profile.png" alt="" />
          <button
            onClick={logoutButton}
            className="m-0 p-0"
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "#fff",
              backgroundColor: "#0D28A6",
              width: "80px",
              height: "35px",
              borderRadius: "5px",
            }}
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
