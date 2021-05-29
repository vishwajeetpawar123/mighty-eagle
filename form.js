class Form {

    constructor() {
    this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton('PLAY');
      this.button1= createButton('HOW TO PLAY');
      this.button2= createButton('unlimeted mode');
    this.title = createElement('h1');
    this.back = createButton('<<<<<')

  
    }
    hide(){
      this.button1.hide();
      this.button2.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
    enter() {
      this.title.hide();
      this.input.hide();
      this.button.hide();
      this.button1.hide();
      this.button2.hide();
  
  
      player.name = this.input.value();

    
    }
    display(){
      
      textAlign(CENTER);
      fill("green");
        textSize(100);
       //this.title.html
       text("MIGHTY EAGLE",windowWidth/2,windowHeight/2+100);
       textSize(40);
       text("THE MIGHT NEVER DIES:)",windowWidth/2,windowHeight/2+300)
     
  
      this.input.position(700, 700);
      this.button.position(760, 730);
      this.button1.position(730,760);
      this.button2.position(730,790);
      this.back.position(25,60);


      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.button1.hide();
        this.button2.hide();
        player.name = this.input.value();
        gameState=2
      });
      this.button1.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.button1.hide();
        this.button2.hide();
        //player.name = this.input.value();
        gameState=4
      });
      this.button2.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.button1.hide();
        this.button2.hide();
        gameState=5
      });

      this.back.mousePressed(()=>{
        gameState=1
      });

      
      

    }
  }
  