import React from 'react'
import styled from 'styled-components'
import TrashIcon from './TrashIcon.png';

const PlaylistCardContainer = styled.div `
    margin: 20px;
    width: 20vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Image = styled.img`
    cursor: pointer;
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

const PlaylistCard = (props) => {
    return (
    <PlaylistCardContainer>
        <Button onClick={()=> {props.changePage("playlistDetail", props.playlistId)}}>{props.name}</Button>
        <div><Image src= {TrashIcon} onClick={()=>{props.deletePlaylist(props.playlistId)}}/></div>
    </PlaylistCardContainer>
    )
}

export default PlaylistCard