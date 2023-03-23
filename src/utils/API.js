import axios from "axios";

const API = {
    IsDictionaryWord: function(word) {
        return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    }
};

export default API