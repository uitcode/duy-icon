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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkU6L0FuZ3VsYXIvTGVhcm4vaWNvbi90ZXN0LWljb25zL3Byb2plY3RzL3Rlc3QtaWNvbnMvc3JjLyIsInNvdXJjZXMiOlsibGliL2ljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBV2hFLE1BQU0sT0FBTyxrQkFBa0I7SUFhN0IsWUFDVSxPQUFtQixFQUNuQixZQUFrQyxFQUNKLFFBQWE7UUFGM0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFDSixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQ2xELENBQUM7SUFkSixJQUNJLElBQUksQ0FBQyxRQUFtQjtRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0RDtRQUNELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQVFPLG9CQUFvQixDQUFDLFVBQWtCO1FBQzdDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQzNCLE9BQU8sQ0FDTCxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsQ0FDcEUsQ0FBQztJQUNKLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRTs7R0FFVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFEdEMsa0RBQWtEO2FBRTVEOzs7WUFmQyxVQUFVO1lBS0gsb0JBQW9COzRDQTJCeEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7bUJBYjdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25zUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSAnLi9yZWdpc3RyeS1pY29ucy5zZXJ2aWNlJztcbmltcG9ydCB7IG5hbWVJY29ucyB9IGZyb20gJy4vaWNvbnMvYnVpbGQvbXktaWNvbnMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpY29uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIHN0eWxlczogWyc6aG9zdDo6bmctZGVlcCBzdmcgeyB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4IH0nXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVGVzdEljb25zQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBzdmdJY29uOiBTVkdFbGVtZW50O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuYW1lKGljb25OYW1lOiBuYW1lSWNvbnMpIHtcbiAgICBpZiAodGhpcy5zdmdJY29uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLnN2Z0ljb24pO1xuICAgIH1cbiAgICBjb25zdCBzdmdEYXRhID0gdGhpcy5pY29uUmVnaXN0cnkuZ2V0SWNvbihpY29uTmFtZSk7XG4gICAgdGhpcy5zdmdJY29uID0gdGhpcy5zdmdFbGVtZW50RnJvbVN0cmluZyhzdmdEYXRhKTtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnN2Z0ljb24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgaWNvblJlZ2lzdHJ5OiBJY29uc1JlZ2lzdHJ5U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnlcbiAgKSB7fVxuXG4gIHByaXZhdGUgc3ZnRWxlbWVudEZyb21TdHJpbmcoc3ZnQ29udGVudDogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gc3ZnQ29udGVudDtcbiAgICByZXR1cm4gKFxuICAgICAgZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIHx8XG4gICAgICB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpXG4gICAgKTtcbiAgfVxufVxuIl19