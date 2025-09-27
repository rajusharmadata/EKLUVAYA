import { Code, Bot, Mic, Heart, ArrowRight, Users } from 'lucide-react';


const clubs = [
  {
    id: 'coding',
    name: 'Coding Club',
    description:
      'Master programming languages, build amazing projects, and prepare for tech careers.',
    icon: Code,
    gradient: 'from-cyan-400 to-blue-500',
    features: ['Web Development', 'Mobile Apps', 'AI/ML Projects', 'Hackathons'],
    memberCount: '120+ Members',
  },
  {
    id: 'robotics',
    name: 'Robotics Club',
    description:
      'Design, build, and program robots while learning cutting-edge automation technologies.',
    icon: Bot,
    gradient: 'from-indigo-400 to-purple-500',
    features: ['Arduino Projects', '3D Printing', 'Competitions', 'IoT Systems'],
    memberCount: '85+ Members',
  },
  {
    id: 'speakers',
    name: 'Speakers Club',
    description:
      'Develop confidence, communication skills, and leadership through public speaking.',
    icon: Mic,
    gradient: 'from-rose-400 to-pink-500',
    features: ['Public Speaking', 'Debates', 'Presentations', 'Leadership'],
    memberCount: '95+ Members',
  },
  {
    id: 'hobbies',
    name: 'Hobbies Club',
    description: 'Explore creative pursuits, arts, photography, and discover new passions.',
    icon: Heart,
    gradient: 'from-amber-400 to-orange-500',
    features: ['Photography', 'Arts & Crafts', 'Music', 'Creative Writing'],
    memberCount: '110+ Members',
  },
];

const ClubsSection = () => {
  return (
    <section
      id="clubs"
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Clubs
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover your passion and connect with students who share your interests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {clubs.map((club, index) => (
            <div
              key={club.id}
              className="group relative rounded-2xl bg-slate-800/60 border border-slate-700 backdrop-blur-sm
                         hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 p-6
                         transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient ring */}
              <div
                className={`w-14 h-14 mb-4 rounded-full flex items-center justify-center
                            bg-gradient-to-br ${club.gradient}`}
              >
                <club.icon className="w-7 h-7 text-white" />
              </div>

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">{club.name}</h3>
                <div className="flex items-center text-sm text-slate-400">
                  <Users className="w-4 h-4 mr-1" />
                  {club.memberCount}
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">{club.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">What you'll learn:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {club.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <button
                variant="outline"
                className="px-8 py-1   border-cyan-400 text-cyan-400
                           hover:bg-cyan-400 hover:text-black
                           transition-all rounded-lg"
              >
                Join {club.name}
                <ArrowRight className="  w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
