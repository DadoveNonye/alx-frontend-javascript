interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Nonye",
  lastName: "dadove",
  age: 25,
  location: "lagos",
};

const student2: Student = {
  firstName: "Ebuka",
  lastName: "okafor",
  age: 30,
  location: "Aba",
};

const studentsList: Student[] = [student1, student2];

const renderTable = () => {
  const table = document.createElement("table");
  const headerRow = table.insertRow();
  const header1 = headerRow.insertCell();
  header1.textContent = "First Name";
  const header2 = headerRow.insertCell();
  header2.textContent = "Location";

  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    cell1.textContent = student.firstName;
    const cell2 = row.insertCell();
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
};

renderTable();
