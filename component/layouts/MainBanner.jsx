import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { BsChevronDown } from "react-icons/bs";
import Animation from '../core/Animation';
import letestItem from "../../json/letestItemJson"

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
                  <Image src={item.image} width={100} height={200} alt='' className='bg--radius' />
                  <span className='fs--20 bg--error bg--radius pd--10 color--white font--bold ml--20'>{item.name}</span>
                </div>
              )
            })}
          </Slider>
        </div>
        <div className="banner--table-book pd--20 bg--radius">
          <h1 className='fs--28 font--bold '> Let`s Start Your Business with Ram Bakery Machine</h1>
          
          <p>Location</p>
          <div className="flex flex--justify-content-end flex--align-items-center position--relative mb--15">
            <select name="" className="location">
              <option>Select Region</option>
              <option>Gazipur</option>
              <option>Varansi</option>

            </select>
            <BsChevronDown className='position--absolute color--error' />
          </div>
          <span className='mt--10'>Date</span>
          <div className="flex flex--justify-content-between flex--align-items-center">
            <span className='mb--5'>
              <button className='date font--bold mr--5'>Today</button>
              <button className='date font--bold'>Tomorrow</button>
            </span>
            <div className="time flex flex--justify-content-end flex--align-items-end width--column-two-5 mb--15">
              <Animation height={`40`} width={`40`} animationData={"/assets/json/calendar1.json"} />
             <input type="date" className='date-input mb--5'/>
            </div>
          </div>
          <span>Session</span>
          <div className="flex flex--justify-content-between flex--align-items-center mt--15 mb--50 position--relative">
          <span className='mb--5'>
              <button className='date font--bold mr--5'>Lunch</button>
              <button className='date font--bold'>Dinner</button>
            </span>
            <div className="time flex flex--justify-content-end flex--align-items-center width--column-two-5 mb--15">
              <Animation height={`40`} width={`40`} animationData={"/assets/json/alarm-clock.json"} />
              <select name="" className="location position--relative">
                <option>Select Time</option>
                <option>Gazipur</option>
                <option>Varansi</option>
              </select>
            </div>
            <Image src="/assets/image/food_icon.png" width={100} height={100} alt='' className='btn_ripple' />
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default MainBanner

const mainSlide = [
  {
    img: "/assets/image/slide1.png",
    alt: "",
    btn: "Order Now"
  },
  {
    img: "/assets/image/slide2.png",
    alt: "",
    btn: "Order Now"
  },
  {
    img: "/assets/image/slide3.png",
    alt: "",
    btn: "Order Now"
  },
  {
    img: "/assets/image/slide4.png",
    alt: "",
    btn: "Order Now"
  },
  {
    img: "/assets/image/slide5.png",
    alt: "",
    btn: "Order Now"
  },
  {
    img: "/assets/image/slide6.png",
    alt: "",
    btn: "Order Now"
  },
  {
    img: "/assets/image/slide7.png",
    alt: "",
    btn: "Order Now"
  }

]