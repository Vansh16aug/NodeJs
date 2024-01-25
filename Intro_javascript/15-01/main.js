// //Global scoped
// var m="vansh";
// console.log(m);

// m='hihihi';
// console.log(m);



// //block scoped and can be declared again
// let n='kumar';
// console.log(n);

// n='huhuhu';
// console.log(n);



// //block scoped and non-redeclareable
// const v='rene';
// console.log(v);

// // ERROR OF Assignment to constant variable

// // v='hihihi';
// // console.log(v);




function abc(lpu){
    if(lpu){
        let name='vansh';
        const lname='kumar';
        console.log(name+lname);
    }
}
abc(true);



function abc(lpu) {
  if (lpu) {
    var name = "vansh";
    var lname = "kumar";
    console.log(name + lname);
  }
}
abc(true);