import { LightningElement } from 'lwc';

export default class LifecycleDemoParent extends LightningElement {
    
    show;

    constructor() {
        super();
        console.log("Parent's Constructor is Called");
        //You can have Dom Manipulation
        //Open data connnection kind of stuff
    }

    handleChange(event){
        this.show = event.detail.checked;
    }
    //First public properties get updated, then DOM is inserted 
    //and then connedctedCallback is called

    connectedCallback(){

        //Though here DOM is inserted, but not rendered, so you can change the attribute 
        //but you cannot manipulate the DOM 

        //You can not programatically add or remove the element 
        console.log("Parent's Component's Connected Callback is Called!");
    }

    renderedCallback() {

        //You can use this method to manipulate the DOM
        console.log("Parent Component's rendered Callback is Called!");
    }

    disconnectedCallback() {
        //You can use this method to free the resource
        console.log("Parent Component's disconnected Callback is Called!");
    }

}