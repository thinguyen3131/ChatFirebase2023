import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user'/>
      </div>
      <div className='userChat'>
        <img src="https://images.pexels.com/photos/18528246/pexels-photo-18528246/free-photo-of-model-posing-in-white-clothes-on-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
        <div className='userChatInfo'>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search