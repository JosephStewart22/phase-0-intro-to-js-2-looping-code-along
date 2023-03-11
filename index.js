// Code your solutions in this file
for (let age = 30; age <40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];
const surprise = ["Birthday"];

function writeCards(names, surprise) {
  let cards=[]
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
        console.log(cards);
      }
      return cards
} 
writeCards(names);


function countDown() {
  let i = 11;
  while (i >= 1) {
    i = i - 1;
    console.log(i);
  }
}

