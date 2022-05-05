

// let div_elem = document.getElementsByClassName("myDiv")[0]

// let pyramidFunctionTriangle = rows => {

//     for (let i = 0; i <= rows; i++) {

//         let myStars = " "

//         for (let j = 0; j < rows - i; j++)

//             myStars = myStars + '&nbsp;'

//         for (let k = 0; k <= i; k++)

//             myStars = myStars + '* '

//         console.log(myStars)

//         div_elem.innerHTML += myStars + "<br>"

//     }

// }
// pyramidFunctionTriangle(5)

// let pyramidFunctionTriangleLeft = rows => {

//     let div_elem = document.getElementsByClassName("myDiv")[0]

   
//     for(let i = 0; i <= rows; i++){

//         let myStars = ''

//         for(let j = 5; j < rows - i; j++)

//         myStars = myStars + ' '

//         for(let k = 0; k <= i; k++)

//         myStars = myStars + '* '

//         div_elem.innerHTML += myStars + "<br>"

//         console.log(myStars)

       
//     }

// }
// pyramidFunctionTriangleLeft(5)



// let pyramidFunctionTriangleDown = rows => {

//     // let pyramidInHtml = document.getElementById("myPyramid")
//     let div_elem = document.getElementsByClassName("myDiv")[0]

       
//         for(let i = 0; i <= rows; i++){
    
//             let myStars = ''
    
//             for(let j = 0; j < i; j++)
    
//             myStars = myStars + ' '
    
//             for(let k = 0; k < 1 *(rows - i) - 1; k++)
    
//             myStars = myStars + '* '
    
//             // pyramidInHtml.innerHTML = myStars
// //             div_elem.innerHTML += myStars + "<br>"

    
//             console.log(myStars)
           
//         }
    
//     }
//     pyramidFunctionTriangleDown(6)

// let pyramidFunctionTriangleRight = rows => {

//         let pyramidInHtml = document.getElementById("myPyramid")
           
//             for(let i = 1; i <= rows; i++){
        
//                 let myStars = ''
        
//                 for(let j = 0; j < rows - i; j++)
        
//                 myStars = myStars + ' '
        
//                 for(let k = 0; k < i; k++)
        
//                 myStars = myStars + '*'
        
//                 // pyramidInHtml.innerHTML = myStars + "<br>"
        
//                 console.log(myStars)
               
               
//             }
        
//         }
//         pyramidFunctionTriangleRight(6)



// --------------------------------------------------------------

let myCelcius = document.getElementById("C")
let myFarenheit = document.getElementById("F")
let result = document.getElementsByClassName("result")[0]
let resultsPlace = document.getElementsByClassName("resultsPlace")[0]
let degree = document.getElementById("degree")
let result2 = document.getElementsByClassName("result2")[0]
let resultsPlace2 = document.getElementsByClassName("resultsPlace2")[0]



// myInputValue()

// let celcious = degree =>{
//     let cTemp = degree.value;
//     let cToFaren = cTemp * 9 / 5 + 32;
//     degree.value= `${cTemp} \°C is  ${cToFaren} \°F`
//     console.log(degree)
// }
// celcious(degree)


    myCelcius.addEventListener('click', function(){
        if(degree.value === ""){
            alert("You mean 0 ?")
        }
        result.classList.toggle("result1")
        let myCelcius1 = degree.value
        let myTemp = Math.round(degree.value * 9 / 5 + 32)
        resultsPlace.innerHTML = `${myCelcius1} \°C is ${myTemp}\°F`
      
    })


// let farenheit = myF => {
//     let Ftemp = myF;
//     let FarenToC = (Ftemp - 32) * 5 / 9
//     myF = `${Ftemp} \°F is  ${FarenToC} \°C`
//     console.log(myF)
// }
// farenheit(140)


myFarenheit.addEventListener('click', function(){
        if(degree.value === ""){
            alert("You mean 0 ?")
        }
        result2.classList.toggle("result3")
        let Farenheit = degree.value
        let MyFaren = Math.round((degree.value - 32 ) * 5 / 9)
        resultsPlace2.innerHTML = `${Farenheit} \°F is ${MyFaren} \°C`


    })



    let myButton = document.getElementsByClassName("myButton")[0]

    myButton.addEventListener('click', function(){

         location.reload();

    })
