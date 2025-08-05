import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorService } from 'src/app/services/director.service';

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
}
