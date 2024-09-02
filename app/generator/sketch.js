import lilac from './breeds/lilac';
import daisy from './breeds/daisy';
import jasmine from './breeds/jasmine';
import lily from './breeds/lily';
import rose from './breeds/rose';
import orangeBlossom from './breeds/orangeblossom';
import daffodil from './breeds/daffodil';
import tallFlower from './breeds/tallflower';
import realrose from './breeds/realrose';
import roseopened from './breeds/roseopened';
import tuliprose from './breeds/tuliprose';
import fourpetalflower from './breeds/fourpetalflower';
import floppypoppy from './breeds/floppypoppy';
import brightflower from './breeds/brightflower';

function sketch (p) {


  p.setup = function() {
    p.createCanvas(400, 400);
    p.angleMode(p.DEGREES);
    p.noLoop();
  }

  p.draw = function (){
    const myRandom = p.random([0,1,2,3,4,5,6,7,8,9,10,11,12,13])
    if(myRandom === 0){
      daisy(p)
    }else if(myRandom === 1){
      lilac(p)
    } else if(myRandom === 2){
     jasmine(p)
    } else if(myRandom === 3){
     lily(p)
    } else if(myRandom === 4){
     rose(p)
    } else if(myRandom === 5){
     orangeBlossom(p)
    } else if(myRandom === 6){
     daffodil(p)
    } else if(myRandom === 7){
     realrose(p)
    } else if(myRandom === 8){
     roseopened(p)
    } else if(myRandom === 9){
     tuliprose(p)
    } else if(myRandom === 10){
     fourpetalflower(p)
    } else if(myRandom === 11){
     floppypoppy(p)
    } else if(myRandom === 12){
     brightflower(p)
    } else{
     tallFlower(p)
    }
    p.noLoop()
    const canvas = document.getElementsByTagName("canvas")[0];
    const dataURL = canvas.toDataURL({pixelRatio: 2}).toString(); //there should be a better way to transfer this over to the getshare
    canvas.setAttribute("data-uri", dataURL.toString());
  }

  // p.mouseReleased = function(){
  //   if(p.mouseX > 0 && p.mouseX< p.width && p.mouseY > 0 && p.mouseY < p.height){
  //     p.erase();
  //     p.push()
  //     p.rotate(0)
  //     p.translate(0,0)
  //     p.rect(0,0, p.width, p.height);
  //     p.pop()
  //     p.noErase();
  //     p.redraw();
  //   }
  // }

};


export default sketch