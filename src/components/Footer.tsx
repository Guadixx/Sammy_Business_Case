import { IconBrandGithubFilled } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--white)] bg-opacity-80 py-4 text-white">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/Guadixx/Sammy_Business_Case"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithubFilled className="w-8 h-8 text-[var(--black)]" />
        </a>
        <a
          href="https://linkedin.com/in/guadalupedoudchitzkyamadeo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin className="w-8 h-8 text-[var(--black)]" />
        </a>
        <a href="mailto:guadadoud@gmail.com">
          <IconMail className="w-8 h-8 text-[var(--black)]" />
        </a>
      </div>
      <p className="text-center mt-4 text-[var(--black)]">
        © {new Date().getFullYear()} Guadalupe Doudchitzky Amadeo. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
