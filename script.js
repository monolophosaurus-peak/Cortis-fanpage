const facts = [
  "CORTIS is BIGHIT MUSIC's first new boy group in about six years after TXT.",
  "CORTIS gets its name from the phrase COLOR OUTSIDE THE LINES.",
  "The fandom name is COER.",
  "CORTIS debuted on August 18, 2025.",
  "All five members take part in creating their music, dances and videos.",
  "Martin is known for being the fastest eater in the group.",
  "Martin and Seonghyeon worked on all five tracks on the debut EP.",
  "James is the oldest member of CORTIS.",
  "Keonho is the youngest member, also known as the maknae.",
  "Juhoon has a turtle named Choco. He and Martin also produced TXT's song Angel Bite.",
  "When the members are bored, they sometimes just lie down and enjoy the quiet.",
  "Keonho thinks the older members are weird, but in a good way.",
  "None of the members have brothers.",
  'Their official greeting is "Hello! We are CORTIS!"'
];

const factText = document.querySelector("#fact");
const factButton = document.querySelector("#newFact");
let previousFact = -1;

function showRandomFact() {
  let nextFact = Math.floor(Math.random() * facts.length);

  while (facts.length > 1 && nextFact === previousFact) {
    nextFact = Math.floor(Math.random() * facts.length);
  }

  previousFact = nextFact;
  factText.textContent = facts[nextFact];
}

factButton.addEventListener("click", showRandomFact);
