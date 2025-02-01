
import { Component,ViewEncapsulation, OnInit, Input, Renderer2, ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  // baseUrl= environment.chaturl;
  baseUrl;
  @Input() data:any;
  collapsed = true;
  public showAppAlert:boolean = false;
modalteam=false;
  public userName: string="";

  private formCode: string ='teacher_form';
  public key:string="formCode";
  public storage:Storage = sessionStorage;
  constructor(
    public translate: TranslateService,
    private languageService: LanguageService,
    private renderer: Renderer2, private el: ElementRef
  ) { 
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
  }
  user_name : any;
  userrole:any;
  menus:any[];
  menu:any;
  tourdata;
  steps;
  error;
  openSidebar: boolean = true;
  ngOnInit() {
    this.initializeSidebar();
    this.sidemenu('en');
    this.languageService.language$.subscribe((language) => {
      // When the language changes, load data in the new language.
      this.sidemenu(language);
    });
}


private initializeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");
  const menuIcon = document.querySelector(".menuIcon");
  const Submenu = document.querySelector(".collapse");

  const toggleSidebar = () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
  };

  sidebar.addEventListener("mouseenter", toggleSidebar);
  sidebar.addEventListener("mouseleave", toggleSidebar);

  const menuBtnChange = () => {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  };
}



showSubmenu(itemEl: HTMLElement) {
  itemEl.classList.toggle("showMenu");
}
// side nav menu-sub_menu
app
sidemenu(language: string) {
    this.translate.get('menus', { lang: language }).subscribe((data: any) => {
      this.menus = data;
    });
    this.translate.get('APPName', { lang: language }).subscribe((data: any) => {
      this.app = data;
    });
  }


/*  menuGroup: Rn_Menu_Group_Header[];
menu_id: number;
loadMenuGroupData() {
  this.menuGroupService.getAll().subscribe(resp => {
      this.menuGroup = resp;
      this.menu_id = this.menuGroup
  });
} */
///for all menu click
getMenuIdentifier(menuItemDesc: string): string {
  return menuItemDesc.replace(/\s+/g, '_').toLowerCase();
}

// Inside your component class
activeMenuId: string | null = null;

toggleCollapse(menuItemDesc: string) {
  const currentMenuId = this.getMenuIdentifier(menuItemDesc);
  this.activeMenuId = this.activeMenuId === currentMenuId ? null : currentMenuId;
}


navbarSelectionChange(val){
  // console.log(val);
}

closeAppAlert(){
  this.showAppAlert=false;
}

isDisabled(input: string): boolean{
  if(input === null) {
      return true;
  } else false;
}

  menuFlag = true;
  menuFlag1 = false;
  udata;
  uid;
  mc;
  me;
  md;
  mv;

  //skipLocationChange: true, value pass params->,queryParams:{mc:this.mc,me:this.me,md:this.md}
  Lang = 'en';
  Language = 'Language';

changeLang(lang) {
  this.translate.use(lang);
  this.Lang = lang;
  this.languageService.setLanguage(lang);
  if (lang === 'ar') {
    // If the selected language is Arabic ('ar'), add the RTL class
    this.renderer.addClass(this.el.nativeElement, 'rtl');
  } else {
    // Remove the RTL class for other languages
    this.renderer.removeClass(this.el.nativeElement, 'rtl');
  }
}
toggleLanguage() {
  const langToToggle = this.translate.currentLang === 'en' ? 'ar' : 'en';
  this.changeLang(langToToggle);
}
}
