import {useState} from 'react';
import "./SearchBar.css"

let sortByOptions = {
    "Best Match" : "best_match",
    "Highest Rated" : "rating",
    "Most Reviewed" : "review_count" 
}

const SearchBar = ({searchYelp}) => {
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match");

    const handleTermChanges = ({target}) => {
        setTerm(target.value)
        return;
    }

    const handleLocationChanges = ({target}) => {
        setLocation(target.value)
        return;
    }

    const handleSortByChanges = (sortByOptionValue) => {
        setSortBy(sortByOptionValue);
        return;
    }

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li className={getSortByClass(sortByOptionValue)} 
                    key={sortByOptionValue}
                    onClick={() => handleSortByChanges(sortByOptionValue)}
                >
                    {sortByOption}
                </li>
            )
        })
    }

    const getSortByClass = (sortByOption) => {
        if(sortByOption === sortBy) return "active";
        return ""
    }

    const handleSearch = () => {
        searchYelp(term, location, sortBy)
    }

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses or Cuisine" onChange={handleTermChanges} value={term}/> 
                <input placeholder="Where?" onChange={handleLocationChanges} value={location}/>
            </div>
            <div className="SearchBar-submit" onClick={handleSearch}>
                <a>Search</a>
            </div>
        </div>
    );
};

export default SearchBar;