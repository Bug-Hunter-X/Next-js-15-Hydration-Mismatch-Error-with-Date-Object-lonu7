```javascript
// pages/about.js
import {getServerSideProps} from 'next';

export default function About({date}) {
  return (
    <div>
      <h1>About Page</h1>
      <p>The current date and time is: {date}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const date = new Date();
  return {
    props: {
      date: date.toString()
    },
  };
}
```
```javascript
//pages/index.js
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