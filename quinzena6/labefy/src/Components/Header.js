import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div `
  height: 16vh;
  width: 100vw;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 2px 4px 0 rgba(250, 93, 156,.8); 

`

const ButtonContainer = styled.div`
    display: flex;
    width: 70%;
    justify-content: flex-end;
`
const Button = styled.button `
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    border: solid 2px black;
    outline: 0;
    margin: 0 16px;
    padding: 0.4rem 2rem;
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

const Header = (props) => {
    return (
    <HeaderContainer>
        <h1>Labefy</h1>
        <ButtonContainer>
            <Button onClick={()=> {props.changePage("createPlaylist")}}>Criar Playlist</Button>
            <Button onClick={()=> {props.changePage("editPlaylist")}}>Editar Playlist</Button>
        </ButtonContainer>
    </HeaderContainer>
    )
}

export default Header