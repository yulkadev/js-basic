const convertDateToFormat = (date, format) => {
    /*
    Write code that will return date in required format
        @param {date} date - any date
        @param {string} format - format of the date, possible variants:
            'LT'   // 5:49 PM
            'LTS'  // 5:49:28 PM
            'L'    // 08/14/2018
            'l'    // 8/14/2018
            'LL'   // August 14, 2018
            'll'   // Aug 14, 2018
            'LLL'  // August 14, 2018 5:49 PM
            'lll'  // Aug 14, 2018 5:49 PM
            'LLLL' // Tuesday, August 14, 2018 5:49 PM
            'llll' // Tue, Aug 14, 2018 5:50 PM
        @return {string} formatedDate - formated date
    */

    // *** YOUR CODE START HERE ***
    const formatedDate = '';
    // *** YOUR CODE END HERE ***

    return { formatedDate };
};
convertDateToFormat(new Date(), 'lll' );
convertDateToFormat(new Date(), 'LL' );
convertDateToFormat(new Date(), 'LT' );
convertDateToFormat(new Date(), 'll' );


const convertToUtc = (date, timeZone) => {
    /*
    Write code that will convert date to UTC using specific timeZone
        @param {date} date - any date
        @param {integer} timeZone - difference in zones
        @return {string} utcDate - date in utc
    */

    // *** YOUR CODE START HERE ***
    const utcDate = '';
    // *** YOUR CODE END HERE ***

    return { utcDate };
};
convertToUtc(new Date(), 5);


/*
Theory:
 - Write what mean each letter in YYYY-MM-DDTHH:mm:ss.sssZ
 - What does getTime() do?
 - What is date typeof?
 - What is a timestamp?
*/

