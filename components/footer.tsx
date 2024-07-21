const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
           Copyright &copy; {new Date().getFullYear()} UltraShunior.
        </p>
      </div>
    </footer>
  )
};

export default Footer;
