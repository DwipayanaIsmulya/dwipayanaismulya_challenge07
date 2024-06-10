import NavbarAdmin from "../../Components/Header/NavbarAdmin";
import SideNavbarAdmin from "../../Components/Header/SideNavbarAdmin";
const EditCarsPage = () => {
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
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCarsPage;
