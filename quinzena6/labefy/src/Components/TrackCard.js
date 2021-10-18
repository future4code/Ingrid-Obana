import React from 'react'
import styled from 'styled-components'
import TrashIcon from './TrashIcon.png';

const TrackCardContainer = styled.div `
    margin: 20px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: flex;
        align-items: center;
    }
`
const Image = styled.img`
    cursor: pointer;
`

const TrackContainer = styled.h4 `
    margin: 10px;
`

const ArtistContainer = styled.p `
    margin-right: 10px;
`

const TrackCard = (props) => {
    return (
    <TrackCardContainer>
        <div>
            <TrackContainer>{props.trackName} - </TrackContainer>
            <ArtistContainer>{props.artist} - </ArtistContainer>
            <div><Image src={TrashIcon} onClick={()=> {props.removeTrackFromPlaylist(props.trackId)}}/></div>
        </div>
        <audio controls="controls">
            <source src={props.url} type="audio/ogg"/>
        </audio>
    </TrackCardContainer>
    )
}

export default TrackCard