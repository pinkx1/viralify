import React from "react";
import "./TeamSection.css";
import profile1 from "../assets/images/profile1.png";
import linkedinIcon from "../assets/images/linkedin.png";

const TeamCard = ({ image, name, position, description, linkedinUrl }) => (
  <div className="team-card">
    <div className="person-div">
      <div className="person-card-div">
        <div className="profile-image-wrapper">
          <img className="profile-image" src={image} alt={`${name}'s profile`} />
        </div>
        <a
          className="linkedin-link"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="linkedin-icon" src={linkedinIcon} alt="LinkedIn icon" />
        </a>
        <div className="name-position-div">
          <h3 className="name">{name}</h3>
          <p className="position">{position}</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="person-exp-card-div">{description}</div>
    </div>
  </div>
);

const TeamSectionComponent = () => {
    const teamData = [
        {
            name: 'John Smith',
            position: 'CEO and Founder',
            description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.',
            image: profile1,
            linkedinUrl: 'https://www.linkedin.com/in/johnsmith'
        },
        {
            name: 'Jane Doe',
            position: 'Director of Operations',
            description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills.',
            image: profile1,
            linkedinUrl: 'https://www.linkedin.com/in/janedoe'
        },
        {
            name: 'Michael Brown',
            position: 'Senior SEO Specialist',
            description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.',
            image: profile1,
            linkedinUrl: 'https://www.linkedin.com/in/michaelbrown'
        },
        {
            name: 'Emily Johnson',
            position: 'PPC Manager',
            description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.',
            image: profile1,
            linkedinUrl: 'https://www.linkedin.com/in/emilyjohnson'
        },
        {
            name: 'Brian Williams',
            position: 'Social Media Specialist',
            description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.',
            image: profile1,
            linkedinUrl: 'https://www.linkedin.com/in/brianwilliams'
        },
        {
            name: 'Sarah Kim',
            position: 'Content Creator',
            description: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.',
            image: profile1,
            linkedinUrl: 'https://www.linkedin.com/in/sarahkim'
        }
    ];

    return (
        <section className="team-section">
          <div className="team-grid">
            {teamData.map((member, index) => (
              <TeamCard
                key={index}
                image={member.image}
                name={member.name}
                position={member.position}
                description={member.description}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
          <div className="button-container">
            <button className="see-all-button">See all team</button>
          </div>
        </section>
      );
    };
    
    export default TeamSectionComponent;