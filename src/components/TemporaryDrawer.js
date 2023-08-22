import React from "react"
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
// import {Fisettings} from "react-icons/fi"
// import {BsQuestionCircle} from "react-icons/bs"
// import formimage from "..images/1.png"
// import docimage from "..images/2.png"
// import slidesimage from "..images/3.png"
// import driveimage from "..images/4.png"


function TemporaryDrawer(){
    const [state,setState] = React.useState({
        left: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        setState({  ...state, [anchor]: open});
    };
    const list = (anchor) => (
        <div style={{width:"250px"}} role="presentation">
            <List>
                <ListItem style={{fontSize:"48px", marginLeft:"5px"}}>
                    <span style={{color: "aqua", fontWeight:"700", fontSize:"26px",fontFamily:"'Product Sans', Arial, sans-serif"}}>AnC</span>
                    <span style={{color: "#5f6368", fontWeight:"500", fontSize:"22px",fontFamily:"'Product Sans', Arial, sans-serif"}}> Forms</span>
                </ListItem>
            </List>
        </div>
    );
    
    return(
        <div>
            <React.Fragment>
            <IconButton onClick={toggleDrawer("left",true)}>
                <MenuIcon />
            </IconButton>
            <Drawer open={state['left']} onClose={toggleDrawer("left",false)} anchor={'left'}>
                {list('left')}
            </Drawer>
            </React.Fragment>
        </div>
    )
}

export default TemporaryDrawer;

