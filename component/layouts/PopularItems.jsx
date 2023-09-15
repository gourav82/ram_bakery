import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Card from './Card';
import product from "../../public/assets/json/product.json"
import { latestProductAPI } from '../../services/Product';


const PopularItems = ({handleModal}) => {
  const [latestpro, setLatestPro] = useState();

useEffect(()=>{
    getLatestPro();
},[])

const getLatestPro=()=>{
    latestProductAPI().then((result) => {
        setLatestPro(result);
        // console.log(result);
    }).catch((err) => {
        
    });
}
    var settings = {
      autoplay:true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows: true,

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <Slider {...settings} className='container--responsive'>
   {latestpro?.products?.map((item,index)=>{
                return(
               <div key={`peoduct-${index}`} >
                    <Card item={item} handleModal={handleModal}/>
                </div>
                )
            })}
   </Slider>
    )
}

export default PopularItems