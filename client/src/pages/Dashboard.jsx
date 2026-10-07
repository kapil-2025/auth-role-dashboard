import { useNavigate } from 'react-router';
function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login")
  }
  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, {user?.name}
        </h1>
        <p className="mt-1 text-sm text-gray-500">{user?.email}</p>
        <span className="inline-block mt-4 px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
          {user?.role}
        </span>
        <button onClick={handleLogout}
        className='block w-full mt-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700'>Logout</button>
      </div>
    </div>
  );
}
export default Dashboard;
