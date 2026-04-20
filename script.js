/* ==========================================================================
   THE BLUE SPACE — Reviews page interactivity
   Minimal, dependency-free filtering + search.
   ========================================================================== */

(function () {
  const grid = document.getElementById('review-grid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.review-card'));
  const emptyState = document.getElementById('empty-state');
  const searchInput = document.getElementById('search-input');
  const chips = document.querySelectorAll('.chip');
  const loadMoreBtn = document.getElementById('load-more');

  // State
  const state = {
    category: 'all',
    rating: 'all',
    query: ''
  };

  // --- Chip behaviour: single-select within each filter group ---
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const type = chip.dataset.filterType;    // 'category' or 'rating'
      const value = chip.dataset.filter;

      // Clear active state in this group, then set this one
      document.querySelectorAll(`.chip[data-filter-type="${type}"]`).forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');

      state[type] = value;
      applyFilters();
    });
  });

  // --- Search ---
  let searchTimer;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        state.query = e.target.value.trim().toLowerCase();
        applyFilters();
      }, 120);
    });
  }

  // --- Filtering logic ---
  function applyFilters() {
    let visibleCount = 0;

    cards.forEach(card => {
      const cat = card.dataset.category;
      const rating = card.dataset.rating;
      const text = card.textContent.toLowerCase();

      const matchesCategory = state.category === 'all' || cat === state.category;
      const matchesRating = state.rating === 'all' || rating === state.rating;
      const matchesQuery = !state.query || text.includes(state.query);

      const isVisible = matchesCategory && matchesRating && matchesQuery;
      card.hidden = !isVisible;
      if (isVisible) visibleCount++;
    });

    if (emptyState) emptyState.hidden = visibleCount !== 0;
    if (loadMoreBtn) loadMoreBtn.hidden = visibleCount === 0;
  }

  // --- Load more (demo behaviour) ---
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      loadMoreBtn.textContent = 'All reviews loaded';
      loadMoreBtn.disabled = true;
      loadMoreBtn.style.opacity = '0.6';
      loadMoreBtn.style.cursor = 'default';
    });
  }

  // --- Video placeholder clicks ---
  document.querySelectorAll('.video-play').forEach(btn => {
    btn.addEventListener('click', () => {
      // In production this would open a modal / embed.
      // For the static demo we just gently flash the button.
      btn.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(0.97)' }, { transform: 'scale(1)' }],
        { duration: 260, easing: 'ease-out' }
      );
    });
  });
})();
