import { AsyncPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NAPipe } from '../CustomPipe/na.pipe';
import { DirectorService } from '../services/director.service';


@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [AsyncPipe,DatePipe,NAPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {
currentTime:Observable<Date> = new Observable<Date>;
showRole:any="";
constructor(private directorservice:DirectorService){
  this.currentTime = interval(1000).pipe(map(()=> new Date()));
  this.directorservice.onRoleChange$.subscribe((res:any)=>{
   this.showRole= res
  })
}
student:any={
  state:"West Bengal"
}
}
