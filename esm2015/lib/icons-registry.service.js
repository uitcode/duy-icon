import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class IconsRegistry {
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
IconsRegistry.ɵprov = i0.ɵɵdefineInjectable({ factory: function IconsRegistry_Factory() { return new IconsRegistry(); }, token: IconsRegistry, providedIn: "root" });
IconsRegistry.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMtcmVnaXN0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJFOi9Bbmd1bGFyL0xlYXJuL2ljb24vdGVzdC1pY29ucy9wcm9qZWN0cy90ZXN0LWljb25zL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pY29ucy1yZWdpc3RyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxhQUFhO0lBSDFCO1FBSVUsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0tBYzlDO0lBWlEsYUFBYSxDQUFDLEtBQWM7UUFDakMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU0sT0FBTyxDQUFDLFFBQWdCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoQyxPQUFPLENBQUMsSUFBSSxDQUNWLHFEQUFxRCxRQUFRLHdDQUF3QyxDQUN0RyxDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7WUFqQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zL2J1aWxkL215LWljb25zLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEljb25zUmVnaXN0cnkge1xyXG4gIHByaXZhdGUgcmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJJY29ucyhpY29uczogSUljb25bXSk6IHZvaWQge1xyXG4gICAgaWNvbnMuZm9yRWFjaCgoaWNvbjogSUljb24pID0+IHRoaXMucmVnaXN0cnkuc2V0KGljb24ubmFtZSwgaWNvbi5kYXRhKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SWNvbihpY29uTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghdGhpcy5yZWdpc3RyeS5oYXMoaWNvbk5hbWUpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBgV2UgY291bGQgbm90IGZpbmQgdGhlIGRpbm9zYXVyIEljb24gd2l0aCB0aGUgbmFtZSAke2ljb25OYW1lfSwgZGlkIHlvdSBhZGQgaXQgdG8gdGhlIEljb24gcmVnaXN0cnk/YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVnaXN0cnkuZ2V0KGljb25OYW1lKTtcclxuICB9XHJcbn1cclxuIl19