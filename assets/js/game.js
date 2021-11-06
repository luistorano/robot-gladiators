var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 55;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

// Enemy Information
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack, enemyHealth);


var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
  //Enemy and Player health calculation
    enemyHealth = enemyHealth - playerAttack;
    console.log(enemyHealth);

    playerHealth = playerHealth - enemyAttack;
    console.log(playerHealth);

    // Enemy Damage Total
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " +  enemyHealth + " health remaining");

    // Check Enemy's Health
    if (enemyHealth <=0) {
        window.alert(enemyName + " had died!")
    }

    else {
        window.alert(enemyName + " still has " + enemyHealth + " heatlh left.");
    }

    // Player Damage Total
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    if (playerHealth <=0) {
        window.alert(playerName + " has died!")
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();
    