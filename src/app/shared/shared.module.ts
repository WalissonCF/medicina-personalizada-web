import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtomicInputRadioComponent } from './atoms/input/atomic-input-radio/atomic-input-radio.component';
import { ButtonPrimaryComponent } from './atoms/button/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './atoms/button-secondary/button-secondary.component';
import { InputTextComponent } from './atoms/input/input-text/input-text.component';
import { PopUpComponent } from './organisms/pop-up/pop-up.component';
import { FormsModule } from '@angular/forms';
import { MoleculesInputRadioGroupComponent } from './molecules/molecules-input-radio-group/molecules-input-radio-group.component';
import { OrganismsRadioFormComponent } from './organisms/organisms-radio-form/organisms-radio-form.component';

@NgModule({
  declarations: [
    AtomicInputRadioComponent,
    ButtonSecondaryComponent,
    ButtonPrimaryComponent,
    InputTextComponent,
    PopUpComponent,
    MoleculesInputRadioGroupComponent,
    OrganismsRadioFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    OrganismsRadioFormComponent,
    AtomicInputRadioComponent,
    ButtonSecondaryComponent,
    ButtonPrimaryComponent,
    InputTextComponent,
    PopUpComponent,
  ]
})
export class SharedModule { }
