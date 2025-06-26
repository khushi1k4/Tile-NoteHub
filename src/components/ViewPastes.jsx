import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {  useSelector } from 'react-redux'; 
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import Pastes from './Pastes';

const ViewPastes = () => {
  const {id} = useParams();
  const allPastes = useSelector(state => state.paste.pastes);
  const paste = allPastes.filter(p => p.id == id)[0];
  console.log("Final Paste: ", paste);
  
  return (
    <div>
        <div>
        <div className='flex flex-row- gap-7 place-content-between'>
        <div>
            <input 
            type='text'
            className='p-2 rounded-2xl mt-2 w-[315px]'
            placeholder='Enter Title here'
            value={paste.title}
            disabled
            onChange={e => setTitle(e.target.value)}
            />
        </div>

    </div>
    <div>
        <textarea 
        className='rounded-2xl mt-4 min-w-[500px] p-4 text-white'
        value={paste.content}
        placeholder='Enter your content here'
        onChange={e => setValue(e.target.value)}
        rows={20}
        />
    </div>
    </div>
    </div>
  );
}

export default ViewPastes;
