import { toast } from 'react-toastify';
export function validateSignUp() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let roleType = document.getElementById('role').value;
    let terms = document.getElementById('terms')
    // let firstName = document.getElementById('firstName').value;
    // let research = document.getElementById('research');
    // let submit = document.getElementById('sign-up-button');
    let isValid = true;

    if (password !== confirmPassword){
        toast.error('Confirm Password');
        isValid = false;
    }
    else if (roleType == ''){
        toast.error('Select a Role Type');
        isValid = false;
    }
    else if (checkResearchOptions() == false && checkReviewOptions() == false){
        toast.error('Fill out the Extra Information Below')
        isValid = false;
    }
    else if (!(terms.checked)){
        toast.error('Agree to Terms and Conditions')
        isValid = false;
    }

    return isValid

    
}

const checkReviewOptions = () => {
    let isValid = true;
    let staffType = document.getElementById('staff-type').value;
    let degree = document.getElementById('degree').value;

    if (staffType === '' || degree === ''){
        isValid = false;
    }

    return isValid;
}

const checkResearchOptions = () => {
    let isValid = true;
    let programType = document.getElementById('programType').value;
    let programDiscipline = document.getElementById('programDiscipline').value;

    if (programType === '' || programDiscipline === ''){
        isValid = false;
    }

    return isValid;
}




// if (password === confirmPassword && roleType !== '') {
    //     isValid = true;
    //     if (checkResearchOptions() == true || checkReviewOptions() == true){
    //         toast.success('success')
            
    //     }
        
    // }

    // else{
    //     toast.error('Please Confirm Password Again')
    // }