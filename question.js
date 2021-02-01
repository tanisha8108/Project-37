class Form {

    constructor() {
      this.input = createInput("Enter Name");
      this.input1 = createInput("Enter Correct Option");
      this.questin = createElement('h2');
      this.title = createElement('h2');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
    }
    hide(){
        this.input.hide();
    }
    display(){
        this.title.html("My Quiz");
        this.title.position(350,0);

        this.question.html("Qustion:-What starts and ends with letter 'E', but has only one letter?");
        this.question.position(150,80)

        this.option1.html("1 : Everyone") 
        this.option1.position(150,100)

        this.option2.html("2 : Example") 
        this.option2.position(150,120)

        this.option3.html("3 : Envelope") 
        this.option3.position(150,140)

        this.option4.html("4 : Estimate") 
        this.option1.position(150,160)

        this.input.position(150,230)
        this.input1.position(180,230)

      }  
}