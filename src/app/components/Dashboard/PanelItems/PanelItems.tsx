'use client';
import { useEffect, useState, FC } from 'react';
import { useAppDispatch } from '@/src/lib/hooks';
import { setStateProfileList } from '@/src/lib/features/appSlice';
import { Badge } from '../../ui/Badge/Badge';
import styles from './styles.module.scss';
import Image from 'next/image';
import emptyAvatar from '@/public/avatar/empty.svg';
import chatIcon from '@/public/icon/chat-icon.svg';
import { ButtonProfileList } from '../../ui/ButtonProfileList/ButtonProfileList';
interface PanelItemsProps {
  imgAvatar: string | undefined;
}
export const PanelItems: FC<PanelItemsProps> = ({ imgAvatar }) => {
  const [avatarSrc, setAvatarSrc] = useState(emptyAvatar);
  const dispatch = useAppDispatch();
  const handlerOpenProfileList = () => {
    dispatch(setStateProfileList());
  };
  useEffect(() => {
    setAvatarSrc(imgAvatar ? imgAvatar : emptyAvatar);
  }, [imgAvatar]);
  return (
    <div className={styles.panelItem}>
      <div className={styles.chat}>
        <Image quality={100} src={chatIcon} alt='icon' width={24}></Image>
        <Badge count={2}></Badge>
      </div>
      <div className={styles.panelProfile}>
        <Image quality={100} src={avatarSrc} alt='icon' width={42}></Image>
        <ButtonProfileList onClick={handlerOpenProfileList}></ButtonProfileList>
      </div>
    </div>
  );
};
