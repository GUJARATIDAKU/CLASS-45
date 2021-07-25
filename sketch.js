var form,form1;
var gameState = 0;

function preload() {


}

function setup(){
    createCanvas(1000,800);
    
form = new Form();
form1 = new Form1();

}

function draw() {

    background(255);
   
    if(gameState === 0){
        form.show();
        form.display();
        form1.hide();
    }
   if(gameState === 1){
       form.hide();
       form1.show();
       form1.display();
   }

     }





