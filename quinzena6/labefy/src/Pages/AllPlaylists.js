import React from 'react'
import styled from 'styled-components'
import Playlists from './Playlists'
import PlaylistDetail from './PlaylistDetail'

const AllPlaylistsContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

class AllPlaylists extends React.Component {
    state = {
        currentPage: "playlists",
        playlistId: ""
    }

    changePage = (page, playlistId) => {
        this.setState({currentPage: page,
        playlistId: playlistId})
    }

    render(){
        const renderPage = () => {
            if(this.state.currentPage === "playlists"){
              return <Playlists
              changePage={this.changePage}
              />
            } else if(this.state.currentPage === "playlistDetail"){
              return <PlaylistDetail
              changePage={this.changePage}
              playlistId={this.state.playlistId}
              />
            }
        }

        return (
            <AllPlaylistsContainer>
                <h2>Todas as Playlists</h2>
                {renderPage()}
            </AllPlaylistsContainer>
            )        
    }   
}

export default AllPlaylists