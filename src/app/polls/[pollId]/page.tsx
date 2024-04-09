import { PollsCard } from '@/components/pollsCard';
import { Search } from '@/components/search'
import { UserCard } from '@/components/usersCard'
import React from 'react'

const page = ({params}: {params: {pollId: string}}) => {
 const userId =params.pollId;
 console.log("userid",userId);

 const data = [
  {
    id: 1,
    name: 'John Doe',
    votes: 10},
  {
    id: 2,
    name: 'Jane Doe',
    votes: 20},
  {
    id: 3,
    name: 'John Smith',
    votes: 30},
  {
    id: 4,
    name: 'Jane Smith',
    votes: 40},
  {
    id: 5,
    name: 'John Doe',
    votes: 10},
  {
    id: 6,
    name: 'Jane Doe',
    votes: 20},
  {
    id: 7,
    name: 'John Smith',
    votes: 30},
  {
    id: 8,
    name: 'Jane Smith',
    votes: 40},
  {
    id: 9,
    name: 'John Doe',
    votes: 10},
  {
    id: 10,
    name: 'Jane Doe',
    votes: 20},
  {
    id: 11,
    name: 'John Smith',
    votes: 30},
  {
    id: 12,
    name: 'Jane Smith',
    votes: 40},
  {
    id: 13,
    name: 'John Doe',
    votes: 10},
  {
    id: 14,
    name: 'Jane Doe',
    votes: 20},
  {
    id: 15,
    name: 'John Smith',
    votes: 30},
  {
    id: 16,
    name: 'Jane Smith',
    votes: 40},
  {
    id: 17,
    name: 'John Doe',
    votes: 10},
  {
    id: 18,
    name: 'Jane Doe',
    votes: 20},
  {
    id: 19,
    name: 'John Smith',
    votes: 30},
  {
    id: 20,
    name: 'Jane Smith',
    votes: 40},
  {
    id: 21,
    name: 'John Doe',
    votes: 10},
  {
    id: 22,
    name: 'Jane Doe',
    votes: 20},
  {
    id: 23,
    name: 'John Smith',
    votes: 30},
  {
    id: 24,
    name: 'Jane Smith',
    votes: 40},
  {
    id: 25,
    name: 'John Doe',
    votes: 10},
 ]


  return (<>
  <div className='w-full  h-[15vh] justify-center items-center flex'> 

  <Search></Search>

 
  

  </div>
    <div className='flex flex-col w-full items-center overflow-y-auto h-[85vh]'>
      <PollsCard></PollsCard>
      <PollsCard></PollsCard>
      <PollsCard></PollsCard>
      <PollsCard></PollsCard>
      
    </div>
    </>)
}

export default page
