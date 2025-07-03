import { Link } from 'react-router-dom';

const Index = () => {
  const arr = {
    image1: './../new1.png',
    image2: './../new2.png',
    image3: './../new3.png',
    alt1: '',
    alt2: '',
    alt3: '',
    title: 'STAND BY ME and EXIT SIGN at Korzo Theater in The Hague',
    date: '25/05/25',
    link_name: 'Link to the original source',
    href: '',
    text1:
      'At The Hague’s Korzo Theatre, a thoughtfully curated double bill brings together two choreographers—Ukrainian Vladyslav Detiuchenko and Dutch artist Zino Schat—for a compelling exploration of human experience through contrasting lenses. While vastly different in tone and movement language, Stand By Me and Exit Sign together form a powerful meditation on longing, collapse, and the structures—both internal and external—that shape us.\n' +
      'In Stand By Me, Detiuchenko performs alongside dancer and assistant choreographer Veronika Rakitina. The duet unfolds like a ritual of memory, soaked in melancholy and introspection. The work is not driven by plot but by atmosphere, drawing comparisons to Tarkovsky’s films or Pina Bausch’s dreamlike landscapes. Movements circle back on themselves; gestures stretch toward connection but fade before resolution. The choreography suggests that the dancers are being moved by memory itself rather than dancing intentionally. One lift, for instance, collapses mid-air—a quiet metaphor for something unsustainable, like love, or perhaps the attempt to hold on to something that’s already gone.',
    text2:
      'The minimal set design by Petrovich and the moody, flickering lighting by Rosbag intensify this ghostly mood, while a haunting score by Yurii Shepeta and Maxim Shalygin wraps the performance in a sonic shroud of longing and loss. While at times abstract and elusive, the emotional sincerity of the performers holds the audience in a shared space of remembrance.\n' +
      'Then comes Exit Sign, and the entire energy of the evening shifts. Zino Schat, drawing from his roots in street and battle dance, presents a physically intense, socially charged work that critiques hierarchical systems of power. The movement vocabulary—rich in hip-hop and krump—is aggressive, urgent, and performed with full-body commitment by the cast. The piece recalls the political tension of Hofesh Shechter’s Political Mother, though less sonically abrasive.\n' +
      'Through repeated motifs and escalating dynamics, Exit Sign hammers home its message: power corrupts, systems repeat, individuals are broken down. At times, this message risks feeling overemphasized, but the raw force and clarity of the choreography keep it impactful.\n' +
      'Together, the two pieces offer a stark dual perspective. Stand By Me explores the collapse of the individual spirit, while Exit Sign exposes the machinery of societal control. One looks inward; the other outward. Both, however, circle the same essential question: what happens when we lose our way—emotionally, morally, or politically?',
  };

  const {
    image1,
    image2,
    image3,
    alt1,
    alt2,
    alt3,
    title,
    date,
    link_name,
    href,
    text1,
    text2,
  } = arr || {};

  return (
    <div className="relative container mx-auto min-h-[730px] max-w-[1202px] overflow-hidden px-4 pt-[50] pb-[50px] lg:pt-[161px]">
      <div className="grid grid-cols-1 gap-x-[30px] lg:grid-cols-[570px_1fr]">
        <div className="mt-0 h-[457px] lg:-mt-[62px]">
          <img
            src={image1}
            alt={alt1}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <h5 className="mt-[1.625rem] text-2xl leading-[27px] font-semibold tracking-[2px] uppercase">
            {title}
          </h5>
          <p className="mt-[4px] text-lg font-light">{date}</p>
          <div className="mt-5 text-base leading-[110.00000000000001%] font-normal">
            {text1}
          </div>
        </div>
      </div>

      <div className="mt-[50px] grid grid-cols-1 gap-x-[30px] lg:mt-[92px] lg:grid-cols-[1fr_570px]">
        <div className="text-base leading-[110.00000000000001%] font-normal">
          {text2}
        </div>
        <div className="mt-[50px] h-[457px]">
          <img
            src={image2}
            alt={alt2}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="mt-[50px] h-[510px] w-full overflow-hidden lg:mt-[110px]">
        <img
          src={image3}
          alt={alt3}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mt-[38px] w-full text-center text-lg leading-[110.00000000000001%] font-light uppercase">
        <Link
          to={href}
          className="underline transition-all duration-300 hover:no-underline"
        >
          {link_name}
        </Link>
      </div>
    </div>
  );
};

export default Index;
