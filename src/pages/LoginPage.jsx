// import { Link } from "react-router-dom"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenContext } from "../context/AuthenContext";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthenContext);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmailOrPhone = (e) => setEmailOrPhone(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if(emailOrPhone === "weerapat@mail.com" && password === "qwerty") {
      await login(emailOrPhone, password );
      navigate('/');
    } else {
      alert("Invalid username or password")
    }
  }

  return (
    <div className="login__page">
      <div className="login__container">
        <div className="login__content">
          <h1>Welcome</h1>
          <input type="input" placeholder="emailOrMobile" value={emailOrPhone} onChange={handleChangeEmailOrPhone} ></input>
          <div className="login__div"></div>
          <input type="password" placeholder="password" value={password} onChange={handleChangePassword} ></input>
          <div className="login__div"></div>
        </div>
          
        <form className="login__form" onSubmit={handleSubmitLogin}>
          <div className="login__homepage">
            {/* <Link to={'/'}><button>Log IN</button></Link> */}
            <button>Log IN</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage