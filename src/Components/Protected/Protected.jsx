import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) navigate("/admin/login");
  });
  return children;
};

export default Protected;
