import React from 'react';
import styled from 'styled-components';


const ImageContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 10vw;
    padding: 15px 30px;
    margin: 10px auto;
`

const Image = styled.img `
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <ImageContainer>
            <Image src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageContainer>

    )
}

export default ImagemButton;