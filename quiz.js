class quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

async start(){
    if(gameState === 0){
      contestant = new contestant ();
     
      var contestantCountRef = await database.ref('contestantCount').once("value");

      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new question()
      question.display();
    }
}}