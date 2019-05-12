
{var facts = []
facts[0] = "Animals that lay eggs don't have belly buttons.";
facts[1] ="Beavers can hold their breath for 45 minutes under water.";
facts[2] ="Slugs have four noses.";
facts[3] ="A honey bee can fly at 15mph.";
facts[4] ="A queen bee can lay 800-1,500 eggs per day.";
facts[5] ="A bee has five eyelids.";
facts[6] ="The average speed of a housefly is 4.5 mph.";

 function newFact() {

var randomNumber = Math.floor(Math.random() * facts.length);
document.getElementById('sfact').innerHTML=facts[randomNumber];


  }

}
