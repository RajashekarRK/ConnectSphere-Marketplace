
import React from 'react';

// FIX: Created a placeholder component for CheckoutStepTracker.
interface CheckoutStepTrackerProps {
  currentStep: number;
}

const CheckoutStepTracker: React.FC<CheckoutStepTrackerProps> = ({ currentStep }) => {
  const steps = ['Shipping', 'Payment', 'Confirmation'];
  return (
    <div className="flex justify-center items-center space-x-4 my-8">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${index + 1 <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
              {index + 1}
            </div>
            <p className={`ml-2 ${index + 1 <= currentStep ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>{step}</p>
          </div>
          {index < steps.length - 1 && <div className="w-16 h-0.5 bg-gray-300"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CheckoutStepTracker;
