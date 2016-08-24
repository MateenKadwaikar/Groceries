import {
    Component
} from '@angular/core';
import {
    Router
} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'logout-module',
    templateUrl: 'user-logout.component.html'
})
export class LogOutComponent {


    constructor(private _router: Router) {}

    Logout() {
        sessionStorage.removeItem("access_token");
        this._router.navigate(['']);
    }

}