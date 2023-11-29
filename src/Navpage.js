import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateItem from "./CreateItem";
import Details from "./Details";

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/" element={<Details />} />
       
        <Route path="/CreateItem" element={<CreateItem />} />
      <Route path="/Details" element={<Details />} />
         
          
    
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;