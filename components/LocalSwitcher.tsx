"use client";

import { useRouter, usePathname } from "next/navigation";

const supportedLocales = ["ar", "en"];

function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1]; // Extract the current locale from the path
  const otherLocales = supportedLocales.filter(
    (locale) => locale !== currentLocale
  ); // Exclude the current locale

  const switchLocale = (locale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`); // Replace the current locale in the path
    router.push(newPathname); // Navigate to the new path
  };

  return (
    <div>
      <p>Current Locale: {currentLocale}</p>
      <ul>
        {otherLocales.map((locale) => (
          <li key={locale}>
            <button
              onClick={() => switchLocale(locale)}
              style={{
                padding: "8px 16px",
                margin: "4px",
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Switch to {locale.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocaleSwitcher;
