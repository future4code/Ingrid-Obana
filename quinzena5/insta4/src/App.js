import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'florzinha'}
          fotoUsuario={'https://64.media.tumblr.com/7cae89babba5b4b41f68f73e914e4137/tumblr_oigckcM2fl1rcpnw0o3_250.png'}
          fotoPost={'https://scontent.fbhz6-1.fna.fbcdn.net/v/t1.6435-9/83583129_2659311264297075_6673169036588613632_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=973b4a&_nc_ohc=_nw85t3qauMAX-7KRY4&_nc_ht=scontent.fbhz6-1.fna&oh=3856c0f084e077297ec69412b447bf78&oe=616BA0F2'}
        
        />
        <Post
          nomeUsuario={'lindinha'}
          fotoUsuario={'https://pbs.twimg.com/profile_images/1200064567277236225/KlQYOE1R_400x400.jpg'}
          fotoPost={'https://uploads.spiritfanfiction.com/fanfics/historias/201710/lindinha-10768414-271020170724.png'}
        />
        <Post
          nomeUsuario={'docinho'}
          fotoUsuario={'https://64.media.tumblr.com/9e9060c56699b60c7b4a243b8b73ba63/tumblr_oigckcM2fl1rcpnw0o7_250.png'}
          fotoPost={'https://images6.fanpop.com/image/photos/34600000/buttercup-powerpuff-girls-34674078-640-480.png'}
        />

      </MainContainer>
    );
  }
}

export default App;
