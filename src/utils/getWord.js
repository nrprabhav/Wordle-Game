import axios from "axios";

const GetWord = async () => {

    //const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://wordle-answers-solutions.p.rapidapi.com/answers',
        headers: {
            'X-RapidAPI-Key': '9ba7d440b5msh5438551fa5d5c20p112825jsne7fb13cd489f',
            'X-RapidAPI-Host': 'wordle-answers-solutions.p.rapidapi.com'
        },
        transformResponse: [function (response) {
            return response.data
        }]
    };

    let solution = "";

    await axios.request(options)
    .then(function (response) {
        console.log(response.data[Math.floor(Math.random() * parseInt(response.data[0].num))].answer);
    }).catch(function (error) {
        console.error(error);
    });

    return(solution);
}

//GetWord();

export default GetWord;