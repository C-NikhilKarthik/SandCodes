import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#020b15] text-main-text py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-bold mb-2 text-main-light">Spacetec</h1>
          <p className="text-sm">© 2024 Spacetec. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex gap-4">
            <a href="/about" className="text-sm hover:text-color7">
              About
            </a>
            <a href="/contact" className="text-sm hover:text-color7">
              Contact
            </a>
            <a href="/privacy" className="text-sm hover:text-color7">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm hover:text-color7">
              Terms of Service
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-color8 hover:text-color7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.238-.009-.868-.013-1.703-2.782.605-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.607.069-.607 1.003.07 1.53 1.031 1.53 1.031.892 1.529 2.341 1.088 2.91.832.092-.647.349-1.088.635-1.338-2.22-.252-4.555-1.111-4.555-4.946 0-1.092.39-1.987 1.029-2.686-.103-.253-.446-1.268.098-2.643 0 0 .84-.269 2.75 1.026A9.563 9.563 0 0112 7.933a9.56 9.56 0 012.51.338c1.909-1.295 2.75-1.026 2.75-1.026.545 1.375.202 2.39.1 2.643.641.699 1.029 1.594 1.029 2.686 0 3.843-2.338 4.691-4.566 4.94.36.31.68.927.68 1.867 0 1.347-.012 2.433-.012 2.762 0 .267.18.576.688.478C19.135 20.165 22 16.417 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-color8 hover:text-color7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M24 4.557a9.84 9.84 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.854 9.854 0 01-3.127 1.195 4.924 4.924 0 00-8.391 4.488A13.978 13.978 0 011.671 3.149a4.922 4.922 0 001.524 6.573A4.903 4.903 0 01.964 9.1v.063a4.923 4.923 0 003.95 4.827 4.9 4.9 0 01-2.224.084 4.926 4.926 0 004.604 3.417A9.872 9.872 0 010 21.54a13.936 13.936 0 007.548 2.212c9.054 0 14.002-7.497 14.002-13.986 0-.213-.005-.425-.014-.636A10.024 10.024 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-color8 hover:text-color7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M20.447 3H3.553C3.249 3 3 3.25 3 3.553v16.895C3 20.751 3.249 21 3.553 21h16.895c.305 0 .553-.25.553-.553V3.553C21 3.25 20.751 3 20.447 3zM7.94 18.108H5.279V9.588H7.94v8.52zM6.61 8.45H6.591c-.793 0-1.308-.545-1.308-1.226 0-.693.528-1.227 1.339-1.227.813 0 1.308.534 1.326 1.227-.001.681-.513 1.226-1.338 1.226zM18.108 18.108h-2.653v-4.177c0-1.052-.37-1.771-1.297-1.771-.707 0-1.128.472-1.314.928-.067.165-.084.395-.084.625v4.396h-2.653v-8.52h2.653v1.163c.353-.547.986-1.325 2.402-1.325 1.755 0 3.071 1.143 3.071 3.6v5.082z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
