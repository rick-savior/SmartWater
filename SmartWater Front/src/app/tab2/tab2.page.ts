import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  exibir1:boolean=false
  exibir2:boolean=false
  exibir3:boolean=false
  exibir4:boolean=false
  
  ligada1(){
    alert("ABRINDO VALVULA DO TANQUE")
    if (this.exibir1=false) {
      this.exibir1=false
    } else { this.exibir2=true
      
    }
  }
  desligada1(){
    alert("FECHANDO VALVULA DO TANQUE")
    if (this.exibir2=false) {
      this.exibir2=false
    } else {this.exibir1=true
      
    }
  }
  ligada2(){
    alert("ABRINDO VALVULA SAIDA")
    if (this.exibir3=false) {
      this.exibir3=false
    } else { this.exibir4=true
      
    }
  }
  desligada2(){
    alert("FECHANDO VALVULA DO SAIDA")
    if (this.exibir4=false) {
      this.exibir4=false
    } else {this.exibir3=true
      
    }
  }
  constructor() {}

}
