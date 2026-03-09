import React from 'react';
import Team from '../components/sections/Team';
import PageHero from '../components/utils/PageHero';

const TeamPage = () => (
  <div>
    <PageHero
      title="Unser Team"
      subtitle="Sechs Leidenschaften. Eine Vision. Handwerkliche Exzellenz."
      image="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=1400&h=400&fit=crop&crop=top"
    />
    <Team />
  </div>
);

export default TeamPage;
