import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Card from './Card';
import Modal from '../core/Modal';
import ModalCard from './ModalCard';
import popularJson from "../../json/letestItemJson"


const PopularItems = ({displayToast}) => {
  const [latestpro, setLatestPro] = useState();
  const [modal, setModal] = useState(false);
  const [items,setItems] = useState({});

  const handleModal =(item)=>{
    setModal(!modal);
    setItems(item);
    console.log(items, "helooo uhfayhbf  ufciaf a")
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
    <>    <Slider {...settings} className='container--responsive'>
   {popularJson.map((item,index)=>{
                return(
               <div key={`peoduct-${index}`} >
                    <Card item={item} handleModal={handleModal}/>
                </div>
                )
            })}
   </Slider>

{modal? 
  <Modal show={modal} position="left" className={"width--column-three-5"} isDrawer={false} hideClose={true} close={() => setModal(false)}>
  <ModalCard items={items} handleModal={handleModal} displayToast={displayToast}/>
 </Modal>
  : ""}
  </>

    )
}

export default PopularItems