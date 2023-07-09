import '@styles/global.scss';
import '@styles/reset.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
};
