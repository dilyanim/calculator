import React from 'react';
import { GiNightSleep } from "react-icons/gi";

const Header = ({dark,setDark}) => {

    const allDark = localStorage.getItem("key") ==="false";
     setDark(!allDark)
 
     const allDarkMode=()=>{
       const darkList = !dark
       setDark(darkList);
       localStorage.setItem("key", darkList);
     }
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                 <GiNightSleep onClick={allDarkMode}
                  style={{width:"30px", height:"30px" , margin : "0 0px -58px 570px"
                  }}/>
                </div>
            </div>
            
        </div>
    );
};

export default Header;
