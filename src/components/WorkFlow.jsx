import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg"
const WorkFlow = () => {
  return (
    <div className="mt-20">
        <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">Accelerate your <span className="text-red-700">{" "}coding workflow</span></h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
            <img src={codeImg} alt="Code" />
            </div>
            
        </div>
    </div>
  )
}

export default WorkFlow