import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>VIO CHAT</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/18528246/pexels-photo-18528246/free-photo-of-model-posing-in-white-clothes-on-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt='' />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar