import { AppHeading, AppText } from '../ui/heading'

export default function Footer() {
   return (
      <footer className='px-4 lg:px-16 bg-[#F0F0F0] py-6'>
         <div className='grid lg:grid-cols-10'>
            <div className='col-span-2 flex flex-col'>
               <AppHeading as='h4' className='font-integral font-bold'>
                  SHOP.CO
               </AppHeading>
               <AppText className='text-[#00000099] text-[14px]'>
                  We have clothes that suits your style and which you’re proud to wear. From women to men.
               </AppText>
               <div className='mt-auto'>
                  <svg width='148' height='28' viewBox='0 0 148 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
                     <circle cx='14' cy='14' r='14' fill='white' />
                     <circle cx='14' cy='14' r='13.5' stroke='black' stroke-opacity='0.2' />
                     <path
                        d='M20.2071 10.9831C19.7881 11.1693 19.3458 11.2857 18.8802 11.3556C19.3458 11.0762 19.7183 10.6339 19.8812 10.0985C19.4389 10.3546 18.9501 10.5408 18.4146 10.6572C17.9956 10.2149 17.3904 9.93555 16.7386 9.93555C15.4815 9.93555 14.4572 10.9598 14.4572 12.2169C14.4572 12.4031 14.4805 12.5661 14.5271 12.729C12.6415 12.6359 10.9421 11.728 9.80141 10.3313C9.61518 10.6805 9.49878 11.0529 9.49878 11.472C9.49878 12.2634 9.89453 12.9618 10.5231 13.3808C10.1506 13.3576 9.80141 13.2644 9.4755 13.1015V13.1248C9.4755 14.2422 10.267 15.1733 11.3145 15.3828C11.1283 15.4294 10.9188 15.4527 10.7093 15.4527C10.5696 15.4527 10.4067 15.4294 10.267 15.4061C10.5696 16.314 11.4077 16.9891 12.4087 16.9891C11.6172 17.5943 10.6395 17.9668 9.56862 17.9668C9.38239 17.9668 9.19616 17.9668 9.0332 17.9435C10.0575 18.5953 11.2447 18.9678 12.5483 18.9678C16.7618 18.9678 19.0665 15.476 19.0665 12.4497C19.0665 12.3566 19.0665 12.2402 19.0665 12.1471C19.5088 11.8444 19.9045 11.4487 20.2071 10.9831Z'
                        fill='black'
                     />
                     <circle cx='54' cy='14' r='14' fill='black' />
                     <path
                        d='M52.7087 20.3038V14.7503H50.8398V12.5859H52.7087V10.9898C52.7087 9.13752 53.84 8.12891 55.4924 8.12891C56.2839 8.12891 56.9642 8.18784 57.1624 8.21417V10.1499L56.0164 10.1505C55.1178 10.1505 54.9438 10.5775 54.9438 11.2041V12.5859H57.087L56.8079 14.7503H54.9438V20.3038H52.7087Z'
                        fill='white'
                     />
                     <circle cx='94' cy='14' r='14' fill='white' />
                     <circle cx='94' cy='14' r='13.5' stroke='black' stroke-opacity='0.2' />
                     <path
                        d='M94.0008 8.44721C95.8095 8.44721 96.0237 8.45398 96.7382 8.48656C97.1678 8.49182 97.5933 8.5707 97.9962 8.71979C98.2884 8.83248 98.5538 9.00511 98.7753 9.22656C98.9967 9.44802 99.1694 9.71339 99.282 10.0056C99.4311 10.4085 99.51 10.8341 99.5153 11.2637C99.5475 11.9782 99.5546 12.1924 99.5546 14.0011C99.5546 15.8098 99.5479 16.024 99.5153 16.7385C99.51 17.1681 99.4311 17.5936 99.282 17.9966C99.1694 18.2888 98.9967 18.5541 98.7753 18.7756C98.5538 18.997 98.2884 19.1697 97.9962 19.2824C97.5933 19.4315 97.1678 19.5103 96.7382 19.5156C96.024 19.5479 95.8098 19.5549 94.0008 19.5549C92.1917 19.5549 91.9775 19.5482 91.2633 19.5156C90.8337 19.5103 90.4082 19.4315 90.0053 19.2824C89.7131 19.1697 89.4477 18.997 89.2262 18.7756C89.0048 18.5541 88.8322 18.2888 88.7195 17.9966C88.5704 17.5936 88.4915 17.1681 88.4862 16.7385C88.454 16.024 88.4469 15.8098 88.4469 14.0011C88.4469 12.1924 88.4537 11.9782 88.4862 11.2637C88.4915 10.8341 88.5704 10.4085 88.7195 10.0056C88.8322 9.71339 89.0048 9.44802 89.2262 9.22656C89.4477 9.00511 89.7131 8.83248 90.0053 8.71979C90.4082 8.5707 90.8337 8.49182 91.2633 8.48656C91.9779 8.4543 92.192 8.44721 94.0008 8.44721ZM94.0008 7.22656C92.162 7.22656 91.9304 7.2343 91.2079 7.26721C90.6456 7.27839 90.0893 7.38485 89.5627 7.58205C89.1109 7.75226 88.7017 8.019 88.3637 8.36366C88.0187 8.70184 87.7517 9.11127 87.5814 9.56334C87.3842 10.09 87.2777 10.6463 87.2666 11.2085C87.2343 11.9304 87.2266 12.162 87.2266 14.0008C87.2266 15.8395 87.2343 16.0711 87.2672 16.7937C87.2784 17.3559 87.3848 17.9122 87.582 18.4388C87.7522 18.8908 88.0189 19.3002 88.3637 19.6385C88.7019 19.9832 89.1113 20.25 89.5633 20.4201C90.09 20.6173 90.6463 20.7238 91.2085 20.7349C91.9311 20.7672 92.1617 20.7756 94.0014 20.7756C95.8411 20.7756 96.0717 20.7679 96.7943 20.7349C97.3565 20.7238 97.9128 20.6173 98.4395 20.4201C98.8893 20.2457 99.2978 19.9794 99.6389 19.6381C99.98 19.2968 100.246 18.8882 100.42 18.4382C100.617 17.9115 100.724 17.3553 100.735 16.793C100.767 16.0711 100.775 15.8395 100.775 14.0008C100.775 12.162 100.767 11.9304 100.734 11.2079C100.723 10.6456 100.617 10.0893 100.419 9.56269C100.249 9.11068 99.9826 8.70126 99.6379 8.36301C99.2996 8.01828 98.8902 7.75153 98.4382 7.5814C97.9115 7.3842 97.3553 7.27775 96.793 7.26656C96.0711 7.2343 95.8395 7.22656 94.0008 7.22656Z'
                        fill='black'
                     />
                     <path
                        d='M94.0021 10.5234C93.3141 10.5234 92.6416 10.7275 92.0695 11.1097C91.4974 11.492 91.0515 12.0353 90.7882 12.6709C90.5249 13.3066 90.4561 14.006 90.5903 14.6808C90.7245 15.3556 91.0558 15.9755 91.5423 16.462C92.0288 16.9485 92.6487 17.2798 93.3235 17.414C93.9983 17.5482 94.6977 17.4794 95.3334 17.2161C95.969 16.9528 96.5123 16.5069 96.8946 15.9348C97.2768 15.3627 97.4809 14.6902 97.4809 14.0021C97.4809 13.0795 97.1144 12.1947 96.462 11.5423C95.8096 10.8899 94.9248 10.5234 94.0021 10.5234ZM94.0021 16.2602C93.5555 16.2602 93.119 16.1278 92.7476 15.8797C92.3763 15.6315 92.0869 15.2789 91.916 14.8663C91.7451 14.4537 91.7003 13.9996 91.7875 13.5616C91.8746 13.1236 92.0897 12.7213 92.4055 12.4055C92.7213 12.0897 93.1236 11.8746 93.5616 11.7875C93.9996 11.7003 94.4537 11.7451 94.8663 11.916C95.2789 12.0869 95.6315 12.3763 95.8797 12.7476C96.1278 13.119 96.2602 13.5555 96.2602 14.0021C96.2602 14.601 96.0223 15.1754 95.5988 15.5988C95.1754 16.0223 94.601 16.2602 94.0021 16.2602Z'
                        fill='black'
                     />
                     <path
                        d='M97.6176 11.1981C98.0665 11.1981 98.4305 10.8341 98.4305 10.3852C98.4305 9.93621 98.0665 9.57227 97.6176 9.57227C97.1686 9.57227 96.8047 9.93621 96.8047 10.3852C96.8047 10.8341 97.1686 11.1981 97.6176 11.1981Z'
                        fill='black'
                     />
                     <circle cx='134' cy='14' r='14' fill='white' />
                     <circle cx='134' cy='14' r='13.5' stroke='black' stroke-opacity='0.2' />
                     <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M134.607 7.22656C131.016 7.22656 128.127 10.1155 128.127 13.7065C128.127 16.5684 129.99 18.9984 132.555 19.8624C132.879 19.9164 132.987 19.7274 132.987 19.5384C132.987 19.3764 132.987 18.9714 132.987 18.4314C131.178 18.8364 130.8 17.5674 130.8 17.5674C130.503 16.8114 130.071 16.6224 130.071 16.6224C129.477 16.2174 130.125 16.2174 130.125 16.2174C130.773 16.2714 131.124 16.8924 131.124 16.8924C131.691 17.8914 132.636 17.5944 133.014 17.4324C133.068 17.0004 133.23 16.7304 133.419 16.5684C131.988 16.4064 130.476 15.8394 130.476 13.3555C130.476 12.6535 130.719 12.0595 131.151 11.6275C131.097 11.4655 130.854 10.8175 131.205 9.89952C131.205 9.89952 131.745 9.73752 132.987 10.5745C133.5 10.4395 134.067 10.3585 134.607 10.3585C135.147 10.3585 135.714 10.4395 136.227 10.5745C137.469 9.73752 138.009 9.89952 138.009 9.89952C138.36 10.7905 138.144 11.4385 138.063 11.6275C138.468 12.0865 138.738 12.6535 138.738 13.3555C138.738 15.8394 137.226 16.3794 135.768 16.5414C136.011 16.7304 136.2 17.1354 136.2 17.7294C136.2 18.5934 136.2 19.2954 136.2 19.5114C136.2 19.6734 136.308 19.8894 136.659 19.8354C139.224 18.9984 141.087 16.5684 141.087 13.7065C141.087 10.1155 138.198 7.22656 134.607 7.22656Z'
                        fill='black'
                     />
                  </svg>
               </div>
            </div>

            <div className='w-full col-span-8 flex justify-between gap-x-7'>
               <div>
                  <AppHeading as='h6' className='text-base font-medium mb-7 font-body tracking-[3px]'>
                     Company
                  </AppHeading>
                  <div className='flex flex-col gap-4'>
                     <AppText className='text-[#00000099]'>About</AppText>
                     <AppText className='text-[#00000099]'>Features</AppText>
                     <AppText className='text-[#00000099]'>Works</AppText>
                     <AppText className='text-[#00000099]'>Career</AppText>
                  </div>
               </div>

               <div>
                  <AppHeading as='h6' className='text-base font-medium mb-7 font-body tracking-[3px]'>
                     Help
                  </AppHeading>
                  <div className='flex flex-col gap-4'>
                     <AppText className='text-[#00000099]'>Customer Support</AppText>
                     <AppText className='text-[#00000099]'>Delivery Details</AppText>
                     <AppText className='text-[#00000099]'>Terms & Conditions</AppText>
                     <AppText className='text-[#00000099]'>Privacy Policy</AppText>
                  </div>
               </div>

               <div>
                  <AppHeading as='h6' className='text-base font-medium mb-7 font-body tracking-[3px]'>
                     FAQ
                  </AppHeading>
                  <div className='flex flex-col gap-4'>
                     <AppText className='text-[#00000099]'>Account</AppText>
                     <AppText className='text-[#00000099]'>Manage Deliveries</AppText>
                     <AppText className='text-[#00000099]'>Orders</AppText>
                     <AppText className='text-[#00000099]'>Payments</AppText>
                  </div>
               </div>

               <div>
                  <AppHeading as='h6' className='text-base font-medium mb-7 font-body tracking-[3px]'>
                     Resources
                  </AppHeading>
                  <div className='flex flex-col gap-4'>
                     <AppText className='text-[#00000099]'>Free eBooks</AppText>
                     <AppText className='text-[#00000099] whitespace-nowrap'>Development Tutorial</AppText>
                     <AppText className='text-[#00000099]'>How to - Blog</AppText>
                     <AppText className='text-[#00000099]'>Youtube Playlist</AppText>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
