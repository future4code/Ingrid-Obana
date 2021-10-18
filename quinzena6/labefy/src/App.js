import React from 'react'
import Header from './Components/Header'
import styled from 'styled-components'
import AllPlaylists from './Pages/AllPlaylists';
import CreatePlaylist from './Pages/CreatePlaylist';
import './App.css';

const AppContainer = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export default class App extends React.Component {
  state = {
    currentPage: "createPlaylist"
  }

  changePage = (page) => {
    this.setState({currentPage: page})
  }

  render () {
    const renderPage = () => {
      if(this.state.currentPage === "createPlaylist"){
        return <CreatePlaylist />
      } else if(this.state.currentPage === "editPlaylist"){
        return <AllPlaylists />
      }
    }
    return (
      <AppContainer>
        <Header
        changePage={this.changePage}
        />
        {renderPage()}
      </AppContainer>
    );
  }
}
