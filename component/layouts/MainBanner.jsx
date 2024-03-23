import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { BsChevronDown } from "react-icons/bs";
import Animation from '../core/Animation';
import letestItem from "../../json/letestItemJson"
import Link from 'next/link';

const MainBanner = () => {
const [banner, setBanner] = useState();


  var settings = {
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        }
      }
    ]
  };
  return (
    <div className="banner">
      <div className="banner--table flex flex--justify-content-between flex--align-items-center mt--10 mb--40">
        <div className="container--responsive banner--table-slider pd--10 bg--radius">
          <p className='font--center fs--25 color--white'>A Product By SINMAG</p>
          <Slider {...settings}>
            {letestItem.map((item, index) => {
              return (
                <div key={`banner-${index}`} className="image pd--10 pt--20">
                  <img src={item.image} width={100} height={200} alt='' className='bg--radius' />
                  <span className='fs--20 bg--error bg--radius pd--10 color--white font--bold ml--20'>{item.name}</span>
                </div>
              )
            })}
          </Slider>
        </div>
        <div className="banner--table-book pd--20 bg--radius">
          <h1 className='fs--28 font--bold '> Let`s Start Your Business with Ram Bakery Machine</h1>
          <Animation height={`200`} width={`200`} animationData={"/assets/json/delivery.json"} />
          <p className='mt--15 font--center'>
         <Link href={"/contact"}> <button className='fs--15 bg--error bg--radius pd--5 ml--10 color--white font--bold'>Contect Us</button></Link>
         </p>
          <div className="flex flex--justify-content-between flex--align-items-center mt--15 mb--50 position--relative">
            <img src="/assets/image/food_icon.png" width={200} height={100} alt='' className='btn_ripple' />
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default MainBanner

