const mealData = "https://www.themealdb.com/api/json/v1/1/categories.php";
//put the DOMcontentloaded 
document.addEventListener("DOMContentLoaded",()=>{
    fetch (mealData)
    .then((resp)=>resp.json())
    .then((respJSON)=>{// the whole thing is a response from JSON that is why we cant call it out direct, its a tag of the response
        console.log(respJSON.categories[0].strCategory);
        // grag the beef data(the image title and food description)
        let beefImage = document.querySelector('.card-img-top');
        beefImage.src = respJSON.categories[0].strCategoryThumb;
        let beefName = document.querySelector('.card-title-1');
        beefName.innerHTML=respJSON.categories[0].strCategory;
        let beefDescription = document.querySelector('.card-text-1');
        beefDescription.innerHTML= respJSON.categories[0].strCategoryDescription;

        // grag the chicken data(the image title and food description)
        let chickenImage = document.querySelector('#chicken-image')
        chickenImage.src = respJSON.categories[1].strCategoryThumb;
        let chickenName = document.querySelector('#chicken-name')
        chickenName.innerHTML=respJSON.categories[1].strCategory;
        let chickenDescription = document.querySelector('#chicken-describe')
        chickenDescription.innerHTML = respJSON.categories[1].strCategoryDescription;
        
        //grab the Dessert data(the image title and food description)
        let dessertImage = document.querySelector('#dessert-image');
        dessertImage.src = respJSON.categories[2].strCategoryThumb;
        let dessertName = document.querySelector('#dessert-name')
        dessertName.innerHTML = respJSON.categories[2].strCategory;
        let dessertDescription = document.querySelector('#dessert-describe')
        dessertDescription.innerHTML = respJSON.categories[2].strCategoryDescription;

        // grab the pork data(the image title and food description)
        let porkImage = document.querySelector('#pork-image');
        porkImage.src = respJSON.categories[6].strCategoryThumb;
        let porkName = document.querySelector('#pork-name')
        porkName.innerHTML =  respJSON.categories[6].strCategory;
        let porkDescription = document.querySelector('#pork-describe')
        porkDescription.innerHTML = respJSON.categories[6].strCategoryDescription;
    })
})
//add event listener to specific buttons(id="chicken-button", id="pork-button", id="dessert-button")
let orderMealRequest=function(){
    alert("SUCCESS!. YOUR ORDER HAS BEEN PLACED.");
}
let beefButton=document.querySelector("#burger-button");
beefButton.addEventListener('click',function orderBeefStatus(){
    orderMealRequest()
    let beefStatus=document.createElement('p');
    beefStatus.textContent = "ORDER WILL BE READY IN 10 MINUTES!"
    document.querySelector('#beef-status').appendChild(beefStatus)
})

let chickenButton = document.querySelector("#chicken-button");
console.log(chickenButton);
chickenButton.addEventListener('click',function orderChickenStatus(){
    orderMealRequest()
    let chickenStatus=document.createElement('p');
    chickenStatus.textContent = "ORDER WILL BE READY IN 15 MINUTES!"
    document.querySelector('#chicken-status').appendChild(chickenStatus)
})

let porkButton = document.querySelector("#pork-button");
console.log(porkButton);
porkButton.addEventListener('click',function orderPorkStatus(){
    orderMealRequest()
    let porkStatus=document.createElement('p');
    porkStatus.textContent = "ORDER WILL BE READY IN 8 MINUTES!"
    document.querySelector('#pork-status').appendChild(porkStatus)
});

let dessertButton = document.querySelector("#dessert-button");
console.log(dessertButton);
dessertButton.addEventListener('click',function orderDessertStatus(){
    orderMealRequest()
    let porkStatus=document.createElement('p');
    porkStatus.textContent = "ORDER WILL BE READY IN 20 MINUTES!"
    document.querySelector('#dessert-status').appendChild(porkStatus)
});

const allStars = document.querySelectorAll('.star')
let currentRating= document.querySelector('.cuttent-rating')
console.log(allStars);
allStars.forEach((star, i)=> {
    star.addEventListener('click',function(){
        let currentStarLevel = i + 1;
        currentRating.innerHTML= `${currentStarLevel} 0f 5`

        allStars.forEach((star,j)=>{
            if(currentStarLevel>=j+1){
                star.innerHTML = '&#9733'
            } else{
                star.innerHTML = '&#9734'
            }
        })
    })
})
const toDoForm = document.querySelector('form');
toDoForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e)
    console.log(e.target)
    handleToDo(e.target.comment.value)
    toDoForm.reset()

})
function handleToDo(todo){
    console.log(todo)
    let comments = document.createElement('p')
    comments.textContent = todo
    console.log(comments)
    let commentList = document.querySelector('#comments-section');
    commentList.appendChild(comments);
}
