import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { TabsComponent } from "./tabs/tabs.component";

const routes: Routes = [
  {
    path: 'first-entry',
    loadChildren: () => import('./first-entry/first-entry.module').then(m => m.FirstEntryPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('./home/home-page.module').then(m => m.HomePageModule)
          },
          {
            path: 'post',
            loadChildren: () => import('./home/post-info/post-info-page.module').then(m => m.PostInfoPageModule)
          }
        ],
      },
      {
        path: 'courses',
        children: [
          {
            path: '',
            loadChildren: () => import('./courses/courses-page.module').then(m => m.CoursesPageModule),
          },
          {
            path: ':id',
            loadChildren: () => import('./courses/course-details/course-details-page.module').then(m => m.CourseDetailsPageModule)
          }
        ]
      },
      {
        path: 'tests',
        children: [
          {
            path: '',
            loadChildren: () => import('./tests/tests-page.module').then(m => m.TestsPageModule)
          },
          {
            path: 'test',
            loadChildren: () => import('./tests/test/test-page.module').then(m => m.TestPageModule)
          }
        ],

      },
      {
        path: 'universities',
        loadChildren: () => import('./universities/universities-page.module').then(m => m.UniversitiesPageModule)
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () => import('./profile/profile-page.module').then(m => m.ProfilePageModule)
          },
          {
            path: 'user-courses',
            loadChildren: () => import('./profile/user-courses/user-courses.module').then(m => m.UserCoursesPageModule)
          },
          {
            path: 'buy-courses',
            loadChildren: () => import('./profile/buy-courses/buy-courses.module').then(m => m.BuyCoursesModule)
          },
          {
            path: 'edit-profile',
            loadChildren: () => import('./profile/edit-profile/edit-profile-page.module').then(m => m.EditProfilePageModule)
          },
          {
            path: 'statistic',
            loadChildren: () => import('./profile/user-statistic/user-statistic-page.module').then(m => m.UserStatisticPageModule)
          },
          {
            path: 'policy',
            loadChildren: () => import('./profile/policy/policy-page.module').then(m => m.PolicyPageModule)
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
