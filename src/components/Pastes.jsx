import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
// npm install date-fns environment to set up

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
  paste.title?.toLowerCase().includes(searchTerm.toLowerCase())
);

  function handleDelete(pasteId)
  {
    dispatch(removeFromPastes(pasteId));
  }

  // function handleCopy(text) {
  //   navigator.clipboard.writeText(text)
  //     .then(() => toast.success("Copied to clipboard"))
  //     .catch(() => toast.error("Failed to copy"));
  // }

  function handleNativeShare(paste) {
  if (!navigator.share) {
    return toast.error('Sharing not supported on this browser.');
  }

  navigator.share({
    title: paste.title,
    text: 'Check out this paste!',
    url: `${window.location.origin}/paste/${paste.id}`,
  })
    .then(() => toast('Sharing...'))
    .catch(() => toast.error('Share canceled or failed.'));
}

  return (
    <div>
      <div>
        <input
          type="search"
          className="p-3 rounded-2xl min-w-[500px] mt-5"
          placeholder="search here..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col border-2 bg-gray-800 m-5 max-w-3xl">
        <div className='border p-3 text-lg font-bold text-yellow-300'>
          <h3 >All Tiles</h3>
        </div>
        
        <div className='m-3'>
          {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="border-4 border-red-500 rounded-lg p-5 m-3 max-w-3xl" key={paste?.id}>

                <div className="font-bold text-lg border bg-slate-500 text-white">{paste.title}</div>
                
                <div className="mb-5 p-2 mt-2 text-white text-md w-full max-h-20 overflow-hidden">{paste.content}</div>  {/*overflow-hidden is used to the content going out of the div from it's height and width */}
                
                <div className="flex flex-row gap-4 place-content-evenly">
                  <button><a href={`/?pasteId=${paste?.id}`}>Edit</a></button>
                  <button><a href={`/pastes/${paste?.id}`}>View</a></button>
                  <button onClick={()=>handleDelete(paste?.id)}>Delete</button>
                  {/* <button onClick={()=>handleCopy(paste?.content)}>Copy</button> */}
                  <button onClick={() => {navigator.clipboard.writeText(paste?.content).then(()=>toast.success("copied to clipboard")).catch(()=>toast.error('copy failed.'))}}>Copy</button>
                  <button onClick={() => handleNativeShare(paste?.id)}>Share</button>
                </div>
                <div className='mt-4'>last used on : {format(new Date(paste.createdAt), 'dd-MMMM-yyyy')}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pastes;
