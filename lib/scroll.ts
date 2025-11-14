export const sectionMap: Record<string, string> = {
  "/numbers": "numbers",
  "/deals": "deals",
  "/about": "about",
  "/tariffs": "tariffs",
  "/faq": "faq",
};

export function scrollToSection(sectionId: string | null): boolean {
  if (!sectionId) return false;

  const element = document.getElementById(sectionId);
  if (element) {
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 64;
    const extraOffset = 20;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - extraOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });
    return true;
  }
  return false;
}

