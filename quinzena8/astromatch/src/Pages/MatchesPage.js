import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/Url";
import Match from '../Components/Match'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home';

const MatchesPage = (props) => {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios
        .get(`${BASE_URL}/matches`)
        .then((res) => {
            setMatches(res.data.matches)
            console.log(res.data.matches)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(()=>{
        getMatches()
    }, [])

    return (
        <div>  
            <Button onClick={()=>{props.changePage('mainPage')}}><HomeIcon/></Button>
            <h1>Meus Matches</h1>
            {matches.map(match => {
                return(
                    <Match
                        key={match.id}
                        name={match.name}
                        photo={match.photo}
                    />
                )
            })}
        </div>
    );
}

export default MatchesPage;