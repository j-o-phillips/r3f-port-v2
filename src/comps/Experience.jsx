import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const style = {
    filter: "contrast(100%) brightness(100%)",
    background: `linear-gradient(
        129deg,
        rgba(216, 216, 0, 0.382),
        30%,
        #120d14
      ),
      url("data:image/svg+xml,%3Csvg viewBox='0 0 254 254' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
    `,
  };

  return (
    <div className="bg-[#120d14]">
      <div className=" mx-12  text-white">
        <VerticalTimeline lineColor="white">
          <VerticalTimelineElement
            className="vertical-timeline-element--work shadow-none"
            contentStyle={{
              background: "linear-gradient(130deg, yellow, 20%, #120d14)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2011 - present"
            iconStyle={{
              background: "linear-gradient(130deg, yellow, 50%, #120d14)",
            }}
          >
            <h3 className="vertical-timeline-element-title ">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(130deg, yellow, 20%, #120d14)",
            }}
            date="2010 - 2011"
            iconStyle={{
              background: "linear-gradient(130deg, yellow, 50%, #120d14)",
            }}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(130deg, yellow, 20%, #120d14)",
            }}
            date="2008 - 2010"
            iconStyle={{
              background: "linear-gradient(130deg, yellow, 50%, #120d14)",
            }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;