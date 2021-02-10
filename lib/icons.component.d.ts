import { ElementRef } from '@angular/core';
import { IconsRegistryService } from './registry-icons.service';
import { nameIcons } from './icons/build/my-icons.model';
import * as i0 from "@angular/core";
export declare class TestIconsComponent {
    private element;
    private iconRegistry;
    private document;
    private svgIcon;
    set name(iconName: nameIcons);
    constructor(element: ElementRef, iconRegistry: IconsRegistryService, document: any);
    private svgElementFromString;
    static ɵfac: i0.ɵɵFactoryDef<TestIconsComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TestIconsComponent, "icon", never, { "name": "name"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=icons.component.d.ts.map