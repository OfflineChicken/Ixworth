import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner/planner.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'planner', component: PlannerComponent },
  { path: 'welcome', component: AppComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
