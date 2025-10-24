# Shoe Laundry API
## Deskripsi Umum 
Proyek ini merupakan proyek untuk menyelesaikan responsi modul 1 praktikum PPB. Shoe Laundry API adalah layanan **REST API sederhana** yang dirancang untuk mengelola data sepatu yang sedang dicuci di sebuah tempat laundry. API ini dibuat menggunakan **Node.js** dan **Express.js** sebagai backend utama, serta **Supabase** sebagai database.

## Tujuan
Membuat layanan backend sederhana yang dapat melakukan operasi CRUD untuk pengelolaan data cucian sepatu, sekaligus menjadi contoh implementasi integrasi **Express.js** dengan **Supabase** dan deployment ke **Vercel**.

## Fitur Utama
1. **Create:** Menambahkan data-data cucian sepatu baru yang masuk.
2. **Read:** Menampilkan semua data sepatu.
3. **Update:** Mengubah data sepatu tertentu berdasarkan ID.
4. **Delete:** Menghapus data sepatu berdasarkan ID.

## Struktur Data
| Kolom         | Tipe Data       | Keterangan                          |
|----------------|----------------|--------------------------------------|
| id             | UUID (Primary)  | ID unik otomatis                    |
| name           | text            | Nama sepatu                         |
| owner_name     | text            | Nama pemilik sepatu                 |
| status         | text            | Status proses (default: "Menunggu") |
| price          | numeric(10,2)   | Harga layanan                       |
| notes          | text            | Catatan tambahan                    |
| pickup_date    | date            | Tanggal pengambilan sepatu          |
| created_at     | timestamptz     | Waktu data dibuat                   |
| updated_at     | timestamptz     | Waktu data terakhir diperbarui      |

## Link Deploy (Vercel)
API ini dapat diakses melalui link berikut: shoe-laundry-anisa-anastasya-4u28.vercel.app

