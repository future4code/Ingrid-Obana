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
            setProfile(res.data.profile)
            console.log(res.data.profile)
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
            <Profile
            key={profile.id}
            name={profile.name}
            age={profile.age}
            photo={profile.photo}
            bio={profile.bio}
            />
        </div>
    )
}

export default MainPage;