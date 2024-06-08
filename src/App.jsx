import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import SearchCarsPage from "./Pages/SearchCarsPage/SearchCarsPage";
import CarsPage from "./Pages/AdminPage/CarsPage";
import DashboardPage from "./Pages/AdminPage/DashboardPage";
import AddCarsPage from "./Pages/AdminPage/AddCarsPage";
import EditCarsPage from "./Pages/AdminPage/EditCarsPage";

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

          {/* Admin */}
          <Route path="/admin/cars" element={<CarsPage />} />
          <Route path="/admin/" element={<DashboardPage />} />
          <Route path="/admin/add" element={<AddCarsPage />} />
          <Route path="/admin/edit" element={<EditCarsPage />} />

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