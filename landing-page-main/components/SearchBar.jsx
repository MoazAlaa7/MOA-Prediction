"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './SearchBar.module.css';

const suggestionsList = [
  "section-one",
  "section-two",
  "section-three",
  "section-four",
  "section-five",
  "section-six",
  // Add other sections if needed
];

const suggestionRoutes = {
  "/services/useCases/anti-inflammatory": ["section-one", "section-four"],
  "/services/useCases/another-route": ["section-two", "section-five"],
  "/services/useCases/yet-another-route": ["section-three", "section-six"],
  // Add other mappings if needed
};

const getRouteForSuggestion = (suggestion) => {
  for (const route in suggestionRoutes) {
    if (suggestionRoutes[route].includes(suggestion)) {
      return route;
    }
  }
  return null;
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filteredSuggestions = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const route = getRouteForSuggestion(suggestion);
    if (route) {
      router.push(route);
    }
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className={styles.searchInput}
          placeholder="Search by Zip Code..."
        />
        <button className={styles.browseButton}>Browse List</button>
      </div>
      {suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={styles.suggestionItem}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
