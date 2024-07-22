'use client'
import 'dayjs/locale/uk';
import dayjs from 'dayjs';
import { useState } from 'react';

export const useDate = (time: Date) => {
    return(dayjs(time).locale('uk').format('YYYY-MM-DD HH:mm:ss'));
};