class Battle{
    constructor(playerTeam,enemyTeam,enemyName,state,trainerClass,
        enemyObj){
        this.playerTeam = playerTeam
        this.enemyTeam = enemyTeam
        this.enemyName = enemyName
        this.state = state
        this.trainerClass = trainerClass
        this.enemyObj = enemyObj


        this.playerCurrentPokemon = this.playerTeam[0].name
        this.enemyCurrentPokemon = this.enemyTeam[0].name

        this.playerCurrentPokemonObject = this.playerTeam[0]
        this.enemyCurrentPokemonObject = this.enemyTeam[0]

        this.enemyPokemonLeft = enemyTeam.length;

        this.menuCreated = false
        this.menuIndex = 0
        this.moveIndex = 0
        this.textState = 0
        this.sentState = 0
        this.enemyIndex = 0

        this.playerChosenMove = false
        this.enemyChosenMove = false

        this.turn;
        this.turnCompleted = false;
        this.turnStart = "";
        this.turnTextState = false

        this.pCurrentMove;
        this.eCurrentMove;

        this.menuState = false
        this.keyCoolDown = 15

        this.playerDamage = 0
        this.enemyDamage = 0

        this.playerPriority
        this.enemyPriority
        this.playerSpeed
        this.enemySpeed
        this.rand

        this.level = 0
        this.att = 0
        this.def = 0
        this.movePower = 0
        this.currentMove = 0
        this.STAB = 1
        this.effectiveness = 1
        this.crit = 1
        this.critchance = 1
        this.variation = 1

    }


    update(){
        switch(this.state){
            case 'transition':
                if (!transitionFunctionBoolean) {
                    transitionFunctionBoolean = true;
                }
                transitionFunction(this);
                break;
            
            case 'intro':
                tempSprite.visible = false
                //drawBattleUI(this.state)
                if (!battleChat) {
                    battleChat = true;
                }
                introDialouge(this);
                break;

            case 'send':
                //drawBattleUI(this.state)
                if (!enemyPokemon) {
                    enemyPokemon = true;
                }
                trainerSprite.visible = false
                playerSprite.visible = false
                sendPokemon(this);
                break;

            case 'menu':
                break;
            
            case 'fight':
                break;
            
            case 'enemyAI':
                enemyAI(this)
                break;

             case 'turn':
                this.turnFinder();
                break;    

            case 'bag':
                console.log("bag");
                break;

            case 'pokemon':
                console.log("pokemon");
                break;

            case 'run':
                console.log("run");
                break;

            case 'battling':
                if(this.turn === "player"){
                    this.playerAttack()
                }
                else if(this.turn === "enemy"){
                    this.enemyAttack()
                }

        }
    }

    turnFinder(){
        this.turn = ""
        this.turnCompleted = false
        this.playerChosenMove = false
        this.enemyChosenMove = false
    this.playerPriority = this.playerCurrentPokemonObject.moves[this.moveIndex].priority
    this.enemyPriority = this.enemyCurrentPokemonObject.moves[this.enemyIndex].priority
    this.playerSpeed = this.playerCurrentPokemonObject.baseStats.speed
    this.enemySpeed = this.enemyCurrentPokemonObject.baseStats.speed
    if(this.playerPriority>this.enemyPriority){
        this.turnStart = "player"
        this.turn = "player"
        this.turnCompleted = false
        this.playerAttack()
    }
    else if(this.playerPriority<this.enemyPriority){
        this.turnStart = "enemy"
        this.turn = "enemy"
        this.turnCompleted = false
        this.enemyAttack()
    }
    else{
        if(this.playerSpeed>this.enemySpeed){
            this.turnStart = "player"
            this.turn = "player"
            this.turnCompleted = false
            this.playerAttack()
        }
        else if(this.playerSpeed<this.enemySpeed){
            this.turnStart = "enemy"
            this.turn = "enemy"
            this.turnCompleted = false
            this.enemyAttack()
        }
        else{
            this.rand = Math.round(random(1,2))
            if(this.rand === 1){
            this.turnStart = "player"
            this.turn = "player"
            this.turnCompleted = false
            this.playerAttack()
            }
            else{
            this.turnStart = "enemy"
            this.turn = "enemy"
            this.turnCompleted = false
            this.enemyAttack()               
            }
        }
    }
    }

  
  playerAttack(){
    if(this.turn === "player"){
    this.currentMove = this.playerCurrentPokemonObject.moves[this.moveIndex]
    this.pCurrentMove = this.currentMove.name
    this.movePower = this.currentMove.power
    this.level = this.playerCurrentPokemonObject.level
    if(this.currentMove.category === "Physical"){
        this.att = this.playerCurrentPokemonObject.baseStats.att
        this.def = this.enemyCurrentPokemonObject.baseStats.def
    }
    if(this.currentMove.category === "Special"){
        this.att = this.playerCurrentPokemonObject.baseStats.spatt
        this.def = this.enemyCurrentPokemonObject.baseStats.spdef
    }

    if(this.currentMove.type === this.playerCurrentPokemonObject.types[0]||
      this.currentMove.type === this.playerCurrentPokemonObject.types[1]){
        this.STAB = 1.5
    }
    else{
        this.STAB = 1
    }
    this.effectiveness = calculateTypeEffectiveness(this.enemyCurrentPokemonObject.types,
        this.currentMove.type)
    if(this.currentMove.crit === 1){
        this.critchance = Math.round(random(1,24))
        if(this.critchance === 24){
            this.crit = 1.5
        }
        else{
            this.crit = 1
        }
    }
    else if(this.currentMove.crit === 0){
        this.critchance = Math.round(random(1,8))
        if(this.critchance === 8){
            this.crit = 1.5
        }
        else{
            this.crit = 1
        }
    }
    this.variation = (Math.round(random(85,100))/100)

    this.playerDamage = Math.round((((((2*this.level/5)+2)*this.movePower*(this.att/this.def))/50)+2)
    *this.STAB*this.effectiveness*this.crit*this.variation,this.playerDamage) 

    if(this.turnStart === "player"&&this.turn === "player"
        &&this.playerCurrentPokemonObject.currentHP>0){
        this.turn = "enemy"
        this.turnCompleted = false
        this.playerChosenMove = false
        this.enemyCurrentPokemonObject.currentHP -=this.playerDamage;
        if(this.enemyCurrentPokemonObject.currentHP<=0){
            this.enemyCurrentPokemonObject.currentHP = 0
            this.enemyPokemonLeft--
            this.playerCurrentPokemonObject.gainExp(
            this.enemyCurrentPokemonObject.baseExp+
            this.enemyCurrentPokemonObject.level*10,
            pokedex,
            moveDB
            );
            if(this.enemyPokemonLeft === 0){
                this.state = "endDialouge"
            }
            else{
                let ind = this.nextPokemon();
                let temp = this.enemyTeam[0]
                this.enemyTeam[0] = this.enemyTeam[ind]
                this.enemyTeam[ind] = temp
            }
        }
    }
    
    if(this.turnStart === "enemy"&&this.playerCurrentPokemonObject.currentHP>0
    ){
        this.turnFinder()
        this.playerChosenMove = false
        this.enemyCurrentPokemonObject.currentHP -=this.playerDamage;
        this.turn = ""
        this.state = "battling"
        if(this.enemyCurrentPokemonObject.currentHP<=0){
            this.enemyCurrentPokemonObject.currentHP = 0
            this.enemyPokemonLeft--
            this.playerCurrentPokemonObject.gainExp(
            this.enemyCurrentPokemonObject.baseExp+
            this.enemyCurrentPokemonObject.level*10,
            pokedex,
            moveDB
            );
            if(this.enemyPokemonLeft === 0){
                this.state = "endDialouge"
            }
            else{
                let ind = this.nextPokemon();
                let temp = this.enemyTeam[0]
                this.enemyTeam[0] = this.enemyTeam[ind]
                this.enemyTeam[ind] = temp
            }
        }
    }

    

}
  }  

  enemyAttack(){
    if(this.turn === "enemy"){
    this.currentMove = moveDB[this.enemyCurrentPokemonObject.moves[this.enemyIndex]]
    this.eCurrentMove = this.enemyCurrentPokemonObject.moves[this.enemyIndex]
    this.movePower = this.currentMove.power
    this.level = this.enemyCurrentPokemonObject.level
    if(this.currentMove.category === "Physical"){
        this.att = this.enemyCurrentPokemonObject.baseStats.att
        this.def = this.playerCurrentPokemonObject.baseStats.def
    }
    if(this.currentMove.category === "Special"){
        this.att = this.enemyCurrentPokemonObject.baseStats.spatt
        this.def = this.playerCurrentPokemonObject.baseStats.spdef
    }
    if(this.currentMove.type === this.enemyCurrentPokemonObject.types[0]||
      this.currentMove.type === this.enemyCurrentPokemonObject.types[1]){
        this.STAB = 1.5
    }
    else{
       this.STAB = 1
    }
    this.effectiveness = calculateTypeEffectiveness(this.playerCurrentPokemonObject.types,
        this.currentMove.type)
    if(this.currentMove.crit === 1){
        this.critchance = Math.round(random(1,24))
        if(this.critchance === 24){
            this.crit = 1.5
        }
    }
    else if(this.currentMove.crit === 0){
        this.critchance = Math.round(random(1,8))
        if(this.critchance === 8){
            this.crit = 1.5
        }
    }
    this.variation = (Math.round(random(85,100))/100)
    if(this.eCurrentMove !== "Splash"){
    this.enemyDamage = Math.round((((((2*this.level/5)+2)*this.movePower*(this.att/this.def))/50)+2)
    *this.STAB*this.effectiveness*this.crit*this.variation)
    }
    else{
        this.enemyDamage = 0
    } 
    if(this.faint(this.playerCurrentPokemonObject.currentHP)){
        playerPokemonLeft--
        this.playerCurrentPokemonObject.currentHP = 0
        if(noOfPokemonLeft === 0){
        this.state = "blackout"
    }
    }
    if(this.turnStart === "enemy"&&this.turn === "enemy"
        &&this.enemyCurrentPokemonObject.currentHP>0
    ){
        this.turn = "player"
        this.playerCurrentPokemonObject.currentHP -=this.enemyDamage;
        this.enemyChosenMove = false
        if(this.playerCurrentPokemonObject.currentHP<=0){
            this.playerCurrentPokemonObject.currentHP = 0
            noOfPokemonLeft--
            if(noOfPokemonLeft === 0){
                 this.state = "blackout"
            }
        }
        this.turnCompleted = false
    }
    if(this.turnStart === "player"&&this.enemyCurrentPokemonObject.currentHP>0
       
    ){
        this.turn = ""
        this.turnCompleted = true
        this.enemyChosenMove = false
        this.playerCurrentPokemonObject.currentHP -=this.enemyDamage;
         if(this.playerCurrentPokemonObject.currentHP<=0){
            this.playerCurrentPokemonObject.currentHP = 0
            noOfPokemonLeft--
            if(noOfPokemonLeft === 0){
                this.state = "blackout"
            }
   
        }
    }

    this.state = "battling"
  }
  }
  faint(a){
    if(a<=0){
        return true
    }
  }

  nextPokemon(){
    let enemyTeamLength = this.enemyTeam.length-1
    let ind = Math.round(random(0,enemyTeamLength))
    if(this.enemyTeam[ind].currentHP<1){
        ind = Math.round(random(0,enemyTeamLength))
    }
    return ind
  }

}

