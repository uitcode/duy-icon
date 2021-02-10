(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('duy-icons', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['duy-icons'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var IconsRegistryService = /** @class */ (function () {
        function IconsRegistryService() {
            this.registry = new Map();
        }
        IconsRegistryService.prototype.registerIcons = function (icons) {
            var _this = this;
            icons.forEach(function (icon) { return _this.registry.set(icon.name, icon.data); });
        };
        IconsRegistryService.prototype.getIcon = function (iconName) {
            if (!this.registry.has(iconName)) {
                console.warn("We could not find the dinosaur Icon with the name " + iconName + ", did you add it to the Icon registry?");
            }
            return this.registry.get(iconName);
        };
        return IconsRegistryService;
    }());
    IconsRegistryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IconsRegistryService_Factory() { return new IconsRegistryService(); }, token: IconsRegistryService, providedIn: "root" });
    IconsRegistryService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var TestIconsComponent = /** @class */ (function () {
        function TestIconsComponent(element, iconRegistry, document) {
            this.element = element;
            this.iconRegistry = iconRegistry;
            this.document = document;
        }
        Object.defineProperty(TestIconsComponent.prototype, "name", {
            set: function (iconName) {
                if (this.svgIcon) {
                    this.element.nativeElement.removeChild(this.svgIcon);
                }
                var svgData = this.iconRegistry.getIcon(iconName);
                this.svgIcon = this.svgElementFromString(svgData);
                this.element.nativeElement.appendChild(this.svgIcon);
            },
            enumerable: false,
            configurable: true
        });
        TestIconsComponent.prototype.svgElementFromString = function (svgContent) {
            var div = this.document.createElement('DIV');
            div.innerHTML = svgContent;
            return (div.querySelector('svg') ||
                this.document.createElementNS('http://www.w3.org/2000/svg', 'path'));
        };
        return TestIconsComponent;
    }());
    TestIconsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'icon',
                    template: "\n    <ng-content></ng-content>\n  ",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    styles: [':host::ng-deep svg { width: 32px; height: 32px }']
                },] }
    ];
    TestIconsComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: IconsRegistryService },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [common.DOCUMENT,] }] }
    ]; };
    TestIconsComponent.propDecorators = {
        name: [{ type: i0.Input }]
    };

    var TestIconsModule = /** @class */ (function () {
        function TestIconsModule() {
        }
        return TestIconsModule;
    }());
    TestIconsModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [TestIconsComponent],
                    exports: [TestIconsComponent]
                },] }
    ];

    var IconsService = /** @class */ (function () {
        function IconsService() {
        }
        return IconsService;
    }());
    IconsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IconsService_Factory() { return new IconsService(); }, token: IconsService, providedIn: "root" });
    IconsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    IconsService.ctorParameters = function () { return []; };

    /*
     * Public API Surface of test-icons
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.IconsRegistryService = IconsRegistryService;
    exports.IconsService = IconsService;
    exports.TestIconsComponent = TestIconsComponent;
    exports.TestIconsModule = TestIconsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=duy-icons.umd.js.map
