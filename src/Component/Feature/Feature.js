import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./Feature.css";
import R from "./robert.jpg";
import batman from "./batman.png";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Feature(props) {
  return (
    <>
    
      <div id="firstdisplaydiv">
        <img src={R} width="100%" height="112%" />
        
      </div>
      <div id="genreSetting">
        <div id="typeOfstuff">{props.type}</div>
       {props.type!="series"&& props.type!="movies"?"":<div id="selection">
            <select>
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fanatsy</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">SciFi</option>
                <option value="thriller">Thriller</option>

            </select>
        </div>}
        
      </div>
      <div id="movietitle">
        <img src={batman} width="30%" />
        <div id="content_movie">
          The Batman is a 2022 American superhero film based on the DC Comics
          character Batman. Produced by Warner Bros. Pictures, DC Films, 6th &
          Idaho, and Dylan Clark Productions, and distributed by Warner Bros.
          Pictures, it is a reboot of the Batman film franchise. The film was.......
   
        </div>
        <div id="icon_movie">
        <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<PlayArrowRoundedIcon color="inherit"/>} color="error">
        PLAY
      </Button>
      <Button variant="contained" endIcon={<InfoOutlinedIcon color="inherit"/>} color="error">
        INFO
      </Button>
    </Stack>
        </div>
      </div>
     
    </>
  );
}

export default Feature;
