import { ElementRef, OnInit } from '@angular/core';
import { IconsRegistry } from './icons-registry.service';
export declare class TestIconsComponent implements OnInit {
  private element;
  private iconRegistry;
  private document;
  private svgIcon;
  set name(iconName: string);
  constructor(element: ElementRef, iconRegistry: IconsRegistry, document: any);
  private svgElementFromString;
  ngOnInit(): void;
}
