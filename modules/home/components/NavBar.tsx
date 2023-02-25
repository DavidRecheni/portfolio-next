import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex flex-col z-10 justify-end 2xl:justify-center">
      <Link href="/cv">
        <button className="bg-cyan-600 text-3xl hover:text-black transition duration-300 ease-out rounded px-6 py-2 font-medium">
          CV
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
