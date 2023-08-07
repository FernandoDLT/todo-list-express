const deleteBtn = document.querySelectorAll('.fa-trash');
const item = document.querySelectorAll('.item span');
const itemCompleted = document.querySelectorAll('.item span.completed');

Array.from(deleteBtn).forEach((element) => {
  element.addEventListener('click', () => {
    const itemText = element.parentNode.querySelector('span').innerText;
    deleteItem(itemText); // Pass the item text to the deleteItem function
    applyTiltAnimation(element);
  });
});

Array.from(item).forEach((element) => {
  element.addEventListener('click', markComplete);
});

Array.from(itemCompleted).forEach((element) => {
  element.addEventListener('click', markUnComplete);
});

async function deleteItem(itemText) {
  try {
    const response = await fetch('deleteItem', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'itemFromJS': itemText
      })
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const itemText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch('markComplete', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'itemFromJS': itemText
      })
    });
    const data = await response.json();
    console.log(data);
    location.reload();
    
  } catch (err) {
    console.log(err);
  }
}

async function markUnComplete() {
  const itemText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch('markUnComplete', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'itemFromJS': itemText
      })
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

function applyTiltAnimation(element) {
  element.style.animation = "tilt 1s ease-in-out";
}
