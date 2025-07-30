import { Link } from "react-router-dom"
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall} from "react-icons/fi";

const Footer= ()=>{
    return(
        <footer className=" border -t py-12">

       <div className="container mx-auto grid grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
            <h3 className="text-lg text-gray-800 mb-4">NewsLetter</h3>
            <p className="text-gray-500 mb-4">Be the first hear about new products,exclusive events, and online offers</p>
            <p className="font-medium text-sm text-gray-600 mb-6"> Sign Up and get 10% of on your first order</p>
             {/* news letter form */}
             <form className="flex">
                <input type="email" placeholder="enter your email" className="p-3w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required/> <br/>
                <button type="Submit" className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"> Subscribe</button>
             </form>
        </div>
        {/* shop links */}
        <div>
            <h3 className="text-lg text-gray-600 mb-4"> Shop</h3>
            <ul className="spacce-y-2 text-gray-600">
                <li>
            <Link to="/collections/all?gender =Men" className="hover:text-gray-500 transitin-colors">Mens Wear</Link>

                </li>
                 <li>
            <Link to="/collections/all?gender =Women" className="hover:text-gray-500 transitin-colors"> Womens Wear</Link>

                </li>
                 <li>
            <Link to="/collections/all?gender =Top Wear" className="hover:text-gray-500 transitin-colors">Top Wear</Link>

                </li>
                 <li>
            <Link to="/collections/all?gender =Bottop Wear" className="hover:text-gray-500 transitin-colors">Wear Wear</Link>

                </li>
            </ul>
        </div>
        {/* support linkd */}
        <div>
            <h3 className="text-lg text-gray-600 mb-4"> Support</h3>
            <ul className="spacce-y-2 text-gray-600">
                <li>
            <Link to="9573680488" className="hover:text-gray-500 transitin-colors">Contact Us</Link>

                </li>
                 <li>
            <Link to="#" className="hover:text-gray-500 transitin-colors"> About</Link>

                </li>
                 <li>
            <Link to="#" className="hover:text-gray-500 transitin-colors">FAQs</Link>

                </li>
                 <li>
            <Link to="#" className="hover:text-gray-500 transitin-colors">Features</Link>

                </li>
            </ul>
        </div>
         {/* follow us */}
        <div>
            <h3 className="text-lg text-gray-600 mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4 mb-6">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferer" className="hover:text-gray-300"> 
                <TbBrandMeta className="h-5 w-5"/>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferer" className="hover:text-gray-300"> 
                <IoLogoInstagram className="h-5 w-5"/>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferer" className="hover:text-gray-300"> 
                <RiTwitterXLine className="h-5 w-5"/>
                </a>

            </div>
            <p className="text-gray-500"> Call Us</p>
            <p>  <FiPhoneCall className=" inline-block mr-2"/>9573680488</p>
        </div>
        <div  className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm tracking-tighter text-center">
  © 2025, CompileTab. All Rights Reserved.
</p>

        </div>

       </div>




        </footer>
    )
      
    
}
export default Footer;