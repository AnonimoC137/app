import React from 'react'
import { useParams } from 'react-router'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head'

const UserProfile = () => {
    const {user} = useParams()

  return (
    <section className='container mainContainer'>
        <h1 className='title'>{user}</h1>
        <Head title={user}/>
        <Feed/>
    </section>
  )
}

export default UserProfile
