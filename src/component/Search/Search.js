import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AppContext } from "../../App";
import "./Search.css"; // Ensure to create appropriate styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';


export default function Search() {
  const { products, setSearchResults } = useContext(AppContext);
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setSearchResults(results);
    navigate("/search-results"); // Navigate to search results page
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'ru-RU';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        setQuery(speechResult);
        const results = products.filter((product) =>
          product.name.toLowerCase().includes(speechResult)
        );
        setSearchResults(results);
        setIsListening(false);
        navigate("/search-results"); // Navigate to search results page
      };

      recognition.onerror = (event) => {
        console.error('Error occurred in recognition: ' + event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert('Ваш браузер не поддерживает голосовой поиск.');
    }
  };

  return (
    <div className="Search">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
      />
       <button type="button" onClick={handleVoiceInput}>
      {isListening ? <FontAwesomeIcon icon={faMicrophoneSlash} /> : <FontAwesomeIcon icon={faMicrophone} />}
    </button>
     
    </div>
  );
}
