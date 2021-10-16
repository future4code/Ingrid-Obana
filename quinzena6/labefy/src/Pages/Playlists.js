import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import PlaylistCard from '../Components/PlaylistCard'
import { baseUrl, axiosConfig } from '../Constants/Constants'

const PlaylistsContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Playlists extends React.Component {
    state = {
        playlists: []
    }

    getAllPlaylists = () => {
        axios
        .get(baseUrl, axiosConfig)
        .then((response) => {
            this.setState({playlists: response.data.result.list})
        }).catch((error) => {
            console.log((error.data))
        })
    };

    deletePlaylist = (playlistId) => {
        axios
        .delete(`${baseUrl}/${playlistId}`, axiosConfig)
        .then(() => {
            this.getAllPlaylists();
        }).catch((error) => {
            console.log(error.data)
        });
    };

    componentDidMount = () => {
        this.getAllPlaylists();
    }

    render(){
        const playlists = this.state.playlists.map(playlist => {
            return <PlaylistCard 
            key={playlist.id}
            changePage={this.props.changePage}
            name={playlist.name}
            playlistId={playlist.id}
            deletePlaylist={this.deletePlaylist}
            />
        })
        return (
            <PlaylistsContainer>
                {playlists}
            </PlaylistsContainer>
            )        
    }   
}

export default Playlists