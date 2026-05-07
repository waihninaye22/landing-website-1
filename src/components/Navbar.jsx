  

function Navbar (){
    return (
        <nav className="w-full border-b-2 border-be-violet-100 bg-background">
            <div className="container-custom flex items-center justify-between">
                <div className="text-4xl tracking-tight font-bold">
                    LOOO
                </div>

                <div className="flex gap-6">
                    <a href="#" className="nav-link border-b-2 border-primary">Home</a>
                    <a href="#" className="nav-link ">Teachers</a>
                    <a href="#" className="nav-link ">Offers</a>
                    <a href="#" className="nav-link ">Contact</a>
                </div>
                    
                <div className="flex gap-3">
                    <button className="secondary-btn">Sign in</button>
                    <button className="primary-btn">Free Trial</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;