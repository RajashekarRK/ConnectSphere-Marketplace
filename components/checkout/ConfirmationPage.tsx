import React from 'react';
import { Order, Page } from '../../types.ts';

// FIX: Updated component to accept props and display order data.
interface ConfirmationPageProps {
  order: Order;
  onNavigate: (page: Page) => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ order, onNavigate }) => {
  if (!order) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Order Information Missing</h3>
            <p>Could not find order details. Please return home.</p>
            <button onClick={() => onNavigate('home')} className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                Back to Home
            </button>
        </div>
    );
  }
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
      <h3 className="text-xl font-bold text-slate-800 mb-4">Order Confirmed!</h3>
      <p>Thank you for your purchase. Your order ID is {order.id}.</p>
       <button onClick={() => onNavigate('home')} className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
        Back to Home
      </button>
    </div>
  );
};

export default ConfirmationPage;