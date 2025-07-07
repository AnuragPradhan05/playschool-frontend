import { Component } from '@angular/core';
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
  response: string = '';

  constructor(private helloService: HelloService) {}

  sendValue() {
      this.helloService.sendMessage('Hello from Angular').subscribe({
        next: res => this.response = res,
        error: err => this.response = 'Error: ' + (err.message || 'Unknown error')
      });
      }
}
