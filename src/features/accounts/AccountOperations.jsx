import { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, payLoan, requestloan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositValue, setDepositValue] = useState("");
  const [withdrawValue, setWithdrawValue] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();

  const handleDeposit = (e) => {
    e.preventDefault();
    dispatch(deposit(depositValue, currency));
    setDepositValue("");
    setCurrency("USD");
  };
  const handleWithdraw = (e) => {
    e.preventDefault();
    dispatch(withdraw(withdrawValue));
    setWithdrawValue("");
  };
  const handleRequestloan = (e) => {
    e.preventDefault();
    dispatch(requestloan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  };
  const handlePayLoan = () => {
    dispatch(payLoan());
  };

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="bg-gray displaye-flex">
        <form onSubmit={handleDeposit}>
          <label htmlFor="deposit">
            Deposit
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
              <option value="GBP">Biritish Pound</option>
            </select>
            <button type="submit">DEPOSIT</button>
          </label>
        </form>
        <form onSubmit={handleWithdraw}>
          <label htmlFor="withdraw">
            Withdraw
            <input
              type="number"
              id="withdraw"
              value={withdrawValue}
              onChange={(e) => setWithdrawValue(e.target.value)}
            />
            <button type="submit">WITHDRAW</button>
          </label>
        </form>
        <form onSubmit={handleRequestloan}>
          <label htmlFor="loanAmount">
            Request Loan
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
          </label>
        </form>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>Pay back $x</p>
          <button onClick={handlePayLoan} type="button">
            PAY LOAN
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
