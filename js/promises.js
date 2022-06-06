"use strict";
(function () {

    const lastComit = (username) => fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${GITHUB_KEY}`}}).then(res => res.json()).then(res => console.log(`${username} last commit was: ${res[0].created_at}`));

    lastComit('ScottRoberts70')


    //     let newUser = {
    //         name: `${data[0].payload.commits[0].author.name}`,
    //         username: `${data[0].actor.login}`,
    //         last_commit: `${data[0].created_at}`,
    //         message: `${data[0].payload.commits[0].message}`,
    //     }
    //     return newUser;
    // })

})
    ();



// const firstGithubCommit = (username) => fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${GITHUB_KEY}`}}).then(response => response.json()).then(res => console.log(`${username} last commit was: ${res[0].created_at}`));
//
// firstGithubCommit('ScottRoberts70')