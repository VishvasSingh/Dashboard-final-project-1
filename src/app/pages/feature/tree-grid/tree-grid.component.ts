import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridModule } from '@nebular/theme';
import { FsIconComponent } from '../fsicon/fs-icon.component';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
}

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss', ],
  standalone: true,
  imports: [NbCardModule, NbInputModule, NbTreeGridModule, CommonModule, FsIconComponent]
})
export class TreeGridComponent {
  customColumn = 'name';
  defaultColumns = [ 'size', 'kind', 'items' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string = '';
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
    },
    {
      data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
      children: [
        {
          data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
          children: [
            { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
          ],
        },
        {
          data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
          children: [
            { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
            { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
          ],
        },
      ],
    },
    {
      data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
      children: [
        { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
        { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
      ],
    },
    {
        data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
        children: [
          { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
          { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
        ],
      },
      {
        data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
        children: [
          { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
          { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
        ],
      },
      {
        data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
        children: [
          { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
          { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
        ],
      },
      {
        data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
        children: [
          { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
          { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
        ],
      },
      {
        data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
        children: [
          { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
          { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
        ],
      },
      {
        data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
        children: [
          { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
          { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
        ],
      },
      {
        data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
        children: [
          { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
          { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
        ],
      },
      {
        data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
        children: [
          { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
          { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
        ],
      },
      {
        data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
        children: [
          { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
          { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
        ],
      },
      {
        data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
        children: [
          { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
          { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
        ],
      },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}
