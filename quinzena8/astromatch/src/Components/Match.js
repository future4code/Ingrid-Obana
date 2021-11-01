import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Match = (props) => {
    return(
        <Stack direction="row" spacing={2}>
            <Avatar src={props.photo} alt="" sx={{ width: 56, height: 56 }}/>
            <p>{props.name}</p>
        </Stack>
    )
}

export default Match;