import React from 'react';
import { ArrowLeft, ChevronRight, Gift, Shield, CreditCard, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function BalancePage() {
    const navigate = useNavigate();
  const goBack = () => {
    navigate('/')
  };

  return (
    // <div className="bg-gray-100 min-h-screen text-gray-900 font-sans max-w-md mx-auto">
    <div className=" m-0 p-0 bg-gray-100 min-h-screen text-gray-900 font-sans w-full max-w-md mx-auto">

      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <button 
          onClick={goBack} 
          className="focus:outline-none"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5"/>
        </button>
        <div className="flex items-center">
          <span className="font-semibold mr-1">≋ USD</span>
        </div>
      </div>

      {/* User Balance Header */}
      <div className="px-4 pb-3">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">Mys...Man's balance</h1>
          <div className="ml-2 bg-green-500 rounded-full p-1">
            <Shield className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Coins Card */}
      <div className="mx-4 bg-gray-800 rounded-xl overflow-hidden">
        <div className="p-4">
          <div className="text-gray-400 text-sm mb-1">Coins</div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold">₱</span>
              </div>
              <span className="text-2xl font-bold text-white">940,000,000</span>
            </div>
            <div className="flex items-center text-gray-400">
              <span className="text-sm">Get Coins</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Estimated balance</p>
              <p className="text-xl font-bold text-white">USD10,000,000</p>
            </div>
            <div className="flex items-center text-gray-400">
              <span className="text-sm">View</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* First Recharge Package */}
      <div className="mx-4 mt-4 bg-white rounded-xl p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-base">First recharge package</p>
            <p className="text-gray-400 text-sm">Get Gifts and bonus Coins</p>
            <div className="flex items-center mt-1 text-pink-500">
              <span className="font-medium text-sm">Get</span>
              <ArrowRight className="w-3 h-3 ml-1" />
            </div>
          </div>
          <div className="bg-pink-500 rounded-full w-12 h-12 flex items-center justify-center">
            <Gift className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Monetization */}
      <div className="mx-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="font-bold text-xl">Monetization</p>
          <div className="flex items-center text-gray-500 text-sm">
            <span>View more</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="bg-gray-100 rounded-lg p-2 mb-2">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-center text-sm">LIVE rewards</span>
          </div>
          <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="bg-gray-100 rounded-lg p-2 mb-2">
              <Shield className="w-5 h-5 text-gray-500" />
            </div>
            <span className="text-center text-sm">Campaigns</span>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="mx-4 mt-4 mb-6">
        <p className="font-bold text-xl mb-2">Services</p>
        
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <div className="flex items-center">
              <div className="bg-gray-100 rounded p-1 mr-3">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M2 6h20" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 12h20" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 18h20" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-base">Transactions</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </div>
          
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <div className="bg-gray-100 rounded p-1 mr-3">
                <Shield className="w-5 h-5 text-gray-500" />
              </div>
              <span className="text-base">Identity verification</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 text-sm mr-2">Verified</span>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}