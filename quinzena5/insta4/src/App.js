import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario:'florzinha',
        fotoUsuario:'https://64.media.tumblr.com/7cae89babba5b4b41f68f73e914e4137/tumblr_oigckcM2fl1rcpnw0o3_250.png',
        fotoPost:'https://scontent.fbhz6-1.fna.fbcdn.net/v/t1.6435-9/83583129_2659311264297075_6673169036588613632_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=973b4a&_nc_ohc=_nw85t3qauMAX-7KRY4&_nc_ht=scontent.fbhz6-1.fna&oh=3856c0f084e077297ec69412b447bf78&oe=616BA0F2',
      },
      {
        nomeUsuario:'lindinha',
        fotoUsuario:'https://pbs.twimg.com/profile_images/1200064567277236225/KlQYOE1R_400x400.jpg',
        fotoPost:'https://uploads.spiritfanfiction.com/fanfics/historias/201710/lindinha-10768414-271020170724.png'
      },
      {
        nomeUsuario:'docinho',
        fotoUsuario:'https://64.media.tumblr.com/9e9060c56699b60c7b4a243b8b73ba63/tumblr_oigckcM2fl1rcpnw0o7_250.png',
        fotoPost:'https://images6.fanpop.com/image/photos/34600000/buttercup-powerpuff-girls-34674078-640-480.png'
      }
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }
  adicionaPost = () => {
    const novoPost = {
      nomeUsuarioNovoPost: this.state.valorInputUsuario,
      fotoUsuarioNovoPost: this.state.valorInputFotoUsuario,
      fotoPostNovoPost: this.state.valorInputFotoPost
    };
    const listaNovoPostAdicionado = [...this.state.posts, novoPost];

    this.setState({ posts: listaNovoPostAdicionado });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post post = {post}/>
        
      );
    });
    return (
      <MainContainer>
        <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do perfil"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        <div>{listaDePosts}</div>
        </MainContainer>
    );
  }
}

export default App;


