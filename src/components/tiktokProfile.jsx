import { useState , useEffect} from 'react';
import { MoreHorizontal, Plus, Home, ShoppingBag, MessageCircle, User, Lock, Repeat, QrCode, Settings, Wallet } from 'lucide-react';
import BalancePage from './balance';
import { useNavigate } from 'react-router-dom';
import { RiShareForwardLine, RiHome4Line, RiMessageLine } from "react-icons/ri";
import { LuFootprints } from "react-icons/lu";
import { PiHandbag } from "react-icons/pi";
import { FaUser, FaEyeSlash,FaRegHeart  } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { RiBookmarkLine, RiEyeLine } from "react-icons/ri";
import { FiLock } from "react-icons/fi";
import { BiRepost } from "react-icons/bi";



// Settings Popup Component defined inline
const SettingsPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  if (!isOpen) return null;

const openMobileDashboard = () => {
  navigate('/balance')
};
const tosetData = () => {
  navigate('set-data')
}

  return (

    <div 
  className="fixed inset-0 bg-black/70 bg-opacity-50 z-50 flex items-end justify-center" 
  onClick={onClose}
>
  <div 
    className="bg-white w-full sm:max-w-md rounded-t-xl p-4 h-55" 
    onClick={(e) => e.stopPropagation()}
  >
    <div className="space-y-6">
      <div className="flex items-center h-12 rounded-t-xl border border-gray-200" onClick={tosetData}>
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
        <span className="text-lg">TikTok Studio</span>
      </div>

      {/* Make the whole Balance clickable */}
      <div 
        className="flex items-center justify-between cursor-pointer h-12 border border-gray-200"
        onClick={openMobileDashboard} // call your function
      >
        <div className="flex items-center">
          <Wallet className="w-5 h-5 mr-3" />
          <span className="text-lg">Balance</span>
        </div>
        <span className="text-gray-500">{localStorage.getItem('balance')} US$</span>
      </div>

      <div className="flex items-center h-12  border border-gray-200">
        <QrCode className="w-5 h-5 mr-3" />
        <span className="text-lg">My QR code</span>
      </div>

      <div className="flex items-center h-12 border border-gray-200">
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

  const [viewsList, setViewsList] = useState([]);

  useEffect(() => {
    const storedLikes = localStorage.getItem('vlikes');
    if (storedLikes) {
      try {
        const parsedViews = JSON.parse(storedLikes);
        setViewsList(parsedViews);
      } catch (error) {
        console.error('Error parsing vlikes from localStorage', error);
      }
    }
  }, []);
  const thumbnails = [
    "/thumbnail.jpg",
    "/thumbnail.jpg",
    "/thumbnail.jpg",
    "/thumbnail.jpg",
    "/thumbnail.jpg",
    "/thumbnail.jpg",
  ];
  
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
          <LuFootprints size={24} />
          </div>
          <div className="mr-4">
          <RiShareForwardLine size={24}/>
          </div>
          <button onClick={openSettings}>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
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

        <div className="flex justify-around mt-4 space-x-8 w-full">
          <div className="text-center">
            <p className="font-bold">{localStorage.getItem('following')}</p>
            <p className="text-xs text-gray-500">Following</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{localStorage.getItem('followers')}</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{localStorage.getItem('likes')}</p>
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
      <br />

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
            <FiLock size={28} />
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'liked' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('liked')}
          >
            <Repeat className="w-6 h-6 mx-auto transform rotate-90" />
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'liked' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('liked')}
          >
            <div className="flex items-center gap-2">
              <RiBookmarkLine size={24} />
              <div className="relative top-1 right-6 text-xs rounded-full w-4 h-4 flex items-center justify-center">
              <FaEyeSlash size={15} />
            </div>
              
            </div>
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'saved' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('saved')}
          >
              <FaRegHeart size={28} />
          </button>
        </div>
      </div>

      {/* Video grid */}
      {/* <div className="grid grid-cols-3 gap-1 p-1">
        {[
          { views: '538K', thumbnail: '/thumbnail.jpg' },
          { views: '111.3K', thumbnail: '/thumbnail.jpg' },
          { views: '2.5M', thumbnail: '/thumbnail.jpg' },
          { views: '1.2M', thumbnail: '/thumbnail.jpg' },
          { views: '789K', thumbnail: '/thumbnail.jpg' },
          { views: '945K', thumbnail: '/thumbnail.jpg' },
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
          
      </div> */}

      <div className="grid grid-cols-3 gap-1 p-1">
    {viewsList.map((views, index) => (
      <div key={index} className="relative aspect-[9/16]">
        <img
          src={thumbnails[index]}
          alt={`Video ${index + 1}`}
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute bottom-2 left-2 flex items-center text-white text-xs bg-black/60 px-1 py-0.5 rounded">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          {views}
        </div>
      </div>
    ))}
  </div>



      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 max-w-md mx-auto h-15">
        <button className="flex flex-col items-center px-3 py-1">
        <RiHome4Line size={28} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center px-3 py-1">
        <PiHandbag size={28} />
          <span className="text-xs mt-1">Shop</span>
        </button>
        <button className="flex flex-col items-center px-3 py-1">
          <img src="/create.png" alt="" className=' -top-2 w-15' />
        </button>
        <button className="flex flex-col items-center px-3 py-1 relative">
          {/* <MessageCircle className="w-6 h-6" /> */}
          <RiMessageLine size={28} />
          <div className="absolute top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            5
          </div>
          <span className="text-xs mt-1">Inbox</span>
        </button>
        <button className="flex flex-col items-center px-3 py-1">
        <FaUser size={28} />

          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
      
      {/* Settings Popup (rendered inline) */}
      <SettingsPopup isOpen={isSettingsOpen} onClose={closeSettings} />
    </div>
  );
}