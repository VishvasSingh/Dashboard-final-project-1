import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export const typingAnimation = trigger('typingAnimation', [
  transition(':enter', [
    animate(
      '0.1s',
      keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 1, offset: 0.5 }),
        style({ width: '100%', offset: 0.7 }), // Simulate typing effect
        style({ width: '90%', offset: 0.8 }), // Simulate backspacing a bit
        style({ width: '100%', offset: 1 }),
      ])
    ),
  ]),
]);
