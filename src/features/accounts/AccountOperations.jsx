import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestloan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositValue, setDepositValue] = useState("");
  const [withdrawValue, setWithdrawValue] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const {
    loan,
    loanPurpose: currentLoanPurpose,
    isLoading,
  } = useSelector((store) => store.account);
  const dispatch = useDispatch();

  const handleDeposit = (e) => {
    e.preventDefault();
    if (!depositValue) return;
    dispatch(deposit(depositValue, currency));
    setDepositValue("");
    setCurrency("USD");
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (!withdrawValue) return;
    dispatch(withdraw(withdrawValue));
    setWithdrawValue("");
  };

  const handleRequestloan = (e) => {
    e.preventDefault();
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestloan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  };

  const handlePayLoan = () => {
    dispatch(payLoan());
  };

  return (
    <div class="account-operations">
      <h2>Your account operations</h2>
      <div class="operations-container">
        <label htmlFor="deposit">Deposit</label>
        <form onSubmit={handleDeposit}>
          <input
            type="number"
            id="deposit"
            value={depositValue}
            onChange={(e) => setDepositValue(e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "CONVERTING..." : "DEPOSIT"} {depositValue}
          </button>
        </form>
        <label htmlFor="withdraw">Withdraw</label>
        <form onSubmit={handleWithdraw}>
          <input
            type="number"
            id="withdraw"
            value={withdrawValue}
            onChange={(e) => setWithdrawValue(e.target.value)}
          />
          <button type="submit">WITHDRAW</button>
        </form>
        <label htmlFor="loanAmount">Request Loan</label>
        <form onSubmit={handleRequestloan}>
          <input
            type="number"
            id="loanAmount"
            placeholder="Loan amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <input
            type="text"
            id="loanPurpose"
            placeholder="Loan purpose"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
          />
          <button type="submit">REQUEST LOAN</button>
        </form>
        {loan > 0 && (
          <div class="loan-info">
            Pay back ${loan} ({currentLoanPurpose})
            <button
              class="pay-loan-button"
              onClick={handlePayLoan}
              type="button"
            >
              PAY LOAN
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
