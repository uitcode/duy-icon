import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, ElementRef, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, Component, ChangeDetectionStrategy, Optional, Inject, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
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
IconsRegistryService.ɵfac = function IconsRegistryService_Factory(t) { return new (t || IconsRegistryService)(); };
IconsRegistryService.ɵprov = ɵɵdefineInjectable({ token: IconsRegistryService, factory: IconsRegistryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IconsRegistryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

const _c0 = ["*"];
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
TestIconsComponent.ɵfac = function TestIconsComponent_Factory(t) { return new (t || TestIconsComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(IconsRegistryService), ɵɵdirectiveInject(DOCUMENT, 8)); };
TestIconsComponent.ɵcmp = ɵɵdefineComponent({ type: TestIconsComponent, selectors: [["icon"]], inputs: { name: "name" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function TestIconsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, styles: ["[_nghost-%COMP%]  svg { width: 32px; height: 32px }"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TestIconsComponent, [{
        type: Component,
        args: [{
                selector: 'icon',
                template: `
    <ng-content></ng-content>
  `,
                styles: [':host::ng-deep svg { width: 32px; height: 32px }'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ElementRef }, { type: IconsRegistryService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { name: [{
            type: Input
        }] }); })();

class TestIconsModule {
}
TestIconsModule.ɵmod = ɵɵdefineNgModule({ type: TestIconsModule });
TestIconsModule.ɵinj = ɵɵdefineInjector({ factory: function TestIconsModule_Factory(t) { return new (t || TestIconsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TestIconsModule, { declarations: [TestIconsComponent], exports: [TestIconsComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TestIconsModule, [{
        type: NgModule,
        args: [{
                declarations: [TestIconsComponent],
                exports: [TestIconsComponent]
            }]
    }], null, null); })();

class IconsService {
    constructor() { }
}
IconsService.ɵfac = function IconsService_Factory(t) { return new (t || IconsService)(); };
IconsService.ɵprov = ɵɵdefineInjectable({ token: IconsService, factory: IconsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IconsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/*
 * Public API Surface of test-icons
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IconsRegistryService, IconsService, TestIconsComponent, TestIconsModule };
//# sourceMappingURL=test-icons.js.map
