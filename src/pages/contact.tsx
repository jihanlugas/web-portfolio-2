import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import { NextPage } from 'next/types';

type Props = {
  children: React.ReactNode
}


const Contact: NextPage<Props> = ({ children }) => {
  return (
    <>
      <div>Contact Coming Soon</div>
    </>
  )
}

(Contact as PageWithLayoutType).layout = Main;

export default Contact;