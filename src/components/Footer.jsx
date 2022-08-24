import React from 'react'
import { Footer as Foot } from 'flowbite-react'
import {BsGithub, BsFacebook, BsInstagram, BsTwitter, BsDribbble} from 'react-icons/bs'

export const Footer = () => {
  return (
<Foot bgDark={true}>
  <div className="w-full ">
    <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
      <div>
        <Foot.Title title="Company" />
        <Foot.LinkGroup col={true}>
          <Foot.Link href="#">
            About
          </Foot.Link>
          <Foot.Link href="#">
            Careers
          </Foot.Link>
          <Foot.Link href="#">
            Brand Center
          </Foot.Link>
          <Foot.Link href="#">
            Blog
          </Foot.Link>
        </Foot.LinkGroup>
      </div>
      <div>
        <Foot.Title title="help center" />
        <Foot.LinkGroup col={true}>
          <Foot.Link href="#">
            Discord Server
          </Foot.Link>
          <Foot.Link href="#">
            Twitter
          </Foot.Link>
          <Foot.Link href="#">
            Facebook
          </Foot.Link>
          <Foot.Link href="#">
            Contact Us
          </Foot.Link>
        </Foot.LinkGroup>
      </div>
      <div>
        <Foot.Title title="legal" />
        <Foot.LinkGroup col={true}>
          <Foot.Link href="#">
            Privacy Policy
          </Foot.Link>
          <Foot.Link href="#">
            Licensing
          </Foot.Link>
          <Foot.Link href="#">
            Terms & Conditions
          </Foot.Link>
        </Foot.LinkGroup>
      </div>
      <div>
        <Foot.Title title="download" />
        <Foot.LinkGroup col={true}>
          <Foot.Link href="#">
            iOS
          </Foot.Link>
          <Foot.Link href="#">
            Android
          </Foot.Link>
          <Foot.Link href="#">
            Windows
          </Foot.Link>
          <Foot.Link href="#">
            MacOS
          </Foot.Link>
        </Foot.LinkGroup>
      </div>
    </div>
    <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
      <Foot.Copyright
        href="#"
        by="Flowbite™"
        year={2022}
      />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Foot.Icon
          href="#"
          icon={BsFacebook}
        />
        <Foot.Icon
          href="#"
          icon={BsInstagram}
        />
        <Foot.Icon
          href="#"
          icon={BsTwitter}
        />
        <Foot.Icon
          href="#"
          icon={BsGithub}
        />
        <Foot.Icon
          href="#"
          icon={BsDribbble}
        />
      </div>
    </div>
  </div>
</Foot>
  )
}
