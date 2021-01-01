import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingIteration extends LightningElement {

  @track
  displayDiv = false;

  cityList=['Jaipur', 'Banglore', 'Hyderabad','Indore'];

  showDivHandler(evt){
    this.displayDiv = evt.target.checked;
  }

}