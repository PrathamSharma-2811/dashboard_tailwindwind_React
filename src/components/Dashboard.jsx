import React from 'react'
import Card from './Card'
import { FaBoxOpen, FaCog, FaShoppingCart, FaUser, FaUsers } from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div className='grow p-8' >
        <h2 className='text-2xl mb-4'>Dashboard</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
            <Card icon={<FaShoppingCart/>} title="Orders" value="120"/>
            <Card icon={<FaBoxOpen/>} title="Products" value="160"/>
            <Card icon={<FaUsers/>} title="users" value="10"/> 
            <Card icon={<FaCog/>} title="Settings" value="11"/>

        </div>
      
    </div>
  )
}

export default Dashboard
