import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  // Filter pastes by search term
  const filteredData = pastes.filter((paste) =>
    paste.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete a paste
  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
    toast.success('Paste deleted!');
  };

  // Copy paste content to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => toast.success("Copied to clipboard"))
      .catch(() => toast.error("Failed to copy"));
  };

  // Native share functionality
  const handleNativeShare = (paste) => {
    if (!navigator.share) {
      return toast.error('Sharing not supported on this browser.');
    }

    navigator.share({
      title: paste.title,
      text: 'Check out this paste!',
      url: `${window.location.origin}/pastes/${paste.id}`,
    })
      .then(() => toast('Sharing...'))
      .catch(() => toast.error('Share canceled or failed.'));
  };

  return (
    <div>
      {/* Search Input */}
      <div>
        <input
          type="search"
          className="p-3 rounded-2xl min-w-[500px] mt-5"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Pastes List */}
      <div className="flex flex-col border-2 bg-gray-800 m-5 max-w-3xl">
        <div className="border p-3 text-lg font-bold text-yellow-300">
          <h3>All Titles</h3>
        </div>

        <div className="m-3">
          {filteredData.length > 0 ? (
            filteredData.map((paste) => (
              <div
                className="border-4 border-red-500 rounded-lg p-5 m-3 max-w-3xl"
                key={paste?.id}
              >
                {/* Paste Title */}
                <div className="font-bold text-lg border bg-slate-500 text-white p-2 rounded">
                  {paste.title}
                </div>

                {/* Paste Content */}
                <div className="mb-5 p-2 mt-2 text-white text-md w-full max-h-20 overflow-hidden">
                  {paste.content}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-4 justify-evenly">
                  <a
                    href={`/?pasteId=${paste?.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </a>
                  <a
                    href={`/pastes/${paste?.id}`}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View
                  </a>
                  <button
                    onClick={() => handleDelete(paste?.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleCopy(paste?.content)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleNativeShare(paste)}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Share
                  </button>
                </div>

                {/* Last Used Date */}
                <div className="mt-4 text-gray-300">
                  Last used on: {format(new Date(paste.createdAt), 'dd-MMMM-yyyy')}
                </div>
              </div>
            ))
          ) : (
            <div className="text-white text-center mt-5">
              No pastes found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pastes;
