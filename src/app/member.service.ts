import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { ALBUMS } from './mock-members';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
 }
  getMembers() {
    return this.members;
  }

  getMemberById(memberId: number) {
  for (let i = 0; i <= ALBUMS.length - 1; i++) {
  if (ALBUMS[i].id === memberId) {
    return ALBUMS[i];
      }
    }
  }
}
