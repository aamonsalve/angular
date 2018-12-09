import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio/inicio.component';
import {NgxSpinnerModule} from 'ngx-spinner'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { PilotosComponent } from './paginas/pilotos/pilotos.component';
import { CircuitosComponent } from './paginas/circuitos/circuitos.component';

export const rootRouterConfig: Routes = [

  { path: '', component: InicioComponent },
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'circuito', component: CircuitosComponent, resolve: { data: UserResolver}  },
  { path: 'piloto', component: PilotosComponent, resolve: { data: UserResolver}},
  { path: 'registrar', component: RegisterComponent },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    PilotosComponent,
    CircuitosComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
