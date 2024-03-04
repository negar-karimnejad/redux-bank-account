import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((state) => state.customer.fullname);

  return (
    <div>
      <h2>👋Welcome, {customer}</h2>
    </div>
  );
}

export default Customer;
