import axios from "axios";
import React, {useState} from "react";
import { BASE_URL } from "../url/BASE_URL";

const LoginPage = () => {
  const [form, setForm] = useState({email:"", password:""})

  const onChangeEmail = (e) => {
    setForm({...form, email: e.target.value})
  }

  const onChangePassword = (e) => {
    setForm({...form, password: e.target.value})
  }

  const Login = (e) => {
    e.preventDefault()

    axios
    .post(`${BASE_URL}/login`, form)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
    return (
      <div>
          <h3>Sign in</h3>
          <form onSubmit={Login}>
          <input type={"email"}
            value={form.email} 
            placeholder={"email"}
            onChange={onChangeEmail}
            required
          />
          <br/>
          <input type={"password"}
            value={form.password}
            placeholder={"password"}
            onChange={onChangePassword}
            required
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
  
export default LoginPage;
