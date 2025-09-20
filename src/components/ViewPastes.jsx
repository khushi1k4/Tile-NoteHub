import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateToPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const ViewPastes = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allPastes = useSelector((state) => state.paste.pastes);
  
  // Find the paste by ID
  const paste = allPastes.find((p) => p.id === id);

  // Local state for editing
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Set initial state when paste loads
  useEffect(() => {
    if (paste) {
      setTitle(paste.title);
      setContent(paste.content);
    }
  }, [paste]);

  if (!paste) {
    return <div className="text-white text-center mt-5">Paste not found</div>;
  }

  // Save changes to Redux
  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      return toast.error('Title and Content cannot be empty');
    }
    dispatch(updateToPastes({ id: paste.id, title, content }));
    toast.success('Paste updated successfully!');
    navigate('/pastes'); // Redirect back to list after saving
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="flex flex-col gap-5 w-full max-w-3xl">
        {/* Title Input */}
        <input
          type="text"
          className="p-3 rounded-2xl w-full text-black font-bold text-lg"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Content Textarea */}
        <textarea
          className="p-4 rounded-2xl w-full min-h-[300px] text-black"
          placeholder="Enter your content here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={15}
        />

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPastes;
