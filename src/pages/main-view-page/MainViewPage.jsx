import React from "react";

export default function MainViewPage() {
  return (
    <div>
      <h1>Main View Component</h1>
      <div>2 completed orders</div>
      <div>1 Order in progress</div>
      <div>34055 Liters Ordered</div>
      <div>Approx Ksh 34384 Used</div>
      <div>
        <h2>Active Orders shown here</h2>
      </div>
      <div>
        <button>Create / refill</button>
      </div>
      <h2>Need to monitor water tank levels?</h2>
      <div>
        <button>Purchase</button>
        <button>View Demo</button>
      </div>
    </div>
  );
}
