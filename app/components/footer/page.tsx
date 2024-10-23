const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold font-serif">Muhammad </h1>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="/" className="hover:underline font-serif font-bold">Portfolio</a>
            <a href="/about" className="hover:underline font-serif font-bold">About</a>
            <a href="/services" className="hover:underline font-serif font-bold">Services</a>
            <a href="/contact" className="hover:underline font-serif font-bold">Contact</a>
          </div>
        </div>

        <div className="text-center mt-8 text-sm font-serif">
          <p>© {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
