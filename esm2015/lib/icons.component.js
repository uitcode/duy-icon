import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./registry-icons.service";
const _c0 = ["*"];
export class TestIconsComponent {
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
TestIconsComponent.ɵfac = function TestIconsComponent_Factory(t) { return new (t || TestIconsComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.IconsRegistryService), i0.ɵɵdirectiveInject(DOCUMENT, 8)); };
TestIconsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TestIconsComponent, selectors: [["icon"]], inputs: { name: "name" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function TestIconsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["[_nghost-%COMP%]  svg { width: 32px; height: 32px }"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TestIconsComponent, [{
        type: Component,
        args: [{
                selector: 'icon',
                template: `
    <ng-content></ng-content>
  `,
                styles: [':host::ng-deep svg { width: 32px; height: 32px }'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.IconsRegistryService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { name: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkU6L0FuZ3VsYXIvTGVhcm4vaWNvbi90ZXN0LWljb25zL3Byb2plY3RzL3Rlc3QtaWNvbnMvc3JjLyIsInNvdXJjZXMiOlsibGliL2ljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7Ozs7QUFZdkIsTUFBTSxPQUFPLGtCQUFrQjtJQWE3QixZQUNVLE9BQW1CLEVBQ25CLFlBQWtDLEVBQ0osUUFBYTtRQUYzQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUNKLGFBQVEsR0FBUixRQUFRLENBQUs7SUFDbEQsQ0FBQztJQWRKLElBQ0ksSUFBSSxDQUFDLFFBQW1CO1FBQzFCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBUU8sb0JBQW9CLENBQUMsVUFBa0I7UUFDN0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDM0IsT0FBTyxDQUNMLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxDQUNwRSxDQUFDO0lBQ0osQ0FBQzs7b0ZBMUJVLGtCQUFrQiwyR0FnQlAsUUFBUTt1REFoQm5CLGtCQUFrQjs7UUFMM0Isa0JBQVk7O2tEQUtILGtCQUFrQjtjQVI5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxNQUFNLEVBQUUsQ0FBQyxrREFBa0QsQ0FBQztnQkFDNUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O3NCQWlCSSxRQUFROztzQkFBSSxNQUFNO3VCQUFDLFFBQVE7d0JBWjFCLElBQUk7a0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbnNSZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuL3JlZ2lzdHJ5LWljb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgbmFtZUljb25zIH0gZnJvbSAnLi9pY29ucy9idWlsZC9teS1pY29ucy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ljb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgc3R5bGVzOiBbJzpob3N0OjpuZy1kZWVwIHN2ZyB7IHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHggfSddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUZXN0SWNvbnNDb21wb25lbnQge1xuICBwcml2YXRlIHN2Z0ljb246IFNWR0VsZW1lbnQ7XG5cbiAgQElucHV0KClcbiAgc2V0IG5hbWUoaWNvbk5hbWU6IG5hbWVJY29ucykge1xuICAgIGlmICh0aGlzLnN2Z0ljb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuc3ZnSWNvbik7XG4gICAgfVxuICAgIGNvbnN0IHN2Z0RhdGEgPSB0aGlzLmljb25SZWdpc3RyeS5nZXRJY29uKGljb25OYW1lKTtcbiAgICB0aGlzLnN2Z0ljb24gPSB0aGlzLnN2Z0VsZW1lbnRGcm9tU3RyaW5nKHN2Z0RhdGEpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc3ZnSWNvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBpY29uUmVnaXN0cnk6IEljb25zUmVnaXN0cnlTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueVxuICApIHt9XG5cbiAgcHJpdmF0ZSBzdmdFbGVtZW50RnJvbVN0cmluZyhzdmdDb250ZW50OiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdmdDb250ZW50O1xuICAgIHJldHVybiAoXG4gICAgICBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgfHxcbiAgICAgIHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJylcbiAgICApO1xuICB9XG59XG4iXX0=