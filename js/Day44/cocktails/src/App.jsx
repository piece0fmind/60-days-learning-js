import React from 'react';

import App from './App';



const App = () =>{
  return(
    <>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/products" element = {<Products/>}/>
      <Route path = "/about" element = {<About/>}/>

    </Routes>
    </>
  );
};

export default App;