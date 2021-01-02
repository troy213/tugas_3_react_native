# TUGAS 3 REACT NATIVE


#### Tujuan :

- Memahami cara penggunaan handling touches.
- Memahami cara penggunaan style.
- Memahami cara penggunaan layout.

#### Petunjuk :

- Perintah untuk membuat project baru :
```
React-native init nama_project_yang_ingin_anda_buat
```

- Code Membuat Class Component
```
class nama_class_component extends Component {
                render() {
                   return (
                        // Tuliskan Code anda Di Sini
);  } }
```

- Code Membuat Function Component
```
const nama_function_component = () => {


};
```

#### Tugas :

Pada tugas ini anda diminta untuk membuat sebuah project baru dengan nama tugas3_react_native :

1. Buatlah Folder Dengan Nama Component :
2. Di Dalam Folder Component Buatlah File Dengan Nama Barang.js Dengan Ketentuan :
  - Buatlah state.
  - Buatlah 2 Function Untuk mengeset state yang telah di buat :
    - Di Dalam Salah Satu Function Tambahkan Kondisi :  
    ```
    if (this.state.jumlah > 0) {
    //Tulis Code Anda

    } else {
     alert("Jumlah Tidak Boleh Kurang Dari 0");
   }
   ```

  - Buatlah 2 TouchableOpacity Lalu Ketika TouchableOpacity Ditekan Maka Akan Memanggil Function Yang Telah Dibuat.
    - Di Dalam TouchableOpacity Tambahkan Property Style.
    - Di Dalam Component TouchableOpacity Tambahkan Component Text Untuk Menampilkan Tulisan :
  ```
  <TouchableOpacity>
    <Text >//Masukkan Code Ande </Text>

  </TouchableOpacity>
  ```

    - Ketika Salah Satu TouchableOpacity Di Tekan  Ketika State Jumlah > 0 Maka Akan Menampilkan Pesan
  - Tampilkan State Yang Telah Di Buat.
3. Di Dalam Folder Component Buatlah File Dengan Nama Headers.js Dengan Ketentuan :
  - Buatlah Component Text Dengan Tulisan Tugas 3 React Native Lalu Tambahkan Property Style.
  - Buatlah Component Text Yang Menampilkan Props Yang Di Dapat Dari App.js Lalu Tambahkan Property Style.
4. Di Dalam File App.js :
  - Import File Barang.js Yang Berada Di Dalam Folder Component.
  - Import File Headers.js Yang Berada Di Dalam Folder Component.
  - Di Dalam Component Barang Buat Props data="SELAMAT DATANG" 
Tampilan Aplikasi :
![img1](https://lh6.googleusercontent.com/PLXgSWK0VfXkffh5_hCZp_MFblLbeqjUalx0qciRjRwgoxGbMUClt-MTr4o7mX4mgKHNenD-EQ-zTXOd3yBl0yeK-inQartPaIjAYFwOB2MnlHmFheC2CT9lCOZhOZjBChoPjcgN)
![img2](https://lh3.googleusercontent.com/Cwc-gsWOT7gipkZrjAbwkV_E9PWhkipqjZNN64Zb1wKhQX9tdumQD3aEjR7dAkI9sUY-pxmlU5Kv_av8y5lYbM6gzjsiyYM3oeuHb5uF1Oaaztu5YZOVCL_WZeQ_T94vxZPS8SkF)
![img3](https://lh4.googleusercontent.com/2pzZghfXIhSdefIU8Vxcg6XwHggwzHGnv8NUA2Wi-aVTsWkHtHVp-CgfYR43qXQKVn5xQSGxrU_6sBBbD-DhrCgtfbRCR8NxVtvFUSLEjfP3-TmBRI4U6JMGxljvW5WYFJxTS8_u)
