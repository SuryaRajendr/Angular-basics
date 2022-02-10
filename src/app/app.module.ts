import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { FormsModule } from '@angular/forms';
import { Child2Component } from './child2/child2.component';
import { ColorDirective } from './color.directive';
//imports

@NgModule({//decorators
  declarations: [//have to add every component
    AppComponent, Child1Component, Child2Component, ColorDirective
  ],
  imports: [//need to add every component above added(textbox x)
    BrowserModule,
    AppRoutingModule,//routing
    FormsModule
  ],
  providers: [],//shared file
  bootstrap: [AppComponent]//entry refer main.ts
})
export class AppModule { }
