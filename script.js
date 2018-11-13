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

pwrbtn.addEventListener('click', showPalkia);
pwrbtn.addEventListener('click', getPalkia);
pwrbtn.addEventListener('click', showGraph);
pwrbtn.addEventListener('click', showPanel);

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

   xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/palkia.json", true);
   xhttp.send();
}

function showPalkia(){
  mySlide=setTimeout(function() {
      document.getElementById('palk').classList.remove('hidden');
      document.getElementById('palk').classList.add('animated');
      document.getElementById('palk').classList.add('zoomInUp')
    }, 1000);
  }
  function showGraph(){
    mySlide=setTimeout(function() {
      document.getElementById('slide').classList.remove('hidden');
      document.getElementById('slide').classList.add('animated');
      document.getElementById('slide').classList.add('zoomInUp')
    }, 1000);
  }
  function showPanel(){
    mySlide=setTimeout(function() {
      document.getElementById('pan').classList.remove('hidden');
      document.getElementById('pan').classList.add('animated');
      document.getElementById('pan').classList.add('swing')
    }, 1500);
  }
// function clearBottomScreenText() {
//   let div = document.getElementById('pokemon-desc');
//   let h3 = document.getElementById('pokemon-genus');
//   h3.remove();
//   div.remove();
//   screen['bottom'] = '';
// }

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

   document.getElementById("myBtn").addEventListener("click", function(){
   document.getElementById("speed").innerHTML= "Speed: " + Pokemon.speed;
   document.getElementById("hp").innerHTML= "HP: " + Pokemon.hp;
   document.getElementById("defense").innerHTML= "Defense: " + Pokemon.hp;
   document.getElementById("attack").innerHTML= "Attack: " + Pokemon.attack;
   document.getElementById("ability").innerHTML= "Abilities: " + Pokemon.ability;
   document.getElementById("id").innerHTML= "Id: " + Pokemon.id;
 ALL_POKEMON.push(Pokemon);
// }

});
}
}

   xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/mewtwo.json", true);
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

   document.getElementById("myBtn").addEventListener("click", function(){
   document.getElementById("speed").innerHTML= "Speed: " + Pokemon.speed;
   document.getElementById("hp").innerHTML= "HP: " + Pokemon.hp;
   document.getElementById("defense").innerHTML= "Defense: " + Pokemon.hp;
   document.getElementById("attack").innerHTML= "Attack: " + Pokemon.attack;
   document.getElementById("ability").innerHTML= "Abilities: " + Pokemon.ability;
   document.getElementById("id").innerHTML= "Id: " + Pokemon.id;
 ALL_POKEMON.push(Pokemon);
// }

});
}
}

   xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/id/487.json", true);
   xhttp.send();
}
//this sees the number of abilities and prints available number of abilities

// if (Pokemon.abilities[2] !== undefined) {
//   document.getElementById("showabilities").innerHTML = "ABILITIES: " + Pokemon.abilities[0].ability.name.toUpperCase() + ", " + pokeinfo.abilities[1].ability.name.toUpperCase() + ", " + pokeinfo.abilities[2].ability.name.toUpperCase();
// } else if (Pokemon.abilities[1] !== undefined) {
//   document.getElementById("showabilities").innerHTML = "ABILITIES: " + Pokemon.abilities[0].ability.name.toUpperCase() + ", " + pokeinfo.abilities[1].ability.name.toUpperCase();
// } else {
//   document.getElementById("showabilities").innerHTML = "ABILITY:  " + Pokemon.abilities[0].ability.name.toUpperCase();
// }

// }, 1500);