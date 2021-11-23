import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import BusinessIcon from '@mui/icons-material/Business';
import { Link } from 'react-router-dom';

export default function SideNavbar(props) {

    return (
        <div>
            <nav className="w3-sidebar w3-collapse w3-animate-left" style={{width:"300px",zIndex:"3",background:"#141414",display:props.currState}} id="mySidebar"><br />
                <div className="w3-container">
                    <img src="https://www.bimaxpress.com/static/imgs/logo.png" style={{width:"60%",filter:"invert(1)"}} className="" alt="" /><br/><br/>
                </div>
                <div className="w3-bar-block text-white">
                    <Link to="/" className="w3-bar-item w3-button w3-padding text-decoration-none text-white"><HomeIcon /> Home</Link>
                    <Link to="/" className="w3-bar-item w3-button w3-padding text-decoration-none text-white"><EmailOutlinedIcon /> Mail</Link> 
                    <Link to="/" className="w3-bar-item w3-button w3-padding text-decoration-none text-white"><CreateNewFolderOutlinedIcon/> Create</Link> 
                    <Link to="/draft" className="w3-bar-item w3-button w3-padding text-decoration-none text-white"><InsertDriveFileOutlinedIcon/> Plain Details</Link> 
                    <Link to="/" className="w3-bar-item w3-button w3-padding text-decoration-none text-white"><i className="fa fa-hospital-o me-2"></i> Hospital</Link> 
                    <Link to="/" className="w3-bar-item w3-button w3-padding text-decoration-none text-white"><BarChartIcon/> Analytics</Link> 
                    <Link to="/" className="w3-bar-item w3-button w3-padding text-decoration-none text-white"><i className="fa fa-stethoscope me-2"></i> Doctor</Link> 
                    <Link to="/" className="w3-bar-item w3-button w3-padding text-decoration-none text-white"><BusinessIcon /> Empanelled Companies</Link>  
                </div>
            </nav>
            <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={props.close} style={{cursor:"pointer",display:props.currState}} title="close side menu" id="myOverlay"></div>
        </div>
    )
}
