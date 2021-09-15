// for positive affirmations
var printContainer = $('.printContainer');
var submit = $('.submit');

submit.on("click", printPositive);

function printPositive(){
  var firstName = $('.firstName').val();
  var goal = $('.goal').val();
  event.preventDefault();
  printContainer.append(`
    <p class="positivity"><b>${firstName}, repeat the following sentences.</b></p> 
    <p class="positivity">I am doing my best. </p> 
    <p class="positivity">I am talented enough and will work to overcome my fear.</p> 
    <p class="positivity">I am brave enough to take that risk.</p> 
    <p class="positivity">I am dedicated and passionate in my work.</p> 
    <p class="positivity">I will always be proud of myself.</p>
    <p class="positivity">I will accomplish my goal of conquering my fear of ${goal}.</p>
    `)
}

var quotes=[
  'Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold. -Helen Keller',
  'Do not fear mistakes. You will know failure. Continue to reach out. -Benjamin Franklin',
  'The path from dreams to success does exist. May you have the vision to find it, the courage to get on it and the perseverance to follow it. ~ Kalpana Chawla, Astronaut',
  'Do your best to achieve the goal. Do what makes you distinct than others. Snatch your rights by excelling in your pursuits. Do the maximum for distinction in your field. ~ Saina Nehwal, Badminton Player',
  'Everything you want is on the other side of fear. -Jack Canfield',
  'Don’t ever let somebody tell you that you can’t do something ~ Vedika Goel, Founder of With You',
  'Fear is the main source of superstition, and one of the main sources of cruelty. To conquer fear is the beginning of wisdom. -Bertrand Russell',
  'Once you stop fearing ear, you’ll have a sense of freedom in all that you do. ~ Kiran Bedi, Retired IPS Officer and Politician',
  'Set your goals high in life, and don’t stop until you reach there ~ Arunima Sinha, Mountain Climber',
  'Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy. -Dale Carnegie',
  ' I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear. -Rosa Parks'
]

min=0
max=quotes.length
Math.floor(Math.random() * (max -  + 1)) + min;
var randomNumber = Math.floor(Math.random()*quotes.length);
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}