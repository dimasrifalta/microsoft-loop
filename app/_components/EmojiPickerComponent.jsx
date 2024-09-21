import EmojiPicker, { EmojiStyle } from 'emoji-picker-react';
import React, { useState } from 'react';

function EmojiPickerComponent({ children,setEmojiIcon }) {
  const [openEmojiPciker, setOpenEmojiPciker] = useState(false);
  return (
    <div>
      <div onClick={() => setOpenEmojiPciker(true)}>{children}</div>
      {openEmojiPciker && (
        <div className='absolute z-10'>
          <EmojiPicker
          
          emojiStyle='facebook'
          onEmojiClick={(e) => {
            setEmojiIcon(e.emoji);
            setOpenEmojiPciker(false);
          }}
          
          />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerComponent;
