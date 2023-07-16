let darkModu=()=>{
    //alert("Dark Modu");
document.body.classList.toggle("dark_mode")
}
//input search
$(document).ready(function() {
    const searchApi=["Adana","Balıkesir","Çorum","Denizli","Diyarbakır","Edirne","Malatya","Van"];
    $("#tags").autocomplete(
        {source:searchApi}
    )
});
// Footer
let newDate=()=>{
    // JS Dom
    document.getElementById("date_id").innerHTML=new Date().getFullYear();
    // Jquery Dom
    // $("#date_id").html(date);
}
newDate()