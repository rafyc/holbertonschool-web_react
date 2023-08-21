interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 : Student = {
    firstName: "John",
    lastName: 'Lenon',
    age: 20,
    location: "San Fransico"
  };

  const student2 : Student = {
    firstName: "Jane",
    lastName: 'Doe',
    age: 22,
    location: "Boston"
  };

  const studentsList : Student[] = [student1, student2];

  const table = document.createElement("table");

  studentsList.forEach((student) => {
      const row = table.insertRow();
      const nameCell = row.insertCell();
      const locationCell = row.insertCell();
      nameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  });

  document.body.appendChild(table);
