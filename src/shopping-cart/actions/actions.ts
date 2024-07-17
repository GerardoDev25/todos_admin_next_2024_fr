// 'use client'

import { getCookie, hasCookie, setCookie } from 'cookies-next';

export const getCookiesCart = (): { [id: string]: number } => {
  if (!hasCookie('cart')) {
    return {};
  }

  const cookieCart = JSON.parse((getCookie('cart') as string) ?? '{}');
  return cookieCart;
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCookiesCart();

  if (cookieCart[id]) {
    cookieCart[id]++;
  } else {
    cookieCart[id] = 1;
  }

  setCookie('cart', JSON.stringify(cookieCart));
};

export const removeProductToCart = (id: string) => {
  const cookieCart = getCookiesCart();

  delete cookieCart[id];

  setCookie('cart', JSON.stringify(cookieCart));
};

export const removeSingleItemFromCart = (id: string) => {
  const cookieCart = getCookiesCart();

  if (!cookieCart[id]) return;

  const itemsCart = cookieCart[id] - 1;

  if (itemsCart <= 0) {
    delete cookieCart[id];
  } else {
    cookieCart[id] = itemsCart;
  }

  setCookie('cart', JSON.stringify(cookieCart));
};
