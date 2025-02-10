import Image from "next/image";
import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { BiBell, BiMenu, BiVideoPlus } from "react-icons/bi";
import Searchbar from "../ui/Searchbar";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 z-10">
      <nav
        id="navigation"
        className="bg-backgroundPrimary h-14 w-full flex flex-row flex-nowrap justify-between items-center"
      >
        <div className="flex justify-around items-center">
          <BiMenu className="text-colorPrimary cursor-pointer w-8 h-8 mx-6" />
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Youtube-Logo.png"
              alt="Youtube logo"
              width={120}
              height={120}
            />
          </Link>
        </div>

        <Searchbar />

        <div className="flex justify-between items-center mx-6 w-40">
          <BiVideoPlus className="text-colorPrimary cursor-pointer w-5 h-5" />
          <CgMenuGridR className="text-colorPrimary cursor-pointer w-5 h-5" />
          <BiBell className="text-colorPrimary cursor-pointer w-5 h-5" />

          <Image
            className="w-8 h-8 rounded-full cursor-pointer"
            src="/images/profile-photo.webp"
            alt="user profile"
            width={10}
            height={10}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
