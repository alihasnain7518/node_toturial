console.log('start exe...')
let a = 20;
let b = 40;


let waitingData = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        b = 50;
       resolve(50);
    },  2000);
    
})

waitingData.then((data) => {
    b = data;
    console.log(a + b)
})

console.log(a + b);

console.log('end exe...')