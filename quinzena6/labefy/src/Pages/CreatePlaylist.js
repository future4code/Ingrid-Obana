import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl, axiosConfig } from '../Constants/Constants'

const CreatePlaylistContainer = styled.div `
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CreatePlaylistForm = styled.form`
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

class CreatePlaylist extends React.Component {
    state={
        inputNameValue: ""
    }

    changeInputValue = (event) => {
        this.setState({inputNameValue: event.target.value})
    };

    createPlaylist = (event) => {
        event.preventDefault()
        const body = {
            name: this.state.inputNameValue
        }
        axios
        .post(baseUrl, body, axiosConfig)
        .then(() => {
            alert("Sua playlist foi criada com sucesso!")
        }).catch((error) => {
            console.log(error.data)
        });
        this.setState({inputNameValue: ""})
    };

    render(){
        return (
            <CreatePlaylistContainer>
                <h1>Criar nova playlist</h1>
                <CreatePlaylistForm onSubmit={this.createPlaylist}>
                    <label>Nome da playlist</label>
                    <input
                        placeholder="Nome da Playlist"
                        type="text"
                        value={this.state.inputNameValue}
                        onChange={this.changeInputValue}
                    />
                <button type="submit">Criar Playlist</button>
                </CreatePlaylistForm>
            </CreatePlaylistContainer>
            )        
    }   
}

export default CreatePlaylist