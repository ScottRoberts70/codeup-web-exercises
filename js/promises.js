"use strict";
(function () {

    const firstGithubCommit = (username) => fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${GITHUB_KEY}`}}).then(response => response.json()).then(res => console.log(`${username} last commit was: ${res[0].created_at}`));

    firstGithubCommit('ScottRoberts70')

})
    ();



// const firstGithubCommit = (username) => fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${GITHUB_KEY}`}}).then(response => response.json()).then(res => console.log(`${username} last commit was: ${res[0].created_at}`));
//
// firstGithubCommit('ScottRoberts70')