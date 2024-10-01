import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Card from './Card';
import Modal from '../core/Modal';
import ModalCard from './ModalCard';
import productVideo from "../../json/poductVideo"
import Video from './Video';


const PopularItems = ({ displayToast }) => {
  const [latestpro, setLatestPro] = useState();
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState({});

  const handleModal = () => {
    setModal(!modal);
    setItems(item);
  }


  var settings = {
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='container--responsive font--center'>
     
            <p className='mt--50 color--error fs--30 mb--20 font--bold'>Our Products Video</p>
          <Slider {...settings} >
            {productVideo.map((item, index)=>{
              return(

                <Video  embedID={item.url} key={index}/>
              )
            })}

          </Slider>

      {/* {modal ?
        <Modal show={modal} position="left" className={"width--column-three-5"} isDrawer={false} hideClose={true} close={() => setModal(false)}>
          <ModalCard items={items} handleModal={handleModal} displayToast={displayToast} />
        </Modal>
        : ""} */}
    </div>

  )
}

export default PopularItems