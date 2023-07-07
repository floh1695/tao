import '../styles/reset.scss';
import '../styles/global.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel="canonical" href="tao.charlesbayley.dev" />
      </head>
      <body>
        <header></header>
        {children}
      </body>
    </html>
  );
};
