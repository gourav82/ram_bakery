import React from 'react'
import Slider from 'react-slick'

const OfferSlider = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,

      };
  return (
    <div className="container--responsive font--center mt--50 mb--50">
    <span className='fs--20 font--bold mb--20'>Offers</span>
    <Slider {...settings}>
        {offerSlider.map((items,index)=>{
            return(
    <div className='category' key={`cat-${index}`}>
        <img src={items.img} alt={items.alt} width={1600} height={100} className='mb--15 mt--20'/>
    </div>
            )
        })}
   
    </Slider>
</div>
    )
}

export default OfferSlider

const offerSlider = [
    {
        img: "/assets/image/slider1.jpg",
        alt: "spice heaven dish",
        catName:"Biryani"
    },
    {
        img: "/assets/image/slider2.jpg",
        alt: "spice heaven dish",
        catName:"Biryani"
    },
    {
        img: "/assets/image/slider3.jpg",
        alt: "spice heaven dish",
        catName:"Biryani"
    }
]