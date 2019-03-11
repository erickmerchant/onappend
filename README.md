# @erickmerchant/onappend

Uses a MutationObserver to call onappend and onremove events on elements.

## Example

``` javascript
import onappend from '@erickmerchant/onappend'

const target = document.querySelector('main')

onappend(target)
```

Now anytime an element is added, and it has an onappend property, that property will be called, and anytime an element is removed with an onremove property, that will also be called.
