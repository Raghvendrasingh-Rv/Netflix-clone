import React, { useEffect, useState } from 'react'
import './Header.css'

function Header() {

    const [show,  setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >100){
                setShow(true)
            }else{
                setShow(false)
            }
        })
        return ()=>{
            window.addEventListener("scroll")
        }
    },[])

    return (
        <div className={`header ${show && "header_black"}`}>
           <img className="header_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt ="" /> 
           <img className="header_usericon" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""/>
        </div>
    )
}

export default Header
