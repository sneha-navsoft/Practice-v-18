import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { concat, filter, fromEvent, interval, map, Observable, of, tap, timer } from 'rxjs';
import { NAPipe } from '../CustomPipe/na.pipe';
import { DirectorService } from '../services/director.service';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [AsyncPipe, DatePipe, NAPipe, JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss',
})
export class PipeComponent implements OnInit {
  currentTime: Observable<Date> = new Observable<Date>();
  showRole: any = '';
  resourceData: any[] = [];
  filterResourceData: any[] = [];
  constructor(private directorservice: DirectorService) {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
    this.directorservice.onRoleChange$.subscribe((res: any) => {
      this.showRole = res;
    });
  }
  ngOnInit(): void {
    const intervals$ = interval(1000).subscribe((val) =>
      console.log('stream 1', val)
    );
    const timers$ = timer(3000, 1000).subscribe((val) =>
      console.log('stream 2', val)
    );
    setTimeout(() => timers$.unsubscribe(), 5000);
    setTimeout(() => intervals$.unsubscribe(), 5000);
    const click$ = fromEvent(document, 'click').subscribe((evt) =>
      console.log(evt)
    );
    this.directorservice
      .getData()
      .pipe(
        tap(() => console.log('http request executed')),
        map((res: any[]) => res.filter((x: any) => x.id % 2 != 0))
      )
      .subscribe({
        next: (res: any) => {
          this.resourceData = res;
          console.log('API Response:', this.resourceData);
        },
        error: (error) => {
          console.error('API Error:', error);
        },
      });
      const source1$ = of(1,2,3);
      const source2$ = of(4,5,6);
      const source3$ = of(7,8,9);
      const result$ = concat(source1$,source2$,source3$).subscribe((res)=> console.log(res));
    
  }
  student: any = {
    state: 'West Bengal',
  };
}
