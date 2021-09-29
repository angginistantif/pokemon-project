# Project Structure

## Pages
    menyimpan seluruh data yang ditampilkan
    /pageName
        menerima query param secara dynamic
        /component
            component yang digunakan untuk masing2 detail data (pokemon dan ability)
        [type]
            component untuk menerima dynamic query param '.../[pageName]/[type], berisi data general yang memanggil component
        index
            halaman utama untuk list data
    _error
        halaman error, agar terpersonalisasi
    index 
        halaman utama

## Public
    menyimpan seluruh gambar yang digunakan untuk Loader, header, dan styling

## Store
    menyimpan keperluan reduz
    /action
        menyimpan data redux action untuk ability dan pokemon
    /reducer
        menyimpan data redux reducer untuk ability dan pokemon, dan rootReducer
    store
        menyimpan fungsi utama redux untuk menyimpan state
    
## Styles

