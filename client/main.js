
const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://montanaflynn-fifa-world-cup.p.rapidapi.com/teams",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"montanaflynn-fifa-world-cup.p.rapidapi.com",
    "x-rapidapi-key":"9071535a0cmshc30efcc2c941dc0p1c36cdjsn50cff866695a",
    "accepts":"json"
    }
    })
    .then((response)=>{
      teams= response.data
      html=''
      for (team of teams){
          html+= team.id+' '+team.title+'</br>'
      }
      document.querySelector;
    })
    .then(re=>{
    })
    .catch((error)=>{
      console.log(error)
    })