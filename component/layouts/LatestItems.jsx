import React, { useEffect, useState } from 'react'
import Card from './Card';
import { latestProductAPI } from '../../services/Product';

const LatestItems = () => {
const [latestpro, setLatestPro] = useState();

useEffect(()=>{
    getLatestPro();
},[])

const getLatestPro=()=>{
    latestProductAPI().then((result) => {
        setLatestPro(result);
        console.log(result);
    }).catch((err) => {
        
    });
}

    return (
        <div className="container--responsive font--center">
            <span className='fs--25 font--bold'>Latest Items</span>
            <div className="flex flex--wrap mt--30">
            {latestpro?.products?.map((item,index)=>{
                return(
               <React.Fragment key={`peoduct-${index}`} >
                    <Card item={item} latest={true}/>
                </React.Fragment>
                )
            })}
            </div>
           <div className="block--auto mb--30 mt--30">
           <button className='width--column-two-10 bg--error pd--10 color--white fs--25 bg--radius'>See More</button>
           </div>
        </div>
    )
}

export default LatestItems