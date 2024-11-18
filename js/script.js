/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//Below is an array with 5 objects inside, this is what content will display on the web page.
const quotes = [
  {
    quote: "Programming isn't about what you know; its about what you can figure out",
    author: 'Grace Hopper',
    citation:'computer pioneer '
  }, 
  {
    quote: "Don't comment bad code - rewrite it.",
    author:'Brian Kernighan',
    year: '01/03/2025'
  },
  {
    quote: 'Technical problems can be remeditiated. A dishonest coporate culture is much harder to fix',
    author:'Bruce Schneier',
    year: '01/03/2025'
  },
  {
    quote:'Simplicity is the soul to efficiency.',
    author:'Austin Freeman',
    year:'01/03/2025'
  },
  {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: 'Cory House',
    year: '01/03/2025'
  }
];

/***
 * `getRandomQuote` function
***/

//Below is a function that will pull a random quote from the objects above each time someone clicks the button
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

/***
 * `printQuote` function
***/

/* Below is another function that also hold the HTML string, In this function it will grab the quote,
the author, and if theirs a citation it will show that instead and update the HTML.*/
function printQuote() {
  const randomQuote = getRandomQuote();

  let html = `<p class="quote">${randomQuote.quote}</p>`;
  html += `<p class="source">${randomQuote.author}`;
  
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  html += `</p>`; 
  
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);