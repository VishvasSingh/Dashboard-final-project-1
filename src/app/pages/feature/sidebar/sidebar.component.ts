import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NbMenuItem, NbMenuModule } from "@nebular/theme";
import { ThemeModule } from "src/@theme/theme.module";

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  standalone: true,
  styleUrls: ['sidebar.component.scss'],
  imports: [NbMenuModule, ThemeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() menuItems: NbMenuItem[] = [];
  menu: NbMenuItem[] = [];
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    console.log(this.menuItems);
    this.menu = this.menuItems;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['menuItems']) {
      // Handle changes to menuItems here
      console.log('Menu items changed:', this.menuItems);

      // Manually trigger change detection
      this.cdr.detectChanges();
    }
  }
}
