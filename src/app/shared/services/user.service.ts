import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { GameSettingsInterface } from '../interfaces/game-settings.interface';
import { UserInterface } from '../interfaces/user.interface';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  constructor(private angularFirestore: AngularFirestore, private authService: AuthService) {}

  public updateUserDefaultGameSettings(gameSettings: GameSettingsInterface) {
    const USER_ID = this.authService.user.uid;

    const USER_DOCUMENT: AngularFirestoreDocument<UserInterface> = this.angularFirestore.doc(`/users/${USER_ID}`);

    return USER_DOCUMENT.update({ defaultGameSettings: gameSettings });
  }

  public deleteUserAccount() {
    const USER_ID = this.authService.user.uid;

    const USER_DOCUMENT: AngularFirestoreDocument<UserInterface> = this.angularFirestore.doc(`/users/${USER_ID}`);

    return USER_DOCUMENT.delete();
  }
}
