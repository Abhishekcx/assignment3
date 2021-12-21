import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { BankComponent } from './bank/bank.component';
import { CalculateComponent } from './calculate/calculate.component';
import { StuComponent } from './sdat/stu.component';
import { LOGComponent } from './log/log.component';
import { FormsModule } from '@angular/forms';
import { ForComponent } from './for/for.component';
import { ProductComponent } from './product/product.component';
import { DivisionPipe } from './division.pipe';
import { StrformatPipe } from './strformat.pipe';
import { RepeatPipe } from './repeat.pipe';
import { WordPipe } from './word.pipe';





@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    BankComponent,
    CalculateComponent ,
    StuComponent,
    LOGComponent,
    ForComponent,
    ProductComponent,
    DivisionPipe,
    StrformatPipe,
    RepeatPipe,
    WordPipe
 
    // <- include GreetComponent in declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }