import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-serction-header',
  templateUrl: './serction-header.component.html',
  styleUrls: ['./serction-header.component.scss']
})
export class SerctionHeaderComponent implements OnInit {
  breadcrumb$: Observable<any[]>

  constructor(private bcService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumb$ = this.bcService.breadcrumbs$;
  }

}
