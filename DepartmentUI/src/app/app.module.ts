import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ParrentComponent } from './parrent/parrent.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { AuthService } from './services/auth.service';
import { AnouncementsComponent } from './it/anouncements/anouncements.component';
import { AboutComponent } from './it/about/about.component';
import { HodComponent } from './it/hod/hod.component';
import { CoursesComponent } from './it/courses/courses.component';
import { FacultyComponent } from './it/faculty/faculty.component';
import { InfraComponent } from './it/infra/infra.component';
import { AchievementComponent } from './it/achievement/achievement.component';
import { TestimonialsComponent } from './it/testimonials/testimonials.component';
import { ImportantLinksComponent } from './it/important-links/important-links.component';
import { StudentClubsComponent } from './it/student-clubs/student-clubs.component';
import { GalleryComponent } from './it/gallery/gallery.component';
import { HappeningsComponent } from './it/happenings/happenings.component';
import { ResearchComponent } from './it/research/research.component';
import { AchedmicComponent } from './it/achedmic/achedmic.component';
import { WhyIetComponent } from './why-iet/why-iet.component';
import { ResultComponent } from './result/result.component';
import { AdminComponent } from './admin/admin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DepartmentLoginComponent } from './department-login/department-login.component';
import { PaymentComponent } from './payment/payment.component';
import { AngularBotComponent } from './angular-bot/angular-bot/angular-bot.component';
import { NoticeComponent } from './notice/notice.component';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';  // Import MatIconModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SideBarComponent,
    ParrentComponent,
    RegistrationFormComponent,
    LoginComponent,
    DashboardComponent,
    AnouncementsComponent,
    AboutComponent,
    HodComponent,
    CoursesComponent,
    FacultyComponent,
    InfraComponent,
    AchievementComponent,
    TestimonialsComponent,
    ImportantLinksComponent,
    StudentClubsComponent,
    GalleryComponent,
    HappeningsComponent,
    ResearchComponent,
    AchedmicComponent,
    WhyIetComponent,
    ResultComponent,
    AdminComponent,
    DepartmentLoginComponent,
    PaymentComponent,
    AngularBotComponent,
    NoticeComponent,
    UploadResultComponent,
    ExamPaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule  // Add MatIconModule here
  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
