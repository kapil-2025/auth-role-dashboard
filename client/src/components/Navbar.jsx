import {useNavigate,Link} from "react-router";

function Navbar (){
  const navigate=useNavigate();
  const user=JSON.parse(localStorage.getItem("user"));
  const handleLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login")
  }
  return (
<nav className="bg-white shadow-sm"><div className="max-w-4xl mx-auto px-8 py4 flex items-center justify-between" >
  <span className="text-lg font-bold text-blue-600">AuthDash</span>
  <div className="flex items-center gap-4">
    <Link to="/dashboard" className="text-sm font-medium text-gray-600 hover:text-blue-600">
  Dashboard
</Link>
{user?.role === "admin" && (
  <Link to="/admin" className="text-sm font-medium text-gray-600 hover:text-blue-600">
    Admin
  </Link>
)}
    <button onClick={handleLogout} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700">Logout</button>
  </div>
  </div></nav>
  )
}
export default Navbar;