import { useNavigate } from "react-router-dom";

const Nav = ({ paidAmount }) => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('loggingEmail')
        navigate('/login')
    }
  return (
    <header className="py-4 px-8 bg-gray-200 font-medium">
      <nav className="flex justify-between">
        <h1 className="font-bold">Power-Hack</h1>
        <div className="flex space-x-3">
          <p>paid bill: {paidAmount}</p>
          <button onClick={logout}>Logout</button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
