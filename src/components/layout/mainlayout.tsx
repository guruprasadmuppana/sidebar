import {Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import ColorConfigs from "../../configs/colorConfig";
import SizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/sidebar";
import Topbar from "../common/topbar";

const MainLayout = ( ) => {
   return (
      <Box sx={{display:"flex"}}>
         <Topbar />
         <Box
         component="nav"
         sx={{
            width: SizeConfigs.sidebar.width,
            flexShrink:0
         }}
         >
            <Sidebar />
         </Box>

         <Box 
            component="main"
            sx={{
            flexGrow:1,
            p:3,
            width:`calc(100%-${SizeConfigs.sidebar.width})`,
            minHeight:"100vh",
            backgrounColor: ColorConfigs.mainBg,   
            }}
            >
            <Toolbar />
            <Outlet />
         </Box>
      </Box>   
   )
}


export default MainLayout;

// export default MainLayout;

// import React from "react";

// type Props = {}

// const MainLayout = ( props: Props ) => {
//  return (
//     <div> MainLayout </div>
//  )
    
// }

// export default MainLayout;