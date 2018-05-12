import { NgModule } from '@angular/core';

import { AgmMarkerWithLabel } from './directives/marker-with-label';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MarkerWithLabelManager } from './services/managers/marker-with-label-manager';

@NgModule({
    imports: [AgmCoreModule],
    exports: [AgmMarkerWithLabel],
    declarations: [AgmMarkerWithLabel]
})
export class AgmMarkerWithLabelModule { }
