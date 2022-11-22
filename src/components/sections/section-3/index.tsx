import "./style.css";
import { Text, Card, Collapse } from "@nextui-org/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaAngellist } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import { data, IExperienceData } from "../../../data";
import { useState } from "react";

const SectionThree = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div id="section-3">
      <Text css={{ marginBottom: "$10" }}>02. Where I’ve Worked</Text>
      <VerticalTimeline lineColor="#2f2e2e">
        {data.experience.map(
          ({ companyName, place, date, desc, position }: IExperienceData) => {
            return (
              <VerticalTimelineElement
                contentStyle={{
                  background: "#2f2e2e",
                  borderColor: "black",
                  color: "black",
                }}
                date={date}
                dateClassName="dateClassName"
                iconStyle={{
                  background: "#2f2e2e",
                  color: "black",
                }}
                icon={<FaAngellist style={{ color: "white" }} />}
              >
                <Card
                  css={{ boxShadow: "none", width: "100%" }}
                  isHoverable
                  variant="bordered"
                >
                  <Card.Body>
                    <Collapse
                      title={
                        <div>
                          <Text size="$xl">{`${companyName} - ${position}`}</Text>
                          <Text>{place}</Text>
                        </div>
                      }
                      divider={false}
                      subtitle={
                        expanded ? (
                          <Text
                            css={{
                              fontSize: "0.9rem !important",
                              color: "#6e6a6a",
                            }}
                          >
                            Read less
                          </Text>
                        ) : (
                          <Text
                            css={{
                              fontSize: "0.9rem !important",
                              color: "#6e6a6a",
                            }}
                          >
                            Read more
                          </Text>
                        )
                      }
                      expanded={expanded}
                      onClick={() => setExpanded(!expanded)}
                    >
                      {desc.map((info) => {
                        return (
                          <Text size="$xs">
                            <span color="#6e6a6a">•</span> {info}
                          </Text>
                        );
                      })}
                    </Collapse>
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
