import sammyLogo from '../assets/SAMY.svg';
import sammyMobileLogo from '../assets/SAMY_mobile.svg';
import { SearchInput } from './SearchInput';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export function Header(props: Readonly<HeaderProps>) {
  return (
    <header className="bg-[var(--white)] w-full h-[120px] p-0 pt-2 flex items-center justify-center">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex self-start items-center ">
          <img
            src={sammyMobileLogo}
            alt="Sammy Business Case Logo"
            className="w-[80px] mb-4  sm:hidden"
          />
          <img
            src={sammyLogo}
            alt="Sammy Business Case Logo"
            className="w-auto hidden h-8 sm:block"
          />
        </div>

        <div className="flex items-center justify-end flex-1">
          <SearchInput
            value={props.searchTerm}
            onChange={props.setSearchTerm}
            placeholder="Are you looking for something?"
            className="w-70 sm:w-68 bg-[var(--grey-2-input-background)] overflow-hidden rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
