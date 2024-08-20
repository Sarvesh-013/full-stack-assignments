function calculateAgeGroup() {
    const age = parseInt(document.getElementById('ageInput').value);
    const resultElement = document.getElementById('result');

    if (isNaN(age) || age < 0) {
        resultElement.textContent = 'Please enter a valid age.';
        return;
    }

    let ageGroup = '';

    if (age >= 0 && age <= 12) {
        ageGroup = 'Child';
    } else if (age >= 13 && age <= 19) {
        ageGroup = 'Teenager';
    } else if (age >= 20 && age <= 35) {
        ageGroup = 'Young Adult';
    } else if (age >= 36 && age <= 64) {
        ageGroup = 'Adult';
    } else if (age >= 65) {
        ageGroup = 'Senior';
    }

    resultElement.textContent = `You belong to the "${ageGroup}" age group.`;
}
