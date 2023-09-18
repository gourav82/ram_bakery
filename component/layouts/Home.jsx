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
import { toast,ToastContainer } from 'react-toastify'

const Home = () => {
  const displayToast = () => {
    toast.success("Product Added in cart Successfully" );
  };
  return (
    <>
    <MainBanner/>
     <PopularItems displayToast={displayToast}/>
    <OfferSlider/>
    <Allcategory/>
    <LatestItems displayToast={displayToast}/>
   
    <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default Home