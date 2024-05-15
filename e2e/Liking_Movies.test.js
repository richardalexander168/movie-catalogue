const assert = require('assert');

Feature("Liking Movies");

Before(({ I }) => {
  //before itu Ia akan berjalan sebelum tiap metode tes dijalankan.
  I.amOnPage("/#/like");
});

Scenario("showing empty liked movies", ({ I }) => {
  I.seeElement("#query");

  I.see("Tidak ada film untuk ditampilkan", ".movie-item__not__found");
});

Scenario("liking one movie", async ({ I }) => {
  I.see("Tidak ada film untuk ditampilkan", ".movie-item__not__found");

  I.amOnPage("/");

  //pilih salah satu halaman, terus klik
  I.seeElement(".movie__title a");
  const firstMovie = locate(".movie__title a").first();//melokasi text dari title
  const firstMovieTitle = await I.grabTextFrom(firstMovie); //await mengambil text dari title
  I.click(firstMovie);

  //pause();
  //kalo mau cek elemen di console web
  //ketik exit jika sudah tercek

  //terbawa ke halaman detail film, tekan tombol like
  I.seeElement("#likeButton");
  I.click("#likeButton");

  //buka halaman like, terlihat yang sudah kita like
  I.amOnPage("/#/like");
  I.seeElement(".movie-item");
  const likedMovieTitle = await I.grabTextFrom(".movie__title");//await mengambil text dari liked title

  assert.strictEqual(firstMovieTitle, likedMovieTitle);//judul dengan liked judul sama? berjalan lancar!
});

Scenario('searching movies', async ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
 
  I.amOnPage('/');
 
  I.seeElement('.movie__title a');
 
  const titles = [];
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.movie__title a').at(i)); //like film 3x
    I.seeElement('#likeButton');
    I.click('#likeButton');
    // eslint-disable-next-line no-await-in-loop
    titles.push(await I.grabTextFrom('.movie__title'));//pastikan masing2 film muncul di layar
    I.amOnPage('/');
  }
 
  I.amOnPage('/#/like');
  I.seeElement('#query');
 
  const visibleLikedMovies = await I.grabNumberOfVisibleElements('.movie-item');//pastikan jumlah film yg dilike sesuai
  assert.strictEqual(titles.length, visibleLikedMovies);

  //untuk melakukan pencarian thd salah satu film, mengambil potongan judul mulai dari posisi ke-1 hingga ke-2
  const searchQuery = titles[1].substring(1, 3);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  // mendapatkan daftar film yang sesuai dengan searchQuery
  const matchingMovies = titles.filter((title) => title.indexOf(searchQuery) !== -1);//simpan film dalam index, trus di cari namanya
  const visibleSearchedLikedMovies = await I.grabNumberOfVisibleElements('.movie-item');//pastikan jumlah film yg disearch dlm like sesuai
  assert.strictEqual(matchingMovies.length, visibleSearchedLikedMovies);//Pemeriksaan kedua adalah judul-judul film yang diperoleh sesuai for{}
  for (let i = 0; i < matchingMovies.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    //looping untuk validasi
    const visibleTitle = await I.grabTextFrom(locate('.movie__title').at(i + 1));
    assert.strictEqual(matchingMovies[i], visibleTitle);
    //awalnya titles.push(await I.grabTextFrom('.movie__title')); untuk urutan tampil di halaman utama
    //kalo sudah, bandingkan di atas assert.strictEqual(matchingMovies[i], visibleTitle);
  }
});
