import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allUsers;
  searchcusttext:any;
  constructor(private http: HttpClient,public translate: TranslateService,private languageService: LanguageService) { }
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.users();
    this.loadGRIDDATA('en');
    this.languageService.language$.subscribe((language) => {
      // When the language changes, load data in the new language.
      this.loadGRIDDATA(language);
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  GRIDDATA;
  GRIDTITLE;
  GRIDHeader;
  users(): any {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response:any) => {
      console.log(response);
      this.allUsers = response;
    })
  }

  loadGRIDDATA(language: string) {
    this.translate.get('GRIDDATA', { lang: language }).subscribe((data: any) => {
      this.GRIDDATA = data;
    });
    this.translate.get('GridTitle', { lang: language }).subscribe((data: any) => {
      this.GRIDTITLE = data;
    });
    this.translate.get('GRIDHeader', { lang: language }).subscribe((data: any) => {
      this.GRIDHeader = data;
    });
  }

}
