import React, { useEffect, useState } from 'react'
import Allcategory from './Allcategory'
import OfferSlider from './OfferSlider'
import PopularItems from './PopularItems'
import Modal from './ModalCard'
import LatestItems from './LatestItems'
import MainBanner from './MainBanner'
import FooterMobile from './footer/FooterMobile'
import ModalCard from './ModalCard'
import { useSelector } from 'react-redux'

const Home = () => {
  const [modal, setModal] = useState(false);
  const [item,setItem] = useState({});

  const handleModal =(item)=>{
    setModal(!modal);
    setItem(item);
}
  return (
    <div className={`${modal? "overlay-modal home":""}`}>
    <MainBanner/>
     <PopularItems handleModal={handleModal}/>
    <OfferSlider/>
    <Allcategory/>
    <LatestItems/>
    {modal ? <ModalCard handleModal={handleModal} item={item} />:""}

    </div>
  )
}

export default Home