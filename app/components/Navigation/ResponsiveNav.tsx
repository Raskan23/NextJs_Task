'use client'
//import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    // const [nav, setNav] = useState ();
    // console.log('Responsive Nav')
  return (
    <div>
        <Nav/>
        <MobileNav/>
    </div>
  )
}

export default ResponsiveNav