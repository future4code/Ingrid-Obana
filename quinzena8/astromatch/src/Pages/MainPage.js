import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/Url";
import Profile from '../Components/Profile'

const MainPage = (props) => {
    const [profile, setProfile] = useState([]) 

    const getProfile = () => {
        axios
        .get(`${BASE_URL}/person`)
        .then((res) => {
            setProfile(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(()=>{
        getProfile()
    }, [])

    return(
        <div>
            <button onClick={ ()=> {props.changePage('matchesPage')}}>MatchesPage</button>
            <h1>AstroMatch</h1>
            <Profile />
        </div>
    )
    
}

export default MainPage;