import useCheckMobileScreen from "../../component/hooks/useCheckMobileScreen";

const About = () => {
    const {isMobile, isIpad } = useCheckMobileScreen();

    return (
        <>
            <div className="container--responsive about-container mt--140 ">
                <h1 className="fs--35 font--center color--error mb--30">About Ram Bakery Machines</h1>
                <span>Ram Bakery Machine And Engineering is a leading provider of Sinmag bakery equipment in India, specializing in sales and service to support the baking industry`s needs. As an authorized distributor of Sinmag products, we offer a comprehensive range of high-quality bakery machinery tailored to the Indian market.

Our partnership with Sinmag enables us to deliver cutting-edge solutions to bakeries and foodservice establishments across India. Sinmag is globally recognized for its innovative and reliable bakery machines, including dough mixers, dough sheeters, ovens, proofers, bread slicers, and more. These products are designed to meet the diverse requirements of professional bakers, ensuring efficiency, consistency, and superior quality in bakery operations.

At Ram Bakery Machine And Engineering, we are committed to providing exceptional customer service alongside premium equipment. Our experienced team offers expert advice, timely installation, comprehensive training, and ongoing support to optimize the performance and longevity of Sinmag bakery machines in Indian bakeries.

Whether you are setting up a new bakery or upgrading your existing equipment, we are dedicated to helping you find the right Sinmag solution for your specific needs. Contact us today to explore how Ram Bakery Machine And Engineering can elevate your bakery business with Sinmag`s renowned quality and innovation.</span>

                        <h1 className="fs--35 font--center color--error mt--30 mb--30">About Ram Bakery Machines Products</h1>
                        <div className={`${isMobile || isIpad? "flex--direction-column font--center" : "flex flex--justify-content-between flex--align-items-center" }`}>
                            <img src="/assets/image/sm-60l.jpg" width={200} height={200} alt="Ram Bakery Machines" className={`${isMobile || isIpad? "width--column-90 mb--20": "width--column-40"}`}/>
                            <span className={`${isMobile || isIpad? "width--column-90": "width--column-40"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta debitis ad autem tenetur? Cumque dicta doloremque iste culpa illo dolorum dolore, molestias fugit quaerat ullam labore natus accusantium? Nihil perferendis vel, ipsum aspernatur iusto odio, sint illum commodi repellendus iste at praesentium, temporibus doloremque suscipit voluptatibus eius harum sed?</span> 
                       </div>
                       <div className={`${isMobile || isIpad? "flex flex--direction-column-rev font--center" : "flex flex--justify-content-between flex--align-items-center" }`}>
                            <span className={`${isMobile || isIpad? "width--column-90 mb--100": "width--column-40"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta debitis ad autem tenetur? Cumque dicta doloremque iste culpa illo dolorum dolore, molestias fugit quaerat ullam labore natus accusantium? Nihil perferendis vel, ipsum aspernatur iusto odio, sint illum commodi repellendus iste at praesentium, temporibus doloremque suscipit voluptatibus eius harum sed?</span> 
                            <img src="/assets/image/sm-201.jpg" width={200} height={200} alt="Ram Bakery Machines" className={`${isMobile || isIpad? "width--column-90 mt--20 mb--20 block--auto": "width--column-40"}`}/>
                       </div>

            </div>
        </>
    );
}
export default About;