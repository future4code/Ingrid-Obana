import React, { useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/Url";
import Profile from '../Components/Profile'

const MainPage = (props) => {
    const [profile, setProfile] = useState([])

    const getProfileToChoose = () => {
        axios
        .get(`${BASE_URL}/person`)
        .then((res) => {
            console.log(res.data.profile)
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log("something was wrong", err.data)
        })
    }

    const choosePerson = (choice) => {
        const body = {
            id:  profile.id,
            choice: choice
        }
        axios
        .post(`${BASE_URL}/choose-person`, body)
        .then((res) => {
            getProfileToChoose()
            console.log(res.data)
        }).catch((err) => {
            console.log("something was wrong", err.data)
        })
    }

    const clear = () => {
        axios
        .put(`${BASE_URL}/clear`)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log("something was wrong", err.data)
        })
    }; 

    useEffect(()=>{
        getProfileToChoose()
        clear()
    }, [])

    return(
        <div>
            <button onClick={ ()=> {props.changePage('matchesPage')}}>MatchesPage</button>
            {profile ? <Profile
            key={profile.id}
            name={profile.name}
            age={profile.age}
            photo={profile.photo}
            bio={profile.bio}
            /> : <p> Volte mais tarde</p>}
            <button onClick={profile && profile.id ? ()=> choosePerson(false) : null}>X</button>
            <button onClick={profile && profile.id ? ()=> choosePerson(true) : null}>&hearts;</button><br/>
            <button onClick={()=>{clear()}}>Clear all swipes and matches</button>
        </div>
    )
}

export default MainPage;