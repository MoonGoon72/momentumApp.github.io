const quotes = [
{
    quote: "A",
    author: "a",
},
{
    quote: "B",
    author: "b",
},
{
    quote: "C",
    author: "c",
},
{
    quote: "D",
    author: "d",
},
{
    quote: "E",
    author: "e",
},
{
    quote: "F",
    author: "f",
},
{
    quote: "G",
    author: "g",
},
{
    quote: "H",
    author: "h",
},
{
    quote: "I",
    author: "i",
},
{
    quote: "J",
    author: "j",
}

];

 const quote = document.querySelector("#quote span:first-child");
 const author = document.querySelector("#quote span:last-child");  

 
 let random = Math.floor(Math.random() * quotes.length);
 const todaysQuotes = quotes [random];
quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;