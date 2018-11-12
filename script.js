var mySlide;

function statSlide(){
mySlide=setTimeout(function() {
    document.getElementById('graph').classList.remove('hidden');
    document.getElementById('graph').classList.add('animated');
    document.getElementById('graph').classList.add('slideInLeft')
  }, 1000);
}
statSlide();

function getPokemon() {

    let apiLink = "http://fizal.me/pokeapi/api/v2/name/palkia.json";
  
    var newcall = new XMLHttpRequest();
    newcall.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        pokeinfo = JSON.parse(this.responseText);
        console.log(pokeinfo);
        let Pokemon = {
          name: pokeinfo.name,
          hp: pokeinfo.stats[5].base_stat,
          attack: pokeinfo.stats[4].base_stat,
          defense: pokeinfo.stats[3].base_stat,
          ability: pokeinfo.abilities[0].ability.name,
          id: pokeinfo.id,
        }
        POKEMON.push(Pokemon);
      }
    }
    newcall.open("GET", apiLink, true);
    newcall.send();
  }