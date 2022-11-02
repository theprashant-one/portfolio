import { Text, Card } from "@nextui-org/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data, IExperienceData } from "../../../data";
import CardOne from "../../Cards/CardOne";

const SectionThree = () => {
  return (
    <div id="section-3">
      <Text>02. Where I’ve Worked</Text>
      <VerticalTimeline>
        {data.experience.map(
          ({ companyName, place, date, desc, position }: IExperienceData) => {
            return (
              <VerticalTimelineElement
                contentStyle={{ background: "transparent" }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={date}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                style={{ boxShadow: "none" }}
              >
                <Card
                  css={{ mw: "400px", boxShadow: "none" }}
                  isHoverable
                  variant="bordered"
                >
                  <Card.Body>
                    {/* <Text>A basic card</Text> */}
                    <h3 className="vertical-timeline-element-title">
                      {`${companyName} - ${position}`}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {place}
                    </h4>
                    {desc.map((info) => {
                      return <p>- {info}</p>;
                    })}
                  </Card.Body>
                </Card>
              </VerticalTimelineElement>
            );
          }
        )}
      </VerticalTimeline>
    </div>
  );
};

export default SectionThree;
