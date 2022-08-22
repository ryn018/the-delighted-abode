import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { MypostsComponent } from './posts/myposts/myposts.component';
import { CreateProfileComponent } from './profile/create-profile/create-profile.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
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
import { WayanadComponent } from './wayanad/wayanad.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { TripthrissurComponent } from './tripthrissur/tripthrissur.component';
import { Plan1thrissurComponent } from './plan1thrissur/plan1thrissur.component';
import { TripplakkadComponent } from './tripplakkad/tripplakkad.component';
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
import { TripkannurComponent } from './tripkannur/tripkannur.component';
import { TripwayanadComponent } from './tripwayanad/tripwayanad.component';
import { Plan2thrissurComponent } from './plan2thrissur/plan2thrissur.component';
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
import { Plan1kozhikodeComponent } from './plan1kozhikode/plan1kozhikode.component';
import { Plan2kozhikodeComponent } from './plan2kozhikode/plan2kozhikode.component';
import { Plan3kozhikodeComponent } from './plan3kozhikode/plan3kozhikode.component';
import { Plan1ernakulamComponent } from './plan1ernakulam/plan1ernakulam.component';
import { Plan2ernakulamComponent } from './plan2ernakulam/plan2ernakulam.component';
import { Plan3ernakulamComponent } from './plan3ernakulam/plan3ernakulam.component';
import { Plan1malappuramComponent } from './plan1malappuram/plan1malappuram.component';
import { Plan2malappuramComponent } from './plan2malappuram/plan2malappuram.component';
import { Plan3malappuramComponent } from './plan3malappuram/plan3malappuram.component';
import { Plan1palakkadComponent } from './plan1palakkad/plan1palakkad.component';
import { Plan2palakkadComponent } from './plan2palakkad/plan2palakkad.component';
import { Plan3palakkadComponent } from './plan3palakkad/plan3palakkad.component';
import { Plan1kasaragodComponent } from './plan1kasaragod/plan1kasaragod.component';
import { Plan2kasaragodComponent } from './plan2kasaragod/plan2kasaragod.component';
import { Plan1kannurComponent } from './plan1kannur/plan1kannur.component';
import { Plan2kannurComponent } from './plan2kannur/plan2kannur.component';
import { Plan3kannurComponent } from './plan3kannur/plan3kannur.component';






const routes: Routes = [
  { path: 'review', component: PostListComponent },
  { path: 'district', component:DistrictComponent},
  { path: 'alappuzha', component:AlappuzhaComponent},
  { path: 'ernakulam', component:ErnamkulamComponent},
  { path: 'idukki', component:IdukkiComponent},
  { path: 'kannur', component:KannurComponent},
  { path: 'kasaragod', component:KasaragodComponent},
  { path: 'kollam', component:KollamComponent},
  { path: 'kottayam', component:KottayamComponent},
  { path: 'kozhikode', component:KozhikodeComponent},
  { path: 'malappuram', component:MalappuramComponent},
  { path: 'palakkad', component:PalakkadComponent},
  { path: 'plan' , component:PlanComponent},
  { path: 'tripthrissur' , component:TripthrissurComponent},
  { path: 'plan3thrissur', component:Plan3thrissurComponent},
  { path: 'planthrissur',component:Plan1thrissurComponent},
  { path: 'trippalakkad', component:TripplakkadComponent},
  { path: 'plan1thiruvanthapuram', component:Plan1thiruvanthapuramComponent},
  { path: 'plan2thiruvanthapuram', component:Plan2thiruvanthapuramComponent},
  { path: 'plan3thiruvanathapuram', component:Plan3thiruvanthapuramComponent},
  { path: 'plan1wayanad', component:Plan1wayanadComponent},
  { path: 'plan2wayanad', component:Plan2wayanadComponent},
  { path: 'plan3wayanad', component:Plan3wayanadComponent},
  { path: 'plan1pathanamthitta', component:Plan1pathanamthittaComponent},
  { path: 'plan2pathanamthitta', component:Plan2pathanamthittaComponent},
  { path: 'plan3pathanamthitta', component:Plan3pathanamthittaComponent},
  { path: 'plan1kollam', component:Plan1kollamComponent},
  { path: 'plan2kollam', component:Plan2kollamComponent},
  { path: 'plan3kollam', component:Plan3kollamComponent},
  { path: 'plan1kottayam', component:Plan1kottayamComponent},
  { path: 'plan2kottayam', component:Plan2kottayamComponent},
  { path: 'plan3kottayam', component:Plan3kottayamComponent},
  { path: 'plan1idukki', component:Plan1idukkiComponent},
  { path: 'plan2idukki', component:Plan2idukkiComponent},
  { path: 'plan3idukki', component:Plan3idukkiComponent},
  { path: 'plan1kozhikode', component:Plan1kozhikodeComponent},
  { path: 'plan2kozhikode', component:Plan2kozhikodeComponent},
  { path: 'plan3kozhikode', component:Plan3kozhikodeComponent},
  { path: 'plan1ernakulam', component:Plan1ernakulamComponent},
  { path: 'plan2ernakulam', component:Plan2ernakulamComponent},
  { path: 'plan3ernakulam', component:Plan3ernakulamComponent},
  { path: 'plan1alappuzha', component:Plan1alappuzhaComponent},
  { path: 'plan2alappuzha', component:Plan2alappuzhaComponent},
  { path: 'plan3alappuzha', component:Plan3alappuzhaComponent},
  { path: 'plan1malappuram', component:Plan1malappuramComponent},
  { path: 'plan2malappuram', component:Plan2malappuramComponent},
  { path: 'plan3malappuram', component:Plan3malappuramComponent},
  { path: 'plan1palakkad', component:Plan1palakkadComponent},
  { path: 'plan2palakkad', component:Plan2palakkadComponent},
  { path: 'plan3palakkad', component:Plan3palakkadComponent},
  { path: 'plan2thrissur', component:Plan2thrissurComponent},
  { path: 'plan1kasaragod', component:Plan1kasaragodComponent},
  { path: 'plan2kasaragod', component:Plan2kasaragodComponent},
  { path: 'plan3kasaragod', component:Plan2kasaragodComponent},
  { path: 'plan1kannur', component:Plan1kannurComponent},
  { path: 'plan2kannur', component:Plan2kannurComponent},
  { path: 'plan3kannur', component:Plan3kannurComponent},
  { path: 'tripthiruvanthapuram', component:TripthiruvanthapuramComponent},
  { path: 'thiruvanthapuram', component:ThiruvanthapuramComponent},
  { path: 'trippathanmthitta', component:TrippathanamthittaComponent},
  { path: 'tripkottayam', component:TripkottayamComponent},
  { path: 'tripwayanad', component:TripwayanadComponent},
  { path: 'tripkannur', component:TripkannurComponent},
  { path: 'tripernakulam', component:TripernakulamComponent},
  { path: 'tripkozhikode', component:TripkozhikodeComponent},
  { path: 'tripkasaragod', component:TripkasaragodComponent},
  { path: 'tripmalappuram', component:TripmalappuramComponent},
  { path: 'thrissur', component:ThrissurComponent},
  { path: 'tripkollam', component:TripkollamComponent},
  { path: 'tripidukki', component:TripidukkiComponent},
  { path: 'tripalappuzha', component:TripalappuzhaComponent},
  { path: 'pathanamthitta', component:PathanamthittaComponent},
  { path: 'wayanad', component:WayanadComponent},
  { path: '', component:HomeComponent},
  { path: 'myposts', component: MypostsComponent ,canActivate: [AuthGuard]},
  { path: 'create', component: CreatePostComponent ,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'myposts/:postId', component: PostDetailComponent ,canActivate: [AuthGuard]},
  { path: 'myposts/edit/:postId', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: CreateProfileComponent,canActivate: [AuthGuard] },
  { path: 'public/:profileId', component: ViewProfileComponent },
  { path: 'profile/:profileId', component: ViewProfileComponent,canActivate: [AuthGuard]  },
  { path: 'profile/edit/:profileId', component: CreateProfileComponent,canActivate: [AuthGuard]  },
  { path: 'public/:profileId/posts/:postId', component: PostDetailComponent },
  { path: ':postId', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
