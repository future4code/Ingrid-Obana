import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div `
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom-style: solid ;

`
const ButtonContainer = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
`

const Header = (props) => {
    return (
    <HeaderContainer>
        <h1>Labefy</h1>
        <ButtonContainer>
            <button onClick={()=> {props.changePage("createPlaylist")}}>Criar Playlist</button>
            <button onClick={()=> {props.changePage("editPlaylist")}}>Editar Playlist</button>
        </ButtonContainer>
    </HeaderContainer>
    )
    
}

export default Header