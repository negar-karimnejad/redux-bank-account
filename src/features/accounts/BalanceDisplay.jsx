import React from "react";
import { useSelector } from "react-redux";

function BalanceDisplay() {
  const balance = useSelector((state) => state.account);

  return (
    <div className="balance-display" type="button">
      {balance.currency === "USD" && "$"}
      {balance.currency === "EUR" && "€"}
      {balance.currency === "GBP" && "£"}
      {balance.balance}
    </div>
  );
}

export default BalanceDisplay;
