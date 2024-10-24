import './globals.css';

export const metadata = {
  title: 'Angie Kim',
  description: 'Personal website of Angie Kim',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
