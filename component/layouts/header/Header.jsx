import React, { useState } from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import TopHeader from './TopHeader'
import Drawer from 'react-modern-drawer'
import Link from 'next/link'
import { FaWhatsappSquare } from 'react-icons/fa'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <>
    <div className="header bg--shadow pb--10">
      <TopHeader />
      <div className="container--responsive header--menu pt--5 pb--5 flex flex--justify-content-between flex--align-items-center">
        <HeaderLeft/>
        <HeaderRight toggleDrawer={toggleDrawer} />
      </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className=''
      >
       <div className="flex flex--direction-column flex--justify-content-between flex--align-items-center pd--20">
       <Link href={"/"}>
        <img src="/assets/image/logo.png" alt="" width={120} height={100}/>
        </Link>
        <ul className='flex flex--direction-column flex--align-items-center width--column-two-10'>
            <li className='fs--22 mt--20'><Link href={"/"}> Home</Link></li>
            <li className='fs--22 mt--20'><Link href={"/about"}>About</Link></li>
            <li className='fs--22 mt--20'><Link href={"/product"}>Product</Link></li>
            <li className='fs--22 mt--20'><Link href={"/contact"}>Contact</Link></li>
            
        </ul>
    </div>
      </Drawer>
    </>
  )
}

export default Header