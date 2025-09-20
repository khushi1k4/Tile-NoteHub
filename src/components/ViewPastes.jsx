import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewPastes = () => {
  const { id } = useParams();
  const allPastes = useSelector(state => state.paste.pastes);
  const paste = allPastes.find(p => p.id === id);

  if (!paste) {
    return <div>Paste not found</div>;
  }

  const [title, setTitle] = useState(paste.title);
  const [value, setValue] = useState(paste.content);

  return (
    <div>
      <div className='flex flex-row gap-7 justify-between'>
        <input 
          type='text'
          className='p-2 rounded-2xl mt-2 w-[315px]'
          placeholder='Enter Title here'
          value={title}
          disabled
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea 
          className='rounded-2xl mt-4 min-w-[500px] p-4 text-white'
          value={value}
          placeholder='Enter your content here'
          onChange={e => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
}

export default ViewPastes;

