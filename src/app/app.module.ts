import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DistrictComponent } from './district/district.component';
import { AlappuzhaComponent } from './alappuzha/alappuzha.component';
import { ErnamkulamComponent } from './ernamkulam/ernamkulam.component';
import { IdukkiComponent } from './idukki/idukki.component';
import { KannurComponent } from './kannur/kannur.component';
import { KasaragodComponent } from './kasaragod/kasaragod.component';
import { KollamComponent } from './kollam/kollam.component';
import { KottayamComponent } from './kottayam/kottayam.component';
import { KozhikodeComponent } from './kozhikode/kozhikode.component';
import { MalappuramComponent } from './malappuram/malappuram.component';
import { PalakkadComponent } from './palakkad/palakkad.component';
import { PathanamthittaComponent } from './pathanamthitta/pathanamthitta.component';
import { ThiruvanthapuramComponent } from './thiruvanthapuram/thiruvanthapuram.component';
import { ThrissurComponent } from './thrissur/thrissur.component';
import { TripthrissurComponent } from './tripthrissur/tripthrissur.component';
import { WayanadComponent } from './wayanad/wayanad.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Plan1thrissurComponent } from './plan1thrissur/plan1thrissur.component';
import { Plan2thrissurComponent } from './plan2thrissur/plan2thrissur.component';
import { TripplakkadComponent } from './tripplakkad/tripplakkad.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PostService } from './services/post.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { MypostsComponent } from './posts/myposts/myposts.component';
import { CreateProfileComponent } from './profile/create-profile/create-profile.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TripthiruvanthapuramComponent } from './tripthiruvanthapuram/tripthiruvanthapuram.component';
import { TripkollamComponent } from './tripkollam/tripkollam.component';
import { TrippathanamthittaComponent } from './trippathanamthitta/trippathanamthitta.component';
import { TripkottayamComponent } from './tripkottayam/tripkottayam.component';
import { TripalappuzhaComponent } from './tripalappuzha/tripalappuzha.component';
import { TripidukkiComponent } from './tripidukki/tripidukki.component';
import { TripernakulamComponent } from './tripernakulam/tripernakulam.component';
import { TripkozhikodeComponent } from './tripkozhikode/tripkozhikode.component';
import { TripmalappuramComponent } from './tripmalappuram/tripmalappuram.component';
import { TripkasaragodComponent } from './tripkasaragod/tripkasaragod.component';
import { TripwayanadComponent } from './tripwayanad/tripwayanad.component';
import { TripkannurComponent } from './tripkannur/tripkannur.component';
import { Plan3thrissurComponent } from './plan3thrissur/plan3thrissur.component';
import { Plan1thiruvanthapuramComponent } from './plan1thiruvanthapuram/plan1thiruvanthapuram.component';
import { Plan2thiruvanthapuramComponent } from './plan2thiruvanthapuram/plan2thiruvanthapuram.component';
import { Plan3thiruvanthapuramComponent } from './plan3thiruvanthapuram/plan3thiruvanthapuram.component';
import { Plan1wayanadComponent } from './plan1wayanad/plan1wayanad.component';
import { Plan2wayanadComponent } from './plan2wayanad/plan2wayanad.component';
import { Plan3wayanadComponent } from './plan3wayanad/plan3wayanad.component';
import { Plan1pathanamthittaComponent } from './plan1pathanamthitta/plan1pathanamthitta.component';
import { Plan2pathanamthittaComponent } from './plan2pathanamthitta/plan2pathanamthitta.component';
import { Plan3pathanamthittaComponent } from './plan3pathanamthitta/plan3pathanamthitta.component';
import { Plan1kollamComponent } from './plan1kollam/plan1kollam.component';

import { Plan3kollamComponent } from './plan3kollam/plan3kollam.component';
import { Plan2kollamComponent } from './plan2kollam/plan2kollam.component';
import { Plan1alappuzhaComponent } from './plan1alappuzha/plan1alappuzha.component';
import { Plan2alappuzhaComponent } from './plan2alappuzha/plan2alappuzha.component';
import { Plan3alappuzhaComponent } from './plan3alappuzha/plan3alappuzha.component';
import { Plan1kottayamComponent } from './plan1kottayam/plan1kottayam.component';
import { Plan2kottayamComponent } from './plan2kottayam/plan2kottayam.component';
import { Plan3kottayamComponent } from './plan3kottayam/plan3kottayam.component';
import { Plan1idukkiComponent } from './plan1idukki/plan1idukki.component';
import { Plan2idukkiComponent } from './plan2idukki/plan2idukki.component';
import { Plan3idukkiComponent } from './plan3idukki/plan3idukki.component';
import { Plan1ernakulamComponent } from './plan1ernakulam/plan1ernakulam.component';
import { Plan2ernakulamComponent } from './plan2ernakulam/plan2ernakulam.component';
import { Plan3ernakulamComponent } from './plan3ernakulam/plan3ernakulam.component';
import { Plan1kozhikodeComponent } from './plan1kozhikode/plan1kozhikode.component';
import { Plan2kozhikodeComponent } from './plan2kozhikode/plan2kozhikode.component';
import { Plan3kozhikodeComponent } from './plan3kozhikode/plan3kozhikode.component';
import { Plan1malappuramComponent } from './plan1malappuram/plan1malappuram.component';
import { Plan2malappuramComponent } from './plan2malappuram/plan2malappuram.component';
import { Plan3malappuramComponent } from './plan3malappuram/plan3malappuram.component';
import { Plan1palakkadComponent } from './plan1palakkad/plan1palakkad.component';
import { Plan2palakkadComponent } from './plan2palakkad/plan2palakkad.component';
import { Plan3palakkadComponent } from './plan3palakkad/plan3palakkad.component';
import { Plan1kasaragodComponent } from './plan1kasaragod/plan1kasaragod.component';
import { Plan2kasaragodComponent } from './plan2kasaragod/plan2kasaragod.component';
import { Plan3kasaragodComponent } from './plan3kasaragod/plan3kasaragod.component';
import { Plan1kannurComponent } from './plan1kannur/plan1kannur.component';
import { Plan2kannurComponent } from './plan2kannur/plan2kannur.component';
import { Plan3kannurComponent } from './plan3kannur/plan3kannur.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DistrictComponent,
    AlappuzhaComponent,
    ErnamkulamComponent,
    IdukkiComponent,
    KannurComponent,
    KasaragodComponent,
    KollamComponent,
    KottayamComponent,
    KozhikodeComponent,
    MalappuramComponent,
    PalakkadComponent,
    PathanamthittaComponent,
    ThiruvanthapuramComponent,
    ThrissurComponent,
    WayanadComponent,
    Plan2thrissurComponent,
    TripplakkadComponent,
    HomeComponent,
    TripthrissurComponent,
    PlanComponent,
    Plan1thrissurComponent,
    PostListComponent,
    CreatePostComponent,
    SpinnerComponent,
    PostDetailComponent,
    LoginComponent,
    MypostsComponent,
    CreateProfileComponent,
    ViewProfileComponent,
    TripthiruvanthapuramComponent,
    TripkollamComponent,
    TrippathanamthittaComponent,
    TripkottayamComponent,
    TripalappuzhaComponent,
    TripidukkiComponent,
    TripernakulamComponent,
    TripkozhikodeComponent,
    TripmalappuramComponent,
    TripkasaragodComponent,
    TripwayanadComponent,
    TripkannurComponent,
    Plan3thrissurComponent,
    Plan1thiruvanthapuramComponent,
    Plan2thiruvanthapuramComponent,
    Plan3thiruvanthapuramComponent,
    Plan1wayanadComponent,
    Plan2wayanadComponent,
    Plan3wayanadComponent,
    Plan1pathanamthittaComponent,
    Plan2pathanamthittaComponent,
    Plan3pathanamthittaComponent,
    Plan1kollamComponent,
    
    Plan3kollamComponent,
    
    Plan2kollamComponent,
    
    Plan1alappuzhaComponent,
    
    Plan2alappuzhaComponent,
    
    Plan3alappuzhaComponent,
    
    Plan1kottayamComponent,
    
    Plan2kottayamComponent,
    
    Plan3kottayamComponent,
    
    Plan1idukkiComponent,
    
    Plan2idukkiComponent,
    
    Plan3idukkiComponent,
    
    Plan1ernakulamComponent,
    
    Plan2ernakulamComponent,
    
    Plan3ernakulamComponent,
    
    Plan1kozhikodeComponent,
    
    Plan2kozhikodeComponent,
    
    Plan3kozhikodeComponent,
    
    Plan1malappuramComponent,
    
    Plan2malappuramComponent,
    
    Plan3malappuramComponent,
    
    Plan1palakkadComponent,
    
    Plan2palakkadComponent,
    
    Plan3palakkadComponent,
    
    Plan1kasaragodComponent,
    
    Plan2kasaragodComponent,
    
    Plan3kasaragodComponent,
    
    Plan1kannurComponent,
    
    Plan2kannurComponent,
    
    Plan3kannurComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService,
    AuthService,AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
