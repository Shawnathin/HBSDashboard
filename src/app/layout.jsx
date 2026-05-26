import "./globals.css";

export const metadata = {
  title: "Home Billiards Daily App",
  description: "Daily operations app for Home Billiards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
