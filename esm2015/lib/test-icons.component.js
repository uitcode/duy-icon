import { IconsRegistry } from './icons-registry.service';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional, } from '@angular/core';
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
    ngOnInit() { }
}
TestIconsComponent.decorators = [
    { type: Component, args: [{
                selector: 'icon',
                template: ` <ng-content></ng-content> `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [':host::ng-deep svg { width: 32px; height: 32px }']
            },] }
];
TestIconsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: IconsRegistry },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
TestIconsComponent.propDecorators = {
    name: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1pY29ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRTovQW5ndWxhci9MZWFybi9pY29uL3Rlc3QtaWNvbnMvcHJvamVjdHMvdGVzdC1pY29ucy9zcmMvIiwic291cmNlcyI6WyJsaWIvdGVzdC1pY29ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFFTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFRdkIsTUFBTSxPQUFPLGtCQUFrQjtJQWE3QixZQUNVLE9BQW1CLEVBQ25CLFlBQTJCLEVBQ0csUUFBYTtRQUYzQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBQ0csYUFBUSxHQUFSLFFBQVEsQ0FBSztJQUNsRCxDQUFDO0lBZEosSUFDSSxJQUFJLENBQUMsUUFBZ0I7UUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEQ7UUFDRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFRTyxvQkFBb0IsQ0FBQyxVQUFrQjtRQUM3QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUMzQixPQUFPLENBQ0wsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLENBQ3BFLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUSxLQUFJLENBQUM7OztZQWxDZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSw2QkFBNkI7Z0JBRXZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUR0QyxrREFBa0Q7YUFFNUQ7OztZQVpDLFVBQVU7WUFMSCxhQUFhOzRDQWtDakIsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7bUJBYjdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uc1JlZ2lzdHJ5IH0gZnJvbSAnLi9pY29ucy1yZWdpc3RyeS5zZXJ2aWNlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpY29uJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBzdHlsZXM6IFsnOmhvc3Q6Om5nLWRlZXAgc3ZnIHsgd2lkdGg6IDMycHg7IGhlaWdodDogMzJweCB9J10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZXN0SWNvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHN2Z0ljb246IFNWR0VsZW1lbnQ7XG5cbiAgQElucHV0KClcbiAgc2V0IG5hbWUoaWNvbk5hbWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnN2Z0ljb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuc3ZnSWNvbik7XG4gICAgfVxuICAgIGNvbnN0IHN2Z0RhdGEgPSB0aGlzLmljb25SZWdpc3RyeS5nZXRJY29uKGljb25OYW1lKTtcbiAgICB0aGlzLnN2Z0ljb24gPSB0aGlzLnN2Z0VsZW1lbnRGcm9tU3RyaW5nKHN2Z0RhdGEpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc3ZnSWNvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBpY29uUmVnaXN0cnk6IEljb25zUmVnaXN0cnksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XG4gICkge31cblxuICBwcml2YXRlIHN2Z0VsZW1lbnRGcm9tU3RyaW5nKHN2Z0NvbnRlbnQ6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHN2Z0NvbnRlbnQ7XG4gICAgcmV0dXJuIChcbiAgICAgIGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKSB8fFxuICAgICAgdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=