import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '../api/movies.service';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'movie-modal.component.html',
})
export class MovieModalComponent {
  movie: any;
  imdbID: string;

  async ngOnInit() {
    this.movie = await this.movieService.getMediaDetails(this.imdbID);
  }

  constructor(
    private modalCtrl: ModalController,
    public movieService: MoviesService
  ) {
    this.imdbID = '';
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
