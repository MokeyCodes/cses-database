'use client';

import { useEffect, useState } from 'react';
import ExperienceProp from '../../components/ExperienceProp';

type Experience = {
  _id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
};

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const res = await fetch('/api/experience');
        const data = await res.json();
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experience:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchExperiences();
  }, []);

  if (loading) return <p>Loading experience...</p>;

  return (
    <main>
      <h1>Experience</h1>

      {experiences.map((experience) => (
        <ExperienceProp
          key={experience._id}
          experience={experience}
        />
      ))}
    </main>
  );
}
