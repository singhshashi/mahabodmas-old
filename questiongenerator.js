function generateQuestion(difficultyLevel) {
    //there are three levels to the game. for easy the person has to perform  
    //5 operations for medium 10 operations and for hard 15 operations.
    var numbers = [];
    var rangeUpperLimit = 0;
    var numberOfOperations = 5;
    if (difficultyLevel == 1) {
        rangeUpperLimit = 25;
    }
    else if (difficultyLevel == 2) {
        rangeUpperLimit = 50;
    }
    else {
        rangeUpperLimit = 100;
    }
    
    for (var i = 0; i < numberOfOperations; i++) {
        var num = Math.floor(Math.random() * rangeUpperLimit) + 1;
        numbers.push(num);
    }

    var questionString = "";
    $.each(numbers, function (index, value) {
        questionString += value.toString() + getRandomOperator(difficultyLevel);
    });

    questionString = questionString.substr(0, questionString.length - 1);

    return questionString;


}

function getRandomOperator(difficultyLevel) {
    var operators = [];
    if (difficultyLevel == 1) {
        operators = ["+", "-"];
    } else {
        operators = ["+", "-", "*"];
    }

    var randomIndex = Math.floor(Math.random() * operators.length );

    return operators[randomIndex];
}





