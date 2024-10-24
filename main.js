function spiral() {
  const text = document.querySelector('.circleText p');
  text.innerHTML = text.innerText
    .split('')
    .map(
      (char, i) =>
        `<span style="transform:rotate(${i * 5}deg)">${char}</span>`
    )
    .join('');
}

spiral();

// const IDS = [
//   '<3',
//   'engineer',
//   'writer',
//   'lover',
//   'label maker',
//   'ceramicist',
// ];

// function choose() {
//   idx = Math.floor(Math.random() * IDS.length);
//   document.getElementById('whoAmI').setAttribute('title', IDS[idx]);
// }

// // have hover effect start from mouse position and expand outwards with text determined by random state with link accessible on click

// choose();
