---
layout: page
parent: "Components"
title: "Text Input"
intro: "Text input fields allow people to enter any combination of letters, numbers, or symbols of their choosing (unless otherwise restricted)."
jump_menu: true
---

Its most common usage is as a nested component of the [Form Fields]({{ site.baseurl }}components/form-fields//) component.

<div class="ds-preview">
  <input class="fsa-input" type="text" name="some_name2" placeholder="Placeholder" value="Text">
</div>

## Variations

The style for `<input>` text components always start with `class="fsa-input"`, modifiable with one or multiple `fsa-input--[variation]`.

```html
<input class="fsa-input fsa-input--[variation]" type="text" name="some_name" value="">
```

### Default

<div class="ds-preview">
  <input class="fsa-input" type="text" name="1iuoytytesgdf" value="Text" placeholder="Placeholder">
</div>
```html
<input class="fsa-input" type="text" name="1iuoytytesgdf" value="Text" placeholder="Placeholder">
```

### Full-width

<div class="ds-preview">
  <input class="fsa-input fsa-input--block" type="text" name="155tj" value="Text" placeholder="Placeholder">
</div>
```html
<input class="fsa-input fsa-input--block" type="text" name="155tj" value="Text" placeholder="Placeholder">
```

### Small

<div class="ds-preview">
  <input class="fsa-input fsa-input--small" type="text" name="qwerty" value="Text" placeholder="Placeholder">
</div>
```html
<input class="fsa-input fsa-input--small" type="text" name="qwerty" value="Text" placeholder="Placeholder">
```

### Large

<div class="ds-preview">
  <input class="fsa-input fsa-input--large" type="text" name="ytrewq" value="Text" placeholder="Placeholder">
</div>
```html
<input class="fsa-input fsa-input--large" type="text" name="ytrewq" value="Text" placeholder="Placeholder">
```

### Within a [Field]({{ site.baseurl }}components/form-fields/)

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" for="TheItem2">Label <span class="fsa-field__label-desc">Required</span></label>
    <input class="fsa-input fsa-field__item" id="TheItem2" aria-describedby="lorem-1234-help-2" aria-required="true" name="TheItem2" type="text" value="">
    <span class="fsa-field__help" id="lorem-1234-help-2">Instructional message here</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" for="TheItem2">Label <span class="fsa-field__label-desc">Required</span></label>
  <input class="fsa-input fsa-field__item" id="TheItem2" aria-describedby="lorem-1234-help-2" aria-required="true" name="TheItem2" type="text" value="">
  <span class="fsa-field__help" id="lorem-1234-help-2">Instructional message here</span>
</div>
```

### Customizing Width

Though it should be **rarely** necessary, the width of `.fsa-input`* can be overridden by using the `size` attribute, which specifies the width of the `input` in number of characters. From a display perspective, one character is equivalent to `1em` (approximately `17px` wide at default font size).

<div class="ds-preview">
  <input class="fsa-input" size="2" type="text" name="some_name" value="2">
  <input class="fsa-input" size="5" type="text" name="some_name" value="5">
  <input class="fsa-input" size="7" type="text" name="some_name" value="7">
  <input class="fsa-input" size="14" type="text" name="some_name" value="14">
  <input class="fsa-input" size="29" type="text" name="some_name" value="29">
</div>
```html
<input class="fsa-input" size="2" type="text" name="some_name" value="2">
<input class="fsa-input" size="5" type="text" name="some_name" value="5">
<input class="fsa-input" size="7" type="text" name="some_name" value="7">
<input class="fsa-input" size="14" type="text" name="some_name" value="14">
<input class="fsa-input" size="29" type="text" name="some_name" value="29">
```

*The default width of an `<input class="fsa-input">` is generally `22` characters, though it can vary from browser to browser. Within a [Field]({{ site.baseurl }}components/form-fields/) it defaults to `100%` of its parent container and rarely should be overridden.

## States

### Error

<div class="ds-preview">
  <input class="fsa-input fsa-input--error" type="text" name="7id" value="Text">
</div>
```html
<input class="fsa-input fsa-input--error" type="text" name="7id" value="Text">
```

### Positive

<div class="ds-preview">
  <input class="fsa-input fsa-input--positive" type="text" name="lorem" value="Text">
</div>
```html
<input class="fsa-input fsa-input--positive" type="text" name="lorem" value="Text">
```

### Disabled

Disabled fields do not have a `class="fsa-input--[variation]"`, instead using the `disabled` attribute.

<div class="ds-preview">
  <input class="fsa-input" disabled="disabled" type="text" name="1224hd9f" value="Text">
</div>
```html
<p><input class="fsa-input" disabled="disabled" type="text" name="1224hd9f" value="Text"></p>
```

### Readonly

Readonly fields do not have a `class="fsa-input--[variation]"`, instead using the `readonly` attribute.

<div class="ds-preview">
  <input class="fsa-input" readonly="readonly" type="text" name="4f" value="Text">
</div>
```html
<input class="fsa-input" readonly="readonly" type="text" name="4f" value="Text">
```

## Usage

### Use When

* If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
* When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a calendar picker.
* When users want to be able to paste in a response.
* When users need only a single line of entry.

### Don't Use

* When the value user enter are limited in amount
* When users are choosing from a specific set of options. Consider [select]({{ site.baseurl }}components/select/), [radio]({{ site.baseurl }}components/radio/), or [checkbox]({{ site.baseurl }}components/checkbox/).
* When users need to enter multiple lines of content, consider the [textarea]({{ site.baseurl }}components/textarea/) element.

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize the text inputs, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Do not use the `placeholder` attribute as the sole label for accessibility reasons. Form components must have an associated `<label>` with matching `for` attribute. Additionally, most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio to sufficiently serve as the sole label.
* Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.

## General Guidance

* The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a [textarea]({{ site.baseurl }}components/textarea/) instead.
* Text inputs are among the easiest type of input for desktop users but are more difficult for mobile users.
* Consider the type of content a user may enter to aid mobile device entry; mobile devices typically surface a keyboard UI attuned to the type. For example, `type="tel"` will surface a [phone keyboard](http://html5doctor.com/html5-forms-input-types/#input-tel).
* Only show error validation messages or styling after a user has interacted with a particular field; avoid significantly updating styles while a user is actively entering input.
* Do not use the `placeholder` attribute in place of a `<label>` element. Its purposes is different: the standard `<label>` describes the role of the form element; that is, it indicates what kind of information is expected. The `placeholder` attribute is typically a hint about the format the content should take. There are cases in which the placeholder attribute is not displayed to the user (e.g. when input field has a value), so the form must be understandable without it.
