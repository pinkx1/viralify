import React from 'react';
import styled from 'styled-components';
import profile1 from '../assets/images/profile1.png';
import linkedinIcon from '../assets/images/linkedin.png';

const TeamSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding-bottom: 50px;
    position: relative;
`;

const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    width: 100%;
    max-width: 1240px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.div`
    background: #FFFFFF;
    border: 1px solid #191A23;
    box-shadow: 0px 5px 0px #191A23;
    border-radius: 45px;
    padding: 40px 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PersonDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const PersonCardDiv = styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
    gap: 20px; /* Отступ между фото и блоком с именем и должностью */
`;

const ProfileImageWrapper = styled.div`
    width: 80px;
    height: 80px;
    background-color: #b9ff66;
    border-radius: 50%;
    overflow: hidden;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: auto;
`;

const LinkedInLink = styled.a`
    position: absolute;
    top: 0;
    right: 0;
`;

const LinkedInIcon = styled.img`
    width: 20px;
    height: 20px;
`;

const NamePositionDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
`;

const Name = styled.h3`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin: 0;
`;

const Position = styled.p`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    color: #666;
    margin: 0;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #000;
    margin: 28px 0;
`;

const PersonExpCardDiv = styled.div`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    color: #000;
    text-align: left;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 1240px;
    margin-top: 20px;
`;

const SeeAllButton = styled.button`
    padding: 15px 30px;
    background-color: #191A23;
    color: #FFFFFF;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 500;
    border: none;
    border-radius: 14px;
    cursor: pointer;

    &:hover {
        background-color: #333333;
    }
`;

const TeamCard = ({ image, name, position, description, linkedinUrl }) => (
    <Card>
        <PersonDiv>
            <PersonCardDiv>
                <ProfileImageWrapper>
                    <ProfileImage src={image} alt={`${name}'s profile`} />
                </ProfileImageWrapper>
                <LinkedInLink href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon src={linkedinIcon} alt="LinkedIn icon" />
                </LinkedInLink>
                <NamePositionDiv>
                    <Name>{name}</Name>
                    <Position>{position}</Position>
                </NamePositionDiv>
            </PersonCardDiv>
            <Divider />
            <PersonExpCardDiv>{description}</PersonExpCardDiv>
        </PersonDiv>
    </Card>
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
        <TeamSection>
            <TeamGrid>
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
            </TeamGrid>
            <ButtonContainer>
                <SeeAllButton>See all team</SeeAllButton>
            </ButtonContainer>
        </TeamSection>
    );
};

export default TeamSectionComponent;
