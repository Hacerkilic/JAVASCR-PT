//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
// let num=-5.9;
// let absoluteValue= Math.abs(num);
// console.log("Mutlak deger ",absoluteValue);
// let roundedNumber =  Math.round(num) ;
// console.log("",roundedNumber);
// console.log( Math.pow(num, 2));
// let minValue = Math.min(1, 5);
// console.log(" En küçük değer:", minValue);
// let finalValue=minValue%2==0 ? minValue+5 : minValue+3;
// console.log("son değer:",finalValue);






// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?

// let number =prompt("Lutfen bir sayi giriniz: ");
// Kullanıcının girdiği değeri Number veri türüne dönüştürelim
// let number=Number(num);
// if(number>0)
// {
//     console.log("Girilen sayi pozitiftir");

// }
// else if(number<0)
// {
//     console.log("Girilen sayi negatiftir");
// }
// else {
//     console.log("Girilen sayi negatiftir");
// }







// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

// let password = prompt("Şifrenizi giriniz: ");
// let repassword = prompt("Şifrenizi tekrar giriniz: ");
//  if(password==repassword) {
//     console.log("Girdiğiniz şifreler aynı");
//  }
//  else 
//  {
//     console.log("Girdiğiniz şifre aynıı değil lüften tekrar deneyiniz");
//  }





 // Ödev 
// ÖDEV NOT:5 adımı beraber yapalım.
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız");
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

// let userData = prompt("Lutfen bir kelime yazınız ");
// console.log("Karakter sayısı: ",userData.length);
// console.log("Boşluklar alınarak kaç karakterlidir? ",userData.trim().length);
// console.log("Küçük harflerle giriniz:",userData.toLowerCase);
// console.log("Büyük harflere çevrili :",userData.toUpperCase);
// console.log("Değiştirilmiş kelime:", userData.replace(userData.substring(0, userData.indexOf(" ")), "javascript"));
// console.log("Javascript ile başlıyor mu?",userData.startsWith("javascript"));
// console.log("Javascript ile bitiyor mu",userData.endsWith("javascript"));
// console.log("İlk harf: ",userData.startsWith("javascript"));
// console.log("İlk harf:",userData.charAt(0));
// console.log("Girdiğiniz kelimenin sonuna js öğreniyor",userData.concat("js öğreniyor"));
// console.log("0 ile 4 arası karakterleri giriniz:",userData.substring(0,5));



// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)
// function checkNumber(number){
//     if(number>0)
//     {
//         console.log("Sayi pozitiftir");
//     }
//     else if (number<0)
//     {
//         console.log("Negatiftir") ;
//     }
//     else{
//         console.log("Sayi sıfırdır");
//     }
// };





// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

// let number = prompt("Bir sayı girin:");
// number = Number(number);
// checkNumber(number);

// let isOddEven=()=>{
//     const result=4;
//     if(result%2==0)
//     console.log("Çiftir");
//     else
//     console.log("Tektir");
// }
// isOddEven()