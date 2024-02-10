import { Component, OnInit } from "@angular/core";
import { NbCardModule, NbSpinnerModule } from "@nebular/theme";
import * as AppSelectors from '../../../store/app.selectors'
import { Store, select } from "@ngrx/store";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    standalone: true,
    imports: [NbCardModule, NbSpinnerModule, CommonModule]

})


export class SpinnerComponent implements OnInit{
    loading = true
    showSpinner$: any
    constructor (private store: Store) {}

    ngOnInit(): void {
        this.showSpinner$ = this.store.pipe(
          select(AppSelectors.selectSpinnerShow)
        );
        this.showSpinner$.subscribe((data: any) => {
          this.loading = data;
        });
    }
    
}