import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import ThemeContextProvider from './context/ThemeContextProvider'



const App = () => {
  return (
	<ThemeContextProvider>
	<div className='flex '>
		<Sidebar/>
		<div className='grow ml-16 md:ml-64 h-full lg:h-screen'>
		<Navbar/>

		<div>
		<Dashboard/>
		</div>
		</div>
    </div>
    </ThemeContextProvider>
  )
}

export default App
