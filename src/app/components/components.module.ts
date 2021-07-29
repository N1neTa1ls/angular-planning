import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FilterComponent } from './filter/filter.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { TabsComponent } from './tabs/tabs.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';



@NgModule({
  declarations: [ButtonComponent, FilterComponent, InputComponent, SelectComponent, TabsComponent, RadioGroupComponent],
  exports: [ButtonComponent, FilterComponent, InputComponent, SelectComponent, TabsComponent, RadioGroupComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
