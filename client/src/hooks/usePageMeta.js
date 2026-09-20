import { useEffect } from "react";

export default function usePageMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      const existing = document.querySelector('meta[name="description"]');
      if (existing) existing.setAttribute("content", description);
    }
  }, [title, description]);
}