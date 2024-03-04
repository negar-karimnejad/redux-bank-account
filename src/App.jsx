import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "./features/customers/customerSlice";
import { useEffect, useState } from "react";

function App() {
  const [fullname, setFullname] = useState("");
  const [nationalid, setNationalid] = useState("");
  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  const customer = useSelector((store) => store.customer.fullname);
  const dispatch = useDispatch();

  function createNewCustomer(e) {
    e.preventDefault();
    if (!fullname || !nationalid) return;
    dispatch(createCustomer(fullname, nationalid));
    setFullname("");
    setNationalid("");
  }

  console.log(customer);

  return (
    <div>
      <header>
        <h1>🏦The React-Redux Bank ⚛</h1>
      </header>
      {!customer ? (
        <section>
          <h2>Create new customer</h2>
          <form className="bg-gray" onClick={createNewCustomer}>
            <label htmlFor="fullname">
              Customer Full name
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </label>
            <label htmlFor="Nationalid">
              National ID
              <input
                type="text"
                id="Nationalid"
                value={nationalid}
                onChange={(e) => setNationalid(e.target.value)}
              />
            </label>
            <button type="submit">CREATE NEW CUSTOMER</button>
          </form>
        </section>
      ) : (
        <>
          <div>
            <h2>👋Welcome, {customer}</h2>
          </div>
          <div className="bg-gray">
            <h2>Your account operations</h2>
            <form>
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
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
                <input
                  type="text"
                  id="loanPurpose"
                  value={loanPurpose}
                  onChange={(e) => setLoanPurpose(e.target.value)}
                />
                <button type="submit">REQUEST LOAN</button>
              </label>
            </form>
            <div>
              <p>Pay back $x</p>
              <button type="button">PAY LOAN</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
