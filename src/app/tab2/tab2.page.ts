import { Component } from '@angular/core';
import { MoviesService } from '../api/movies.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { MovieModalComponent } from '../components/movie-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
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
