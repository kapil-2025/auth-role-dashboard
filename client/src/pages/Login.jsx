import { Link } from "react-router";
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Login</h1>
        <p className="mt=1 mb-6 text-sm text-gray-500">
          Welcome back! Please login to continue
        </p>
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />{" "}
        </div>
        <div className="mb-6">
          {" "}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          No account?
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline"
          >Register Now</Link>
        </p>
      </form>
    </div>
  );
}
export default Login;
