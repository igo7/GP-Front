import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignModule } from './material-design/material-design.module';

// common components
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { DocsComponent } from './docs/docs.component';
import { DocsButtonsComponent } from './docs/docs-buttons/docs-buttons.component';

import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

// books
import { BookService } from './books/book.service';
import { BookComponent } from './books/book/book.component';
import { BooksComponent } from './books/books.component';
import { BookCreateComponent } from './books/book-create/book-create.component';

// tanks
// import { TankService } from './tanks/tank.service';
// import { TankComponent } from './tanks/tank/tank.component';
// import { TanksComponent } from './tanks/tanks.component';
// import { TankCreateComponent } from './tanks/tank-create/tank-create.component';

// users
import { UserService } from './users/user.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './users/user-create/user-create.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'docs', component: DocsComponent },
  // books
  { path: 'books', component: BooksComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'book-create', component: BookCreateComponent },
  // tanks
  // { path: 'tanks', component: TanksComponent },
  // { path: 'tank/:id', component: TankComponent },
  // { path: 'tank-create', component: TankCreateComponent },
  // users
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'user-create', component: UserCreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFooterComponent,
    DocsComponent,
    DocsButtonsComponent,
    HomeComponent,
    AboutusComponent,
    // books
    BooksComponent,
    BookCreateComponent,
    BookComponent,
    // tanks
    // TanksComponent,
    // TankCreateComponent,
    // TankComponent,
    // users
    UserComponent,
    UsersComponent,
    UserCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BookService,
    // TankService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
