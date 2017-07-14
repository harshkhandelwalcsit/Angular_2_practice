import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MyModule);
