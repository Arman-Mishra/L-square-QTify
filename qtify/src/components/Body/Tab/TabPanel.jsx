import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./tabPanel.module.css";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabPanel = ({ data, changeGenre }) => {
  const [value, setValue] = useState("All");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeGenre(event.target.innerText);
  };

  let countTab = 1;
  return (
    <Box sx={{ width: "fit-content", mb: 2 }}>
      <Box>
        <Tabs
          value={value}
          TabIndicatorProps={{
            style: {
              backgroundColor: "var(--color-primary)",
            },
          }}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <Tab
            value="All"
            label="All"
            className={styles.text}
            {...a11yProps(0)}
          />
          {data && data.length !== 0
            ? data.map((item) => {
                return (
                  <Tab
                    key={item.key}
                    value={item.label}
                    label={item.label}
                    className={styles.text}
                    {...a11yProps(countTab++)}
                  />
                );
              })
            : []}
        </Tabs>
      </Box>
    </Box>
  );
};

export default TabPanel;
