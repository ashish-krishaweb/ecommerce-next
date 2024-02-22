import { Heading } from "../ui";

export default function Footer() {
  return (
    <footer className="px-4 lg:px-16 bg-[#F0F0F0] py-6">
      <div className="grid lg:grid-cols-10">
        <div className="col-span-2">
          <Heading type="primary" className="text-[33px]">
            SHOP.CO
          </Heading>
          <Heading className="text-[#00000099]">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </Heading>
        </div>

        <div></div>

        <div>
          <Heading className="font-medium text-base tracking-[3px] leading-[18px] mb-6">
            Company
          </Heading>
          <div className="flex flex-col gap-4">
            <p className="text-[#00000099]">About</p>
            <p className="text-[#00000099]">Features</p>
            <p className="text-[#00000099]">Works</p>
            <p className="text-[#00000099]">Career</p>
          </div>
        </div>

        <div></div>
        <div>
          <Heading className="font-medium text-base tracking-[3px] leading-[18px] mb-6">
            Help
          </Heading>
          <div className="flex flex-col gap-4">
            <p className="text-[#00000099]">Customer Support</p>
            <p className="text-[#00000099]">Delivery Details</p>
            <p className="text-[#00000099]">Terms & Conditions</p>
            <p className="text-[#00000099]">Privacy Policy</p>
          </div>
        </div>

        <div></div>
        <div>
          <Heading className="font-medium text-base tracking-[3px] leading-[18px] mb-6">
            FAQ
          </Heading>
          <div className="flex flex-col gap-4">
            <p className="text-[#00000099]">Account</p>
            <p className="text-[#00000099]">Manage Deliveries</p>
            <p className="text-[#00000099]">Orders</p>
            <p className="text-[#00000099]">Payments</p>
          </div>
        </div>

        <div></div>
        <div>
          <Heading className="font-medium text-base tracking-[3px] leading-[18px] mb-6">
            Resources
          </Heading>
          <div className="flex flex-col gap-4">
            <p className="text-[#00000099]">Free eBooks</p>
            <p className="text-[#00000099]">Development Tutorial</p>
            <p className="text-[#00000099]">How to - Blog</p>
            <p className="text-[#00000099]">Youtube Playlist</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
