import React from 'react';
import axios from "axios";

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "ingrid-obana-banu"
  }
};

export default class UsersList extends React.Component {
  state = {
    userList: []
  }

  getAllUsers = () => {
    axios
    .get(url, headers)
    .then((res) => {
      this.setState({userList: res.data});
    })
    .catch((err) => {
      console.log(err.data)
    })
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  onClickDelete = (id) => {
    axios
    .delete(`${url}/${id}`, 
    headers)
    .then((res) => {
      console.log(res.data)
      this.setState({name: "", email:""});
    }).catch((err) => {
      console.log(err.data)
    });
  }

  render() {

    const usersList = this.state.userList.map((user) => {
      return <p key={user.id}>{user.name}
      <button onClick={() => this.onClickDelete(user.id)}>Deletar usuário</button></p>;
    });

    return (
      <div>
        <h2>Lista de Usuários</h2>
        <div>{usersList}</div>
      </div>
    );
  }
}

