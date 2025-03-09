import { IconSearch } from '@tabler/icons-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput(props: Readonly<SearchInputProps>) {
  return (
    <div className={`relative flex items-center ${props.className}`}>
      <IconSearch className="absolute left-2 h-5 w-5 text-[var(--grey-5-input-text)]" />
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className={`w-full p-2 rounded-lg text-[var(--grey-5-input-text)] focus:outline-none focus:ring-2 focus:ring-blue-500 pl-8  ${props.className}`}
      />
    </div>
  );
}
