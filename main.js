
const arrayOfStudents = [

];
const hideJumbo = () => {
    document.getElementById('hogwartsJumbo').classList.add('invisible');
    document.getElementById('studentForm').classList.remove('invisible');
};
document.getElementById('startSorting').addEventListener('click', hideJumbo);

const makeid = () => {
    let length = 4;
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;  
 }
 const house = () => {
    let length = 1;
    let result           = '';
    let characters       = '1234';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result; 
 };

 
 const houseName = () => {
    
 if(house() === 1){
    hogHouse = "Ravenclaw";
}else if (house() === 2){
    hogHouse = "boom";
} else if ( house() === 3) {
    hogHouse = 'slyterin'
} else {
    hogHouse = 'test'}
    console.log(hogHouse);
 };

 
console.log(house());
 

const generateStudent = () => {
    document.getElementById('studentForm').classList.add('invisible');
    let student= document.getElementById('firstYearsName').value;
    arrayOfStudents.push({name: student, radId: makeid()});
    
    

    console.log(arrayOfStudents);
};

document.getElementById('sortButton').addEventListener('click', generateStudent);

 const printToDom = (divId, textToPrint) => {
     const selectedDiv = document.getElementById(divId);
     selectedDiv.innerHTML = textToPrint
   };
   const studentPrinter = (names) => {
     let domString = '';
     for(let i = 0; i< names.length; i++){
       domString += '<div class="col-md-6 col-lg-4 card-separation">'
       domString += '<div class="card">';
       domString += '  <div class="card-body">';
       domString += `    <h5 class="card-title">${names[i].name}</h5>`;
       domString += `    <p class="card-text">${names[i].house}</p>`;
       domString += `<button type="button" id="expel--${names[i].id}" class="btn btn-light">Expel</button>`
       domString += '  </div>';
       domString += '</div>';
       domString += '</div>';
     }
     printToDom('allStudents', domString);
   };
   
   


