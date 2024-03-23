import Link from 'next/link'
import React from 'react'

const HeaderLeft = () => {
  return (
    <div className="header--menu-items flex flex--justify-content-between flex--align-items-center">
       <Link href={"/"}> <img src="/assets/image/logo.png" alt="" width="70" height="70"/></Link>
        <ul className='flex flex--justify-content-between flex--align-items-center width--column-two-10 mt--5'>
           <li className='fs--20 ml--20'><Link href={"/"}> Home</Link></li>
            <li className='fs--20 ml--20'><Link href={"/about"}>About</Link></li>
            <li className='fs--20 ml--20'><Link href={"/product"}>Product</Link></li>
            <li className='fs--20 ml--20'><Link href={"/contact"}>Contact</Link></li>
        </ul>
    </div>
    )
}

export default HeaderLeft


