export const passwordValidate = value => {
    if(value.length < 3){
        return "Password must have more then 2 characters";
    } 
    if (value.length > 20){
        return "Password must have less then 21 characters";
    }
};

export const notEarlierThenToday = (date) => {
    let date1 = date.split("-"),
      date2 = new Date().toISOString().substring(0, 10).split("-"),
      res = true;
      res = date1[0] >= date2[0];
      if(date1[0] === date2[0]){
        res = date1[1] >= date2[1];
        if(date1[1] === date2[1]){
          res = date1[2] >= date2[2]
        }
      }
      if(!res) return "Chosen date is early than today"
  };