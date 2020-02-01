
const arrayOfStudents = []


const hideJumbo = () => {
    document.getElementById('hogwartsJumbo').classList.add('invisible');
    document.getElementById('studentForm').classList.remove('invisible');
};

document.getElementById('startSorting').addEventListener('click', hideJumbo);

const sortStudent = () => {
    let student = document.getElementById('firstYearsName').value;
    let arrOfHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    let randomHouse= arrOfHouses[Math.floor(Math.random()*arrOfHouses.length)];
    arrayOfStudents.push(person = {name: student, house: randomHouse});
    createUniqueId(person);
    
    console.log(arrayOfStudents);
    studentPrinter(arrayOfStudents);
};
let studentId = 0; 
const createUniqueId = (studentCard) => {

if (studentCard.id == null){
  studentCard.id = "student" + studentId++; 
}
};


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    document.getElementById('firstYearsName').value = "";

  };
  const studentPrinter = (names) => {
    let domString = '';
    for(let i = 0; i< names.length; i++){
      domString += '<div class="col-md-6 col-lg-4 card-separation">'
      domString += '<div class="card">';
      domString += '  <div class="card-body">';
      domString += `    <h5 class="card-title">${names[i].name}</h5>`;
      domString += `    <p class="card-text">${names[i].house}</p>`;
      domString += `<button type="button" class="btn btn-light expelButton" id="${names[i].id}">Expel</button>`
      domString += '  </div>';
      domString += '</div>';
      domString += '</div>';
    }
    printToDom('allStudents', domString);
    activateExpel();

  };
document.getElementById('sortButton').addEventListener('click', sortStudent);

const activateExpel = () => {
let getButton = document.getElementsByClassName('expelButton');
for( let i= 0; i < getButton.length; i++){
  getButton[i].addEventListener('click', expelStudent);
  
};

};
const expelStudent = (e) =>{
console.log(e);
console.log(e.target.id);
for( let i= 0; i < arrayOfStudents.length; i++){
  if(arrayOfStudents[i].id === e.target.id){
      arrayOfStudents.splice(i, 1);   
  }

}
studentPrinter(arrayOfStudents);
console.log(arrayOfStudents);
};
