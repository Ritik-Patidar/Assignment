import React from 'react';
import SideNavbar from './SideNavbar';
import TopNavbar from './TopNavbar';
import { useState } from 'react';
import FormStepper from './FormStepper';
import {
    Routes,
    Route
  } from "react-router-dom";
import Draft from './Draft';

export default function MainComponent(props) {

    const [SideBar,setSideBar] = useState("none") ;
    const closeSidebar = () =>{
        setSideBar("none");
    }
    const openSidebar = () =>{
        setSideBar("block");
    }

    return (
        <>
            <SideNavbar close={closeSidebar} currState={SideBar} />
            <div className="w3-main" style={{marginLeft:"300px"}}>
                <TopNavbar open={openSidebar} currState={SideBar} />
                <div className="p-4"  >
                    <Routes>
                        <Route path="/" element={<FormStepper />} />
                        <Route path="draft" element={<Draft />} />
                    </Routes>
                </div>
            </div>

        </>
    )
}
