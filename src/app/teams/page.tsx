import { Search } from '@/components/search'
import { UserCard } from '@/components/usersCard'
import React from 'react'

const page = () => {
  return (<>
  <div className='w-full  h-[15vh] justify-center items-center flex'> 

  <Search></Search>

 
  

  </div>
    <div className='flex flex-col w-full items-center overflow-y-auto h-[85vh]'>
      <UserCard></UserCard>
      <UserCard></UserCard>
      <UserCard></UserCard>
      <UserCard></UserCard>
      <UserCard></UserCard>
      
    </div>
    </>)
}

export default page
