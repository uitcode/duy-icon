(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('test-icons', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['test-icons'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var TestIconsService = /** @class */ (function () {
        function TestIconsService() {
        }
        return TestIconsService;
    }());
    TestIconsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TestIconsService_Factory() { return new TestIconsService(); }, token: TestIconsService, providedIn: "root" });
    TestIconsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    TestIconsService.ctorParameters = function () { return []; };

    var IconsRegistry = /** @class */ (function () {
        function IconsRegistry() {
            this.registry = new Map();
        }
        IconsRegistry.prototype.registerIcons = function (icons) {
            var _this = this;
            icons.forEach(function (icon) { return _this.registry.set(icon.name, icon.data); });
        };
        IconsRegistry.prototype.getIcon = function (iconName) {
            if (!this.registry.has(iconName)) {
                console.warn("We could not find the dinosaur Icon with the name " + iconName + ", did you add it to the Icon registry?");
            }
            return this.registry.get(iconName);
        };
        return IconsRegistry;
    }());
    IconsRegistry.ɵprov = i0.ɵɵdefineInjectable({ factory: function IconsRegistry_Factory() { return new IconsRegistry(); }, token: IconsRegistry, providedIn: "root" });
    IconsRegistry.decorators = [
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
        TestIconsComponent.prototype.ngOnInit = function () { };
        return TestIconsComponent;
    }());
    TestIconsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'icon',
                    template: " <ng-content></ng-content> ",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    styles: [':host::ng-deep svg { width: 32px; height: 32px }']
                },] }
    ];
    TestIconsComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: IconsRegistry },
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
                    imports: [],
                    exports: [TestIconsComponent]
                },] }
    ];

    /*
     * Public API Surface of test-icons
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TestIconsComponent = TestIconsComponent;
    exports.TestIconsModule = TestIconsModule;
    exports.TestIconsService = TestIconsService;
    exports.ɵa = IconsRegistry;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=test-icons.umd.js.map
