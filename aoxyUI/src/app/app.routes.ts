import {UserLoginComponent} from './user/user-login/user-login.component'
import {AppComponent} from './app.component'

export const appRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'login',
        component: UserLoginComponent
    }
];