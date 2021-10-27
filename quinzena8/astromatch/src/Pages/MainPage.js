import React, { useState, useEffect} from "react";
import axios from "axios";
import { axiosConfig, BASE_URL } from "../Constants/Url";
import Profile from '../Components/Profile'
import ChooseBar from '../Components/ChooseBar';

const MainPage = (props) => {
    const [profile, setProfile] = useState([]) 

    const getProfileToChoose = () => {
        axios
        .get(`${BASE_URL}/person`)
        .then((res) => {
            setProfile(res.data.profile)
            console.log(res.data.profile)
        })
        .catch((err) => {
            console.log(err.res.data)
        })
    }

    const clear = () => {
        axios
        .put(`${BASE_URL}/clear`, axiosConfig)
        .then((res) => {
            console.log("cleared", res.data)
        }).catch((err) => {
            console.log("something was wrong", err.data)
        })
    };

    useEffect(()=>{
        getProfileToChoose()
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
            <ChooseBar/>
            <button onClick={() => {clear()}}>Clear all swipes and matches</button>
        </div>
    )
}

export default MainPage;