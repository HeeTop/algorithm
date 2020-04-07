function solution(tickets) {
    const answer = [`ICN`];
    const DEPTH = tickets.length;

    dfs(`ICN`, tickets, 0);

    function dfs(company, tickets, ㄱ) {
        if (depth == DEPTH) {
            return true;
        }
        const companies = tickets.filter(ticket => ticket[0] === company).sort();

        for (let i = 0; i < companies.length; ++i) {
            let company = companies[i];
            const index = tickets.indexOf(company);
            
            answer.push(company[1]);
            let copied_tickets = [...tickets];
            copied_tickets.splice(index, 1);
            
            const is_true = dfs(company[1], copied_tickets, depth + 1);
            if (is_true) {
                return true;
            }
            answer.pop();
        }
        return false;
    }

    return answer;
}

console.log(solution([[`ICN`, `SFO`], [`ICN`, `ATL`], [`SFO`, `ATL`], [`ATL`, `ICN`], [`ATL`, `SFO`]]));

