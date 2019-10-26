function changeArray(){
    var aInput = [
        {
            name: "Movies", info: "category_name",
            data:[
                {name: "Interstellar", info:"category_data"}, 
                {name: "Dark Knight", info:"category_data"} 
            ]
        },
        {
            name: "Music", info: "category_name",
            data:[
                {name: "Adams", info:"category_data"}, 
                {name: "Nirvana", info:"category_data"} 
            ]
        }
    ];
    var aOutput = [];
    var k = 0;
    for (var i = 0; i < aInput.length; i++) {
        aOutput[k] = JSON.parse(JSON.stringify(aInput[i]));
        delete aOutput[k].data;
        k++;
        
        for (var j = 0; j < aInput[i].data.length; j++){
            aOutput[k] = JSON.parse(JSON.stringify(aInput[i].data[j]));
            k++;
           
        };
    }

    return aOutput;
}

console.log(changeArray());