import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BinaryPipePipe } from './binary-pipe.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';

@NgModule({
  declarations: [AppComponent, CustomPipeComponent, BinaryPipePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
