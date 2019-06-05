(function(){
    "use strict";
    
    const create = document.getElementById('create');
    const name = document.getElementById('accname');
    const deposit = document.getElementById('deposit');
    const result = document.getElementById('result');
    
    const account = function(){
        const accounts = [];
        const clear = function(){
            name.value = '';
            deposit.value = '';
            result.value = '';
        };
        const list = function(){
            clear();
            for(let acc of accounts){
                result.value += `Account name: ${acc.name} balance: $${acc.balance}\n`;
            }
        };
        const push = function(acc){
            accounts.push(acc);
            list();
        };
        const create = function(){
            return {
                        name: name.value,
                        balance: parseFloat(deposit.value).toFixed(2)
                    };            
        };
        const start = function(){
            push(create());
        };

        return {
            newAccount: start
        }
    }();

    create.onclick = function(){
        account.newAccount();
    }
})();