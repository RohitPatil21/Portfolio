import React from 'react'
import "../styles/navbar.scss";
import "../styles/common.scss";

const Navbar = () => {
  return (
    <div className='navbar d-flex justify-between'>
      <div className='navbar__left'>
          <h1 className='text-orange'>Logo</h1>
      </div> 
       <div className='navbar__right text-white d-flex justify-center align-center gap letter-spacing'>
        <label>Home</label>
        <label> About </label>
        <label> Skills </label>
        <label> Projects </label>
        <label> Work </label>
        </div>
    </div>
  )
}

export default Navbar