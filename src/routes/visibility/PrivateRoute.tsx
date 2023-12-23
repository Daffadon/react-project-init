import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext.tsx";

const PrivateRoute = () => {
  const { token } = useUserContext();
  if (!token) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
