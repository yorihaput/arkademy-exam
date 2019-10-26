function findHighestProfit(harga_saham){
    if(typeof harga_saham != "object"){
        return "Type data salah. Type data harus Array."
    }else{
        aHargaSaham = Array.from(harga_saham);
        var sOutput = "";
        for(var i = 0; i < aHargaSaham.length; i++){
            for(var j = i+1; j < aHargaSaham.length; j++){
                let iHitung = aHargaSaham[j] - aHargaSaham[i];
                if(sOutput < iHitung){
                    sOutput = iHitung;
                }else{
                    sOutput = sOutput;
                }   
            }
        };

        if(parseInt(sOutput) <= 0 || sOutput == ""){
            sOutput = "Tidak bisa mendapatkan profit pada hari-hari ini"
        }
        return sOutput;
    }
}

console.log(findHighestProfit([10, 2, 11, 20, 3, 5]));
console.log(findHighestProfit([33, 29, 11, 3]));