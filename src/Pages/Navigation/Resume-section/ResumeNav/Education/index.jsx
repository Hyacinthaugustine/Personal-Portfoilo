import React from "react";
import TimeLine from "../TimeLine";
import ResumeCard from "../../../../../components/ResumeCard";

const educationData = [
  {
    timeLine: {
      startingDate: "2017",
      finishingDate: "2020",
      experienceTitle: "education quality",
    },
    cards: [
      {
        educationTitle: "computer Science",
        eduactionPlaceAndYear: "University of DVI (1997 - 2001)",
        educationDescriptionText:
          "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",

        rating: "4.8/5",
      },
      {
        educationTitle: "Tips For Personal Portfolio",
        eduactionPlaceAndYear: "University of Studies (1997 - 2001)",
        educationDescriptionText:
          "If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
        rating: "4.5/5",
      },
      {
        educationTitle: "Examples Of Personal Portfolio",
        eduactionPlaceAndYear: "College of Studies (2000 - 2002)",
        educationDescriptionText:
          "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
        rating: "4.7/5",
      },
    ],
  },
  {
    timeLine: {
      startingDate: "2020",
      finishingDate: "Till Now",
      experienceTitle: "Build Customer UI",
    },
    cards: [
      {
        educationTitle: "Diploma in Web Development",
        eduactionPlaceAndYear: "BSE In CSE (2004 - 2008)",
        educationDescriptionText:
          "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
        rating: "4.2/5",
      },
      {
        educationTitle: "The Personal Portfolio Mystery",
        eduactionPlaceAndYear: "Job at Rainbow-Themes (2008 - 2016)",
        educationDescriptionText:
          "Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
        rating: "4.86/5",
      },
      {
        educationTitle: "Diploma in Computer Science",
        eduactionPlaceAndYear: "Works at Plugin Development (2016 - 2020)",
        educationDescriptionText:
          "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
        rating: "4.8/5",
      },
    ],
  },
];

const Education = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10">
      {educationData.map((item, index) => (
        <div key={index}>
          <TimeLine
            StartingDate={item.timeLine.startingDate}
            FinishingDate={item.timeLine.finishingDate}
            ExperienceTitle={item.timeLine.experienceTitle}
          />
          <div className="flex gap-7">
            <div className="border-4 border-gray-200"></div>
            <div className="flex flex-col gap-12">
              {item.cards.map((card, cardIndex) => (
                <ResumeCard
                  key={cardIndex}
                  educationTitle={card.educationTitle}
                  eduactionPlaceAndYear={card.eduactionPlaceAndYear}
                  educationDescriptionText={card.educationDescriptionText}
                  rating={card.rating}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
