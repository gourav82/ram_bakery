import React, { useEffect, useState } from 'react'
import Card from './Card';
import Modal from '../core/Modal';
import ModalCard from './ModalCard';
import letestItemJson from "../../json/letestItemJson"
import Tab from '../Tab';

const LatestItems = ({ displayToast }) => {
    const [modal, setModal] = useState(false);
    const [items, setItems] = useState({});
    const [activeTab, setAciveTab] = useState(letestItemJson[0].category);

    const handleModal = (item) => {
        setModal(!modal);
        setItems(item);
    }
    const handleTab = (category) => {
        setAciveTab(category);
    }


    return (
        <>
            <div className="container--responsive font--center">
                <Tab handleTab={handleTab} activeTab={activeTab} />
                <div className="flex flex--wrap mt--30">
                    {letestItemJson?.map((data, index) => {
                        return (
                            <>
                                {(data.category === activeTab) && data.product.map((item, index) => {
                                    return (
                                        <React.Fragment key={`peoduct-${index}`} >
                                            <Card item={item} latest={true} handleModal={handleModal} />
                                        </React.Fragment>
                                    )
                                })}
                            </>
                        )
                    })}
                </div>
                {/* <div className="block--auto mb--30 mt--30">
           <button className='width--column-two-10 bg--error pd--10 color--white fs--25 bg--radius'>See More</button>
           </div> */}
            </div>
            {modal ?
                <Modal show={modal} position="left" className={"width--column-three-5"} isDrawer={false} hideClose={true} close={() => setModal(false)}>
                    <ModalCard items={items} handleModal={handleModal} displayToast={displayToast} />
                </Modal>
                : ""}
        </>
    )
}

export default LatestItems