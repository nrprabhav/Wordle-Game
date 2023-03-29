import axios from "axios";

// The function calls the dictionary API with the guess to see if it is a dictionary word
const API = {
    IsDictionaryWord: function(word) {
        return(axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`));
    }
};

export default API