import React from 'react'
import { useParams } from 'react-router'
import Feed from '../Feed/Feed'

const UserProfile = () => {
    const {user} = useParams()

  return (
    <section className='container mainContainer'>
        <h1 className='title'>{user}</h1>
      <Feed/>
    </section>
  )
}

export default UserProfile
