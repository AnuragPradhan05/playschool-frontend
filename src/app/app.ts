import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloService } from './hello.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'playschoolApp';
  public helloResponse: string | null = null;

  constructor(private helloService: HelloService) {}

  onHelloClick() {
    this.helloService.hello().subscribe({
      next: (res) => {
        console.log("Response:", res);
        this.helloResponse = res;
      },
      error: (err) => this.helloResponse = 'Error: ' + (err?.message || 'Unknown error')
    });
  }
}
