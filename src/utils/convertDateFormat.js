export default function converDateFormat(date){
    const newDate = new Date();
    const dateItems = date.split("-");
    const dayNum = dateItems[2].slice(0,1);
    const day = dayNum[0]===0 ?  dayNum[1] : dayNum;
  
    newDate.setFullYear(dateItems[0]);
    newDate.setDate(day);
    newDate.setMonth(dateItems[1] - 1);
    
      return newDate.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
  }