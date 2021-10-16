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
    justify-content: space-around;
    height: 100px;

    div{
        display:flex;
        flex-direction: column;
    }
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
        }).catch((error) => {
            console.log(error.data)
        })
    };

    removeTrackFromPlaylist = (trackId) => {
        axios
        .delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig)
        .then(() => {
            this.getPlaylistTracks();
        }).catch((error) => {
            console.log(error.data)
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
        }).catch((error) => {
            console.log(error.data)
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
                <CreateTrack  onSubmit={this.addTrackToPlaylist}>
                <div>
                    <label>Nome da música:</label>
                    <input 
                    placeholder="Nome da Música"
                    name="trackName"
                    value={this.state.trackName}
                    onChange={this.changeInputValue}
                    />
                </div>
                <div>
                    <label>Artista:</label>
                    <input 
                    placeholder="Artista"
                    name="artist"
                    value={this.state.artist}
                    onChange={this.changeInputValue}
                    />
                </div>
                <div>
                    <label>URL da música:</label>
                    <input 
                        placeholder="Url da Música"
                        name="url"
                        value={this.state.url}
                        onChange={this.changeInputValue}
                    />
                </div>
                <button type="submit">Adicionar música</button>
                </CreateTrack>
                {renderTracks}
                <button onClick={()=> {this.props.changePage("playlists", "")}}>Voltar à lista de playlists</button>
            </PlaylistDetailContainer>
        )        
    }   
}

export default PlaylistDetail