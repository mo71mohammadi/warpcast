import { Metadata } from 'next';

// تنظیمات متادیتای فریم
// این بخش شامل اطلاعات اصلی فریم مانند عنوان، توضیحات و دکمه‌ها است
export const metadata: Metadata = {
  title: 'Wrapcaster Frame',
  description: 'A simple frame for Wrapcaster',
  openGraph: {
    title: 'Wrapcaster Frame',
    description: 'A simple frame for Wrapcaster',
    images: ['https://your-image-url.com/image.jpg'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://your-image-url.com/image.jpg',
    'fc:frame:button:1': 'Button 1',
    'fc:frame:button:2': 'Button 2',
    'fc:frame:post_url': 'https://your-domain.com/api/frame'
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