document.addEventListener("DOMContentLoaded", () => {
  const toast = document.getElementById("toast");
  let toastTimer = null;

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text || "Copied to clipboard!";
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);
  }

  // Copy Buttons
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        btn.classList.add("copied");
        const span = btn.querySelector("span");
        if (span) span.textContent = "Copied!";
        showToast(`Copied: ${textToCopy}`);

        setTimeout(() => {
          btn.classList.remove("copied");
          if (span) span.textContent = "Copy";
        }, 2000);
      } catch {
        showToast("Press Ctrl+C to copy");
      }
    });
  });
});
