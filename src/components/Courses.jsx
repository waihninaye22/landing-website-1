import course1 from "../assets/course1.jpeg";
import course2 from "../assets/course2.jpeg";
import course3 from "../assets/course3.jpeg";

function Courses (){

    const courses = [
        {
            id: 1,
            image: course1,
            category: "Web Design",
            title: "Web Design & Development",
            courses: 4,
            students: "80+",
            price: 203,
            instructor: "Jhon Doe",
        },
        {
            id: 2,
            image: course2,
            category: "Web Design",
            title: "Python for Data Science",
            courses: 4,
            students: "120+",
            price: 203,
            instructor: "Mark Sen",
        },
        {
            id: 3,
            image: course3,
            category: "Web Design",
            title: "Wireframing & Prototyping",
            courses: 4,
            students: "120+",
            price: 203,
            instructor: "Sara Ben",
        }
    ]

    return(
        <section className="bg-primary ">
            <div className="container-custom py-9">
                <div className="w-[60%] m-auto text-center text-white">
                    <h1 className="font-extrabold text-2xl py-3">Our Popular Courses</h1>
                    <p>Develop your skills in a fresh unique way by exploring hands-on experiencs, creative 
                        problem-solving, and real-world applications. Embrace new techniques to unlock 
                        hidden talents and expand your expertise.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-8 py-9">
                    {
                        courses.map((course) => (
                            <div key={course.id} className="
                                                             bg-white
                                                            rounded-3xl
                                                            overflow-hidden
                                                            hover:-translate-y-2
                                                            hover:shadow-2xl
                                                            transition-all
                                                            duration-300
                                                        ">
                                <img src={course.image} alt={course.title} className="w-full h-56 object-cover"/>
                                <div className="p-5">

                                    <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                                    {course.category}
                                    </span>

                                    <h2 className="text-3xl font-bold mt-4">
                                    {course.title}
                                    </h2>

                                    <div className="flex gap-4 text-gray-500 mt-3">
                                    <p>{course.courses} Courses</p>
                                    <p>{course.students} Students</p>
                                    </div>

                                    <div className="flex items-center justify-between mt-6 border-t pt-4">

                                    <h3 className="text-3xl font-bold">
                                        ${course.price}
                                    </h3>

                                    <p>{course.instructor}</p>

                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Courses;