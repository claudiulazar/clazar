import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(public afAuth: AngularFireAuth) {
    }

    async login(email: string, password: string) {
        return  await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
    async logout() {
        this.afAuth.auth.signOut();
    }
}
