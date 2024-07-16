import Link from 'next/link';
import { FC, memo } from 'react';
import { ISettingsList } from './settings-list.interface';

const SettingsList: FC<ISettingsList> = ({settings}) => {
  return (
    <>
    {settings.map(({Icon, path, title}) => {
        return (
            <Link key={path} href={path}>
                <Icon />
                <h3>{title}</h3>
            </Link>
        )
    })}</>
  );
};

export default memo(SettingsList);