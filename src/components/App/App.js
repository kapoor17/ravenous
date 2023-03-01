import './App.css';
import BuisnessList from '../BuisnessList/BuisnessList';
import SearchBar from '../SearchBar/SearchBar';

const buisnessDetails = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

const buisnesses = [buisnessDetails, buisnessDetails, buisnessDetails, buisnessDetails, buisnessDetails, buisnessDetails]

const App = () => {

  const searchYelp = (term, location, sortBy) => {
      console.log(`Searching yelp with ${term} in ${location}, ${sortBy}`);
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
