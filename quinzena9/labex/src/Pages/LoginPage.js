import axios from "axios";
import React, {useState} from "react";
import { BASE_URL } from "../url/BASE_URL";

const LoginPage = () => {
  const [form, setForm] = useState({email:"", password:""})
  
  const onChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
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
          <input 
            type="email"
            name="email"
            value={form.email} 
            placeholder={"email"}
            onChange={onChange}
            required
            pattern={"^.{6,}"}
            title={"Sua senha deve ter no mínimo 6 caracteres"}
          />
          <br/>
          <input 
            type="password"
            name="password"
            value={form.password}
            placeholder={"password"}
            onChange={onChange}
            required
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
  
export default LoginPage;
