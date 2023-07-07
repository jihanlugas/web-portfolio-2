import { FaLinkedinIn, FaGithub, FaGoogle } from 'react-icons/fa';
import Typed from 'react-typed';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';

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

  return (
    <>
      <div className={'h-screen flex items-center justify-center'}>
        <div className={`h-screen w-screen bg-black absolute duration-5000 ${hideLoading ? 'hidden' : !initLoading ? ' opacity-0' : 'opacity-100'}`}>
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
          {/* <div className='hidden md:flex mb-8'>
            {menu['en'].map((data, key) => {
              console.log('router.pathname ', router.pathname)
              console.log('data.path ', data.path)
              const isSelected = router.pathname === data.path;
              return (
                <Link key={key} href={data.path}>
                  <div className={isSelected ? 'text-green-600 mr-4' : 'mr-4 duration-500 hover:text-green-600'} key={key}>{data.name}</div>
                </Link>

              )
            })
            }
          </div> */}
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