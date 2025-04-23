import { useState } from 'react';
import { MoreHorizontal, Plus, Home, ShoppingBag, MessageCircle, User, Lock, Repeat, QrCode, Settings, Wallet } from 'lucide-react';
import BalancePage from './balance';
import { useNavigate } from 'react-router-dom';
// Settings Popup Component defined inline
const SettingsPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  if (!isOpen) return null;

const openMobileDashboard = () => {
  navigate('/balance')
};

  return (

    <div 
  className="fixed inset-0 bg-black/70 bg-opacity-50 z-50 flex items-end justify-center" 
  onClick={onClose}
>
  <div 
    className="bg-white w-full max-w-md rounded-t-xl p-4" 
    onClick={(e) => e.stopPropagation()}
  >
    <div className="space-y-6">
      <div className="flex items-center">
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
        <span className="text-lg">TikTok Studio</span>
      </div>

      {/* Make the whole Balance clickable */}
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={openMobileDashboard} // call your function
      >
        <div className="flex items-center">
          <Wallet className="w-5 h-5 mr-3" />
          <span className="text-lg">Balance</span>
        </div>
        <span className="text-gray-500">10000000 US$</span>
      </div>

      <div className="flex items-center">
        <QrCode className="w-5 h-5 mr-3" />
        <span className="text-lg">My QR code</span>
      </div>

      <div className="flex items-center">
        <Settings className="w-5 h-5 mr-3" />
        <span className="text-lg">Settings and privacy</span>
      </div>
    </div> 
  </div>
</div>

);
};

// Main TikTok Profile Component
export default function TikTokProfile() {
  const [activeTab, setActiveTab] = useState('videos');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);
  
  return (
    <div className="flex flex-col bg-white min-h-screen max-w-md mx-auto">
      {/* Top navigation */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <User className="w-6 h-6 mr-2" />
          <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
            P
          </div>
        </div>
        <div className="text-gray-400 text-sm mx-auto">Thought?</div>
        <div className="flex items-center">
          <div className="mr-4">
            <Lock className="w-6 h-6" />
          </div>
          <div className="mr-4">
            <Repeat className="w-6 h-6" />
          </div>
          <button onClick={openSettings}>
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Profile info */}
      <div className="flex flex-col items-center p-4">
        <div className="relative">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-black rounded-full"></div>
          </div>
          <div className="absolute bottom-0 right-0 bg-cyan-400 rounded-full w-6 h-6 flex items-center justify-center text-white">
            <Plus className="w-4 h-4" />
          </div>
        </div>
        
        <div className="mt-2">
          <h1 className="text-xl font-semibold flex items-center">
            Mystery Gift Man
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 17a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 17z" clipRule="evenodd" />
            </svg>
          </h1>
          <p className="text-gray-500 text-sm">@mysterygiftmanofficial</p>
        </div>

        <div className="flex justify-center mt-4 space-x-8">
          <div className="text-center">
            <p className="font-semibold">983</p>
            <p className="text-xs text-gray-500">Following</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">178.9K</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">474.8K</p>
            <p className="text-xs text-gray-500">Likes</p>
          </div>
        </div>

        <div className="w-full text-center mt-4 text-sm text-gray-600">
          <p>This is my only account, I don't have any other accounts.</p>
          <p>Mr Saed</p>
          <p className="flex items-center justify-center">From Qatar <span className="ml-1">🇶🇦</span></p>
          <div className="flex items-center justify-center mt-1">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <p>TikTok Studio</p>
          </div>
        </div>

        <div className="flex w-full justify-center space-x-2 mt-4">
          <button className="bg-gray-100 text-black px-6 py-1 rounded-md text-sm">Edit</button>
        </div>
      </div>

      {/* Content tabs */}
      <div className="mt-4 border-b border-gray-200">
        <div className="flex justify-around">
          <button 
            className={`px-4 py-2 ${activeTab === 'videos' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'locked' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('locked')}
          >
            <Lock className="w-6 h-6 mx-auto" />
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'liked' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('liked')}
          >
            <Repeat className="w-6 h-6 mx-auto" />
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'saved' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('saved')}
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-3 gap-1 p-1">
        {[
          { views: '538K', thumbnail: '/api/placeholder/120/200' },
          { views: '111.3K', thumbnail: '/api/placeholder/120/200' },
          { views: '2.5M', thumbnail: '/api/placeholder/120/200' },
          { views: '1.2M', thumbnail: '/api/placeholder/120/200' },
          { views: '789K', thumbnail: '/api/placeholder/120/200' },
          { views: '945K', thumbnail: '/api/placeholder/120/200' },
        ].map((video, index) => (
          <div key={index} className="relative aspect-[9/16]">
            <img src={video.thumbnail} alt={`Video ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute bottom-2 left-2 flex items-center text-white text-xs">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              {video.views}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 max-w-md mx-auto">
        <button className="flex flex-col items-center px-3 py-1">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center px-3 py-1">
          <ShoppingBag className="w-6 h-6" />
          <span className="text-xs mt-1">Shop</span>
        </button>
        <button className="flex flex-col items-center px-3 py-1">
          <div className="bg-black text-white rounded-md p-2">
            <Plus className="w-6 h-6" />
          </div>
        </button>
        <button className="flex flex-col items-center px-3 py-1 relative">
          <MessageCircle className="w-6 h-6" />
          <div className="absolute top-0 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            5
          </div>
          <span className="text-xs mt-1">Inbox</span>
        </button>
        <button className="flex flex-col items-center px-3 py-1">
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
      
      {/* Settings Popup (rendered inline) */}
      <SettingsPopup isOpen={isSettingsOpen} onClose={closeSettings} />
    </div>
  );
}