let students = [];

let form = document.getElementById('studentForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    addStudent();
});

function addStudent() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let course = document.getElementById('course').value;

    // Check empty fields
    if (!name || !email || !phone || !age || !address || !course) {
        document.getElementById('message').textContent =
            'Please fill all the fields.';
        return;
    }

    // Check age
    if (age < 18) {
        document.getElementById('message').textContent =
            'Age must be 18 or older.';
        return;
    }

    let student = {
        name: name,
        email: email,
        phone: phone,
        age: age,
        address: address,
        course: course
    };

    students.push(student);

    displayStudents();

    form.reset();

    document.getElementById('message').textContent =
        'Form submitted successfully!';
}


function displayStudents() {

    let table = document.getElementById('studentTable');

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Address</th>
            <th>Course</th>
        </tr>
    `;

    for (let i = 0; i < students.length; i++) {

        let row = `
            <tr>
                <td>${students[i].name}</td>
                <td>${students[i].email}</td>
                <td>${students[i].phone}</td>
                <td>${students[i].age}</td>
                <td>${students[i].address}</td>
                <td>${students[i].course}</td>
            </tr>
        `;

        table.innerHTML += row;
    }
}