var mySlide;

function statSlide(){
mySlide=setTimeout(function() {
    document.getElementById('graph').classList.remove('hidden');
    document.getElementById('graph').classList.add('animated');
    document.getElementById('graph').classList.add('slideInLeft')
  }, 1000);
}
statSlide();


const ALL_POKEMON = [];



let pwrbtn = document.getElementById('myBtn');
let pwrbtn1 = document.getElementById('myBtn1');
let pwrbtn2 = document.getElementById('myBtn2');




pwrbtn.addEventListener('click', showPalkia);
pwrbtn.addEventListener('click', getPalkia);
pwrbtn.addEventListener('click', showGraph);
pwrbtn.addEventListener('click', showPanel);

pwrbtn1.addEventListener('click', showMewTwo);
pwrbtn1.addEventListener('click', getMewTwo);
pwrbtn1.addEventListener('click', showGraph1);
pwrbtn1.addEventListener('click', showPanel1);

pwrbtn2.addEventListener('click', showGiratina);
pwrbtn2.addEventListener('click', getGiratina);
pwrbtn2.addEventListener('click', showGraph2);
pwrbtn2.addEventListener('click', showPanel2);

function getPalkia() {
  var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
           // document.write(this.responseText);
           //What result you want to acheive
           data = JSON.parse(this.responseText);
            console.log(data[data]);


    let Pokemon ={
       name: data.name,
       speed: data.stats[0].base_stat,
       hp: data.stats[5].base_stat,
       attack: data.stats[4].base_stat,
       defense: data.stats[3].base_stat,
       ability: data.abilities[0].ability.name,
       id: data.id,
       
}


class Trainer {
  contructor (){
      this.pokemon=[];
}
allPoke(){
  for (let prop in this.pokemon){
     ALL_POKEMON.push(this.pokemon[prop]);
}
return ALL_POKEMON;
}
get(name) {
  for (let prop in this.pokemon){
if (this.pokemon[prop]['name']==name){
  return this.pokemon[prop];
}
  }
}
}





  
   document.getElementById("speed").innerHTML= "Speed: " + Pokemon.speed;
   document.getElementById("hp").innerHTML= "HP: " + Pokemon.hp;
   document.getElementById("defense").innerHTML= "Defense: " + Pokemon.hp;
   document.getElementById("attack").innerHTML= "Attack: " + Pokemon.attack;
  //  document.getElementById("id").innerHTML= "Id: " + Pokemon.id;

//this sees the number of abilities and prints available number of abilities
setTimeout(function() {
if (data.abilities[2] !== undefined) {
  document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase() + ", " + data.abilities[2].ability.name.toUpperCase();
} else if (data.abilities[1] !== undefined) {
  document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase();
} else {
  document.getElementById("showabilities").innerHTML = "ABILITY:  " + data.abilities[0].ability.name.toUpperCase();
}

}, 5000);

}
}

   xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/name/palkia.json", true);
   xhttp.send();
}

// getMewTwo
function getMewTwo() {
  var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
           // document.write(this.responseText);
           //What result you want to acheive
           data = JSON.parse(this.responseText);
            console.log(data[data]);


    let Pokemon ={
       name: data.name,
       speed: data.stats[0].base_stat,
       hp: data.stats[5].base_stat,
       attack: data.stats[4].base_stat,
       defense: data.stats[3].base_stat,
       ability: data.abilities[0].ability.name,
       id: data.id,
       
}
ALL_POKEMON.push(Pokemon);
  
   document.getElementById("speed").innerHTML= "Speed: " + Pokemon.speed;
   document.getElementById("hp").innerHTML= "HP: " + Pokemon.hp;
   document.getElementById("defense").innerHTML= "Defense: " + Pokemon.hp;
   document.getElementById("attack").innerHTML= "Attack: " + Pokemon.attack;
  //  document.getElementById("id").innerHTML= "Id: " + Pokemon.id;

//this sees the number of abilities and prints available number of abilities
setTimeout(function() {
if (data.abilities[2] !== undefined) {
  document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase() + ", " + data.abilities[2].ability.name.toUpperCase();
} else if (data.abilities[1] !== undefined) {
  document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase();
} else {
  document.getElementById("showabilities").innerHTML = "ABILITY:  " + data.abilities[0].ability.name.toUpperCase();
}

}, 5000);



}
}

   xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/name/mewtwo.json", true);
   xhttp.send();
}


function getGiratina() {
  var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
           // document.write(this.responseText);
           //What result you want to acheive
           data = JSON.parse(this.responseText);
            console.log(data[data]);


    let Pokemon ={
       name: data.name,
       speed: data.stats[0].base_stat,
       hp: data.stats[5].base_stat,
       attack: data.stats[4].base_stat,
       defense: data.stats[3].base_stat,
       ability: data.abilities[0].ability.name,
       id: data.id,
       
}
ALL_POKEMON.push(Pokemon);
  
   document.getElementById("speed").innerHTML= "Speed: " + Pokemon.speed;
   document.getElementById("hp").innerHTML= "HP: " + Pokemon.hp;
   document.getElementById("defense").innerHTML= "Defense: " + Pokemon.hp;
   document.getElementById("attack").innerHTML= "Attack: " + Pokemon.attack;
  //  document.getElementById("id").innerHTML= "Id: " + Pokemon.id;

//this sees the number of abilities and prints available number of abilities
setTimeout(function() {
if (data.abilities[2] !== undefined) {
  document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase() + ", " + data.abilities[2].ability.name.toUpperCase();
} else if (data.abilities[1] !== undefined) {
  document.getElementById("showabilities").innerHTML = "ABILITIES: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase();
} else {
  document.getElementById("showabilities").innerHTML = "ABILITY:  " + data.abilities[0].ability.name.toUpperCase();
}

}, 5000);



}
}

   xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/id/487.json", true);
   xhttp.send();
}

class Trainer {
  contructor (){
      this.pokemon=[];
}
allPoke(){
  for (let prop in this.pokemon){
    ALL_POKEMON.push(this.pokemon[prop]);
}
return allPokemon;
}
get(name) {
  for (let prop in this.pokemon){
if (this.pokemon[prop]['name']==name){
  return this.pokemon[prop];
}
  }
}
}

var trainer = new Trainer();

// Show Palkia
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
        // document.getElementById('wrap').classList.add('hidden');
        document.getElementById('slide').classList.remove('hidden');
        document.getElementById('slide').classList.add('animated');
        document.getElementById('slide').classList.add('zoomInUp')
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
