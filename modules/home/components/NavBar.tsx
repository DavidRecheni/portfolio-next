import { Button, Link } from "react-daisyui";

const NavBar = () => {
  return (
    <div className="flex flex-col z-10 justify-end 2xl:justify-center">
      <Link href="/cv">
        <Button color="ghost" className="text-3xl">
          CV
        </Button>
      </Link>
    </div>
  );
};

export default NavBar;
