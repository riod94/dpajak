const FAQ = {
    PPN: [
        {
            key: "1",
            title: "Nama Barang / Jasa",
            content: "Kolom ini diisi dengan nama barang atau jasa.",
        },
        {
            key: "2",
            title: "Harga Total Include/Exclude PPN",
            content:
                "Kolom ini untuk menentukan apakah hasil perhitungan dari harga total sudah termasuk PPN atau belum.",
        },
        {
            key: "3",
            title: "Harga Satuan",
            content: "Kolom ini diisi dengan harga satuan dari barang atau jasa.",
        },
        {
            key: "4",
            title: "Quantity",
            content: "Kolom ini diisi dengan jumlah dari barang atau jasa.",
        },
        {
            key: "5",
            title: "Discount",
            content:
                "Kolom ini diisi dengan total jumlah diskon yang diberikan dalam penyerahan barang atau jasa.",
        },
        {
            key: "6",
            title: "DPP",
            content:
                "Dasar Pengenaan Pajak atau DPP merupakan harga jual, penggantian, atau nilai yang dipakai sebagai dasar dari penghitungan besarnya pajak. Kolom ini merupakan hasil pengurangan dari kolom Harga Total dengan Discount. Dimana jika kolom Include/Exclude PPN bernilai YA, kolom ini akan menjadi DPP. Jika kolom Include/Exclude PPN bernilai TIDAK, kolom ini akan menjadi Harga Total.",
        },
        {
            key: "7",
            title: "PPN",
            content:
                "Kolom ini merupakan hasil penghitungan PPN terutang dari kolom DPP",
        },
        {
            key: "8",
            title: "Harga Total",
            content:
                "Kolom ini merupakan hasil penjumlahan dari kolom DPP dan kolom PPN.",
        },
    ]
}

export default FAQ