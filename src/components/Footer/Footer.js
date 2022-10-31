import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";


const Footer=()=>{
    
    return(<>
    <div className="Footer-container">
        <hr/>
        <div className="footer">
            <div className="social-links">
<a href="https://github.com/Abhishekbhawsar19" target="black">
<img src={Github} alt=" "/>
</a>
<a href="https://www.instagram.com/" target="black"> <img src={Instagram} alt=" "/></a>
<a href="https://www.linkedin.com/in/abhishek-bhawsar-a337891b1/" target="black">  <img src={Linkedin} alt=" "/></a>
           
          
 </div>
           
            
             <div className="logo-f">
                <img src={Logo} alt=" "/>
             </div>
             <div className="developer"><span>ABHISHEK BHAWSAR</span> </div>
    </div>
    <div className="blur footer-blur-1"></div>
    <div className="blur footer-blur-2"></div>
    </div>
    </>)
}
export default Footer;