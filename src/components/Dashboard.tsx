import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

interface Stats {
  students: number;
  teachers: number;
  classes: number;
  subjects: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    students: 0,
    teachers: 0,
    classes: 0,
    subjects: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [studentsSnap, teachersSnap, classesSnap, subjectsSnap] = await Promise.all([
          getDocs(collection(db, 'students')),
          getDocs(collection(db, 'teachers')),
          getDocs(collection(db, 'classes')),
          getDocs(collection(db, 'subjects'))
        ]);

        setStats({
          students: studentsSnap.size,
          teachers: teachersSnap.size,
          classes: classesSnap.size,
          subjects: subjectsSnap.size
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
      setLoading(false);
    }

    fetchStats();
  }, []);

  const statCards = [
    { label: 'Učenici', value: stats.students, icon: '👨‍🎓', color: 'from-blue-500 to-blue-600' },
    { label: 'Nastavnici', value: stats.teachers, icon: '👨‍🏫', color: 'from-green-500 to-green-600' },
    { label: 'Razredi', value: stats.classes, icon: '🏫', color: 'from-purple-500 to-purple-600' },
    { label: 'Predmeti', value: stats.subjects, icon: '📚', color: 'from-orange-500 to-orange-600' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Pregled školskog sustava</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{card.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{card.value}</p>
              </div>
              <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center`}>
                <span className="text-2xl">{card.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Brze akcije</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
              <span className="text-2xl">➕</span>
              <span className="font-medium text-blue-700">Novi učenik</span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition">
              <span className="text-2xl">➕</span>
              <span className="font-medium text-green-700">Novi nastavnik</span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
              <span className="text-2xl">➕</span>
              <span className="font-medium text-purple-700">Novi razred</span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition">
              <span className="text-2xl">➕</span>
              <span className="font-medium text-orange-700">Novi predmet</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">O sustavu</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Realtime baza podataka</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Sigurna autentifikacija</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Moderan UI sa Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Responsive dizajn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
