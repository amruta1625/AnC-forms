import { IconButton } from "@mui/material";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import FolderOpenIcon from "@mui/icons-material/FolderOpen"
import "./Homepage.css"
import forms_image from "../images/forms_image.png"

function  Homepage(){
    return(
        <div className="homepage">
            <div className="homepage_top">
                <div className="homepage_top_right" style={{fontSize:"16px",fontWeight:"500"}}>
                <div className="page_heading" aria-hidden="true">Recent Forms</div>
                </div>
                <div className="homepage_top_right">
                    <div className="homepage_top_center" style={{fontSize:"14px",marginRight:"125px"}}>Owned by anyone <ArrowDropDownIcon/></div>
                    <IconButton>
                        <StorageIcon style={{ fontSize:"16px",color:"black"}}/>
                    </IconButton>
                    <IconButton>
                        <FolderOpenIcon style={{ fontSize:"16px",color:"black"}}/>
                    </IconButton>
                </div>
            </div>
            <div className="homepage_forms">
                <div className="forms_card">
                    <img src={ forms_image} className="forms_image" alt="recent forms"/>
                    <div className="forms_card_content">
                        <h5></h5>
                        <div className="forms_content" style={{fontSize:"12px",color:"grey"}}>
                            <div className="content_left">
                                {/* <StorageIcon style={{color:"white",fontSize:"14px",backgroundColor:"#6E2594",padding:"3px" ,marginRight:"3px",borderRadius:"2px"}}/> */}
                            </div>
                             {/* <MoreVertIcon style={{fontSize:"12px",color:"grey"}}/> */}
                        </div> 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Homepage