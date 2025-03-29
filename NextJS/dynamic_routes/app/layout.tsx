

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>The Layout Start Text</div>
          {children}
        <div>The Layout End Text</div>

      </body>
    </html>
  );
}
