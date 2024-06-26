import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridModule } from '@nebular/theme';
import { FsIconComponent } from '../fsicon/fs-icon.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as authActions from 'src/app/auth/data-access/store/auth.actions';
import * as projectActions from 'src/app/pages/data-access/store/project-page/project-page.actions'

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  'Project Name' : string;
  size: string;
  kind: string;
  items?: number;
}

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
  standalone: true,
  imports: [
    NbCardModule,
    NbInputModule,
    NbTreeGridModule,
    CommonModule,
    FsIconComponent,
    NbIconModule
  ],
})
export class TreeGridComponent implements OnInit, OnDestroy {
  customColumn = 'Project Name';
  defaultColumns = ['size', 'kind', 'items'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string = '';
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
    private router: Router,
    private store: Store
  ) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  ngOnInit(): void {
    console.log(this.dataSource);
  }

  ngOnDestroy(): void {
    
  }

  navigate(row: any) {
    // this.store.dispatch(authActions.login())
    this.store.dispatch(projectActions.projectOpened())
    this.router.navigate(['/pages/data-input'])
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
      data: {
        'Project Name': 'Projects',
        size: '1.8 MB',
        items: 5,
        kind: 'dir',
      },
    },
    {
      data: {
        'Project Name': 'Reports',
        kind: 'dir',
        size: '400 KB',
        items: 2,
      },
      children: [
        {
          data: {
            'Project Name': 'Report 1',
            kind: 'dir',
            size: '100 KB',
            items: 1,
          },
          children: [
            {
              data: {
                'Project Name': 'report-1.doc',
                kind: 'doc',
                size: '100 KB',
              },
            },
          ],
        },
        {
          data: {
            'Project Name': 'Report 2',
            kind: 'dir',
            size: '300 KB',
            items: 2,
          },
          children: [
            {
              data: {
                'Project Name': 'report-2.doc',
                kind: 'doc',
                size: '290 KB',
              },
            },
            {
              data: {
                'Project Name': 'report-2-note.txt',
                kind: 'txt',
                size: '10 KB',
              },
            },
          ],
        },
      ],
    },
    // {
    //   data: { ProjectName: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //   children: [
    //     { data: { ProjectName: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //     { data: { ProjectName: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //   ],
    // },
    // {
    //     data: { ProjectName: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //     children: [
    //       { data: { ProjectName: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //       { data: { ProjectName: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //     ],
    //   },
    //   {
    //     data: { ProjectName: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //     children: [
    //       { data: { ProjectName: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //       { data: { ProjectName: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //     ],
    //   },
    //   {
    //     data: { ProjectName: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //     children: [
    //       { data: { ProjectName: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //       { data: { ProjectName: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //     ],
    //   },
    //   {
    //     data: { ProjectName: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //     children: [
    //       { data: { ProjectName: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //       { data: { ProjectName: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //     ],
    //   },
    //   {
    //     data: { ProjectName: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //     children: [
    //       { data: { ProjectName: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //       { data: { ProjectName: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //     ],
    //   },
    //   {
    //     data: { ProjectName: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //     children: [
    //       { data: { ProjectName: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //       { data: { ProjectName: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //     ],
    //   },
    //   {
    //     data: { ProjectName: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //     children: [
    //       { data: { ProjectName: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //       { data: { ProjectName: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //     ],
    //   },
    //   {
    //     data: { ProjectName: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //     children: [
    //       { data: { ProjectName: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //       { data: { ProjectName: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //     ],
    //   },
    //   {
    //     data: { ProjectName: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //     children: [
    //       { data: { ProjectName: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //       { data: { ProjectName: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //     ],
    //   },
    //   {
    //     data: { ProjectName: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //     children: [
    //       { data: { ProjectName: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //       { data: { ProjectName: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //     ],
    //   },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }
}
