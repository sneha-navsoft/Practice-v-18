import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorService } from 'src/app/services/director.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(private directorservice:DirectorService){

}
onSelectRole(role:any){
this.directorservice.onRoleChange$.next(role);
console.log(role)
}
router=inject(Router);
onLogout(){
  localStorage.removeItem("loginUser");
  this.router.navigateByUrl('login')
}
}
