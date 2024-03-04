import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function CreateCustomer() {
  const [fullname, setFullname] = useState("");
  const [nationalid, setNationalid] = useState("");

  const dispatch = useDispatch();

  function createNewCustomer(e) {
    e.preventDefault();
    if (!fullname || !nationalid) return;
    dispatch(createCustomer(fullname, nationalid));
    setFullname("");
    setNationalid("");
  }

  return (
    <section className="account-operations">
      <h2>Create new customer</h2>
      <form
        onClick={createNewCustomer}
        style={{ flexDirection: "column", alignItems: "start" }}
      >
        <label htmlFor="fullname">
          <span style={{ margin: "5px" }}>Customer Full name</span>
          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </label>
        <label htmlFor="Nationalid">
          <span style={{ margin: "5px" }}>National ID</span>

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
  );
}

export default CreateCustomer;
