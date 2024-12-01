import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from './Loading';

function AppLayout() {
  const loadingNavigation= useNavigation();
  if(loadingNavigation.state=== 'loading'){
    return(<Loading/>)
  }

  return (
    <div style={{backgroundColor:'#ffffff'}} className='container'>
        <Header/> 
        <Outlet/>    
        <Footer/>
    </div>
  )
}

export default AppLayout