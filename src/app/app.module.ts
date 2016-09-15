import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    HttpModule
} from '@angular/http';
import {
    FormsModule
} from '@angular/forms';


import {
    AppComponent
} from './';
import {
    routing,
} from './routes/app.routes';
import {
    LogOutComponent
} from './shared/user/user.logout';
import {
    ListComponent
} from './shared/list/list.component';
import {
    InputComponent
} from './shared/list/input.component';
import {
    OrderByPipe
} from './pipes/app.orderbypipe';
import {
    SearchByPipe
} from './pipes/app.searchbypipe';
import {
    AuthGuard
} from './routes/auth-guard';
import {
    UserComponent
} from './shared/user/user.component';


@NgModule({
    declarations: [AppComponent, LogOutComponent, OrderByPipe, SearchByPipe, UserComponent,
                    ListComponent, InputComponent    ],    // directives, components, and pipes
    imports: [BrowserModule, HttpModule, FormsModule, routing], // module dependencies
    bootstrap: [AppComponent], // root Component
    providers: [AuthGuard] // service
})
export class AppModule {}