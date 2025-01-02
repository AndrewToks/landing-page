import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { AiFillMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="w-full h-full">
      <main className="bg-bgImg bg-center bg-no-repeat bg-cover min-h-screen h-fit w-full text-white">
        {/* Hero Section */}
        <div className="p-5 text-center">
          <div className="max-w-[627px] mx-auto mt-14 mb-10 flex flex-col items-center gap-4">
            <h1 className="text-[30px] lg:text-[45px] text-center leading-tight">
              We can bring your dream home to life
            </h1>
            <button className="text-[12px] lg:text-[16px] text-[#23262F] w-[250px] bg-[#EDAB42] hover:bg-[#c58927] hover:border-[#c58927] border border-[#EDAB42] rounded-[7px] py-[12px] px-[10px] lg:px-[32px]">
              Schedule Consultation
            </button>
          </div>

          {/* Footer Grid */}
          <div className="max-w-[900px] mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
              {/* Column 1 */}
              <article className="flex flex-col gap-4 items-start">
                <h1 className="text-[20px] font-semibold">
                  <span className="text-[#EDAB42]">Serene</span>
                  <span>haven</span>
                </h1>
                <ul className="flex flex-col gap-2">
                  <li>Contact Us</li>
                  <li className="flex gap-2 items-start">
                    <FaLocationDot className="text-[#EDAB42]" size={20} />
                    <span className="text-[12px]">
                      Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CiMail className="text-[#EDAB42]" size={20} />
                    <span>support@figma.com</span>
                  </li>
                </ul>
              </article>

              {/* Column 2 */}
              <article className="flex flex-col items-start gap-2">
                <h1 className="font-semibold mb-2">Product</h1>
                <ul className="space-y-2 text-sm">
                  <li>Landing Page</li>
                  <li>Popup Builder</li>
                  <li>Web Design</li>
                  <li>Content</li>
                  <li>Integrations</li>
                </ul>
              </article>

              {/* Column 3 */}
              <article className="flex flex-col items-start gap-2">
                <h1 className="font-semibold mb-2">Resources</h1>
                <ul className="space-y-2 text-sm">
                  <li>Academy</li>
                  <li>Blog</li>
                  <li>Themes</li>
                  <li>Hosting</li>
                  <li>Developers</li>
                  <li>Support</li>
                </ul>
              </article>

              {/* Column 4 */}
              <article className="flex flex-col items-start gap-2">
                <h1 className="font-semibold mb-2">Company</h1>
                <ul className="space-y-2 text-sm">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>FAQs</li>
                  <li>Teams</li>
                  <li>Contact Us</li>
                </ul>
              </article>

              {/* Column 5 */}
              <article className="flex flex-col items-start gap-4">
                <h1 className="font-semibold mb-3">Follow Us</h1>
                <div className="flex gap-4">
                  <FaInstagram />
                  <FaFacebook />
                  <FaTwitter />
                </div>
                <small className="text-sm">Receive exclusive offers in your mailbox</small>
                <div className="flex flex-col lg:flex-row gap-3 items-start w-full">
                  <div className="relative w-full">
                    <AiFillMail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#EDAB42]" size={20} />
                    <input
                      type="text"
                      placeholder="Enter your mail"
                      className="w-full rounded-[7px] text-[15px] py-2 pl-10 pr-4 bg-[#23262f] text-white"
                    />
                  </div>
                  <button className="text-[12px] lg:text-[16px] text-[#23262F] bg-[#EDAB42] hover:bg-[#c58927] border border-[#EDAB42] rounded-[7px] py-[8px] px-[16px]">
                    Subscribe
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Footer;
