import { ɵɵdefineInjectable, Injectable, Component, ChangeDetectionStrategy, ElementRef, Optional, Inject, Input, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';

class IconsRegistryService {
    constructor() {
        this.registry = new Map();
    }
    registerIcons(icons) {
        icons.forEach((icon) => this.registry.set(icon.name, icon.data));
    }
    getIcon(iconName) {
        if (!this.registry.has(iconName)) {
            console.warn(`We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`);
        }
        return this.registry.get(iconName);
    }
}
IconsRegistryService.ɵprov = ɵɵdefineInjectable({ factory: function IconsRegistryService_Factory() { return new IconsRegistryService(); }, token: IconsRegistryService, providedIn: "root" });
IconsRegistryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

class TestIconsComponent {
    constructor(element, iconRegistry, document) {
        this.element = element;
        this.iconRegistry = iconRegistry;
        this.document = document;
    }
    set name(iconName) {
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        const svgData = this.iconRegistry.getIcon(iconName);
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
    }
    svgElementFromString(svgContent) {
        const div = this.document.createElement('DIV');
        div.innerHTML = svgContent;
        return (div.querySelector('svg') ||
            this.document.createElementNS('http://www.w3.org/2000/svg', 'path'));
    }
}
TestIconsComponent.decorators = [
    { type: Component, args: [{
                selector: 'icon',
                template: `
    <ng-content></ng-content>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [':host::ng-deep svg { width: 32px; height: 32px }']
            },] }
];
TestIconsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: IconsRegistryService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
TestIconsComponent.propDecorators = {
    name: [{ type: Input }]
};

class TestIconsModule {
}
TestIconsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TestIconsComponent],
                exports: [TestIconsComponent]
            },] }
];

class IconsService {
    constructor() { }
}
IconsService.ɵprov = ɵɵdefineInjectable({ factory: function IconsService_Factory() { return new IconsService(); }, token: IconsService, providedIn: "root" });
IconsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
IconsService.ctorParameters = () => [];

/*
 * Public API Surface of test-icons
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IconsRegistryService, IconsService, TestIconsComponent, TestIconsModule };
//# sourceMappingURL=duy-icons.js.map
