class FavoriteMovieShowPresenter {
  constructor({ view, favoriteMovies }) {
    this._view = view;
    this._favoriteMovies = favoriteMovies;

    this._showFavoriteMovies();
    // const movies = this._favoriteMovies.getAllMovies();
    // this._displayMovies(movies);
  }

  //Presenter meminta semua daftar film yang disukai kepada Model.
  async _showFavoriteMovies() {
    const movies = await this._favoriteMovies.getAllMovies();
    this._displayMovies(movies);
  }

  _displayMovies(movies) {
    this._view.showFavoriteMovies(movies);
  }
}

export default FavoriteMovieShowPresenter;
