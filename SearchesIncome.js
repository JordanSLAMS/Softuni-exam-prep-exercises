function googleIncome(input){
let incomeFormSearch = Number(input.shift(0));
let numberOfUsers = Number(input.shift(1));
curent =0
input.map(Number)

for(let index = 1 ; index <=numberOfUsers ; index++){

  let curentsearches = (input[index])
  let sum = curentsearches* incomeFormSearch
  if(curentsearches >5){ 
    incomeFormSearch =incomeFormSearch*2 
    sum +=  incomeFormSearch*curentsearches
    console.log(sum);
  
    if(index ===3){
        let sum = curentsearches* incomeFormSearch
        sum *= 3
        console.log(sum);
    }
}
}
}googleIncome((["5.5",
"3",
"1",
"10",
"5"]))