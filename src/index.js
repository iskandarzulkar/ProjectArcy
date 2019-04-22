/*
  Application Layer :
  - Businness Logic
  - UI
  - Data Store

*/

/*
  codesandbox ---> github --> local computer
*/

const contacts = [
  {
    id: 1,
    fullName: "Genna Arnli",
    phoneNumber: "5278765234",
    email: "garnli0@photobucket.com",
    gender: "Female"
  },
  {
    id: 2,
    fullName: "Jojo Scotchford",
    phoneNumber: "7925766855",
    email: "jscotchford1@booking.com",
    gender: "Female"
  },
  {
    id: 3,
    fullName: "Kakalina Pietasch",
    phoneNumber: "3118199662",
    email: "kpietasch2@auda.org.au",
    gender: "Female"
  },
  {
    id: 4,
    fullName: "Araldo Coil",
    phoneNumber: "5887272284",
    email: "acoil3@behance.net",
    gender: "Male"
  },
  {
    id: 5,
    fullName: "Shadow Maffi",
    phoneNumber: "8455497996",
    email: "smaffi4@bravesites.com",
    gender: "Male"
  }
];

let db = {
  contacts: [] //table, colection
};

function view() {
  // array.map
  let tbody = document.getElementById("table-rows");
  contacts.map((item, index) => {
    let row = tbody.insertRow();
    let id = row.insertCell(0);
    let fullName = row.insertCell(1);
    let phoneNumber = row.insertCell(2);
    let email = row.insertCell(3);
    let gender = row.insertCell(4);
    id.innerHTML = item.id;
    fullName.innerHTML = item.fullName;
    phoneNumber.innerHTML = item.phoneNumber;
    email.innerHTML = item.email;
    gender.innerHTML = item.gender;
  });
}

function add(data) {
  // spread operator ...
  let result = [...contacts, data];
  return result;
}

function edit(data, id) {
  // array.filter
  // spread operator ...
  let result = contacts.map(item => {
    if (item.id == id) {
      return { ...item, ...data };
    }
    return item;
  });
  return result;
}

function remove(id) {
  // array.fil`ter
  // spread operator ....
  let result = contacts.filter(item => item.id !== id);
  return result;
}

function updateDb(data) {
  db = db.contacts = data;
}
let myInput = {
  id: 1,
  fullName: "New Data",
  phoneNumber: "5278765234",
  email: "Data0@photobucket.com",
  gender: "Female"
};
let result;

//add data
result = add(myInput);
updateDb(result);
console.log(db);

//edit data
// result = edit(myInput, 1);
// console.log(result);

//remove data
// result = remove(1);
// console.log(result);
view();
// add(contacts);
// remove(contacts, 1);
