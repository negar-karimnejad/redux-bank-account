import { useState } from "react";
import { useDispatch } from "react-redux";
function AccountOperations() {
  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="bg-gray displaye-flex">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(deposit())

          }}
        >
          <label htmlFor="deposit">
            Deposit
            <input
              type="text"
              id="deposit"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
            />
            <select name="" id="">
              <option value="">US Dollar</option>
            </select>
            <button type="submit">DEPOSIT</button>
          </label>
        </form>
        <form>
          <label htmlFor="withdraw">
            Withdraw
            <input
              type="text"
              id="withdraw"
              value={withdraw}
              onChange={(e) => setWithdraw(e.target.value)}
            />
            <button type="submit">WITHDRAW</button>
          </label>
        </form>
        <form>
          <label htmlFor="loanAmount">
            Request Loan
            <input
              type="text"
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
          <button type="button">PAY LOAN</button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
