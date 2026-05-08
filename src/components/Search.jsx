

function Search (){
    return(
        <section className="w-full py-8">
            <div className="container-custom  text-center ">
                <h1 className="text-2xl font-medium">Search Courses</h1>
                <div className="py-4 flex flex-col md:flex-row justify-center items-center">
                    <input type="text" placeholder="Search for over 50+ courses" 
                    className="rounded-button w-52 bg-amber-200 text-sm py-2 px-4 lg:text-base lg:w-100" />
                    <button className="primary-btn ml-3 mt-3 md:mt-0">Search</button>
                </div>
            </div>
        </section>
    )
}

export default Search ;