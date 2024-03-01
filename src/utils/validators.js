export const passwordValidate = value => {
    if(value.length < 3){
        return "Password must have more then 2 characters";
    } 
    if (value.length > 20){
        return "Password must have less then 21 characters";
    }
};