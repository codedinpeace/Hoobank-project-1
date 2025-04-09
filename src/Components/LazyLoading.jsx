import { useEffect } from "react";

function LazyLoadImages() {
  useEffect(() => {
    document.querySelectorAll("img").forEach(img => {
      img.setAttribute("loading", "lazy");
    });
  }, []);

  return null;
}

export default LazyLoadImages;