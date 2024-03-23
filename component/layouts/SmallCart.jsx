import React from 'react'

const SmallCart = ({items}) => {
  return (
    <div className="modal--smallCart bg--shadow bg--radius font--center mr--20">
        <div className="overlay"></div>
        <div className=" flex flex--justify-content-center flex--align-items-end">
            <img src={items.relate_image} alt="" width={120} height={120} className='photo bg--radius position--relative'/>
             <span className='position--absolute text fs--15 font--bold'>
                <p className='color--black'>{items.relate_model}</p>
             </span>
             </div>
            
    </div>
    )
}

export default SmallCart

