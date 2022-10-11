const currentPage = document.querySelectorAll('a[href="' + window.location.pathname + '"]');

currentPage.forEach((page) => {
    const isLink = page.classList.contains('notion-page-link')
    const isParentSync = page.parentElement.classList.contains('notion-sync-block')

    if (isLink && isParentSync) {
        page.classList.add('active')
    }
})
