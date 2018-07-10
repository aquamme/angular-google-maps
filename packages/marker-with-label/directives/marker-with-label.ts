import { Directive, Input, SimpleChange, OnChanges } from '@angular/core';
import { AgmMarker } from '@ajqua/core';
import { MarkerManager } from '@ajqua/core';

import { MarkerWithLabelManager } from '../services/managers/marker-with-label-manager';
import { Point } from '@ajqua/core/services/google-maps-types';

@Directive({
    selector: 'agm-marker-with-label',
    inputs: [
        'latitude', 'longitude', 'title', 'draggable: markerDraggable', 'iconUrl',
        'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation',
        'labelContent', 'labelAnchor', 'labelClass', 'labelInBackground'
    ],
    providers: [
        MarkerWithLabelManager,
        { provide: MarkerManager, useExisting: MarkerWithLabelManager }
    ]
})
export class AgmMarkerWithLabel extends AgmMarker implements OnChanges {

    /**
     * Label content (text or HTML Node)
     */
    @Input() labelContent: string;

    /**
     * Label position
     */
    @Input() labelAnchor: Point;

    /**
     * Class name for label element
     */
    @Input() labelClass: string;

    /**
     * Draw label in background/foreground of its marker
     */
    @Input() labelInBackground: boolean;

    constructor(private _markerWithLabelManager: MarkerWithLabelManager) {
        super(_markerWithLabelManager);
    }

    ngOnChanges(changes: { [key: string]: SimpleChange }) {
        super.ngOnChanges(changes);
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (changes['labelContent']) {
            this._markerWithLabelManager.updateLabelContent(this);
        }
        if (changes['labelClass']) {
            this._markerWithLabelManager.updateLabelClass(this);
        }
    }
}
