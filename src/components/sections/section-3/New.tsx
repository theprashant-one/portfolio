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

const SectionThreeNew = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div id="section-3">
      <Text css={{ marginBottom: "$10" }}>Where I’ve Worked</Text>
      {data.experience.map(
        ({ companyName, place, date, desc, position }: IExperienceData) => {
          return (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                css={{
                  boxShadow: "none",
                  "@smMax": {
                    width: "100%",
                  },
                  "@smMin": {
                    width: "70%",
                  },
                }}
                isHoverable
                variant="bordered"
              >
                <Card.Body>
                  <Collapse
                    title={
                      <div>
                        <Text
                          size="$2xl"
                          weight={"bold"}
                        >{`${companyName} - ${position}`}</Text>
                        <Text
                          size="$md"
                          style={{ opacity: 0.7 }}
                        >{`( ${date} )`}</Text>
                        <Text size="$xl">{place}</Text>
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
                        <Text size="$xl">
                          <span color="#6e6a6a">•</span> {info}
                        </Text>
                      );
                    })}
                  </Collapse>
                </Card.Body>
              </Card>
            </div>
          );
        }
      )}
    </div>
  );
};

export default SectionThreeNew;
