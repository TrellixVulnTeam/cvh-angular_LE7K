import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LeaderboardComponent } from './sub-components/leaderboard/leaderboard.component';
import { ProgressComponent } from './sub-components/progress/progress.component';
import { AchievementsComponent } from './sub-components/achievements/achievements.component';
import { ProfileComponent } from './sub-components/profile/profile.component';
import { LessonsComponent } from './sub-components/lessons/lessons.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ShortNamePipe } from 'src/app/model/convert-to-initials';

@NgModule({
  declarations: [
    DashboardComponent,
    LeaderboardComponent,
    ProgressComponent,
    AchievementsComponent,
    ProfileComponent,
    LessonsComponent,
    ShortNamePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 16,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      outerStrokeLinecap: 'round',
      showSubtitle: false,
      titleFontSize: '30',
      space: -20,
    }),
  ],
  providers: [BsModalService],
})
export class DashboardModule {}
