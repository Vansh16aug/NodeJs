const bioData={
    name:"Vansh",
    age:19,
    channel:"VanshCoder"
};
console.log(bioData);
const jsonData=JSON.stringify(bioData); //convert object to json
console.log(jsonData);
console.log(jsonData.name); //undefined
const objData=JSON.parse(jsonData); //convert json to object
console.log(objData);