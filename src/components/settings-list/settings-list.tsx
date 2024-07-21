import { FC, memo, useEffect } from 'react';
import SettingItem from './setting-item/setting-item';
import { ISettingsList } from './settings-list.interface';
import { useAppSelector } from '@/store/store';

const SettingsList: FC<ISettingsList> = ({settings}): JSX.Element => {
  const { user } = useAppSelector(state => state.user);
  let isAuth = user !== null;
  useEffect(() => {
    isAuth = user !== null;
    console.log(user);
    
  }, 
  [user]);
  return (
    <>
    {
    [...settings
    .filter(item => item.isPublic === isAuth)]
    .map(
      item => <SettingItem key={item.path} item={item} />
      )
    }
  </>
  );
};

export default memo(SettingsList);