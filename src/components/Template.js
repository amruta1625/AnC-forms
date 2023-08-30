import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { IconButton } from "@mui/material"
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore"

import blank from "../images/addforms.png"
import uuid from "react-uuid"
import {useNavigate} from 'react-router-dom';

import "./Template.css"

function Template(){
     const navigate = useNavigate();
     const createForm=()=>{
          
          const id_=uuid();

          navigate("/form/"+id_)
     }
    return (
        <div className="template_section">
             <div className="template_top">
                 <div className="template_left">
                      <span style={{fontSize:"16px", color:"#202124"}}>Start New Form</span>
                 </div>
                 <div className="template_right">
                      <div className="galary_button">
                           Template gallery
                           <UnfoldMoreIcon />
                      </div>
                      <IconButton>
                           <MoreVertIcon fontSize="small"/>
                      </IconButton>
                 </div>
             </div>
             <div className="template_body">
               <div className="addforms" onClick={createForm}>
                    <img src={blank} alt="new form" className="new_forms"/>
                    <p className="form_title">Blank</p>

               </div>
                  
             </div>
             
        </div>
    )
}
export default Template;