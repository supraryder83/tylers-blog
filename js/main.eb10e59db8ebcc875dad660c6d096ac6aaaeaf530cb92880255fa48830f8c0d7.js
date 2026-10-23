/**
 * Tyler Ziegler // Prairie Locksmith & Rural Tech
 * High-Tech Interactive Client Script
 */

(function () {
  'use strict';

  // State
  let searchIndex = null;
  let selectedResultIndex = -1;

  // DOM Elements
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const searchModal = document.getElementById('search-modal');
  const searchTriggerBtn = document.getElementById('search-trigger-btn');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchQuickTags = document.getElementById('search-quick-tags');
  const telemetryClock = document.getElementById('telemetry-clock');
  const progressBar = document.getElementById('reading-progress-bar');
  const copyLinkBtn = document.getElementById('copy-link-btn');
  const copyLinkText = document.getElementById('copy-link-text');

  // =========================================================================
  // 1. Live Central Time Telemetry Clock
  // =========================================================================
  function updateTelemetryClock() {
    if (!telemetryClock) return;
    try {
      const options = {
        timeZone: 'America/Winnipeg',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      const formatter = new Intl.DateTimeFormat('en-CA', options);
      telemetryClock.textContent = 'CT ' + formatter.format(new Date());
    } catch (e) {
      const now = new Date();
      telemetryClock.textContent = 'CT ' + now.toTimeString().split(' ')[0];
    }
  }
  updateTelemetryClock();
  setInterval(updateTelemetryClock, 1000);

  // =========================================================================
  // 2. Dark / Light Theme Switcher
  // =========================================================================
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      localStorage.setItem('tz-theme', next);
    });
  }

  // =========================================================================
  // 3. Mobile Navigation Drawer
  // =========================================================================
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', String(!expanded));
      mobileMenuBtn.classList.toggle('active');
      mobileDrawer.classList.toggle('active');
    });
  }

  // =========================================================================
  // 4. Instant Search System (JSON Index)
  // =========================================================================
  async function loadSearchIndex() {
    if (searchIndex) return searchIndex;
    try {
      const response = await fetch('/index.json');
      if (!response.ok) throw new Error('Search index failed to load');
      searchIndex = await response.json();
      return searchIndex;
    } catch (err) {
      console.warn('Could not fetch search index:', err);
      return [];
    }
  }

  function openSearchModal(initialQuery = '') {
    if (!searchModal) return;
    searchModal.classList.add('active');
    searchModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    loadSearchIndex();
    if (searchInput) {
      searchInput.value = initialQuery;
      setTimeout(() => searchInput.focus(), 50);
      if (initialQuery) {
        performSearch(initialQuery);
      }
    }
  }
  window.openSearchModal = openSearchModal;

  function closeSearchModal() {
    if (!searchModal) return;
    searchModal.classList.remove('active');
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    selectedResultIndex = -1;
  }

  if (searchTriggerBtn) {
    searchTriggerBtn.addEventListener('click', () => openSearchModal());
  }

  if (searchCloseBtn) {
    searchCloseBtn.addEventListener('click', closeSearchModal);
  }

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        closeSearchModal();
      }
    });
  }

  // Keyboard Shortcuts (Ctrl+K, Cmd+K, /, Esc)
  document.addEventListener('keydown', (e) => {
    // Open search with Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchModal && searchModal.classList.contains('active')) {
        closeSearchModal();
      } else {
        openSearchModal();
      }
      return;
    }

    // Open search with '/' when not focusing another input
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearchModal();
      return;
    }

    // Close on Escape
    if (e.key === 'Escape' && searchModal && searchModal.classList.contains('active')) {
      closeSearchModal();
      return;
    }

    // Navigate search results with Arrow keys
    if (searchModal && searchModal.classList.contains('active')) {
      const items = searchResults.querySelectorAll('.search-result-item');
      if (items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedResultIndex = (selectedResultIndex + 1) % items.length;
        updateResultSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedResultIndex = (selectedResultIndex - 1 + items.length) % items.length;
        updateResultSelection(items);
      } else if (e.key === 'Enter' && selectedResultIndex >= 0) {
        e.preventDefault();
        items[selectedResultIndex].click();
      }
    }
  });

  function updateResultSelection(items) {
    items.forEach((item, idx) => {
      if (idx === selectedResultIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  function performSearch(query) {
    if (!searchResults) return;
    const cleanQuery = query.trim().toLowerCase();
    selectedResultIndex = -1;

    if (!cleanQuery) {
      searchResults.innerHTML = `
        <div class="search-empty-state">
          <div class="empty-icon">🔍</div>
          <div class="empty-title">Type a keyword to scan index</div>
          <div class="empty-desc">Searches pin-tumbler tutorials, rural dispatch logs, hardware specs, and craft logs.</div>
        </div>
      `;
      return;
    }

    if (!searchIndex || searchIndex.length === 0) {
      searchResults.innerHTML = `<div class="search-empty-state"><div class="empty-title">Loading telemetry index...</div></div>`;
      return;
    }

    const matches = searchIndex.filter(item => {
      const titleMatch = item.title && item.title.toLowerCase().includes(cleanQuery);
      const summaryMatch = item.summary && item.summary.toLowerCase().includes(cleanQuery);
      const categoryMatch = item.category && item.category.toLowerCase().includes(cleanQuery);
      const locationMatch = item.location && item.location.toLowerCase().includes(cleanQuery);
      const tagMatch = item.tags && item.tags.some(t => t.toLowerCase().includes(cleanQuery));
      return titleMatch || summaryMatch || categoryMatch || locationMatch || tagMatch;
    });

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="search-empty-state">
          <div class="empty-icon">⚠️</div>
          <div class="empty-title">No matching dispatches found</div>
          <div class="empty-desc">Try terms like 'Medeco', 'Abloy', 'Virden', 'LoRa', 'leather', or 'Brandon'.</div>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = matches.map((item, idx) => `
      <a href="${item.permalink}" class="search-result-item ${idx === 0 ? 'selected' : ''}">
        <div class="result-header">
          <span class="result-title">${escapeHtml(item.title)}</span>
          <span class="result-category">${escapeHtml(item.category)}</span>
        </div>
        <p class="result-snippet">${escapeHtml(item.summary)}</p>
      </a>
    `).join('');
    selectedResultIndex = 0;
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }

  if (searchQuickTags) {
    searchQuickTags.addEventListener('click', (e) => {
      const chip = e.target.closest('.search-tag-chip');
      if (!chip) return;
      const filter = chip.getAttribute('data-filter') || '';
      if (searchInput) {
        searchInput.value = filter;
        performSearch(filter);
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // =========================================================================
  // 5. Client-Side Category Filtering (Homepage & Post Grid)
  // =========================================================================
  const homeFilterGroup = document.getElementById('home-filter-group');
  const homePostsGrid = document.getElementById('home-posts-grid');

  if (homeFilterGroup && homePostsGrid) {
    homeFilterGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      homeFilterGroup.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');
      const cards = homePostsGrid.querySelectorAll('.post-card');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  }

  // =========================================================================
  // 6. Reading Progress Bar (Single Article Pages)
  // =========================================================================
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
      }
    }, { passive: true });
  }

  // =========================================================================
  // 7. Copy Article Link Button
  // =========================================================================
  if (copyLinkBtn && copyLinkText) {
    copyLinkBtn.addEventListener('click', async () => {
      const url = copyLinkBtn.getAttribute('data-url') || window.location.href;
      try {
        await navigator.clipboard.writeText(url);
        const originalText = copyLinkText.textContent;
        copyLinkText.textContent = 'Link Copied!';
        copyLinkBtn.style.borderColor = 'var(--cyan)';
        setTimeout(() => {
          copyLinkText.textContent = originalText;
          copyLinkBtn.style.borderColor = '';
        }, 2000);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    });
  }

  // =========================================================================
  // 8. Code Block Copy Buttons
  // =========================================================================
  document.querySelectorAll('.article-prose pre').forEach((pre) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-code-btn';
    copyBtn.textContent = 'Copy';
    copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
    wrapper.appendChild(copyBtn);

    copyBtn.addEventListener('click', async () => {
      const code = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2000);
      } catch (err) {
        copyBtn.textContent = 'Failed';
      }
    });
  });

  // =========================================================================
  // 9. Table of Contents ScrollSpy
  // =========================================================================
  const tocLinks = document.querySelectorAll('.toc-body a');
  const headings = Array.from(document.querySelectorAll('.article-prose h2, .article-prose h3'));

  if (tocLinks.length > 0 && headings.length > 0) {
    window.addEventListener('scroll', () => {
      const fromTop = window.scrollY + 120;
      let currentHeading = null;

      for (const h of headings) {
        if (h.offsetTop <= fromTop) {
          currentHeading = h;
        } else {
          break;
        }
      }

      if (currentHeading) {
        const id = currentHeading.id;
        tocLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    }, { passive: true });
  }

})();
