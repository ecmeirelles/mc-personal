export const getUserAge = (birthDate) => {
    birthDate = new Date(birthDate);
    let age = new Date().getFullYear() - birthDate.getFullYear();
    const currentMonth = new Date().getMonth() - birthDate.getMonth();

    if (currentMonth < 0 || (currentMonth === 0 && new Date().getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export const adultBmiCalculate = (bmiValue) => {
    let bmi = {};

    switch (true) {
        case (bmiValue < 16):
            bmi.classification = "Magreza Grau III";
            bmi.risk = "unknown";
            break;
        case (bmiValue >= 16 && bmiValue < 17):
            bmi.classification = "Magreza Grau II";
            bmi.risk = "unknown";
            break;
        case (bmiValue >= 17 && bmiValue < 18.5):
            bmi.classification = "Magreza Grau I";
            bmi.risk = "unknown";
            break;
        case (bmiValue >= 18.5 && bmiValue < 25):
            bmi.classification = "Eutrofia";
            bmi.risk = "unknown";
            break;
        case (bmiValue >= 25 && bmiValue < 30):
            bmi.classification = "Sobrepeso";
            bmi.risk = "increased";
            break;
        case (bmiValue >= 30 && bmiValue < 35):
            bmi.classification = "Obesidade Grau I";
            bmi.risk = "moderate";
            break;
        case (bmiValue >= 35 && bmiValue <= 40):
            bmi.classification = "Obesidade Grau II";
            bmi.risk = "serious";
            break;
        case (bmiValue > 40):
            bmi.classification = "Obesidade Grau III";
            bmi.risk = "verySerious";
            break;
        default:
            break;
    }

    return bmi;
}

export const elderlyBmiCalculate = (bmiValue) => {
    let bmi = {};

    switch (true) {
        case (bmiValue < 22):
            bmi.classification = "Magreza";
            bmi.risk = "unknown";
            break;
        case (bmiValue >= 22 && bmiValue < 27):
            bmi.classification = "Eutrófico";
            bmi.risk = "unknown";
            break;
        case (bmiValue >= 27):
            bmi.classification = "Sobrepeso";
            bmi.risk = "unknown";
            break;
        default:
            break;
    }

    return bmi;
}

export default ({height, weight, birthDate}) => {
    const bmiValue = (weight / (height*height)).toFixed(2);

    let bmi = getUserAge(birthDate) >= 65 ?
        elderlyBmiCalculate(bmiValue) :
        adultBmiCalculate(bmiValue);
    bmi.value = bmiValue;

    return bmi;
}