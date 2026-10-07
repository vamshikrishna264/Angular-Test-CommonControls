import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  VnxButton,
  VnxCard,
  VnxCheckbox,
  VnxContainer,
  VnxFormField,
  VnxSelect,
  VnxStack,
  VnxSwitch,
  VnxText,
  VnxTextField,
  VnxThemeDirective,
} from '@ng-nexus/commoncontrols';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    VnxThemeDirective,
    VnxContainer,
    VnxStack,
    VnxText,
    VnxCard,
    VnxButton,
    VnxFormField,
    VnxTextField,
    VnxSelect,
    VnxCheckbox,
    VnxSwitch,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-nexus Common Controls Test';
  name = '';
  region = 'us';
  subscribed = true;
  notifications = false;
  message = 'Interact with the controls below';

  readonly regions = [
    { value: 'us', label: 'United States' },
    { value: 'eu', label: 'Europe' },
    { value: 'apac', label: 'Asia Pacific' },
  ] as const;

  onSave(): void {
    this.message = `Saved: ${this.name || '(no name)'}, region ${this.region}`;
  }
}
