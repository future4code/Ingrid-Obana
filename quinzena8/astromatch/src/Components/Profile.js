import React from "react";

const Profile = (props) => {
    return(
        <div>
            <h3>{props.name} {props.age}</h3>
            <img src= {props.photo} alt=""/>
            <p>{props.bio}</p>
        </div>
    )
}

export default Profile;