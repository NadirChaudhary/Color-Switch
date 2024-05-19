// const buttons = document.querySelectorAll(".button")

// const body = document.querySelector('body')

// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click',function(e){
//         console.log(e);
//         console.log(e.target);
//         if(e.target.id === "grey"){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === "white"){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === "blue"){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === "yellow"){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === "aqua"){
//             body.style.backgroundColor = e.target.id;
//         }
//     })
// })


const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click',function(e){
        const tar = e.target.id
        switch(tar){
            case 'grey':
                body.style.backgroundColor = tar
                break
            case 'white':
                body.style.backgroundColor = tar
                break
            case 'blue':
                body.style.backgroundColor = tar
                break
            case 'yellow':
                body.style.backgroundColor = tar
                break
            case 'aqua':
                body.style.backgroundColor = tar
                break
        }
    })
})