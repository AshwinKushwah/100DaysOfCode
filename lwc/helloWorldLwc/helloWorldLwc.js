import { LightningElement } from 'lwc';
import backgroundUrl from '@salesforce/resourceUrl/image1';


export default class HelloWorldLwc extends LightningElement {
  greeting = 'World';
  salesForceImage = backgroundUrl;
  
  changeHandler(evt){
    this.greeting = evt.target.value;
    
  }
}