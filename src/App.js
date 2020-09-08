import React, {useState} from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Data from './components/Data';




function App() {

  const [searchValue, setSearchValue] = useState("")


  return (
    <div className="App">
     <Header />
     <SearchBox setSearchValue={setSearchValue} />
     <Data searchValue={searchValue}/>

    </div>
  );
}

export default App;
