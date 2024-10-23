// components/Approach.tsx
import Section from './Section';

export default function Approach() {
  return (
    <Section id="approach" title="The Approach">
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mt-8">
            Getting to Know You
          </h3>
          <p className="mt-4">
            Our journey together begins with understanding yours. We meet to hear your story—how you met, the milestones you’ve shared, and your dreams for the future. By learning about the family and friends who will join you, we ensure we capture the moments that matter most.
          </p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mt-8">
            Your Wedding Day
          </h3>
          <p className="mt-4">
            On your wedding day, we’re the unobtrusive observers. We arrive early, well-versed in your itinerary and expectations. Dressed respectfully, we blend into the background, allowing you to be fully present. Our eyes are always open for the fleeting moments—the heartfelt greetings, the quiet tears during vows, the candid laughter. We focus on genuine emotions, helping you feel at ease so we can capture your true selves.
          </p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mt-8">
            Crafting Your Story
          </h3>
          <p className="mt-4">
            After the festivities, we immerse ourselves in your footage, spending countless hours weaving together the emotions and moments into a film that tells your unique story. This isn’t just a video; it’s the first chapter of your family’s legacy.
          </p>
        </div>
      </div>
    </Section>
  );
}