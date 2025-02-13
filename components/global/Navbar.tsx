import Image from "next/image";
import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { BiBell, BiMenu, BiVideoPlus } from "react-icons/bi";
import Searchbar from "../ui/searchInput";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 z-10">
      <nav
        id="navigation"
        className="bg-backgroundPrimary h-14 w-full flex flex-row flex-nowrap justify-between items-center"
      >
        <div className="flex justify-around items-center">
          <BiMenu className="text-colorPrimary cursor-pointer lg:w-8 lg:h-8 w-12 h-12 lg:mx-6 ml-4 mr-2" />
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

        <div className="flex justify-between items-center lg:mx-6 mx-4 lg:w-40 w-20">
          <BiVideoPlus className="text-colorPrimary cursor-pointer md:w-5 md:h-5 hidden" />
          <CgMenuGridR className="text-colorPrimary cursor-pointer md:w-5 md:h-5 hidden" />
          <BiBell className="text-colorPrimary cursor-pointer w-5 h-5" />

          <Image
            className="lg:w-8 h-5 w-5  rounded-full cursor-pointer"
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
