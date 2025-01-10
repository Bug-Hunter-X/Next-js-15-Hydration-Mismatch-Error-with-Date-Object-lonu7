```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a hydration mismatch error
  // Because the client-side rendering result differs from the server-side rendering result
  const date = new Date();
  return (
    <div>
      <h1>About Page</h1>
      <p>The current date and time is: {date.toString()}</p>
    </div>
  );
}
```