function Trie() {
    this.trie = {};

    // Inserts a word into the trie.
    this.insert = (word)=>{
        let trie = this.trie;

        [...word].forEach(char=> {
            if ((char in trie)==false) {
                trie[char] = {};
            }
            trie = trie[char];
        });
        trie['_end_'] = word;
    }

    // Returns if the word is in the trie.
    this.search = (word)=>{
        let trie = this.trie;

        [...word].forEach(char=> {
            if (char in trie) {
                trie = trie[char];
            }
            return false;
        });
        
        if (`_end_` in trie) {
            return true;
        }
        return false;
    }
    // Find inserted words from trie
    this.find = (words, trie)=>{
        for (const char in trie) {
            if (`_end_` in trie) {
                words.push(trie[`_end_`]);
                continue;
            }
            this.find(words, trie[char]);
        }
    }
    // Returns string if there is any word in the trie that starts with the given prefix.
    this.startsWith = (prefix)=>{
        let trie = this.trie;

        [...prefix].forEach(char=>{
            if (char in trie) {
                trie = trie[char];
            } else {
                return [];
            }
        });
        const words = [];
        this.find(words, trie);
        words.sort();

        return words;
    }
    // Delete word in trie
    this.delete = (word)=>{
        let trie = this.trie;

        [...word].forEach(char=>{
            if (char in trie) {
                trie = trie[char];
            } else {
                return false;
            }
        });

        if (`_end_` in trie) {
            delete(trie[`_end_`]);
            return true;
        }
        return false;
    }
}

obj = new Trie();
// obj.insert("heetak");
// obj.insert("heetop");
// console.log("search heetop:",obj.search("heetop"));
// console.log("start with 'hee':",obj.startsWith("heeta"));
// console.log("delete heetak:", obj.delete("heetak"));
// console.log("start with 'hee':",obj.startsWith("hee"));

titles = "신의 탑,인생존망,윈드브레이커,소녀의 세계,백수세끼,장씨세가 호위무사,칼가는 소녀,악취,평범한 8반,유일무이 로맨스,앵무살수,야자괴담,사장님을 잠금해제,데드라이프,니편내편,귀전구담,와이키키 뱀파이어,링크보이,요리GO,히어로메이커,교환일기,같은도장,첫사랑입니다만,백호랑,닥터 하운드,결혼생활 그림일기,노력의 결과,일진이 사나워,아는 여자애,지옥,이것도 친구라고,삶이 우리를 속일지라도,도플갱어의 게임,결백한 사람은 없다,꿈의 기업,위대한 방옥숙,피플,정보전사 202,요괴대전,뷰티풀 군바리,지구멸망버튼,하슬라,여기 악마가 있어,중독연구소,인간의 온도,사소한 냐냐,모락모락 왕세자님,블루투스,물레,뱀파이어의 꽃"
titles = titles.split(',');

for(let i = 0; i < titles.length; i++) {
    obj.insert(titles[i]);
}
console.log(obj.startsWith(`결`));