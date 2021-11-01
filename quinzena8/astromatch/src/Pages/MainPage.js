import React, { useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/Url";
import Profile from '../Components/Profile'
import Button from '@mui/material/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Tooltip from '@mui/material/Tooltip';


const MainPage = (props) => {
    const [profile, setProfile] = useState([])

    const getProfileToChoose = () => {
        axios
        .get(`${BASE_URL}/person`)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch(() => {
            alert("algo deu errado, tente novamente")
        })
    }

    const choosePerson = (choice) => {
        const body = {
            id:  profile.id,
            choice: choice
        }
        axios
        .post(`${BASE_URL}/choose-person`, body)
        .then(() => {
            getProfileToChoose()
        }).catch(() => {
            alert("algo deu errado, tente novamente")
        })
    }

    const clear = () => {
        axios
        .put(`${BASE_URL}/clear`)
        .then(() => {
        }).catch(() => {
            alert("algo deu errado, tente novamente")
        })
    }; 

    useEffect(()=>{
        getProfileToChoose()
    }, [])

    return(
        <div>
            <Button onClick={ ()=> {props.changePage('matchesPage')}}><PeopleAltIcon/></Button>
            {profile ? <Profile
            key={profile.id}
            name={profile.name}
            age={profile.age}
            photo={profile.photo}
            bio={profile.bio}
            /> : <p> Volte mais tarde</p>}
            <Tooltip title="Dislike">
                <Button variant="text" onClick={profile && profile.id ? ()=> choosePerson(false) : null}><CloseIcon/></Button>
            </Tooltip>
            <Tooltip title="Like">
                <Button variant="text" onClick={profile && profile.id ? ()=> choosePerson(true) : null}><FavoriteBorderIcon/></Button>
            </Tooltip>
            <Tooltip title="Limpar">
                <Button variant="text" onClick={()=>{clear()}}><DeleteOutlineIcon/></Button>
            </Tooltip>
        </div>
    )
}

export default MainPage;