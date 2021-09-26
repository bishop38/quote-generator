const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// let apiQuotes = [];

// show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// show new quote
function newQuote() {
    loading();
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// Check If Author field is blank and replace it with 'Unknown'
 if(quote.author){ 
    authorText.textContent = quote.author;   
 } else {
 authorText.textContent = 'Unknown';
 }
// Check Quote length to determine styling
if(quote.text.length > 120){
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
}
// Set quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}

// Get Quotes from API

async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error){
        alert(error);
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// event listeners 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
 getQuotes();
//newQuote();
