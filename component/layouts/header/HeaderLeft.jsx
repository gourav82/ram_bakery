import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderLeft = () => {
  return (
    <div className="header--menu-items flex flex--justify-content-between flex--align-items-center">
       <Link href={"/"}> <Image src="/assets/image/logo.png" alt="" width="70" height="70"/></Link>
        <ul className='flex flex--justify-content-between flex--align-items-center width--column-two-10'>
            <li className='fs--17'>Home</li>
            <li className='fs--17 ml--20'>Buffet</li>
            <li className='fs--17 ml--20'>Categury</li>
            <li className='fs--17 ml--20'>Favourite</li>
        </ul>
    </div>
    )
}

export default HeaderLeft


