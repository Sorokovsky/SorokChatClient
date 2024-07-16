import { FC, memo } from 'react';
import SettingItem from './setting-item/setting-item';
import { ISettingsList } from './settings-list.interface';

const SettingsList: FC<ISettingsList> = ({settings}): JSX.Element => {
  return (
    <>
    {
    settings.map(
      item => <SettingItem key={item.path} item={item} />
      )
    }
  </>
  );
};

export default memo(SettingsList);