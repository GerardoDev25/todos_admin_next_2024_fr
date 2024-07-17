import { products } from '@/products/data';
import type { Product } from '@/products/data';
import { ItemCard } from '@/shopping-cart/components';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Cart page',
};

interface ProductsInCartProps {
  product: Product;
  quantity: number;
}

const getProductsInCart = (cart: {
  [id: string]: number;
}): ProductsInCartProps[] => {
  const productsInCart: ProductsInCartProps[] = [];
  for (const id of Object.keys(cart)) {
    const product = products.find((p) => p.id === id);
    if (product) {
      productsInCart.push({
        product,
        quantity: cart[id],
      });
    }
  }

  return productsInCart;
};

export default function CartPage() {
  const cookiesStore = cookies();
  const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as {
    [id: string]: number;
  };
  const productsInCart = getProductsInCart(cart);

  return (
    <div>
      <h1 className='text-5xl'>Cart Products</h1>
      <br className='mb-2' />
      <div className='flex flex-col sm:flex-row gap-2 w-full'>
        <div className='flex flex-col gap-2 w-full sm:w-8/12'>
          {productsInCart.map(({ product, quantity }) => (
            <ItemCard key={product.id} product={product} quantity={quantity} />
          ))}
        </div>
      </div>
    </div>
  );
}
