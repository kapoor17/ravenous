import { useState } from 'react';
import BuisnessList from '../BuisnessList/BuisnessList';
import SearchBar from '../SearchBar/SearchBar';
import { Yelp } from '../../util/Yelp';

import './App.css';

const App = () => {

  const [buisnesses, setBuisnesses] = useState([])

  const searchYelp = (term, location, sortBy) => {
      Yelp.search(term, location, sortBy)
          .then(buisnesses => {
            setBuisnesses(buisnesses);
          })
  }

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BuisnessList buisnesses={buisnesses}/>
    </div>
  );
}

export default App;
