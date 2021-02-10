import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class IconsRegistryService {
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
IconsRegistryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IconsRegistryService_Factory() { return new IconsRegistryService(); }, token: IconsRegistryService, providedIn: "root" });
IconsRegistryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cnktaWNvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJFOi9Bbmd1bGFyL0xlYXJuL2ljb24vdGVzdC1pY29ucy9wcm9qZWN0cy90ZXN0LWljb25zL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9yZWdpc3RyeS1pY29ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxvQkFBb0I7SUFIakM7UUFJVSxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7S0FjOUM7SUFaUSxhQUFhLENBQUMsS0FBYztRQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSxPQUFPLENBQUMsUUFBZ0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQ1YscURBQXFELFFBQVEsd0NBQXdDLENBQ3RHLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztZQWpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElJY29uIH0gZnJvbSAnLi9pY29ucy9idWlsZC9pY29uLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEljb25zUmVnaXN0cnlTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlZ2lzdHJ5ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcclxuXHJcbiAgcHVibGljIHJlZ2lzdGVySWNvbnMoaWNvbnM6IElJY29uW10pOiB2b2lkIHtcclxuICAgIGljb25zLmZvckVhY2goKGljb246IElJY29uKSA9PiB0aGlzLnJlZ2lzdHJ5LnNldChpY29uLm5hbWUsIGljb24uZGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEljb24oaWNvbk5hbWU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoIXRoaXMucmVnaXN0cnkuaGFzKGljb25OYW1lKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYFdlIGNvdWxkIG5vdCBmaW5kIHRoZSBkaW5vc2F1ciBJY29uIHdpdGggdGhlIG5hbWUgJHtpY29uTmFtZX0sIGRpZCB5b3UgYWRkIGl0IHRvIHRoZSBJY29uIHJlZ2lzdHJ5P2BcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5LmdldChpY29uTmFtZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==