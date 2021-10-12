import React from 'react';
import './App.css';
import CreateUsers from './Components/CreateUsers';
import UsersList from './Components/UsersList';

export default class App extends React.Component {
  state = {
    page: "createUsers"
  };

  changePage = () => {
    if (this.state.page === "createUsers") {
      this.setState({ page: "usersList" });
    } else if (this.state.page === "usersList") {
      this.setState({ page: "createUsers" });
    }
  };

  renderPage = () => {
    switch (this.state.page) {
      case "createUsers":
        return <CreateUsers />;
      case "usersList":
        return <UsersList />;
      default:
        return <div></div>;
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Labenusers</h1>
        <button onClick={this.changePage}> Trocar de página </button>
        {this.renderPage()}
      </div>
    );
  }
}
