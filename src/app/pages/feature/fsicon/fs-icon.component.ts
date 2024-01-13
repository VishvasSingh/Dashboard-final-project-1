import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { NbTreeGridModule, NbIconModule } from "@nebular/theme";

@Component({
    selector: 'nb-fs-icon',
    styleUrls: ['./fs-icon.component.scss'],
    template: `
      <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
      </nb-tree-grid-row-toggle>
      <ng-template #fileIcon>
        <nb-icon icon="file-text-outline"></nb-icon>
      </ng-template>
    `,
    standalone: true,
    imports: [CommonModule, NbTreeGridModule, NbIconModule]
  })
  export class FsIconComponent {
    @Input() kind: string = '';
    @Input() expanded: boolean = false;
  
    isDir(): boolean {
      return this.kind === 'dir';
    }
  }
