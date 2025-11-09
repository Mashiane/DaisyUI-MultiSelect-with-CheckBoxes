// Daisy Multi-Select Component
// Auto-inject styles
if (!document.getElementById('daisy-multiselect-styles')) {
  const style = document.createElement('style');
  style.id = 'daisy-multiselect-styles';
  style.textContent = `
    /* CRITICAL: Override DaisyUI menu-active globally for entire component */
    daisy-multiselect .menu-active,
    daisy-multiselect li.menu-active,
    daisy-multiselect .menu li:active,
    daisy-multiselect .menu li:focus,
    daisy-multiselect .menu-vertical li:active,
    daisy-multiselect .menu-vertical li:focus {
      background-color: transparent !important;
      background: transparent !important;
      color: inherit !important;
    }
    
    /* Additional custom styles for the multi-select */
    .multiselect-dropdown {
      max-height: 300px;
      overflow-y: auto;
    }
    
    /* Prevent text flicker during updates */
    .multiselect-display {
      user-select: none;
      -webkit-user-select: none;
      backface-visibility: hidden;
      -webkit-font-smoothing: subpixel-antialiased;
      transform: translateZ(0); /* Force GPU acceleration */
      contain: layout style; /* Isolate from external layout changes */
    }
    
    /* Disabled state border */
    .multiselect-trigger.input-disabled {
      border-color: rgba(0, 0, 0, 0.1);
      border-width: 1px;
      border-style: solid;
    }
    
    .multiselect-option {
      cursor: pointer;
      transition: background-color 0.15s ease-out;
    }
    
    /* Prevent text content from transitioning/fading during selection */
    .multiselect-option * {
      transition: none !important;
    }
    
    /* Re-enable transition only for checkbox */
    .multiselect-option input[type="checkbox"] {
      transition: none !important;
    }
    
    /* Completely override ALL DaisyUI menu active/focus states */
    .multiselect-option:focus,
    .multiselect-option:focus-visible,
    .multiselect-option:focus-within,
    .multiselect-option:active,
    .multiselect-option.active,
    .multiselect-option.menu-active,
    .multiselect-option[aria-pressed="true"],
    li.multiselect-option:focus,
    li.multiselect-option:focus-visible,
    li.multiselect-option:focus-within,
    li.multiselect-option:active,
    .menu li.multiselect-option:focus,
    .menu li.multiselect-option:active,
    .menu-vertical li.multiselect-option:focus,
    .menu-vertical li.multiselect-option:active {
      background-color: transparent !important;
      background: transparent !important;
      color: inherit !important;
      outline: none !important;
      box-shadow: none !important;
    }
    
    /* Override DaisyUI menu internal opacity/color changes on child elements */
    /* Exclude checkbox to preserve its checked color */
    .multiselect-option:focus *:not(input[type="checkbox"]),
    .multiselect-option:focus-visible *:not(input[type="checkbox"]),
    .multiselect-option:active *:not(input[type="checkbox"]),
    .multiselect-option.active *:not(input[type="checkbox"]),
    .multiselect-option.menu-active *:not(input[type="checkbox"]),
    li.multiselect-option:focus *:not(input[type="checkbox"]),
    li.multiselect-option:active *:not(input[type="checkbox"]),
    .menu li.multiselect-option:focus *:not(input[type="checkbox"]),
    .menu li.multiselect-option:active *:not(input[type="checkbox"]),
    .menu-vertical li.multiselect-option:focus *:not(input[type="checkbox"]),
    .menu-vertical li.multiselect-option:active *:not(input[type="checkbox"]) {
      opacity: 1 !important;
      color: inherit !important;
      background: transparent !important;
    }
    
    .multiselect-option:hover:not(.disabled) {
      background-color: var(--color-base-200);
    }
    
    .multiselect-option.selected.highlight {
      background-color: var(--color-primary);
      color: var(--color-primary-content);
    }
    
    /* Color variants for selected items with highlight */
    .multiselect-option.selected.highlight.color-secondary {
      background-color: var(--color-secondary);
      color: var(--color-secondary-content);
    }
    
    .multiselect-option.selected.highlight.color-accent {
      background-color: var(--color-accent);
      color: var(--color-accent-content);
    }
    
    .multiselect-option.selected.highlight.color-success {
      background-color: var(--color-success);
      color: var(--color-success-content);
    }
    
    .multiselect-option.selected.highlight.color-warning {
      background-color: var(--color-warning);
      color: var(--color-warning-content);
    }
    
    .multiselect-option.selected.highlight.color-error {
      background-color: var(--color-error);
      color: var(--color-error-content);
    }
    
    .multiselect-option.selected.highlight.color-info {
      background-color: var(--color-info);
      color: var(--color-info-content);
    }
    
    .multiselect-option.selected.highlight.color-neutral {
      background-color: var(--color-neutral);
      color: var(--color-neutral-content);
    }
    
    /* Keyboard navigation focus state */
    .multiselect-option.focused > div {
      outline: 2px solid oklch(var(--p));
      outline-offset: -2px;
    }
    
    /* Clear button inside select */
    .clear-btn-inner {
      background: transparent;
      border: none;
      padding: 0.25rem;
      cursor: pointer;
      border-radius: 0.25rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .clear-btn-inner:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    
    /* Ensure button maintains flex layout */
    .multiselect-trigger {
      display: flex !important;
    }
    
    /* Show clear button on hover or when there are selections */
    .multiselect-container:hover .clear-btn-inner.has-selections,
    .clear-btn-inner.has-selections {
      opacity: 0.6 !important;
    }
    
    .multiselect-container:hover .clear-btn-inner.has-selections:hover {
      opacity: 1 !important;
    }

    /* Performance optimizations */
    .multiselect-container {
      contain: layout style;
    }

    .multiselect-dropdown {
      contain: layout style;
      will-change: transform;
    }

    .chips-container {
      contain: layout style;
    }
    
    /* Hardware acceleration for smooth interactions */
    .multiselect-option,
    .badge,
    .clear-btn-inner {
      transform: translateZ(0);
      backface-visibility: hidden;
      -webkit-font-smoothing: subpixel-antialiased;
    }
    
    /* Optimize checkbox transitions */
    .multiselect-option input[type="checkbox"] {
      transition: none; /* Remove transition for instant feedback */
    }
    
    /* Smooth chip animations */
    .badge {
      transition: opacity 0.15s ease-out;
    }
`;
  document.head.appendChild(style);
}

/**
 * @typedef {Object} SelectOption
 * @property {string} value - The option value
 * @property {string} text - The display text
 * @property {boolean} selected - Whether the option is selected
 * @property {boolean} disabled - Whether the option is disabled
 * @property {HTMLElement} optionEl - The option DOM element
 * @property {HTMLOptionElement} nativeOption - The native select option element
 */

/**
 * @typedef {Object} SelectChangeEventDetail
 * @property {string[]} values - Array of selected values
 * @property {string} valueString - Semicolon-delimited string of values
 */

/**
 * DaisyUI MultiSelect Custom Element
 * A feature-rich multi-select dropdown component with DaisyUI styling
 * 
 * @class DaisyMultiSelect
 * @extends HTMLElement
 * 
 * @fires change - Dispatched when selection changes (bubbles to native select)
 * 
 * @example
 * <daisy-multiselect placeholder="Select options..." searchable>
 *   <option value="1">Option 1</option>
 *   <option value="2" selected>Option 2</option>
 * </daisy-multiselect>
 */
class DaisyMultiSelect extends HTMLElement {
      // Class constants
      static VALID_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
      static VALID_COLORS = ['primary', 'secondary', 'accent', 'success', 'warning', 'error', 'info', 'neutral'];
      static DEFAULT_SIZE = 'md';
      static DEFAULT_COLOR = 'primary';
      static DEFAULT_VIRTUAL_SCROLL_THRESHOLD = 50;

      /**
       * Debounce utility - delays function execution until after wait time has elapsed
       * @param {Function} fn - The function to debounce
       * @param {number} wait - The delay in milliseconds
       * @returns {Function} The debounced function
       * @static
       */
      static debounce(fn, wait) {
        let timeoutId;
        return function debounced(...args) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => fn.apply(this, args), wait);
        };
      }

      /**
       * Throttle utility - ensures function is called at most once per wait period
       * @param {Function} fn - The function to throttle
       * @param {number} wait - The minimum time between calls in milliseconds
       * @returns {Function} The throttled function
       * @static
       */
      static throttle(fn, wait) {
        let lastCall = 0;
        return function throttled(...args) {
          const now = Date.now();
          if (now - lastCall >= wait) {
            lastCall = now;
            fn.apply(this, args);
          }
        };
      }

      constructor() {
        super();
        this._keysSelected = {};
        this._valueDict = {};
        this._isOpen = false;
        this._optionIdCounter = 0; // For generating unique keys
        this._updateDisplayPending = false; // For microtask batching (reactive system)
        this._abortController = new AbortController(); // For event listener cleanup
        this._selectedCount = 0; // Cache selected count for performance
        this._cachedSelectedItems = []; // Cache selected items array to avoid rebuilding
        this._selectedItemsDirty = true; // Track if cache needs refresh
        
        // Debug mode
        this._debug = false; // Enable debug logging with 'debug' or 'verbose' attribute
        
        // Lifecycle hooks
        this._hooks = {
          onSetupStart: [],
          onSetupComplete: [],
          onRenderStart: [],
          onRenderComplete: [],
          onOptionAdded: [],
          onOptionRemoved: [],
          onSelectionChange: []
        };
        
        // Configuration options (can be set via configure() method)
        this._customRenderer = null; // Custom renderer function for dropdown options
        
        // Field mappings for addOptions bulk operation
        this._valueField = 'value'; // Field name for option value
        this._textField = 'text'; // Field name for option text
        this._selectedField = 'selected'; // Field name for selected state
        this._disabledField = 'disabled'; // Field name for disabled state
        this._extraDataFields = []; // Array of field names to include as extra data
      }

      static get observedAttributes() {
        // Observe class/style for user-applied styling and checked-color for checkbox colors
        return ['class', 'style', 'checked-color'];
      }

      /**
       * Centralized error handler
       * @private
       * @param {Error} error - The error object
       * @param {string} context - Where the error occurred (method name)
       */
      _handleError(error, context) {
        console.error(`DaisyMultiSelect error in ${context}:`, error);
        
        // Dispatch custom error event for developers to listen to
        this.dispatchEvent(new CustomEvent('error', {
          detail: { error, context, message: error.message },
          bubbles: true,
          composed: true
        }));
        
        // Show user-friendly error message if component is visible
        if (this._triggerBtn && context !== 'connectedCallback') {
          this._showErrorState(`An error occurred: ${error.message}`);
        }
      }

      /**
       * Show error state in the UI
       * @private
       * @param {string} message - Error message to display
       */
      _showErrorState(message) {
        if (!this._display) return;
        
        const errorHtml = `
          <span class="text-error flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-sm">${message}</span>
          </span>
        `;
        this._display.innerHTML = errorHtml;
      }

      /**
       * Extract data-* attributes from an element
       * @private
       * @param {HTMLElement} element - Element to extract data attributes from
       * @returns {Object} Object containing all data attributes (keys without 'data-' prefix)
       * @example
       * // <option data-icon="??" data-rating="5" data-description="Red fruit">
       * // Returns: { icon: '??', rating: '5', description: 'Red fruit' }
       */
      _extractDataAttributes(element) {
        const dataAttrs = {};
        
        // Get all attributes from the element
        Array.from(element.attributes).forEach(attr => {
          // Check if attribute starts with 'data-'
          if (attr.name.startsWith('data-')) {
            // Remove 'data-' prefix and convert to camelCase
            const key = attr.name.slice(5).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            dataAttrs[key] = attr.value;
          }
        });
        
        return dataAttrs;
      }

      /**
       * Log debug messages when debug mode is enabled
       * @private
       * @param {string} message - The message to log
       * @param {...any} args - Additional arguments to log
       */
      _log(message, ...args) {
        if (this._debug) {
          const id = this.id || this.getAttribute('name') || 'unnamed';
          console.log(`[MultiSelect#${id}] ${message}`, ...args);
        }
      }

      connectedCallback() {
        // Enable debug mode if debug or verbose attribute is present
        this._debug = this.hasAttribute('debug') || this.hasAttribute('verbose');
        
        this._log('Component connecting...');
        
        this._placeholder = this.getAttribute('placeholder') || 'Select options...';
        this._color = this.getAttribute('checked-color') || DaisyMultiSelect.DEFAULT_COLOR;
        this._isHexColor = this._color.startsWith('#');
        this._chipTextColor = this.getAttribute('chip-text-color') || '';
        this._inputColor = this.getAttribute('input-color') || '';
        this._size = this.getAttribute('size') || DaisyMultiSelect.DEFAULT_SIZE;
        this._singleSelect = this.hasAttribute('single-select');
        this._maxSelections = this._singleSelect ? 1 : (parseInt(this.getAttribute('max-selections')) || 0);
        this._searchable = this.hasAttribute('searchable');
        this._showSelectAll = this.hasAttribute('show-select-all');
        this._showClear = !this.hasAttribute('hide-clear'); // Default to true, unless hide-clear is specified
        this._disabled = this.hasAttribute('disabled');
        this._required = this.hasAttribute('required');
        this._virtualScroll = this.hasAttribute('virtual-scroll');
        this._virtualScrollThreshold = parseInt(this.getAttribute('virtual-scroll-threshold')) || DaisyMultiSelect.DEFAULT_VIRTUAL_SCROLL_THRESHOLD;
        this._delimiter = this.getAttribute('delimiter') || ';';
        // Chip-style is now true by default, can be disabled with no-chip-style attribute
        this._chipStyle = !this.hasAttribute('no-chip-style');
        // Highlight selected items with background color (default: false)
        this._highlight = this.hasAttribute('highlight');
        
        // Store initial classes and styles from the host element
        this._userClasses = this.className;
        this._userStyles = this.getAttribute('style') || '';
        
        try {
          // Apply custom hex color styles if needed
          if (this._isHexColor || this._chipTextColor) {
            this._applyHexColorStyles();
          }
          
          this._setupComponent();
          this._setupEventHandlers();
          this._setSelectedStates();
          this._applyUserAttributes();
        } catch (error) {
          console.error('Failed to initialize daisy-multiselect:', error);
          this.innerHTML = `
            <div class="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Failed to initialize multi-select component</span>
            </div>
          `;
        }
      }

      disconnectedCallback() {
        this._removeEventHandlers();
        // Remove custom hex color styles if they exist
        if (this._hexColorStyleElement) {
          this._hexColorStyleElement.remove();
        }
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (!this._triggerBtn) return; // Not initialized yet

        if (name === 'class') {
          this._userClasses = newValue || '';
          this._applyUserAttributes();
        } else if (name === 'style') {
          this._userStyles = newValue || '';
          this._applyUserAttributes();
        } else if (name === 'checked-color') {
          this._color = newValue || 'primary';
          this._isHexColor = this._color.startsWith('#');
          if (this._isHexColor) {
            this._applyHexColorStyles();
          } else if (this._hexColorStyleElement) {
            this._hexColorStyleElement.remove();
            this._hexColorStyleElement = null;
          }
          this._applyCheckedColorToOptions();
          this._applyUserAttributes();
        }
      }

      _applyHexColorStyles() {
        // Remove existing hex color styles if they exist
        if (this._hexColorStyleElement) {
          this._hexColorStyleElement.remove();
        }

        // Create unique class name for this instance
        const uniqueId = `hex-${Math.random().toString(36).substr(2, 9)}`;
        this._hexColorClass = uniqueId;

        // Determine chip text color
        const chipTextColor = this._chipTextColor || 'white';

        // Create style element for custom colors
        this._hexColorStyleElement = document.createElement('style');
        let styles = '';

        // Only add checkbox styles if using hex color for checkboxes
        if (this._isHexColor) {
          styles += `
          .${uniqueId} .checkbox:checked,
          .${uniqueId} .checkbox[checked="true"],
          .${uniqueId} .checkbox[aria-checked="true"] {
            --chkbg: ${this._color};
            --chkfg: white;
            border-color: ${this._color};
          }
          `;
        }

        // Add badge styles (for hex background color or custom text color)
        if (this._isHexColor) {
          // Custom background and text color
          styles += `
          .badge-hex-${uniqueId} {
            background-color: ${this._color};
            color: ${chipTextColor};
            border-color: ${this._color};
          }
          `;
        } else if (this._chipTextColor) {
          // DaisyUI background with custom text color
          styles += `
          .badge-hex-${uniqueId} {
            color: ${chipTextColor};
          }
          `;
        }

        this._hexColorStyleElement.textContent = styles;
        document.head.appendChild(this._hexColorStyleElement);
      }

      _getInputColorClass() {
        if (!this._inputColor) return '';
        const validColors = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'];
        return validColors.includes(this._inputColor) ? `input-${this._inputColor}` : '';
      }

      _getSizeClass() {
        // Return size class for consistent DaisyUI styling
        // Heights match DaisyUI select: xs=1.5rem, sm=2rem, md=2.5rem, lg=3rem, xl=3.5rem
        const validSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
        return validSizes.includes(this._size) ? `input-${this._size}` : 'input-md';
      }
      
      _getMinHeightClass() {
        // Get minimum height class that matches DaisyUI select heights
        // Using min-height to allow growth when chips are added
        const sizeMap = {
          'xs': 'min-h-6',   // 1.5rem = 24px
          'sm': 'min-h-8',   // 2rem = 32px
          'md': 'min-h-10',  // 2.5rem = 40px
          'lg': 'min-h-12',  // 3rem = 48px
          'xl': 'min-h-14'   // 3.5rem = 56px
        };
        return sizeMap[this._size] || 'min-h-10';
      }

      _getHeightClass() {
        // Get exact height class for use when no chips are selected (matches DaisyUI buttons/selects)
        const sizeMap = {
          'xs': 'h-6',   // 1.5rem = 24px
          'sm': 'h-8',   // 2rem = 32px
          'md': 'h-10',  // 2.5rem = 40px
          'lg': 'h-12',  // 3rem = 48px
          'xl': 'h-14'   // 3.5rem = 56px
        };
        return sizeMap[this._size] || 'h-10';
      }

      _getCheckboxSizeClass() {
        const sizeMap = {
          'xs': 'checkbox-xs',
          'sm': 'checkbox-sm',
          'md': 'checkbox-md',
          'lg': 'checkbox-lg',
          'xl': 'checkbox-xl'
        };
        return sizeMap[this._size] || 'checkbox-md';
      }

      _getTextSizeClass() {
        const sizeMap = {
          'xs': 'text-xs',
          'sm': 'text-sm',
          'md': 'text-base',
          'lg': 'text-lg',
          'xl': 'text-xl'
        };
        return sizeMap[this._size] || 'text-base';
      }

      _getPaddingClass() {
        const sizeMap = {
          'xs': 'p-1',
          'sm': 'p-1.5',
          'md': 'p-2',
          'lg': 'p-2.5',
          'xl': 'p-3'
        };
        return sizeMap[this._size] || 'p-2';
      }

      /**
       * Render option content using custom renderer or default
       * @private
       * @param {Object} item - Option data { value, text, selected, disabled, ...extraData }
       * @returns {string} HTML string for option content (after checkbox)
       */
      _renderOptionContent(item) {
        // Use custom renderer if provided
        if (this._customRenderer) {
          try {
            const customContent = this._customRenderer(item);
            return customContent || `<span class="${this._getTextSizeClass()}">${this._escapeHtml(item.text)}</span>`;
          } catch (error) {
            console.error('Error in customRenderer:', error);
            // Fall back to default
            return `<span class="${this._getTextSizeClass()}">${this._escapeHtml(item.text)}</span>`;
          }
        }
        
        // Default rendering
        return `<span class="${this._getTextSizeClass()}">${this._escapeHtml(item.text)}</span>`;
      }

      _setupComponent() {
        this._log('Setting up component...');
        
        // Store original select element
        const options = Array.from(this.querySelectorAll('option'));
        this._log(`Found ${options.length} option elements`);
        
        // Create wrapper
        this.innerHTML = `
          <div class="relative w-full">
            <!-- Hidden Native Select -->
            <select multiple class="hidden" name="${this.getAttribute('name') || 'multiselect'}">
              ${options.map(opt => `
                <option value="${opt.value}" ${opt.selected ? 'selected' : ''} ${opt.disabled ? 'disabled' : ''}>
                  ${opt.textContent}
                </option>
              `).join('')}
            </select>
            
            <!-- Display Input -->
            <div class="multiselect-container flex flex-row items-center">
              <button type="button" class="multiselect-trigger input input-bordered w-full text-left cursor-pointer !h-auto ${this._getMinHeightClass()} flex ${this._chipStyle ? 'flex-wrap gap-x-2 !p-1.5' : 'justify-between'} ${this._getInputColorClass()} ${this._getSizeClass()} ${this._disabled ? 'input-disabled cursor-not-allowed opacity-60' : ''}" ${this._disabled ? 'disabled' : ''} aria-haspopup="listbox" aria-expanded="false" aria-label="${this._placeholder}" role="combobox">
                <span class="multiselect-display ${this._chipStyle ? 'flex-1 min-w-0' : 'flex-1 mr-2 py-1'}">${this._placeholder}</span>
                <div class="flex items-center gap-2 flex-shrink-0">
                  ${this._showClear ? `
                    <span class="multiselect-clear-btn clear-btn-inner opacity-0 hover:opacity-100 transition-opacity ${this._disabled ? 'hidden' : ''}" title="Clear all selections">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </span>
                  ` : ''}
                  <svg class="multiselect-caret w-5 h-5 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>              
            </div>
            
            <!-- Dropdown Content -->
            <div class="multiselect-dropdown-content dropdown-content menu bg-base-100 rounded-box z-50 w-full shadow-lg border border-base-300 hidden multiselect-dropdown absolute" role="listbox" aria-multiselectable="true" style="top: 100%; margin-top: 0.5rem; contain: layout style paint;">
              <div class="p-2">
                ${this._searchable ? `
                  <div class="mb-2">
                    <input type="search" placeholder="Search..." class="multiselect-search-input input ${this._getSizeClass()} input-bordered w-full">
                  </div>
                ` : ''}
                ${this._showSelectAll ? `
                  <div class="flex gap-2 mb-2">
                    <button type="button" class="multiselect-select-all-btn btn ${this._getSizeClass().replace('input-', 'btn-')} btn-ghost flex-1">Select All</button>
                    <button type="button" class="multiselect-deselect-all-btn btn ${this._getSizeClass().replace('input-', 'btn-')} btn-ghost flex-1">Deselect All</button>
                  </div>
                ` : ''}
                <ul class="multiselect-options-list menu-vertical w-full ${this._isHexColor ? this._hexColorClass : ''}">
                  ${options.map((opt, index) => {
                    // Extract all data-* attributes from the option element
                    const extraData = this._extractDataAttributes(opt);
                    
                    // Override selected/disabled if data attributes present
                    const selected = extraData.selected !== undefined ? extraData.selected === 'true' || extraData.selected === true : opt.selected;
                    const disabled = extraData.disabled !== undefined ? extraData.disabled === 'true' || extraData.disabled === true : opt.disabled;
                    
                    const itemData = {
                      value: opt.value,
                      text: opt.textContent,
                      selected: selected,
                      disabled: disabled,
                      index: index,
                      ...extraData // Include all data-* attributes
                    };
                    
                    // Build data attributes string from extraData (excluding selected/disabled as they're handled separately)
                    let dataAttributesHtml = '';
                    for (const [key, value] of Object.entries(extraData)) {
                      if (key !== 'selected' && key !== 'disabled') {
                        // Convert camelCase back to kebab-case for HTML attributes
                        const kebabKey = key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
                        dataAttributesHtml += ` data-${kebabKey}="${value}"`;
                      }
                    }
                    
                    return `
                    <li class="multiselect-option w-full ${disabled ? 'disabled opacity-50' : ''} active:!bg-transparent focus:!bg-transparent focus:outline-none" data-index="${index}" data-value="${opt.value}" data-text="${opt.textContent.toLowerCase()}"${dataAttributesHtml} role="option" aria-selected="${selected ? 'true' : 'false'}" ${disabled ? 'aria-disabled="true"' : ''} tabindex="-1">
                      <div class="flex items-center gap-3 cursor-pointer w-full ${this._getPaddingClass()} rounded ${disabled ? 'pointer-events-none' : ''} active:!bg-transparent active:scale-100">
                        <input type="checkbox" class="checkbox ${this._getCheckboxColorClass()} ${this._getCheckboxSizeClass()} pointer-events-none" ${selected ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
                        ${this._renderOptionContent(itemData)}
                      </div>
                    </li>
                  `;
                  }).join('')}
                </ul>
                <div class="multiselect-no-results text-center text-sm opacity-60 hidden mt-2">No options found</div>
              </div>
            </div>
          </div>
        `;

        // Store references (cache for performance)
        this._triggerBtn = this.querySelector('.multiselect-trigger');
        this._dropdown = this.querySelector('.multiselect-dropdown-content');
        this._display = this.querySelector('.multiselect-display');
        this._caret = this.querySelector('.multiselect-caret');
        this._nativeSelect = this.querySelector('select');
        this._options = this.querySelectorAll('.multiselect-option');
        this._clearBtn = this.querySelector('.multiselect-clear-btn'); // Cache clear button
        
        // Add will-change hints for animated elements (GPU acceleration)
        if (this._caret) {
          this._caret.style.willChange = 'transform';
        }
        if (this._dropdown) {
          this._dropdown.style.willChange = 'opacity, transform';
        }
        
        // Setup delegated event listener for chip removal (performance optimization)
        this._display.addEventListener('click', (e) => {
          const removeBtn = e.target.closest('[data-chip-remove]');
          if (removeBtn) {
            e.preventDefault();
            e.stopPropagation();
            const key = removeBtn.dataset.chipRemove;
            this._removeChip(key);
          }
        }, { signal: this._abortController.signal });

        // Build value dictionary
        options.forEach((opt, index) => {
          const key = `option-${this._optionIdCounter++}`;
          const optionEl = this._options[index];
          optionEl.dataset.optionKey = key; // Store key on element
          
          // Extract data attributes
          const extraData = this._extractDataAttributes(opt);
          const selected = extraData.selected !== undefined ? extraData.selected === 'true' || extraData.selected === true : opt.selected;
          const disabled = extraData.disabled !== undefined ? extraData.disabled === 'true' || extraData.disabled === true : opt.disabled;
          
          this._valueDict[key] = {
            value: opt.value,
            text: opt.textContent,
            selected: selected,
            disabled: disabled,
            optionEl: optionEl,
            nativeOption: this._nativeSelect.options[index],
            ...extraData // Store all data-* attributes for custom renderer
          };
        });

        // Setup virtual scrolling if enabled and threshold is met
        if (this._virtualScroll && options.length > this._virtualScrollThreshold) {
          this._setupVirtualScroll();
        }
        
        this._log('Component setup complete');
        this._trigger('onSetupComplete', { optionCount: options.length });
      }

      _applyUserAttributes() {
        if (!this._triggerBtn) return;
        
        // Get the current internal classes that should be preserved
        const internalClasses = [
          'multiselect-trigger',
          'input',
          'input-bordered',
          'w-full',
          'text-left',
          'cursor-pointer',
          this._getInputColorClass(),
          this._getSizeClass()
        ];
        
        // Add layout classes - both modes can grow vertically
        internalClasses.push('!h-auto', this._getMinHeightClass(), 'flex');
        
        // Add chip-style specific classes
        if (this._chipStyle) {
          internalClasses.push('flex-wrap', 'gap-x-2', '!p-1.5');
        } else {
          internalClasses.push('justify-between');
        }
        
        // Add disabled classes if applicable
        if (this._disabled) {
          internalClasses.push('input-disabled', 'cursor-not-allowed', 'opacity-60');
        }
        
        // Split user classes and filter out empty strings
        const userClassList = this._userClasses ? this._userClasses.split(/\s+/).filter(c => c) : [];
        
        // Combine internal and user classes
        const allClasses = [...internalClasses, ...userClassList].filter(c => c);
        
        // Apply combined classes
        this._triggerBtn.className = allClasses.join(' ');
        
        // Apply user styles
        if (this._userStyles) {
          // Parse and apply each style property
          const styleProps = this._userStyles.split(';').filter(s => s.trim());
          styleProps.forEach(prop => {
            const [key, value] = prop.split(':').map(s => s.trim());
            if (key && value) {
              this._triggerBtn.style[key] = value;
            }
          });
        }
        
        // Copy data-* attributes from host to trigger
        const componentAttributes = Array.from(this.attributes);
        const reservedAttributes = [
          'placeholder', 'color', 'checked-color', 'input-color', 'size', 'max-selections', 
          'searchable', 'show-select-all', 'hide-clear', 'disabled', 'required',
          'virtual-scroll', 'virtual-scroll-threshold', 'delimiter', 'name',
          'class', 'style'
        ];
        
        componentAttributes.forEach(attr => {
          // Copy data-* attributes and other non-reserved attributes
          if (attr.name.startsWith('data-') || 
              (!reservedAttributes.includes(attr.name) && 
               attr.name !== 'id' && 
               !attr.name.startsWith('aria-'))) {
            this._triggerBtn.setAttribute(attr.name, attr.value);
          }
        });
        }

        /**
         * Apply the current checked color to checkboxes and selected option styling
         * @private
         */
        _applyCheckedColorToOptions() {
          // Update checkbox classes for existing options
          try {
            // Update hex color class on container if needed
            const optionsList = this._dropdown.querySelector('.multiselect-options-list');
            if (optionsList) {
              if (this._isHexColor) {
                optionsList.classList.add(this._hexColorClass);
              } else {
                // Remove any hex color classes
                optionsList.className = optionsList.className.replace(/hex-\w+/g, '').trim();
              }
            }

            for (let key in this._valueDict) {
              const item = this._valueDict[key];
              if (!item || !item.optionEl) continue;

              // Update checkbox element class
              const checkbox = item.optionEl.querySelector('input[type="checkbox"]');
              if (checkbox) {
                checkbox.className = `checkbox ${this._getCheckboxColorClass()} ${this._getCheckboxSizeClass()} pointer-events-none`;
              }

              // Update selected option color styling
              if (this._keysSelected[key]) {
                if (this._color !== 'primary' && !this._isHexColor) {
                  item.optionEl.classList.add(`color-${this._color}`);
                } else {
                  item.optionEl.classList.remove(...Array.from(item.optionEl.classList).filter(c => c.startsWith('color-')));
                }
              } else {
                // Remove any color- classes from unselected items if present
                item.optionEl.classList.remove(...Array.from(item.optionEl.classList).filter(c => c.startsWith('color-')));
              }
            }
          } catch (err) {
            console.error('Error applying checked color to options', err);
          }
      }

      _setupVirtualScroll() {
        this._virtualScrollEnabled = true;
        this._itemHeight = 40; // Approximate height per item
        this._visibleItems = Math.ceil(300 / this._itemHeight); // Based on max-height of 300px
        this._bufferItems = 5; // Extra items to render above/below viewport
        this._scrollTop = 0;
        
        const optionsList = this.querySelector('.multiselect-options-list');
        const dropdown = this._dropdown;
        
        // Create scroll container
        this._allOptions = Array.from(this._options);
        this._totalItems = this._allOptions.length;
        
        // Set container height
        const totalHeight = this._totalItems * this._itemHeight;
        optionsList.style.height = `${totalHeight}px`;
        optionsList.style.position = 'relative';
        
        // Add scroll listener with passive flag for better performance
        this._virtualScrollBound = this._handleVirtualScroll.bind(this);
        dropdown.addEventListener('scroll', this._virtualScrollBound, { passive: true, signal: this._abortController.signal });
        
        // Initial render
        this._renderVisibleItems();
      }

      _handleVirtualScroll() {
        this._scrollTop = this._dropdown.scrollTop;
        this._renderVisibleItems();
      }

      _renderVisibleItems() {
        if (!this._virtualScrollEnabled) return;
        
        const startIndex = Math.max(0, Math.floor(this._scrollTop / this._itemHeight) - this._bufferItems);
        const endIndex = Math.min(this._totalItems, startIndex + this._visibleItems + (this._bufferItems * 2));
        
        // Hide all items
        this._allOptions.forEach((option, index) => {
          if (index < startIndex || index >= endIndex) {
            option.style.display = 'none';
          } else {
            option.style.display = '';
            option.style.position = 'absolute';
            option.style.top = `${index * this._itemHeight}px`;
            option.style.width = '100%';
          }
        });
      }

      _disableVirtualScroll() {
        if (!this._virtualScrollEnabled) return;
        
        // Show all options
        this._allOptions.forEach((option) => {
          option.style.display = '';
          option.style.position = '';
          option.style.top = '';
        });
        
        const optionsList = this.querySelector('.multiselect-options-list');
        optionsList.style.height = '';
        optionsList.style.position = '';
      }

      _enableVirtualScroll() {
        if (!this._virtualScroll || this._totalItems < this._virtualScrollThreshold) return;
        
        // Reset to virtual scroll mode
        this._scrollTop = this._dropdown.scrollTop;
        const optionsList = this.querySelector('.multiselect-options-list');
        const totalHeight = this._totalItems * this._itemHeight;
        optionsList.style.height = `${totalHeight}px`;
        optionsList.style.position = 'relative';
        
        this._renderVisibleItems();
      }

      _setupEventHandlers() {
        const signal = this._abortController.signal;

        // Toggle dropdown
        this._toggleBound = this._toggleDropdown.bind(this);
        this._triggerBtn.addEventListener('click', this._toggleBound, { signal });

        // Handle option clicks with event delegation (single listener instead of N listeners)
        this._optionClickBound = this._handleOptionClickDelegated.bind(this);
        const optionsList = this.querySelector('.multiselect-options-list');
        if (optionsList) {
          optionsList.addEventListener('click', this._optionClickBound, { signal });
        }

        // Handle search input with debouncing for better performance
        const searchInput = this.querySelector('.multiselect-search-input');
        if (searchInput) {
          // Debounce search for 150ms to reduce DOM operations during typing
          const debouncedFilter = DaisyMultiSelect.debounce((value) => {
            this._filterOptions(value);
          }, 150);
          
          searchInput.addEventListener('input', (e) => {
            debouncedFilter(e.target.value);
          }, { signal });
          searchInput.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent dropdown from closing
          }, { signal });
        }

        // Handle select all button
        const selectAllBtn = this.querySelector('.multiselect-select-all-btn');
        if (selectAllBtn) {
          selectAllBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.selectAll();
          }, { signal });
        }

        // Handle deselect all button
        const deselectAllBtn = this.querySelector('.multiselect-deselect-all-btn');
        if (deselectAllBtn) {
          deselectAllBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.clearSelected();
          }, { signal });
        }

        // Handle clear button
        const clearBtn = this.querySelector('.multiselect-clear-btn');
        if (clearBtn) {
          clearBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.clearSelected();
          }, { signal });
        }

        // Setup global click handler for closing dropdowns (shared across all components for performance)
        this._setupGlobalClickHandler();

        // Handle keyboard navigation
        this._keydownBound = this._handleKeydown.bind(this);
        this._triggerBtn.addEventListener('keydown', this._keydownBound, { signal });
      }

      _setupGlobalClickHandler() {
        // Use a single global click handler for all multiselect components
        // This prevents N event handlers from being registered when there are N components
        if (!window._multiselectGlobalClickHandler) {
          window._multiselectGlobalClickHandler = (e) => {
            // Find all multiselect components and close any that should close
            document.querySelectorAll('daisy-multiselect').forEach(component => {
              if (component._isOpen && !component.contains(e.target)) {
                component.close();
              }
            });
          };
          document.addEventListener('click', window._multiselectGlobalClickHandler, { passive: true });
        }
        
        // Mark this component as using the global handler
        this._usesGlobalClickHandler = true;
      }

      _removeEventHandlers() {
        // AbortController removes all event listeners at once
        this._abortController.abort();
        // Create a new AbortController for potential re-initialization
        this._abortController = new AbortController();
      }

      _toggleDropdown(e) {
        e.stopPropagation();
        if (this._isOpen) {
          this.close();
        } else {
          this.open();
        }
      }

      _positionDropdown() {
        if (!this._triggerBtn || !this._dropdown) return;

        // Wait for next frame to ensure dropdown is rendered
        requestAnimationFrame(() => {
          // Get viewport height and element position
          const viewportHeight = window.innerHeight;
          const triggerRect = this._triggerBtn.getBoundingClientRect();
          const dropdownHeight = this._dropdown.offsetHeight;
          
          // Calculate space above and below
          const spaceBelow = viewportHeight - triggerRect.bottom;
          const spaceAbove = triggerRect.top;
          
          // Decide whether to open upward or downward
          const shouldOpenUpward = spaceBelow < dropdownHeight && spaceAbove > spaceBelow;
          
          if (shouldOpenUpward) {
            // Position above
            this._dropdown.style.bottom = '100%';
            this._dropdown.style.top = 'auto';
            this._dropdown.style.marginTop = '0';
            this._dropdown.style.marginBottom = '0.5rem';
          } else {
            // Position below (default)
            this._dropdown.style.top = '100%';
            this._dropdown.style.bottom = 'auto';
            this._dropdown.style.marginTop = '0.5rem';
            this._dropdown.style.marginBottom = '0';
          }
        });
      }

      _handleKeydown(e) {
        if (e.key === 'Escape' && this._isOpen) {
          e.preventDefault();
          this.close();
        } else if (this._isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
          e.preventDefault();
          this._navigateOptions(e.key === 'ArrowDown' ? 1 : -1);
        } else if (this._isOpen && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          const focusedOption = Array.from(this._options).find(opt => opt.classList.contains('focused'));
          if (focusedOption) {
            // If there's a focused option, select it
            this._selectFocusedOption();
          } else {
            // If no focused option, close the dropdown
            this.close();
          }
        } else if (!this._isOpen && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          this.open();
        }
      }

      /**
       * Event delegation handler for option clicks
       * Single listener for all options instead of N individual listeners
       * @private
       */
      _handleOptionClickDelegated(e) {
        try {
          // Find the closest option element (event delegation)
          const option = e.target.closest('.multiselect-option');
          
          // Ignore clicks outside options or on disabled options
          if (!option || option.classList.contains('disabled')) {
            return;
          }
          
          e.preventDefault();
          e.stopPropagation();
          
          const key = option.dataset.optionKey;
          
          // Provide immediate visual feedback before processing
          const checkbox = option.querySelector('input[type="checkbox"]');
          const willBeSelected = !checkbox.checked;
          
          // Immediate checkbox toggle for perceived performance
          checkbox.checked = willBeSelected;
          
          // Then process the selection
          this._toggleSelection(key);
          
          // Note: Change event is dispatched by _performDisplayUpdate, not here
        } catch (error) {
          this._handleError(error, '_handleOptionClickDelegated');
        }
      }

      /**
       * Legacy handler - kept for backward compatibility
       * @deprecated Use _handleOptionClickDelegated instead
       * @private
       */
      _handleOptionClick(e) {
        e.preventDefault();
        e.stopPropagation();
        const option = e.currentTarget;
        const key = option.dataset.optionKey;
        
        // Provide immediate visual feedback before processing
        const checkbox = option.querySelector('input[type="checkbox"]');
        const willBeSelected = !checkbox.checked;
        
        // Immediate checkbox toggle for perceived performance
        checkbox.checked = willBeSelected;
        
        // Then process the selection
        this._toggleSelection(key);
        
        // Note: Change event is dispatched by _performDisplayUpdate, not here
      }

      _toggleSelection(key) {
        const item = this._valueDict[key];
        if (!item || item.disabled) return;

        const isSelected = !this._keysSelected[key];
        
        // Check max selections limit (use cached count for performance)
        if (isSelected && this._maxSelections > 0 && this._selectedCount >= this._maxSelections) {
          return; // Don't allow more selections
        }
        
        if (isSelected) {
          this._keysSelected[key] = true;
          this._selectedCount++;
        } else {
          delete this._keysSelected[key];
          this._selectedCount--;
        }
        
        // Mark selected items cache as dirty
        this._selectedItemsDirty = true;

        // Batch DOM updates for better performance
        // Use cached checkbox reference if available
        const checkbox = item.checkbox || item.optionEl.querySelector('input[type="checkbox"]');
        if (!item.checkbox) item.checkbox = checkbox; // Cache for future use
        checkbox.checked = isSelected;

        // Update ARIA
        item.optionEl.setAttribute('aria-selected', isSelected ? 'true' : 'false');

        // Batch class operations
        const classList = item.optionEl.classList;
        if (isSelected) {
          classList.add('selected');
          if (this._highlight) {
            classList.add('highlight');
          }
          if (this._color !== 'primary') {
            classList.add(`color-${this._color}`);
          }
        } else {
          classList.remove('selected', 'highlight', `color-${this._color}`);
        }

        // Update native select
        item.nativeOption.selected = isSelected;

        // Update display (already batched with requestAnimationFrame)
        this._updateDisplay();
        
        // Trigger lifecycle hook (optimized - use count instead of creating array)
        this._trigger('onSelectionChange', { 
          selectedCount: this._selectedCount,
          key,
          value: item.value,
          text: item.text,
          isSelected 
        });
        
        // Defer max selections state update if needed
        if (this._maxSelections > 0) {
          this._scheduleMaxSelectionsUpdate();
        }
      }

      _setSelectedStates() {
        this._keysSelected = {};
        this._selectedCount = 0; // Reset count
        this._selectedItemsDirty = true; // Mark cache dirty
        
        for (let key in this._valueDict) {
          const item = this._valueDict[key];
          if (item.selected) {
            this._keysSelected[key] = true;
            this._selectedCount++; // Increment count
            item.optionEl.classList.add('selected');
            if (this._highlight) {
              item.optionEl.classList.add('highlight');
            }
            if (this._color !== 'primary') {
              item.optionEl.classList.add(`color-${this._color}`);
            }
            const checkbox = item.optionEl.querySelector('input[type="checkbox"]');
            checkbox.checked = true;
          }
        }

        this._updateDisplay();
      }

      _updateDisplay() {
        if (!this._display) return;

        // Reactive system: Batch updates using microtasks (immediate, but coalesced)
        // This provides instant feedback while preventing layout thrashing
        if (this._updateDisplayPending) return;
        
        this._updateDisplayPending = true;
        
        // Use queueMicrotask for immediate batching (faster than setTimeout/rAF)
        queueMicrotask(() => {
          this._updateDisplayPending = false;
          this._performDisplayUpdate();
        });
      }

      _performDisplayUpdate() {
        if (!this._display) return;

        // Use cached selected items if available, rebuild if dirty
        if (this._selectedItemsDirty) {
          this._cachedSelectedItems = [];
          for (let key in this._keysSelected) {
            const item = this._valueDict[key];
            if (item) {
              this._cachedSelectedItems.push({ key, text: item.text, value: item.value });
            }
          }
          this._selectedItemsDirty = false;
        }

        // Update clear button visibility using cached reference and count
        if (this._clearBtn) {
          if (this._selectedCount === 0) {
            this._clearBtn.classList.remove('has-selections');
          } else {
            this._clearBtn.classList.add('has-selections');
          }
        }

        if (this._chipStyle) {
          this._renderChips(this._cachedSelectedItems);
        } else {
          this._renderCommaList(this._cachedSelectedItems);
        }

        // Update border color based on blank state
        this._updateBorderColor();

        // Dispatch change event (uses cached items)
        this._dispatchChangeEvent();
      }

      /**
       * Render selected items as comma-separated text (default mode)
       * @private
       */
      _renderCommaList(selectedItems) {
        if (selectedItems.length === 0) {
          const newText = this._placeholder;
          // Only update text if changed (prevents flicker), but always ensure correct opacity
          if (this._display.textContent !== newText) {
            this._display.textContent = newText;
          }
          this._display.classList.add('opacity-60');
        } else {
          const selectedTexts = selectedItems.map(item => item.text);
          let displayText = selectedTexts.join(', ');
          
          // Add max selections indicator if limit is set (use cached count)
          if (this._maxSelections > 0) {
            displayText = `${displayText} (${this._selectedCount}/${this._maxSelections})`;
          }
          
          // Only update text if changed (prevents flicker), but always ensure correct opacity
          if (this._display.textContent !== displayText) {
            this._display.textContent = displayText;
          }
          this._display.classList.remove('opacity-60');
        }
      }

      /**
       * Render selected items as removable chips/badges (chip-style mode)
       * Following Choices.js pattern: show all chips, let container grow vertically
       * Optimized to only update changed chips instead of recreating all
       * @private
       */
      _renderChips(selectedItems) {
        this._display.classList.remove('opacity-60');
        
        if (selectedItems.length === 0) {
          // Show placeholder
          this._display.innerHTML = '';
          const placeholder = document.createElement('span');
          placeholder.textContent = this._placeholder;
          placeholder.className = 'opacity-60';
          this._display.appendChild(placeholder);
          return;
        }

        // Get or create chips container
        let chipsContainer = this._display.querySelector('.chips-container');
        if (!chipsContainer) {
          this._display.innerHTML = '';
          chipsContainer = document.createElement('div');
          chipsContainer.className = 'chips-container flex flex-wrap gap-1 items-start w-full';
          chipsContainer.style.contain = 'layout style'; // CSS containment for better performance
          this._display.appendChild(chipsContainer);
        }

        // Create a map of existing chips for faster lookup
        const existingChips = new Map();
        chipsContainer.querySelectorAll('[data-item-key]').forEach(chip => {
          existingChips.set(chip.dataset.itemKey, chip);
        });

        // Create a set of current keys
        const currentKeys = new Set(selectedItems.map(item => item.key));

        // Batch DOM operations using DocumentFragment for better performance
        const fragment = document.createDocumentFragment();
        const chipsToRemove = [];
        
        // Mark chips for removal
        existingChips.forEach((chip, key) => {
          if (!currentKeys.has(key)) {
            chipsToRemove.push(chip);
          }
        });

        // Add new chips to fragment (only create if doesn't exist)
        selectedItems.forEach(({ key, text }) => {
          if (!existingChips.has(key)) {
            const chip = this._createChip(key, text);
            fragment.appendChild(chip);
          }
        });
        
        // Batch remove old chips (single reflow)
        chipsToRemove.forEach(chip => chip.remove());
        
        // Batch add new chips (single reflow)
        if (fragment.hasChildNodes()) {
          chipsContainer.appendChild(fragment);
        }
      }

      /**
       * Create a chip element for a selected item
       * @private
       */
      _createChip(key, text) {
        const chip = document.createElement('div');
        chip.className = `badge ${this._getBadgeColorClass()} gap-0 ${this._getChipSizeClass()} flex items-center justify-center rounded-full ${this._disabled ? '!px-3' : '!px-0'}`;
        chip.dataset.itemKey = key;

        // Use innerHTML for faster rendering
        if (this._disabled) {
          chip.innerHTML = `<span class="px-3">${this._escapeHtml(text)}</span>`;
        } else {
          // Cache the remove button SVG to avoid repeated string parsing
          if (!this._removeSvgCache) {
            this._removeSvgCache = `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
          }
          
          chip.innerHTML = `
            <span class="px-2">${this._escapeHtml(text)}</span>
            <span class="w-px h-4 bg-current opacity-30"></span>
            <button type="button" class="hover:opacity-75 transition-opacity cursor-pointer px-2" aria-label="Remove ${this._escapeHtml(text)}" data-chip-remove="${key}">
              ${this._removeSvgCache}
            </button>
          `;
          
          // Note: Click events are handled by delegated listener on display container (performance optimization)
        }

        return chip;
      }
      
      /**
       * Escape HTML to prevent XSS
       * @private
       */
      _escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
      }

      /**
       * Get appropriate badge size class based on component size
       * @private
       */
      _getChipSizeClass() {
        const sizeMap = {
          'xs': 'badge-xs',
          'sm': 'badge-sm',
          'md': 'badge-md',
          'lg': 'badge-lg',
          'xl': 'badge-lg' // DaisyUI doesn't have badge-xl, use lg
        };
        return sizeMap[this._size] || 'badge-md';
      }

      /**
       * Get checkbox color class
       * @private
       */
      _getCheckboxColorClass() {
        return this._isHexColor ? '' : `checkbox-${this._color}`;
      }

      /**
       * Get badge color class for chips
       * @private
       */
      _getBadgeColorClass() {
        // Build class list
        let classes = [];
        
        // Add DaisyUI color class if not using hex background
        if (!this._isHexColor) {
          classes.push(`badge-${this._color}`);
        }
        
        // Add custom class if using hex color or custom text color
        if (this._isHexColor || this._chipTextColor) {
          classes.push(`badge-hex-${this._hexColorClass}`);
        }
        
        return classes.join(' ') || `badge-${this._color}`;
      }

      /**
       * Remove a chip by toggling its selection
       * @private
       */
      _removeChip(key) {
        if (!this._disabled) {
          this._toggleSelection(key);
          
          // Note: Change event is dispatched by _performDisplayUpdate
        }
      }

      _updateBorderColor() {
        if (!this._triggerBtn) return;
        
        // Remove existing border color classes
        this._triggerBtn.classList.remove('border-error', 'border-success');
        
        // Only apply validation colors if required is true
        if (this._required) {
          if (this.isBlank()) {
            this._triggerBtn.classList.add('border-error');
          } else {
            this._triggerBtn.classList.add('border-success');
          }
        }
      }

      _dispatchChangeEvent() {
        // Use cached selected items to avoid another iteration
        const selectedValues = this._cachedSelectedItems.map(item => item.value);
        const valueString = selectedValues.join(this._delimiter);
        
        const event = new CustomEvent('change', {
          detail: { values: selectedValues, valueString: valueString },
          bubbles: true
        });
        
        this.dispatchEvent(event);
      }

      // Public API
      
      /**
       * Get array of currently selected values
       * @returns {string[]} Array of selected option values
       * @public
       * @example
       * const values = multiselect.getSelectedValues();
       * console.log(values); // ['option1', 'option2']
       */
      getSelectedValues() {
        const values = [];
        for (let key in this._keysSelected) {
          const item = this._valueDict[key];
          if (item) {
            values.push(item.value);
          }
        }
        return values;
      }

      getSelectedTexts() {
        const texts = [];
        for (let key in this._keysSelected) {
          const item = this._valueDict[key];
          if (item) {
            texts.push(item.text);
          }
        }
        return texts;
      }

      /**
       * Clear all selected items (deselect everything)
       */
      clearSelected() {
        for (let key in this._keysSelected) {
          this._toggleSelection(key);
        }
      }

      /**
       * Remove all options from the select (clears the entire list)
       * @public
       * @example
       * multiselect.clear(); // Removes all options
       */
      clear() {
        // Get all option values to remove
        const allValues = Object.values(this._valueDict).map(item => item.value);
        
        // Remove each option
        allValues.forEach(value => {
          this.removeOption(value);
        });
        
        // Clear any remaining state
        this._keysSelected = {};
        this._selectedCount = 0; // Reset count
        this._selectedItemsDirty = true; // Mark cache dirty
        this._valueDict = {};
        this._updateDisplay();
      }

      selectAll() {
        for (let key in this._valueDict) {
          if (!this._valueDict[key].disabled && !this._keysSelected[key]) {
            // Respect max selections limit (use cached count)
            if (this._maxSelections > 0 && this._selectedCount >= this._maxSelections) {
              break; // Stop when limit is reached
            }
            this._toggleSelection(key);
          }
        }
      }

      /**
       * Add a new option to the select
       * @param {string} value - The option value
       * @param {string} text - The option display text
       * @param {boolean} [selected=false] - Whether the option should be selected
       * @param {boolean} [disabled=false] - Whether the option should be disabled
       * @param {Object} [extraData={}] - Additional data for custom renderer (e.g., description, icon, badge)
       * @returns {boolean} True if option was added successfully, false otherwise
       * @public
       * @example
       * multiselect.addOption('apple', 'Apple', false, false);
       * multiselect.addOption('banana', 'Banana', true); // Pre-selected
       * multiselect.addOption('mango', 'Mango', false, false, { description: 'Tropical fruit', icon: '??' });
       */
      addOption(value, text, selected = false, disabled = false, extraData = {}) {
        try {
          // Validate parameters
          if (typeof value !== 'string' || value === '') {
            console.error('addOption: value must be a non-empty string');
            return false;
          }
          if (typeof text !== 'string' || text === '') {
            console.error('addOption: text must be a non-empty string');
            return false;
          }

        // Check if value already exists
        const existingKey = this._findKeyByValue(value);
        if (existingKey) {
          console.warn(`Option with value "${value}" already exists`);
          return false;
        }

        // Add to native select
        const nativeOption = document.createElement('option');
        nativeOption.value = value;
        nativeOption.textContent = text; // Safe - uses textContent
        nativeOption.selected = selected;
        nativeOption.disabled = disabled;
        this._nativeSelect.appendChild(nativeOption);

        // Create list item using DOM methods to avoid XSS
        const li = document.createElement('li');
        const key = `option-${this._optionIdCounter++}`;
        const index = this._nativeSelect.options.length - 1;
        
        li.className = `multiselect-option w-full ${disabled ? 'disabled opacity-50' : ''}`;
        li.dataset.index = index;
        li.dataset.value = value;
        li.dataset.text = text.toLowerCase(); // For search functionality
        li.dataset.optionKey = key;
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', selected ? 'true' : 'false');
        if (disabled) {
          li.setAttribute('aria-disabled', 'true');
        }

        // Create inner div
        const div = document.createElement('div');
        div.className = `flex items-center gap-3 cursor-pointer w-full ${this._getPaddingClass()} rounded ${disabled ? 'pointer-events-none' : ''}`;

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = `checkbox ${this._getCheckboxColorClass()} ${this._getCheckboxSizeClass()} pointer-events-none`;
        checkbox.checked = selected;
        checkbox.disabled = disabled;

        // Prepare item data for renderer
        const itemData = {
          value: value,
          text: text,
          selected: selected,
          disabled: disabled,
          index: index,
          ...extraData // Include any extra data (description, icon, badge, etc.)
        };

        // Render content using custom renderer or default
        const contentHtml = this._renderOptionContent(itemData);

        // Assemble elements - append checkbox first
        div.appendChild(checkbox);
        
        // Create temporary container to parse HTML without destroying checkbox
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = contentHtml;
        
        // Move all parsed nodes from temp container to div (preserves checkbox)
        while (tempContainer.firstChild) {
          div.appendChild(tempContainer.firstChild);
        }
        
        li.appendChild(div);

        // Add to dropdown
        const ul = this.querySelector('.multiselect-options-list');
        if (!ul) {
          console.error('addOption: options list not found');
          return false;
        }
        ul.appendChild(li);

        // Update value dictionary (including extra data for custom renderer)
        this._valueDict[key] = {
          value: value,
          text: text,
          selected: selected,
          disabled: disabled,
          optionEl: li,
          nativeOption: nativeOption,
          ...extraData // Store extra data for future re-renders
        };

        // No need to add individual listener - using event delegation on parent

        // Handle selection
        if (selected) {
          this._keysSelected[key] = true;
          this._selectedCount++; // Update count
          this._selectedItemsDirty = true; // Mark cache dirty
          li.classList.add('selected');
          if (this._highlight) {
            li.classList.add('highlight');
          }
          if (this._color !== 'primary') {
            li.classList.add(`color-${this._color}`);
          }
        }

          // Update cached options list reference
          this._options = this.querySelectorAll('.multiselect-option');

          this._updateDisplay();
          
          // Trigger lifecycle hook
          this._trigger('onOptionAdded', { 
            key, 
            text, 
            value, 
            selected,
            disabled,
            extraData 
          });
          
          // Note: Change event is dispatched by _performDisplayUpdate

          return true;
        } catch (error) {
          this._handleError(error, 'addOption');
          return false;
        }
      }

      /**
       * Add multiple options in bulk (optimized for performance)
       * @param {Array<Object>} items - Array of objects to add as options
       * @param {Object} [fieldConfig] - Optional field name mappings
       * @param {string} [fieldConfig.valueField='value'] - Name of the field containing option value
       * @param {string} [fieldConfig.textField='text'] - Name of the field containing option text
       * @param {string} [fieldConfig.selectedField='selected'] - Name of the field containing selected state
       * @param {string} [fieldConfig.disabledField='disabled'] - Name of the field containing disabled state
       * @param {string[]} [fieldConfig.extraDataFields=[]] - Array of field names to include as extra data
       * @returns {number} Number of options successfully added
       * @public
       * @example
       * // Basic usage with default field names
       * multiselect.addOptions([
       *   { value: 'apple', text: 'Apple', selected: false },
       *   { value: 'banana', text: 'Banana', selected: true }
       * ]);
       * 
       * @example
       * // Custom field names
       * multiselect.addOptions(
       *   [
       *     { id: 'user1', name: 'John Doe', active: true, role: 'Admin', email: 'john@example.com' },
       *     { id: 'user2', name: 'Jane Smith', active: false, role: 'User', email: 'jane@example.com' }
       *   ],
       *   {
       *     valueField: 'id',
       *     textField: 'name',
       *     selectedField: 'active',
       *     disabledField: null, // No disabled field
       *     extraDataFields: ['role', 'email'] // Include these as extra data for custom renderer
       *   }
       * );
       */
      addOptions(items, fieldConfig = {}) {
        try {
          // Validate input
          if (!Array.isArray(items)) {
            console.error('addOptions: items must be an array');
            return 0;
          }

          if (items.length === 0) {
            return 0;
          }

          // Apply field configuration (use provided config or instance defaults)
          const valueField = fieldConfig.valueField || this._valueField;
          const textField = fieldConfig.textField || this._textField;
          const selectedField = fieldConfig.selectedField || this._selectedField;
          const disabledField = fieldConfig.disabledField !== undefined ? fieldConfig.disabledField : this._disabledField;
          const extraDataFields = fieldConfig.extraDataFields || this._extraDataFields;

          // Build all elements in memory first (batch DOM operations)
          const itemsToAdd = [];
          const fragment = document.createDocumentFragment();
          const nativeFragment = document.createDocumentFragment();
          let hasSelectedItems = false;

          for (let i = 0; i < items.length; i++) {
            const item = items[i];

            // Extract values using field mappings
            const value = item[valueField];
            const text = item[textField];
            const selected = selectedField ? (item[selectedField] || false) : false;
            const disabled = disabledField ? (item[disabledField] || false) : false;

            // Validate required fields
            if (typeof value !== 'string' || value === '') {
              console.warn(`addOptions: Skipping item at index ${i} - invalid value field`);
              continue;
            }
            if (typeof text !== 'string' || text === '') {
              console.warn(`addOptions: Skipping item at index ${i} - invalid text field`);
              continue;
            }

            // Check if value already exists
            const existingKey = this._findKeyByValue(value);
            if (existingKey) {
              console.warn(`addOptions: Skipping item at index ${i} - value "${value}" already exists`);
              continue;
            }

            // Extract extra data fields
            const extraData = {};
            if (extraDataFields && extraDataFields.length > 0) {
              extraDataFields.forEach(fieldName => {
                if (item.hasOwnProperty(fieldName)) {
                  extraData[fieldName] = item[fieldName];
                }
              });
            }

            // Create native option
            const nativeOption = document.createElement('option');
            nativeOption.value = value;
            nativeOption.textContent = text;
            nativeOption.selected = selected;
            nativeOption.disabled = disabled;

            // Create list item
            const li = document.createElement('li');
            const key = `option-${this._optionIdCounter++}`;
            const index = this._nativeSelect.options.length + itemsToAdd.length;

            li.className = `multiselect-option w-full ${disabled ? 'disabled opacity-50' : ''}`;
            li.dataset.index = index;
            li.dataset.value = value;
            li.dataset.text = text.toLowerCase();
            li.dataset.optionKey = key;
            li.setAttribute('role', 'option');
            li.setAttribute('aria-selected', selected ? 'true' : 'false');
            if (disabled) {
              li.setAttribute('aria-disabled', 'true');
            }

            // Create inner div
            const div = document.createElement('div');
            div.className = `flex items-center gap-3 cursor-pointer w-full ${this._getPaddingClass()} rounded ${disabled ? 'pointer-events-none' : ''}`;

            // Create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = `checkbox ${this._getCheckboxColorClass()} ${this._getCheckboxSizeClass()} pointer-events-none`;
            checkbox.checked = selected;
            checkbox.disabled = disabled;

            // Prepare item data for renderer
            const itemData = {
              value: value,
              text: text,
              selected: selected,
              disabled: disabled,
              index: index,
              ...extraData
            };

            // Render content using custom renderer or default
            const contentHtml = this._renderOptionContent(itemData);

            // Assemble elements - create temporary container to parse HTML without destroying checkbox
            div.appendChild(checkbox);
            
            // Create temporary container to parse HTML
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = contentHtml;
            
            // Move all parsed nodes from temp container to div (preserves checkbox)
            while (tempContainer.firstChild) {
              div.appendChild(tempContainer.firstChild);
            }
            
            li.appendChild(div);

            // Add to fragments
            fragment.appendChild(li);
            nativeFragment.appendChild(nativeOption);

            // Store for later processing (including checkbox reference)
            itemsToAdd.push({
              key,
              value,
              text,
              selected,
              disabled,
              li,
              nativeOption,
              checkbox,
              extraData
            });

            if (selected) {
              hasSelectedItems = true;
            }
          }

          // Batch DOM updates - single reflow
          const ul = this.querySelector('.multiselect-options-list');
          if (!ul) {
            console.error('addOptions: options list not found');
            return 0;
          }

          // Add all items at once
          this._nativeSelect.appendChild(nativeFragment);
          ul.appendChild(fragment);

          // Update internal state
          itemsToAdd.forEach(({ key, value, text, selected, disabled, li, nativeOption, checkbox, extraData }) => {
            // Update value dictionary (including checkbox for caching)
            this._valueDict[key] = {
              value,
              text,
              selected,
              disabled,
              optionEl: li,
              nativeOption,
              checkbox, // Cache checkbox reference for performance
              ...extraData
            };

            // Handle selection state
            if (selected) {
              this._keysSelected[key] = true;
              li.classList.add('selected');
              if (this._highlight) {
                li.classList.add('highlight');
              }
              if (this._color !== 'primary') {
                li.classList.add(`color-${this._color}`);
              }
            }
          });

          // Update cached options list (options were already rendered with correct content)
          this._updateOptionsCache();
          this._updateDisplay();

          // Note: Change event is dispatched by _performDisplayUpdate

          return itemsToAdd.length;
        } catch (error) {
          this._handleError(error, 'addOptions');
          return 0;
        }
      }

      /**
       * Remove an option by value
       * @param {string} value - The value of the option to remove
       * @returns {boolean} - True if option was found and removed
       */
      removeOption(value) {
        try {
          const key = this._findKeyByValue(value);
          if (!key) {
            console.warn(`Option with value "${value}" not found`);
            return false;
          }

          const item = this._valueDict[key];
          
          // No need to remove individual listener - using event delegation on parent

          // Remove from DOM
          item.optionEl.remove();
          item.nativeOption.remove();

          // Remove from selected keys
          if (this._keysSelected[key]) {
            delete this._keysSelected[key];
            this._selectedCount--; // Update count
            this._selectedItemsDirty = true; // Mark cache dirty
          }

          // Remove from value dict
          delete this._valueDict[key];

          // Update cached options list after removal
          this._updateOptionsCache();

          // Update display
          this._updateDisplay();
          
          // Trigger lifecycle hook
          this._trigger('onOptionRemoved', { 
            key, 
            value,
            text: item.text 
          });

          // Note: Change event is dispatched by _performDisplayUpdate

          return true;
        } catch (error) {
          this._handleError(error, 'removeOption');
          return false;
        }
      }

      /**
       * Select an option by value
       * @param {string} value - The value of the option to select
       * @returns {boolean} - True if option was found and selected
       */
      selectByValue(value) {
        const key = this._findKeyByValue(value);
        if (!key) {
          console.warn(`Option with value "${value}" not found`);
          return false;
        }

        if (!this._keysSelected[key]) {
          this._toggleSelection(key);
        }
        return true;
      }

      /**
       * Deselect an option by value
       * @param {string} value - The value of the option to deselect
       * @returns {boolean} - True if option was found and deselected
       */
      deselectByValue(value) {
        const key = this._findKeyByValue(value);
        if (!key) {
          console.warn(`Option with value "${value}" not found`);
          return false;
        }

        if (this._keysSelected[key]) {
          this._toggleSelection(key);
        }
        return true;
      }

      /**
       * Select an option by index
       * @param {number} index - The zero-based index of the option to select
       * @returns {boolean} - True if option was found and selected
       */
      selectByIndex(index) {
        // Find option by index in the current options list
        const options = this.querySelectorAll('.multiselect-option');
        if (index < 0 || index >= options.length) {
          console.warn(`Option at index ${index} not found`);
          return false;
        }

        const optionEl = options[index];
        const key = optionEl.dataset.optionKey;
        
        if (!this._valueDict[key]) {
          console.warn(`Option at index ${index} not found in dictionary`);
          return false;
        }

        if (this._valueDict[key].disabled) {
          console.warn(`Option at index ${index} is disabled`);
          return false;
        }

        if (!this._keysSelected[key]) {
          this._toggleSelection(key);
        }
        return true;
      }

      /**
       * Deselect an option by index
       * @param {number} index - The zero-based index of the option to deselect
       * @returns {boolean} - True if option was found and deselected
       */
      deselectByIndex(index) {
        // Find option by index in the current options list
        const options = this.querySelectorAll('.multiselect-option');
        if (index < 0 || index >= options.length) {
          console.warn(`Option at index ${index} not found`);
          return false;
        }

        const optionEl = options[index];
        const key = optionEl.dataset.optionKey;
        
        if (!this._valueDict[key]) {
          console.warn(`Option at index ${index} not found in dictionary`);
          return false;
        }

        if (this._keysSelected[key]) {
          this._toggleSelection(key);
        }
        return true;
      }

      /**
       * Check if an option exists
       * @param {string} value - The value to check
       * @returns {boolean} - True if option exists
       */
      hasOption(value) {
        return this._findKeyByValue(value) !== null;
      }

      /**
       * Get all options
       * @returns {Array} - Array of option objects
       */
      getAllOptions() {
        return Object.values(this._valueDict).map(item => ({
          value: item.value,
          text: item.text,
          selected: this._keysSelected[this._findKeyByValue(item.value)] || false,
          disabled: item.disabled
        }));
      }

      /**
       * Open the dropdown menu
       * @public
       * @example
       * multiselect.open();
       */
      open() {
        try {
          if (!this._isOpen && !this._disabled && this._dropdown && this._caret && this._triggerBtn) {
            // Close all other open dropdowns
            this._closeOtherDropdowns();
            
            this._isOpen = true;
            this._dropdown.classList.remove('hidden');
            this._caret.style.transform = 'rotate(180deg)';
            this._positionDropdown();
            
            // Update ARIA
            this._triggerBtn.setAttribute('aria-expanded', 'true');
            
            // Dispatch open event
            const openEvent = new CustomEvent('open', {
              bubbles: true,
              cancelable: false
            });
            this.dispatchEvent(openEvent);
          }
        } catch (error) {
          this._handleError(error, 'open');
        }
      }

      /**
       * Close all other multiselect dropdowns
       * @private
       */
      _closeOtherDropdowns() {
        const allSelects = document.querySelectorAll('daisy-multiselect');
        allSelects.forEach(select => {
          if (select !== this && select.isOpen()) {
            select.close();
          }
        });
      }

      /**
       * Close the dropdown menu
       * @public
       * @example
       * multiselect.close();
       */
      close() {
        try {
          if (this._isOpen && this._dropdown && this._caret && this._triggerBtn) {
            this._isOpen = false;
            this._dropdown.classList.add('hidden');
            this._caret.style.transform = 'rotate(0deg)';
            
            // Update ARIA
            this._triggerBtn.setAttribute('aria-expanded', 'false');
            
            // Dispatch close event
            const closeEvent = new CustomEvent('close', {
              bubbles: true,
              cancelable: false
            });
            this.dispatchEvent(closeEvent);
          }
        } catch (error) {
          this._handleError(error, 'close');
        }
      }

      /**
       * Toggle the dropdown open/closed state
       */
      toggle() {
        if (this._isOpen) {
          this.close();
        } else {
          this.open();
        }
      }

      /**
       * Check if dropdown is open
       * @returns {boolean}
       */
      isOpen() {
        return this._isOpen;
      }

      /**
       * Configure advanced options via JavaScript
       * @param {Object} options - Configuration options
       * @param {Function} [options.customRenderer] - Custom renderer function for dropdown options
       * @param {string} [options.valueField='value'] - Field name for option values in addOptions
       * @param {string} [options.textField='text'] - Field name for option text in addOptions
       * @param {string} [options.selectedField='selected'] - Field name for selected state in addOptions
       * @param {string} [options.disabledField='disabled'] - Field name for disabled state in addOptions
       * @param {string[]} [options.extraDataFields=[]] - Array of field names to include as extra data in addOptions
       * @public
       * @example
       * // Configure custom renderer
       * multiselect.configure({
       *   customRenderer: (item) => {
       *     return `
       *       <img src="/icons/${item.value}.png" class="w-6 h-6">
       *       <div>
       *         <div class="font-bold">${item.text}</div>
       *         <div class="text-xs opacity-60">${item.description || ''}</div>
       *       </div>
       *     `;
       *   }
       * });
       * 
       * @example
       * // Configure field mappings for addOptions
       * multiselect.configure({
       *   valueField: 'id',
       *   textField: 'name',
       *   selectedField: 'isActive',
       *   disabledField: 'isDisabled',
       *   extraDataFields: ['email', 'role', 'avatar']
       * });
       */
      configure(options) {
        try {
          if (!options || typeof options !== 'object') {
            console.error('configure: options must be an object');
            return;
          }

          // Set custom renderer
          if (options.customRenderer) {
            if (typeof options.customRenderer !== 'function') {
              console.error('configure: customRenderer must be a function');
              return;
            }
            this._log('Setting custom renderer');
            this._customRenderer = options.customRenderer;
            
            // Re-render all options with the new custom renderer
            this._reRenderAllOptions();
          }

          // Set field mappings for addOptions
          if (options.valueField !== undefined) {
            if (typeof options.valueField !== 'string') {
              console.error('configure: valueField must be a string');
              return;
            }
            this._valueField = options.valueField;
          }

          if (options.textField !== undefined) {
            if (typeof options.textField !== 'string') {
              console.error('configure: textField must be a string');
              return;
            }
            this._textField = options.textField;
          }

          if (options.selectedField !== undefined) {
            if (typeof options.selectedField !== 'string' && options.selectedField !== null) {
              console.error('configure: selectedField must be a string or null');
              return;
            }
            this._selectedField = options.selectedField;
          }

          if (options.disabledField !== undefined) {
            if (typeof options.disabledField !== 'string' && options.disabledField !== null) {
              console.error('configure: disabledField must be a string or null');
              return;
            }
            this._disabledField = options.disabledField;
          }

          if (options.extraDataFields !== undefined) {
            if (!Array.isArray(options.extraDataFields)) {
              console.error('configure: extraDataFields must be an array');
              return;
            }
            this._extraDataFields = options.extraDataFields;
          }
        } catch (error) {
          this._handleError(error, 'configure');
        }
      }

      /**
       * Updates the custom renderer and re-renders all options (private).
       * Use configure() for public API.
       */
      _updateRenderer(renderer) {
        if (renderer !== null && typeof renderer !== 'function') {
          console.error('updateRenderer: renderer must be a function or null');
          return;
        }
        if (this._customRenderer === renderer) {
          this._log('Renderer unchanged, skipping update');
          return;
        }
        this._log('Updating custom renderer');
        this._customRenderer = renderer;
        if (renderer) {
          this._reRenderAllOptions();
        } else {
          this._updateOptionsCache();
        }
      }

      /**
       * Removes the custom renderer and reverts to default rendering (private).
       */
      _removeRenderer() {
        this._updateRenderer(null);
      }

      /**
       * Gets the current custom renderer function (private).
       */
      _getRenderer() {
        return this._customRenderer || null;
      }

      /**
       * Registers a callback for a lifecycle event.
       * @param {string} event - Event name (e.g., 'onSetupComplete', 'onRenderComplete')
       * @param {Function} callback - Callback function to execute
       * @public
       * @example
       * element.on('onSetupComplete', (event) => {
       *   console.log('Setup complete!', event.optionCount);
       * });
       */
      on(event, callback) {
        if (!this._hooks[event]) {
          console.warn(`[MultiSelect] Unknown event: ${event}. Available: ${Object.keys(this._hooks).join(', ')}`);
          return;
        }
        
        if (typeof callback !== 'function') {
          console.error('[MultiSelect] Callback must be a function');
          return;
        }
        
        this._hooks[event].push(callback);
        this._log(`Registered callback for ${event}`);
      }

      /**
       * Removes a callback for a lifecycle event.
       * @param {string} event - Event name
       * @param {Function} callback - Callback function to remove
       * @public
       * @example
       * element.off('onSetupComplete', myCallback);
       */
      off(event, callback) {
        if (!this._hooks[event]) return;
        
        const index = this._hooks[event].indexOf(callback);
        if (index > -1) {
          this._hooks[event].splice(index, 1);
          this._log(`Removed callback for ${event}`);
        }
      }

      /**
       * Triggers all callbacks for an event.
       * @private
       * @param {string} event - Event name
       * @param {Object} data - Data to pass to callbacks
       */
      _trigger(event, data = {}) {
        if (!this._hooks[event]) return;
        
        this._log(`Triggering ${event} with ${this._hooks[event].length} callbacks`);
        
        this._hooks[event].forEach(callback => {
          try {
            callback({ component: this, ...data });
          } catch (error) {
            console.error(`[MultiSelect] Error in ${event} callback:`, error);
          }
        });
      }

      /**
       * Get the enabled state
       * @returns {boolean} true if enabled, false if disabled
       */
      get enabled() {
        return !this._disabled;
      }

      /**
       * Set the enabled state
       * @param {boolean} value - true to enable, false to disable
       */
      set enabled(value) {
        const shouldEnable = !!value;
        
        if (shouldEnable) {
          // Enable the component
          this._disabled = false;
          this.removeAttribute('disabled');
          this._triggerBtn.disabled = false;
          this._applyUserAttributes(); // Reapply to update classes
          
          // Show clear button if it exists
          const clearBtn = this.querySelector('.multiselect-clear-btn');
          if (clearBtn && this._showClear) {
            clearBtn.classList.remove('hidden');
          }
        } else {
          // Disable the component
          this._disabled = true;
          this.setAttribute('disabled', '');
          this._triggerBtn.disabled = true;
          this._applyUserAttributes(); // Reapply to update classes
          
          // Close dropdown if open
          if (this._isOpen) {
            this.close();
          }
          
          // Hide clear button
          const clearBtn = this.querySelector('.multiselect-clear-btn');
          if (clearBtn) {
            clearBtn.classList.add('hidden');
          }
        }
      }

      /**
       * Get the visible state
       * @returns {boolean} true if visible, false if hidden
       */
      get visible() {
        return this.style.display !== 'none';
      }

      /**
       * Set the visible state
       * @param {boolean} value - true to show, false to hide
       */
      set visible(value) {
        const shouldShow = !!value;
        
        if (shouldShow) {
          // Show the component
          this.style.display = '';
        } else {
          // Hide the component
          this.style.display = 'none';
          
          // Close dropdown if open
          if (this._isOpen) {
            this.close();
          }
        }
      }

      /**
       * Check if no selections are made
       * @returns {boolean} true if nothing is selected, false if there are selections
       */
      isBlank() {
        return this._selectedCount === 0;
      }

      /**
       * Get the required state
       * @returns {boolean}
       */
      get required() {
        return this._required;
      }

      /**
       * Set the required state
       * @param {boolean} value
       */
      set required(value) {
        this._required = !!value;
        
        if (this._required) {
          this.setAttribute('required', '');
        } else {
          this.removeAttribute('required');
        }
        
        // Update border color when required state changes
        this._updateBorderColor();
      }

      /**
       * Get the current value (selected values as array)
       * @returns {Array<string>} Array of selected values
       */
      get value() {
        return this.getSelectedValues();
      }

      /**
       * Set the value (select items by values)
       * @param {Array<string>|string} value - Array of values or delimiter-separated string
       */
      set value(value) {
        // Clear all current selections
        this.clearSelected();
        
        // Parse input
        let values = [];
        if (Array.isArray(value)) {
          values = value;
        } else if (typeof value === 'string') {
          values = value.split(this._delimiter).map(v => v.trim()).filter(v => v);
        }
        
        // Select each value
        values.forEach(val => {
          this.selectByValue(val);
        });
      }

      /**
       * Get the current delimiter
       * @returns {string} The delimiter character(s) used for value strings
       */
      get delimiter() {
        return this._delimiter;
      }

      /**
       * Set the delimiter for value strings
       * @param {string} value - The delimiter character(s) to use (default: ';')
       */
      set delimiter(value) {
        if (typeof value === 'string' && value.length > 0) {
          this._delimiter = value;
          this.setAttribute('delimiter', value);
        } else {
          console.warn('delimiter must be a non-empty string');
        }
      }

      /**
       * Get or set the checked color (for the checkboxes)
       */
      get checkedColor() {
        return this._color;
      }

      set checkedColor(value) {
        if (typeof value === 'string' && value.length > 0) {
          this._color = value;
          this.setAttribute('checked-color', value);
          this._applyCheckedColorToOptions();
          this._applyUserAttributes();
        } else {
          console.warn('checkedColor must be a non-empty string');
        }
      }

      /**
       * Get the current border color
       * @returns {string|null} The border color (named color, hex value, or custom value) or null if no border color is set
       */
      get borderColor() {
        if (!this._triggerBtn) return null;
        
        const borderColors = ['error', 'success', 'primary', 'secondary', 'accent', 'info', 'warning', 'neutral'];
        
        // Check for named color classes
        for (const color of borderColors) {
          if (this._triggerBtn.classList.contains(`border-${color}`)) {
            return color;
          }
        }
        
        // Check for custom border color (hex or other)
        const customColor = this._triggerBtn.style.borderColor;
        return customColor || null;
      }

      /**
       * Set the border color
       * @param {string|null} color - The border color to apply:
       *   - Named colors: 'error', 'success', 'primary', 'secondary', 'accent', 'info', 'warning', 'neutral'
       *   - Hex colors: '#ff0000', '#00ff00', etc.
       *   - null to remove all border colors
       */
      set borderColor(color) {
        if (!this._triggerBtn) return;
        
        const borderColors = ['error', 'success', 'primary', 'secondary', 'accent', 'info', 'warning', 'neutral'];
        
        // Remove all existing border color classes
        borderColors.forEach(c => {
          this._triggerBtn.classList.remove(`border-${c}`);
        });
        
        // Clear inline border color
        this._triggerBtn.style.borderColor = '';
        
        if (!color) {
          return; // No color to apply
        }
        
        // Check if it's a named DaisyUI color
        if (borderColors.includes(color)) {
          this._triggerBtn.classList.add(`border-${color}`);
        } 
        // Check if it's a hex color (3 or 6 digit)
        else if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color)) {
          this._triggerBtn.style.borderColor = color;
        }
        // Otherwise, try to apply it as a custom color value
        else {
          this._triggerBtn.style.borderColor = color;
        }
      }

      /**
       * Get chip-style mode
       * @returns {boolean} true if chip-style mode is enabled
       */
      get chipStyle() {
        return this._chipStyle;
      }

      /**
       * Set chip-style mode
       * @param {boolean} value - true to enable chip-style, false for comma-separated
       */
      set chipStyle(value) {
        const shouldEnable = !!value;
        
        if (shouldEnable !== this._chipStyle) {
          this._chipStyle = shouldEnable;
          
          if (this._chipStyle) {
            this.setAttribute('chip-style', '');
          } else {
            this.removeAttribute('chip-style');
          }
          
          // Re-render display with new mode
          this._updateDisplay();
        }
      }

      /**
       * Helper method to find key by value
       * @private
       */
      _findKeyByValue(value) {
        for (let key in this._valueDict) {
          if (this._valueDict[key].value === value) {
            return key;
          }
        }
        return null;
      }

      /**
       * Updates the cached reference to option elements.
       * Lightweight operation - just queries DOM.
       * @private
       */
      _updateOptionsCache() {
        this._options = this.querySelectorAll('.multiselect-option');
        this._log(`Options cache updated: ${this._options.length} options`);
      }

      /**
       * Re-renders all options with the current custom renderer.
       * Expensive operation - manipulates DOM for each option.
       * @private
       */
      _reRenderAllOptions() {
        this._log('Re-rendering all options with custom renderer...');
        this._updateOptionsCache();
        
        // Trigger lifecycle hook at start
        this._trigger('onRenderStart', { 
          optionCount: this._options.length 
        });
        
        if (!this._customRenderer) {
          this._log('No custom renderer set, skipping re-render');
          return;
        }
        
        let successCount = 0;
        let errorCount = 0;
        
        this._options.forEach((option, index) => {
          try {
            const key = option.dataset.optionKey;
            if (!key || !this._valueDict[key]) {
              this._log(`Option ${index} missing key or data, skipping`);
              return;
            }
            
            const itemData = this._valueDict[key];
            const div = option.querySelector('div.flex.items-center');
            
            if (!div) {
              console.error(`[MultiSelect] Option ${index} (${key}) missing container div`);
              errorCount++;
              return;
            }
            
            const checkbox = div.querySelector('input[type="checkbox"]');
            if (!checkbox) {
              console.error(`[MultiSelect] Option ${index} (${key}) missing checkbox`);
              errorCount++;
              return;
            }
            
            // Find all nodes that are NOT the checkbox
            const nodesToRemove = [];
            div.childNodes.forEach(node => {
              if (node !== checkbox) {
                nodesToRemove.push(node);
              }
            });
            
            // Remove all non-checkbox nodes
            nodesToRemove.forEach(node => {
              try {
                div.removeChild(node);
              } catch (error) {
                console.warn(`[MultiSelect] Error removing node from option ${key}:`, error);
              }
            });
            
            // Render new content with custom renderer
            let contentHtml;
            try {
              contentHtml = this._renderOptionContent(itemData);
              
              if (typeof contentHtml !== 'string') {
                throw new Error(`Custom renderer must return a string, got ${typeof contentHtml}`);
              }
              
              if (!contentHtml.trim()) {
                throw new Error('Custom renderer returned empty string');
              }
              
            } catch (renderError) {
              console.error(`[MultiSelect] Custom renderer error for option "${key}":`, renderError);
              
              // Fall back to default rendering
              contentHtml = `<span class="${this._getTextSizeClass()}">${this._escapeHtml(itemData.text)}</span>`;
              
              // Mark option as having error
              option.classList.add('multiselect-render-error');
              option.title = `Rendering error: ${renderError.message}`;
              errorCount++;
            }
            
            // Safely insert new content
            try {
              const tempContainer = document.createElement('div');
              tempContainer.innerHTML = contentHtml;
              
              if (!tempContainer.firstChild) {
                throw new Error('Generated HTML produced no DOM nodes');
              }
              
              // Append new content after checkbox
              while (tempContainer.firstChild) {
                div.appendChild(tempContainer.firstChild);
              }
              
              successCount++;
              
            } catch (insertError) {
              console.error(`[MultiSelect] Error inserting content for option "${key}":`, insertError);
              
              // Last resort: insert plain text
              const span = document.createElement('span');
              span.className = this._getTextSizeClass();
              span.textContent = itemData.text;
              div.appendChild(span);
              
              errorCount++;
            }
            
          } catch (error) {
            console.error(`[MultiSelect] Unexpected error processing option ${index}:`, error);
            errorCount++;
          }
        });
        
        this._log(`Re-render complete: ${successCount} succeeded, ${errorCount} failed`);
        
        if (errorCount > 0) {
          console.warn(`[MultiSelect] ${errorCount} options failed to render correctly`);
        }
        
        this._trigger('onRenderComplete', { 
          optionCount: this._options.length,
          successCount,
          errorCount 
        });
      }

      /**
       * Legacy method for backward compatibility.
       * Calls _reRenderAllOptions() if custom renderer exists, otherwise just updates cache.
       * @deprecated Use _updateOptionsCache() or _reRenderAllOptions() directly for clarity.
       * @private
       */
      _refreshOptions() {
        if (this._customRenderer) {
          this._reRenderAllOptions();
        } else {
          this._updateOptionsCache();
        }
      }

      _filterOptions(searchTerm) {
        const lowerSearch = searchTerm.toLowerCase().trim();
        const optionsList = this.querySelector('.multiselect-options-list');
        const noResults = this.querySelector('.multiselect-no-results');
        let visibleCount = 0;

        // If filtering, temporarily disable virtual scrolling to show all matching items
        const wasVirtualScrollActive = this._virtualScrollEnabled;
        if (lowerSearch !== '') {
          this._disableVirtualScroll();
        }

        this._options.forEach(option => {
          const text = option.dataset.text;
          if (text.includes(lowerSearch)) {
            option.style.display = '';
            visibleCount++;
          } else {
            option.style.display = 'none';
          }
        });

        // If search is cleared and virtual scroll was active, re-enable it
        if (lowerSearch === '' && wasVirtualScrollActive) {
          this._enableVirtualScroll();
        }

        // Show/hide no results message
        if (visibleCount === 0) {
          noResults.classList.remove('hidden');
        } else {
          noResults.classList.add('hidden');
        }
      }

      _navigateOptions(direction) {
        const visibleOptions = Array.from(this._options).filter(opt => opt.style.display !== 'none' && !opt.classList.contains('disabled'));
        if (visibleOptions.length === 0) return;

        let currentIndex = visibleOptions.findIndex(opt => opt.classList.contains('focused'));
        
        // Remove current focus
        if (currentIndex >= 0) {
          visibleOptions[currentIndex].classList.remove('focused');
        }

        // Calculate new index
        if (currentIndex === -1) {
          currentIndex = direction > 0 ? 0 : visibleOptions.length - 1;
        } else {
          currentIndex = (currentIndex + direction + visibleOptions.length) % visibleOptions.length;
        }

        // Add focus to new option
        const newOption = visibleOptions[currentIndex];
        newOption.classList.add('focused');
        newOption.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }

      _selectFocusedOption() {
        const focusedOption = Array.from(this._options).find(opt => opt.classList.contains('focused'));
        if (focusedOption) {
          const key = focusedOption.dataset.optionKey;
          this._toggleSelection(key);
          
          // Note: Change event is dispatched by _performDisplayUpdate
        }
      }

      _scheduleMaxSelectionsUpdate() {
        // Debounce max selections state updates
        if (this._maxSelectionsUpdatePending) return;
        
        this._maxSelectionsUpdatePending = true;
        requestAnimationFrame(() => {
          this._maxSelectionsUpdatePending = false;
          this._updateMaxSelectionsState();
        });
      }

      _updateMaxSelectionsState() {
        if (this._maxSelections <= 0) return;

        const limitReached = this._selectedCount >= this._maxSelections;

        // Batch class operations for better performance
        const fragment = document.createDocumentFragment();
        
        this._options.forEach(option => {
          const key = option.dataset.optionKey;
          const isSelected = this._keysSelected[key];
          const item = this._valueDict[key];

          if (item && !item.disabled && !isSelected) {
            const classList = option.classList;
            if (limitReached) {
              classList.add('opacity-50', 'pointer-events-none');
            } else {
              classList.remove('opacity-50', 'pointer-events-none');
            }
          }
        });
      }

      /**
       * Destroy the component and clean up all resources
       * Call this method before removing the element from the DOM
       * @public
       */
      destroy() {
        // Remove all event handlers via AbortController
        this._removeEventHandlers();
        
        // Clear all data structures
        this._keysSelected = null;
        this._valueDict = null;
        this._allOptions = null;
        this._checkboxCache = null;
        
        // Remove hex color styles if they exist
        if (this._hexColorStyleElement && this._hexColorStyleElement.parentNode) {
          this._hexColorStyleElement.remove();
          this._hexColorStyleElement = null;
        }
        
        // Clear all DOM references
        this._triggerBtn = null;
        this._dropdown = null;
        this._display = null;
        this._caret = null;
        this._nativeSelect = null;
        this._options = null;
        this._statusElement = null;
        
        // Clear bound methods
        this._toggleBound = null;
        this._optionClickBound = null;
        this._keydownBound = null;
        this._virtualScrollBound = null;
        
        // Clear cached data
        this._removeSvgCache = null;
        this._updateDisplayPending = false;
        
        // Clear AbortController
        this._abortController = null;
        
        // Clear component HTML
        this.innerHTML = '';
        
        // Mark as destroyed for debugging
        this._destroyed = true;
      }
    }
  // Register the custom element
  customElements.define('daisy-multiselect', DaisyMultiSelect);


