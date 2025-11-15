
import { Providers } from "./providers";

export const metadata = {
  title: "My App",
  description: "Next.js + Chakra UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
