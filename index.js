const mealData = "https://www.themealdb.com/api/json/v1/1/categories.php";
//put the DOMcontentloaded 
document.addEventListener("DOMContentLoaded",()=>{
    fetch (mealData)
    .then((resp)=>resp.json())
    .then((respJSON)=>{// the whole thing is a response from JSON that is why we cant call it out direct, its a tag of the response
        console.log(respJSON.categories[0].strCategory);
        // grab the image and allocate it to the card image place
        let image1 = document.querySelector('.card-img-top');
        image1.src = respJSON.categories[0].strCategoryThumb;
        //grab name of the meal
        let foodName = document.querySelector('.card-title-1');
        foodName.innerHTML=respJSON.categories[0].strCategory;
        //grab meal description and add it to the sample text of the card
        let foodDescription = document.querySelector('.card-text-1');
        foodDescription.innerHTML= respJSON.categories[0].strCategoryDescription;

    })

})
//grab specific button to orger a specific meal
let burgerButton=document.querySelector("#burger-button");
//add event listener to the specific button
burgerButton.addEventListener('click',function orderMealRequest(){
    alert("THANK YOU FOR CHOOSING UTAMU. YOUR BEEF ORDER HAS BEEN PLACED!");
    let orderStatus = document.createElement('h6');
    orderStatus.innerHTML = ("THANK YOU FOR CHOOSING UTAMU. YOUR BEEF ORDER HAS BEEN PLACED!")
    //grab the card and append the paragraph on it
    document.querySelector('#meal1').appendChild(orderStatus);


    // orderButton.style.backgroundColor: btn-primary;
})
//grab elements that need to be linked with the JSON data
//1. grab the image in the card

// let image1 = document.querySelector('.card-img-top');
// image1.src = respJSON.categories[0].strCategoryThumb;
