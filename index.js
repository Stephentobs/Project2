let mobile_menu_icon = document.querySelector(".mobile_menu_icon");
let ul=document.querySelector("ul");
let menu_status = "off";

mobile_menu_icon.addEventListener("click", ()=>{
    if(menu_status === "off"){
    ul.style.display = "block";
    menu_status = "on";

}
else{
    ul.style.display = "block";
    menu_status = "off";
    ul.style.display = "none";
}
});




let image1 = document.querySelector(".image1");
let image2 = document.querySelector(".image2");
let image3 = document.querySelector(".image3");
let image4 = document.querySelector(".image4");
let image5 = document.querySelector(".image5");
let image6 = document.querySelector(".image6");
let image7= document.querySelector(".image7");
let image8 = document.querySelector(".image8");
let image9 = document.querySelector(".image9");
let image10 = document.querySelector(".image10");
let image11 = document.querySelector(".image11");


counter = 0;

    setInterval(() =>{
       counter++;
       if(counter >= 5){
         image1.style.transform = "rotateX(0deg)";
         image2.style.transform = "rotateX(90deg)";
         image3.style.transform = "rotateX(90deg)";
         image4.style.transform = "rotateX(90deg)";
         image5.style.transform = "rotateX(90deg)";
         image6.style.transform = "rotateX(90deg)";
         image7.style.transform = "rotateX(90deg)";
         image8.style.transform = "rotateX(90deg)";
         image9.style.transform = "rotateX(90deg)";
         image10.style.transform = "rotateX(90deg)";
         image11.style.transform = "rotateX(90deg)";
        image1.style.opacity = "1";
        image2.style.opacity = "0";
        image3.style.opacity = "0";
        image4.style.opacity = "0";
        image5.style.opacity = "0";
        image6.style.opacity = "0";
        image7.style.opacity = "0";
        image8.style.opacity = "0";
        image9.style.opacity = "0";
        image10.style.opacity = "0";
        image11.style.opacity = "0";
       }
       if(counter >= 10){
        image1.style.transform = "rotateX(90deg)";
        image2.style.transform = "rotateX(0deg)";
        image3.style.transform = "rotateX(90deg)";
        image4.style.transform = "rotateX(90deg)";
        image5.style.transform = "rotateX(90deg)";
        image6.style.transform = "rotateX(90deg)";
        image7.style.transform = "rotateX(90deg)";
        image8.style.transform = "rotateX(90deg)";
        image9.style.transform = "rotateX(90deg)";
        image10.style.transform = "rotateX(90deg)";
        image11.style.transform = "rotateX(90deg)";
       image1.style.opacity = "0";
       image2.style.opacity = "1";
       image3.style.opacity = "0";
       image4.style.opacity = "0";
       image5.style.opacity = "0";
       image6.style.opacity = "0";
       image7.style.opacity = "0";
       image8.style.opacity = "0";
       image9.style.opacity = "0";
       image10.style.opacity = "0";
       image11.style.opacity = "0";
       }
       if(counter >= 15){
        image1.style.transform = "rotateX(90deg)";
        image2.style.transform = "rotateX(90deg)";
        image3.style.transform = "rotateX(0deg)";
        image4.style.transform = "rotateX(90deg)";
        image5.style.transform = "rotateX(90deg)";
        image6.style.transform = "rotateX(90deg)";
        image7.style.transform = "rotateX(90deg)";
        image8.style.transform = "rotateX(90deg)";
        image9.style.transform = "rotateX(90deg)";
        image10.style.transform = "rotateX(90deg)";
        image11.style.transform = "rotateX(90deg)";
       image1.style.opacity = "0";
       image2.style.opacity = "0";
       image3.style.opacity = "1";
       image4.style.opacity = "0";
       image5.style.opacity = "0";
       image6.style.opacity = "0";
       image7.style.opacity = "0";
       image8.style.opacity = "0";
       image9.style.opacity = "0";
       image10.style.opacity = "0";
       image11.style.opacity = "0";
       }
       if(counter >= 20){
         image1.style.transform = "rotateX(90deg)";
        image2.style.transform = "rotateX(90deg)";
        image3.style.transform = "rotateX(90deg)";
        image4.style.transform = "rotateX(0deg)";
        image5.style.transform = "rotateX(90deg)";
        image6.style.transform = "rotateX(90deg)";
        image7.style.transform = "rotateX(90deg)";
        image8.style.transform = "rotateX(90deg)";
        image9.style.transform = "rotateX(90deg)";
        image10.style.transform = "rotateX(90deg)";
        image11.style.transform = "rotateX(90deg)";
       image1.style.opacity = "0";
       image2.style.opacity = "0";
       image3.style.opacity = "0";
       image4.style.opacity = "1";
       image5.style.opacity = "0";
       image6.style.opacity = "0";
       image7.style.opacity = "0";
       image8.style.opacity = "0";
       image9.style.opacity = "0";
       image10.style.opacity = "0";
       image11.style.opacity = "0";
       }
       if(counter >= 25){
         image1.style.transform = "rotateX(90deg)";
         image2.style.transform = "rotateX(90deg)";
         image3.style.transform = "rotateX(90deg)";
         image4.style.transform = "rotateX(90deg)";
         image5.style.transform = "rotateX(0deg)";
         image6.style.transform = "rotateX(90deg)";
         image7.style.transform = "rotateX(90deg)";
         image8.style.transform = "rotateX(90deg)";
         image9.style.transform = "rotateX(90deg)";
         image10.style.transform = "rotateX(90deg)";
         image11.style.transform = "rotateX(90deg)";
        image1.style.opacity = "0";
        image2.style.opacity = "0";
        image3.style.opacity = "0";
        image4.style.opacity = "0";
        image5.style.opacity = "1";
        image6.style.opacity = "0";
        image7.style.opacity = "0";
        image8.style.opacity = "0";
        image9.style.opacity = "0";
        image10.style.opacity = "0";
        image11.style.opacity = "0";
       }
       if(counter >= 30){
         image1.style.transform = "rotateX(90deg)";
         image2.style.transform = "rotateX(90deg)";
         image3.style.transform = "rotateX(90deg)";
         image4.style.transform = "rotateX(90deg)";
         image5.style.transform = "rotateX(90deg)";
         image6.style.transform = "rotateX(0deg)";
         image7.style.transform = "rotateX(90deg)";
         image8.style.transform = "rotateX(90deg)";
         image9.style.transform = "rotateX(90deg)";
         image10.style.transform = "rotateX(90deg)";
         image11.style.transform = "rotateX(90deg)";
        image1.style.opacity = "0";
        image2.style.opacity = "0";
        image3.style.opacity = "0";
        image4.style.opacity = "0";
        image5.style.opacity = "0";
        image6.style.opacity = "1";
        image7.style.opacity = "0";
        image8.style.opacity = "0";
        image9.style.opacity = "0";
        image10.style.opacity = "0";
        image11.style.opacity = "0";
       }
       if(counter >= 35){
         image1.style.transform = "rotateX(90deg)";
         image2.style.transform = "rotateX(90deg)";
         image3.style.transform = "rotateX(90deg)";
         image4.style.transform = "rotateX(90deg)";
         image5.style.transform = "rotateX(90deg)";
         image6.style.transform = "rotateX(90deg)";
         image7.style.transform = "rotateX(0deg)";
         image8.style.transform = "rotateX(90deg)";
         image9.style.transform = "rotateX(90deg)";
         image10.style.transform = "rotateX(90deg)";
         image11.style.transform = "rotateX(90deg)";
        image1.style.opacity = "0";
        image2.style.opacity = "0";
        image3.style.opacity = "0";
        image4.style.opacity = "0";
        image5.style.opacity = "0";
        image6.style.opacity = "0";
        image7.style.opacity = "1";
        image8.style.opacity = "0";
        image9.style.opacity = "0";
        image10.style.opacity = "0";
        image11.style.opacity = "0";
       }
       if(counter >= 40){
         image1.style.transform = "rotateX(90deg)";
         image2.style.transform = "rotateX(90deg)";
         image3.style.transform = "rotateX(90deg)";
         image4.style.transform = "rotateX(90deg)";
         image5.style.transform = "rotateX(90deg)";
         image6.style.transform = "rotateX(90deg)";
         image7.style.transform = "rotateX(90deg)";
         image8.style.transform = "rotateX(0deg)";
         image9.style.transform = "rotateX(90deg)";
         image10.style.transform = "rotateX(90deg)";
         image11.style.transform = "rotateX(90deg)";
        image1.style.opacity = "0";
        image2.style.opacity = "0";
        image3.style.opacity = "0";
        image4.style.opacity = "0";
        image5.style.opacity = "0";
        image6.style.opacity = "0";
        image7.style.opacity = "0";
        image8.style.opacity = "1";
        image9.style.opacity = "0";
        image10.style.opacity = "0";
        image11.style.opacity = "0";
       }
       if(counter >= 45){
         image1.style.transform = "rotateX(90deg)";
         image2.style.transform = "rotateX(90deg)";
         image3.style.transform = "rotateX(90deg)";
         image4.style.transform = "rotateX(90deg)";
         image5.style.transform = "rotateX(90deg)";
         image6.style.transform = "rotateX(90deg)";
         image7.style.transform = "rotateX(90deg)";
         image8.style.transform = "rotateX(90deg)";
         image9.style.transform = "rotateX(0deg)";
         image10.style.transform = "rotateX(90deg)";
         image11.style.transform = "rotateX(90deg)";
        image1.style.opacity = "0";
        image2.style.opacity = "0";
        image3.style.opacity = "0";
        image4.style.opacity = "0";
        image5.style.opacity = "0";
        image6.style.opacity = "0";
        image7.style.opacity = "0";
        image8.style.opacity = "0";
        image9.style.opacity = "1";
        image10.style.opacity = "0";
        image11.style.opacity = "0";
       }
       if(counter >= 50){
         image1.style.transform = "rotateX(90deg)";
         image2.style.transform = "rotateX(90deg)";
         image3.style.transform = "rotateX(90deg)";
         image4.style.transform = "rotateX(90deg)";
         image5.style.transform = "rotateX(90deg)";
         image6.style.transform = "rotateX(90deg)";
         image7.style.transform = "rotateX(90deg)";
         image8.style.transform = "rotateX(90deg)";
         image9.style.transform = "rotateX(90deg)";
         image10.style.transform = "rotateX(0deg)";
         image11.style.transform = "rotateX(90deg)";
        image1.style.opacity = "0";
        image2.style.opacity = "0";
        image3.style.opacity = "0";
        image4.style.opacity = "0";
        image5.style.opacity = "0";
        image6.style.opacity = "0";
        image7.style.opacity = "0";
        image8.style.opacity = "0";
        image9.style.opacity = "0";
        image10.style.opacity = "1";
        image11.style.opacity = "0";
       }
       if(counter >= 55){
         image1.style.transform = "rotateX(90deg)";
         image2.style.transform = "rotateX(90deg)";
         image3.style.transform = "rotateX(90deg)";
         image4.style.transform = "rotateX(90deg)";
         image5.style.transform = "rotateX(90deg)";
         image6.style.transform = "rotateX(90deg)";
         image7.style.transform = "rotateX(90deg)";
         image8.style.transform = "rotateX(90deg)";
         image9.style.transform = "rotateX(90deg)";
         image10.style.transform = "rotateX(90deg)";
         image11.style.transform = "rotateX(0deg)";
        image1.style.opacity = "0";
        image2.style.opacity = "0";
        image3.style.opacity = "0";
        image4.style.opacity = "0";
        image5.style.opacity = "0";
        image6.style.opacity = "0";
        image7.style.opacity = "0";
        image8.style.opacity = "0";
        image9.style.opacity = "0";
        image10.style.opacity = "0";
        image11.style.opacity = "1";
       }
       if(counter === 55){
        counter= 0;
       }
    }, 1000);
