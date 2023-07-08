import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import { NextPage } from 'next/types';

type Props = {
  children: React.ReactNode
}


const Education: NextPage<Props> = ({ children }) => {
  return (
    <>
      <div>Education</div>
    </>
  )
}

(Education as PageWithLayoutType).layout = Main;

export default Education;