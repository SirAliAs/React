import { Children, useState } from "react";
import Product from "./Product";
import Error from "./Error";
import Notification from "./Notification count Project";
import Form from "./Form validation";
import FormRef from "./Form Val Refactor";
import Users from "./Users";
import routes from "./Routes/Routes";
import { useRoutes } from "react-router-dom";



export default function App() {
  const allPrducts = [
    { id: 1, title: "Asus", image: "Asus.jpg", price: "220", Children },
    { id: 2, title: "HP", image: "Hp.jpg", price: "180", Children },
    { id: 3, title: "Mac", image: "Mac.jpg", price: "420", Children },
  ];


  let router = useRoutes(routes)
  return (
    // -------------> Product Card Project <-------------
    // -------------> Start <--------------

    //     <div className="flex flex-row space-x-1 justify-between mx-2 mt-2">
    //       <div>
    //         <Product {...allPrducts[0]} />
    //       </div>
    //       <div>
    //         <Product {...allPrducts[1]} />
    //       </div>
    //       <div>
    //         <Product {...allPrducts[2]} />
    //       </div>
    //     </div>
    //   );
    // }

    // -------------> End <--------------

    // -------------> Modal Error <-------------
    // -------------> Start <--------------
    // <div>
    //   <Error>
    //   <div className=' w-fit h-auto border shadow-xl relative mt-2 bg-white'>
    //   <a href="#">
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" absolute top-1 right-1 opacity-25 w-4 h-4">
    //         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    //     </svg>
    //    </a>
    // <div>
    //     <p className="Alert mt-10 m-5">Are you sure you want to delete this element?</p>
    // </div>
    // <ul className="Buttons w-full h-9  mt-10 text-center flex">
    //     <li className=' flex-auto  bg-red-400 text-white underline underline-offset-2 pt-1 '><a href="#">Yes</a></li>
    //     <li className=' flex-auto bg-slate-300 text-white underline underline-offset-2 pt-1'><a href="#">No</a></li>
    // </ul>
    // </div>
    //   </Error>
    // </div>
    // ----------> End <----------
    // -------------> Modal Error <-------------
    /////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////////
    // ---------------> Notification Count Project <---------------
    // ---------------> Start <---------------

    //     <div>
    //       <Notification></Notification>
    //     </div>
    // )}
    // ---------------> End <---------------
    /////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////////
    // ---------------> Form Validation Project <---------------
    // ---------------> Start <---------------

    // <div>
    //   <Form></Form>
    // </div>
    //   )}
    // ---------------> End <---------------
    /////////////////////////////////////////////////////////////////////////////////
    // ---------------> Form Validation Refactor Project (Real time FireBase data API) <---------------
    // ---------------> Start <---------------

//     <div>
//       <FormRef />
//     </div>
//   );
// }
// ---------------> End <---------------
    // ---------------> GET Users From API <---------------
    // ---------------> Start <---------------

    // <div>
    //   <Users />
    // </div>
//   );
// }
// ---------------> End <---------------

<div>
  {router}
</div>
);
}