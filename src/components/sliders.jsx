import { SlidersHorizontal } from 'lucide-react';

// export default function ThrowbackFiltersIcon() {
//   return (
//     <div className="flex items-center space-x-1">
//       <SlidersHorizontal className="w-6 h-6" />
//       <span>▼</span> {/* small down arrow */}
//     </div>
//   );
// }

export default function ThrowbackIcon() {
    return (
      <div className="flex justify-between items-center w-4 space-x-2">
        {/* 3 vertical bars */}
        <div className="flex flex-col items-center justify-between h-6">
          <div className="w-0.5 h-3 bg-black rounded-full" />
          <div className="w-0.5 h-2.5 bg-black rounded-full" />
        </div>
        <div></div>
        <div className="flex flex-col items-center justify-between h-6">
          <div className="w-0.5 h-3 bg-black rounded-full" />
          <div className="w-0.5 h-2.5 bg-black rounded-full" />
        </div>
        <div></div>
        <div className="flex flex-col items-center justify-between h-6">
          <div className="w-0.5 h-3 bg-black rounded-full" />
          <div className="w-0.5 h-2.5 bg-black rounded-full" />
        </div>
        {/* small downward arrow */}
        
      </div>
    );
  }