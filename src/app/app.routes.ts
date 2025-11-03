import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Movie } from './movie/movie';
import { Profile } from './profile/profile';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'login', component: Login },
    { path: 'signup', component: Signup },
    { path: 'movie/:path', component: Movie },
    { path: 'profile', component: Profile },
    { path: '**', redirectTo: '' }
]
