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
        const printError = function(){
            result.value = 'Please enter a valid account name and deposit value.';
        }
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
        const create = function(account, deposit){
            return {
                        name: account,
                        balance: parseFloat(deposit).toFixed(2)
                    };            
        };
        const start = function(){
            let n = name.value;
            let b = deposit.value;
            if(n && b) push(create(n, b));
            else printError();
        };

        return {
            newAccount: start
        }
    }();

    create.onclick = function(){
        account.newAccount();
    }
})();