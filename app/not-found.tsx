// import Link from "next/link";

// const NotFound = () => {
//     return (
//         <div>
//             <h2>404 - Page Not Found</h2>
//             <p>Sorry, the page you&#39;re looking for doesn&#39;t exist.</p>
//             <Link href="/">Go back home</Link>
//         </div>
//     );
// };
 
// export default NotFound;

"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const NotFound = () => { 
    const router = useRouter();

    useEffect(() => {
      const timer = setTimeout(() => router.push("/"), 3000);
    
      return () => clearTimeout(timer);
    }, [router])
    
    return (
         <div>
      <h1>404 - Сторінку не знайдено</h1>
      <p>Вас буде перенаправлено на головну через кілька секунд…</p>
    </div>
    );
};

export default NotFound;