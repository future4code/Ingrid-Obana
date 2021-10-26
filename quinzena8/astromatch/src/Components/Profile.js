import React from "react";

const Profile = (props) => {
    <div>
        <h3>{props.name}, {props.age}</h3>
        <img src= {props.photo}/>
        <p>{props.bio}</p>
    </div>
}

export default Profile;