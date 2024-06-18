#!/usr/bin/env node

const { exec }=require('child_process');

const repo='https://github.com/priyankarpal/tep2';

exec(`git clone ${repo}`, (err, stdout, stderr) => {
    if (err) {
        console.error('Failed to clone repo:', err);
        return;
    }
    console.log(stdout);
    console.log('Repo cloned successfully!');
    console.error(stderr);
});
