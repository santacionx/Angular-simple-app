import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  styleExp: string = 'italic'; 
  isClicked = false;
  toggleFontStyle() {
    this.styleExp = (this.styleExp === 'italic') ? 'normal' : 'italic';
  }

  toggleClicked() {
    this.isClicked = !this.isClicked;
  }
  title = 'myapp';
  imgurl="https://picsum.photos/200"
  images=[
    "https://picsum.photos/200",
    "https://picsum.photos/201",
    "https://picsum.photos/202"
  ]
  getTitle(){
    return this.title;
  }
  changeImage(e:KeyboardEvent){
    this.imgurl=(e.target as HTMLInputElement).value
  }
  logImg(event:string){
    console.log(event)
  }
 
}
