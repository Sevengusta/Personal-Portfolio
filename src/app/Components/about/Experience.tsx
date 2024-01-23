'use client'
import React from "react";
import { Font } from "../comuns/Font";
import { experiencesData } from "../data/experiencesData";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LuGraduationCap } from "react-icons/lu";
import { useTheme } from "@/app/contexts/LanguageContexts";


const Experience = () => {
  const themeCtx = useTheme();

  return (
    <div className="">
      <h3
        className="
          mt-4
          mb-4
          text-2xl 
          md:text-3xl 
          xl:text-center

          "
      >
        {themeCtx?.theme === 'Portuguese' && <Font>Experiências</Font>}
        {themeCtx?.theme === 'English' && <Font>Experiences</Font>}
        
      </h3>
      <VerticalTimeline >
        {
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
              contentStyle={{
                 background: 'rgb(75 85 99)', 
                 color: '#fff',
                 boxShadow: 'none',
                 border: "1px solid rgba(0, 0, 0 ,0.05)",
                }}
              date={themeCtx?.theme === 'Portuguese' ? item.date_PT : themeCtx?.theme === 'English' ? item.date_US : undefined}

              
              icon={item.icon}
              iconStyle={{ 
                background: 'rgb(75 85 99)',
                color: '#fff',
                fontSize: '1.5rem'
              }}

              contentArrowStyle={{ borderRight: '0.4rem solid rgb(75 85 99) '}}

               >
                <h3 className="
                  text-base  
                  sm:text-xl
                  md:text-2xl
                "
                >
                  {themeCtx?.theme === 'Portuguese' && <Font>{item.title_PT}</Font>}
                  {themeCtx?.theme === 'English' && <Font>{item.title_US}</Font>}

                </h3>
                <p className="font-normal !mt-1" >{item.location}</p>
                {themeCtx?.theme === 'Portuguese' && <p className="!font-normal !mt-0" >{item.description_PT}</p>}
                {themeCtx?.theme === 'English' && <p className="!font-normal !mt-0" >{item.description_US}</p>}
              </VerticalTimelineElement>

            </React.Fragment>
          ))
        }
      </VerticalTimeline>
      
    </div>
  );
};

export default Experience;
