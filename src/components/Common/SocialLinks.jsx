import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2">
      <Link
        className=" font-[font2] border-2 rounded-full pt-[.27em] px-[.4em] leading-[.72em] hover:text-[#D3FD50]  "
        to="https://sheryians.com"
        target="_blank"
      >
        FB
      </Link>
      <Link
        className=" font-[font2] border-2 rounded-full pt-[.27em] px-[.4em] leading-[.72em] hover:text-[#D3FD50]  "
        to="https://sheryians.com"
        target="_blank"
      >
        IG
      </Link>
      <Link
        className=" font-[font2] border-2 rounded-full pt-[.27em] px-[.4em] leading-[.72em] hover:text-[#D3FD50]  "
        to="https://sheryians.com"
        target="_blank"
      >
        IN
      </Link>
      <Link
        className=" font-[font2] border-2 rounded-full pt-[.27em] px-[.4em] leading-[.72em] hover:text-[#D3FD50]  "
        to="https://sheryians.com"
        target="_blank"
      >
        BE
      </Link>
    </div>
  );
};

export default SocialLinks;
