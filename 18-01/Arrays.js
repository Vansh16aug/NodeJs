// 1.
let myFavSuperheroes = [
  "Guru Gobind Singh",
  "Sahibzada Ajit Singh",
  "Sahibzada Jujhar Singh",
  "Maharaja Ranjit Singh",
  "Bhagat Singh",
];
// 2.
console.log(myFavSuperheroes);

// 3.
console.log(myFavSuperheroes.length);

//4.
//Adding at secondlast
myFavSuperheroes.splice(-2,1,'vansh');

// 5.
//Adding at last
myFavSuperheroes.push('rene');

//6.


//7.
console.log(myFavSuperheroes.shift());

// 8.
//Removing the last
myFavSuperheroes.pop();

// 9.
//Adding at specific position
myFavSuperheroes.splice(3,0,'rene');

//10.
myFavSuperheroes.splice(3,2,'rene');

console.log(myFavSuperheroes);



// 11.
let superHeroUniverse=[];

let marvelHeroes=['IronMan',
    'SpiderMan',
    'SuperMan',
    'Thor',
    'Hulk'
];

let KhalsaHeroes = [
  "Guru Gobind Singh Ji",
  "Sahibzada Ajit Singh Ji",
  "Sahibzada Jujhar Singh Ji",
  "Maharaja Ranjit Singh Ji",
  "Sahibzada Fateh Singh Ji",
  "Sahibzada Zorawar Singh Ji",
];

// console.log(superHeroUniverse.concat(marvelHeroes,KhalsaHeroes));
superHeroUniverse=[marvelHeroes,KhalsaHeroes];
console.log(superHeroUniverse);

// 12.
console.log(superHeroUniverse[0][1]);

// 13.
console.log(superHeroUniverse[1][0]);