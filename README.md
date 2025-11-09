
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

## Usage

Add Daisy Multi-Select directly to your HTML:

```html
<daisy-multiselect
  placeholder="Select options..."
  searchable
  show-select-all
  max-selections="3"
  size="md"
  checked-color="#3b82f6"
  highlight
>
  <option value="apple">Apple</option>
  <option value="banana" selected>Banana</option>
  <option value="mango" disabled>Mango</option>
  <option value="orange">Orange</option>
</daisy-multiselect>
```

### Basic Example

```html
<daisy-multiselect placeholder="Choose fruits" searchable show-select-all>
  <option value="apple">Apple</option>
  <option value="banana" selected>Banana</option>
  <option value="mango">Mango</option>
</daisy-multiselect>
```

### Advanced Example (Chip-style, Color Customization)

```html
<daisy-multiselect
  placeholder="Tags"
  highlight
  size="lg"
  checked-color="#ea580c"
  required
>
  <option value="urgent" selected>Urgent</option>
  <option value="review">Needs Review</option>
  <option value="archive" disabled>Archive</option>
</daisy-multiselect>
```

---

## Attributes

| Attribute                  | Description                                          | Example                            |
|----------------------------|------------------------------------------------------|------------------------------------|
| placeholder                | Placeholder text                                     | `"Choose tags"`                    |
| searchable                 | Enables search input                                 | `searchable`                       |
| show-select-all            | Shows select-all/deselect-all buttons                | `show-select-all`                  |
| max-selections             | Set maximum selections allowed                       | `max-selections="3"`               |
| checked-color              | Checkbox color (named or hex)                        | `checked-color="#2563eb"`          |
| size                       | DaisyUI size: xs, sm, md, lg, xl                     | `size="md"`                        |
| highlight                  | Highlights selected options                          | `highlight`                        |
| required                   | Marks selectable as required                         | `required`                         |
| disabled                   | Disables input                                       | `disabled`                         |
| virtual-scroll             | Enables virtual scrolling for large lists            | `virtual-scroll`                   |
| virtual-scroll-threshold   | Threshold for enabling virtual scroll                | `virtual-scroll-threshold="80"`    |
| delimiter                  | Value delimiter (default `,`)                        | `delimiter=";"`                    |
| hide-clear                 | Hides clear button                                   | `hide-clear`                       |
| chip-style                 | Chip-style display (default: enabled)                | `chip-style` or `no-chip-style`    |
| name                       | Native select element name                           | `name="mytags"`                    |
| class, style               | Custom classes/styles for host element               | `class="custom-select"`            |
| single-select              | Restrict to single selection                         | `single-select`                    |
| input-color                | DaisyUI color for input background                   | `input-color="info"`               |
| chip-text-color            | Custom text color for chips                          | `chip-text-color="#eee"`           |

---

## Public Methods & Examples

### getSelectedValues
Returns array of selected values.
```js
const values = multiselect.getSelectedValues();
```

### getSelectedTexts
Returns array of selected display texts.
```js
const texts = multiselect.getSelectedTexts();
```

### selectAll
Selects all enabled options.
```js
multiselect.selectAll();
```

### clearSelected
Deselects all options.
```js
multiselect.clearSelected();
```

### addOption(value, text, selected = false, disabled = false, extraData = {})
Adds a new option dynamically.
```js
multiselect.addOption("peach", "Peach");
multiselect.addOption("pear", "Pear", true, false, { description: "Green fruit" });
```

### addOptions(itemsArray, fieldConfig = {})
Adds multiple options quickly with field mapping.
```js
multiselect.addOptions([
  { id: "cherry", name: "Cherry", active: true, description: "Red fruit" },
  { id: "plum", name: "Plum", active: false }
], {
  valueField: "id",
  textField: "name",
  selectedField: "active",
  extraDataFields: ["description"]
});
```

### removeOption(value)
Removes an option by value.
```js
multiselect.removeOption("peach");
```

### configure(options)
Set custom renderer, value/text mapping, and more.
```js
multiselect.configure({
  customRenderer: item => `<b>${item.text}</b>`,
  valueField: "myValue",
  textField: "label",
  selectedField: "chosen",
  extraDataFields: ["note"]
});
```

### open(), close(), toggle()
Control dropdown visibility.
```js
multiselect.open();
multiselect.close();
multiselect.toggle();
```

### isOpen
Returns boolean: is dropdown open.
```js
const open = multiselect.isOpen();
```

### destroy()
Call before removing from DOM to clean up.
```js
multiselect.destroy();
```

### selectByValue(value)
Select an option by value.
```js
multiselect.selectByValue("apple");
```

### deselectByValue(value)
Deselect an option by value.
```js
multiselect.deselectByValue("apple");
```

### selectByIndex(index)
Select option by index.
```js
multiselect.selectByIndex(1);
```

### deselectByIndex(index)
Deselect option by index.
```js
multiselect.deselectByIndex(0);
```

### hasOption(value)
Check if an option exists.
```js
const exists = multiselect.hasOption("apple");
```

### getAllOptions()
Get all option objects.
```js
const allOptions = multiselect.getAllOptions();
```

### set value(Array|string)
Set selected values.
```js
multiselect.value = ["apple", "pear"];
```

### get value()
Get selected values (array).
```js
const vals = multiselect.value;
```

### set enabled(true|false)
Enable or disable the component.
```js
multiselect.enabled = false;
```

### get enabled()
Returns whether the component is enabled.
```js
const isEnabled = multiselect.enabled;
```

### set required(true|false)
Set required state.
```js
multiselect.required = true;
```

### get required()
Returns required state.
```js
const isRequired = multiselect.required;
```

### set delimiter(string)
Set the delimiter for values.
```js
multiselect.delimiter = ";";
```

### get delimiter()
Get the current value delimiter.
```js
const delimiter = multiselect.delimiter;
```

### set checkedColor(string)
Set the checked color for checkboxes.
```js
multiselect.checkedColor = "#ff6600";
```

### get checkedColor()
Get the current checked color.
```js
const color = multiselect.checkedColor;
```

### set borderColor(string|null)
Set border color (named or hex).
```js
multiselect.borderColor = "primary";
multiselect.borderColor = "#caf";
multiselect.borderColor = null;
```

### get borderColor()
Get border color.
```js
const color = multiselect.borderColor;
```

### set chipStyle(true|false)
Toggle chip-style display.
```js
multiselect.chipStyle = true;
```

### get chipStyle()
Returns chip-style mode.
```js
const isChipStyle = multiselect.chipStyle;
```

### get visible() / set visible(true|false)
Component visibility.
```js
multiselect.visible = false;
```

### on(event, callback)
Register lifecycle event callback.
```js
multiselect.on("onSetupComplete", e => console.log("Ready!", e));
```

### off(event, callback)
Unregister lifecycle event callback.
```js
multiselect.off("onSetupComplete", myCallback);
```

---

## Events

| Event         | Description                       |
|---------------|-----------------------------------|
| change        | Fired when selection changes      |
| error         | Fired on internal error           |
| open/close    | Fired when dropdown is opened/closed |
| onSetupStart/onSetupComplete | Lifecycle hooks    |

**Usage Example:**
```js
const multiselect = document.querySelector('daisy-multiselect');
multiselect.onchange = (e) => {
    console.log(e.detail.values); // Selected values
};
```

---

## Custom Rendering

Integrate icons, badges, descriptions or fully custom templates using `configure`:

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

You can also remap option fields for bulk data integration from external sources.

---

## Styling, Accessibility & UX

- Auto-injected CSS isolates the component layout from external changes.
- DaisyUI theme colors: primary, secondary, accent, success, warning, error, info, neutral, or any custom HEX.
- Responsive, with chip display growing vertically and selectable by keyboard alone for full accessibility.
- ARIA attributes, hidden native `<select>` for fallback.
- Performance: GPU acceleration, CSS containment, requestAnimationFrame batching, microtask updates.

---

## License, Credits, Compatibility

- **License**: MIT (Free for commercial and personal use)
- **Credits**: Inspired by DaisyUI and Choices.js; original by [Your Name/Org Here]
- **Compatibility**: Modern browsers (Chromium, Firefox, Safari, Edge). No dependencies except DaisyUI for base styles.

---

## Contributing

PRs, bug reports, feature suggestions, and UX improvements always welcome. Please read the [CONTRIBUTING.md] before submitting issues or code.

---

## Changelog

See [CHANGELOG.md] for version history, new features, and UX enhancements.

---

## Support

Open an issue on GitHub or reach out via the Discussions tab.

---

Ready to empower your forms with flexible, beautiful multi-select? Start today!
