import fetch from "node-fetch";

const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  return data;
}

function displayQuote(quote, author) {
    console.log(`${quote} -${author}`)
}

function selectRandomQuote(arr) {
    const random = Math.floor(Math.random() * arr.length - 1);
    return random;
}

function getQuote(arr) {
    const random = selectRandomQuote(arr);
    return displayQuote(arr[random].q, arr[random].a);
}

let quotes = await getapi(api_url);
getQuote(quotes);
