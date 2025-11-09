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

## Usage Examples

### Basic Multi-Select
Select multiple options from a static list of fruits.
```html
<daisy-multiselect placeholder="Select your favorite fruits">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="cherry">Cherry</option>
</daisy-multiselect>
```

### Pre-Selected Options
Set default selections by adding `selected` to option tags.
```html
<daisy-multiselect placeholder="Select programming languages">
  <option value="js" selected>JavaScript</option>
  <option value="py" selected>Python</option>
  <option value="java">Java</option>
</daisy-multiselect>
```

### Chip Style Display
Display selected items as removable chips/badges.
```html
<daisy-multiselect placeholder="Select your tech stack" chip-style checked-color="primary">
  <option value="react" selected>React</option>
  <option value="vue" selected>Vue</option>
  <option value="angular">Angular</option>
</daisy-multiselect>
```

### Highlight Selected Items
Color the entire chip/item background for selected values.
```html
<daisy-multiselect placeholder="Select frameworks" checked-color="primary" highlight>
  <option value="react" selected>React</option>
  <option value="vue">Vue</option>
  <option value="angular">Angular</option>
</daisy-multiselect>
```

### Input Colors and Sizes
Customize border and input colors, and set component size.
```html
<daisy-multiselect placeholder="Large Primary Input, Accent Checkboxes" size="lg" input-color="primary" checked-color="accent">
  <option value="1">Option 1</option>
  <option value="2" selected>Option 2</option>
</daisy-multiselect>
```

### Disabled Options
Disable individual options to prevent selection.
```html
<daisy-multiselect placeholder="Select your skills" checked-color="primary">
  <option value="js" selected>JavaScript</option>
  <option value="react" disabled>React (Coming Soon)</option>
  <option value="vue">Vue</option>
</daisy-multiselect>
```

### Custom Renderer with Icons
Render options with rich content like icons or avatars.
```js
const ms = document.getElementById('features-select');
ms.configure({
  customRenderer: (item) =>
    `<svg class="w-5 h-5 mr-2">${item.icon}</svg>
    <span>${item.text}</span>
    <span class="badge">${item.category}</span>`
});
```

### Select All / Deselect All Buttons
Enable 'Select All' and 'Clear' actions in dropdown header.
```html
<daisy-multiselect show-select-all placeholder="Select programming languages">
  <option value="js">JavaScript</option>
  <option value="py">Python</option>
</daisy-multiselect>
```

### Max Selections Limit
Restrict user to a maximum of N selectable options.
```html
<daisy-multiselect max-selections="3" placeholder="Select up to 3 favorites">
  <option value="pizza">Pizza</option>
  <option value="burger">Burger</option>
  <option value="sushi">Sushi</option>
</daisy-multiselect>
```

### Event Listener
Listen for selection changes and access selected values.
```js
const ms = document.getElementById('change-event-select');
ms.addEventListener('change', (e) => {
  console.log(e.detail.values); // Array of selected values
  console.log(e.detail.valueString); // Delimited string of selected values
});
```

### Runtime Option Management
Add, remove, or select options programmatically.
```js
const ms = document.getElementById('runtime-select');
ms.addOption("peach", "Peach");
ms.selectByValue("initial3");
ms.clearSelected();
```

### Virtual Scrolling for Large Datasets
Render only visible options for high performance with long lists.
```html
<daisy-multiselect virtual-scroll searchable placeholder="Select from 100 items">
  <!-- options 1 to 100 generated dynamically -->
</daisy-multiselect>
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

See the earlier text for detailed usage examples of each method.

---

## Events

| Event         | Description                       |
|---------------|---------------------------------|
| change        | Fired when selection changes     |
| error         | Fired on internal error          |
| open/close    | Fired when dropdown is opened/closed |
| onSetupStart/onSetupComplete | Lifecycle hooks       |

---

## Custom Rendering

Integrate icons, badges, descriptions, or fully custom templates using `configure`:

```js
multiselect.configure({
  customRenderer: item => `
    <div class="flex items-center gap-2">
      <img src="icons/${item.value}.svg" class="w-5 h-5" />
      <span>${item.text}</span>
      <span class="text-xs opacity-60">${item.description || ''}</span>
    </div>
  `,
  valueField: 'id',
  textField: 'name',
  selectedField: 'isActive',
  extraDataFields: ['description']
});
```

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
