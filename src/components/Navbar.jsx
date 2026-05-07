import { HiMenu , HiX} from "react-icons/hi";
import { useState } from "react";
// import Hero from "./Hero";

function Navbar (){

    const [isOpen , setIsOpen] = useState(false);

    const btnClick = () =>{
            setIsOpen(!isOpen);
            
        }

    return (

        <nav className="w-full border-b-1 border-be-violet-100 bg-background">
            <div className="container-custom flex items-center justify-between">
                <div className="text-4xl tracking-tight font-bold">
                    LOOO
                </div>

                <div className="hidden md:flex gap-6">
                    <a href="#" className="nav-link border-b-2 border-primary">Home</a>
                    <a href="#" className="nav-link ">Teachers</a>
                    <a href="#" className="nav-link ">Offers</a>
                    <a href="#" className="nav-link ">Contact</a>
                </div>
                    
                <div className="flex gap-3">
                    <button className="secondary-btn">Sign in</button>
                    <button className="primary-btn">Free Trial</button>
                </div>

                <div className="text-primary text-2xl md:hidden" onClick={btnClick}>
                    <HiMenu/>
                </div>

                <div className={`fixed
                                flex 
                                flex-col  
                                absolute 
                                top-0 
                                right-0 
                                text-center
                                h-[100%] 
                                w-8/12
                                bg-background
                                  text-black 
                                  transition-all 
                                  duration-300
                                  ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

                    <button className="absolute top-0 right-0 bg-primary px-4 py-4 text-white text-lg rounded-bl-4xl rounded-tl-4xl mt-1.5" 
                            onClick={()=>setIsOpen(false)}>
                                <HiX/>
                    </button>

                    <a href="#" className=" bg-amber-200 py-5 text-primary text-base">Home</a>
                    <a href="#" className="  py-5 text-primary text-base">Teachers</a>
                    <a href="#" className="  py-5 text-primary text-base">Offers</a>
                    <a href="#" className="  py-5 text-primary text-base">Contact</a>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;