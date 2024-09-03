import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'


const App = () => {
  return (
	<div className='flex '>
		<Sidebar/>
		<div className='grow ml-16 md:ml-64 h-full lg:h-screen'>
		<Navbar/>

		<div>
		<Dashboard/>
		</div>
		</div>
		
	</div>
  )
}

export default App
