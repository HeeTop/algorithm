let begin = "hit";
let target = "cog";

const words = ["hot", "dot", "dog", "lot", "log", "cog",'hit'];

const word_dict = {};


function isSimilar(str1, str2){
    let count = 0;

    for(let i = 0; i < str1.length; ++i) {
        if (str1[i] == str2[i]) {
            count++;
        }
    }
    if (count >= str1.length - 1) {
        return true;
    }
    return false;
}
const visited = {};

let DEPTH = 100000;

function dfs(word, depth, target) {
    // console.log(word, visited, DEPTH);
    if (depth >= DEPTH) {
        return DEPTH;
    }

    if (word == target) {
        DEPTH = Math.min(depth, DEPTH);
        return DEPTH;
    }

    word_dict[word].map(sim_word => {
        if (visited[sim_word] != 1){
            visited[sim_word] = 1;
            DEPTH = Math.min(dfs(sim_word, depth + 1, target), DEPTH);
            visited[sim_word] = 0;
        }
    });
    return DEPTH;
}


function solution(begin, target, words) {
    if (!words.includes(begin)) {
        words.push(begin);
    }
    if (!words.includes(target)) {
        return 0;
    }
    for(let i = 0; i < words.length - 1; ++i) {
        visited[words[i]] = 0;
    
        for(let j = i + 1; j < words.length; ++j) {
            if (isSimilar(words[i], words[j])) {
                if (word_dict[words[i]]) {
                    word_dict[words[i]].push(words[j]);
                } else {
                    word_dict[words[i]] = [words[j]];
                }
                if (word_dict[words[j]]) {
                    word_dict[words[j]].push(words[i]);
                } else {
                    word_dict[words[j]] = [words[i]];
                }
            }
        }
    }
    visited[begin] = 1;
    dfs(begin, 0, target);
    if (DEPTH == 100000) {
        return 0;
    }
    return DEPTH;
}

console.log(solution(begin, target, words));
console.log(word_dict);