import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeDescription } from 'src/app/core/pipes/episode-description';
import { EpisodeRoutingModule } from './episode-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { MaterialModule } from '../material/material.module';
import { EpisodesService } from '../../core/services/episode/episodes.service';


@NgModule({
  declarations: [
    EpisodeComponent,
    EpisodeListComponent,
    EpisodeDescription
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    MaterialModule,
    NgxPaginationModule
  ],
  providers: [
    EpisodesService
  ]
})

export class EpisodeModule { }
