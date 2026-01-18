const restoran = {
  menuler: [
    {
      kategori: "Ana Yemek",
      urunler: [
        {
          id: 1,
          ad: "Adana Kebap",
          fiyat: 180,
          malzemeler: ["et", "biber", "domates"],
          kalori: 650,
        },
        {
          id: 2,
          ad: "İskender",
          fiyat: 200,
          malzemeler: ["et", "yogurt", "pide", "domates"],
          kalori: 720,
        },
        {
          id: 3,
          ad: "Tavuk Şiş",
          fiyat: 150,
          malzemeler: ["tavuk", "biber", "domates"],
          kalori: 480,
        },
      ],
    },
    {
      kategori: "İçecek",
      urunler: [
        {
          id: 4,
          ad: "Ayran",
          fiyat: 15,
          malzemeler: ["yogurt", "su"],
          kalori: 50,
        },
        { id: 5, ad: "Cola", fiyat: 25, malzemeler: [], kalori: 140 },
        { id: 6, ad: "Şalgam", fiyat: 20, malzemeler: ["şalgam"], kalori: 30 },
      ],
    },
    {
      kategori: "Tatlı",
      urunler: [
        {
          id: 7,
          ad: "Baklava",
          fiyat: 80,
          malzemeler: ["hamur", "fıstık", "şerbet"],
          kalori: 450,
        },
        {
          id: 8,
          ad: "Sütlaç",
          fiyat: 60,
          malzemeler: ["süt", "pirinç", "şeker"],
          kalori: 280,
        },
      ],
    },
  ],

  siparisler: [
    {
      masa: 5,
      garson: "Ahmet",
      saat: "12:30",
      urunler: [
        { urunId: 1, adet: 2 },
        { urunId: 4, adet: 2 },
        { urunId: 7, adet: 1 },
      ],
      durum: "hazirlaniyor",
    },
    {
      masa: 3,
      garson: "Ayşe",
      saat: "13:00",
      urunler: [
        { urunId: 2, adet: 1 },
        { urunId: 5, adet: 3 },
        { urunId: 8, adet: 2 },
      ],
      durum: "tamamlandi",
    },
    {
      masa: 7,
      garson: "Ahmet",
      saat: "13:15",
      urunler: [
        { urunId: 3, adet: 2 },
        { urunId: 6, adet: 2 },
        { urunId: 7, adet: 2 },
      ],
      durum: "hazirlaniyor",
    },
  ],

  stok: {
    et: 50,
    tavuk: 30,
    yogurt: 40,
    biber: 60,
    domates: 70,
    pide: 25,
    su: 100,
    şalgam: 20,
    hamur: 35,
    fıstık: 15,
    şerbet: 40,
    süt: 50,
    pirinç: 30,
    şeker: 45,
  },
};

// SORU 1 - TAMAMLANDI -
function menudeAra(menu, clbck) {
  let sonuc = [];

  for (let items of menu) {
    const filteredVal = items.urunler.filter(clbck);

    for (let x of filteredVal) {
      sonuc.push({
        ad: x.ad,
        fiyat: x.fiyat,
        kalori: x.kalori,
        icerik: x.malzemeler,
      });
    }
  }
  return sonuc;
}

// İstenilen Filtre yapılabilir. !
const geriDonme = (value) =>
  value.fiyat < 200 &&
  value.malzemeler.includes("domates") &&
  value.kalori <= 500;

// console.log(menudeAra(restoran.menuler, geriDonme));

// SORU 2 -USTUNDE CALISILIYOR-

function siparisiIsle(siparis) {
  const orders = [];
  let a = [];
  let c = [];
  for (let ordr of siparis) {
    a = ordr.urunler;
    for (let x of a) {
      const b = x.urunId;
      c.push(b);
    }
  }

  console.log(c);

  for (let f of restoran.menuler) {
    for (let w of f.urunler) {
      w.forEach((element) => {
        for (let i of c) {
          if (element.id === i) {
            console.log(element);
          }
        }
      });
    }
  }
}

const islem = (item) => item.urunler;

siparisiIsle(restoran.siparisler);

// const healthy_food = menudeAra(restoran.menuler, (obj) => {
//   for (let item of obj) {
//     for (let elements of item.urunler) {
// if (
//   elements.fiyat < 400 &&
//   elements.kalori < 500 &&
//   elements.malzemeler.includes("domates")
// ) {
//   console.log(elements.ad);
// }
//     }
//   }
// });

// console.log(healthy_food);

// readline Node JS'te girdi almamızı sağlayan şey.
// const readline = require("readline");

//rl artık girdi alabilir ve terminale çıktı verebilir.
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// stdin klavyeden gelen veri, stdout terminale yazdılırılan veri. rl soru sorup cevap alabliyor demek oluyor.

// function dynamicQ() {
//   const arr = [];
//   rl.question("Lütfen Fiyat üst limiti giriniz: ", (answer) => {
//     const cevap = Number(answer);
//     if (Number.isInteger(cevap) === false) {
//       console.log("Lütfen sayı giriniz..");
//       return dynamicQ();
//     } else {
//       console.log("Fiyat alınmıştır..");
//       arr.push(cevap);
//     }

//     rl.question("Lütfen Üst kalori limitinizi girin: ", (qua) => {
//       const kalori1 = Number(qua);
//       if (Number.isInteger(kalori1) === false) {
//         console.log("Lütfen sayı giriniz..");
//         return dynamicQ();
//       } else {
//         console.log("Kalori alınmıştır..");
//         arr.push(kalori1);
//       }

//       rl.question("İçinde olmasını istediğiniz malzemleri giriniz: ", (qua) => {
//         const malzeme = qua;
//         arr.push(malzeme);
//       });
//     });

//     return arr;
//   });
// }

// console.log(dynamicQ());
// menudeAra(restoran, dynamicQ);
