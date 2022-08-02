import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';

function App() {
  return (
   <>
  {/* <h1>Hi</h1> */}
  <GlobalStyle/>
  <Navbar/>
   <Hero/>
   </>
  );
}

export default App;
