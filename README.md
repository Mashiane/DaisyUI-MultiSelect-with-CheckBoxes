# Daisy Multi-Select Component

Daisy Multi-Select is a highly customizable, feature-rich dropdown component inspired by DaisyUI and built with a focus on performance, accessibility, and developer flexibility. It supports native select integration, advanced styling, chip-based or comma-separated display, and a full public API for dynamic option management and custom rendering.

---

## Features

- DaisyUI-inspired design (auto-injects styles; overrides DaisyUI menu-active states globally for unified look)
- Chip-style or comma-separated multi-value display (dynamic switching)
- Searchable options with instant filtering and microtask-batched DOM updates for smooth UI performance
- Virtual scrolling support for large datasets (>50 options)
- Custom renderer API for fully controlling option presentation, with support for icons, descriptions, and badges
- Lifecycle hooks, event bubbling, and robust error handling for easy integration
- Keyboard navigation, select-all/deselect-all, and clear-selection UX enhancements
- Support for custom color schemes, sizes (xs-xl), border validation, and disabled/required states
- Performance optimizations: GPU acceleration, CSS containment, single global event handlers
- Fully accessible with ARIA attributes and native select fallback

---

## Installation

Include Daisy Multi-Select in your project by downloading or importing `daisy-multiselect.js`:

```html
<!-- Daisy Multi-Select requires DaisyUI for its styling base -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui/dist/full.css">
<script src="daisy-multiselect.js"></script>
```

Register the component automatically:

```js
// Registration occurs at load: <daisy-multiselect> becomes usable immediately.
customElements.define('daisy-multiselect', DaisyMultiSelect);
```

No additional setup needed. The component auto-injects its required styles if not present.

---

## Unique Usage Examples

### 1. Basic Multi-Select
Select multiple options from a static list of fruits.
```html
<daisy-multiselect placeholder="Select your favorite fruits">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="cherry">Cherry</option>
</daisy-multiselect>
```

### 2. Pre-Selected Options
Set default selections by adding `selected` attribute.
```html
<daisy-multiselect placeholder="Select programming languages">
  <option value="js" selected>JavaScript</option>
  <option value="py" selected>Python</option>
  <option value="java">Java</option>
</daisy-multiselect>
```

### 3. Chip Style Display
Display selected items as removable chips/badges with close buttons.
```html
<daisy-multiselect placeholder="Select your tech stack" chip-style checked-color="primary">
  <option value="react" selected>React</option>
  <option value="vue" selected>Vue</option>
  <option value="angular">Angular</option>
</daisy-multiselect>
```

### 4. Highlight Selected Items
Color the entire chip or item background for selected values.
```html
<daisy-multiselect placeholder="Select frameworks" checked-color="primary" highlight>
  <option value="react" selected>React</option>
  <option value="vue">Vue</option>
  <option value="angular">Angular</option>
</daisy-multiselect>
```

### 5. Input Colors and Sizes
Customize the input field colors and sizes.
```html
<daisy-multiselect placeholder="Large Primary Input, Accent Checkboxes" size="lg" input-color="primary" checked-color="accent">
  <option value="1">Option 1</option>
  <option value="2" selected>Option 2</option>
</daisy-multiselect>
```

### 6. Disabled Options
Disable certain options in the dropdown.
```html
<daisy-multiselect placeholder="Select your skills" checked-color="primary">
  <option value="js" selected>JavaScript</option>
  <option value="react" disabled>React (Coming Soon)</option>
  <option value="vue">Vue</option>
</daisy-multiselect>
```

### 7. Checkbox Colors
Use DaisyUI color names or HEX codes for checkbox colors.
```html
<daisy-multiselect checked-color="success">
  <option value="item1">Item 1</option>
  <option value="item2" selected>Item 2</option>
</daisy-multiselect>
```

### 8. Chip Text Color
Customize the text color inside the chips.
```html
<daisy-multiselect chip-text-color="#ff0" chip-style checked-color="error">
  <option value="alert" selected>Alert</option>
  <option value="info">Info</option>
</daisy-multiselect>
```

### 9. Runtime Option Management
Add, remove, select, and clear options programmatically.
```js
const multiselect = document.getElementById('runtime-select');
multiselect.addOption('peach', 'Peach');
multiselect.selectByValue('peach');
multiselect.removeOption('peach');
multiselect.clearSelected();
```

### 10. Searchable Dropdown
Enable search functionality.
```html
<daisy-multiselect searchable placeholder="Search fruits">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="cherry">Cherry</option>
</daisy-multiselect>
```

### 11. Select All / Clear Buttons
Show buttons for selecting/deselecting all options.
```html
<daisy-multiselect show-select-all placeholder="Select all languages">
  <option value="js">JavaScript</option>
  <option value="py">Python</option>
</daisy-multiselect>
```

### 12. Max Selections Limit
Limit the number of selectable options.
```html
<daisy-multiselect max-selections="3" placeholder="Choose up to 3 toppings">
  <option value="pepperoni">Pepperoni</option>
  <option value="mushroom">Mushroom</option>
  <option value="onion">Onion</option>
</daisy-multiselect>
```

### 13. Virtual Scrolling
Enable performance optimization for large lists.
```html
<daisy-multiselect virtual-scroll searchable placeholder="Select from a large list">
  <!-- 100+ options here dynamically generated -->
</daisy-multiselect>
```

### 14. Custom Renderer with Data Attributes
Use data attributes to enrich options and customize their render.
```html
<daisy-multiselect placeholder="Select your contacts" chip-style>
  <option value="john" data-avatar-url="avatars/john.png" data-position="Manager">John Doe</option>
  <option value="jane" data-avatar-url="avatars/jane.png" data-position="Developer">Jane Smith</option>
</daisy-multiselect>
```

```js
multiselect.configure({
  customRenderer: item => `
    <div class="flex gap-2 items-center">
      <img src="${item.extra.avatarUrl}" alt="avatar" class="w-5 h-5 rounded-full" />
      <div>
        <div>${item.text}</div>
        <div class="text-xs text-gray-500">${item.extra.position}</div>
      </div>
    </div>
  `,
  extraDataFields: ['avatarUrl', 'position']
});
```

---

## Attributes

| Attribute                | Type     | Description                                              | Default Value         |
|--------------------------|----------|----------------------------------------------------------|----------------------|
| placeholder              | string   | Placeholder text in input                                | "Select options..."  |
| searchable               | boolean  | Enables search input                                     | false                |
| show-select-all          | boolean  | Shows select-all/deselect-all buttons                    | false                |
| max-selections           | number   | Maximum selections allowed                               | 0 (unlimited)        |
| checked-color            | string   | Checkbox color (DaisyUI color name or hex)               | "primary"            |
| size                     | enum     | DaisyUI size: xs, sm, md, lg, xl                         | "md"                 |
| highlight                | boolean  | Highlights selected chips/options                        | false                |
| required                 | boolean  | Marks component as required                              | false                |
| disabled                 | boolean  | Disables entire component                                | false                |
| virtual-scroll           | boolean  | Enables virtual scrolling for large lists                | false                |
| virtual-scroll-threshold | number   | Threshold to auto-enable virtual scroll                  | 50                   |
| delimiter                | string   | Delimiter for values                                     | ","                  |
| hide-clear               | boolean  | Hides clear button                                       | false                |
| chip-style               | boolean  | Chip-style display (default: enabled)                    | true                 |
| name                     | string   | Name for native select for forms                         | ""                   |
| class, style             | string   | Custom class/style for host element                      | ""                   |
| single-select            | boolean  | Restrict to single selection                             | false                |
| input-color              | string   | DaisyUI color for input background                       | unset (DaisyUI base) |
| chip-text-color          | string   | Custom text color for chips                              | unset (auto)         |

---

## Public Methods & Examples

- `getSelectedValues()`: Returns array of selected values.
- `getSelectedTexts()`: Returns array of selected display texts.
- `selectAll()`: Selects all enabled options.
- `clearSelected()`: Deselects all options.
- `addOption(value, text, selected = false, disabled = false, extraData = {})`: Adds a new option dynamically.
- `addOptions(itemsArray, fieldConfig = {})`: Adds multiple options quickly with field mapping.
- `removeOption(value)`: Removes an option by value.
- `configure(options)`: Set custom renderer, value/text mapping, and more.
- `open() / close() / toggle()`: Control dropdown visibility.
- `isOpen()`: Returns boolean: is dropdown open.
- `destroy()`: Call before removing from DOM to clean up.
- `selectByValue(value)`: Select an option by value.
- `deselectByValue(value)`: Deselect an option by value.
- `selectByIndex(index)`: Select option by index.
- `deselectByIndex(index)`: Deselect option by index.
- `hasOption(value)`: Check if an option exists.
- `getAllOptions()`: Get all option objects.
- Setters/getters for properties like `value`, `enabled`, `required`, `delimiter`, `checkedColor`, `borderColor`, `chipStyle`, and `visible`.
- `on(event, callback)`: Register lifecycle event callback.
- `off(event, callback)`: Unregister lifecycle event callback.

---

## Events

| Event         | Description                       |
|---------------|---------------------------------|
| change        | Fired when selection changes     |
| error         | Fired on internal error          |
| open/close    | Fired when dropdown is opened/closed |
| onSetupStart/onSetupComplete | Lifecycle hooks       |

---

## License, Credits, Compatibility

- **License**: MIT (Free for commercial and personal use)
- **Credits**: Inspired by DaisyUI and Choices.js; original by [Your Name/Org Here]
- **Compatibility**: Modern browsers (Chromium, Firefox, Safari, Edge). No dependencies except DaisyUI for base styles.

---

## Contributing

PRs, bug reports, feature suggestions, and UX improvements are always welcome. Please read the CONTRIBUTING.md before submission.

---

Please save this content as `README.md` in your project root to have full documentation.
