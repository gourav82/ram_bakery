import React from 'react'
import useCheckMobileScreen from '../../component/hooks/useCheckMobileScreen';
import { FaFacebook, FaInstagramSquare, FaYoutube, FaWhatsappSquare } from "react-icons/fa";
import Link from 'next/link';

const Contact = () => {
  const { isMobile, isIpad } = useCheckMobileScreen();
  const instaGramUrl = "https://www.instagram.com/phonikindustries?utm_source=qr&igsh=MTZmZ2F1NzdrbG51eA==";
  const faceBookUrl = "https://www.facebook.com/phonikindustries?mibextid=ZbWKwL"
  return (

    <div className="container--responsive contact font--center mt--120 mb--50">
      <p className='fs--35 color--error mb--50'>Contact Us</p>
      <div className={`contact--details ${isMobile || isIpad ? "flex--direction-column" : "flex flex--justify-content-between"}`}>
        <div className=" flex flex--direction-column">
          <span className='bg--shadow mb--20 pd--15 bg--radius'>
            <span className='color--error fs--20'>Mobile No.</span>
            <p className='mt--10'>9017137794</p>
          </span>
          <span className='bg--shadow mb--20  pd--15 bg--radius'>
            <span className='color--error fs--20'>Email</span>
            <p className='mt--10'>brajesh.insearch@gmail.com</p>
          </span>
          <span className='bg--shadow  pd--15 bg--radius'>
            <span className='color--error fs--20'>Address</span>
            <p className='mt--10'>Navadih Near Service Road</p>
            <span>Dhanbad Jharkhand India 828104</span>
          </span>
        </div>
        <div className="mt--25">
          <span className='color--error fs--20'>Follow Us</span>

          <ul className='flex flex flex--justify-content-between'>
            <Link href={instaGramUrl} target="_blank"><li><FaInstagramSquare className='fs--35 bg--shadow  md--15 bg--radius pd--5' /></li></Link>
            <Link href={faceBookUrl} target="_blank"> <li>< FaFacebook className='fs--35 bg--shadow  md--15 bg--radius pd--5' /></li></Link>
            <li><FaYoutube className='fs--35 bg--shadow  md--15 bg--radius pd--5' /></li>
            <li>
              <Link href={"https://wa.me/919017137794?text=Hello, I have urgent requirment. "} target="_blank">
                <FaWhatsappSquare className='fs--35 bg--shadow  md--15 bg--radius pd--5' />
              </Link>
            </li>
          </ul>

        </div>
        <div className="">
          <img src="/assets/image/map.webp" alt="" width="500" height="500" />
        </div>
      </div>
    </div>

  )
}

export default Contact