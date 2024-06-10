import NavbarAdmin from "../../Components/Header/NavbarAdmin";
import SideNavbarAdmin from "../../Components/Header/SideNavbarAdmin";
const DashboardPage = () => {
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
                  height: "100vh",
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
                          <th>Size</th>
                          <th>RentPerDay</th>
                        </tr>
                      </thead>
                      <tbody
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                          color: "#000000",
                        }}
                      >
                        <tr className="align-middle">
                          <td>index + 1 </td>
                          <td>row.model </td>
                          <td>row.size </td>
                          <td>row.rentPerDay </td>
                        </tr>
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
