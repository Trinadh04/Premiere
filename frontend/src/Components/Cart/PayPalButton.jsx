// import {  PayPalScriptProvider,PayPalButtons } from "@paypal/react-paypal-js";
 
// const PayPalButton = ({
//  amount,onSuccess,onError
// }) => {
//   return (
//     <PayPalScriptProvider
//       options={{
//         "client-id": "AdzO0kF1o4O1R1pS8QcuoTN9QmbnKoUUsyRk3Y9IzpHg6ZsYJvdRNcygZygUJziQVRl_yHPC3dHjCmjY"
//       }}
//     >
//       <PayPalButtons
//         style={{ layout: "vertical" }}
//         createOrder={(data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: amount,
//                 },
//               },
//             ],
//           });
//         }}
//         onApprove={(data, actions) => {
//           return actions.order.capture().then(onSuccess);
//         }}
//         onError={onError}
//       />
//     </PayPalScriptProvider>
//   );
// };

// export default PayPalButton;



import React from "react";
const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalButton
      style={{ layout: "vertical" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: { value:parseFloat(amount).toFixed(2)  }
          }]
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then(onSuccess);
      }}
      onError={onError}
    />
  );
};

export default PayPalButton;
