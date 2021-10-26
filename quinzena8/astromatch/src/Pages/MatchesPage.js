import React from "react";

const MatchesPage = (props) => {
    return (
        <div>
            <h1>Eu sou a MatchesPage</h1>    
            <button onClick={()=>{props.changePage('mainPage')}}>MainPage</button>
        </div>
    );
}

export default MatchesPage;