const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// let apiQuotes = [];

// show new quote
function newQuote() {
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
    quoteText.textContent = quote.text;
}

// Get Quotes from API

// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error){
//         alert(error);
//     }
// }

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// event listeners 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
// getQuotes();
newQuote();