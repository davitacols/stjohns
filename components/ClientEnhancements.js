"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ClientEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups = [];
    const body = document.body;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    body.classList.add("js-enhanced");
    body.classList.remove("page-is-ready");

    const syncHeaderState = () => {
      body.dataset.headerState = window.scrollY > 18 ? "scrolled" : "top";
    };

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", syncHeaderState));

    const revealElements = Array.from(document.querySelectorAll(".reveal"));

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      body.classList.add("page-is-ready");
    } else {
      revealElements.forEach((element, index) => {
        element.classList.remove("is-visible");
        element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 240)}ms`);
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.14,
          rootMargin: "0px 0px -8% 0px"
        }
      );

      revealElements.forEach((element) => observer.observe(element));
      cleanups.push(() => observer.disconnect());

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          body.classList.add("page-is-ready");
        });
      });
    }

    document.querySelectorAll("[data-mail-form]").forEach((form) => {
      const status = form.querySelector(".form-status");
      const recipient = form.dataset.recipient || "info@stjohnsfriernbarnet.org";
      const subjectPrefix = form.dataset.subjectPrefix || "Website enquiry";

      const handleSubmit = (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const data = new FormData(form);
        const lines = [];

        Array.from(form.elements).forEach((field) => {
          if (!field.name || !field.dataset || !field.dataset.label) return;
          const value = data.get(field.name);
          if (!value) return;
          const text = String(value).trim();
          if (!text) return;
          lines.push(`${field.dataset.label}: ${text}`);
        });

        const preferredName =
          data.get("name") || data.get("space_interest") || data.get("subject") || "Website enquiry";

        const subject = `${subjectPrefix}: ${preferredName}`;
        const bodyText = `Hello St John's,\n\n${lines.join("\n")}\n\nSent from the rebuilt website.`;
        const mailtoHref = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(bodyText)}`;

        window.location.href = mailtoHref;

        if (status) {
          status.textContent = `Your email app should open with this message pre-filled. If it doesn't, email ${recipient}.`;
        }
      };

      form.addEventListener("submit", handleSubmit);
      cleanups.push(() => form.removeEventListener("submit", handleSubmit));
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return null;
}
