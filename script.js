let data = [
    "Syon",
    "Syon Panjang",
    "Syon Panjang Juga",
    "Syon Panjang Banget"
]


//function untuk READ
function tampil() {
    let tabel = document.getElementById('tabel');
    tabel.innerHTML = "<tr><th>No</th><th>Name</th><th>Action</th></tr>";
    for (let i = 0; i < data.length; i++) {
        let btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        let btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i] + "</td><td>" + btnEdit + " " + btnHapus + "</tr>";
    }
}

//function untuk CREATE
function tambah() {
    let input = document.querySelector("input[name=jurusan]");
    data.push(input.value);
    tampil();
    input.value = "";
}

//function untuk Update
function edit(id) {
    let baru = prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}

// Function untuk Delete
function hapus(id) {
    data.pop(id);
    tampil();
}

tampil();

