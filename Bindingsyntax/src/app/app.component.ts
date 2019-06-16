import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // @ts-ignore
    @ViewChild('bindingInput', {static: false}) bindingInput: ElementRef;
  title = 'Binding syntax';
    isUnchanged = true;
    itemImageUrl = '../download.png';
    getHTMLAttributeValue(): any {
        console.warn('html attribute value:', this.bindingInput.nativeElement.getAttribute('value'));

    }

    getDOMPropertyValue(): any {
        console.warn('DOM property Value:', this.bindingInput.nativeElement.value);
    }

    working() {
        console.warn('Test Button works!');

    }

    toggleDisabled() {
const testButton = document.getElementById('testButton') as HTMLInputElement;
testButton.disabled = !testButton.disabled; this.isUnchanged = !this.isUnchanged;
console.warn(testButton.disabled); }}
