import {AppBar, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import SizeConfigs from "../../configs/sizeConfigs";


const Topbar = () => {
 return (
    <AppBar
      position="fixed"
      sx={{
         width:`calc(100% -${SizeConfigs.sidebar.width})`,
         ml: SizeConfigs.sidebar.width,
         boxShadow: "unset",
         backgroundColor: "#fff",
         color:"#000"
      }}
    >
      <Toolbar>
         <Typography variant="h6">
            Reach sidebar with dropdown
         </Typography>

      </Toolbar>
    </AppBar>
 )
    
}

export default Topbar;


// import React from "react";

// type Props = {}

// const Topbar = ( props: Props ) => {
//  return (
//     <div> Topbar </div>
//  )
    
// }

// export default Topbar;