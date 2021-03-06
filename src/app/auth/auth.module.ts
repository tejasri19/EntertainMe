import { AuthService } from './auth.service';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [SignInComponent, SignUpComponent],
  exports:[SignUpComponent, SignInComponent]
})
export class AuthModule { 
  
  /**
   * This is to prevent multiple imports in modules other than root module, the @SkipSelf
   * decorator tells to look for an instance in the parent injector. If every thing is in order
   * that is this module is only imported in root module then the there will be no parent of the root inject and
   * no instances will be injected as we have the @Optional decorator which tell if no instances are found inject null.
   * But if another module imports this the instance will be found in the root injector as it is  aprent of the child 
   * injector which is created and hence a instance of the service will be injected. The injected instance will staisfy the if clause
   * and an error will be thrown.
   * 
   * @param parentModule 
   */
  constructor(@Optional() @SkipSelf() parentModule: AuthModule){
    if (parentModule) {
      throw new Error(
        'AuthModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService]
    };
  }
}
