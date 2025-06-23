import React, { useEffect } from 'react';
import TelegramIcon from './components/TelegramIcon';

// true редирект включен
// false редирект выключен
const ENABLE_IMMEDIATE_REDIRECT = true;


const App: React.FC = () => {
  const backgroundImageUrl = 'https://i.ibb.co/zWRDGyYn/image.png';
  const avatarImageUrl = 'https://i.ibb.co/MyRKZrZp/Frame-268.png';
  
  // ссылка для редиректа
  const immediateRedirectLink = 'https://t.me/+gTR83A4Q-oYyZmMy';
  
  // ссылка на тгк для кнопки 
  const telegramLink = 'https://t.me/+gTR83A4Q-oYyZmMy'; 

  useEffect(() => {
    if (ENABLE_IMMEDIATE_REDIRECT) {
      window.location.href = immediateRedirectLink;
    }
  }, [immediateRedirectLink]); 


  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden antialiased">
      <div
        className="absolute inset-0 z-0 animate-bg-slow-pan opacity-40"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto', 
        }}
      />

      <div 
        className="relative z-10 bg-[#25252529] backdrop-blur-[10px] py-[30px] px-[50px] rounded-[10px] shadow-2xl w-full max-w-md text-center flex flex-col items-center gap-5 card-animate-zoomIn"
        role="region"
        aria-labelledby="channel-title"
      >
        <img
          src={avatarImageUrl}
          alt="Owner Avatar"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-neutral-700 object-cover shadow-lg"
        />
        
        <h1 id="channel-title" className="text-2xl sm:text-3xl font-bold text-white">White Tools Browser</h1>
        
        <p className="text-neutral-400 text-xs sm:text-sm">3.382 користувачів</p>
        
        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed px-2">
          Закрита спільнота, де можна економити на сервісах до -90% щомісяця.
        </p>
        
        <a
          href={telegramLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white text-white font-semibold py-[10px] px-[20px] rounded-[50px] flex items-center justify-center space-x-2.5 w-auto text-sm sm:text-base transition-all duration-300 hover:border-neutral-300 hover:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-opacity-50"
          aria-label="View Owner 1win channel in Telegram"
        >
          <TelegramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Перейти у Telegram</span>
        </a>
      </div>
    </div>
  );
};

export default App;
