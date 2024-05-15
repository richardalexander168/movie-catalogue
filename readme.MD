Tiga level testing,
-Unit Testing, fokus menguji perilaku dari sebuah unit
-Integration Testing, tidak hanya fokus pada perilaku objek tertentu, objek lain juga di cek
-End-to-End Testing, tes ketika perilaku pengguna disimulasikan semuanya dari depan hingga belakang


LATIHAN 1
Daftar Skenario:

A.Menyukai Film.
1-Film belum disukai.
2-Widget untuk menyukai film ditampilkan.
3-Widget menyukai film ditekan oleh pengguna.
4-Film ditambahkan ke daftar film yang disukai.
a---Film berhasil ditambahkan.
b---Ternyata film sudah disukai.
i------Tidak perlu menyimpan kembali.
c---Data film tidak memiliki ID.
i------Sistem tidak memproses penyimpanan.
ii------Sistem tidak gagal.

B.Batal Menyukai Film.
1-Film sudah disukai.
2-Widget untuk batal menyukai film ditampilkan.
3-Widget pembatalan ditekan oleh pengguna.
4-Film dihapus dari daftar film yang disukai.
a---Film berhasil dihapus.
b---Ternyata film tidak ada dalam daftar film yang disukai.

TODO
-Memberi nama yang lebih berbeda untuk createLikeButtonTemplate dan createLikedButtonTemplate.
-Alur negatif: sistem tidak memproses penyimpanan dan menyebabkan kegagalan jika menyimpan movie tanpa ID.


const menjalankanSesuatu = (suatuObject) => {
  suatuObject.lakukanSesuatu(pesanA, pesanB);
};


LATIHAN 2
Daftar Kontrak:

-Dapat mengembalikan film yang tersimpan berdasarkan kunci tertentu.
-Dapat mengembalikan semua film kesukaan yang sudah tersimpan.
-Dapat menambahkan film baru ke daftar film yang disukai.
---Bila data film tidak mengandung properti yang dibutuhkan, bangkitkan error. Jangan sampai aplikasi berhenti berjalan.
-Dapat menghapus film dari daftar film yang disukai.
---Bila film tidak ada, jangan terjadi error.


LATIHAN 3
Skenario mencari film:

-Pengguna memasukkan judul film yang dicari.
-Film yang dicari ditampilkan.
---Bila film tidak ada, tampilkan informasi bahwa tidak ada film yang ditemukan.

  USECASE dan Spesifikasinya
  1.Posibilitas bila pengguna memasukkan kueri pencarian “film A”.
    a.Presenter akan meminta ke Model untuk memberikan film yang disukai dengan yang cocok untuk pencarian “film A”.
    b.Presenter akan menampilkan ke View (DOM) semua film yang dikembalikan oleh Model.
  2.Posibilitas bila pengguna memasukkan kueri pencarian kosong seperti “”, “ “, atau tab.
    a.Presenter akan meminta Model untuk memberikan semua film yang disukai.
    b.Presenter akan menampilkan ke View semua film yang disukai yang telah diberikan oleh Model.
  3.Posibilitas bila pengguna memasukkan kueri pencarian dan tidak ada film yang cocok.
    a.Presenter meminta Model untuk mencari film.
    b.Presenter akan menampilkan informasi tidak ada film yang ditemukan pada View.