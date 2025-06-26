import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state)=>state.paste.pastes)

    useEffect(() => {
        console.log('Inside the use effect');
        if(pasteId)
        {
            const paste = allPastes.find((p)=> p.id === pasteId);
            console.log("Page Found");
            setTitle(paste.title);
            setValue(paste.content);
            }
            setTitle()
        },[pasteId])

    function createNewPaste()
    {
        let paste = {
            title: title,
            content: value,
            id : pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        };

        const existingPastesJSON = localStorage.getItem('pastes');
        const existingPastes = existingPastesJSON ? JSON.parse(existingPastesJSON) : [];

        // Step 2: Check if a paste with the same title already exists (excluding current one if updating)
        const isDuplicateTitle = existingPastes.some(p => p.title === title && p.id !== pasteId);

        if (isDuplicateTitle) {
            alert("A paste with this title already exists! Please choose a different title.");
            // Prevent clearing value
            return;
        }

        if(pasteId)
        {
            //if pasteId is available then it means we want to update
            dispatch(updateToPastes(paste));
        }
        else
        {
            //if pasteId is not available then create new paste
            dispatch(addToPastes(paste));
        }

        //after creation or updation
        setTitle("");
        setValue('');
        setSearchParams({});
    }


    return (
    <div>
        <div className='flex flex-row- gap-7 place-content-between'>
        <div>
            <input 
            type='text'
            className='p-2 rounded-2xl mt-2 w-[315px]'
            placeholder='Enter Title here'
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
        </div>


        <button onClick={createNewPaste} id='crtbtn'>
            {
                pasteId? "Update Paste" : "Create New Paste"
            }
        </button>
    </div>
    <div>
        <textarea 
        className='rounded-2xl mt-4 min-w-[500px] p-4'
        value={value}
        placeholder='Enter your content here'
        onChange={e => setValue(e.target.value)}
        rows={20}
        />
    </div>
    </div>
);
}

export default Home;
