import { Link, useLocation } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
  const location = useLocation();
  const isFaqPage = location.pathname === "/faq";

  return (
    <>
      <h2 className="font-bold uppercase text-2xl lg:text-3xl text-center">
        Contact
      </h2>
      <div className="mt-8 flex flex-col items-center lg:flex-row lg:justify-between lg:items-start gap-10">
        <div className="text-center lg:text-left lg:max-w-xs">
          <h3 className="font-bold uppercase text-base">
            Have a question or want to get in touch?
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Choose one of the channels. We'll be happy to help!
          </p>
        </div>
        <ul className="text-sm text-center lg:text-left space-y-1">
          <li className="text-base font-semibold">Customer Service:</li>
          <li>Email: contact@noir.com.br </li>
          <li>WhatsApp: +55 (71) 99999-9999 </li>
          <li>Service Hours: Mon - Fri, 9 AM to 6 PM (BRT).</li>
        </ul>
        <ul className="text-sm space-y-2 text-center lg:text-left">
          <li className="text-base font-semibold">Follow NOIR:</li>
          <li className="flex items-center gap-2 justify-center lg:justify-start">
            <SocialIcon
              url="https://www.instagram.com/Guilherme.Ferza"
              style={{ height: 25, width: 25 }}
            />
            @noir_streetwear
          </li>
          <li className="flex items-center gap-2 justify-center lg:justify-start">
            <SocialIcon
              url="https://www.tiktok.com"
              style={{ height: 25, width: 25 }}
            />
            @noir.br
          </li>
        </ul>
        {!isFaqPage && (
          <p className="max-w-xs text-center lg:text-left">
            For quick answers, check out our FAQ (
            <Link to="/faq">
              <span className="text-blue-500 relative after:content-[''] after:absolute after:bottom-[-0.02rem] after:left-[0.10rem] after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-[calc(100%-0.2rem)]">
                Frequently Asked Questions
              </span>
            </Link>
            ).
          </p>
        )}
      </div>
    </>
  );
}
