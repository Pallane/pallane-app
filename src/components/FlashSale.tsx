import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FlashSale() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 2,
    minutes: 16,
    seconds: 19
  });

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white py-2 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium">{t('flashSale.endsIn')}:</span>
            <div className="flex gap-1">
              <span className="bg-[#87BBBA] px-1.5 sm:px-2 py-1 rounded text-xs sm:text-sm">{timeLeft.days.toString().padStart(2, '0')}d</span>
              <span className="bg-[#87BBBA] px-1.5 sm:px-2 py-1 rounded text-xs sm:text-sm">{timeLeft.hours.toString().padStart(2, '0')}h</span>
              <span className="bg-[#87BBBA] px-1.5 sm:px-2 py-1 rounded text-xs sm:text-sm">{timeLeft.minutes.toString().padStart(2, '0')}m</span>
              <span className="bg-[#87BBBA] px-1.5 sm:px-2 py-1 rounded text-xs sm:text-sm">{timeLeft.seconds.toString().padStart(2, '0')}s</span>
            </div>
          </div>
          <span className="font-medium text-center text-xs sm:text-sm">{t('flashSale.title')} <span className="text-[#87BBBA]">{t('flashSale.premium')}</span></span>
          <div className="border border-[#87BBBA] px-2 sm:px-3 py-1 rounded">
            <span className="text-xs sm:text-sm">{t('flashSale.code')}</span>
          </div>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-[#87BBBA] hover:text-white"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}