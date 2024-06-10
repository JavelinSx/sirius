'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/src/lib/hooks';
import { setUser } from '@/src/lib/features/users/usersSlice';
import { selectCurrentProfile } from '@/src/lib/features/appSlice';
import { listUsers } from '@/src/app/api/listUsers';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const currentProfile = useAppSelector(selectCurrentProfile);

  useEffect(() => {
    if (currentProfile) {
      dispatch(setUser(listUsers));
    }
  }, [currentProfile, dispatch]);

  return <></>;
};

export default Dashboard;
