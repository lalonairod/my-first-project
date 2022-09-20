import { Component } from '@angular/core';
import { CharacterHp } from './models/character-hp.model';
import { Character } from './models/character.model';
import { Player } from './models/player.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  name : string = 'Mauricio';

  constructor(){
    this.argumentDestructuring();
  }

  firstExample(){

    //This is the example for the number, string and boolean variables
    console.log('Hola mundo');

    const TEST : number = 2;
    let testTwo : string = '2';
    let life : boolean = true;

    console.log(TEST);
    console.log(testTwo);
    console.log(life);

  }

  basicTypes(){

    //This is the example for the use of variables and numbers
    const VIDEO_GAME : string = 'Super Smash Bros. Ultimate';
    console.log(VIDEO_GAME);

    let characterName : string = 'Waluigi';
    console.log(characterName);

    let hp : number = 100;
    console.log(hp);

    let status : boolean;
    status = (hp <= 0 ) ? false : true;
    console.log(hp);

    //alt+96
    const TITLE : string = `Game: ${VIDEO_GAME}
    character: ${characterName}
    hp: ${hp}`;

    console.log(TITLE);
  }

  arrayAndObjects(){
    let SKILLS : string[] = ['punch', 'kick', 'damage', 'special mov'];
    console.log(SKILLS);

    let skillsTwo : number[] = [1,2,3,4,5];
    console.log(skillsTwo);

    const character : Character = {
      name: 'Waluigi',
      healthPoints : 100,
      live: true,
      skills : SKILLS
    }

    character.name = 'Mario';
    character.color = 'blue';

    console.log(character);
  }

  ifStatement(){
    let x : number = 20, y : number = 10;

    if(x > y){
      console.log('x es mayor a y');
    }
    else if (x < y) {
      console.log('x es menor a y');
    }
    else if(x == y){
      console.log('x es igual a y');
    }
    else{
      console.log('ninguna se cumple');
    }
  }

  switchStatement(){
    let a : number = 20, b : number = 15;

    switch(a - b){
      case 0:
        console.log('Result: 0');
        break;
      case 5:
        console.log('Result: 5');
        break;
      case 10:
          console.log('Result: 10');
          break;
      default:
        console.log('Result: NaN');
        break;
    }

  }

  whileStatement(){
    let counter : number = 1;

    while(counter <= 5){
      console.log('Ejecución número: ' +  counter);
      counter++;
    }

    let i : number = 1
    do {
      console.log('do Ejecución número: ' + i);
      i++;
    }while(i <=5);

  }

  forStatement(){
    let array : number[] = [10,20,30,40,50,60,70,80,90];
    
    for (const INDEX in array) {
      console.log(INDEX);
      console.log(array[INDEX]);
    }

    console.log('----------------------------------------');

    for (let i : number = 2; i < array.length; i += 3){
      console.log(i);
      console.log(array[i]);
    }

    console.log('----------------------------------------');

    array.forEach(function (value, index){
      if(value == 50){
        console.log(value);
        console.log(index);
      }
    });

    console.log('----------------------------------------');

    array.forEach(value =>
      console.log(this.name)
      );
  
  }

  tryCatchStatement(){

    try{
      throw "Se presento un error";
    }
    catch(e){
      console.log(e);
    }

  }

  basicFunctions(){

    function sumNumbers(a : number, b : number) : number {
      return a + b;
    }
    console.log(sumNumbers(2,5));

    const ARROW_NUM = (a : number, b : number) : number => {return a + b}
    console.log(ARROW_NUM(1,8));

    function multiplyNumbers(a : number, b : number, c? : number) : number {
      return a * b * (c ?? 1);
    }
    console.log(multiplyNumbers(2,2));

    function printNumber(a : number) {
      console.log(a);
    }
    printNumber(8);
  }

  healthCharacter(character : Character){
    character.healthPoints = 100;
  }

  otherFunctions(){
    let character : CharacterHp ={
      name : 'Mario',
      live : true,
      healthPoints : 50,
      skills : ['punch', 'kick', 'damage', 'special mov'],
      color : 'Rojo',
      showHp() {
        console.log('Puntos de vida: ' + this.healthPoints);
      },
    };

    character.showHp();
    this.healthCharacter(character);
    character.showHp();
  }

  basicDestructuring(){
    const CURRENT_SONG : Player = {
      volume : 90,
      second : 36,
      name : 'La Cucaracha',
      detail : {
        author : 'Fernán Caballero',
        year : 1818
      }
    }

    let author : string = 'Juan Gómez';

    const {volume, second, name : SONG_NAME, detail } = CURRENT_SONG;
    const { author : detailAuthor } = detail;

    console.log('El volumen es de: ', volume);
    console.log('El segundo actual es: ', second);
    console.log('La canción es: ', SONG_NAME);
    console.log('El autor es: ', detailAuthor);
  }

  arrayDestructuring(){
    const AVENGERS : string[] = ['Capitán América', 'Iron Man', 'Viuda Negra', 'Thor', 'Hulk'];
    const [ p1, p2, p3, p4, p5 ] = AVENGERS;

    console.log('El primer avenger es: ' + p1);
    console.log('El segundo avenger es: ' + p2);
    console.log('El tercer avenger es: ' + p3);
    console.log('El cuarto avenger es: ' + p4);
    console.log('El quinto avenger es: ' + p5);
  }

  argumentDestructuring(){
    const phone : Product = {
      description : 'iPhone 14 Pro Max',
      price : 59999
    }

    const tablet : Product = {
      description : 'Galaxy Tab S8 Ultra',
      price : 24999
    }

    function calcTaxes(products : Product[]): [number, number]{
      let total = 0;

      products.forEach(product => {
        total += product.price
      })

      return [total, total * 1.16];
    }

    const CAR_ITEMS : Product[] = [phone, tablet];
    console.table(CAR_ITEMS);

    const [cartPrice, carTaxes] = calcTaxes(CAR_ITEMS);
    console.log('Total: ' + cartPrice);
    console.log('Total más impuestos: ' + carTaxes);

  }

}
