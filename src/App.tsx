import React from 'react';
import Container from './components/UI/Container/Container';
import Navbar from './components/UI/Navbar/Navbar';
import Home from './components/Web/Home/Home';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Container>
      <Home/>
     </Container>
    </div>
  );
}

export default App;
