// setTimeout(()=>{
//     console.log(`hii`);
// },4000)


// const myFunc=(param1)=>{
//     console.log(`${param1} rocks`);
// };
// setTimeout(myFunc,2000,'Vansh');



// const OneFunc=()=>{
//     console.log(`Hello`);
// };

// setTimeout(OneFunc,5000);
// setTimeout(OneFunc,10000);



// setInterval(()=>{
//     console.log(`yoyo`);
// }, 1000);

// setTimeout(() => {
//     clearInterval();
//     // console.log(`This message will appear after 5 seconds.`);
// },5*1000);


let counter=0;
const Func=()=>{
    if(counter<5){
        console.log(`Vansh`);
        counter++;
    }
    else{
        clearInterval(intervalId);
        console.log(`Program stopped after counter exceeded 5.`);
    }
};
const intervalId = setInterval(Func,1000);