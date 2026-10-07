import { Link,useNavigate } from "react-router";
import {useState} from 'react'
function Register() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const navigate=useNavigate();
  const handleSubmit=async (e)=>{
e.preventDefault();
const res=await fetch("http://localhost:5000/api/auth/register",{
  method:"POST",headers:{"Content-Type":"application/json"},
  body:JSON.stringify({name,email,password}),
  });
  const data=await res.json();
if(!res.ok){
  setError(data.message);
  return;
}
navigate("/login")

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
        
        {/* <p>{email}</p> */}
        <p className="mt=1 mb-6 text-sm text-gray-500">
          Register to get started
        </p>
        {error && <p className="mb-4 text-l text-red-600">{error}</p>}
          <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          
          <label
            htmlFor="password"
            className="block mb-1 text-gray-700 text-sm font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
        >
          Register
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:underline"
          >Register Now</Link>
        </p>
      </form>
    </div>
  );
}
export default Register;
