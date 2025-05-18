import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  
  // اینجا می‌توانید منطق تعامل با فریم را پیاده‌سازی کنید
  // برای مثال: بررسی دکمه‌ای که کاربر کلیک کرده، ذخیره اطلاعات و غیره
  return new NextResponse(
    JSON.stringify({
      image: "https://your-image-url.com/next-image.jpg",
      buttons: [
        { label: 'Button 1', action: 'post' },
        { label: 'Button 2', action: 'post' }
      ]
    })
  );
} 