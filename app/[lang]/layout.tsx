import type { Metadata } from "next";
import localFont from "next/font/local";
import ".././globals.css";
import Navbar from "@/components/Navbar";

const neue = localFont({
  src: [
    { path: ".././fonts/NeueFrutigerWorld-Regular.woff", weight: "400" },
    { path: ".././fonts/NeueFrutigerWorld-Medium.woff", weight: "500" },
    { path: ".././fonts/NeueFrutigerWorld-Bold.woff", weight: "700" },
    { path: ".././fonts/NeueFrutigerWorld-Black.woff", weight: "800" },
  ],
});

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params; // Resolve the promise

  return {
    title: {
      template:
        lang === "ar"
          ? "%s | مكتب الأستاذ أحمد اللبودي للمحاسبة والمراجعة والإستشارات المالية والضريبية"
          : "Mr. Ahmed Ellaboudy Office for Accounting, Auditing, Financial and Tax Consultation | %s",
      default:
        lang === "ar"
          ? "مكتب الأستاذ أحمد اللبودي للمحاسبة والمراجعة والإستشارات المالية والضريبية"
          : "Mr. Ahmed Ellaboudy Office for Accounting, Auditing, Financial and Tax Consultation",
    },
    description:
      lang === "ar"
        ? `مكتب الأستاذ أحمد اللبودي للمحاسبة والمراجعة والاستشارات المالية والضريبية يقدم خدمات إدارة الحسابات، التحليل المالي، المراجعة، النصائح الضريبية، والاستشارات المالية للمشاريع وتحليل السوق.`
        : "Ahmed El-Laboudy Office for Accounting, Auditing, and Financial & Tax Consultations offers account management, financial analysis, auditing, tax advice, and financial consulting for projects and market analysis.",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params; // Resolve the promise

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body className={`${neue.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
