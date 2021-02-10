import { IIcon } from './icons/build/my-icons.model';
export declare class IconsRegistryService {
    private registry;
    registerIcons(icons: IIcon[]): void;
    getIcon(iconName: string): string | undefined;
}
