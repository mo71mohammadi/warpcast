import { Metadata } from 'next';

// تنظیمات متادیتای فریم
// این بخش شامل اطلاعات اصلی فریم مانند عنوان، توضیحات و دکمه‌ها است
export const metadata: Metadata = {
  title: 'Wrapcaster Frame',
  description: 'A simple frame for Wrapcaster',
  openGraph: {
    title: 'Wrapcaster Frame',
    description: 'A simple frame for Wrapcaster',
    images: ['https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=1200&h=630&fit=crop&q=80'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=1200&h=630&fit=crop&q=80',
    'fc:frame:button:1': 'Button 1',
    'fc:frame:button:2': 'Button 2',
    'fc:frame:post_url': 'https://warpcast-sigma.vercel.app/api/frame'
  }
};

// کامپوننت اصلی لایوت
// این کامپوننت ساختار اصلی HTML را تعریف می‌کند
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 