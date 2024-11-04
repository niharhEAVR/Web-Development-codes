Let's go over the code line by line:

```javascript
function mulby5(num){
    return num*5
}
```

This is a function called `mulby5` that takes a parameter `num` and returns `num` multiplied by 5.

```javascript
mulby5.power = 2
```

Here, a property called `power` is being added to the `mulby5` function itself, with a value of `2`. In JavaScript, functions are objects, so you can assign properties to them, just like you would with any other object. This `power` property is now accessible through `mulby5`.

```javascript
console.log(mulby5.prototype)
```

This logs the `prototype` property of the `mulby5` function. Every function in JavaScript has a `prototype` property, which is typically used to add methods to the function that can be shared among all instances of objects created by that function (if it’s used as a constructor). Since `mulby5` isn’t used as a constructor, the `prototype` object will be empty here, so `console.log(mulby5.prototype)` will display `{}`.

```javascript
console.log(mulby5.power)
```

This logs the `power` property that was assigned to `mulby5` earlier, so it will output `2`. 

### Summary of Output

The code outputs:
- `{}` for `console.log(mulby5.prototype)`, showing an empty prototype object.
- `2` for `console.log(mulby5.power)`, which is the value of the `power` property we assigned.