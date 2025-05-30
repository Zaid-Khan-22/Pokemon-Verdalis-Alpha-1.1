class Grass{
    constructor(x,y,width,height,location){
        this.x = x
        this.y = y
        this.sprite = createSprite(x,y)
        this.sprite.width = width
        this.sprite.height = height
        this.location = location
        this.touch;
        this.encounterCoolDown = 0
    }

    checkEncounter(){
        if(player.overlap(this.sprite)&&playerLocation === this.location&&
        this.encounterCoolDown === 0&&(keyWentDown("up")||keyWentDown("down")||
            keyWentDown("left")||keyWentDown("right"))){
            let rand = Math.round(random(1,10))
            if(rand === 10){
                this.encounterCoolDown = 120
                this.encounter()
            }
        }
        while(this.encounterCoolDown>0){
            this.encounterCoolDown--
        }
    }

    encounter(){
        
        const encountersHere = encounters[this.location]
        let chance = Math.round(random(1,100))
        let pokemon,lvl,wildPokemon;
        for(let i = 0;i<encountersHere.length;i++){
            if(chance>encountersHere[i].minChance&&chance<encountersHere[i].maxChance){
                pokemon = encountersHere[i].name
                lvl = Math.round(random(encountersHere[i].minLevel,
                    encountersHere[i].maxLevel))
                break;
            }
        }
        
        wildPokemon = new Pokemon(pokemon,lvl,pokedex,movedDB,[],null)
        currentBattle = new Battle(party,wildPokemon,"hello","transition","","","wild")
    }

}