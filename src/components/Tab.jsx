import React, { useEffect, useState } from 'react';
import styles from '../assets/styles/components/Tab.module.scss';

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <div className={styles.tabs}>
      <ul>
        {tabsData.map(({ tab }, idx) => (
          <li key={idx} className="nav-item">
            <a
              className={
                idx === activeTab ? `${styles.active}` : `${styles.desactive}`
              }
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.content}>
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tab.TabPane = TabPane;

export default Tab;
