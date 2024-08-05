import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParrentComponent } from './parrent/parrent.component';
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './gaurd/auth.guard';
import { AboutComponent } from './it/about/about.component';
import { HodComponent } from './it/hod/hod.component';
import { FacultyComponent } from './it/faculty/faculty.component';
import { CoursesComponent } from './it/courses/courses.component';
import { AnouncementsComponent } from './it/anouncements/anouncements.component';
import { InfraComponent } from './it/infra/infra.component';
import { TestimonialsComponent } from './it/testimonials/testimonials.component';
import { StudentClubsComponent } from './it/student-clubs/student-clubs.component';
import { ResearchComponent } from './it/research/research.component';
import { AchievementComponent } from './it/achievement/achievement.component';
import { AchedmicComponent } from './it/achedmic/achedmic.component';
import { ImportantLinksComponent } from './it/important-links/important-links.component';
import { GalleryComponent } from './it/gallery/gallery.component';
import { ResultComponent } from './result/result.component';
import { DepartmentLoginComponent } from './department-login/department-login.component';
import { PaymentComponent } from './payment/payment.component';
import { AngularBotComponent } from './angular-bot/angular-bot/angular-bot.component';
import { NoticeComponent } from './notice/notice.component';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'view-more', component: ParrentComponent },
{ path: 'registration', component:RegistrationFormComponent,canActivate:[AuthGuard] },
{ path: 'login', component:LoginComponent },
{ path: 'anouncement', component:AnouncementsComponent },
{ path: 'about', component:AboutComponent },
{ path: 'hod', component:HodComponent },
{ path: 'faculty', component:FacultyComponent },
{ path: 'course', component:CoursesComponent },
{ path: 'infra', component:InfraComponent },
{ path: 'testimonials', component:TestimonialsComponent },
{ path: 'student-club', component:StudentClubsComponent },
{ path: 'research', component:ResearchComponent },
{ path: 'achievement', component:AchievementComponent },
{ path: 'acedmic', component:AchedmicComponent },
{ path: 'important', component:ImportantLinksComponent },
{ path: 'gallary', component:GalleryComponent },
{path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
{path:'result',component:ResultComponent},
{path:'departLogin', component:DepartmentLoginComponent},
{path:'payment', component:PaymentComponent},
{path:'bot',component:AngularBotComponent},
{path:'notice',component:NoticeComponent,canActivate:[AuthGuard]},
{path:'upload-result',component:UploadResultComponent,canActivate:[AuthGuard]},
{path: 'exam-paper', component: ExamPaperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
