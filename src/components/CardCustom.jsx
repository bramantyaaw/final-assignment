import { Card, Col } from "react-bootstrap";
import no_img from "../assets/images/No_Image_Available.jpg";

const CardCustom = ({ data }) => {
  return (
    <Col className={"py-3"}>
      <Card className="cards">
        <Card.Img
          variant="top"
          height={300}
          src={data?.Poster !== "N/A" ? data?.Poster : no_img}
        />
        <Card.Body>
          <Card.Title>{data?.Title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardCustom;
