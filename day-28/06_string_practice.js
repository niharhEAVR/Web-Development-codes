let firstName = prompt("Enter your First name: ");
let lastName = prompt("Enter your Last name: ");

firstName = firstName.toLowerCase();
lastName = lastName.toLowerCase();

let nameLength = firstName.length + lastName.length;

alert(`Your username is \@${firstName}${lastName}${nameLength}`)