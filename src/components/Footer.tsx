import { AppStoreIcon, PlaystoreIcon } from "./Icons";
import { ClearLinkIcon } from "./Logos";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./Socials";

const Footer = () => {
  return (
    <footer className=" text-grey-600 pt-12">
      <div className="w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 xl:gap-10">
        <div className="sm:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <ClearLinkIcon />
            <p className="text-grey-900 font-semibold text-lg">
              ClearLink
              <span className="text-clear-400 font-semibold text-2xl">.</span>
            </p>
          </div>
          <p>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div>
          <p className="font-semibold text-grey-500 mb-4">Product</p>
          <ul className="flex flex-col gap-8  cursor-pointer">
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-grey-500 mb-4">Company</p>
          <ul className="flex flex-col gap-8  cursor-pointer">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-grey-500 mb-4">Resources</p>
          <ul className="flex flex-col gap-8  cursor-pointer">
            <li>Blog</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-grey-500 mb-4">Legal</p>
          <ul className="flex flex-col gap-8  cursor-pointer">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-semibold text-clear-700">Get the app</span>
          <AppStoreIcon />
          <PlaystoreIcon />
        </div>
      </div>
      <aside className="bg-grey-50 mt-8">
        <div className="w-[90%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 py-4">
          <p>© {new Date().getFullYear()} ClearLink. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <LinkedinIcon />
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
            <GithubIcon />
            <YoutubeIcon />
          </div>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
