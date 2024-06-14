import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import SearchCarsPage from "./Pages/SearchCarsPage/SearchCarsPage";
import CarsPage from "./Pages/AdminPage/CarsPage";
import DashboardPage from "./Pages/AdminPage/DashboardPage";
import AddCarsPage from "./Pages/AdminPage/AddCarsPage";
import EditCarsPage from "./Pages/AdminPage/EditCarsPage";
import LoginPage from "./Pages/Auth/LoginPage";

// Protected
import Protected from "./Components/Protected/Protected";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          {/* Cars */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/cars" element={<SearchCarsPage />} />

          {/* Auth */}
          <Route path="/admin/login" element={<LoginPage />} />

          {/* Admin */}
          <Route
            path="/admin/cars"
            element={
              <Protected>
                <CarsPage />
              </Protected>
            }
          />
          <Route
            path="/admin/"
            element={
              <Protected>
                <DashboardPage />
              </Protected>
            }
          />
          <Route
            path="/admin/add"
            element={
              <Protected>
                <AddCarsPage />
              </Protected>
            }
          />
          <Route
            path="/admin/edit/:carsId"
            element={
              <Protected>
                <EditCarsPage />
              </Protected>
            }
          />

          {/* The page for not found url path */}
          <Route
            path="*"
            element={
              <h1
                style={{
                  height: "90vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "helvetica",
                }}
              >
                404 Page Not Found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
