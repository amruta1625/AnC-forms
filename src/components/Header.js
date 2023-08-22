import React from 'react'
import "./Header.css"
import { IconButton } from '@mui/material'
import logo from "../images/anc-logo.png"
import SearchIcon from '@mui/icons-material/Search'
import AppsIcon from '@mui/icons-material/Apps'
import Avatar from '@mui/icons-material/Person'
import avatarimage from "../images/avatar.png"
import TemporaryDrawer from './TemporaryDrawer'

function Header(){
    return(
        <div className="header">
            <div className="header_info">
                <TemporaryDrawer />
                <img src={logo} alt ="logo" style={{ width: '50px', height: 'auto' }}/>
                <div className="info">
                    AnC Forms
                </div>
            </div>
            <div className="header_search">
                <IconButton>
                    <SearchIcon />
                </IconButton> 
                <input type="text" name="search" placeholder="Search" />
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar src={avatarimage} />
                </IconButton>
            </div>
        </div>
        
    )
}

export default Header;