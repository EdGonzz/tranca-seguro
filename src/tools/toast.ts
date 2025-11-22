type ToastOptions = {
  /** Message to display */
  message: string;
  /** Duration in ms (default 3000) */
  duration?: number;
  /** Type for styling: 'info' | 'success' */
  type?: "info" | "success";
};

/**
 * Shows a toast notification.
 * The function creates a container (if missing), builds a toast element,
 * applies appropriate classes, and removes it after the specified duration.
 */
export function toast({
  message,
  duration = 3000,
  type = "info",
}: ToastOptions): void {
  // Ensure a container exists
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toastEl = document.createElement("div");
  toastEl.className = `toast toast-${type}`;
  toastEl.textContent = message;
  container.appendChild(toastEl);

  // Trigger CSS animation (fade‑in)
  requestAnimationFrame(() => {
    toastEl.classList.add("show");
  });

  // Auto‑remove after duration
  setTimeout(() => {
    toastEl.classList.remove("show");
    // Wait for transition end before removing from DOM
    toastEl.addEventListener("transitionend", () => {
      toastEl.remove();
      // If container is empty, remove it as well
      if (container && container.childElementCount === 0) {
        container.remove();
      }
    });
  }, duration);
}
