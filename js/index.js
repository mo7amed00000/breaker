var quotes = [{
    quote: `“Be yourself; everyone else is already taken.”`,
    writer: `― Oscar Wilde`
},
{
    quote: `“So many books, so little time.”`,
    writer: `Frank Zappa`
},
{
    quote: `“You only live once, but if you do it right, once is enough.”`,
    writer: `― Mae West`
},
{
    quote: `“Be the change that you wish to see in the world.”`,
    writer: `― Mahatma Gandhi`
},
{
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
    writer: `― Andre Gide`
},
{
    quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    writer: `― Mahatma Gandhi`
},
{
    quote: `"Turn your wounds into wisdom."`,
    writer: ` Oprah Winfrey`
},
{
    quote: `"The purpose of our lives is to be happy."`,
    writer: `- Dalai Lama`
},
{
    quote: `"Live for each second without hesitation."`,
    writer: `- Elton John`
},
{
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    writer: `– Babe Ruth`
},
]
var quote = document.getElementById("quoteOutput")
var author = document.getElementById("authorOutput")

function print(){
    var random=Math.floor(Math.random()*quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].writer;

}