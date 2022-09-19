import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Subscribe from './components/Subscribe';


function App() {
  return (
    <div className="App">
       <Header/>
       <div className='f-heading'>
        <h1>Features</h1>
        <p>buyerda ayrimbir qismlar bor</p>
       </div>
       <Features/>
       <Services/>
       <Subscribe/>
    </div>
  );
}

export default App;