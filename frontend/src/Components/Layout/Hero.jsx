import wearImg from"../../assets/wear.jpeg";
import { Link } from "react-router-dom";

const Hero = ()=>{
    return(
        <section className="relative">
            <img src={wearImg} alt="rabbit" className="w-full h--[500px] md:h-[600px] lg:h[750px] object-cover"/>
        
        <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">

        <div className="text-center text-white p-6">

            <h1 className=" text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-4"> Vacation <br/> Ready</h1>
        
           <p className=" text-sm tracking-tighter md:text-lg mb-6"> Explore our vacation-ready for your outfits with fast all over in India shipping</p>        
        <Link to="/collections/all?gender=Women"  className="text-black-gray-500 underline"> Shopnow</Link>
        </div>

        </div>
        
        
        </section>


    )
}
export default Hero