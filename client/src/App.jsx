import {Routes,Route,Navigate} from 'react-router';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Admin from './pages/Admin.jsx';
function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-blue-600'>Auth dashboard</h1>
      <p className=' text-gray-500'>Login to continue</p>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>

      </Routes>
    </div>
  );
}
export default App;
