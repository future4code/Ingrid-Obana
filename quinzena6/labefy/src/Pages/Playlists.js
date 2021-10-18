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
        }).catch(() => {
            alert("Ocorreu um erro ao buscar as playlists :(")
        })
    };

    deletePlaylist = (playlistId) => {
        axios
        .delete(`${baseUrl}/${playlistId}`, axiosConfig)
        .then(() => {
            if (window.confirm("Tem certeza que quer deletar essa playlist?")) {
                alert("Playlist deletada com sucesso!")
                this.getAllPlaylists();
            }
        }).catch(() => {
            alert("Ocorreu um erro ao deletar a playlist :(")
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