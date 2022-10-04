import React, { useState } from 'react';
import { AiOutlineHeart }from "react-icons/ai";
import { FaBars } from "react-icons/fa"
import { MdOutlineSendAndArchive } from 'react-icons/md'
import { CgMoreVerticalR } from 'react-icons/cg'

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen (!isOpen);

  return (
    <div style={{width: isOpen ? "330px" : "50px"}} className="sidebar">
      <div className="top_section">
        <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Lwala</h1>
        <div style={{marginLeft: isOpen ? "140px" : "0px"}} className="bars">
          <FaBars onClick={toggle}/>
        </div>
      </div>

      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        <div className="icon"><MdOutlineSendAndArchive /></div>
        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Requests</div>
      </NavLink>

      <NavLink 
        to="/commodities" 
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        <div className="icon"><CgMoreVerticalR /></div>
        <div style={{display: isOpen ? "block" : "none"}} className="link_text">Commodities</div>
      </NavLink>

      <div style={{display: isOpen ? "block" : "none"}} className='footer'>
        <p className="footer-text">
          Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with <AiOutlineHeart style={{color: 'red'}}/> by Lwala Community Alliance
        </p>
      </div>
    </div>
  )
}

export default Sidebar