import { Book } from './book';
import { Chapter } from './chapter';

import hyperscript from './hyperscript';
const {
  blockquote,
  br,
  code,
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
          ' Waiting alone and unmoving, it is at once still and yet in constant motion.',
          ' It is the source of all programs.',
          ' I do not know its name, so I will call it the Tao of Programming.',
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
      Chapter.new(2, [
        p([
          'The Tao gave birth to machine language.',
          ' Machine language gave birth to the assembler.'
        ]),
        p([
          'The assembler gave birth to the compiler.',
          ' Now there are ten thousand languages.',
        ]),
        p([
          'Each language has its purpose, however humble.',
          ' Each language expresses the Yin and Yang of software.',
          ' Each language has its place within the Tao.',
        ]),
        p([
          'But do not program in ',
          code('COBOL'),
          ' if you can avoid it.'
        ]),
      ]),
      Chapter.new(3, [
        p([
          'In the beginning was the Tao.',
          ' The Tao gave birth to Space and Time.',
        ]),
        p('Therefore Space and Time are the Yin and Yang of programming.'),
        p([
          'Programmers that do not comprehend the Tao are always running out of time and space for their programs.',
          ' Programmers that comprehend the Tao always have enough time and space to accomplish their goals.',
        ]),
        p('How could it be otherwise?'),
      ]),
      Chapter.new(4, [
        p([
          'The wise programmer is told about Tao and follows it.',
          ' The average programmer is told about Tao and searches for it.',
          ' The foolish programmer is told about Tao and laughs at it.',
        ]),
        p('If it were not for laughter, there would be no Tao.'),
        p([
          'The highest sounds are hardest to hear.',
          ' Going forward is a way to retreat.',
          ' Great talent shows itself late in life.',
          ' Even a perfect program still has bugs.',
        ]),
      ]),
    ]
  ),
];
