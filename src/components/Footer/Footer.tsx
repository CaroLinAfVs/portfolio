const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-around p-4 h-auto">
      <div className="p-4 font-bold flex flex-col justify-center items-center">
        <h1 className="text-3xl">Lets work together</h1>
        <h1 className="text-xl">hello@hello.com</h1>
      </div>
      <div className="flex items-center w-1/2 justify-between">
        <div className="p-4 flex flex-col items-center">
          <h2 className="font-bold mb-2">Quick enlace</h2>
          <ul className="list-none ">
            <li className="hover:text-blue-500">about</li>
            <li className="hover:text-blue-500">home</li>
            <li className="hover:text-blue-500">contact</li>
          </ul>
        </div>
        <div className="p-4 flex flex-col items-center ">
          <h2 className="font-bold mb-2">Quick enlace</h2>
          <ul className="list-none ">
            <li className="hover:text-blue-500">github</li>
            <li className="hover:text-blue-500">gmail</li>
            <li className="hover:text-blue-500">phone</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
