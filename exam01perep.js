function zad1(input){
let days = Number(input[0])
let dayliyplunder= Number(input[1])
let target = Number(input[2])
let curent = 0

for (i =1 ; i <=days ; i++ ){
  curent +=dayliyplunder
  if(i % 3 ==0){              
    curent += dayliyplunder * 0.50            //procnetnto umnojenie! na den 3
  }if(i % 5 ==0){
    curent *=0.70
  }
  
}//console.log(curent);
if(curent >= target){
    console.log(`Well done your at ${curent.toFixed(2)} good job`)
  }else{       
    percent = curent / target *100
    console.log(`Now your at ${curent.toFixed(2)}% `)
  }
}zad1([5,10,100])