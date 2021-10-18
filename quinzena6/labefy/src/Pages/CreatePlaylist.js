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
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    outline: 0;
    padding: 0.4rem 1rem;
    color: #fa5d9e;
    border-radius: 0.35rem;
    position: relative;
    
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
        }).catch(() => {
            alert("Escolha outro nome pra sua playlist!")
        });
        this.setState({inputNameValue: ""})
    };

    render(){
        return (
            <CreatePlaylistContainer>
                <h2>Criar nova playlist</h2>
                <CreatePlaylistForm onSubmit={this.createPlaylist}>
                    <Input
                        placeholder="Nome da Playlist"
                        type="text"
                        value={this.state.inputNameValue}
                        onChange={this.changeInputValue}
                    />
                <Button type="submit">Criar Playlist</Button>
                </CreatePlaylistForm>
            </CreatePlaylistContainer>
            )        
    }   
}

export default CreatePlaylist