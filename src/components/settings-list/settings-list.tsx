import Link from 'next/link';
import { FC, memo } from 'react';
import SettingItem from './setting-item/setting-item';
import settingItem from './setting-item/setting-item';
import { ISettingsList } from './settings-list.interface';

const SettingsList: FC<ISettingsList> = ({settings}) => {
  return (
    <>{settings.map((item) => <SettingItem item={item}>}</>
  );
};

export default memo(SettingsList);