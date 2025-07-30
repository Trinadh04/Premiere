



import MensImg from "../../assets/Mens.jpg";
import WomenImg from "../../assets/Women.jpg";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
    return (
        <section className="py-16 px-4 lg:px-0">
            <div className="container mx-auto flex flex-col md:flex-row gap-7">
                {/* womens collection */}
                <div className="relative flex-1">
                    <img src={WomenImg} alt="Women collection" className="w-full h-[700px] object-cover"/>
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 py-4 px-6">
                        <h2 className="text-1xl font-bold text-gray-500 mb-3">Women`s Collection</h2>
                        <Link to="/collections/all?gender =Men" className="text-blue-500 underline">Shop Now</Link>
                    </div>
                </div>

                {/* mens collection */}
                <div className="relative flex-1">
                    <img src={MensImg} alt="Men collection" className="w-full h-[700px] object-cover"/>
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 py-4 px-6">
                        <h2 className="text-1xl font-bold text-gray-500 mb-3">Men`s Collection</h2>
                        <Link to="/collections/all?gender =Women" className="text-blue-500 underline">Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GenderCollectionSection;
