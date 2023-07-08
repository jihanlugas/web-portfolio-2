import { FaLinkedinIn, FaGithub, FaGoogle } from 'react-icons/fa';
import Typed from 'react-typed';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
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

const typed = {
  en: [
    'Coder',
    'Developer',
    'Muslim',
  ],
  id: [
    'Coder',
    'Developer',
    'Muslim',
  ],
  jp: [
    'コーダー',
    'デベロッパー',
    'イスラム教徒',
  ],
}

const Index = () => {

  const router = useRouter();
  const { locale } = router;

  const [initLoading, setInitLoading] = useState<boolean>(true);
  const [hideLoading, setHideLoading] = useState<boolean>(false);

  useEffect(() => {
    setInitLoading(false)

    // timeout duration sama dengan duration login
    setTimeout(() => {
      setHideLoading(!hideLoading)
    }, 5000);
  }, [])


  const refProfile = useRef<HTMLDivElement>();
  const [profileBar, setProfileBar] = useState(false);

  return (
    <>
      <div className="absolute flex justify-center w-full">
        <div className='h-20 w-full max-w-6xl flex items-center justify-end px-4'>
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
      <div className={'h-screen flex items-center justify-center'}>
        <div className={`h-screen w-screen bg-black absolute duration-5000 ${hideLoading ? 'hidden' : !initLoading ? ' opacity-0' : 'opacity-70'}`}>
        </div>
        <div className={`flex flex-col p-8 md:p-0 w-full md:max-w-xl ${montserrat.className}`}>
          <div className='mb-4 font-bold'>
            <h1>{'Jihan Lugas'}</h1>
          </div>
          {/* <Link href={router.pathname} locale={'en'}>
            En
          </Link>
          <Link href={router.pathname} locale={'id'}>
            Id
          </Link>
          <Link href={router.pathname} locale={'jp'}>
            Jp
          </Link> */}
          <div className='mb-8'>
            <h2 className='flex'>
              <div className='mr-2'>{"I'm"}</div>
              <Typed
                className='text-green-600 underline underline-offset-8'
                strings={typed[locale]}
                // startDelay={5000}
                typeSpeed={160}
                loop={true}
              />
            </h2>
          </div>
          <div className='hidden md:flex mb-8'>
            {menu['en'].map((data, key) => {
              const isSelected = router.pathname === data.path;
              return (
                <Link key={key} href={data.path}>
                  <div className={isSelected ? 'text-green-600 mr-4' : 'mr-4 duration-500 hover:text-green-600'} key={key}>{data.name}</div>
                </Link>

              )
            })
            }
          </div>
          <div className="flex mb-4">
            <Link href={'https://www.linkedin.com/in/jihan-lugas-13a914195'} target='_blank'>
              <div className='flex justify-center items-center h-10 w-10 mr-2 bg-gray-600 hover:bg-green-600 text-white rounded-full'>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href={'https://github.com/jihanlugas'} target='_blank'>
              <div className='flex justify-center items-center h-10 w-10 mr-2 bg-gray-600 hover:bg-green-600 text-white rounded-full'>
                <FaGithub />
              </div>
            </Link>
            <Link href={'mailto:jihanlugas2@gmail.com'}>
              <div className='flex justify-center items-center h-10 w-10 mr-2 bg-gray-600 hover:bg-green-600 text-white rounded-full'>
                <FaGoogle />
              </div>
            </Link>
          </div>
        </div>

      </div>

    </>
  )
}

export default Index;