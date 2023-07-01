import { Book } from './book';
import { Chapter } from './chapter';

import hyperscript from './hyperscript';
const {
  blockquote,
  br,
  code,
  p,
  q,
} = hyperscript;

export const book1 =
  Book.new(
    1,
    'The Silent Void',
    'When you have learned to snatch the error code from the trap frame, it will be time for you to leave.'
  )
  .addChapter(
    Chapter.new(1, [
      p([
        'Something mysterious is formed, born in the silent void.',
        ' ',
        'Waiting alone and unmoving, it is at once still and yet in constant motion.',
        ' ',
        'It is the source of all programs.',
        ' ',
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
    ])
  )
  .addChapter(
    Chapter.new(2, [
      p([
        'The Tao gave birth to machine language.',
        ' ',
        'Machine language gave birth to the assembler.'
      ]),
      p([
        'The assembler gave birth to the compiler.',
        ' ',
        'Now there are ten thousand languages.',
      ]),
      p([
        'Each language has its purpose, however humble.',
        ' ',
        'Each language expresses the Yin and Yang of software.',
        ' ',
        'Each language has its place within the Tao.',
      ]),
      p([
        'But do not program in',
        ' ',
        code('COBOL'),
        ' ',
        'if you can avoid it.'
      ]),
    ])
  )
  .addChapter(
    Chapter.new(3, [
      p([
        'In the beginning was the Tao.',
        ' ',
        'The Tao gave birth to Space and Time.',
      ]),
      p('Therefore Space and Time are the Yin and Yang of programming.'),
      p([
        'Programmers that do not comprehend the Tao are always running out of time and space for their programs.',
        ' ',
        'Programmers that comprehend the Tao always have enough time and space to accomplish their goals.',
      ]),
      p('How could it be otherwise?'),
    ])
  )
  .addChapter(
    Chapter.new(4, [
      p([
        'The wise programmer is told about Tao and follows it.',
        ' ',
        'The average programmer is told about Tao and searches for it.',
        ' ',
        'The foolish programmer is told about Tao and laughs at it.',
      ]),
      p('If it were not for laughter, there would be no Tao.'),
      p([
        'The highest sounds are hardest to hear.',
        ' ',
        'Going forward is a way to retreat.',
        ' ',
        'Great talent shows itself late in life.',
        ' ',
        'Even a perfect program still has bugs.',
      ]),
    ])
  );

export const book2 =
Book.new(
  2,
  'The Ancient Masters',
  'After three days without programming, life becomes meaningless.'
)
  .addChapter(
    Chapter.new(1, [
      p([
        'The programmers of old were mysterious and profound.',
        ' ',
        'We cannot fathom their thoughts, so all we do is describe their appearance.',
      ]),
      blockquote([
        'Aware, like a fox crossing the water.',
        br(),
        'Alert, like a general on the battlefield.',
        br(),
        'Kind, like a hostess greeting her guests.',
        br(),
        'Simple, like uncarved blocks of wood.',
        br(),
        'Opaque, like black pools in darkened caves.',
      ]),
      p('Who can tell the secrets of their hearts and minds?'),
      p('The answer exists only in Tao.'),
    ])
  )
  .addChapter(
    Chapter.new(2, [
      p([
        'The Grand Master Turing once dreamed that he was a machine.',
        ' ',
        'When he awoke, he exclaimed:',
      ]),
      p(q('I don\'t know whether I am Turing dreaming that I am a machine, or a machine dreaming that I am Turing!')),
    ])
  )
  .addChapter(
    Chapter.new(3, [
      p([
        'A programmer from a very large computer company went to a software conference and then returned to report to his manager, saying:',
        ' ',
        q([
          'What sort of programmers work for other companies?',
          ' ',
          'They behaved badly and were unconcerned with appearances.',
          ' ',
          'Their hair was long and unkempt and their clothes were wrinkled and old.',
          ' ',
          'They crashed our hospitality suite and they made rude noises during my presentation.',
        ]),
      ]),
      p([
        'The manager said:',
        ' ',
        q([
          'I should have never sent you to the conference.',
          ' ',
          'Those programmers live beyond the physical world.',
          ' ',
          'They consider life absurd, an accidental coincidence.',
          ' ',
          'They come and go without knowing limitations.',
          ' ',
          'Without a care, they live only for their programs.',
          ' ',
          'Why should they bother with social conventions?',
          br(),
          br(),
          'They are alive within the Tao.',
        ]),
      ]),
    ])
  )
  .addChapter(
    Chapter.new(4, [
      p([
        'A novice asked the Master:',
        ' ',
        q('Here is a programmer that never designs, documents or tests his programs.'),
        ' ',
        'Yet all who know him consider him one of the best programmers in the world.',
        ' ',
        'Why is this?',
      ]),
      p([
        'The Master replied:',
        ' ',
        q([
          'That programmer has mastered the Tao.',
          ' ',
          'He has gone beyond the need for design; he does not become angry when the system crashes, but accepts the universe without concern.',
          ' ',
          'He has gone beyond the need for documentation; he no longer cares if anyone else sees his code.',
          ' ',
          'He has gone beyond the need for testing; each of his programs are perfect within themselves, serene and elegant, their purpose self-evident.',
          ' ',
          'Truly, he has entered the mystery of Tao.',
        ]),
      ]),
    ])
  );

export const book3 =
  Book.new(
    3,
    'Design',
    'When a program is being tested, it is too late to make design changes.'
  )
  .addChapter(
    Chapter.new(1, [
      p([
        'There once was a man who went to a computer trade show.',
        ' ',
        'Each day as he entered, the man told the guard at the door:',
      ]),
      p(q([
        'I am a great thief, renowned for my feats of shoplifting.',
        ' ',
        'Be forewarned, for this trade show shall not escape unplundered.',
      ])),
      p([
        'This speech disturbed the guard greatly, because there were millions of dollars of computer equipment inside, so he watched the man carefully.',
        ' ',
        'But the man merely wandered from booth to booth, humming quietly to himself.',
      ]),
      p('When the man left, the guard took him aside and searched his clothes, but nothing was to be found.'),
      p([
        'On the next day of the trade show, the man returned and chided the guard, saying:',
        ' ',
        q('I escaped with a vast booty yesterday, but today will be even better.'),
        ' ',
        'So the guard watched him ever more closely, but to no avail.',
      ]),
      p([
        'On the final day of the trade show, the guard could restrain his curiosity no longer.',
        ' ',
        q('Sir Thief,'),
        ' ',
        'he said,',
        ' ',
        q([
          'I am so perplexed, I cannot live in peace.',
          ' ',
          'Please enlighten me.',
          ' ',
          'What is it that you are stealing?',
        ]),
      ]),
      p([
        'The man smiled.',
        ' ',
        q('I am stealing ideas,'),
        ' ',
        'he said.',
      ]),
    ])
  )
  .addChapter(
    Chapter.new(2, [
      'There once was a Master Programmer who wrote unstructured programs.',
      ' ',
      'A novice programmer, seeking to imitate him, also began to write unstructured programs.',
      ' ',
      'When the novice asked the Master to evaluate his progress, the Master criticized him for writing unstructured programs, saying,',
      ' ',
      q([
        'What is appropriate for the Master is not appropriate for the novice.',
        ' ',
        'You must understand Tao before transcending structure.',
      ]),
    ])
  )
  .addChapter(
    Chapter.new(3, [
      p([
        'There was once a programmer who was attached to the court of the warlord of Wu.',
        ' ',
        'The warlord asked the programmer:',
        ' ',
        q('Which is easier to design: an accounting package or an operating system?'),
      ]),
      p([
        q('An operating system,'),
        ' ',
        'replied the programmer.',
      ]),
      p([
        'The warlord uttered an exclamation of disbelief.',
        ' ',
        q('Surely an accounting package is trivial next to the complexity of an operating system,'),
        ' ',
        'he said.'
      ]),
      p([
        q('Not so,'),
        ' ',
        'said the programmer,',
        ' ',
        q([
          'When designing an accounting package, the programmer operates as a mediator between people having different ideas:',
          ' ',
          'how it must operate, how its reports must appear, and how it must conform to the tax laws.',
          ' ',
          'By contrast, an operating system is not limited by outside appearances.',
          ' ',
          'When designing an operating system, the programmer seeks the simplest harmony between machine and ideas.',
          ' ',
          'This is why an operating system is easier to design.',
        ]),
        p([
          'The warlord of Wu nodded and smiled.',
          ' ',
          q('That is all good and well, but which is easier to debug?'),
        ]),
        p('The programmer made no reply.'),
      ])
    ])
  )
  .addChapter(
    Chapter.new(4, [
    ])
  );

export const book4 =
  Book.new(
    4,
    'Coding',
    'A well-written program is its own Heaven; a poorly-written program is its own Hell.'
  )
  .addChapter(
    Chapter.new(1, [
    ])
  )
  .addChapter(
    Chapter.new(2, [
    ])
  )
  .addChapter(
    Chapter.new(3, [
    ])
  )
  .addChapter(
    Chapter.new(4, [
    ])
  );

export const book5 =
  Book.new(
    5,
    'Maintenance',
    'Though a program be but three lines long, someday it will have to be maintained.',
  )
  .addChapter(
    Chapter.new(1, [
    ])
  )
  .addChapter(
    Chapter.new(2, [
    ])
  )
  .addChapter(
    Chapter.new(3, [
    ])
  )
  .addChapter(
    Chapter.new(4, [
    ])
  );

export const book6 =
  Book.new(
    6,
    'Management',
    'Let the programmers be many and the managers few -- then all will be productive.'
  )
  .addChapter(
    Chapter.new(1, [
    ])
  )
  .addChapter(
    Chapter.new(2, [
    ])
  )
  .addChapter(
    Chapter.new(3, [
    ])
  )
  .addChapter(
    Chapter.new(4, [
    ])
  );

export const book7 =
  Book.new(
    7,
    'Corporate Wisdom',
    'You can demonstrate a program for a corporate executive, but you can\'t make him computer literate.'
  )
  .addChapter(
    Chapter.new(1, [
    ])
  )
  .addChapter(
    Chapter.new(2, [
    ])
  )
  .addChapter(
    Chapter.new(3, [
    ])
  )
  .addChapter(
    Chapter.new(4, [
    ])
  );

export const book8 =
  Book.new(
    8,
    'Hardware and Software',
    'Without the wind, the grass does not move. Without software hardware is useless.'
  )
  .addChapter(
    Chapter.new(1, [
    ])
  )
  .addChapter(
    Chapter.new(2, [
    ])
  )
  .addChapter(
    Chapter.new(3, [
    ])
  )
  .addChapter(
    Chapter.new(4, [
    ])
  );

export const book9 =
  Book.new(
    9,
    'Epilogue',
    'Time for you to leave.',
  );

export const pile = [
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
];

export default pile;
