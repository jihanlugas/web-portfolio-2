import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import { NextPage } from 'next/types';

type Props = {
  children: React.ReactNode
}


const Skill: NextPage<Props> = ({ children }) => {
  return (
    <>
      <div>Skill Coming Soon</div>
    </>
  )
}

(Skill as PageWithLayoutType).layout = Main;

export default Skill;