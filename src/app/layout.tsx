import '@styles/reset.scss';
import '@styles/global.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/* <head>
        <title>The Tao of Programming</title>
      </head> */}
      <body>
        {children}
      </body>
    </html>
  );
};
