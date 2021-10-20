import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [commentValue, setCommentValue] = useState("")

	const onChangeComentario = (event) => {
		setCommentValue(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={commentValue}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario() }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario