import React from 'react';
// import logo from './logo.svg';
// import 'App.css';
import Header from "./components/Header"
import SearchBox from './components/SearchBox';
import DataArea from './components/DataArea';
import DataBody from './components/DataBody'

function App() {
  return (
    <div className="App">
     <Header />
     <SearchBox />
     <DataArea />
     <DataBody />
    </div>
  );
}

export default App;
