const array1=[2,3,5,345,23];

function max(iterable) {
  var maximum = Number.NEGATIVE_INFINITY;
  for (var i in iterable) {
    console.log(i);
    if (iterable[i]>= maximum) {
      maximum=iterable[i];
    }
  }
  return maximum;
}

const reverser=function reverse(iterable){while(iterable.length!==1){iterable.remove(max(iterable))}return iterable[0];}


function changer(object, key, value) {
  var prev = object;
  if (Array.isArray(prev)) {
    prev.push(value);
  } else if (typeof prev == 'object' && prev != null) {
    prev =Object.entries(prev);
  } else {
    prev[key] = value;
  }
  return null;
}


async function promise_me(truthy) {
  const a = new Promise((resolve, reject) => {
      console.log(1);
      resolve(truthy);
  })
  console.log(2)
  console.log(3)
  console.log(4)
  const five = 5;
  console.log(five)
  return five
}
