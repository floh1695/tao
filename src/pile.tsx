import { Book } from '@/book';

export const book1 =
  Book.new(
    1,
    'The Silent Void',
    'When you have learned to snatch the error code from the trap frame, it will be time for you to leave.'
  )
  .addNextChapter(
    <>
      <p>Something mysterious is formed, born in the silent void. Waiting alone and unmoving, it is at once still and yet in constant motion. It is the source of all programs. I do not know its name, so I will call it the Tao of Programming.</p>
      <blockquote>
        <p>If the Tao is great, then the operating system is great.</p>
        <p>If the operating system is great, then the compiler is great.</p>
        <p>If the compiler is great, then the application is great.</p>
        <p>The user is pleased, and there is harmony in the world.</p>
      </blockquote>
      <p>The Tao of Programming flows far away and returns on the wind of morning.</p>
    </>
  )
  .addNextChapter(
    <>
      <p>The Tao gave birth to machine language. Machine language gave birth to the assembler.</p>
      <p>The assembler gave birth to the compiler. Now there are ten thousand languages.</p>
      <p>Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao.</p>
      <p>But do not program in <code>COBOL</code> if you can avoid it.</p>
    </>
  )
  .addNextChapter(
    <>
      <p>In the beginning was the Tao. The Tao gave birth to Space and Time.</p>
      <p>Therefore Space and Time are the Yin and Yang of programming.</p>
      <p>Programmers that do not comprehend the Tao are always running out of time and space for their programs. Programmers that comprehend the Tao always have enough time and space to accomplish their goals.</p>
      <p>How could it be otherwise?</p>
    </>
  )
  .addNextChapter(
    <>
      <p>The wise programmer is told about Tao and follows it. The average programmer is told about Tao and searches for it. The foolish programmer is told about Tao and laughs at it.</p>
      <p>If it were not for laughter, there would be no Tao.</p>
      <p>The highest sounds are hardest to hear. Going forward is a way to retreat. Great talent shows itself late in life. Even a perfect program still has bugs.</p>
    </>
  );

export const book2 =
  Book.new(
    2,
    'The Ancient Masters',
    'After three days without programming, life becomes meaningless.'
  )
  .addNextChapter(
    <>
      <p>The programmers of old were mysterious and profound. We cannot fathom their thoughts, so all we do is describe their appearance.</p>
      <blockquote>
        <p>Aware, like a fox crossing the water.</p>
        <p>Alert, like a general on the battlefield.</p>
        <p>Kind, like a hostess greeting her guests.</p>
        <p>Simple, like uncarved blocks of wood.</p>
        <p>Opaque, like black pools in darkened caves.</p>
      </blockquote>
      <p>Who can tell the secrets of their hearts and minds?</p>
      <p>The answer exists only in Tao.</p>
    </>
  )
  .addNextChapter(
    <>
      <p>The Grand Master Turing once dreamed that he was a machine. When he awoke, he exclaimed:</p>
      <q>I don't know whether I am Turing dreaming that I am a machine, or a machine dreaming that I am Turing!</q>
    </>
  )
  .addNextChapter(
    <>
      <p>A programmer from a very large computer company went to a software conference and then returned to report to his manager, saying: What sort of programmers work for other companies? They behaved badly and were unconcerned with appearances. Their hair was long and unkempt and their clothes were wrinkled and old. They crashed our hospitality suite and they made rude noises during my presentation.</p>
      <p>
        The manager said: <q>
          I should have never sent you to the conference. Those programmers live beyond the physical world. They consider life absurd, an accidental coincidence. They come and go without knowing limitations. Without a care, they live only for their programs. Why should they bother with social conventions?
          <br />
          <br />
          They are alive within the Tao.
        </q>
      </p>
    </>
  )
  .addNextChapter(
    <>
      <p>A novice asked the Master: <q>Here is a programmer that never designs, documents or tests his programs. Yet all who know him consider him one of the best programmers in the world. Why is this?</q></p>
      <p>The Master replied: <q>That programmer has mastered the Tao. He has gone beyond the need for design; he does not become angry when the system crashes, but accepts the universe without concern. He has gone beyond the need for documentation; he no longer cares if anyone else sees his code. He has gone beyond the need for testing; each of his programs are perfect within themselves, serene and elegant, their purpose self-evident. Truly, he has entered the mystery of Tao.</q></p>
    </>
  )

export const book3 =
  Book.new(
    3,
    'Design',
    'When a program is being tested, it is too late to make design changes.'
  )
  // .addChapter(
  //   Chapter.new(1, [
  //     sentences([
  //       'There once was a man who went to a computer trade show.',
  //       'Each day as he entered, the man told the guard at the door:',
  //     ], {}),
  //     sentences(q(sentences([
  //       'I am a great thief, renowned for my feats of shoplifting.',
  //       'Be forewarned, for this trade show shall not escape unplundered.',
  //     ], { wrapper: span })), {}),
  //     sentences([
  //       'This speech disturbed the guard greatly, because there were millions of dollars of computer equipment inside, so he watched the man carefully.',
  //       'But the man merely wandered from booth to booth, humming quietly to himself.',
  //     ], {}),
  //     sentences('When the man left, the guard took him aside and searched his clothes, but nothing was to be found.', {}),
  //     sentences([
  //       'On the next day of the trade show, the man returned and chided the guard, saying:',
  //       q('I escaped with a vast booty yesterday, but today will be even better.'),
  //       'So the guard watched him ever more closely, but to no avail.',
  //     ], {}),
  //     sentences([
  //       'On the final day of the trade show, the guard could restrain his curiosity no longer.',
  //       q('Sir Thief,'),
  //       'he said,',
  //       q(sentences([
  //         'I am so perplexed, I cannot live in peace.',
  //         'Please enlighten me.',
  //         'What is it that you are stealing?',
  //       ], { wrapper: span })),
  //     ], {}),
  //     sentences([
  //       'The man smiled.',
  //       q('I am stealing ideas,'),
  //       'he said.',
  //     ], {}),
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(2, [
  //     sentences([
  //       'There once was a Master Programmer who wrote unstructured programs.',
  //       'A novice programmer, seeking to imitate him, also began to write unstructured programs.',
  //       'When the novice asked the Master to evaluate his progress, the Master criticized him for writing unstructured programs, saying,',
  //       q(sentences([
  //         'What is appropriate for the Master is not appropriate for the novice.',
  //         'You must understand Tao before transcending structure.',
  //       ], { wrapper: span })),
  //     ], {}),
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(3, [
  //     sentences([
  //       'There was once a programmer who was attached to the court of the warlord of Wu.',
  //       'The warlord asked the programmer:',
  //       q('Which is easier to design: an accounting package or an operating system?'),
  //     ], {}),
  //     sentences([
  //       q('An operating system,'),
  //       'replied the programmer.',
  //     ], {}),
  //     sentences([
  //       'The warlord uttered an exclamation of disbelief.',
  //       q('Surely an accounting package is trivial next to the complexity of an operating system,'),
  //       'he said.'
  //     ], {}),
  //     sentences([
  //       q('Not so,'),
  //       'said the programmer,',
  //       q(sentences([
  //         'When designing an accounting package, the programmer operates as a mediator between people having different ideas:',
  //         'how it must operate, how its reports must appear, and how it must conform to the tax laws.',
  //         'By contrast, an operating system is not limited by outside appearances.',
  //         'When designing an operating system, the programmer seeks the simplest harmony between machine and ideas.',
  //         'This is why an operating system is easier to design.',
  //       ], { wrapper: span })),
  //     ], {}),
  //     sentences([
  //       'The warlord of Wu nodded and smiled.',
  //       q('That is all good and well, but which is easier to debug?'),
  //     ], {}),
  //     sentences('The programmer made no reply.', {}),
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(4, [
  //     sentences([
  //       'A manager went to the Master Programmer and showed him the requirements document for a new application.',
  //       'The manager asked the Master:',
  //       q('How long will it take to design this system if I assign five programmers to it?'),
  //     ], {}),
  //     sentences([
  //       q('It will take one year,'),
  //       'said the Master promptly.'
  //     ], {}),
  //     sentences(q(sentences([
  //       'But we need this system immediately or even sooner!',
  //       'How long will it take if I assign ten programmers to it?',
  //     ], { wrapper: span })), {}),
  //     sentences([
  //       'The Master Programmer frowned.',
  //       q('In that case, it will take two years.'),
  //     ], {}),
  //     sentences(q('And what if I assign a hundred programmers to it?'), {}),
  //     sentences([
  //       'The Master Programmer shrugged.',
  //       q('Then the design will never be completed,'),
  //       'he said.'
  //     ], {}),
  //   ])
  // );

export const book4 =
  Book.new(
    4,
    'Coding',
    'A well-written program is its own Heaven; a poorly-written program is its own Hell.'
  )
  // .addChapter(
  //   Chapter.new(1, [
  //     sentences([
  //       'A program should be light and agile, its subroutines connected like a string of pearls.',
  //       'The spirit and intent of the program should be retained throughout.',
  //       'There should be neither too little nor too much.',
  //       'Neither needless loops nor useless variables; neither lack of structure nor overwhelming rigidity.',
  //     ], {}),
  //     sentences([
  //       'A program should follow the',
  //       q('Law of Least Astonishment.'),
  //       'What is this law?',
  //       'It is simply that the program should always respond to the users in the way that least astonishes them.',
  //     ], {}),
  //     sentences([
  //       'A program, no matter how complex, should act as a single unit.',
  //       'The program should be directed by the logic within rather than by outward appearances.',
  //     ], {}),
  //     sentences([
  //       'If the program fails in these requirements, it will be in a state of disorder and confusion.',
  //       'The only way to correct this is to rewrite the program.',
  //     ], {}),
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(2, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(3, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(4, [
  //   ])
  // );

export const book5 =
  Book.new(
    5,
    'Maintenance',
    'Though a program be but three lines long, someday it will have to be maintained.',
  )
  // .addChapter(
  //   Chapter.new(1, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(2, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(3, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(4, [
  //   ])
  // );

export const book6 =
  Book.new(
    6,
    'Management',
    'Let the programmers be many and the managers few -- then all will be productive.'
  )
  // .addChapter(
  //   Chapter.new(1, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(2, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(3, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(4, [
  //   ])
  // );

export const book7 =
  Book.new(
    7,
    'Corporate Wisdom',
    'You can demonstrate a program for a corporate executive, but you can\'t make him computer literate.'
  )
  // .addChapter(
  //   Chapter.new(1, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(2, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(3, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(4, [
  //   ])
  // );

export const book8 =
  Book.new(
    8,
    'Hardware and Software',
    'Without the wind, the grass does not move. Without software hardware is useless.'
  )
  // .addChapter(
  //   Chapter.new(1, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(2, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(3, [
  //   ])
  // )
  // .addChapter(
  //   Chapter.new(4, [
  //   ])
  // );

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
