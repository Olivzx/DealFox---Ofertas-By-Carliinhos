import { createClient } from './supabase/server';
import type { Product } from './types';

const demo: Product[] = [
  { id: 'demo-1', title: 'Smartphone Galaxy A55 5G 128GB', slug: 'smartphone-galaxy-a55-5g', description: 'Tela Super AMOLED, câmera de alta resolução e 5G.', image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900', store: 'Loja Parceira', category: 'Celulares', price: 1799.9, old_price: 2299.9, affiliate_url: '#', featured: true, active: true, created_at: '' },
  { id: 'demo-2', title: 'Fone Bluetooth com cancelamento de ruído', slug: 'fone-bluetooth-cancelamento-ruido', description: 'Som imersivo e bateria para o dia inteiro.', image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900', store: 'Loja Parceira', category: 'Eletrônicos', price: 129.9, old_price: 199.9, affiliate_url: '#', featured: true, active: true, created_at: '' },
  { id: 'demo-3', title: 'Tênis casual premium masculino', slug: 'tenis-casual-premium', description: 'Conforto para o cotidiano com visual moderno.', image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900', store: 'Loja Parceira', category: 'Moda', price: 159.9, old_price: 249.9, affiliate_url: '#', featured: false, active: true, created_at: '' },
  { id: 'demo-4', title: 'Air Fryer digital 5L', slug: 'air-fryer-digital-5l', description: 'Cesto amplo, painel digital e preparo rápido.', image_url: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=900', store: 'Loja Parceira', category: 'Casa', price: 299.9, old_price: 399.9, affiliate_url: '#', featured: true, active: true, created_at: '' },
];

function normalizeProduct(product: any): Product { return { ...product, price: Number(product.price), old_price: product.old_price == null ? null : Number(product.old_price) } as Product; }
function filterDemo(options?: { q?: string; category?: string }) {
  const q = options?.q?.trim().toLowerCase(); const category = options?.category?.trim().toLowerCase();
  return demo.filter((product) => {
    const matchesQ = !q || `${product.title} ${product.description ?? ''} ${product.store} ${product.category}`.toLowerCase().includes(q);
    const matchesCategory = !category || product.category.toLowerCase() === category;
    return matchesQ && matchesCategory;
  });
}
export async function getProducts(options?: { q?: string; category?: string }) {
  try {
    const supabase = await createClient();
    let query = supabase.from('products').select('*').eq('active', true).order('featured', { ascending: false }).order('created_at', { ascending: false });
    if (options?.category) query = query.eq('category', options.category);
    if (options?.q?.trim()) { const q = options.q.trim().replace(/,/g, ' '); query = query.or(`title.ilike.%${q}%,description.ilike.%${q}%,store.ilike.%${q}%,category.ilike.%${q}%`); }
    const { data, error } = await query;
    if (!error && data) return data.map(normalizeProduct);
  } catch {}
  return filterDemo(options);
}
export async function getProduct(slug: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from('products').select('*').eq('slug', slug).eq('active', true).maybeSingle();
    if (!error && data) return normalizeProduct(data);
  } catch {}
  return demo.find((product) => product.slug === slug) ?? null;
}