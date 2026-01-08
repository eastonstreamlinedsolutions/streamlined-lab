import "./globals.css";

export const metadata = {
  title: "Streamlined Lab // Sales Tool",
  description: "Visual Optimization Engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* This allows us to use your brand green dynamically */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    streamlined: '#16c800',
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
