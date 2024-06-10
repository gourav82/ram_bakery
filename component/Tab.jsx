import React, { useState } from 'react'
import letestItemJson from "../json/letestItemJson"



const Tab = ({handleTab, activeTab}) => {

  return (
    <div>
  <ul className='tab bg--error'>
    {letestItemJson.map((catName, index)=>{
      return(
        <React.Fragment key={catName.category}>
        <li className={`color--white ${activeTab === catName.category? "active":""}`} onClick={()=>handleTab(catName.category)}>{catName.category}</li>
        </React.Fragment>
      )
    })}
</ul>

    </div>
  )
}

export default Tab