import CommonWrapper from "@/common/CommonWrapper";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white py-4 shadow-2xl">
     <CommonWrapper> <div className="mx-auto">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start items-center space-x-1 text-sm text-gray-300 mb-2">
          <a href="/help" className="hover:text-white transition-colors">
            Help
          </a>
          <span className="text-gray-500">|</span>
          <a href="/about" className="hover:text-white transition-colors">
            About
          </a>
          <span className="text-gray-500">|</span>
          <a href="/feedback" className="hover:text-white transition-colors">
            Feedback
          </a>
          <span className="text-gray-500">|</span>
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </a>
          <span className="text-gray-500">|</span>
          <a href="/ja" className="hover:text-white transition-colors">
            日本語
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-sm text-gray-400">
          <p>By Kyoto Games. Copyright 2018 by Andy Pickering.</p>
        </div>
      </div></CommonWrapper>
    </footer>
  );
};

export default Footer;