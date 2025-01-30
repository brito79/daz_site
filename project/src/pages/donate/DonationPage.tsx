
import { ArrowLeft, CreditCard, Landmark, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonationPage = () => {
  return (
    <div className="bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/get-involved" className="flex items-center text-daz-blue mb-8 hover:text-daz-green">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Get Involved
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Make a Donation</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Landmark className="w-6 h-6 mr-2 text-daz-blue" />
              Bank Transfer
            </h2>
            <div className="space-y-4">
              <p className="font-medium">Bank Details:</p>
              <div className="bg-white p-4 rounded">
                <p>Bank: TBA</p>
                <p>Account Name: Dementia Association of Zimbabwe</p>
                <p>Account Number:TBA</p>
                <p>Branch Code: TBA</p>
                <p>Swift Code: TBA</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Phone className="w-6 h-6 mr-2 text-daz-blue" />
              Mobile Money
            </h2>
            <div className="space-y-4">
              <p className="font-medium">Mobile Money Details:</p>
              <div className="bg-white p-4 rounded">
                <p>EcoCash: TBD</p>
                <p>OneMoney: TBA</p>
                <p>Merchant Code: TBA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <CreditCard className="w-6 h-6 mr-2 text-daz-blue" />
            Online Payment (Coming Soon)
          </h2>
          <p className="text-gray-600">
            We are working on implementing secure online payment options. 
            For now, please use bank transfer or mobile money options above.
          </p>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-gray-600">
            For assistance with donations, please contact our finance department:
            <br />
            Email: TBA
            <br />
            Phone: TBA
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;