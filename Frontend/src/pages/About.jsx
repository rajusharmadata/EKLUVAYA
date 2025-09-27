import { Target, Users, Trophy, Lightbulb } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '400+',
    label: 'Active Members',
    description: 'Students participating across all clubs',
  },
  {
    icon: Trophy,
    number: '25+',
    label: 'Awards Won',
    description: 'Recognition in competitions and events',
  },
  {
    icon: Lightbulb,
    number: '100+',
    label: 'Projects',
    description: 'Innovative solutions and creative works',
  },
  {
    icon: Target,
    number: '4',
    label: 'Specialized Clubs',
    description: 'Focused communities for every interest',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              EKLUVYA
            </span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            EKLUVYA Club at Handale College is more than just a student organization – we&apos;re a
            community of innovators, creators, and leaders shaping the future through technology,
            communication, and creative expression.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-all animate-fade-up backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-slate-100 mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            To foster innovation, creativity, and personal growth by providing students with
            opportunities to explore their passions, develop technical skills, and build lasting
            connections that will shape their careers and lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
