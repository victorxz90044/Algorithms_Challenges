function fizzbuzz(number){
    function check(divisible,string){
        if(number%divisible==0){
            return result.push(string)
        }

    }
    
    result = [];
    result.push(number);
    check(3,"fizz");
    check(5,"buzz");
    
    return result;


}


console.log(fizzbuzz(98));