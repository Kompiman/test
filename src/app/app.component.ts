import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import { $ } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cobapdf';
  
  public name = "";
  public dob = "";
  public address = "";

  downloadPDF(){
    console.log('downloading pdf...');
    console.log(`${this.name}`);
    console.log(`${this.dob}`);
    console.log(`${this.address}`);
    
    const imgData ='C:\Users\User-PC\test\src\assets\img\download.jpg'
    const doc = new jsPDF();
    
    doc.setFont('times')
    doc.setFontSize(10)

    doc.addImage(imgData, 'jpg', 15, 20, 10, 35)
    doc.text(`The name that your parent choose = ${this.name}`, 15, 15);
    doc.text(`The date you born = ${this.dob}`, 15, 35);
    doc.text(`Where do you live = ${this.address}`, 15, 55);
    
    doc.save('first.pdf');
  }
}
