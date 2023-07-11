import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';


const montserrat = Montserrat({
  subsets: ['latin']
})

const menu = {
  en: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    // {
    //   name: "Education",
    //   path: "/education",
    // },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "Skill",
      path: "/skill",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ],
  id: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Education",
      path: "/education",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "Skill",
      path: "/skill",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ],
  jp: [
    {
      name: "ホーム",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Education",
      path: "/education",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "Skill",
      path: "/skill",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ],
};

const Header = () => {

  const router = useRouter();
  const refProfile = useRef<HTMLDivElement>();
  const [profileBar, setProfileBar] = useState(false);


  return (
    <>
      <div className="flex justify-center shadow">
        <div className='h-20 w-full max-w-6xl flex items-center justify-between px-4'>
          <div className={`text-xl md:text-3xl font-bold md:font-medium ${montserrat.className}`}>
            <Link href={'/'}>
              Jihan Lugas
            </Link>
          </div>
          <div className="hidden md:flex">
            {menu['en'].map((data, key) => {
              const isSelected = router.pathname === data.path;
              return (
                <Link key={key} href={data.path}>
                  <div className={isSelected ? 'text-green-600 mr-4' : 'mr-4 duration-500 hover:text-green-600'} key={key}>{data.name}</div>
                </Link>
              )
            })}
          </div>
          <div className="flex md:hidden">
            <div className="relative inline-block text-left" ref={refProfile}>
              <div className="flex items-center justify-center">
                <button className="relative flex justify-center items-center overflow-hidden mx-2 h-10 w-10 rounded-full" onClick={() => setProfileBar(!profileBar)}>
                  <AiOutlineMenu size={'1.5em'} />
                </button>
              </div>
              <div className={`absolute right-4 mt-2 w-56 rounded-md overflow-hidden origin-top-right shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none duration-300 ease-in-out ${!profileBar && 'scale-0 shadow-none ring-0'}`}>
                <div className="bg-zinc-700 text-gray-50" role="none">
                  {menu['en'].map((data, key) => {
                    const isSelected = router.pathname === data.path;
                    return (
                      <>
                        <Link key={key} href={data.path}>
                          <div className={'lock px-4 py-3 text-sm capitalize duration-300 hover:bg-primary-100 hover:text-gray-700'} key={key}>{data.name}</div>
                        </Link>
                        <hr className='border-zinc-900' />
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;