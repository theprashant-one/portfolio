import { useState, useEffect } from "react";
import { Button, Grid, Modal, Spacer, Text } from "@nextui-org/react";

import { data, IProjectData } from "../../../data";
import CardOne from "../../Cards/CardOne";

const SectionFour = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState<IProjectData>();

  useEffect(() => {
    const modalDataAfterFilter: IProjectData = data.projectData.filter(
      (__, index) => index === cardIndex
    )[0];
    setModalData(modalDataAfterFilter);
  }, [cardIndex]);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div id="section-4">
      <Text css={{ marginBottom: "$10" }}>Some Latest Things I’ve Built</Text>
      <Grid.Container gap={2} justify="flex-start" wrap="wrap">
        {data.projectData.map((item: IProjectData, index) => {
          return (
            <Grid xs={12} sm={6}>
              <CardOne
                {...item}
                setCardIndex={setCardIndex}
                setVisible={setVisible}
                cardIndex={index}
              />
            </Grid>
          );
        })}
      </Grid.Container>
      <Modal
        open={visible}
        onClose={closeHandler}
        blur
        closeButton
        scroll
        width="600px"
        css={{ margin: "$10" }}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {modalData?.projectName}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text
            css={{
              textAlign: "left",
              paddingBottom: "$5",
              fontSize: "$lg",
            }}
          >
            {modalData?.about}
          </Text>
          <span style={{ display: "flex", flexDirection: "column" }}>
            {modalData?.bulletPoints.map((bp) => (
              <Text style={{ textAlign: "left" }}>• {bp}</Text>
            ))}
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="primary"
            auto
            onClick={() => window.open(modalData!.sourceLink, "_blank")}
          >
            Live App
          </Button>
          <Spacer x={1} />
          <Button
            ghost
            color="primary"
            auto
            onClick={() => window.open(modalData!.githubLink, "_blank")}
          >
            GitHub
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SectionFour;
