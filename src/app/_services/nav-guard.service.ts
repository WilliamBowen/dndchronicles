import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form.component';

@Injectable()
export class NavGuard implements CanDeactivate<UserFormComponent>{
    canDeactivate(component: UserFormComponent) {
        if (component.form.dirty)
            return confirm("You have unsaved changes. Are you sure you want to leave?");
        return true;
    }
}