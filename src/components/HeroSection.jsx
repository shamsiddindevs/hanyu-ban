import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Hanyuban sizning 
            <span className="text-red-700">
             {" "}kelajagingizni kafolatlaydi. </span> 
             </h1>
        <p className="text-center mt-10 text-lg text-neutral-500 max-w-4xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis facere doloribus amet, deserunt asperiores inventore officiis? Totam hic dicta dolore?</p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-red-700 to-red-950 mx-3 py-2 px-3 rounded-md">Start for free</a>
            <a href="#" className="py-2 px-3 border rounded-md ">Documentation</a>
        </div>
        <div className="flex mt-10 justify-center">
            <video loop muted autoPlay className="rounded-lg w-1/2 border border-red-800 shadow-lg shadow-red-800/50 mx-2 my-4 ">
                <source src={video1} type="video/mp4" />
                Your browser does not support  the video tag.
            </video>
            <video loop muted autoPlay className="rounded-lg w-1/2 border border-red-800 shadow-lg shadow-red-800/50 mx-2 my-4 ">
                <source src={video2} type="video/mp4" />
                Your browser does not support  the video tag.
            </video>
        </div>
    </div>
  )
}

export default HeroSection