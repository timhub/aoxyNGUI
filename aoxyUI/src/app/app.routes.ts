import {UserLoginComponent} from './user/user-login/user-login.component'
import {AppComponent} from './app.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {BreedingComponent} from './breeding/breeding.component'

export const appRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    // {
    //     path: 'home',
    //     component: AppComponent
    // },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'breeding',
        component: BreedingComponent
    }
];