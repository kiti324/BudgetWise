let income = {};
let expenses = {};

function addIncome() {
    const source = document.getElementById('income-source').value;
    const amount = parseFloat(document.getElementById('income-amount').value);

    if (source && amount) {
        if (income[source]) {
            income[source] += amount;
        } else {
            income[source] = amount;
        }
        updateIncomeSummary();
    }
}

function addExpense() {
    const category = document.getElementById('expense-category').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (category && amount) {
        if (expenses[category]) {
            expenses[category] += amount;
        } else {
            expenses[category] = amount;
        }
        updateExpenseSummary();
    }
}

function updateIncomeSummary() {
    const incomeList = document.getElementById('income-list');
    incomeList.innerHTML = '';

    let totalIncome = 0;
    for (const source in income) {
        const li = document.createElement('li');
        li.textContent = `${source}: $${income[source].toFixed(2)}`;
        incomeList.appendChild(li);
        totalIncome += income[source];
    }
    document.getElementById('total-income').textContent = totalIncome.toFixed(2);
    updateBalance();
}

function updateExpenseSummary() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    let totalExpenses = 0;
    for (const category in expenses) {
        const li = document.createElement('li');
        li.textContent = `${category}: $${expenses[category].toFixed(2)}`;
        expenseList.appendChild(li);
        totalExpenses += expenses[category];
    }
    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
    updateBalance();
}

function updateBalance() {
    const totalIncome = parseFloat(document.getElementById('total-income').textContent);
    const totalExpenses = parseFloat(document.getElementById('total-expenses').textContent);
    const balance = totalIncome - totalExpenses;
    document.getElementById('balance').textContent = balance.toFixed(2);
}
