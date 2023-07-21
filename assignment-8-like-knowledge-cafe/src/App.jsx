import React from 'react';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header></Header>
      <Container></Container>
    </div>
  );
};

export default App;