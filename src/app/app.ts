import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloService } from './hello.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'playschoolApp';
  public helloResponse = '';
  public response: string | null = null;


  constructor(private helloService: HelloService, private cd: ChangeDetectorRef) {}

  sendValue() {
      this.helloService.sendMessage('Hello from Angular').subscribe({
          next: res => {
            this.response = null;
            setTimeout(() => this.response = res, 0);
            this.cd.detectChanges(); // 🔧 force UI update
          },
          error: err => {
            this.response = 'Error: ' + (err.message || 'Unknown error');
            this.cd.detectChanges();
          }
      });
      }
}
