import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  
  // اینجا می‌توانید منطق تعامل با فریم را پیاده‌سازی کنید
  // برای مثال: بررسی دکمه‌ای که کاربر کلیک کرده، ذخیره اطلاعات و غیره
  return new NextResponse(
    JSON.stringify({
      image: "https://wrpcd.net/cdn-cgi/imagedelivery/BXluQx4ige9GuW0Ia56BHw/e230da4c-d64f-4612-4b8a-500bfd179800/rectcontain3",
      buttons: [
        { label: 'Button 1', action: 'post' },
        { label: 'Button 2', action: 'post' }
      ]
    })
  );
} 