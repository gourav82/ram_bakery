import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import categoryJson from "../../json/categoryJson"

const Allcategory = () => {
const [category, setCategory] = useState();


// useEffect(()=>{
//     categoryApi();
// },[])

// const categoryApi =()=>{
//     allCategoryAPI().then((res)=>{
//         setCategory(res);
//     })
// }

    var settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
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
                initialSlide: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
      };
  return (
       <div className="container--responsive font--center mt--50 mb--50">
            <span className='fs--20 font--bold mb--20'>All Category</span>
            <Slider {...settings}>
                {categoryJson?.map((items,index)=>{
                    return(
            <div className='category' key={`cat-${index}`}>
                <img src={items.image} alt={items.name} width={120} height={120} className='mb--15 mt--20'/>
                <span className='fs--15 font--bold pt--10'>{items.name}</span>
            </div>
                    )
                })}
           
            </Slider>
       </div>
    )
}

export default Allcategory

