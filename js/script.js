var mySlide;

function statSlide(){
mySlide=setTimeout(function() {
    document.getElementById('graph').classList.remove('hidden');
    document.getElementById('graph').classList.add('animated');
    document.getElementById('graph').classList.add('slideInLeft')
  }, 1000);
}
statSlide();

let pwrbtn = document.getElementById('myBtn');
let pwrbtn1 = document.getElementById('myBtn1');
let pwrbtn2 = document.getElementById('myBtn2');





pwrbtn.addEventListener('click', showPalkia);
pwrbtn.addEventListener('click', fetchPokemon('palkia'));
// pwrbtn.addEventListener('click', getPalkia);
pwrbtn.addEventListener('click', showGraph);
pwrbtn.addEventListener('click', showPanel);


pwrbtn1.addEventListener('click', showMewTwo);
pwrbtn1.addEventListener('click', fetchPokemon('mewtwo'));
pwrbtn1.addEventListener('click', showGraph1);
pwrbtn1.addEventListener('click', showPanel1);

pwrbtn2.addEventListener('click', showGiratina);
pwrbtn2.addEventListener('click', fetchPokemon(487));
pwrbtn2.addEventListener('click', showGraph2);
pwrbtn2.addEventListener('click', showPanel2);


function threeDigits(num) {
  if (num.toString().length == 3) {
    return num;
  } else {
    num = "0" + num.toString();
    return threeDigits(num);
  }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class Trainer {
  constructor() {
    this.pokes = [];
  }
//accepts no parameters and returns an array of pokemon objects
  all() {
    let allPokes = [];
    for (let poke in this.pokes) {
      allPokes.push(this.pokes[poke]);
    }
    console.log(allPokes)
    return allPokes;
  }
 //accetps 1 parameter and returns a pokemon object for the pokemon if found!
  get(name) {
    for (let poke in this.pokes) {
      if (this.pokes[poke]['species'] == name || this.pokes[poke]['number'] == name) {
        return this.pokes[poke];
      }
    }
  }

  remove(name) {
    for (let poke in this.pokes) {
      if (this.pokes[poke]['species'] == name || this.pokes[poke]['number'] == name) {
        delete this.pokes[poke];
      }
    }
  }
}

class Pokemon {
  constructor(number, species, sprites, weight, height, type, hp, atk, def, spatk, spdef, speed, abilities) {
    this.number = number;
    this.species = species;
    this.sprites = sprites;
    this.picture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + threeDigits(number) + ".png";
    this.weight = weight;
    this.height = height;
    this.type = type;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.spatk = spatk;
    this.spdef = spdef;
    this.speed = speed;
    this.abilities = abilities;
    this.flavorText = undefined;
    this.cry = "cries/" + number + ".ogg";
    this.caught = false;
    bald_eagle.pokes.push(this);
  }


  getAbilities() {
    let abilityString = capitalize(this['abilities'][0]['ability']['name']);
    for (let i = 1;i < this.abilities.length;i++) {
      abilityString = abilityString + ", " + capitalize(this['abilities'][i]['ability']['name']);
    }
  
    return abilityString;
  }
}

  function fetchPokemon(poke) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + poke + "/", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        console.log(data);
        var pokemon = new Pokemon(data['id'], data['name'], data['sprites'], data['weight'], data['height'], data['types'], data['stats'][5]['base_stat'], data['stats'][4]['base_stat'], data['stats'][3]['base_stat'], data['stats'][2]['base_stat'], data['stats'][1]['base_stat'], data['stats'][0]['base_stat'], data['abilities']);
        console.log(pokemon);
        // pokemon['flavorText'] = addFlavor(pokemon);
        document.getElementById("speed").innerHTML= "Speed: " + data['stats'][0]['base_stat'];
        document.getElementById("hp").innerHTML= "HP: " + data['stats'][5]['base_stat'];
        document.getElementById("defense").innerHTML= "Defense: " + data['stats'][3]['base_stat'];
        document.getElementById("attack").innerHTML= "Attack: " + data['stats'][4]['base_stat'];
        setTimeout(function() {
          if (data.abilities[2] !== undefined) {
            document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase() + ", " + data.abilities[2].ability.name.toUpperCase();
          } else if (data.abilities[1] !== undefined) {
            document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase();
          } else {
            document.getElementById("showabilities").innerHTML = "ABILITY:  " + data.abilities[0].ability.name.toUpperCase();
          }
          
          }, 8000);
      };
    };
  }


  var bald_eagle = new Trainer();



// function getPalkia (){
 
// }
  //  document.getElementById("id").innerHTML= "Id: " + Pokemon.id;

//this sees the number of abilities and prints available number of abilities
// setTimeout(function() {
// if (data.abilities[2] !== undefined) {
//   document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase() + ", " + data.abilities[2].ability.name.toUpperCase();
// } else if (data.abilities[1] !== undefined) {
//   document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase();
// } else {
//   document.getElementById("showabilities").innerHTML = "ABILITY:  " + data.abilities[0].ability.name.toUpperCase();
// }

// }, 5000);

// }
  //  document.getElementById("speed").innerHTML= "Speed: " + Pakie.speed;
  //  document.getElementById("hp").innerHTML= "HP: " + Pakie.hp;
  //  document.getElementById("defense").innerHTML= "Defense: " + Pakie.hp;
  //  document.getElementById("attack").innerHTML= "Attack: " + Pakie.attack;
  //  bald_eagle.pokemon.splice(2,0,Pakie);
  //  console.log("Palkia added to pokemon"); 
  // //  document.getElementById("id").innerHTML= "Id: " + Pokemon.id;

// //this sees the number of abilities and prints available number of abilities
// setTimeout(function() {
// if (data.abilities[2] !== undefined) {
//   document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase() + ", " + data.abilities[2].ability.name.toUpperCase();
// } else if (data.abilities[1] !== undefined) {
//   document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase();
// } else {
//   document.getElementById("showabilities").innerHTML = "ABILITY:  " + data.abilities[0].ability.name.toUpperCase();
// }

// }, 5000);

// }
// }
   
//    xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/name/palkia.json", true);
//    xhttp.send();
// }

// // getMewTwo
// function getMewTwo() {
//   var xhttp = new XMLHttpRequest();
//  xhttp.onreadystatechange = function() {
//  if (this.readyState == 4 && this.status == 200) {
//            // document.write(this.responseText);
//            //What result you want to acheive
//            data = JSON.parse(this.responseText);
//             console.log(data[data]);


//        var Me2 = new Pokemon ={
//        name: data.name,
//        speed: data.stats[0].base_stat,
//        hp: data.stats[5].base_stat,
//        attack: data.stats[4].base_stat,
//        defense: data.stats[3].base_stat,
//        ability: data.abilities[0].ability.name,
//        id: data.id,
       
// }
// // ALL_POKEMON.push(Pokemon);
  
//    document.getElementById("speed").innerHTML= "Speed: " + Me2.speed;
//    document.getElementById("hp").innerHTML= "HP: " + Me2.hp;
//    document.getElementById("defense").innerHTML= "Defense: " + Me2.hp;
//    document.getElementById("attack").innerHTML= "Attack: " + Me2.attack;
//   //  document.getElementById("id").innerHTML= "Id: " + Pokemon.id;

// //this sees the number of abilities and prints available number of abilities
// setTimeout(function() {
// if (data.abilities[2] !== undefined) {
//   document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase() + ", " + data.abilities[2].ability.name.toUpperCase();
// } else if (data.abilities[1] !== undefined) {
//   document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase();
// } else {
//   document.getElementById("showabilities").innerHTML = "ABILITY:  " + data.abilities[0].ability.name.toUpperCase();
// }

// }, 5000);



// }
// }

//    xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/name/mewtwo.json", true);
//    xhttp.send();
// }


// function getGiratina() {
//   var xhttp = new XMLHttpRequest();
//  xhttp.onreadystatechange = function() {
//  if (this.readyState == 4 && this.status == 200) {
//            // document.write(this.responseText);
//            //What result you want to acheive
//            data = JSON.parse(this.responseText);
//             console.log(data[data]);


//        var Gtina = new Pokemon  ={
//        name: data.name,
//        speed: data.stats[0].base_stat,
//        hp: data.stats[5].base_stat,
//        attack: data.stats[4].base_stat,
//        defense: data.stats[3].base_stat,
//        ability: data.abilities[0].ability.name,
//        id: data.id,
       
// }

  
//    document.getElementById("speed").innerHTML= "Speed: " + Gtina.speed;
//    document.getElementById("hp").innerHTML= "HP: " + Gtina.hp;
//    document.getElementById("defense").innerHTML= "Defense: " + Gtina.hp;
//    document.getElementById("attack").innerHTML= "Attack: " + Gtina.attack;
//   //  document.getElementById("id").innerHTML= "Id: " + Pokemon.id;

// //this sees the number of abilities and prints available number of abilities
// setTimeout(function() {
// if (data.abilities[2] !== undefined) {
//   document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase() + ", " + data.abilities[2].ability.name.toUpperCase();
// } else if (data.abilities[1] !== undefined) {
//   document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase();
// } else {
//   document.getElementById("showabilities").innerHTML = "ABILITY:  " + data.abilities[0].ability.name.toUpperCase();
// }

// }, 5000);



// }
// }

//    xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/id/487.json", true);
//    xhttp.send();
// }


function showPalkia(){
  mySlide=setTimeout(function() {
     document.getElementById('palk1').classList.add('hidden');
     document.getElementById('palk2').classList.add('hidden');
      document.getElementById('palk').classList.remove('hidden');
      document.getElementById('palk').classList.add('animated');
      document.getElementById('palk').classList.add('zoomInUp')
    }, 1000);
  }
  function showGraph(){
    mySlide=setTimeout(function() {
      document.getElementById('pokecard').classList.add('hidden');
      document.getElementById('slide').classList.remove('hidden');
      document.getElementById('slide').classList.add('animated');
      document.getElementById('slide').classList.add('zoomInUp')
    }, 1000);
  }
  function showPanel(){
    mySlide=setTimeout(function() {
      document.getElementById('pPanel1').classList.add('hidden');
      document.getElementById('pPanel').classList.remove('hidden');
      document.getElementById('pPanel2').classList.add('hidden');
      document.getElementById('pan1').classList.add('hidden');
      document.getElementById('pan2').classList.add('hidden');
      document.getElementById('pan').classList.remove('hidden');
      document.getElementById('pan').classList.add('animated');
      document.getElementById('pan').classList.add('swing')
    }, 1500);
  }

  // ShowMewTwo
  function showMewTwo(){
    mySlide=setTimeout(function() {
        document.getElementById('palk').classList.add('hidden');
        document.getElementById('palk2').classList.add('hidden');
        document.getElementById('palk1').classList.remove('hidden');
        document.getElementById('palk1').classList.add('animated');
        document.getElementById('palk1').classList.add('zoomInUp')
      }, 1000);
    }
    function showGraph1(){
      mySlide=setTimeout(function() {
        document.getElementById('pokecard').classList.add('hidden');
        document.getElementById('slide').classList.remove('hidden');
        document.getElementById('slide').classList.add('animated');
        document.getElementById('slide').classList.add('zoomInUp');
        // document.getElementsByClassName("pika-bar").classList.remove("pika-bar");
        // document.getElementsByClassName("pika-bar").classList.add("pika-barMew");
        // document.getElementById('wrap1').classList.remove('hidden');
        // document.getElementById('slide').classList.remove('hidden');
        // document.getElementById('slide').classList.add('animated');
        // document.getElementById('slide').classList.add('zoomInUp');
        // document.getElementById('pik').classList.add('pika-barMew')
      }, 1000);
    }
    function showPanel1(){
      mySlide=setTimeout(function() {
        document.getElementById('pPanel').classList.add('hidden');
        document.getElementById('pPanel1').classList.remove('hidden');
        // document.getElementById('pan').classList.add('hidden');
        document.getElementById('pan2').classList.add('hidden');
        document.getElementById('pan1').classList.remove('hidden');
        document.getElementById('pan1').classList.add('animated');
        document.getElementById('pan1').classList.add('swing')
      }, 1500);
    }

    // Show Giratina
    function showGiratina(){
      mySlide=setTimeout(function() {
          document.getElementById('palk').classList.add('hidden');
          document.getElementById('palk1').classList.add('hidden');
          document.getElementById('palk2').classList.remove('hidden');
          document.getElementById('palk2').classList.add('animated');
          document.getElementById('palk2').classList.add('zoomInUp')
        }, 1000);
      }
      function showGraph2(){
        mySlide=setTimeout(function() {
          document.getElementById('pokecard').classList.add('hidden');
          document.getElementById('slide').classList.remove('hidden');
          document.getElementById('slide').classList.add('animated');
          document.getElementById('slide').classList.add('zoomInUp')
        }, 1000);
      }
      function showPanel2(){
        mySlide=setTimeout(function() {
          document.getElementById('pPanel').classList.add('hidden');
          document.getElementById('pPanel1').classList.add('hidden');
          document.getElementById('pPanel2').classList.remove('hidden');
          document.getElementById('pan').classList.add('hidden');
          document.getElementById('pan1').classList.add('hidden');
          document.getElementById('pan2').classList.remove('hidden');
          document.getElementById('pan2').classList.add('animated');
          document.getElementById('pan2').classList.add('swing')
        }, 1500);
      }
