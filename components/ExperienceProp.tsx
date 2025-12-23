type Experience = {
  _id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
};

type ExperiencePropProps = {
  experience: Experience;
};

export default function ExperienceProp({ experience }: ExperiencePropProps) {
  return (
    <section>
      <h2>{experience.company}</h2>

      <p>
        <strong>{experience.title}</strong> — {experience.location}
      </p>

      <p>
        {experience.startDate} – {experience.endDate ?? 'Present'}
      </p>

      <p>{experience.description}</p>
    </section>
  );
}
