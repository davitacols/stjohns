import { League_Spartan } from "next/font/google";
import ClientEnhancements from "../components/ClientEnhancements";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import "../styles.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://stjohns.onlineuncovered.com"),
  title: "St John's Church | Friern Barnet",
  description: "A welcoming Church of England parish at the heart of Friern Barnet.",
  icons: {
    icon: "https://media.base44.com/files/public/69bd348b43a353f06ac0f83a/1dd0bebae_st-johns-church-logo.avif"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.variable} site-body league-spartan-theme`}>
        <div className="site-shell">
          <div className="site-orb site-orb-one" aria-hidden="true" />
          <div className="site-orb site-orb-two" aria-hidden="true" />
          <div className="site-orb site-orb-three" aria-hidden="true" />
          <SiteHeader />
          <main className="site-main">{children}</main>
          <SiteFooter />
          <ClientEnhancements />
        </div>
      </body>
    </html>
  );
}
