function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">🎬 MoviesHub</h2>
          <p className="text-sm mt-1">Your ultimate movie guide.</p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Privacy
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Terms
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        <div className="text-xs text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} MoviesHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
