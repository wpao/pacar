// Mengambil elemen-elemen yang diperlukan
var popup = document.getElementById("myPopup");
var pesanPopup = document.getElementById("pesanPopup");
var close = document.getElementsByClassName("close")[0];
const mau = document.getElementById("mau");
const gak_mau = document.getElementById("btn_gamau");
const h1 = document.querySelector('h1')
const img = document.querySelector("#myImage")

// 
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit default

    // Mengambil nilai dari input
    const nama = document.getElementById("name").value; // Ganti nilai variabel di dalam fungsi
        
    // close popup
    popup.style.display = "none";

    // Menampilkan nilai yang ditangkap
    h1.innerHTML = `${nama} mau jadi pacarku nggak ?`

    // tampilkan tombol
    mau.style.display = "block";
    gak_mau.style.display = "block";

    // Reset form
    document.getElementById("myForm").reset();
});

// Fungsi untuk menampilkan popup
mau.addEventListener("click", function() {
    h1.innerHTML = `Makasih ayang !`
    mau.style.display = 'none'
    gak_mau.style.display = 'none'
    img.style.display = 'block'
});

// 
function gamau(){
  const gamau = document.getElementById('btn_gamau');
  let i = Math.floor(Math.random() * 200) + 1;
  let j = Math.floor(Math.random() * 100) + mau.offsetTop;
  gamau.style.left = `${i}px`;
  gamau.style.top = `${j}px`;
}
