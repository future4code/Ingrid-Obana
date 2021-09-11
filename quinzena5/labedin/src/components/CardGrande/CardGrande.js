import React from 'react';
import styled from 'styled-components';

const BigCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 10px;
    height: 20vh;
    width: 40vw;
`;

const Imagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const TituloH4 = styled.h4 `
    margin-bottom: 15px;
`;

const ChildContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;


function CardGrande(props) {
    return (
        <BigCardContainer>
            <Imagem src={ props.imagem } />
            <ChildContainer>
                <TituloH4>{ props.nome }</TituloH4>
                <p>{ props.descricao }</p>
            </ChildContainer>
        </BigCardContainer>
    )
}

export default CardGrande;