import { useCountUp } from "react-countup";
import { plans } from "../constants/index.jsx";

const Counter = () => {
  // This hook updates the target element automatically
  useCountUp({ 
    ref: "counter-element",
    start={plan.priceMonthly}
    end={monthly ? plans.priceMonthly : planYearly},
    duration: 5 ,
  });

  // Render a normal HTML div with the matching ID
  return <div id="counter-element" style={{ fontSize: "2rem", fontWeight: "bold" }} />;
};

export default Counter;
