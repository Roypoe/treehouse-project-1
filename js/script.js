// FSJS - Random Quote Generator

// Here I create the array of quote objects and name it quotes
var quotes = [
  {
  quote:'The short successes that can be gained in a brief time and without difficulty, are not worth much.',
  source:'Henry Ford',
  citation:'Ford News',
  year: 1922
  },
  {
  quote:'Competition whose motive is merely to compete, to drive some other fellow out, never carries very far.',
  source:'Henry Ford',
  citation:'Ford News',
  year: 1923
  },
  {
  quote:'Every success is the mother of countless others.',
  source:'Henry Ford',
  citation:'Ford News',
  year: 1925,
  tag: 'Entrepreneur'
  },
  {
  quote:'If you tell the truth you don\'t have to remember anything.',
  source:'Mark Twain',
  citation:'Notebook',
  year: 1935
  },
  {
  quote:'Thousands of geniuses live an die undiscovered - either by themselves or by others.',
  source:'Mark Twain',
  citation:'Autobiography',
  year: 1925,
  tag: 'author'
  },
  {
  quote:'Wrinkles should merely indicate where smiles have been.',
  source:'Mark Twain',
  citation:'Following the Equator',
  year: 1897
  },
  {
  quote:'As far as the laws of mathematics refer to reality, they are not certain; and as far as they are certain, they do not refer to reality.',
  source:'Albert Einstein',
  citation:'Address to Prussian Academy of Science',
  year: 1921,
  tag: 'scientist'
  },
  {
  quote:'Nationalism is an infantile sickness. It is the measles of the human race.',
  source:'Albert Einstein',
  citation:'Albert Einstein, the Human Side',
  },
  {
  quote:'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
  source:'Albert Einstein',
  year: 1979
  },
  {
  quote:'Art is the daughter of freedom',
  source:'Friedrich Schiller',
  tag: 'author'
  },
];

// Here I create a random number between 0 and quotes.length-1

function getRandomNumber(array){
  return (Math.floor(Math.random()*array.length));
}

// With the random number I retrieve an random object from quotes

function getRandomQuote(pass){
  return pass[getRandomNumber(pass)];
}

// The randomColorFunction returns random an array of three random numbers (0 to 255) for use as rgb BackgroundColor

function randomColor() {
  var num = [];
  for (var i = 0; i < 3; i++){
  num.push(Math.floor(Math.random()*256));
  }
  return num;
}

// The printQuote function gives an html block and places that block in the index file between divs of id 'quote-box'

function printQuote(){
  var html = '';
  var quoteObj = getRandomQuote(quotes);
  html += '<p class="quote">' + quoteObj.quote + '</p>' + '<p class="source">' + quoteObj.source;
// Only creat span elements if property exists
  for (var i = 2; i < Object.keys(quoteObj).length; i++){
    html += '<span class="' + Object.keys(quoteObj)[i] + '">' + quoteObj[Object.keys(quoteObj)[i]] + '</span>';
  }
  html += '</p>';
  console.log(html);
  document.getElementById('quote-box').innerHTML = html;
  // Here we replace the body background color
  document.body.style.background = 'rgb('+ randomColor() +')';
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// Set initial quote and backround
printQuote();
// Set interval for chnage of background color and quotes
setInterval(printQuote, 4000);
