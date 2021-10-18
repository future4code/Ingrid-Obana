import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import TrackCard from '../Components/TrackCard'
import { baseUrl, axiosConfig } from '../Constants/Constants'

const PlaylistDetailContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CreateTrack = styled.form `
    display:flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    height: 100px;

    div{
        display:flex;
        flex-direction: column;
        padding: 0px 16px;
    }
`
const Button = styled.button `
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    border: solid 2px black;
    outline: 0;
    padding: 0.4rem 1rem;
    background-color: #ffffff;
    color: #fa5d9c;
    border-radius: 0.35rem;
    position: relative;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: pink;
        z-index: -1;
        border-radius: 0.35rem;
        border: solid 2px black;
        transition: all 0.3s ease-in-out;
    }
    &::after {
        width: 90%;
        height: 90%;
    }
    &:hover::after {
        width: 100%;
        height: 100%;
        top: 0.5rem;
        left: 0.5rem;
    }
`

const Input = styled.input`
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    border: solid 2px black;
    outline: 0;
    padding: 0.4rem 1rem;
    background-color: #ffffff;
    color: #fa5d9c;
    border-radius: 0.3rem;
    position: relative;
`

class PlaylistDetail extends React.Component {
    state={
        tracks: [],
        trackName: "",
        artist: "",
        url: ""
    }

    componentDidMount = () => {
        this.getPlaylistTracks();
    }

    getPlaylistTracks = () => {

        axios
        .get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig)
        .then((response) => {
            this.setState({tracks: response.data.result.tracks})
        }).catch(() => {
            alert("Ocorreu um erro ao buscar as músicas :(")
        })
    };

    removeTrackFromPlaylist = (trackId) => {
        axios
        .delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig)
        .then(() => {
            if (window.confirm("Tem certeza que quer deletar essa música?")) {
                alert("Música deletada com sucesso!")
                this.getPlaylistTracks();
            } 
        }).catch(() => {
            alert("Ocorreu um erro ao deletar a música :(")
        })
    };

    addTrackToPlaylist = (event) => {
        event.preventDefault()

        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        }

        axios
        .post(`${baseUrl}/${this.props.playlistId}/tracks`, body, axiosConfig)
        .then(() => {
            this.getPlaylistTracks();
            this.setState({trackName: "", artist: "", url: ""})
            alert("Música adicionada com sucesso! ")
        }).catch(() => {
            alert("Ocorreu um erro ao adicionar a música :(")
        })
    }

    changeInputValue = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const renderTracks = this.state.tracks.map(track => {
            return <TrackCard 
            key={track.id}
            trackName={track.name}
            artist={track.artist}
            url={track.url}
            trackId={track.id}
            removeTrackFromPlaylist={this.removeTrackFromPlaylist}
            />
        })
        return (
            <PlaylistDetailContainer>
                <CreateTrack onSubmit={this.addTrackToPlaylist}>
                <div>
                    <label>Nome da música:</label>
                    <Input 
                    placeholder="Nome da Música"
                    name="trackName"
                    value={this.state.trackName}
                    onChange={this.changeInputValue}
                    />
                </div>
                <div>
                    <label>Artista:</label>
                    <Input 
                    placeholder="Artista"
                    name="artist"
                    value={this.state.artist}
                    onChange={this.changeInputValue}
                    />
                </div>
                <div>
                    <label>URL da música:</label>
                    <Input 
                        placeholder="Url da Música"
                        name="url"
                        value={this.state.url}
                        onChange={this.changeInputValue}
                    />
                </div>
                <Button type="submit">Adicionar música</Button>
                </CreateTrack>
                {renderTracks}
                <Button onClick={()=> {this.props.changePage("playlists", "")}}>Voltar à lista de playlists</Button>
            </PlaylistDetailContainer>
        )        
    }   
}

export default PlaylistDetail