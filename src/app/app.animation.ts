import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
    transition(':enter', [
      style({
        transform: 'translateY(-10%)',
        opacity: 0
      }),
      animate('.5s ease-in-out', style({
        transform: 'translateY(0)',
        opacity: 1
      }))
    ]),
    transition(':leave', [
      animate('.5s ease-in-out', style({
        transform: 'translateY(-10%)',
        opacity: 0
      }))
    ])
  ])

  
