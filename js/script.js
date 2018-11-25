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
pwrbtn.addEventListener('click', getStats);
pwrbtn.addEventListener('click', showGraph);
pwrbtn.addEventListener('click', showPanel);


pwrbtn1.addEventListener('click', showMewTwo);
pwrbtn1.addEventListener('click', getStats1);
pwrbtn1.addEventListener('click', showGraph1);
pwrbtn1.addEventListener('click', showPanel1);

pwrbtn2.addEventListener('click', showGiratina);
pwrbtn2.addEventListener('click', getStats2);
pwrbtn2.addEventListener('click', showGraph2);
pwrbtn2.addEventListener('click', showPanel2);


// function threeDigits(num) {
//   if (num.toString().length == 3) {
//     return num;
//   } else {
//     num = "0" + num.toString();
//     return threeDigits(num);
//   }
// }

// function capitalize(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

class Trainer {
  constructor() {
    this.pokes = [];
    this.ids = [];
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
 //accepts 1 parameter and returns a pokemon object for the pokemon if found!
  get(name) {
    for (let poke in this.pokes) {
      if (this.pokes[poke]['species'] == name || this.pokes[poke]['number'] == name) {
        return this.pokes[poke];
      }
    }
  }
  setPokemon(num1, num2, num3) {
    this.ids.push(num1, num2, num3);

    for (var i = 0; i < this.ids.length; i++) {

      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.responseText);
          var x = new Pokemon(data['species']['name'],
          data['stats'][5]['base_stat'],
          data['stats'][3]['base_stat'],
          data['stats'][4]['base_stat'],
          data['stats'][1]['base_stat'],
          data['stats'][0]['base_stat'],
          data['stats'][2]['base_stat'],
          data['id']);
      //     name: data.name,
      //  speed: data.stats[0].base_stat,
      //  hp: data.stats[5].base_stat,
      //  attack: data.stats[4].base_stat,
      //  defense: data.stats[3].base_stat,
      //  ability: data.abilities[0].ability.name,
      //  id: data.id,
          for (var i = 0; i < data['abilities'].length; i++) {
            x.abilities.push(data['abilities'][i]['ability']['name']);
          }
          // addFlavor(x, trainerName);
        }
      }
      xhttp.open('GET',  `https://fizal.me/pokeapi/api/v2/id/${this.ids[i]}.json`,);
      xhttp.send();
    }


  }
}


class Pokemon {
  constructor(name, hp, atk, def, speed) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.speed = speed;
    this.abilities = [];;
    this.caught = true;
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




function getStats () {
        // fetchPokemon(150);
        document.getElementById("speed").innerHTML= "Speed: " + bald_eagle.pokes[0]["speed"];
        document.getElementById("hp").innerHTML= "HP: " + bald_eagle.pokes[0]["hp"];
        document.getElementById("defense").innerHTML= "Defense: " + bald_eagle.pokes[0]["def"];
        document.getElementById("attack").innerHTML= "Attack: " + bald_eagle.pokes[0]["atk"];
        setTimeout(function() {
            document.getElementById("showabilities").innerHTML = "ABILITIES: " + bald_eagle.pokes[0]['abilities'][0].toUpperCase() + ", " + bald_eagle.pokes[0]['abilities'][1].toUpperCase();
          }, 5000);
}

function getStats1 () {
  // fetchPokemon(150);
  document.getElementById("speed").innerHTML= "Speed: " + bald_eagle.pokes[1]["speed"];
  document.getElementById("hp").innerHTML= "HP: " + bald_eagle.pokes[1]["hp"];
  document.getElementById("defense").innerHTML= "Defense: " + bald_eagle.pokes[1]["def"];
  document.getElementById("attack").innerHTML= "Attack: " + bald_eagle.pokes[1]["atk"];
  setTimeout(function() {
      document.getElementById("showabilities").innerHTML = "ABILITIES: " + bald_eagle.pokes[1]['abilities'][0].toUpperCase() + ", " + bald_eagle.pokes[1]['abilities'][1].toUpperCase();
    }, 5000);
}

function getStats2 () {
  // fetchPokemon(150);
  document.getElementById("speed").innerHTML= "Speed: " + bald_eagle.pokes[2]["speed"];
  document.getElementById("hp").innerHTML= "HP: " + bald_eagle.pokes[2]["hp"];
  document.getElementById("defense").innerHTML= "Defense: " + bald_eagle.pokes[2]["def"];
  document.getElementById("attack").innerHTML= "Attack: " + bald_eagle.pokes[2]["atk"];
  setTimeout(function() {
      document.getElementById("showabilities").innerHTML = "ABILITIES: " + bald_eagle.pokes[2]['abilities'][0].toUpperCase() + ", " + bald_eagle.pokes[2]['abilities'][1].toUpperCase();
    }, 5000);
}

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


 var bald_eagle = new Trainer();
 bald_eagle.setPokemon(487, 150, 484);