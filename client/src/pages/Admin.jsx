import { useState, useEffect } from "react";

function Admin() {
  const [users, setUsers] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/auth/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      setUsers(data);
    };
    fetchUsers();
  }, []);
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
  return;
}
    const token = localStorage.getItem("token");
    const res = await fetch(`http://localhost:5000/api/auth/users/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
  };
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Total users:{users.length}</p>
        <table className="w-full mt-6 text-left text-sm">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Role</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {users.map((user) => (
              <tr key={user._id} className="border-b">
                <td className="py-3">{user.name} </td>
                <td className="py-3">{user.email}</td>
                <td className="py-3">{user.role} </td>{" "}
               <td className="py-3">
  {user.email === currentUser?.email ? (
    <span className="text-xs rounded-xl text-gray-700">You</span>
  ) : (
    <button
      onClick={() => handleDelete(user._id)}
      className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-full hover:bg-red-700"
    >
      Delete
    </button>
  )}
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Admin;
