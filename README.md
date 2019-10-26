# jQuery plugin for getting and setting input values

## Options
### Getting options
No options

### Setting options
* `event` `{String}` - triggering event when value is changed or `null` to skip (default: `change`)
* `args` `{Array}` - arguments to pass when `event` is triggering (default: `[]`)

## Examples
### Text input
```
<input type="text" name="text" value="">

<script>
    // Getting value
    let value = $('input[name="text"]').xval();
    console.log(value);
    // Output: ''

    // Setting value
    $('input[name="text"]').xval('text');

    value = $('input[name="text"]').xval();
    console.log(value);
    // Output: 'text'

    // Setting value with triggering event
    $('input[name="text"]').on('mychange', function(e, arg) { console.log(this.value, arg); });
    $('input[name="text"]').xval('another text', { event: 'mychange', args: ['test'] });
    // Output: 'another text', 'test'
</script>
```

### Radio input
```
<input type="radio" name="radio" value="one">
<input type="radio" name="radio" value="two">
<input type="radio" name="radio" value="three">

<script>
    // Getting value
    let value = $('input[name="radio"]').xval();
    console.log(value);
    // Output: undefined

    // Setting value
    $('input[name="radio"]').xval('two');

    value = $('input[name="radio"]').xval();
    console.log(value);
    // Output: 'two'

    // Setting value with triggering event
    $('input[name="radio"]').on('mychange', function(e) { console.log(this.value, this.checked); });
    $('input[name="radio"]').xval('one', { event: 'mychange' });
    // Output: 'one', true
    // Output: 'two', false
</script>
```

### Checkbox input
```
<input type="checkbox" name="checkbox" value="one">
<input type="checkbox" name="checkbox" value="two">
<input type="checkbox" name="checkbox" value="three">

<script>
    // Getting value
    let value = $('input[name="checkbox"]').xval();
    console.log(value);
    // Output: []

    // Setting value
    $('input[name="checkbox"]').xval(['one', 'two']);

    value = $('input[name="checkbox"]').xval();
    console.log(value);
    // Output: ['one', 'two']

    // Setting value with triggering event
    $('input[name="checkbox"]').on('mychange', function(e) { console.log(this.value, this.checked); });
    $('input[name="checkbox"]').xval(['one', 'three'], { event: 'mychange' });
    // Output: 'two', false
    // Output: 'three', true
</script>
```

### Single select
```
<select name="single">
    <option value="one" selected></option>
    <option value="two"></option>
    <option value="three"></option>
</select>

<script>
    // Getting value
    let value = $('select[name="single"]').xval();
    console.log(value);
    // Output: 'one'

    // Setting value
    $('select[name="single"]').xval('two');

    value = $('select[name="single"]').xval();
    console.log(value);
    // Output: 'two'

    // Setting value with triggering event
    $('select[name="single"]').on('mychange', function(e) { console.log(this.value); });
    $('select[name="single"]').xval('one', { event: 'mychange' });
    // Output: 'one', true
</script>
```

### Multiple select
```
<select name="multiple" multiple>
    <option value="one"></option>
    <option value="two"></option>
    <option value="three"></option>
</select>

<script>
    // Getting value
    let value = $('select[name="multiple"]').xval();
    console.log(value);
    // Output: []

    // Setting value
    $('select[name="multiple"]').xval(['one', 'two']);

    value = $('select[name="multiple"]').xval();
    console.log(value);
    // Output: ['one', 'two']

    // Setting value with triggering event
    $('select[name="multiple"]').on('mychange', function(e) { console.log(this.value); });
    $('select[name="multiple"]').xval(['one', 'three'], { event: 'mychange' });
    // Output: ['one', 'three']
</script>
```
