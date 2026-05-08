import { FaGithub , FaMicrosoft , FaApple , FaGoogle , FaAmazon } from "react-icons/fa";

function Partners(){

    const brands = [
        { name : "Github" , icon : <FaGithub/> } ,
        { name : "Microsoft" , icon : <FaMicrosoft/>} ,
        { name : "Apple" , icon : <FaApple/> } ,
        { name : "Google" , icon : <FaGoogle/> } ,
        { name : "Amazon" , icon : <FaAmazon/> }
    ]
    return(
        <section className="w-full bg-primary mt-10 text-white">
            <div className="container-custom flex flex-wrap items-center justify-evenly text-sm sm:text-lg md:text-xl">
                {brands.map((brand , index) => 
                   (
                     <div key={index} className="opacity-80">
                        {brand.icon} <span>{brand.name}</span>
                    </div>
                    )
                )}
            </div>
        </section>
    )
}

export default Partners;