import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'loginpage',
    loadChildren: () =>
      import('./loginpage/loginpage.module').then((m) => m.LoginpagePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'infinitescrolla',
    loadChildren: () =>
      import('./infinitescrolla/infinitescrolla.module').then(
        (m) => m.InfinitescrollaPageModule
      ),
  },
  {
    path: 'apitester',
    loadChildren: () =>
      import('./apitester/apitester.module').then((m) => m.ApitesterPageModule),
  },
  {
    path: 'quiz',
    loadChildren: () =>
      import('./quiz/quiz.module').then((m) => m.QuizPageModule),
  },
  {
    path: 'juegodememoria',
    loadChildren: () =>
      import('./juegodememoria/juegodememoria.module').then(
        (m) => m.JuegodememoriaPageModule
      ),
  },
  {
    path: 'calculadora',
    loadChildren: () =>
      import('./calculadora/calculadora.module').then(
        (m) => m.CalculadoraPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }