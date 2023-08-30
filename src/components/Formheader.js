import React from 'react';
import form_image from "../images/anc-logo.png";
import { FiStar ,FiSettings} from "react-icons/fi";
import {IoMdFolderOpen} from "react-icons/io";
import { IconButton } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from '@mui/material/Avatar';
import {AiOutlineEye} from "react-icons/ai";
import Button from "@mui/material/Button";


import "./Formheader.css";

function Formheader() {
  const doc_name = "Untitled form"; // Replace this with your actual doc_name

  return (
    <div className="form_header">
      <div className="form_header_left">
        <img src={form_image} style={{ height: "45px", width: "40px" }} alt="Form Logo" />
        <input type="text" placeholder="Untitled form" className="form_name" value={doc_name}></input>
        <IoMdFolderOpen className="form_header_icon" style={{ marginRight: "10px" }} />
        <FiStar className="form_header_icon" style={{ marginRight: "10px" }} />
        <span style={{ fontSize: "12px", fontWeight: "600" }}>changes will be saved </span>
      </div>
      <div className="form_header_right">
        <IconButton>
          <ColorLensIcon size="small" className="form_header_icon"/>
        </IconButton>
        <IconButton>
          <AiOutlineEye className="form_header_icon" />
        </IconButton>
        <IconButton>
          <FiSettings className="form_header_icon" />
        </IconButton>
        <IconButton>
          <Button variant="contained" color="primary" href="#contained-buttons">Send</Button>
        </IconButton>
        <IconButton>
          <MoreVertIcon className="form_header_icon" />
        </IconButton>
        <IconButton>
          <Avatar className="form_header_icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default Formheader;
