import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ThemeModule } from 'src/@theme/theme.module';
import { NbDialogModule } from '@nebular/theme';

@NgModule({
  imports: [
    PagesRoutingModule,
    PagesComponent,
    ThemeModule,
    NbDialogModule.forChild()
  ],
  declarations: [],
})
export class PagesModule {}
