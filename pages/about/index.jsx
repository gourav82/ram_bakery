import Image from "next/image";
import useCheckMobileScreen from "../../component/hooks/useCheckMobileScreen";

const About = () => {
    const {isMobile, isIpad } = useCheckMobileScreen();

    return (
        <>
            <div className="container--responsive about-container">
                <h1 className="fs--35 font--center color--error">About Phonik</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro repudiandae tenetur dolorem consequuntur, officiis cupiditate 
                    tempora labore sequi, voluptatem maiores atque! Vel ullam eos vitae temporibus repellat dolor nisi ab officiis, molestiae iure veritatis 
                    ad. Nulla veritatis porro suscipit recusandae, amet saepe laborum odit illum aperiam quod, sunt accusantium, fuga soluta eum. Quo quod
                     veniam fuga eligendi enim neque velit facilis, atque incidunt fugiat quasi quam ratione sapiente suscipit numquam magnam quaerat autem 
                     tempore debitis consectetur dolorum doloremque iure. Quasi error ullam dolore nobis eveniet. Ducimus sint a quaerat iusto ullam, quod 
                     eos incidunt corporis quisquam aliquam repellendus voluptatibus quibusdam nulla, aperiam beatae eaque laborum! Nulla cumque odit 
                     ab quaerat sit ratione praesentium amet similique, minus, ut qui illum dicta rerum explicabo alias. Deserunt perferendis fugit maiores 
                     aut voluptatem ullam optio sed beatae dolorem a amet, veniam nam eaque, totam repellendus. Dolore pariatur provident, eius porro delectus
                      facilis assumenda aliquid iure perferendis vitae vero, quod inventore dignissimos mollitia tempora iusto voluptatibus. Ipsa iusto velit 
                      voluptatem vitae similique nisi rem facere hic consequuntur neque expedita praesentium libero est cum veritatis molestias dolores,
                       reprehenderit odit blanditiis laudantium quod? Odit rerum autem tempore temporibus molestiae modi reprehenderit aliquam eaque, minus 
                       repudiandae unde quia magnam quaerat, dolores similique distinctio ad. Rerum sunt eligendi ab id odio repellendus amet tempora eveniet
                        quam, iusto quia enim. Nisi, repellendus. Nisi laudantium tenetur recusandae dicta.</span>

                        <h1 className="fs--35 font--center color--error mt--30 mb--30">About Phonik Production</h1>
                        <div className={`${isMobile || isIpad? "flex--direction-column font--center" : "flex flex--justify-content-between flex--align-items-center" }`}>
                            <Image src="/assets/image/mosquito.jpg" width={200} height={200} alt="phonik" className={`${isMobile || isIpad? "width--column-90 mb--20": "width--column-40"}`}/>
                            <span className={`${isMobile || isIpad? "width--column-90": "width--column-40"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta debitis ad autem tenetur? Cumque dicta doloremque iste culpa illo dolorum dolore, molestias fugit quaerat ullam labore natus accusantium? Nihil perferendis vel, ipsum aspernatur iusto odio, sint illum commodi repellendus iste at praesentium, temporibus doloremque suscipit voluptatibus eius harum sed?</span> 
                       </div>
                       <div className={`${isMobile || isIpad? "flex flex--direction-column-rev font--center" : "flex flex--justify-content-between flex--align-items-center" }`}>
                            <span className={`${isMobile || isIpad? "width--column-90 mb--100": "width--column-40"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta debitis ad autem tenetur? Cumque dicta doloremque iste culpa illo dolorum dolore, molestias fugit quaerat ullam labore natus accusantium? Nihil perferendis vel, ipsum aspernatur iusto odio, sint illum commodi repellendus iste at praesentium, temporibus doloremque suscipit voluptatibus eius harum sed?</span> 
                            <Image src="/assets/image/phonik6.jpg" width={200} height={200} alt="phonik" className={`${isMobile || isIpad? "width--column-90 mt--20 mb--20 block--auto": "width--column-40"}`}/>
                       </div>

            </div>
        </>
    );
}
export default About;