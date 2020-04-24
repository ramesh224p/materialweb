import { Component, Input } from '@angular/core';

import { SidebarComponent as BaseSidebarComponent } from 'theme/components/sidebar';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['../../../theme/components/sidebar/sidebar.component.scss', './sidebar.component.scss'],
  templateUrl: '../../../theme/components/sidebar/sidebar.component.html',
})
export class SidebarComponent extends BaseSidebarComponent {
  public title = 'Darkboard';
  public menu = [
    { name: 'Dashboard', link: '/app/dashboard', icon: 'dashboard' },
    { name: 'Attendance', link: '/app/attendance', icon:'account_box'},
    { name: 'Time-Line', link: '/app/dashboard-custom', icon: 'view_quilt' },
    { name: 'manager', icon: 'person', children:
      [
        { name: 'Employees', link: '/manager/employees'},
        { name: 'Complaints', link: '/manager/complaints'}
      ]
      },
    { name: 'inventory', icon: 'book', children: 
      [
        {name:'Inventory-details', link:'/inventory/inventory-details'},
        {name:'Indent', link:'/inventory/indent'},
        {name:'List-indent', link:'/inventory/list-indent'},
        {name:'Acknowledgement', link:'/inventory/acknowledgement'},
      ]
    },   
    { name: 'setup', icon: 'map', children: 
      [
        { name: 'Branches', link: '/setup/branches'},
        { name: 'Finances', link: '/setup/finances'},
      ],
    },
    { name: 'Reports', link: '/app/reports', icon: 'multiline_chart' },
  ];
}
