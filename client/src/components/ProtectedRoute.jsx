import {Navigate} from "react-router";
function ProtectedRoute({ children,adminOnly }) {
 const token=localStorage.getItem("token");
 const user=JSON.parse(localStorage.getItem("user"));
 if(!token){
  return <Navigate to="/login" replace />
 }
 if(adminOnly && user?.role!=="admin"){
  return <Navigate to="/dashboard" replace />;
 }
  return children;
  
}
export default ProtectedRoute;
