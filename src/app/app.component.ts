import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   display: string = '';
    result: string = '';
  
    append(char: string): void {
      this.display += char;
    }
  
    clear(): void {
      this.display = '';
      this.result = '';
    }
  
    deleteLast(): void {
      this.display = this.display.slice(0, -1);
    }
  
    calculate(): void {
      try {
        this.result = evaluate(this.display);
      } catch (e) {
        this.result = 'Error';
      }
    }

}
