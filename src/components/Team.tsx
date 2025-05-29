import DharaneImg from '../assets/images/Dharane.jpeg';
import SajeevanImg from '../assets/images/Sajeevan.jpeg';
import SanvithaImg from '../assets/images/Sanvitha.png';
import KarthigaImg from '../assets/images/Karthiga.jpeg';
import GokulImg from '../assets/images/Gokul.png';
import SujithaImg from '../assets/images/Sujitha.png';





const team = [
  {
    name: "Dr. Sanvitha Kasthuriarachchi",
    role: "Supervisor",
    email: "sanvitha.k@sliit.lk",
    img: SanvithaImg,
  },
  {
    name: "Karthiga Rajendran",
    role: "Co-Supervisor",
    email: "karthiga.r@sliit.lk",
    img: KarthigaImg,
  },
  {
    name: "Gokul Abisheak",
    role: "Team Leader",
    email: "gokulabisheak12@gmail.com",
    img: GokulImg,
  },
  {
    name: "Sajeevan S",
    role: "Member",
    email: "sajeesiva12@gmail.com",
    img: SajeevanImg,
  },
  {
    name: "Dharane S",
    role: "Member",
    email: "dharanesegar08@gmail.com",
  img: DharaneImg, 
  },
  {
    name: "Sujitha S",
    role: "Member",
    email: "sujithasrikanthan@gmail.com",
    img: SujithaImg,
  }
  
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-green-50 via-white to-green-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-12">💚 Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 group"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto shadow-md mb-4"
              />
              <h3 className="text-lg font-semibold text-green-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-green-600 hover:underline mt-2 block text-sm"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
