import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable, Subject, filter } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private projectName$: Subject<string> = new Subject();
  private showMainPage$: Subject<boolean> = new Subject();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateHeader();
      });
  }

  setProjectName(projectName: string) {
    this.projectName$.next(projectName);
  }

  getProjectName(): Observable<string> {
    return this.projectName$;
  }

  getMainPage() {
    return this.showMainPage$;
  }

  updateHeader() {
    const segments = this.router.url.split('/');
    if (
      segments.includes('project-dashboard') ||
      segments.includes('project-list')
    ) {
      this.showMainPage$.next(true);
    } else {
      this.showMainPage$.next(false);
    }
  }

  openProjectDashboard() {
    const currentRoute = this.router.routerState.snapshot.url;
    const basePath = currentRoute.split('/').slice(0, -1).join('/');
    this.router.navigate([basePath, 'project-dashboard']);
  }
}