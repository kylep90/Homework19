import React from 'react';
// import logo from './logo.svg';
// import 'App.css';
import Header from "./components/Header"
import SearchBox from './components/SearchBox';
import DataArea from './components/DataArea';

function App() {
  return (
    <div className="App">
     <Header />
     <SearchBox />
     <DataArea />
    </div>
  );
}

export default App;
