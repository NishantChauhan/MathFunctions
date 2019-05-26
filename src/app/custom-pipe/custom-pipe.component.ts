import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css'],
})
export class CustomPipeComponent implements OnInit {
  decimalNumber: number;
  errorText: string;

  constructor() {}

  ngOnInit() {}
  validate(value: string) {
    let decimal: number;
    try {
      decimal = parseInt(value, 10);
      if (value && isNaN(decimal)) {
        throw new Error('Not a Number');
      } else if (value && decimal <= 0) {
        throw new Error('Number is less than or equal to 0');
      }
      this.errorText = '';
    } catch (error) {
      this.errorText = error;
    }
    /*
      To use Pipe inside component, Inject pipe's dependency to constructor variable and add  to providers in module.
      No need in order to use it in HTML directly

      constructor(private binaryPipe: BinaryPipePipe) {}  // In Component

      providers: [BinaryPipePipe], // In Module

      this.binaryPipe.transform(decimal); // Transformation

    */
  }
}
