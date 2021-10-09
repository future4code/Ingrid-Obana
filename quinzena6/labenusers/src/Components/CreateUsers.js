import React from 'react';
import axios from "axios";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "ingrid-obana-banu"
  }
};

export default class CreateUsers extends React.Component {
    state = {
      name: "",
      email:""
    };
  
    createUser = () => {
      const body = {
        name: this.state.name,
        email: this.state.email
      };
  
      axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res.data);
        this.setState({name: "", email:""});
        this.getAllUsers();
      })
      .catch((err) => console.log(err.data));
    };

    onChangeName = (e) => {
      this.setState({ name: e.target.value });
    };
    onChangeEmail = (e) => {
      this.setState({ email: e.target.value });
    };
  
    render(){
      return (
        <div className="App">            
            <h2>Criar Usuário</h2>
            <input
            placeholder="Nome"
            value={this.state.name}
            onChange={this.onChangeName}
            />
            <input
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.onChangeEmail}
            />
            <button onClick={this.createUser}>Criar Usuário</button>
        </div>
      );
    }
  }
  