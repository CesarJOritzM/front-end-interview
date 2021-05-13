import React from 'react';
import Tab from './Tap';

const tabContent = [
  {
    title: 'Overview',
    content: `For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.`,
  },
  {
    title: 'Features',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima molestiae ipsum voluptatibus odio consequatur obcaecati commodi, consectetur, omnis accusantium quo labore hic! Exercitationem molestiae, facere sit at asperiores inventore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima molestiae ipsum voluptatibus odio consequatur obcaecati commodi, consectetur, omnis accusantium quo labore hic! Exercitationem molestiae, facere sit at asperiores inventore?',
  },
  {
    title: "What's in the box?",
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima molestiae ipsum voluptatibus odio consequatur obcaecati commodi, consectetur, omnis accusantium quo labore hic! Exercitationem molestiae, facere sit at asperiores inventore?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima molestiae ipsum voluptatibus odio consequatur obcaecati commodi, consectetur, omnis accusantium quo labore hic! Exercitationem molestiae, facere sit at asperiores inventore?',
  },
];

const SimpleTabs = () => {
  return (
    <>
      <div className="row text-left">
        <Tab>
          {tabContent.map((tab, idx) => (
            <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
              {tab.content}
            </Tab.TabPane>
          ))}
        </Tab>
      </div>
    </>
  );
};

export default SimpleTabs;
