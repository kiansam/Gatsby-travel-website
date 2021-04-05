import React, {useState, useEffect} from 'react';
import {FaBars, Fatimes} from "react-icons/fa";
import { IconContext } from "react-icons/lib"

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const changeNav = () => {
        if(window.scroll >= 80) {
            setScroll(true)
        }else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
   window.addEventListener("scroll", changeNav)
    }, [])
    return (
        <>
       <IconContext.provider value={{ color: "#141414"}} >
       <Nav active={scroll} click={click}>

       </Nav>
       </IconContext.provider>
         </>
    )

}
export default Navbar;