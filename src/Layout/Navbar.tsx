import CommonWrapper from "@/common/CommonWrapper";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Shiritori - English Word Chain Game");
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const handleTwitterShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out this English Shiritori game!");
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      '_blank',
      'width=600,height=400'
    );
  };

  return (
    <nav className="bg-[#000] shadow-2xl py-2">
      <CommonWrapper>
        <div className="mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="text-white text-3xl font-normal">
              Shiritori・英語しりとり
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-white  text-lg border-r border-r-gray-400 px-2">Share</span>
            
            <button
              onClick={handleFacebookShare}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors duration-200"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="cursor-pointer" size={16} />
            </button>
            
            <button
              onClick={handleTwitterShare}
              className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded transition-colors duration-200"
              aria-label="Share on Twitter"
            >
              <FaTwitter className="cursor-pointer" size={16} />
            </button>
          </div>
        </div>
      </div>
      </CommonWrapper>
    </nav>
  );
};

export default Navbar;