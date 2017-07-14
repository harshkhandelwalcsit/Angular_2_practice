import { ModuleWithProviders, InjectionToken } from '@angular/core';
import { ConfirmationPopoverOptions, ConfirmationPopoverOptionsInterface } from './confirmationPopoverOptions.provider';
export declare const USER_OPTIONS: InjectionToken<string>;
export declare function optionsFactory(userOptions: ConfirmationPopoverOptions): ConfirmationPopoverOptions;
export declare class ConfirmationPopoverModule {
    static forRoot(options?: ConfirmationPopoverOptionsInterface): ModuleWithProviders;
}
