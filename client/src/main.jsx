import React, { useContext } from "react";
import ReactDOM from "react-dom";
import {TransctionProvider} from "./context/transaction";

import App from "./App";

import "./index.css";

ReactDOM.render(

   <TransctionProvider> 
    <App />
   </TransctionProvider>,
   
    
  
  document.getElementById("root"),
);
