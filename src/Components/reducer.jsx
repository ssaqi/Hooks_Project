
const reducer =(count, action)=>{

switch(action.type)
{

case "INC":
    return (count + 1)

case "DEC":
    let newNum = 0;
    count > 1 ? (newNum = count -1) : (newNum = 0)
    return newNum;
   
 default:
    return count   

}

}


export default reducer;