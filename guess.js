
//?PC'ye 1-20 arasında bir sayı tutturduk
let rastgeleSayi = Math.ceil(Math.random()*20)

let mesaj = document.querySelector(".msg");

let skor = 10;
//skoru index.html'den çekebilirdik. Ama çok kullnacağımız için bu daha tercih edilen bir yol.

//! Local Storage da top-score adıyla bir değişken varsa onu getir yoksa 0 olsun
let enYuksekSkore = localStorage.getItem("top-score") || 0;

//! -----browserda, DOM da top score değerinilocal storage dan okuyarak güncelle, özellikle 2. ve 3. oyuncular için gerekli
document.querySelector(".top-score").textContent = enYuksekSkore


document.querySelector(".check").addEventListener("click", () => {
    const tahmin = document.querySelector(".guess").value

     //!Tahmin girmeden butona basıldıysa
    if (!tahmin) {
        mesaj.textContent = "Lütfen bir sayı giriniz..."

     //!Tahminim Doğruysa 
    } else if(tahmin == rastgeleSayi) {
      mesaj.textContent = "Tebrikler bildiniz... 👏🏼";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").textContent = rastgeleSayi;

      document.querySelector(".check").disabled = true;

      //top-score kontrolü yap

      if (skor > enYuksekSkore) {
        localStorage.setItem(".top-score", skor);
        enYuksekSkore = skor;
        document.querySelector(".top-score").textContent = skor;
      }

      //!Tahmin Yanlışsa
    } else {
      //? Skor 1'den büyük olduğu sürece hakkım var

      if (skor > 1) {
        skor--;
        document.querySelector(".score").textContent = skor;

        tahmin < rastgeleSayi
          ? (mesaj.textContent = "Arttır👆🏼")
          : (mesaj.textContent = "Azalt👇🏼");
      } else {
        //! GAME OVER
        mesaj.textContent = "Oyunu kaybettiniz🙁";
        document.querySelector(".score").textContent = 0;
        document.querySelector("body").style.backgroundColor = "red";
      }
    }
})

// Again butonuna basınca ayarlar başlangıç değerlerine kurulsun. Arka plan #2d3436 olsun

document.querySelector(".again").onclick = () => {
    document.querySelector("body").style.backgroundColor = "#2d3436";

    rastgeleSayi = Math.ceil(Math.random() * 20)

    skor = 10;

    document.querySelector(".score").textContent = skor

    document.querySelector(".number").textContent = "?"

    document.querySelector(".guess").value = "";

    mesaj.textContent = "Oyun yeni oyuncu için başlıyor..."

    document.querySelector(".check").disabled = false

}

//ENTER!

//Klavyeden enter butonuna basıldığında check butonunu tetikle

document.addEventListener("keydown", function(e){
    // console.log(e)

    if (e.key === "Enter") {
        document.querySelector(".check").click()
    }
} )

localStorage.setItem("harvey", "localden gelen değer 555")

console.log(localStorage.getItem("harvey"))

//! Geçersi sayı girdiniz 1 ile 20 arasında bir sayı giriniz

document.querySelector(".check").addEventListener("click", () => {
    tahmin = document.querySelector(".guess").value

    const tahminSayi = parseInt(tahmin)

    if(tahminSayi >= 1 && tahminSayi <= 20 && !isNaN(tahminSayi)) {
    // Doğru sayı girilmişse oyunu devam ettir

    } else {
        mesaj.textContent = "Geçersiz sayı girdiniz (1 - 20 arasında bir sayı giriniz)"
        skor++
        document.querySelector(".guess").value = ""
        document.querySelector("body").style.backgroundColor = "magenta"
    }

})