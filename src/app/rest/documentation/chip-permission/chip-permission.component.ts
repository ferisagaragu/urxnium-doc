import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip-permission',
  templateUrl: './chip-permission.component.html',
  styleUrls: ['./chip-permission.component.scss']
})
export class ChipPermissionComponent {
  @Input() permissions: Array<string>;
}
