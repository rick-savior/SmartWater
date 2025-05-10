import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

exibir1:boolean=false
exibir2:boolean=false
exibir3:boolean=false
exibir4:boolean=false

ligada1(){
  alert("BOMBA 1 LIGADA")
  if (this.exibir1=false) {
    this.exibir1=false
  } else { this.exibir2=true
    
  }
}
desligada1(){
  alert("BOMBA 1 DESLIGADA")
  if (this.exibir2=false) {
    this.exibir2=false
  } else {this.exibir1=true
    
  }
}
ligada2(){
  alert("BOMBA 2 LIGADA")
  if (this.exibir3=false) {
    this.exibir3=false
  } else { this.exibir4=true
    
  }
}
desligada2(){
  alert("BOMBA 2 DESLIGADA")
  if (this.exibir4=false) {
    this.exibir4=false
  } else {this.exibir3=true
    
  }
}

  constructor() {}
  
}
