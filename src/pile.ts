import { Book } from './book';
import { Chapter } from './chapter';

import hyperscript from './hyperscript';
const {
  blockquote,
  br,
  p,
} = hyperscript;

export default [
  Book.new(
    1,
    'The Silent Void',
    'When you have learned to snatch the error code from the trap frame, it will be time for you to leave.',
    [
      Chapter.new(1, [
        p([
          'Something mysterious is formed, born in the silent void.',
          'Waiting alone and unmoving, it is at once still and yet in constant motion.',
          'It is the source of all programs.',
          'I do not know its name, so I will call it the Tao of Programming.',
        ]),
        blockquote([
          'If the Tao is great, then the operating system is great.',
          br(),
          'If the operating system is great, then the compiler is great.',
          br(),
          'If the compiler is great, then the application is great.',
          br(),
          'The user is pleased, and there is harmony in the world.',
        ]),
        p('The Tao of Programming flows far away and returns on the wind of morning.'),
      ]),
    ]
  ),
];
