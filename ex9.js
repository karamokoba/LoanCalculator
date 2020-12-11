var people = [{
    name: ['Alyssa', 'P.', 'Hacker'],
    age: 26
  },
  {
    name: ['Ben', 'L.', 'Bitdiddle'],
    age: 34
  },
  {
    name: ['Eva', 'Lu', 'Ator'],
    age: 40
  },
  {
    name: ['Lem', 'E.', 'Tweakit'],
    age: 45
  },
  {
    name: ['Louis', 'M.', 'Reasoner'],
    age: 21
  },
  {
    name: ['Shahan', 'Haig', 'Krakirian'],
    age: 26
  }
];

document.getElementById("all").addEventListener("click", fullNamelist);

function fullNamelist() {


  let text = "";
  let i;
  let j;
  let name;
  for (i = 0; i < 6; i++) {
    for (j = 0; j < 3; j++) {
      nama = people[i].name[j];
      text += nama + " ";
    }
    text += "<br>";
  }


  document.getElementById("solution").innerHTML = text;
}



document.getElementById("age-button").addEventListener("click", getAgefunction);

function getAgefunction() {
  let test1 = document.getElementById("name-input").value;

  let k;

  let test2;

  for (k = 0; k < 6; k++) {
    if (test1 == 'Alyssa') {
      test2 = people[1].age;
    } else if (test1 == 'Ben') {
      test2 = people[2].age;
    } else if (test1 == 'Eva') {
      test2 = people[3].age;
    } else if (test1 == 'Lem') {
      test2 = people[4].age;
    } else if (test1 == 'Louis') {
      test2 = people[5].age;
    } else if (test1 == 'Shahan') {
      test2 = people[6].age;
    } else {
      test2 = 'Wrong Input!';
    }
  }
  document.getElementById("solution1").innerHTML = test2;
}
