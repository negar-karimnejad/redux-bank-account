import { useSelector } from "react-redux";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";

function App() {
  const customer = useSelector((store) => store.customer);

  return (
    <div className="app">
      <header>
        <h1>🏦The React-Redux Bank ⚛</h1>
      </header>

      {!customer.fullname ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
