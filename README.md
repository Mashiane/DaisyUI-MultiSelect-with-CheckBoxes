# DaisyUI Multi-Select Component

A highly customizable, performant multi-select dropdown component for DaisyUI + TailwindCSS, supporting checkboxes, custom renderers, keyboard navigation, and more.

## Features

- **Checkbox multi-select** with accessible keyboard navigation
- **Reactive updates**: instant UI changes using microtask batching
- **Performance optimizations**: DocumentFragment batching, minimal DOM updates
- **Custom option renderers**: badges, avatars, icons, product cards, etc.
- **DaisyUI menu integration**: seamless look, but disables DaisyUI menu selection classes for this component only
- **Flexible API**: works with native `<option>` elements or JavaScript data
- **Content caching** for custom renderers (optional, see enhancements)
- **Version tracking** for renderer optimization (optional, see enhancements)
- **No external dependencies** except DaisyUI/TailwindCSS

## Installation

1. **Include DaisyUI and TailwindCSS** in your project (via CDN or build):

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

2. **Add the component JS** to your page:

```html
<script src="daisy-multiselect.js"></script>
```

3. **(Optional)**: Add the CSS override for DaisyUI menu selection classes (already included in the demo):

```html
<style>
  .daisy-multiselect .menu-active,
  .daisy-multiselect .active,
  .daisy-multiselect .focus,
  .daisy-multiselect .menu :active,
  .daisy-multiselect .menu :focus {
    background-color: transparent !important;
    color: inherit !important;
    box-shadow: none !important;
  }
</style>
```

## Basic Usage

```html
<daisy-multiselect placeholder="Select your favorite fruits">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="cherry">Cherry</option>
</daisy-multiselect>
```

## Pre-selected Options

```html
<daisy-multiselect placeholder="Select programming languages">
  <option value="js" selected>JavaScript</option>
  <option value="py" selected>Python</option>
  <option value="java">Java</option>
</daisy-multiselect>
```

## Custom Option Renderer

You can provide a custom renderer function via JavaScript to display badges, avatars, icons, etc. Example:

```js
function renderFeatureOption(item) {
  const svgIcon = item.svg || '';
  const description = item.description || '';
  const badge = item.badge || '';
  return `
    <div class="flex items-center gap-3 w-full">
      ${svgIcon ? `<div class="flex-shrink-0">${svgIcon}</div>` : ''}
      <div class="flex-1 min-w-0">
        <div class="font-semibold text-base">${item.text}</div>
        ${description ? `<div class="text-xs mt-0.5" style="color:#6b7280;">${description}</div>` : ''}
      </div>
      ${badge ? `<span class="badge badge-sm" style="background:#22d3ee; color:#fff;">${badge}</span>` : ''}
    </div>
  `;
}

// Usage:
document.querySelector('daisy-multiselect').customRenderer = renderFeatureOption;
```

## Keyboard Navigation

- **Tab/Shift+Tab**: Move focus in/out of the component
- **Arrow keys**: Navigate options
- **Space/Enter**: Select/deselect option
- **Esc**: Close dropdown

## Accessibility

- Fully accessible with screen readers and keyboard
- Uses ARIA roles and attributes

## Performance

- Uses `queueMicrotask` for instant, batched updates
- DOM updates are minimized using `DocumentFragment`
- Optional: Enable content caching and renderer version tracking for large lists

## Disabling DaisyUI Menu Selection Classes

The component disables DaisyUI's menu selection classes for itself, so you can use custom colors and renderers without interference. See the `<style>` block above.

## Enhancements (Optional)

- **Renderer Version Tracking**: Skip unchanged options during re-render for performance
- **Content Caching**: Cache rendered HTML for identical options

## Demo

See `daisy-multiselect-demo.html` for 25+ usage examples, including custom renderers, avatars, product cards, and more.

## License

MIT
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
  <option value="grape" selected>Grape</option>
  <option value="mango">Mango</option>
</daisy-multiselect>
```

## Custom Styling

The component automatically applies any user-defined classes, inline styles, and data attributes to the internal trigger button. This allows for full customization while maintaining the component's functionality.

```html
<daisy-multiselect 
  class="shadow-xl rounded-lg"
  style="transform: scale(1.05);"
  data-testid="my-select">
  <!-- options -->
</daisy-multiselect>
```

**What gets applied:**
- ✅ Custom CSS classes (`class` attribute)
- ✅ Inline styles (`style` attribute)
- ✅ Data attributes (`data-*`)
- ✅ Changes are reactive - updating these attributes dynamically will update the component

**What's preserved:**
- Internal component classes and functionality remain intact
- Updates when component state changes (enabled/disabled, etc.)

## Attributes

### Core Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | string | `"multiselect"` | Name attribute for the hidden native select |
| `placeholder` | string | `"Select options..."` | Placeholder text shown when no items are selected |
| `disabled` | boolean | `false` | Disables the entire component |
| `required` | boolean | `false` | Marks the field as required with validation styling |
| `delimiter` | string | `";"` | Delimiter character(s) for value strings in change events and value setter |

### Styling Attributes

| Attribute | Type | Default | Options | Description |
|-----------|------|---------|---------|-------------|
| `checked-color` | string | `"primary"` | `primary`, `secondary`, `accent`, `success`, `warning`, `error`, `info`, `neutral`, or hex color (e.g., `#ff0000`) | Color of the checkboxes and selected item highlight |
| `chip-text-color` | string | - | Any valid CSS color (e.g., `white`, `#000000`, `rgb(255,0,0)`) | Custom text color for selected item chips/badges |
| `input-color` | string | - | `neutral`, `primary`, `secondary`, `accent`, `info`, `success`, `warning`, `error` | Border color of the input trigger |
| `size` | string | `"md"` | `xs`, `sm`, `md`, `lg`, `xl` | Size of the component (matches DaisyUI select heights) |

### Feature Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `searchable` | boolean | `false` | Enables search/filter functionality |
| `show-select-all` | boolean | `false` | Shows Select All and Deselect All buttons |
| `hide-clear` | boolean | `false` | Hides the clear button (shown by default) |
| `single-select` | boolean | `false` | Converts to single-selection mode (acts like a regular select) |
| `max-selections` | number | `0` | Maximum number of items that can be selected (0 = no limit) |
| `virtual-scroll` | boolean | `false` | Enables virtual scrolling for large lists (optimizes rendering performance) |
| `virtual-scroll-threshold` | number | `50` | Minimum number of options before virtual scrolling activates |
| `no-chip-style` | boolean | `false` | Disables chip/badge styling for selected items (uses plain text list instead) |
| `highlight` | boolean | `false` | Highlights selected items in dropdown with background color matching `checked-color` |

## Examples

### With Search and Select All

```html
<daisy-multiselect 
  name="countries" 
  placeholder="Choose countries..." 
  searchable 
  show-select-all
  checked-color="accent"
  size="lg">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
  <option value="au">Australia</option>
</daisy-multiselect>
```

**Search Features:**
- Real-time filtering as you type
- Case-insensitive matching
- Searches both option values and display text
- Shows "No options found" message when no matches
- Temporarily disables virtual scrolling during search to show all matches

### Single Selection Mode

```html
<daisy-multiselect 
  name="country" 
  placeholder="Choose a country..." 
  single-select
  searchable
  checked-color="primary">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
  <option value="au">Australia</option>
</daisy-multiselect>
```

### With Custom Hex Colors

```html
<daisy-multiselect 
  name="custom-colors" 
  placeholder="Custom colored select..." 
  checked-color="#ff6b6b"
  chip-text-color="white">
  <option value="opt1">Option 1</option>
  <option value="opt2">Option 2</option>
  <option value="opt3">Option 3</option>
</daisy-multiselect>
```

### With Highlighted Selection

```html
<daisy-multiselect 
  name="highlighted" 
  placeholder="Select with highlights..." 
  highlight
  checked-color="success">
  <option value="opt1">Option 1</option>
  <option value="opt2">Option 2</option>
  <option value="opt3">Option 3</option>
</daisy-multiselect>
```

### With Max Selections

```html
<daisy-multiselect 
  name="top3" 
  placeholder="Pick your top 3..." 
  max-selections="3"
  checked-color="success">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
  <option value="4">Option 4</option>
  <option value="5">Option 5</option>
</daisy-multiselect>
```

**Max Selections Behavior:**
- Shows selection count in display (e.g., "3 selected (3/3)")
- Automatically disables unselected options when limit is reached
- Disabled options become semi-transparent and non-clickable
- Users must deselect an item before selecting another

### With Virtual Scrolling (Large Lists)

```html
<daisy-multiselect 
  name="large-list" 
  placeholder="Select from many options..." 
  virtual-scroll
  searchable>
  <!-- 1000+ options -->
</daisy-multiselect>
```

### Required Field with Validation

```html
<daisy-multiselect 
  name="required-field" 
  placeholder="Please select at least one..." 
  required>
  <option value="opt1">Option 1</option>
  <option value="opt2">Option 2</option>
  <option value="opt3">Option 3</option>
</daisy-multiselect>
```

### With Custom Classes and Styles

```html
<daisy-multiselect 
  class="shadow-xl rounded-lg"
  style="transform: scale(1.05);"
  data-testid="my-select"
  placeholder="Styled select...">
  <option value="opt1">Option 1</option>
  <option value="opt2">Option 2</option>
</daisy-multiselect>
```

User-defined classes, inline styles, and data attributes are automatically applied to the internal trigger button and preserved when the component updates.

## Public API Methods

Access the component via JavaScript to control it programmatically:

```javascript
const select = document.querySelector('daisy-multiselect');
```

### Selection Methods

#### `getSelectedValues()`
Returns an array of selected values.

```javascript
const values = select.getSelectedValues();
// Returns: ['apple', 'banana', 'orange']
```

#### `getSelectedTexts()`
Returns an array of selected display texts.

```javascript
const texts = select.getSelectedTexts();
// Returns: ['Apple', 'Banana', 'Orange']
```

#### `selectByValue(value)`
Selects an option by its value. Returns `true` if successful, `false` if not found.

```javascript
const success = select.selectByValue('apple');
// Returns: true
```

#### `deselectByValue(value)`
Deselects an option by its value. Returns `true` if successful, `false` if not found.

```javascript
const success = select.deselectByValue('apple');
// Returns: true
```

#### `selectByIndex(index)`
Selects an option by its zero-based index. Returns `true` if successful, `false` if not found or disabled.

```javascript
const success = select.selectByIndex(0); // Selects first option
// Returns: true
```

#### `deselectByIndex(index)`
Deselects an option by its zero-based index. Returns `true` if successful, `false` if not found.

```javascript
const success = select.deselectByIndex(0); // Deselects first option
// Returns: true
```

#### `selectAll()`
Selects all non-disabled options (respects max-selections limit).

```javascript
select.selectAll();
```

#### `clearSelected()`
Deselects all currently selected options.

```javascript
select.clearSelected();
```

### Option Management Methods

#### `addOption(value, text, selected, disabled)`
Adds a new option to the select.

```javascript
select.addOption('newValue', 'New Option', false, false);
// Parameters: value, text, selected (default: false), disabled (default: false)
```

#### `removeOption(value)`
Removes an option by its value. Returns `true` if successful, `false` if not found.

```javascript
const success = select.removeOption('apple');
// Returns: true
```

#### `clear()`
Removes all options from the select (clears the entire list).

```javascript
select.clear();
```

#### `hasOption(value)`
Checks if an option exists. Returns `true` or `false`.

```javascript
const exists = select.hasOption('apple');
// Returns: true or false
```

#### `getAllOptions()`
Returns an array of all options with their properties.

```javascript
const options = select.getAllOptions();
// Returns: [
//   { value: 'apple', text: 'Apple', selected: true, disabled: false },
//   { value: 'banana', text: 'Banana', selected: false, disabled: false }
// ]
```

### Dropdown Control Methods

#### `open()`
Opens the dropdown.

```javascript
select.open();
```

#### `close()`
Closes the dropdown.

```javascript
select.close();
```

#### `toggle()`
Toggles the dropdown open/closed state.

```javascript
select.toggle();
```

#### `isOpen()`
Checks if the dropdown is currently open. Returns `true` or `false`.

```javascript
const isOpen = select.isOpen();
// Returns: true or false
```

### State Management Methods

#### `isBlank()`
Checks if no selections are made. Returns `true` or `false`.

```javascript
const isEmpty = select.isBlank();
// Returns: true or false
```

#### `destroy()`
Cleans up the component, removes event listeners, and prepares for removal from DOM.

```javascript
select.destroy();
// Use before removing component from DOM to prevent memory leaks
```

### Properties (Getters/Setters)

#### `enabled`
Get or set the enabled state of the component.

```javascript
// Get enabled state
const isEnabled = select.enabled; // true or false

// Enable the component
select.enabled = true;

// Disable the component
select.enabled = false;
```

#### `visible`
Get or set the visibility of the component.

```javascript
// Get visible state
const isVisible = select.visible; // true or false

// Show the component
select.visible = true;

// Hide the component
select.visible = false;
```

#### `required`
Get or set the required state of the component.

```javascript
// Get required state
const isRequired = select.required; // true or false

// Make it required
select.required = true;

// Make it optional
select.required = false;
```

#### `value`
Get or set the selected values (as an array or comma-separated string).

```javascript
// Get selected values
const values = select.value;
// Returns: ['apple', 'banana']

// Set selected values (array)
select.value = ['apple', 'orange'];

// Set selected values (comma-separated string)
select.value = 'apple,orange';
```

#### `borderColor`
Get or set the border color of the trigger button.

```javascript
// Get current border color
const color = select.borderColor;
// Returns: 'error', 'success', '#ff0000', or null

// Set named color
select.borderColor = 'error';

// Set hex color
select.borderColor = '#ff0000';

// Remove border color
select.borderColor = null;
```

#### `checkedColor`
Get or set the color of the checkboxes and selected item highlights.

```javascript
// Get current checked color
const color = select.checkedColor; // Returns: 'primary', 'secondary', etc.

// Set checked color (DaisyUI color or hex)
select.checkedColor = 'accent';
select.checkedColor = '#ff6b6b';
```

#### `delimiter`
Get or set the delimiter character(s) used for value strings in events and value setter.

```javascript
// Get current delimiter
const delim = select.delimiter; // Returns: ';' (default)

// Set delimiter
select.delimiter = ',';
select.delimiter = '|';
```

#### `chipStyle`
Get or set whether selected items display as chips/badges or plain text.

```javascript
// Get current chip style mode
const hasChips = select.chipStyle; // Returns: true or false

// Enable chip-style
select.chipStyle = true;

// Disable chip-style (show as comma-separated text)
select.chipStyle = false;
```

## Accessibility

The component is built with accessibility in mind and includes comprehensive ARIA support:

### ARIA Attributes

- **`role="combobox"`** - Main trigger button identifies as a combobox
- **`aria-haspopup="listbox"`** - Indicates the button opens a listbox
- **`aria-expanded`** - Dynamically updates to reflect dropdown state (true/false)
- **`aria-label`** - Uses placeholder text for screen reader context
- **`role="listbox"`** - Dropdown container identified as a listbox
- **`aria-multiselectable="true"`** - Indicates multiple selections are allowed
- **`role="option"`** - Each option properly identified
- **`aria-selected`** - Reflects selection state for each option (true/false)
- **`aria-disabled="true"`** - Applied to disabled options
- **`aria-label`** on remove buttons - Clear labels for removing items

### Keyboard Navigation

Full keyboard navigation is supported:

| Key | Action |
|-----|--------|
| `Enter` or `Space` | Open dropdown (when closed) or select focused option (when open) |
| `Escape` | Close dropdown |
| `Arrow Down` | Navigate to next option in dropdown |
| `Arrow Up` | Navigate to previous option in dropdown |
| `Tab` | Move focus out of component (closes dropdown) |

### Visual Focus Indicators

- Focused options have a visible outline (2px solid primary color)
- Keyboard navigation maintains clear visual feedback
- Focus is properly managed when dropdown opens/closes

### Screen Reader Support

- All interactive elements have appropriate labels
- Selection changes are announced through native events
- State changes (expanded/collapsed) are communicated via ARIA
- Remove buttons include descriptive labels for each item

## Events

### `change`
Fired when the selection changes.

```javascript
select.addEventListener('change', (event) => {
  console.log('Selected values:', event.detail.values);
  console.log('Semicolon-delimited:', event.detail.valueString);
});
```

### `open`
Fired when the dropdown opens.

```javascript
select.addEventListener('open', () => {
  console.log('Dropdown opened');
});
```

### `close`
Fired when the dropdown closes.

```javascript
select.addEventListener('close', () => {
  console.log('Dropdown closed');
});
```

## Complete Example

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multi-Select Demo</title>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.css" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-8">
  <div class="max-w-md">
    <h1 class="text-2xl font-bold mb-4">Multi-Select Demo</h1>
    
    <daisy-multiselect 
      id="mySelect"
      name="fruits" 
      placeholder="Select your favorite fruits..." 
      searchable
      show-select-all
      color="primary"
      size="md"
      required>
      <option value="apple">🍎 Apple</option>
      <option value="banana">🍌 Banana</option>
      <option value="orange">🍊 Orange</option>
      <option value="grape">🍇 Grape</option>
      <option value="mango">🥭 Mango</option>
      <option value="strawberry">🍓 Strawberry</option>
    </daisy-multiselect>

    <div class="mt-4">
      <button class="btn btn-primary" onclick="showSelected()">Show Selected</button>
      <button class="btn btn-secondary" onclick="addNewFruit()">Add Fruit</button>
      <button class="btn btn-accent" onclick="selectFirst()">Select First</button>
    </div>

    <div id="output" class="mt-4 p-4 bg-base-200 rounded"></div>
  </div>

  <script src="daisy-multiselect.js"></script>
  <script>
    const select = document.getElementById('mySelect');

    // Show selected values
    function showSelected() {
      const values = select.getSelectedValues();
      const texts = select.getSelectedTexts();
      document.getElementById('output').innerHTML = `
        <strong>Selected Values:</strong> ${values.join(', ')}<br>
        <strong>Selected Texts:</strong> ${texts.join(', ')}
      `;
    }

    // Add a new option dynamically
    function addNewFruit() {
      const value = 'kiwi';
      const text = '🥝 Kiwi';
      select.addOption(value, text, false, false);
      alert('Kiwi added!');
    }

    // Select the first option
    function selectFirst() {
      select.selectByIndex(0);
    }

    // Listen for changes
    select.addEventListener('change', (event) => {
      console.log('Selection changed:', event.detail.values);
    });
  </script>
</body>
</html>
```

## Behavior

### Smart Dropdown Positioning

The dropdown automatically calculates the best position to open:

- **Space Detection** - Measures available space above and below the component
- **Automatic Flip** - Opens upward if there's insufficient space below
- **Viewport Aware** - Ensures dropdown stays within visible viewport
- **Dynamic Adjustment** - Recalculates position each time dropdown opens

### Multiple Instance Management

- **Auto-close** - Opening one multiselect automatically closes any other open multiselects on the page
- **Isolated State** - Each instance maintains its own independent state
- **No Conflicts** - Multiple components can coexist without interference

### Click Outside to Close

The dropdown automatically closes when clicking outside the component, providing intuitive user experience.

## Form Integration

The component integrates seamlessly with HTML forms:

- **Hidden Native Select** - A hidden `<select multiple>` element is automatically created with the specified `name` attribute
- **Form Submission** - Selected values are automatically submitted with the form using standard form data
- **Change Events** - Native change events are fired on the hidden select, so form libraries work out of the box
- **Server-Side Processing** - Values are submitted as a standard multi-select, compatible with any backend framework

```html
<form action="/submit" method="POST">
  <daisy-multiselect name="skills" required>
    <option value="js">JavaScript</option>
    <option value="py">Python</option>
    <option value="java">Java</option>
  </daisy-multiselect>
  <button type="submit">Submit</button>
</form>
```

When submitted, the form data will include: `skills=js&skills=py` (for selected values)

## Performance Features

The component includes several performance optimizations:

- **Virtual Scrolling** - Efficiently renders large lists by only rendering visible items
- **RequestAnimationFrame Batching** - Batches DOM updates to prevent layout thrashing
- **Incremental Chip Rendering** - Only updates changed chips instead of re-rendering all selected items
- **CSS Containment** - Uses `contain: layout style` for better rendering performance
- **Debounced Search** - Filters options efficiently during typing

For lists with 50+ options, enable virtual scrolling for optimal performance:

```html
<daisy-multiselect virtual-scroll virtual-scroll-threshold="50">
  <!-- Large number of options -->
</daisy-multiselect>
```

## Display Modes

The component supports two display modes for selected items:

### Chip/Badge Mode (Default)

Selected items appear as colorful badges/chips with remove buttons:

```html
<daisy-multiselect checked-color="primary">
  <!-- Displays as: [🍎 Apple ×] [🍌 Banana ×] [🍊 Orange ×] -->
</daisy-multiselect>
```

### Plain Text Mode

Use `no-chip-style` attribute for comma-separated text display:

```html
<daisy-multiselect no-chip-style>
  <!-- Displays as: Apple, Banana, Orange -->
</daisy-multiselect>
```

## Styling

The component uses DaisyUI classes and CSS custom properties. You can customize the appearance by:

1. **Using DaisyUI themes** - Change the `data-theme` attribute on your HTML element
2. **Modifying component attributes** - Use `checked-color`, `chip-text-color`, `size`, and `input-color` attributes
3. **Hex colors** - Use any hex color value for `checked-color` (e.g., `checked-color="#ff0000"`)
4. **Custom CSS** - Target the component's class names for advanced styling

### Available CSS Classes

- `.multiselect-trigger` - The main trigger button
- `.multiselect-display` - The text display area
- `.multiselect-dropdown-content` - The dropdown container
- `.multiselect-option` - Individual option items
- `.multiselect-option.selected` - Selected option styling
- `.multiselect-clear-btn` - Clear button
- `.multiselect-caret` - Dropdown arrow icon

## Quick Reference

### All Attributes Summary

| Attribute | Values | Description |
|-----------|--------|-------------|
| `name` | string | Form field name |
| `placeholder` | string | Placeholder text |
| `size` | xs, sm, md, lg, xl | Component size |
| `checked-color` | DaisyUI color or hex | Checkbox/chip color |
| `chip-text-color` | CSS color | Chip text color |
| `input-color` | DaisyUI color | Border color |
| `delimiter` | string | Value separator (default: `;`) |
| `max-selections` | number | Max items (0 = unlimited) |
| `searchable` | flag | Enable search |
| `show-select-all` | flag | Show select/deselect all buttons |
| `hide-clear` | flag | Hide clear button |
| `single-select` | flag | Single selection mode |
| `no-chip-style` | flag | Plain text display |
| `highlight` | flag | Highlight selected in dropdown |
| `virtual-scroll` | flag | Enable virtual scrolling |
| `virtual-scroll-threshold` | number | Min items for virtual scroll (default: 50) |
| `disabled` | flag | Disable component |
| `required` | flag | Mark as required |

### Key Methods

- `getSelectedValues()` - Get selected values array
- `getSelectedTexts()` - Get selected text array
- `selectByValue(value)` - Select by value
- `deselectByValue(value)` - Deselect by value
- `selectAll()` - Select all options
- `clearSelected()` - Clear all selections
- `addOption(value, text, selected, disabled)` - Add option
- `removeOption(value)` - Remove option
- `open()` / `close()` / `toggle()` - Control dropdown
- `destroy()` - Cleanup component

### Key Properties

- `enabled` - Enable/disable state
- `visible` - Show/hide state
- `required` - Required state
- `value` - Get/set selected values
- `borderColor` - Get/set border color
- `checkedColor` - Get/set checkbox color
- `delimiter` - Get/set value delimiter
- `chipStyle` - Get/set chip display mode

### Events

- `change` - Selection changed
- `open` - Dropdown opened
- `close` - Dropdown closed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires browsers with Custom Elements (Web Components) support.

## License

MIT License - feel free to use in your projects!

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.
