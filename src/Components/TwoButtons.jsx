import React from 'react';

function TwoButtons({ firstButtonName, secondButtonName, onFirstButtonClick, onSecondButtonClick }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 ">
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded border-2 border-blue-500 mb-4"
        onClick={onFirstButtonClick}
      >
        {firstButtonName}
      </button>
      <button
        className="bg-white text-blue-500 font-semibold py-2 px-4 rounded border-2 border-blue-500"
        onClick={onSecondButtonClick}
      >
        {secondButtonName}
      </button>
    </div>
  );
}

export default TwoButtons;