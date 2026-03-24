"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ClientEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups = [];

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
        const body = `Hello St John's,\n\n${lines.join("\n")}\n\nSent from the rebuilt website.`;
        const mailtoHref = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;

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
