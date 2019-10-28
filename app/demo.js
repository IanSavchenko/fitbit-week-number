import document from 'document';
import touch from './touch';

const fake_finger = document.getElementById('fake_finger');

export const fakeFingerRight = function() {
  fake_finger.animate('enable');
};

export const fakeFingerLeft = function() {
  fake_finger.animate('disable');
};

export const fakeFingerDisplay = function() {
  fake_finger.getElementsByClassName('ff_circle')[0].style.display = 'inline';
};

export const runDemo = function() {
  fakeFingerDisplay();
  const demoDay = new Date(2019, 11, 10);

  const ANIMATION_DURATION = 900;
  const WAIT = 250;

  let t = 3000; // start time

  let movesLeft = 2;
  while (movesLeft-- > 0) {
    setTimeout(fakeFingerLeft, t);
    setTimeout(touch.onFlickLeft, t+=ANIMATION_DURATION);
  
    t += WAIT;
  }

  t += 4*WAIT;

  let movesRight = 4;
  while(movesRight-- > 0) {
    setTimeout(fakeFingerRight, t);
    setTimeout(touch.onFlickRight, t+=ANIMATION_DURATION);
  
    t+= WAIT;
  }

  t += 4*WAIT;

  movesLeft = 2;
  while (movesLeft-- > 0) {
    setTimeout(fakeFingerLeft, t);
    setTimeout(touch.onFlickLeft, t+=ANIMATION_DURATION);
  
    t += WAIT;
  }

  return demoDay;
};
