import React, { useEffect, useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
const Stepper = ({order}) => {
  const steps = [ "Placed" ,"Processed", "Dispatched", "Delivered"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  useEffect(()=>{
      if(order.orderStatus === "Processed"){
        setCurrentStep(2)
      }
      if(order.orderStatus === "Dispatched"){
        setCurrentStep(3)
      }
      if(order.orderStatus === "Delivered"){
        setComplete(true)
        setCurrentStep(4)
      }
  },[currentStep,order.orderStatus])
  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
     
    </>
  );
};

export default Stepper;