import React from 'react';
import styled from 'styled-components';

const SmallContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 10px;
    height: 10vh;
    width: 40vw;
`;

const Image = styled.img `
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`;

const SmallChildContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
`;

const TituloH4 = styled.h4 `
    margin-bottom: 15px;
`;

function CardPequeno(props) {
    return (
        <SmallContainer>
            <SmallChildContainer>
                <Image src={ props.imagem } />
                <TituloH4>{ props.nome }</TituloH4>
                <p>{ props.endereco }</p>
            </SmallChildContainer>
        </SmallContainer>
    )
}
export default CardPequeno;