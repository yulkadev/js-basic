const multiplyNumbers = (numbers, multiplier) => {
    /*
    Write code that will return multiplied numbers, each position of element concerns to multiplier by position
        @param {array} numbers - array of numbers
        @param {array} multiplier - array of numbers that should be multiplied
        @return {array} result - multiplied numbers
    */

    // *** YOUR CODE START HERE ***
    const result = [];
    // *** YOUR CODE END HERE ***

    return { result };
};
multiplyNumbers([1, 2, 3, 5, 8, 2, 3.4, 7], [4, 3, 5, 8, 22, 5, 10, 1]);


const mixupStartEndValues = (array) => {
    /*
    Write code that will mixup start and end values
        @param {array} array - array of numbers
        @return {array} result - array of numbers
    For example:
        @param {array} arrays - [ 1, 2, 3, 4, 5]
        @return {array} result - [ 5, 2, 3, 5, 1 ]
    */

    // *** YOUR CODE START HERE ***
    const result = [];
    // *** YOUR CODE END HERE ***

    return { result };
};
mixupStartEndValues([ 1, 2, 3, 4, 5]);

const isStudentPassedExams = (examesData) => {
    /*
    Write code that will indicate is user passed all exams or not,
    comparator is that mark is bigger or equal 80
        @param {array} examesData - array of objects,
            object format: {
                studentName,
                grade,
                examName,
                mark
            }
        @return {boolean} isPassed - passed = true; not passed =  false;
    */

    // *** YOUR CODE START HERE ***
    const isPassed = false;
    // *** YOUR CODE END HERE ***

    return { isPassed };
};
isStudentPassedExams([
    { studentName: 'Bob', grade: 2, examName: 'English', mark: 81 },
    { studentName: 'Bob', grade: 1, examName: 'Programming', mark: 95 },
    { studentName: 'Bob', grade: 2, examName: 'Math', mark: 85 }
]);


const isGroupHaveDeductedStudents = (studentsData) => {
    /*
    Write code that will indicate is group have deducted students,
    comparator is that at least one of the students hasn't pass exam
    Hint: use function isStudentPassedExams to check each student
        @param {array} studentsData - array of arrays of objects,
            object format: {
                studentName,
                grade,
                examName,
                mark
            }
        @return {boolean} isHaveDeducted - have = true; not have =  false;
    */

    // *** YOUR CODE START HERE ***
    const isHaveDeducted = false;
    // *** YOUR CODE END HERE ***

    return { isHaveDeducted };
};
isGroupHaveDeductedStudents([
    { studentName: 'Bob', grade: 2, examName: 'English', mark: 81 },
    { studentName: 'Bob', grade: 1, examName: 'Programming', mark: 95 },
    { studentName: 'Bob', grade: 2, examName: 'Math', mark: 75 }
]);


const getMean = (numbers) => {
    /*
    Write code that will return mean of numbers using reduce
        @param {array} numbers - array of numbers
        @return {number} mean - number of numbers
    */

    // *** YOUR CODE START HERE ***
    const mean = 0;
    // *** YOUR CODE END HERE ***

    return { mean };
};
getMean([ 4, 5, 6, 8, 2, 5 ]);


const getMean = (numbers) => {
    /*
    Write code that will return mean of numbers using reduce
        @param {array} numbers - array of numbers
        @return {number} mean - number of numbers
    */

    // *** YOUR CODE START HERE ***
    const mean = 0;
    // *** YOUR CODE END HERE ***

    return { mean };
};
getMean([ 4, 5, 6, 8, 2, 5 ]);


const getUniqueValues = (array) => {
    /*
    Write code that will return array with unique values
        @param {array} array - array of numbers
        @return {number} unique - array of unique numbers
    */

    // *** YOUR CODE START HERE ***
    const unique = 0;
    // *** YOUR CODE END HERE ***

    return { unique };
};
getUniqueValues([ 4, 5, 6, 8, 2, 5, 8, 4, 9, 10, 2, 43, 32, 32, 8 ]);

const sortArray = (array) => {
    /*
    Write code that will return ascend sorted array
        @param {array} array - array of numbers
        @return {array} sorted - sorted array
    */

    // *** YOUR CODE START HERE ***
    const sorted = 0;
    // *** YOUR CODE END HERE ***

    return { sorted };
};
sortArray([ 4, 5, 6, 8, 2, 5, 8, 4, 9, 10, 2, 43, 32, 0,  32, 8 ]);
