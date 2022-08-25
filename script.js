var arrayofquotes = [
  ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
  [
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Oscar Wilde",
  ],
  ["Be the change that you wish to see in the world.", "Mahatma Gandhi"],
  [
    "Our lives begin to end the day we become silent about things that matter.",
    "Martin Luther King",
  ],
  [
    "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "Thomas A. Edison",
  ],
  ["If you can't feed a hundred people, then feed just one.", "Mother Teresa"],
];

function quotepress() {
  var randomnum = Math.floor(Math.random() * arrayofquotes.length);
  document.querySelector("#quote").innerText = arrayofquotes[randomnum][0];
  document.querySelector("#author").innerText = arrayofquotes[randomnum][1];
}
