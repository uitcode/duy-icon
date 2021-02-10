import { ElementRef } from '@angular/core';
import { IconsRegistryService } from './registry-icons.service';
import { nameIcons } from './icons/build/icon.model';
export declare class TestIconsComponent {
    private element;
    private iconRegistry;
    private document;
    private svgIcon;
    set name(iconName: nameIcons);
    constructor(element: ElementRef, iconRegistry: IconsRegistryService, document: any);
    private svgElementFromString;
}
//# sourceMappingURL=icons.component.d.ts.map