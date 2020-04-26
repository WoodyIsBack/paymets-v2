import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentList from '../PaymentList/PaymentList';
import InputBar from '../InputBar/InputBar'

function App() {
  return (
    <div class="App">
      <h1>Payments</h1>
      <InputBar />
      <PaymentList />
    </div>  
  );
}

export default App;
