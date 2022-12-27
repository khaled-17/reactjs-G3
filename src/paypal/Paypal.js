import Checkout from './Checkout';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Loader from '../components/loader/loader';

const initialOptions = {
  "client-id": "AcNowhU3FWD-3yb292CvJTzoPowgNr3srGG6fNfzy007RdTJc2ZzFhQsFWxgXWshDuP9LG3pyqq85cbw",
  currency: "USD",
  intent: "capture",
};

function Paypal() {
  return (
    <div>
    <PayPalScriptProvider options={initialOptions}>
        <Checkout/>
    </PayPalScriptProvider>
    </div>
  );
}

export default Paypal;