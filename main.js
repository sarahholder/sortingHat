
const arrayOfStudents = [];

const hideJumbo = () => {
    document.getElementById('hogwartsJumbo').classList.add('invisible');
    document.getElementById('studentForm').classList.remove('invisible');
};
document.getElementById('startSorting').addEventListener('click', hideJumbo);

const makeid = () => {
    let length = 4;
    let result  = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;  
 };
 
 const house = () => {
    let length = 1;
    let result = '';
    let characters = '1234';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result; 
 };
 houseName = () => {
     
     if(house() === '1'){
               return ("Ravenclaw");
           }else if (house() === '2'){
               return ("Slytherin");
           } else if (house() === '3') {
               return ("Griffindor");
           } else {
               return ("Hufflepuff");} 
            };

const generateStudent = () => {
    document.getElementById('studentForm').classList.add("");

    let student= document.getElementById('firstYearsName').value;
    arrayOfStudents.push({name: student, id: makeid(), house: houseName()});

    console.log(arrayOfStudents);
};

document.getElementById('sortButton').addEventListener('click', generateStudent);

 const printToDom = (divId, textToPrint) => {
     const selectedDiv = document.getElementById(divId);
     selectedDiv.innerHTML = textToPrint
   };
   const studentPrinter = (arr) => {
     let domString = '';
     for(let i= 0; i < arr.length; i++){
       domString += `<div class="col-md-6 col-lg-4 card-separation">`;
       domString += `<div class="card">`;
       domString +=     `<div class="card-body">`;
       domString += `    <h5 class="card-title">${arr[i].name}</h5>`;
       domString += `    <p class="card-text">${arr[i].house}</p>`;
       domString += `<button type="button" id="expel--${arr[i].id}" class="btn btn-light">Expel</button>`;
       domString += ` </div>`;
       domString += `</div>`;
       domString += `</div>`;
     };
     printToDom('allStudents', domString);
   };
   
   studentPrinter(arrayOfStudents);
   
