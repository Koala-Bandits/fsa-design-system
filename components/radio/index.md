---
layout: page
parent: "Components"
title: "Radio"
intro: "Radio buttons allow users to see all available choices at once and select exactly one option."
jump_menu: true
---

Its most common usage is as a nested component of the [Form Fields]({{ site.baseurl }}components/form-fields//) component.

<div class="ds-preview">
  <ul class="fsa-form-list" aria-label="Example display of 4 radio states">
    <li>
      <span>
        <input class="fsa-radio" id="lorem-checked" type="radio" name="asdfasdfqewr" value="lorem-checked" checked="">
        <label for="lorem-checked">Checked</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-radio" id="lorem-unchecked" type="radio" name="asdfasdfqewr" value="lorem-unchecked">
        <label for="lorem-unchecked">Unchecked</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-radio" id="lorem-disabled" type="radio" name="asdfasdfqewr" value="lorem-disabled" disabled="">
        <label for="lorem-disabled">Disabled</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-radio" id="lorem-checked-and-disabled" type="radio" name="qweraewr" value="lorem-checked-and-disabled" disabled="" checked="">
        <label for="lorem-checked-and-disabled">Checked and Disabled</label>
      </span>
    </li>
  </ul>
</div>
```html
<ul class="fsa-form-list" aria-label="Example display of 4 radio states">
  <li>
    <span>
      <input class="fsa-radio" id="lorem-checked" type="radio" name="asdfasdfqewr" value="lorem-checked" checked="">
      <label for="lorem-checked">Checked</label>
    </span>
  </li>
  <li>
    <span>
      <input class="fsa-radio" id="lorem-unchecked" type="radio" name="asdfasdfqewr" value="lorem-unchecked">
      <label for="lorem-unchecked">Unchecked</label>
    </span>
  </li>
  <li>
    <span>
      <input class="fsa-radio" id="lorem-disabled" type="radio" name="asdfasdfqewr" value="lorem-disabled" disabled="">
      <label for="lorem-disabled">Disabled</label>
    </span>
  </li>
  <li>
    <span>
      <input class="fsa-radio" id="lorem-checked-and-disabled" type="radio" name="qweraewr" value="lorem-checked-and-disabled" disabled="" checked="">
      <label for="lorem-checked-and-disabled">Checked and Disabled</label>
    </span>
  </li>
</ul>
```

## Variations

`class="fsa-radio fsa-radio--[variation]"`

### Default

<div class="ds-preview">
  <span>
    <input class="fsa-radio" id="lorem-ipsum-9" type="radio" name="lorem-ipsum-9" value="lorem-ipsum-9">
    <label for="lorem-ipsum-9">Label</label>
  </span>
</div>
```html
<span>
  <input class="fsa-radio" id="lorem-ipsum-9" type="radio" name="lorem-ipsum-9" value="lorem-ipsum-9">
  <label for="lorem-ipsum-9">Label</label>
</span>
```

### Solo

<div class="ds-preview">
  <span>
    <input class="fsa-radio fsa-radio--solo" id="solo-radio-example__01" type="radio" name="solo-radio-example" value="solo-radio-example__01">
    <label for="solo-radio-example__01"><span class="fsa-sr-only">Label</span></label>
  </span>
  <span>
    <input class="fsa-radio fsa-radio--solo" id="solo-radio-example__02" type="radio" name="solo-radio-example" value="solo-radio-example__02" checked="">
    <label for="solo-radio-example__02"><span class="fsa-sr-only">Label</span></label>
  </span>
  <span>
    <input class="fsa-radio fsa-radio--solo" id="solo-radio-example__03" type="radio" name="solo-radio-example" value="solo-radio-example__03" disabled="">
    <label for="solo-radio-example__03"><span class="fsa-sr-only">Label</span></label>
  </span>
  <span>
    <input class="fsa-radio fsa-radio--solo" id="solo-radio-example__04" type="radio" name="solo-radio-example__asdf" value="solo-radio-example__04" disabled="" checked>
    <label for="solo-radio-example__04"><span class="fsa-sr-only">Label</span></label>
  </span>
</div>
```html
<span>
  <input class="fsa-radio fsa-radio--solo" id="solo-radio-example__01" type="radio" name="solo-radio-example" value="solo-radio-example__01">
  <label for="solo-radio-example__01"><span class="fsa-sr-only">Label</span></label>
</span>
<span>
  <input class="fsa-radio fsa-radio--solo" id="solo-radio-example__02" type="radio" name="solo-radio-example" value="solo-radio-example__02" checked="">
  <label for="solo-radio-example__02"><span class="fsa-sr-only">Label</span></label>
</span>
<span>
  <input class="fsa-radio fsa-radio--solo" id="solo-radio-example__03" type="radio" name="solo-radio-example" value="solo-radio-example__03" disabled="">
  <label for="solo-radio-example__03"><span class="fsa-sr-only">Label</span></label>
</span>
<span>
  <input class="fsa-radio fsa-radio--solo" id="solo-radio-example__04" type="radio" name="solo-radio-example__asdf" value="solo-radio-example__04" disabled="" checked>
  <label for="solo-radio-example__04"><span class="fsa-sr-only">Label</span></label>
</span>
```

## States

Radio states are styled not by a `class`, but depending on their state (primarily through the presense of an attribute) and may be combinable, e.g. `disabled` and `checked`.

### Checked

<div class="ds-preview">
  <span>
    <input class="fsa-radio" checked="checked" id="lorem-ipsum-6" type="radio" name="lorem-ipsum-6" value="lorem-ipsum-6">
    <label for="lorem-ipsum-6">Label</label>
  </span>
</div>
```html
<span>
  <input class="fsa-radio" checked="checked" id="lorem-ipsum-6" type="radio" name="lorem-ipsum-6" value="lorem-ipsum-6">
  <label for="lorem-ipsum-6">Label</label>
</span>
```

### Disabled

<div class="ds-preview">
  <span>
    <input class="fsa-radio" disabled="disabled" id="lorem-ipsum-8" type="radio" name="lorem-ipsum-8" value="lorem-ipsum-8">
    <label for="lorem-ipsum-8">Label</label>
  </span>
</div>
```html
<span>
  <input class="fsa-radio" disabled="disabled" id="lorem-ipsum-8" type="radio" name="lorem-ipsum-8" value="lorem-ipsum-8">
  <label for="lorem-ipsum-8">Label</label>
</span>
```

### Disabled and Checked

<div class="ds-preview">
  <span>
    <input class="fsa-radio" checked="checked" disabled="disabled" id="lorem-ipsum-3" type="radio" name="lorem-ipsum-3" value="lorem-ipsum-3">
    <label for="lorem-ipsum-3">Label</label>
  </span>
</div>
```html
<span>
  <input class="fsa-radio" checked="checked" disabled="disabled" id="lorem-ipsum-3" type="radio" name="lorem-ipsum-3" value="lorem-ipsum-3">
  <label for="lorem-ipsum-3">Label</label>
</span>
```

### Within a [Field]({{ site.baseurl }}components/form-fields/)

<div class="ds-preview">
  <div class="fsa-field">
    <label class="fsa-field__label" id="lorem-radio-field-1">Your Favorite Pie</label>
    <ul class="fsa-form-list" aria-labelledby="lorem-radio-field-1">
      <li>
        <span>
          <input class="fsa-radio" id="apple-radio" type="radio" name="fav-pie">
          <label for="apple-radio">Apple</label>
        </span>
      </li>
      <li>
        <span>
          <input class="fsa-radio" id="key-lime-radio" type="radio" name="fav-pie">
          <label for="key-lime-radio">Key Lime</label>
        </span>
      </li>
      <li>
        <span>
          <input class="fsa-radio" id="pumpkin-radio" type="radio" name="fav-pie">
          <label for="pumpkin-radio">Pumpkin</label>
        </span>
      </li>
      <li>
        <span>
          <input class="fsa-radio" id="none-radio" type="radio" name="fav-pie" checked>
          <label for="none-radio">None of the above</label>
        </span>
      </li>
    </ul>
    <span class="fsa-field__help" id="lorem-yyss8cytr2x2x2-help-9">Helpful message here</span>
  </div>
</div>
```html
<div class="fsa-field">
  <label class="fsa-field__label" id="lorem-radio-field-1">Your Favorite Pie</label>
  <ul class="fsa-form-list" aria-labelledby="lorem-radio-field-1">
    <li>
      <span>
        <input class="fsa-radio" id="apple-radio" type="radio" name="fav-pie">
        <label for="apple-radio">Apple</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-radio" id="key-lime-radio" type="radio" name="fav-pie">
        <label for="key-lime-radio">Key Lime</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-radio" id="pumpkin-radio" type="radio" name="fav-pie">
        <label for="pumpkin-radio">Pumpkin</label>
      </span>
    </li>
    <li>
      <span>
        <input class="fsa-radio" id="none-radio" type="radio" name="fav-pie" checked>
        <label for="none-radio">None of the above</label>
      </span>
    </li>
  </ul>
  <span class="fsa-field__help" id="lorem-yyss8cytr2x2x2-help-9">Helpful message here</span>
</div>
```

## Usage

### Use When

* Users need to select only one option out of a set of mutually exclusive choices.
* The number of available options can fit onto a mobile screen.
* In place of [select]({{ site.baseurl }}components/select/) element if there are few enough options (e.g. <=7) and the design can support it.

### Don't Use

* Consider [checkbox]({{ site.baseurl }}components/checkbox/) if users may have the option to select more than one.
* Consider a [select]({{ site.baseurl }}components/select/) if you don’t have enough space to list out all available options.
* If users should be able to select zero of the options; radio elements are not "uncheckable." A [checkbox]({{ site.baseurl }}components/checkbox/) may be warranted.

## Accessibility

Always refer to the [Accessibility Forms Guide]({{ site.baseurl }}guides/accessibility/forms) for overall guidance.

If you customize a radio button, ensure they continue to meet the the accessibility requirements that apply to all form controls.

* Group related radio buttons together with `<fieldset>` and describe the group with `<legend>`.
* Each radio button should have a `<label>`. Associate the two by matching the `<label>`’s `for` attribute to the `<input>`’s `id` attribute.

## General guidance

* Users should be able to tap on or click on either the text `<label>` or the radio element itself to selectan option.
* Options that are listed vertically are easier to read than those listed horizontally. Horizontal listings can make it difficult to tell which label pertains to which radio button.
* Make sure selections are adequately spaced for touch screens.
* Use caution if you decide to set a default value as they cannot be unchecked. Setting a default value can discourage users from making conscious decisions, seem pushy, or alienate users who don’t fit into your assumptions. If you are unsure, leave nothing selected by default.

<!-- ## Related Resources

* [Lorem](lorem)
* [Ipsum](ipsum)
* [Dolor](dolor)
* [Sit](sit)
* [Amet](amet) -->
