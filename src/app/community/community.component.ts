import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { InstrumentPipe } from '../instrument.pipe';


@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers: [MemberService]
})


export class CommunityComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  filterByInstrument: string = "allMembers";

  constructor(private router: Router, private memberService: MemberService) {}

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickedMember: Member) {
    this.router.navigate(['members', clickedMember.id]);
  };

  onChange(optionFromMenu) {
    this.filterByInstrument = optionFromMenu;
  }

}
