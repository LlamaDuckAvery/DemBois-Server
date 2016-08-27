class Calculator {
    numberone: number;
    numbertwo: number;
    constructor (){
    }
    public add(numbers, sum){
        return numbers[0] + numbers[1];
    }
    public subtract(numbers, difference){
        return numbers[0] - numbers[1];

    }
    public multiply(numbers, product){
        return numbers[0] * numbers[1];

    }
    public divide(numbers, quotient){
        return numbers[0] / numbers[1];
    }
    
}

var calculate = new Calculator();
