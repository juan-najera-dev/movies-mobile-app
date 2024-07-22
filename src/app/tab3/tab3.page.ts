import { Component } from '@angular/core';
import { MoviesService } from '../api/movies.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { MovieModalComponent } from '../components/movie-modal.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  movies: any = [];

  searchInput: string;
  constructor(
    public movieService: MoviesService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {
    this.searchInput = '';
  }

  async getData(event: any) {
    const loading = await this.loadingCtrl.create({
      message: 'Consultando ' + event + ' ...',
    });

    loading.present();
    this.movies = await this.movieService.searchMovies(event);
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
