// import axios from 'axios'
const axios = require('axios')

let haveException = false

let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:5001/brands',
    headers: {
        'Content-Type': 'application/json'
    },
    data : JSON.stringify({
        "brand": "Arcteryx"
    })
};


while (!haveException) {
    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}