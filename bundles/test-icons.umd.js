(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('test-icons', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['test-icons'] = {}, global.ng.core, global.ng.common));
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
    IconsRegistryService.ɵfac = function IconsRegistryService_Factory(t) { return new (t || IconsRegistryService)(); };
    IconsRegistryService.ɵprov = i0.ɵɵdefineInjectable({ token: IconsRegistryService, factory: IconsRegistryService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IconsRegistryService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    var _c0 = ["*"];
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
    TestIconsComponent.ɵfac = function TestIconsComponent_Factory(t) { return new (t || TestIconsComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(IconsRegistryService), i0.ɵɵdirectiveInject(common.DOCUMENT, 8)); };
    TestIconsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TestIconsComponent, selectors: [["icon"]], inputs: { name: "name" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function TestIconsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, styles: ["[_nghost-%COMP%]  svg { width: 32px; height: 32px }"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TestIconsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'icon',
                        template: "\n    <ng-content></ng-content>\n  ",
                        styles: [':host::ng-deep svg { width: 32px; height: 32px }'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () {
            return [{ type: i0.ElementRef }, { type: IconsRegistryService }, { type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [common.DOCUMENT]
                        }] }];
        }, { name: [{
                    type: i0.Input
                }] });
    })();

    var TestIconsModule = /** @class */ (function () {
        function TestIconsModule() {
        }
        return TestIconsModule;
    }());
    TestIconsModule.ɵmod = i0.ɵɵdefineNgModule({ type: TestIconsModule });
    TestIconsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TestIconsModule_Factory(t) { return new (t || TestIconsModule)(); } });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TestIconsModule, { declarations: [TestIconsComponent], exports: [TestIconsComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TestIconsModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [TestIconsComponent],
                        exports: [TestIconsComponent]
                    }]
            }], null, null);
    })();

    var IconsService = /** @class */ (function () {
        function IconsService() {
        }
        return IconsService;
    }());
    IconsService.ɵfac = function IconsService_Factory(t) { return new (t || IconsService)(); };
    IconsService.ɵprov = i0.ɵɵdefineInjectable({ token: IconsService, factory: IconsService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IconsService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

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
//# sourceMappingURL=test-icons.umd.js.map
