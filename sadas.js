function a (data){
    let list = data.shift().split("|")
 let index =0
 let comand = data[index]
 index++;
 while(comand !== "Done"){
    let tokens = comand.split(" ")
    let item
    switch(tokens[0]){
       case "Remove":
        item = tokens[1]
        if(list.indexOf(item) == -1 ){
            list.shift(list.indexOf(item),0)
        
        
           
        }
        break
    case "Add":
        
        if(list.indexOf(item) == -1 ){
        //list.(item)
    

    }
        if(list.indexOf(tokens[1]) == -1 ){

    }
        break
    case "Check Even": 
        if(list.indexOf(tokens[1]) == -1 ){

    }
        break
    
    }

    comand = data[index]
    index++
 }console.log(list);


} a (["pa|Do|ha|mm|er",
"Remove 0",
"Add om 1",
"Check Even",
"Done"])