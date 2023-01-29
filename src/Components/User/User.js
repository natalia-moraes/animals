import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Feed from '../Feed/Feed'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStatistic from './UserStatistic'

const User = () => {
  const {data} = React.useContext(UserContext);

  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='post' element={<UserPhotoPost />} />
        <Route path='statistic' element={<UserStatistic />} />
      </Routes>
    </section>
  )
}

export default User
