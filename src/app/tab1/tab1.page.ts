import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../api/movies.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { MovieModalComponent } from '../components/movie-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  movies: any = [];
  movieTitle: string;
  movieId: string;
  moviePoster: string;
  constructor(
    public movieService: MoviesService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {
    this.movieTitle = '';
    this.movieId = '';
    this.moviePoster = '';
  }

  ngOnInit(): void {
    this.getData('batman');
  }

  async getData(event: any) {
    const loading = await this.loadingCtrl.create({
      message: 'Consultando ' + event + ' ...',
    });

    loading.present();

    this.movies = await this.movieService.getMedia(event);
    loading.dismiss();
  }

  async openModal(imdbID: string) {
    const modal = await this.modalCtrl.create({
      component: MovieModalComponent,
      componentProps: { imdbID },
    });
    modal.present();
  }
}
