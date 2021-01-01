import { LightningElement } from 'lwc';

export default class PublicMethodChild extends LightningElement {

  value = ['red'];

  options = [
    {label: 'Red Marker', value: 'red'},
    {label: 'Blue Marker', value: 'blue'},
    {label: 'Green Marker', value: 'green'},
    {label: 'Black Marker', value: 'Black'}
  ];

  selectCheckbox(checkboxValue){

    const selectedCheckbox = this.options.find(checkbox => {
      return checkboxValue == checkbox.value;
    });

  }
}