import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsSuitHeart, BsX,BsStar ,BsStarFill} from "react-icons/bs";
import SmallCart from './SmallCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';


const ModalCard = ({handleModal,items,displayToast}) => {
    const review = [0, 1, 2, 3, 4];

    const {isMobile, isIpad } = useCheckMobileScreen();


    useEffect(()=>{
        console.log(items);
            })
            const dispatch = useDispatch();
        
            const handleAddToCart =(items)=>{
               dispatch(addToCart(items));
               handleModal(false);
               displayToast();
            }
  return (
    <>   
    <div className="overlay-modal"></div>
     <div className="modal font--right pl--10 pr--10 pb--5">
        <BsX onClick={handleModal} className='fs--22 color--error'/>
        <div className={`modal--product flex ${isMobile || isIpad? "flex--direction-column":"flex--justify-content-between"}`}>
            <Image src={items.image} alt="" width="150" height="100" className={`bg--radius mb--10 mr--10 ${isMobile || isIpad? "width--column-90":"width--column-40"}`}/>
            <div className={`${isMobile || isIpad? "width--column-one":"width--column-60"}`}>
                <span className='flex flex--justify-content-between flex--align-items-center font--left mt--10'>
                    <span className='color--error fs--18 font--bold'>{items?.name}</span>
                    <BsSuitHeart className='mt--20 fs--25'/>
                </span>
                <span className='flex flex--justify-content-between flex--align-items-center mb--10'>
                <ul className='flex flex--align-items-center flex--justify-content-center mt--15'>
                    {
                        review.map((pro, index) => {
                            if (index <= items?.avg_review)
                                return (
                                    <li key={`lin-${index}`} className='star-active'><BsStarFill /></li>
                                )
                            else {
                                return (
                                    <li key={`lin-${index}`}><BsStar /></li>
                                )
                            }
                        })
                    }
                    </ul>
                <span>A Product By Sinmag</span>
                </span>
            </div>
        </div>
         <div className="modal--description font--left">
        <p className='mb--5 fs--18 font--bold color--error'>Description</p>
        <span className='flex flex--justify-content-between flex--align-items-center mb--5'>
        <Image src={items.details_image} width={1000} height={500} alt=''/>
        </span>
        <p className='mb--5 fs--18 font--bold color--error'>Features</p>
        <span className='flex flex--justify-content-between flex--align-items-center'>{items.Features}</span>

        <p className='mb--5 mt--5 fs--18 font--bold color--error'>Addons</p>
        <div className='flex'>
         <SmallCart items={items}/>
        </div>
        </div>
        <div className="font--left mt--10">
            <button className='bg--error color--white fs--18 width--column-one bg--radius pt--5 pb--5 font--bold' onClick={()=>handleAddToCart(items)}>Add To Cart</button>
        </div>
     </div>

     </>

    )
}

export default ModalCard


const smallCardDetails =[
    {
        img:"/assets/image/coke.png",
        name:"Coke",
        price:"₹100"

    },
    {
        img:"/assets/image/water.png",
        name:"Water",
        price:"₹100"

    },
    {
        img:"/assets/image/coke.png",
        name:"Coke",
        price:"₹100"

    }
]