const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let langCount = users.filter(function(el) {
        return el.languages.length >= 3
});
console.log(langCount)

// Use .map to create an array of strings where each element is a user's email address

let emailList = users.map(function(el){
    return el.email;
});
console.log(emailList);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average
const averageExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience / user.length;
}, 0 );

console.log("The average years of experience is: " + averageExp + ' years!');

// Use .reduce to get the longest email from the list of users.

const longest = users.reduce(function (a, b) {
    return a.email.length > b.email.length ? a : b; }).email;
console.log("The longest email is, " + longest);


// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const userNames = users.reduce(function(name, val) {
    let el = name.length ? ", " : "";
    return name + el + val.name;
}, '');
console.log("My instructors are: " + userNames+ ".");


// Use .reduce to get the unique list of languages from the list of users.
