import axios from "axios";

const API = {
    IsDictionaryWord: function(word) {
        //console.log("IS DICTIONARY WORD?" + word)
        return(axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`));
    }
};

export default API