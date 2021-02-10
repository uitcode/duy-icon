import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional } from '@angular/core';
import { IconsRegistryService } from './registry-icons.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkU6L0FuZ3VsYXIvTGVhcm4vaWNvbi90ZXN0LWljb25zL3Byb2plY3RzL3Rlc3QtaWNvbnMvc3JjLyIsInNvdXJjZXMiOlsibGliL2ljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBV2hFLE1BQU0sT0FBTyxrQkFBa0I7SUFhN0IsWUFDVSxPQUFtQixFQUNuQixZQUFrQyxFQUNKLFFBQWE7UUFGM0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFDSixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQ2xELENBQUM7SUFkSixJQUNJLElBQUksQ0FBQyxRQUFtQjtRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0RDtRQUNELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQVFPLG9CQUFvQixDQUFDLFVBQWtCO1FBQzdDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQzNCLE9BQU8sQ0FDTCxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsQ0FDcEUsQ0FBQztJQUNKLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRTs7R0FFVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsa0RBQWtEO2FBRTVEOzs7WUFmQyxVQUFVO1lBS0gsb0JBQW9COzRDQTJCeEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7bUJBYjdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25zUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSAnLi9yZWdpc3RyeS1pY29ucy5zZXJ2aWNlJztcbmltcG9ydCB7IG5hbWVJY29ucyB9IGZyb20gJy4vaWNvbnMvYnVpbGQvaWNvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ljb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgc3R5bGVzOiBbJzpob3N0OjpuZy1kZWVwIHN2ZyB7IHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHggfSddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUZXN0SWNvbnNDb21wb25lbnQge1xuICBwcml2YXRlIHN2Z0ljb246IFNWR0VsZW1lbnQ7XG5cbiAgQElucHV0KClcbiAgc2V0IG5hbWUoaWNvbk5hbWU6IG5hbWVJY29ucykge1xuICAgIGlmICh0aGlzLnN2Z0ljb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuc3ZnSWNvbik7XG4gICAgfVxuICAgIGNvbnN0IHN2Z0RhdGEgPSB0aGlzLmljb25SZWdpc3RyeS5nZXRJY29uKGljb25OYW1lKTtcbiAgICB0aGlzLnN2Z0ljb24gPSB0aGlzLnN2Z0VsZW1lbnRGcm9tU3RyaW5nKHN2Z0RhdGEpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc3ZnSWNvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBpY29uUmVnaXN0cnk6IEljb25zUmVnaXN0cnlTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueVxuICApIHt9XG5cbiAgcHJpdmF0ZSBzdmdFbGVtZW50RnJvbVN0cmluZyhzdmdDb250ZW50OiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdmdDb250ZW50O1xuICAgIHJldHVybiAoXG4gICAgICBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgfHxcbiAgICAgIHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJylcbiAgICApO1xuICB9XG59XG4iXX0=