var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            boxes.forEach(function(otherBox) {
                otherBox.classList.remove('clicked');
            });
            this.classList.add('clicked');
        });
    });

    var myVariable;

    function oran_esitle(value) {
        myVariable = value;
        document.getElementById('vergi_orani').value = myVariable;
    }
    // vergi oranın value degerini aktarmak için 

    // function hesapla(){
    //     let vergi_orani=document.getElementById('vergi_orani').value;// uzun uzun yazmamk için kısa isim verdik burada
    //     let tutar=document.getElementById('tutar').value;
    //     let ara_toplam=document.getElementById('ara_toplam').value;
    //     let vergi=document.getElementById('vergi').value;
    //     let genel_toplam=document.getElementById('genel_toplam').value;
    //     ara_toplam=tutar;
    //     vergi=(tutar*vergi_orani)/100;
    //     genel_toplam=tutar+vergi;
    //     console.log(genel_toplam);
    //     console.log(ara_toplam);
    //     console.log(vergi);
    // }

    // function hesapla() {
    //     var vergi_orani = parseFloat(document.getElementById('vergi_orani').value);
    //     var tutar = parseFloat(document.getElementById('tutar').value);
    //     var ara_toplam = document.getElementById('ara_toplam').value;
    //     var vergi = document.getElementById('vergi').value;
    //     var genel_toplam = document.getElementById('genel_toplam').value;
      
    //     ara_toplam = tutar.toFixed(2);
    //     vergi = (tutar * vergi_orani / 100).toFixed(2);
    //     genel_toplam = (tutar + parseFloat(vergi)).toFixed(2);
      
    //     console.log(genel_toplam);
    //     console.log(ara_toplam);
    //     console.log(vergi);
    //   }
    function hesapla() {
        var vergi_orani = parseFloat(document.getElementById('vergi_orani').value);
        var tutar = parseFloat(document.getElementById('tutar').value);
        var ara_toplam = document.getElementById('ara_toplam');
        var vergi = document.getElementById('vergi');
        var genel_toplam = document.getElementById('genel_toplam');
      
        ara_toplam.value = tutar.toFixed(2);
        vergi.value = (tutar * vergi_orani / 100).toFixed(2);
        genel_toplam.value = (tutar + parseFloat(vergi.value)).toFixed(2);
      
      }
      
      function vergi_haric() {
        
        var tutar = parseFloat(document.getElementById('tutar').value);
        var ara_toplam = document.getElementById('ara_toplam');
        var vergi = document.getElementById('vergi');
        var genel_toplam = document.getElementById('genel_toplam');
      
        ara_toplam.value = tutar.toFixed(2);
        vergi.value = (0).toFixed(2);
        genel_toplam.value = (tutar).toFixed(2);
      
      }
   