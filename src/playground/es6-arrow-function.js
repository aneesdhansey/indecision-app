function getFirstName(fullName) {
    return fullName.split(' ')[0];
}

console.log(getFirstName('Anees Dhansey'));

const getFirstNameArrow = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstNameArrow('Humaira Dhansey'));




const getFirstNameArrowConcise = fullName => fullName.split(' ')[0];


console.log(getFirstNameArrowConcise('Amber Dhansey'));


console.log(getFirstNameArrowConcise('Abeer Dhansey'));

