import { Component ,Input,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() posturl=''
  @Output() imgSelected=new EventEmitter<string>()
}
