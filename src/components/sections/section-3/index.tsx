import { Text, Card } from "@nextui-org/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CardOne from "../../Cards/CardOne";

const SectionThree = () => {
  return (
    <div id="section-3">
      <Text>03. Where I’ve Worked</Text>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "transparent" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
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
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </Card.Body>
          </Card>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "transparent" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <Card
            css={{ mw: "400px", boxShadow: "none" }}
            isHoverable
            variant="bordered"
          >
            <Card.Body>
              {/* <Text>A basic card</Text> */}
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </Card.Body>
          </Card>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default SectionThree;
