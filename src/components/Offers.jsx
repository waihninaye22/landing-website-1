import { LuClock3 , LuUserRoundCheck , LuChartColumn } from "react-icons/lu";

function Offers(){
    return (
        <section>
            <div className="container-custom">
                <div className="text-center">
                    <span className="text-2xl font-bold text-primary ">Benefits</span> <span className="text-2xl font-bold">from our online learning</span>
                </div>
                <div className="flex flex-col w-[60%] m-auto py-9">
                    <div className="py-3">
                        <div className="text-primary text-2xl font-extrabold py-2"><LuClock3/></div>
                        <h1 className="text-lg font-bold">Flexibility</h1>
                        <p className="text-text-light">Learning at your own pace, anytime and anywhere, without disrupting your schedule.</p>
                    </div>
                    <div className="py-3">
                        <div className="text-primary text-2xl font-extrabold py-2"><LuUserRoundCheck/></div>
                        <h1 className="text-lg font-bold">Expert Instructors</h1>
                        <p className="text-text-light">Gain knowledge from industry professionals with real-world experience.</p>
                    </div>
                    <div className="py-3">
                        <div className="text-primary text-2xl font-extrabold py-2"><LuChartColumn/></div>
                        <h1 className="text-lg font-bold">Career Growth</h1>
                        <p className="text-text-light">Develop in-demand skills, earn certifications, and advance your career with confidence.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers;