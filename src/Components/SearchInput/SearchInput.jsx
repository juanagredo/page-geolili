import { useState } from "react";
import "./SearchInput.css";

export function SearchInput({ navigateToModal }) {
  const suggestions = [
    "Cardiología",
    "Cuidados Paliativos Adultos",
    "Dermatología",
    "Endocrinología",
    "Gastroenterología",
    "Geriatría",
    "Hemato-oncología",
    "Hematología",
    "Hepatología",
    "Infectología",
    "Medicina física y rehabilitación",
    "Medicina interna",
    "Ortopedia",
  ];

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    navigateToModal();
  };

  return (
    <div>
      <input className="search-input"
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={handleInputChange}
      />
      {query && (
        <ul className="suggestions-list">
          {suggestions
            .filter((suggestion) =>
              suggestion.toLowerCase().includes(query.toLowerCase())
            )
            .map((filteredSuggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(filteredSuggestion)}
              >
                {filteredSuggestion}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

