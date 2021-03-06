---
layout: page
parent: "Components"
title: "Inline Alerts"
intro: "Inline Alerts help to provide inline, page-level messaging to the User. These may be as the result of a user's specific actions or unsolicited messages."
jump_menu: true
custom_js: "inline-alert.js"
---

<div class="ds-preview">
  <div class="fsa-alert fsa-alert--success" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional success title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

## Variations

Variations are styled with `class="fsa-alert fsa-alert--[type]"`.

### Success

<div class="ds-preview">
  <div class="fsa-alert fsa-alert--success" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional success title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>
```html
<div class="fsa-alert fsa-alert--success" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional success title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
```

### Warning

<div class="ds-preview">
  <div class="fsa-alert fsa-alert--warning" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional warning title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>
```html
<div class="fsa-alert fsa-alert--warning" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional warning title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
```

### Error

<div class="ds-preview">
  <div class="fsa-alert fsa-alert--error" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional error title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>
```html
<div class="fsa-alert fsa-alert--error" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional error title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
```

### Info

<div class="ds-preview">
  <div class="fsa-alert fsa-alert--info" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional information title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>
```html
<div class="fsa-alert fsa-alert--info" role="alert">
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional information title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>
```

### No icon

<div class="ds-preview">
  <div class="fsa-alert fsa-alert--success fsa-alert--no-icon" role="alert">
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional [type] title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>
```html
<div class="fsa-alert fsa-alert--[type] fsa-alert--no-icon" role="alert">
  ....
</div>
```

### Dismissable

<div class="ds-preview">
  <div class="fsa-alert fsa-alert--success" role="alert">
    <button class="fsa-alert__close" data-behavior="alert-dismiss" type="button" title="Dismiss this message" aria-label="Dismiss this message"></button>
    <div class="fsa-alert__body">
      <h3 class="fsa-alert__heading">Optional success title</h3>
      <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing assumenda harum accusamus nemo non iste quia. Nihil ab tenetur ipsa dolore nisi qui molestias assumenda a perferendis maxime sed do eiusmod.</p>
    </div>
  </div>
</div>
```html
<div class="fsa-alert fsa-alert--success" role="alert">
  <button class="fsa-alert__close" data-behavior="alert-dismiss" type="button" title="Dismiss this message" aria-label="Dismiss this message"></button>
  <div class="fsa-alert__body">
    <h3 class="fsa-alert__heading">Optional success title</h3>
    <p class="fsa-alert__text">Lorem ipsum <strong>bold text</strong>, consectetur adipiscing assumenda harum accusamus nemo non iste quia. Nihil ab tenetur ipsa dolore nisi qui molestias assumenda a perferendis maxime sed do eiusmod.</p>
  </div>
</div>
```

## Usage

### Use When

* The application needs to provide system-level messaging to the user.
* The application needs to provide real-time inline messaging to the User, in context of components visible on the current view.
* The application needs to report a general error not related to a User interaction.

### Don't Use

* When displaying error messages paired with specific form fields. Use error states provided in [Form Field]({{ site.baseurl }}components/form-fields/) component.
* The application needs to provide real-time messaging to the User about a page-level event, out-of-view event, or background process. Use a [Growl Notification]({{ site.baseurl }}components/growl/).
* For destructive actions. If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, with an option available for user to confirm or deny. Consider the Modal-based variation of [Growl Notification]({{ site.baseurl }}components/growl/)
* The application displays non-critical information that won’t disrupt a workflow. Use a [Growl Notification]({{ site.baseurl }}components/growl/).
* Too many Alerts at one time as this will confuse the User and push content down the screen.

## General Guidance

* Alerts should be used to help provide contextual guidance and information related to application state, processing, and events.