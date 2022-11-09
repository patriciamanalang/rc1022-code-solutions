/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var depositTransaction = new Transaction('deposit', amount);
    this.transactions.push(depositTransaction);
    return true;
  } else return false;

};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var withdrawTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawTransaction);
    return true;
  } else return false;
};

Account.prototype.getBalance = function () {
  var depositSum = 0;
  var withdrawalSum = 0;

  if (this.transactions.length === 0) {
    var balance = 0;
    return balance;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      depositSum += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawalSum += this.transactions[i].amount;
    }
  }
  balance = depositSum - withdrawalSum;
  return balance;
};
