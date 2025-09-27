import React from 'react'
import About from './pages/About'
import ClubsSection from './pages/ClubsSection'
import Header from './components/Header';

function App() {
  return (
    <div className='bg-white'>
      <Header/>
      <About />
      <ClubsSection />
    </div>
  );
}

export default App
