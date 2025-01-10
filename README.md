# Next.js 15 Hydration Mismatch Error

This repository demonstrates a common hydration mismatch error in Next.js 15 applications.  The error occurs because of a difference between client-side and server-side rendering of a date object.  The server renders a date, and the client renders a different date (due to time differences), causing a hydration mismatch.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.
5. Open your browser's developer tools and examine the console.  You should see a hydration mismatch error.

## Solution

The solution involves ensuring consistent rendering between client and server.  This can often be accomplished using techniques like using a static date or leveraging `getStaticProps` or `getServerSideProps` to generate the date server-side.  This example shows how to solve this problem using the `getServerSideProps` method.

## License

MIT