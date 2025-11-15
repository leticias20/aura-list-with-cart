export const Logo = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 mb-6'>
      <div className='flex items-center justify-center gap-2'>
        <svg 
          width='40' 
          height='40' 
          viewBox='0 0 40 40' 
          fill='none' 
          xmlns='http://www.w3.org/2000/svg'
          className='text-Gray'
        >
          {/* Diamante superior */}
          <path 
            d='M20 5 L25 15 L20 20 L15 15 Z' 
            fill='currentColor' 
            stroke='currentColor' 
            strokeWidth='1'
          />
          {/* Anillo central */}
          <circle 
            cx='20' 
            cy='20' 
            r='8' 
            fill='none' 
            stroke='currentColor' 
            strokeWidth='2'
          />
          {/* Diamante inferior */}
          <path 
            d='M20 20 L25 30 L20 35 L15 30 Z' 
            fill='currentColor' 
            stroke='currentColor' 
            strokeWidth='1'
            opacity='0.6'
          />
        </svg>
        <h1 className='text-2xl font-bold text-Gray'>Aura</h1>
      </div>
      <p className='text-sm text-Charcoal tracking-wide'>Jewerly Collection</p>
    </div>
  );
};
