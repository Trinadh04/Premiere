// import { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import loginImage from "../assets/login.webp";
// import { loginUser } from "../redux/slice/authslice";
// import { useDispatch, useSelector } from "react-redux";
// import { mergeCart } from "../redux/slice/cartSlice"; // ✅ Adjust the path if needed


// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user,guestId ,loading} = useSelector((state) => state.auth);
//   const {cart} =  useSelector((state) => state.cart);

//   // Get redirect parameter and check if its checkout or some thing

//   const redirect = new URLSearchParams(location.search).get("redirect") || "/";
//   const ischeckoutRedirect = redirect.includes(" checkout");

//   useEffect(() =>{
//     if (user) {
//       if (cart?.products.length > 0 && guestId){
//         dispatch(mergeCart({guestId,user})).then(() => {
//           navigate(ischeckoutRedirect ? "/checkout" : "/");
//         })
//       } else{
//         navigate(ischeckoutRedirect ? "/checkout" : "/");
//       }
//     }
//   }, [user,guestId,cart,navigate,ischeckoutRedirect,dispatch]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser({ email, password }));
//   };

//   return (
//     <div className="flex">
//       <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm" // ✅ UPDATED from mx-w-md to max-w-md
//         >
//           <div className="flex justify-center mb-6">
//             <h2 className="text-xl font-medium">Premiere</h2>
//           </div>
//           <h2 className="text-2xl font-bold text-center mb-6">Hey there!</h2> {/* ✅ UPDATED className text2xl → text-2xl */}
//           <p className="text-center mb-6">
//             Enter your username and password to login
//           </p>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-semibold mb-2">
//               Email
//             </label> {/* ✅ UPDATED: added htmlFor */}
//             <input
//               id="email" // ✅ UPDATED: added id for accessibility
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" // ✅ OPTIONAL: better focus style
//               placeholder="Enter your email address"
//               required // ✅ UPDATED: added required
//               autoComplete="email" // ✅ UPDATED
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-semibold mb-2">
//               Password
//             </label> {/* ✅ UPDATED: added htmlFor */}
//             <input
//               id="password" // ✅ UPDATED: added id
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               required // ✅ UPDATED
//               autoComplete="current-password" // ✅ UPDATED
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
//           >
//             { loading ? "Loading...":"Sign In"}
//           </button>
//           <p className="mt-6 text-center text-sm">
//             Don't have an account?{" "}
//             <Link to={`/register?redirect = ${encodeURIComponent(redirect)}`} className="text-blue-500">
//               Register
//             </Link>
//           </p>
//         </form>
//       </div>

//       <div className="hidden md:block w-1/2 bg-gray-700">
//         <div className="h-full flex flex-col justify-center items-center">
//           <img
//             src={loginImage}
//             alt="Person logging into their Premiere account" // ✅ UPDATED: more descriptive alt
//             className="h-[550px] w-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../assets/login.webp";
import { loginUser } from "../redux/slice/authslice";
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/slice/cartSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId, loading } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const ischeckoutRedirect = redirect.includes("checkout");

  useEffect(() => {
    if (user) {
      if (cart?.products.length > 0 && guestId) {
        dispatch(mergeCart({ guestId, user })).then(() => {
          navigate(ischeckoutRedirect ? "/checkout" : "/");
        });
      } else {
        navigate(ischeckoutRedirect ? "/checkout" : "/");
      }
    }
  }, [user, guestId, cart, navigate, ischeckoutRedirect, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Form Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border"
        >
          <div className="flex justify-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Premiere</h2>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Enter your credentials to access your account.
          </p>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to={`/register?redirect=${encodeURIComponent(redirect)}`}
              className="text-blue-600 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Image Side */}
      <div className="hidden md:flex w-1/2 bg-gray-100">
        <img
          src={loginImage}
          alt="User signing into Premiere"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Login;
