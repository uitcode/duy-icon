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
IconsRegistryService.ɵfac = function IconsRegistryService_Factory(t) { return new (t || IconsRegistryService)(); };
IconsRegistryService.ɵprov = i0.ɵɵdefineInjectable({ token: IconsRegistryService, factory: IconsRegistryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IconsRegistryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cnktaWNvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJFOi9Bbmd1bGFyL0xlYXJuL2ljb24vdGVzdC1pY29ucy9wcm9qZWN0cy90ZXN0LWljb25zL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9yZWdpc3RyeS1pY29ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxvQkFBb0I7SUFIakM7UUFJVSxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7S0FjOUM7SUFaUSxhQUFhLENBQUMsS0FBYztRQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSxPQUFPLENBQUMsUUFBZ0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQ1YscURBQXFELFFBQVEsd0NBQXdDLENBQ3RHLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7d0ZBZFUsb0JBQW9COzREQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUZuQixNQUFNO2tEQUVQLG9CQUFvQjtjQUhoQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElJY29uIH0gZnJvbSAnLi9pY29ucy9idWlsZC9teS1pY29ucy5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJY29uc1JlZ2lzdHJ5U2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlckljb25zKGljb25zOiBJSWNvbltdKTogdm9pZCB7XHJcbiAgICBpY29ucy5mb3JFYWNoKChpY29uOiBJSWNvbikgPT4gdGhpcy5yZWdpc3RyeS5zZXQoaWNvbi5uYW1lLCBpY29uLmRhdGEpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJY29uKGljb25OYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCF0aGlzLnJlZ2lzdHJ5LmhhcyhpY29uTmFtZSkpIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBXZSBjb3VsZCBub3QgZmluZCB0aGUgZGlub3NhdXIgSWNvbiB3aXRoIHRoZSBuYW1lICR7aWNvbk5hbWV9LCBkaWQgeW91IGFkZCBpdCB0byB0aGUgSWNvbiByZWdpc3RyeT9gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RyeS5nZXQoaWNvbk5hbWUpO1xyXG4gIH1cclxufVxyXG4iXX0=