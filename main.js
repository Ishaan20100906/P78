var images = 
["https://i.postimg.cc/MKdhy06Z/family.jpg",
    "https://st.depositphotos.com/1724125/2693/v/950/depositphotos_26930203-stock-illustration-cartoon-dad.jpg", 
"https://i.pinimg.com/originals/01/9b/90/019b90b5f8f04e00e0c7b104da92a67a.jpg", 
"https://s.clipartkey.com/mpngs/s/19-190232_ear-clipart-boy-brother-clipart.png", 
"https://previews.123rf.com/images/dazdraperma/dazdraperma1205/dazdraperma120500017/13708514-illustration-of-cute-baby-girl-with-teddy-bear.jpg"];

var names = ["Family Book", "Somraj Mani", "Tanya Mani", "Ishaan Mani", "Prisha Mani"];
var i = 0;
function update() {
    i++;
    var numbers_of_Family_Members_array = 4
    if(i > numbers_of_Family_Members_array )
    {
        i = 0;
    }
    var updateimage =  images[i];
    var updatename = names[i];
    document.getElementById("family_member_image").src = updateimage;
    document.getElementById("family_member_name").innerHTML = updatename;
}