import { Routes, Route, Navigate } from "react-router";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Admin from "./pages/Admin.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
             
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <Admin />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    
    </div>
  );
}
export default App;
