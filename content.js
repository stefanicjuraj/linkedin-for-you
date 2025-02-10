window.addEventListener("load", function () {
  function processPosts() {
    const elements = document.querySelectorAll(
      'span[aria-hidden="true"], .update-components-header__text-view'
    );

    elements.forEach((element) => {
      if (element.textContent.includes("Promoted")) {
        const post = element.closest(".feed-shared-update-v2");
        if (post) {
          post.remove();
        }
      } else if (element.textContent.includes("Suggested")) {
        const post = element.closest(".feed-shared-update-v2");
        if (post) {
          post.remove();
        }
      }
    });
  }

  processPosts();

  const observer = new MutationObserver(processPosts);
  observer.observe(document.body, { childList: true, subtree: true });
});
