import React from "react"
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

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
                    <span style={{color: "aqua", fontWeight:"700", fontSize:"26px",fontFamily:"'Product Sans', Arial, sans-serif"}}>A</span>
                    <span style={{color: "black", fontWeight:"700", fontSize:"26px",fontFamily:"'Product Sans', Arial, sans-serif"}}>n</span>
                    <span style={{color: "aqua", fontWeight:"700", fontSize:"26px",fontFamily:"'Product Sans', Arial, sans-serif"}}>C</span>
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

