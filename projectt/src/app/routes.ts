import { Routes } from '@angular/router';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';


export const routes: Routes = [

  /* Child Routing Modules to load with LazyLoading */
  {
    path: 'front',
    loadChildren: () => import('app/front/front.module').then(m => m.FrontModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('app/routes/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'ui',
        loadChildren: () => import('app/routes/components/components.module').then(m => m.ComponentsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('app/routes/charts/charts.module').then(m => m.ChartsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('app/routes/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'quizzes',
        loadChildren: () => import('app/routes/quizzes/quizzes.module').then(m => m.ProjectsModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('app/routes/forms/forms.module').then(m => m.FormsModule)
      },
      {
        path: 'user',
        loadChildren: () => import('app/routes/user/user.module').then(m => m.UserModule)
      },
  
      {
        path: 'shop',
        loadChildren: () => import('app/routes/shop/shop.module').then(m => m.ShopModule)
      },
    
      {
        path: 'pages',
        loadChildren: () => import('app/routes/pages/pages.module').then(m => m.PagesModule)
      },
     
      { path: '', redirectTo: '/front/login', pathMatch: 'full' },
      /* 404 Error Page */
      { path: '**', component: NotFoundComponent, }

    ]
  },

  /* Redirect Default Page to */
  { path: '', redirectTo: '/dashboard/pro', pathMatch: 'full' },

  /* 404 Error Page */
  { path: '**', component: NotFoundComponent, }


];
