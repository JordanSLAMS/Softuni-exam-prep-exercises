function countStud(input){
let worker1 = Number(input[0])
let worker2 = Number(input[1])
let worker3 = Number(input[2])
let students = Number(input[3])
let allWorkers = worker1+worker2+worker3
let nededhour =0
while(students >0){
nededhour++
students = students-allWorkers
if(nededhour % 4 ===0){
    nededhour++;
}
}console.log(`Time needed: ${nededhour}h.`);

}countStud(['5','6','4','20'])